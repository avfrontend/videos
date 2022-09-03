import axios from "axios";

const KEY = "AIzaSyCZGQdmJWUTSLAcir4Cr1jOHBs257HsX_U";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    type: 'video',
    maxResults: 5,
    key: KEY,
  },
});
