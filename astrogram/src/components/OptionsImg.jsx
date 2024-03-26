import { useState } from "react";

const OptionsImg = () => {
  const url = 'https://ricardhernandez.com/api';
  const [popUp, setPopUp] = useState(false);

  const toggleModal = () => {
    setPopUp(!popUp);
  }

  const deletePost = () => {
    console.log('delete img')
    // fetch(`${url}/`)
  }

  const updatePost = () => {
    console.log('update img')
    // fetch(`${url}/`)
  }

  return (
    <div className="flex flex-col">
      <svg
        onClick={() => toggleModal()}
        width="24px"
        className="stroke-white"
        height="24px"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M20 12.5C20.2761 12.5 20.5 12.2761 20.5 12C20.5 11.7239 20.2761 11.5 20 11.5C19.7239 11.5 19.5 11.7239 19.5 12C19.5 12.2761 19.7239 12.5 20 12.5Z"
          fill="#000000"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        ></path>
        <path
          d="M12 12.5C12.2761 12.5 12.5 12.2761 12.5 12C12.5 11.7239 12.2761 11.5 12 11.5C11.7239 11.5 11.5 11.7239 11.5 12C11.5 12.2761 11.7239 12.5 12 12.5Z"
          fill="#000000"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        ></path>
        <path
          d="M4 12.5C4.27614 12.5 4.5 12.2761 4.5 12C4.5 11.7239 4.27614 11.5 4 11.5C3.72386 11.5 3.5 11.7239 3.5 12C3.5 12.2761 3.72386 12.5 4 12.5Z"
          fill="#000000"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        ></path>
      </svg>
      {popUp === true ? (
        <div className="bg-black w-full text-white w-30 right-3 z-50 absolute top-32 py-3 border-none rounded-md px-5 flex">
          <ul>
            <li className="py-1">Update</li>
            <li className="py-1 text-red-500" onClick={deletePost}>Delete</li>
          </ul>
        </div>
      ) : null}
    </div>
  );
};

export default OptionsImg;
