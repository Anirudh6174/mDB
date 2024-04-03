import React, { useState, useEffect } from "react";
import axios from "axios";
import Autosuggest from "react-autosuggest";
import "./SearchPage.css";
import { useLocation, useHistory } from "react-router-dom";
const apiUrl = process.env.REACT_APP_BACKEND_API_URL;
function SearchBar({ setFilteredArtist }) {
  const [searchInput, setSearchInput] = useState("");
  const [searchSuggestions, setSearchSuggestions] = useState([]);
  const [artists, setArtists] = useState([]);

  const history = useHistory();
  const location = useLocation();

  useEffect(() => {
    fetchArtists();
  }, []);

  const fetchArtists = async () => {
    try {
      const response = await axios.get(`${apiUrl}/artists`);
      setArtists(response.data);
    } catch (error) {
      console.error("Error fetching artists:", error);
    }
  };

  const getSuggestions = (value) => {
    const inputValue = value.trim().toLowerCase();
    const inputLength = inputValue.length;

    return inputLength === 0
      ? []
      : artists.filter((artist) => {
          const artistName = artist.Name && artist.Name.toLowerCase();
          const artistCategory =
            artist.Category && artist.Category.toLowerCase();
          const artistLocation =
            artist.Location && artist.Location.toLowerCase();

          return (
            (artistName && artistName.includes(inputValue)) ||
            (artistCategory && artistCategory.includes(inputValue)) ||
            (artistLocation && artistLocation.includes(inputValue))
          );
        });
  };

  const renderSuggestion = (suggestion) => <div>{suggestion.Name}</div>;

  const onSuggestionsFetchRequested = ({ value }) => {
    setSearchSuggestions(getSuggestions(value));
  };

  const onSuggestionsClearRequested = () => {
    setSearchSuggestions([]);
  };

  const onSuggestionSelected = (event, { suggestion }) => {
    setSearchInput(suggestion.Name);
    setFilteredArtist([suggestion]);
    history.push("/bookArtist", { filteredArtist: [suggestion] });
  };

  const inputProps = {
    placeholder: "Search artists...",
    value: searchInput,
    onChange: (e, { newValue }) => setSearchInput(newValue),
  };
   // Listen for the Enter key press
  useEffect(() => {
    const handleKeyPress = (e) => {
      if (e.key === "Enter") {
        filterArtists(searchInput);
      }
    };

    window.addEventListener("keydown", handleKeyPress);

    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  }, [searchInput]);


  return (
    <div className="col-md-6 col-lg-4 mx-auto">
      <Autosuggest
        suggestions={searchSuggestions}
        onSuggestionsFetchRequested={onSuggestionsFetchRequested}
        onSuggestionsClearRequested={onSuggestionsClearRequested}
        onSuggestionSelected={onSuggestionSelected}
        getSuggestionValue={(suggestion) => suggestion.Name}
        renderSuggestion={renderSuggestion}
        inputProps={inputProps}
      />
    </div>
  );
}

export default SearchBar;
