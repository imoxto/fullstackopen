import { useState, useEffect } from "react";
import axios from "axios";
import Filter from "./Filter";
import PersonForm from "./PersonForm";
import Persons from "./Persons";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [filter, setFilter] = useState("");
  useEffect(() => {
    axios
      .get("http://localhost:3001/persons")
      .then((response) => {
        console.log("promise fulfilled");
        setPersons(response.data);
      })
      .catch((err) => {
        console.log(err.response);
      });
  }, []);

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
