import React from "react";
import "./Card.css";

const Card = props => (
    <div className="card">
        <img className="card-img-top scale"
            id={props.id}
            alt={props.alt}
            src={props.image}
            onClick={() => {
                props.pushCard(props.id);
                props.shuffle()
            }} />
    </div>
);

export default Card;