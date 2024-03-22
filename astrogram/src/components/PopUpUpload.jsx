const PopUpUpload = ({setPopUp}) => {

  const onSubmitImage = () => {
    event.preventDefault();

    const data = new FormData();
    const file = event.target.elements.image.files[0].name;

    data.append('image',file);
    //Hacer la peticion para hacer el post de upload de la imagen

  }

  return (
    <div className="bg-red-500 w-96 h-96">
      <div className="flex">
        <h1>Upload Image</h1>
        <div className="" onClick={() => setPopUp(false)}>X</div>


        <form onSubmit={() => onSubmitImage()}>
          <input type="file" className="" name="image" />

          <button>Enviar</button>
        </form>
      </div>
    </div>
  );
};

export default PopUpUpload;
