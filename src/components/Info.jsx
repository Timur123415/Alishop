import React from "react";
import AppContext from "../context";


const Info = ({title, description, image}) => {
    const {setCartOpened} = React.useContext(AppContext)
    return (
             <div className="cartEmptyImg">
            <img src={image} alt="accepted.png"/>
            <h2>{title}</h2>
            <p>{description}</p>
            <button onClick={() => setCartOpened(false)} className="back"><img src="/next.png" alt="Next"/>Вернуться назад</button>
        </div>
    )
}

export default Info;