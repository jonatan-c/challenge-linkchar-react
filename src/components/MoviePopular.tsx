import { MovieFull } from '../interfaces/movieInterface';
import play from '../assets/play.png'
import star from '../assets/star.png'
import { useMovieDetails } from '../hooks/useMovieDetails';
import { truncateString } from '../helpers/truncateString';
import useScreenSize from '../hooks/useScreenSize';


interface MovieDetails {
    movieFull?: MovieFull[];
}

const MoviePopular = ({item}: any) => {

  const {movieFull} =  useMovieDetails(item.id)
  const {width} = useScreenSize()
  return (
    <>
      <div className="sm:w-[33%] w-[100%]  sm:h-50 h-50  inline-block cursor-pointer relative p-2 rounded-[20px] ">
        <img
          className="sm:w-full h-auto block rounded-[20px]"
          src={`https://image.tmdb.org/t/p/w500/${item?.backdrop_path}`}
          alt="/"
        />
        <div className="absolute w-[96%] h-[40%] rounded-[10px] bottom-2 bg-black/60 flex flex-row items-center justify-center ">
          <div className="w-[25%] ">
            <img className='w-8' src={play} />
          </div>
          <div className="px-4 w-[40%]">
            <p className="font-bold ">{item?.title}</p>
            {
              movieFull?.genres.map((genre, id) => {
               return <p key={id} className='font-light truncate text-[10px]	 inline '>{genre.name + "/"}</p>
              })
            }
          </div>
 
          <p className="px-2    border-y-slate-300	">|</p>
          <img className="w-4 font-bold 	 " src={star} />
          <p className="font-bold pl-1 ">{item?.vote_average}</p>
 
        </div>
        {/* HOVER */}
        <div className="absolute top-0 left-0 w-full h-full  hover:bg-black/50  opacity-0 hover:opacity-100 text-white flex flex-col rounded-[20px]">
          <div className="white-space-normal text-xs md:text-sm font-bold flex flex-col justify-start items-start h-full text-start p-8 rounded">
            <p className="font-bold text-2xl py-1">{item?.title}</p>
            <p className="py-1"> Country: </p>
            <p className="">{truncateString(item?.overview, (width>412? 130: 200) )}</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default MoviePopular