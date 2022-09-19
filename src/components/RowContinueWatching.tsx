import  {  useState } from 'react'
import { Movie } from '../interfaces/movieInterface';

import MovieContinueWatching from './MovieContinueWatching';

interface Props {
  nowPlaying?: Movie[];
  numberMovie?: number
  title?: string;
}

const RowContinueWatchin = ({title,nowPlaying, numberMovie}: Props) => {
 
  const [isAllMovies, setIsAllMovies] = useState(true)
  const filtered = nowPlaying?.slice(0, numberMovie);
  const filtered4Movies = nowPlaying?.slice(0, 4);


  const selectAll = () => {
    setIsAllMovies(!isAllMovies);    
  }

  return (
    <>
         <h2 className="text-white font-bold md:text-xl  rounded-sm flex ">{title}  <p className='sm:px-3 px-3 font-extralight'>  | 4 Viewers</p><button onClick={selectAll} className='absolute sm:font-extralight sm:right-[7%] font-extralight right-[7%] cursor-pointer'>All Movies {" >"}  </button></h2>
      
      <div className="relative flex items-center   w-full">
        <div  className="w-full h-[40%]    ">
    
           {(isAllMovies? filtered : filtered4Movies )?.map((item) => (
            <MovieContinueWatching key={item?.id} item={item} />
          ))}
        </div>
      </div>
    </>
  );
}

export default RowContinueWatchin