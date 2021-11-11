import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID iTqyDj_ZDRrf_mh489oysfAKX1zGyfy8kbTetwdQsuo",
  },
});
