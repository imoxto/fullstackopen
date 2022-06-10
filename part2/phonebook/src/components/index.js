import { useState } from "react";

const App = () => {
  const [persons, setPersons] = useState([{ name: "Arto Hellas" }]);
  const [newName, setNewName] = useState("");
  const formSubmitHandler = (e) => {
    e.preventDefault();
    if (!persons.every((person) => person.name !== newName)) {
      alert(`${newName} already exists in phonebook`);
      return;
    }
    setPersons(persons.concat({ name: newName }));
    setNewName("");
  };
  const handleTextChange = (e) => {
    setNewName(e.target.value);
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={formSubmitHandler}>
        <div>
          name: <input type="text" value={newName} onChange={handleTextChange} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {persons.map((person) => (
        <li key={person.name}>{person.name}</li>
      ))}
    </div>
  );
};

export default App;
