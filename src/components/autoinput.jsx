import { useState, useEffect } from "react";

const AutocompleteSearch = ({ oninputchange, ind }) => {
  const [inputValue, setInputValue] = useState("");
  const [suggestions, setSuggestions] = useState("");
  console.log(0);

  useEffect(() => {
    oninputchange(inputValue);
  }, [inputValue]);

  const handleChange = async (event) => {
    const value = event.target.value;
    setInputValue(value);
    // Fetch suggestions from the server only if input value is not empty
    if (value.trim() !== "") {
      console.log("value is", value);
      fetchSuggestions(value);
    } else {
      // Clear suggestions when input value is empty
      setSuggestions("");
    }
  };

  const fetchSuggestions = async (query) => {
    try {
      console.log("query is ", query);
      const response = await fetch(
        `https://ppushermusicsuggestion.onrender.com/tags?query=${query}`
      );
      if (!response.ok) {
        throw new Error("Failed to fetch suggestions");
      }
      const data = await response.json();
      console.log(data);
      setSuggestions(data[0].split(" ")[ind]);
    } catch (error) {
      console.error(error);
    }
  };

  const handleSuggestionClick = (suggestion) => {
    setInputValue(suggestion);
    setSuggestions("");
  };

  // <div class="mb-5">
  //   <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
  //   <input type="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@flowbite.com" required />
  // </div>

  return (
    <div>
      <input
        type="text"
        value={inputValue}
        onChange={handleChange}
        placeholder="Search..."
        className="block w-full py-2 px-4 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:border-blue-500"
      />
      {suggestions && (
        <div onClick={() => handleSuggestionClick(suggestions)}>
          {suggestions}
        </div>
      )}
    </div>
  );
};

export default AutocompleteSearch;
