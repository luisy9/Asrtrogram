import { useState } from "react";
import FooterNavBar from "./FooterNavBar.jsx";
import PopUpUpload from "./PopUpUpload.jsx";

export const FooterComponent = () => {
  const [popUp, setPopUp] = useState(false);

  return (
    <main>
      {popUp ? <PopUpUpload setPopUp={setPopUp} /> : null}
      <div className='w-full h-full'>
        <FooterNavBar popUp={popUp} setPopUp={setPopUp} />
      </div>
    </main>
  );
};

export default FooterComponent;
