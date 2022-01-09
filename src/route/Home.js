import {useState,useEffect} from 'react';
import Movie from "../component/Movie"
function Home(){
    const [loading,setLoading] = useState(true);
    const [movies,setMovies] = useState([])
    const getMovies = async()=>{
        const response = await fetch("https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year");
        const json = await response.json();
        setMovies(json.data.movies);
        setLoading(false);
    }
    useEffect(()=>{
        getMovies();
    },[]);
    return(
        
    );
}

export default Home;