import { useEffect, useState } from "react";

const OptionsImg = () => {
  const [popUp, setPopUp] = useState(false);

  const toggleModal = () => {
    setPopUp(!popUp)
  }

  return (
    <div className="flex flex-col">
      <svg
        onClick={toggleModal}
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
      {popUp ? (
        <div className="bg-black text-white w-30 right-3 z-50 absolute top-32 py-2 border-none rounded-md px-5 flex">
          <ul>
            <li>Delete</li>
            <li>Update</li>
          </ul>
        </div>
      ) : null}
    </div>
  );
};

export default OptionsImg;
