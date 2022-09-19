import axios from 'axios';

const movieDB = axios.create({
    baseURL: `https://api.themoviedb.org/3/movie`,
    params: {
        api_key: '0d1c79ef288ae16acc3834b6fef5f482',
        language: 'en-EN'
    }
})

export default movieDB; 