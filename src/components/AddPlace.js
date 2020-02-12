import React from 'react';

import Config from './Config';


export default class AddPlace extends React.Component {
    state = {
        placeName: '',
        error: undefined
    };


    handleClickAddPlace = async (e) => {
        const {
            state: { placeName },
            props: { handleAddPlace },
        } = this;

        e.preventDefault();

        const weatherUrl = `http://api.openweathermap.org/data/2.5/weather?q=${placeName}&appid=${Config.OPENWEATHERMAP_APIKEY}&units=metric`;
        const weatherData = await fetch(weatherUrl);
        const weatherJson = await weatherData.json();

        const newPlace = {
            name: placeName,
            temp: weatherJson.main ? weatherJson.main.temp : -1,
            desc: weatherJson.weather ? weatherJson.weather[0].description : undefined,
        }

        const error = handleAddPlace(newPlace);
        this.setState({ error });

        if (!error) {
            this.setState({ placeName: '' });
        }
    };

    handleChangePlace = (e) => {
        this.setState({ placeName: e.target.value.trim() });
    }


    render() {
        const {
            handleChangePlace, handleClickAddPlace,
            state: { error, placeName },
        } = this;

        return (
            <div>
                {error && <p className="addPlace-error">{error}</p>}
                <form
                    className="addPlace"
                    onSubmit={handleClickAddPlace}
                    autoComplete="off"
                >
                    <input
                        className="addPlace__input"
                        type="text"
                        name="place"
                        onChange={handleChangePlace}
                        value={placeName}
                    />
                    <button className="button">Add place</button>
                </form>
            </div>
        );
    }
}