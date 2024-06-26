const express = require("express");
const cors = require("cors"); // cross-origin
const bcrypt = require("bcryptjs"); // encrypt
const uuid = require("uuid").v4; // universal id creation
const multer = require("multer"); // file upload
const fs = require("fs"); // file i/o
const sharp = require("sharp"); // image editing
const jwt = require("jsonwebtoken"); // Importa la llibreria jsonwebtoken per a generar i verificar JWT
const cookieparser = require("cookie-parser"); //

const SECRET_KEY = "vols-que-et-punxi-amb-un-punxo"; // to be used in jsonwebtoken creation

const app = express();
app.use(express.json());
app.use(cors());
app.use(cookieparser());

const usersFile = "users.json";
const imagesFolder = "uploads";
const imagesFile = "images.json";

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:4321");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  res.setHeader("Access-Control-Allow-Credentials", "true");
  next();
});

// Funció per llegir els usuaris des del fitxer JSON
function readUsers() {
  const data = fs.readFileSync(usersFile);
  return JSON.parse(data);
}

// Funció per escriure els usuaris al fitxer JSON
function writeUsers(users) {
  fs.writeFileSync(usersFile, JSON.stringify(users, null, 2));
}

// Funció per llegir les imatges des del fitxer JSON
function readImages() {
  const data = fs.readFileSync(imagesFile);
  return JSON.parse(data);
}

// Funció per escriure les imatges al fitxer JSON
function writeUImages(data) {
  fs.writeFileSync(imagesFile, JSON.stringify(data, null, 2));
}

// Middleware per verificar el JWT en la cookie
const checkToken = (req, res, next) => {
  let token = req.cookies?.token; // Obté el token des de la cookie de la petició
  if (!token) {
    token = req.headers["authorization"]?.split(" ")[1]; // Retorna error 401 si no hi ha cap token
  }
  try {
    const decodedToken = jwt.verify(token, SECRET_KEY); // Verifica el token utilitzant la clau secreta
    req.userId = decodedToken.userId; // Estableix l'ID d'usuari a l'objecte de la petició
    next(); // Passa al següent middleware
  } catch (error) {
    return res.status(401).json({ error: "Invalid token" }); // Retorna error 401 si el token és invàlid
  }
};

// LOGIN
// Endpoint per iniciar sessió d'un usuari

app.post("/api/login", (req, res) => {
  const { name, password } = req.body;
  const users = readUsers();

  const user = users.find((user) => user.name === name);
  if (!user || !bcrypt.compareSync(password, user.password)) {
    return res.status(401).json({ error: "Invalid name or password" });
  }

  const token = jwt.sign({ userId: user.id, userName: user.name }, SECRET_KEY, {
    expiresIn: "2h",
  }); // Genera un token JWT vàlid durant 2 hores
  res.cookie("token", token, { httpOnly: false, maxAge: 7200000 }); // Estableix el token com una cookie

  res.json({
    message: "Login successful",
    userId: user.id,
    name: user.name,
    token: token,
  });
});

// REFRESH verifica si token és vàlid
app.get("/api/refresh", checkToken, async (req, res) => {
  const { userId} = req

  const users = readUsers();
  const user = users.find((user) => user.id === userId);
  if (!user) {
    return res.status(401).json({ error: "User not found" });
  }

  return res.json({ id: user.id, name: user.name });
});

// Funció per registrar un nou usuari
app.post("/api/register", (req, res) => {
  const { name, password } = req.body;
  const users = readUsers();

  // Comprovar si l'name ja està en ús
  if (users.find((user) => user.name === name)) {
    return res.status(400).json({ error: "Name already exists" });
  }

  const id = uuid();
  const newUser = { id, name, password: bcrypt.hashSync(password, 8) };
  users.push(newUser);
  writeUsers(users);
  res.json({ message: "User registered successfully" });
});

// Configuració de multer per gestionar la pujada de fitxers
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/"); // Especifica la carpeta de destinació dels fitxers pujats
  },
  filename: function (req, file, cb) {
    cb(null, `${Date.now()}_${file.originalname}`); // Assigna un nom únic als fitxers pujats
  },
});

const upload = multer({ storage: storage }); // Configura multer per a gestionar la pujada d'un únic fitxer amb el camp 'foto'

// Funció per pujar una imatge amb hashtags
app.post(
  "/api/uploadimg",
  checkToken,
  upload.single("image"),
  async (req, res, next) => {
    const { hashtags, descripcion } = req.body;
    const { userId } = req;
    const image = req.file;

    // Redimensionar la imatge abans de desar-la
    try {
      await sharp(image.path)
        .resize({ width: 800 })
        .toFile(`${imagesFolder}/resize/${image.filename}`)
        .then(async () => {
          // Eliminar la imatge original després de redimensionar-la i desar-la
          await fs.unlink(image.path, (err) =>
            err ? console.log(err) : () => {}
          );
        });
    } catch (error) {
      //throw error
      return res.status(500).json({ error: "Failed to process image xx" });
    }

    // Guardar la informació de la imatge al fitxer images.json
    const images = readImages();
    images.push({
      userId: userId,
      date: new Date(),
      filename: image.filename,
      comentario: descripcion,
      hashtags: hashtags,
    });
    fs.writeFileSync(imagesFile, JSON.stringify(images, null, 2));

    res.json({ message: "Image uploaded successfully" });
  }
);

// Endpoint per obtenir les imatges d'un usuari
app.get("/api/images", checkToken, (req, res) => {
  const userId = req.userId;
  const userImages = readImages().filter((image) => image.userId === userId);
  res.json(userImages);
});

app.get("/api/users/:id", checkToken, (req, res, next) => {
  const { id } = req.params;
  const userImages = readUsers().find(img => img.id === id)
  res.json(userImages);
});

// Endpoint per obtenir les imatges d'un usuari
app.get("/api/user/:userId/images", checkToken, (req, res) => {
  const userId = req.params.userId;
  const userImages = readImages().filter((image) => image.userId === userId);
  res.json(userImages);
});

// Enpooint para obtener todas las imagenes
app.get("/api/allimages", (req, res, next) => {
  const allImages = readImages();
  res.json(allImages);
});

// Endpoint per obtenir les imatges per hashtag
app.get("/api/images/:hashtag", checkToken, (req, res) => {
  const hashtag = req.params.hashtag;
  const hashtagNew = '#'+hashtag;

  const hashtagImages = readImages().filter((image) => 
    image.hashtags?.includes(hashtag));
  res.json(hashtagImages);
});

//@TODO
//Crear ruta estàtica per servir imatges a /uploads
app.use("/img", express.static(__dirname + `/uploads/resize`));

// Inicialitzar el servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
