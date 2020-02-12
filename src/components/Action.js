import React from 'react';


const Action = (props) => (
    <div>
        <button className="big-button"
            onClick={props.handlePick}
            disabled={!props.hasPlaces}
        >
            Tell me where to go!
        </button>
    </div>
);


export default Action;
