import { useState } from "react";

const Footer = (props) => {
    const { showModal, handleToggleModal, data } = props;

    return ( 
        <footer>
            <div className="bgGradient"></div>
            <div>
                <h1>{data?.title}</h1>
                <h2>{data?.date}</h2>
            </div>
            <button onClick={handleToggleModal}>
                <i className="fa-solid fa-circle-info"></i>
            </button>
        </footer>
     );
}
 
export default Footer;