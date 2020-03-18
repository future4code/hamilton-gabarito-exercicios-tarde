import React from 'react';
import './PageSection.css'

function PageSection(props) {
    return (
        <div className="page-section-container">
            <h3>{ props.titulo }</h3>
            { props.children }
        </div>
    )
}

export default PageSection;