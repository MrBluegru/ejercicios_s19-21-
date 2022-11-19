import APIRequest from "../utils/config/axios.config";

export default function getRandomJokes() {
    return APIRequest.get('/jokes/random');
}