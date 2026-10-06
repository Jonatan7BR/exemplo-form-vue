import type { Person, PersonBody } from "@/models/person";
import axios from "axios";
import { defineStore } from "pinia";
import { ref } from "vue";

const API_URL = "http://localhost:3000";

export const usePeopleStore = defineStore("people", () => {
  const people = ref<Person[]>([]);
  const person = ref<Person | undefined>(undefined);

  const getPeople = async () => {
    const response = await axios.get(`${API_URL}people`);
    people.value = response.data;
  };

  const getPerson = async (id: number) => {
    const response = await axios.get(`${API_URL}people/${id}`);
    person.value = response.data;
  };

  const registerPerson = async (body: PersonBody) => {
    const response = await axios.post(`${API_URL}people`, body);
    person.value = response.data;
  };

  const updatePerson = async (id: number, body: PersonBody) => {
    const response = await axios.patch(`${API_URL}people/${id}`, body);
    person.value = response.data;
  };

  const removePerson = async (id: number) => {
    await axios.delete(`${API_URL}people/${id}`);
  };

  return {
    people,
    person,
    getPeople,
    getPerson,
    registerPerson,
    updatePerson,
    removePerson,
  };
});
