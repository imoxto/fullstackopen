import React from "react";

const Persons = ({ persons, deleteRequest }) => {
  return persons.map((person) => (
    <li key={person.id}>
      {person.name} {person.number} <button onClick={() => deleteRequest(person)}>Delete</button>
    </li>
  ));
};

export default Persons;
