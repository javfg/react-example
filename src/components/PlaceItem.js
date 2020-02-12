import React from 'react';


const PlaceItem = (props) => (
    <div className="place">
        <div className="place__box">
            <p className="place__name">{props.count}. {props.placeName}</p>
            {props.placeDesc ?
                <p className="place__desc">{props.placeTemp}C, {props.placeDesc}</p>
                :
                <p className="place__desc">Not sure about the weather there</p>
            }
        </div>
        <button className="button button--link"
            onClick={() => props.handleDeletePlace(props.placeName)}
        >
            delete
        </button>
    </div>
);


export default PlaceItem;