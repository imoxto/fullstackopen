import axios from "axios";
import { useState, useEffect } from "react";
export const baseUrl = "http://localhost:3001/persons";

export function getUniquePersonId(persons) {
  if (!persons || !persons[0]) {
    return 1;
  }
  if (persons.length < 2) {
    return persons[0].id + 1;
  }
  return persons.reduce((prev, curr) => (prev < curr.id ? curr.id : prev), persons[0].id) + 1;
}

export const deleteOne = (id) => {
  return axios.delete(`${baseUrl}/${id}`).then((response) => response.data);
};

export const getAll = () => {
  const request = axios.get(baseUrl);
  return request.then((response) => response.data);
};

export const create = (newObject) => {
  const request = axios.post(baseUrl, newObject);
  return request.then((response) => response.data);
};

export const update = (id, newObject) => {
  const request = axios.put(`${baseUrl}/${id}`, newObject);
  return request.then((response) => response.data);
};

export const useApi = (data, cb = () => {}, method = "GET", endpoint = "/") => {
  const [loading, setLoading] = useState(true);
  const [fetchedData, setFetchedData] = useState(null);
  const requestApi = () => {
    axios
      .request({
        url: `${baseUrl}${endpoint}`,
        data,
        method,
      })
      .then((res) => {
        setFetchedData(res.data);
        cb(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(requestApi, []);
  return [loading, fetchedData];
};
