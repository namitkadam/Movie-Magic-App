import axios from "axios";

const API = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3ZDE2ZWQzZmNhZWNjNDViYmU3NjRhY2U2NzllZGE1ZiIsInN1YiI6IjY1ZDhhNzA4OTkyNTljMDE3Yjk0OWI4ZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Ob1q3uB9nv93_pllIJIE9lUqOgp8D2UJTqmukWKKN3k",
  },
});

export default API;
