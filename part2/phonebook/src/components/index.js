import { useState } from "react";
import Filter from "./Filter";
import PersonForm from "./PersonForm";
import Persons from "./Persons";

const App = () => {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", number: "040-123456", id: 1 },
    { name: "Ada Lovelace", number: "39-44-5323523", id: 2 },
    { name: "Dan Abramov", number: "12-43-234345", id: 3 },
    { name: "Mary Poppendieck", number: "39-23-6423122", id: 4 },
  ]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [filter, setFilter] = useState("");
  const formSubmitHandler = (e) => {
    e.preventDefault();
    if (!persons.every((person) => person.number !== newNumber)) {
      alert(`${newNumber} already exists in phonebook`);
      return;
    }
    setPersons(persons.concat({ name: newName, number: newNumber }));
    setNewName("");
    setNewNumber("");
  };
  const handleTextChange = (e) => {
    setNewName(e.target.value);
  };
  const handleNumberChange = (e) => {
    setNewNumber(e.target.value);
  };
  const handleFilterChange = (e) => {
    setFilter(e.target.value);
  };

  return (
    <>
      <h2>Phonebook</h2>

      <Filter text={filter} handleFilterChange={handleFilterChange} />

      <h3>Add a new</h3>

      <PersonForm
        text={newName}
        number={newNumber}
        handleTextChange={handleTextChange}
        handleNumberChange={handleNumberChange}
        formSubmitHandler={formSubmitHandler}
      />

      <h3>Numbers</h3>

      <Persons persons={persons.filter((person) => person.name.toLowerCase().includes(filter.toLowerCase()))} />
    </>
  );
};

export default App;
