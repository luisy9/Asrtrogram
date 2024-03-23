import { useState } from "react"
import FooterNavBar from "./FooterNavBar.jsx"
import PopUpUpload from "./PopUpUpload.jsx";

export const FooterComponent = () => {

    const [popUp, setPopUp] = useState(false);
    return (
        <main>
            <div className="">
                {
                    popUp ? <PopUpUpload setPopUp={setPopUp} /> : null
                }
                <FooterNavBar popUp={popUp} setPopUp={setPopUp} />
            </div>
        </main>
    )
}

export default FooterComponent