import play from '../assets/play.png'
import star from '../assets/star.png'
import { useMovieDetails } from '../hooks/useMovieDetails';
import { truncateString } from '../helpers/truncateString';
import useScreenSize from '../hooks/useScreenSize';
import { getHour } from '../helpers/getHour';

 

const MovieContinueWatching = ({item}: any) => {

 const {movieFull} =  useMovieDetails(item.id)
 const {width} = useScreenSize()
  
 
 
 

  return (
    <>
      <div className="w-[50%]  inline-block  relative p-2 rounded-[20px] ">
        <img
          className="w-full h-auto block rounded-[20px]"
          src={`https://image.tmdb.org/t/p/w500/${item?.backdrop_path}`}
          alt="/"
        />

        <div className="absolute sm:w-[98%] w-[93%] sm:h-[30%] h-[40%] rounded-[10px] bottom-2 bg-black/60 flex flex-row items-center justify-center ">
          <div className="sm:w-[25%] w-[15%] ">
            <img className="sm:w-[40%] w-[90%]" src={play} />
          </div>
          <div className="sm:px-[0%] px-[4%] w-[40%]">
            <p className="truncate text-[90%] sm:text-[100%]">{item?.title} </p>
           
           <p className='text-[60%] sm:text-[100%]'  >{getHour(movieFull?.runtime)}</p>
        
          </div>
          <p className="sm:px-3 px-1    border-y-slate-300	">|</p>
          <img className="w-4 font-bold 	 " src={star} />
          <p className="font-bold sm:pl-1  pl-1">{item?.vote_average}</p>
        
        </div>
        <div className="absolute top-0 left-0 w-full h-full  hover:bg-black/50  opacity-0 hover:opacity-100 text-white flex flex-col rounded-[20px]">
          <div className="white-space-normal text-xs md:text-sm font-bold flex flex-col justify-start items-start h-full text-start p-8 rounded">
            <p className="font-bold sm:text-2xl sm:py-1 ">{item?.title}</p>
            <p className="sm:py-4"> Country:  </p>
            <p className="">{truncateString(item?.overview, (width>412? 350: 15) )}</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default MovieContinueWatching