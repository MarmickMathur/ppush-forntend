import { Button } from "flowbite-react";
import { useState } from "react";

const Form = ({ handleSubmit }) => {
  const [name, setname] = useState("");
  const [pass, setpass] = useState("");

  const handlename = (e) => {
    setname(e.target.value);
  };
  const handlepass = (e) => {
    setpass(e.target.value);
  };

  const onsubmit = (e) => {
    e.preventDefault();
    handleSubmit({ name: name, pass: pass });
  };

  return (
    <>
      <form
        onSubmit={onsubmit}
        className="max-w-md mx-auto p-4 bg-gray-100 rounded-lg shadow-md"
      >
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-700 font-bold mb-2">
            Username:
          </label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={handlename}
            className="w-full px-3 py-2 placeholder-gray-400 rounded-lg shadow-sm focus:outline-none focus:ring focus:ring-blue-500 focus:ring-opacity-50"
            placeholder="Enter your username"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="pass" className="block text-gray-700 font-bold mb-2">
            Password:
          </label>
          <input
            type="password"
            id="pass"
            value={pass}
            onChange={handlepass}
            className="w-full px-3 py-2 placeholder-gray-400 rounded-lg shadow-sm focus:outline-none focus:ring focus:ring-blue-500 focus:ring-opacity-50"
            placeholder="Enter your password"
          />
        </div>
        <button
          type="submit"
          className={
            ("bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded",
            {
              "opacity-50 cursor-not-allowed": !name || !pass,
            })
          }
          disabled={!name || !pass}
        >
          Submit
        </button>
      </form>
    </>
  );
};

export default Form;
