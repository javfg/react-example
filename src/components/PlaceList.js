import React from 'react';  // eslint-disable-line no-unused-vars

import PlaceItem from './PlaceItem';


const PlaceList = (props) => (
    <div>
        <div className="widget-header">
            <h3 className="widget-header__title">Places</h3>
            <button
                onClick={props.handleDeletePlaces}
                className="button button--link"
            >
                Clean list
            </button>
        </div>

        {props.places.length === 0 && <p className="widget__message">Please, add a place to begin.</p>}
        {
            props.places.map((place, index) => (
                <PlaceItem
                    key={`${place.name}-${index}`}
                    placeName={place.name}
                    placeTemp={place.temp}
                    placeDesc={place.desc}
                    count={index + 1}
                    handleDeletePlace={props.handleDeletePlace}
                />
            ))
        }
    </div>
);


export default PlaceList;
