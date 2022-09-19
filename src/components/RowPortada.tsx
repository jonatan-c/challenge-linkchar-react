import { Movie } from '../interfaces/movieInterface';
 
import MoviePortada from './MoviePortada';
 
interface Props {
  topRated?: Movie[];
    numberMovie?: number
    title?: string;
}

const RowPortada = ({topRated}: Props) => {
  
 const movie =  topRated?.[Math.floor(Math.random() * 20)];


  return (
    <>
      <div className="relative flex items-center   w-full">
        <div  className="w-full h-[50%]  ">
          <MoviePortada key={movie?.id} item={movie} />
        </div>
      </div>
    </>
  );
}

export default RowPortada