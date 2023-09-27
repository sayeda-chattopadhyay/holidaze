import { createContext, useState } from "react";

export const VenueContext = createContext();

export const VenueProvider = ({ children }) => {
	const [venues, setVenues] = useState([]);

	const addVenue = (venue) => {
		setVenues([...venues, venue]);
	};

	const updateVenue = (id, updatedVenue) => {
		setVenues(venues.map((venue) => (venue.id === id ? updatedVenue : venue)));
	};

	const deleteVenue = (id) => {
		setVenues(venues.filter((venue) => venue.id !== id));
	};

	const setAllVenues = (newVenues) => {
		setVenues(newVenues);
	};

	return <VenueContext.Provider value={{ venues, addVenue, updateVenue, deleteVenue, setAllVenues }}>{children}</VenueContext.Provider>;
};
