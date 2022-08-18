import React from "react";
// import "./card.css";


const card = (props)=>{
    return(
        <div className="bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5 tc">
            <img src={`https://robohash.org/${props.id}?200x200`} alt="robots" />
            <div>
                <h2>{props.name}</h2>
                <p>{props.email}</p>
            </div>
        </div>
    )
}







export default card;