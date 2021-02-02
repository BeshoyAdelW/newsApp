import { create } from "apisauce";

const api = create({
  baseURL: "https://newsapi.org/v2",
});

const ApiKey = "576d030b0d794182923fdc2ae28e433d";

const getNews = () => {
  let url = `/top-headlines?country=us&apiKey=${ApiKey}`;
  return api.get(url);
};

const searchNews = (query) => {
  let url = `/everything?q=${query}&apiKey=${ApiKey}`;
  return api.get(url);
};

export default {
  getNews,
  searchNews,
};
