import { useEffect, useState } from "react";

export const PopUpUpload = ({ setPopUp, token }) => {
  const [hashtag, setHashTag] = useState([]);
  const [errorValidation, setErrorValidation] = useState(null);
  const [nameHashtag, setNameHashtag] = useState("");
  const [descripcion, setDescription] = useState("");

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
    data.append("hashtags", tags.join(' '));
    // data.append("descripcion", descripcion);

    //Hacer la peticion para hacer el post de upload de la imagen
    const opcions = {
      method: "POST",
      body: data,
      headers: {
        Authorization: `Bearer ${token}`,
      }
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

  return (
    <div className="fixed">
      <div className="flex justify-center items-center h-full fixed top-0 z-50">
        <div className="bg-white w-full h-full">
          <div className="flex justify-between px-5 w-full bg-red-500">
            <h1 className="text-xl">Upload Image</h1>
            <div className="cursor-pointer" onClick={() => setPopUp(false)}>
              X
            </div>
          </div>

          <div className="bg-sky-500">
            <form onSubmit={onSubmitImage} encType="multipart/form-data">
              <div className="">
                <input
                  type="file"
                  className=""
                  name="image"
                  accept="image/*"
                  capture="environment"
                />
              </div>

              <div className="flex gap-2">
                <label htmlFor="">Hashtag:</label>
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
              <div className="pt-2">
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

              <button type="submit" className="border px-4 py-1 rounded-md">
                Enviar
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopUpUpload;
