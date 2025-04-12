import React from "react";
import axios from "axios";
import './SearchBar.css';
function SearchBar({ city, setCity, setData, loading, setLoading, setValid }) {
  const handleClick = async () => {
    if(!city) {
      setData(null);
      return;}
    setValid(true);
    setLoading(true);
    try {
        const response = await axios.get(
            `http://localhost:5000/weather?city=${city}`
          );
          console.log(response);
          setData(response);
    } catch (error) {
        setValid(false);
    }
    
    setLoading(false);

  };
  return (
    <div className="Seach-Box">
      <input
        type="text"
        placeholder="Search..."
        className="Search-Input"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      <button className="Search-Button" onClick={handleClick}>
        Search
      </button>
    </div>
  );
}

export default SearchBar;
