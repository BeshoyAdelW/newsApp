import { create } from "apisauce";

const api = create({
  baseURL: "http://newsapi.org/v2/top-headlines",
});

const getNews = () => {
  const ApiKey = "576d030b0d794182923fdc2ae28e433d";
  let url = `?country=us&apiKey=${ApiKey}`;
  return api.get(url);
};

export default {
  getNews,
};
