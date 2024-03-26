import { useEffect, useState } from "react";

export const PopUpUpload = ({ setPopUp, token }) => {
  const [hashtag, setHashTag] = useState([]);
  const [errorValidation, setErrorValidation] = useState(null);
  const [nameHashtag, setNameHashtag] = useState("");
  const [descripcion, setDescription] = useState("");
  const [previwImg, setPreviewImg] = useState("");

  const onChangeInput = (value) => {
    setNameHashtag(value);
  };

  const onChangeTextArea = (value) => {
    setDescription(value);
  };

  const addHashTag = () => {
    const name = nameHashtag;

    if (name.length > 0) {
      const isError = name.includes(",");
      setErrorValidation(isError);
    } else {
      setNameHashtag("");
    }
  };

  useEffect(() => {
    if (!errorValidation) {
      // const separaLosHashtags = nameHashtag
      //   .split("#")
      //   .map((e) => "#" + e)
      //   .filter((e, index) => index !== 0);
      setHashTag([...hashtag, nameHashtag]);
      setErrorValidation(true);
      setNameHashtag("");
    }
  }, [errorValidation]);

  const onSubmitImage = async (event) => {
    event.preventDefault();

    const url = "https://ricardhernandez.com/api";

    const data = new FormData();
    const tags = hashtag;
    const file = event.target?.elements?.image.files[0];
    data.append("file", file);
    data.append("hashtags", tags.join(" "));
    // data.append("descripcion", descripcion);

    //Hacer la peticion para hacer el post de upload de la imagen
    const opcions = {
      method: "POST",
      body: data,
      headers: {
        Authorization: `Bearer ${token}`,
      },
      // credentials: "include",
    };

    try {
      const res = await fetch(`${url}/upload`, opcions)
        .then((res) => res.json())
        .then((images) => setPopUp(false))
        .catch((error) => console.log(error));

      const response = await res.json();
    } catch (error) {
      console.log(error.json());
    }
  };

  const onPrevisulizeImg = () => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();

      reader.onload = function (event) {
        setPreviewImg(event.target.result);
      };

      reader.readAsDataURL(file);
    } else {
      setPreviewImg("#");
    }
  };

  return (
    <div className="">
      <div className="fixed">
        <div className="flex justify-center items-center h-full fixed z-50 bg-[#101218]">
          <div className="w-full h-full bg-gradient-to-b from-30% from-[#101218] via-purple-500">
            <div className="flex justify-between w-full px-5">
              {/* <h1 className="text-xl">Upload Image</h1> */}
              {/* <div className="cursor-pointer" onClick={() => window.location.href="/"}>
                X
              </div> */}
            </div>

            <div className="flex flex-col bg-[#101218]">
              <form onSubmit={onSubmitImage} encType="multipart/form-data">
                <div className="px-5 pt-3 pb-3">
                  <img
                    id="previewImage"
                    className="w-30 h-26 border-none rounded-md"
                    src={previwImg}
                    alt="Previsualización de Imagen"
                  />
                  <input
                    type="file"
                    className=""
                    name="image"
                    accept="image/*"
                    capture="environment"
                    onChange={() => onPrevisulizeImg()}
                  />
                </div>

                <div className="flex gap-2 px-5">
                  <label htmlFor="" className="text-white">
                    Hashtag:
                  </label>
                  <input
                    type="text"
                    className=""
                    value={nameHashtag}
                    onChange={() => onChangeInput(event.target.value)}
                  />
                  <div
                    className="bg-green-500 text-white px-2 py-1"
                    onClick={addHashTag}
                  >
                    Add +
                  </div>
                </div>
                <div className="pt-2 px-5">
                  <textarea
                    className="border rounded-md w-full"
                    onChange={() => onChangeTextArea(event.target.value)}
                  ></textarea>
                </div>

                {hashtag.map((e, index) => {
                  return (
                    <>
                      <p key={index}>{e}</p>
                    </>
                  );
                })}

                <button
                  type="submit"
                  className="border px-5 py-1 rounded-md mx-5 text-white"
                >
                  Compartir
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopUpUpload;
