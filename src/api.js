import axios from "axios";

const api = axios.create({
  headers: {
    "Authorization": `Bearer ${{ secrets.MY_TOKEN }}`,
    "Client-ID": "c7zl793bbqnq3vqb4dj2g2f5l77ty7",
  }
});

export default api;
