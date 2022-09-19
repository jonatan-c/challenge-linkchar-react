import play from '../assets/play.png'
import { truncateString } from '../helpers/truncateString';
import { useMovieDetails } from '../hooks/useMovieDetails';
import { getHour } from '../helpers/getHour';


const MovieNewTrailers = ({item}: any) => {
 
  const {movieFull} =  useMovieDetails(item.id)

  return (
    <>
      <div className="w-full sm:w-[100%]  sm:flex-col smjustify-center sm:items-center  cursor-pointer relative p-2 rounded-[20px] ">
        <img
          className="w-full h-auto block rounded-[20px]"
          src={`https://image.tmdb.org/t/p/w500/${item?.backdrop_path}`}
          alt="/"
        />
        <div className="absolute   sm:w-[95%] h-[40%] rounded-[10px] bottom-2 bg-black/60 flex flex-row items-center justify-center ">
          <div className="w-[25%]  ">
            <img className="w-8" src={play} />
          </div>
          <div className="px-4 w-[40%] ">
            <p className="truncate text-sm font-bold">{item?.title}</p>
            <p className="truncate text-sm">Country: </p>
            <p className="truncate text-sm">{getHour(movieFull?.runtime)} </p>
          </div>
          <p className="px-2    border-y-slate-300	">|</p>

          <p className="font-bold pl-1 w-12 rounded-full items-center text-center bg-white text-black">
            1:29
          </p>
        </div>
        {/* HOVER */}
        <div className="absolute top-0 left-0 w-full h-full  hover:bg-black/50  opacity-0 hover:opacity-100 text-white flex flex-col rounded-[20px]">
          <div className="white-space-normal text-xs md:text-sm font-bold flex flex-col justify-start items-start h-full text-start p-8 rounded">
            <p className="sm:font-bold text-[100%] py-1">{item?.title}</p>
            <p className="py-1"> Country: </p>
            <p className="">{truncateString(item?.overview, 40)}</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default MovieNewTrailers