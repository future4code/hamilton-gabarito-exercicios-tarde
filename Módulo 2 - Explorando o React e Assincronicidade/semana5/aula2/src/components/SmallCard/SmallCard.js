import React from 'react';
import './SmallCard.css'

function SmallCard(props) {
    return (
        <div className="smallcard-container">
            <img src={props.imagem} />
            <p><strong> { props.item } </strong> { props.informacao } </p>
        </div>
    )
}

export default SmallCard;