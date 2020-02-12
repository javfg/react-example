import React from 'react';

import Action from './Action';
import AddPlace from './AddPlace';
import PlaceList from './PlaceList';
import Header from './Header';
import PlaceModal from './PlaceModal';


class IndecisionApp extends React.Component {
    state = {
        title: 'Where do I go?',
        subtitle: 'Help you choose a place to visit!',
        places: [],
        selectedPlace: undefined
    };


    // Handlers.
    handleDeletePlaces = () => {
        this.setState({ places: [] });
    };

    handleDeletePlace = (placeToRemove) => {
        this.setState((prevState) => ({
            places: prevState.places.filter((place) => placeToRemove !== place.name)
        }));
    };

    handlePick = () => {
        const placeToGo = this.state.places.sort((a, b) => b.temp - a.temp);
        const selectedPlace = this.state.places[0];

        this.setState(() => ({ selectedPlace }));
    };

    handleUnpick = () => {
        this.setState(() => ({selectedPlace: undefined}));
    };

    handleAddPlace = (place) => {
        if (!place.name) {
            return 'That\'s not a place!';
        } else if (this.state.places.filter(placeListItem => placeListItem.name === place.name).length > 0) {
            return 'That place already exists!';
        }

        this.setState((prevState) => ({places: prevState.places.concat([place])}));
    }


    // Events.
    componentDidMount() {
        try {
            const jsonPlaces = localStorage.getItem('places');
            const places = JSON.parse(jsonPlaces);

            if (places) {
                this.setState(() => ({ places }));
            }
        } catch (e) { /* Do nothing */ }
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.places.length !== this.state.places.length) {
            const json = JSON.stringify(this.state.places);
            localStorage.setItem('places', json);
        }
    }


    // Render.
    render() {
        return (
            <div>
                <Header title={this.state.title} subtitle={this.state.subtitle} />
                <div className="container">
                    <Action
                        hasPlaces={this.state.places.length > 0}
                        handlePick={this.handlePick}
                    />
                    <div className="widget">
                        <PlaceList
                            places={this.state.places}
                            handleDeletePlaces={this.handleDeletePlaces}
                            handleDeletePlace={this.handleDeletePlace}
                        />
                        <AddPlace
                            handleAddPlace={this.handleAddPlace}
                        />
                    </div>
                </div>

                <PlaceModal
                    selectedPlace={this.state.selectedPlace ? this.state.selectedPlace.name : ''}
                    handleUnpick={this.handleUnpick}
                />
            </div>
        );
    }
}


export default IndecisionApp;