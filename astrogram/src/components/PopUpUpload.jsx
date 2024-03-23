const PopUpUpload = ({ setPopUp }) => {
  const onSubmitImage = (event) => {
    event.preventDefault();

    const url = "http://localhost:3000/api";

    const data = new FormData();
    const file = event.target?.elements?.image.files[0];
    data.append("image", file);

    //Hacer la peticion para hacer el post de upload de la imagen
    const opcions = {
      method: "POST",
      body: data,
      credentials: "include",
    };

    try {
      fetch(`${url}/uploadimg`, opcions)
        .then((res) => res.json())
        .then((images) => console.log(images))
        .catch((error) => console.log(error));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="w-full h-screen flex justify-center pt-5 backdrop-blur-md backdrop-brightness-200 md:backdrop-filter-none">
      <div className="bg-white w-96 h-96">
        <div className="flex justify-between px-5 w-full bg-red-500">
          <h1 className="text-xl">Upload Image</h1>
          <div className="cursor-pointer" onClick={() => setPopUp(false)}>
            X
          </div>
        </div>

        <div className="">
          <form onSubmit={onSubmitImage} encType="multipart/form-data">
            <input
              type="file"
              className=""
              name="image"
              accept="image/*"
              capture="environment"
            />

            <button type="submit">Enviar</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default PopUpUpload;
