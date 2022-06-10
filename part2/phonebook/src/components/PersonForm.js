import React from "react";

const PersonForm = ({ text, number, handleTextChange, handleNumberChange, formSubmitHandler }) => {
  return (
    <form onSubmit={formSubmitHandler}>
      <div>
        name: <input type="text" value={text} onChange={handleTextChange} />
      </div>
      <div>
        number: <input type="text" value={number} onChange={handleNumberChange} />
      </div>
      <div>
        <button type="submit">add</button>
      </div>
    </form>
  );
};

export default PersonForm;
