
import { useEffect } from "react";
import {useParams} from "react-router-dom"
function Detail(){
    const {id} = useParams()
    const getMovie = async()=> {
        const json = await
        (await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`))
        .json();
        console.log(json)
    };
    
    useEffect(()=>{
        getMovie();
        
    },[])
    return(
        <div>
           {loading ?( <h1>Loading...</h1>) : ( 
           <div>
           {movies.map((movie) => (
             <Movie
                key={movie.id}
                id={movie.id}
                coverImg={movie.medium_cover_image}
                title={movie.title}
                summary={movie.summary}
                genres={movie.genres}
                rating={movie.rating}
             />
           ))}
           </div>
        )}
        </div>
    )
}
export default Detail;