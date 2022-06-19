import { useState, useEffect } from "react";
import { create, deleteOne, getAll, update } from "../utils";
import Filter from "./Filter";
import PersonForm from "./PersonForm";
import Persons from "./Persons";
import Status from "./Status";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [filter, setFilter] = useState("");
  const [status, setStatus] = useState();

  function setStatusAndTimer(message, result) {
    setStatus({
      result,
      message,
    });
    setTimeout(() => {
      setStatus();
    }, 5000);
  }

  useEffect(() => {
    getAll()
      .then((data) => {
        console.log("promise fulfilled");
        setPersons(data);
        setStatusAndTimer("Successfully fetched all contacts", "success");
      })
      .catch(() => {
        setStatusAndTimer("Couldn't fetch all contacts", "error");
      });
  }, []);

  const formSubmitHandler = (e) => {
    e.preventDefault();
    if (!persons.every((person) => person.number !== newNumber)) {
      alert(`${newNumber} already exists in phonebook`);
      return;
    }
    const [samePerson] = persons.filter((person) => person.name === newName);
    if (samePerson) {
      if (!window.confirm(`Replace ${samePerson.name}'s number to ${newNumber}?`)) {
        setStatusAndTimer(`Cancelled updating ${samePerson.name}'s number`, "error");
        return;
      }
      return update(samePerson.id, { ...samePerson, number: newNumber })
        .then((p) => {
          setPersons(persons.map((val) => (p.id === val.id ? p : val)));
          setNewName("");
          setNewNumber("");
          setStatusAndTimer(`Successfully updated ${p.name}`, "success");
        })
        .catch(() => setStatusAndTimer("Contact doesnt exist", "error"));
    }
    create({ name: newName, number: newNumber })
      .then((data) => {
        setPersons(persons.concat(data));
        setNewName("");
        setNewNumber("");
        setStatusAndTimer(`Successfully created ${data.name}`, "success");
      })
      .catch((err) => setStatusAndTimer(err.message, "error"));
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
  const handlePersonDelete = (p) => {
    if (!window.confirm(`Delete ${p.name}?`)) return;
    deleteOne(p.id)
      .then(() => {
        setPersons(persons.filter((v) => v.id !== p.id));
        setStatusAndTimer(`Successfully deleted ${p.name}`, "success");
      })
      .catch(() => setStatusAndTimer(`Couldn't delete ${p.name}`, "error"));
  };

  return (
    <>
      <h1>Phonebook</h1>

      <Status status={status} />

      <Filter text={filter} handleFilterChange={handleFilterChange} />

      <h3>Add a new Contact</h3>

      <PersonForm
        text={newName}
        number={newNumber}
        handleTextChange={handleTextChange}
        handleNumberChange={handleNumberChange}
        formSubmitHandler={formSubmitHandler}
      />

      <h3>Numbers</h3>

      <Persons
        persons={persons.filter((person) => person.name.toLowerCase().includes(filter.toLowerCase()))}
        deleteRequest={handlePersonDelete}
      />
    </>
  );
};

export default App;
