import React from 'react';

const ValidationComponent = (props) => {
    return (
        <div className="Validation">
            <p>{props.string.length < 5 ? 'Text too short' : 'Valid'}</p>
        </div>
    )
};

export default ValidationComponent;