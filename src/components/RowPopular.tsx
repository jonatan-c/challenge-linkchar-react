import  {  useState } from "react";
import { Movie } from "../interfaces/movieInterface";
import MoviePopular from "./MoviePopular";

 

interface Props {
  searching?: Movie[];
  numberMovie?: number;
  title?: string;
  search?: string;
}

const RowPopular = ({ title,  searching,  numberMovie }: Props) => {

  const [isAllMovies, setIsAllMovies] = useState(true)
  const filtered = searching?.slice(0, numberMovie);
  const selectAll = () => {
    setIsAllMovies(!isAllMovies);    
  }

  return (
    <>
         <h2 className="text-white font-bold md:text-xl  rounded-sm flex ">{title}  <button onClick={selectAll} className='absolute sm:font-extralight sm:right-[7%]  cursor-pointer font-extralight right-[7%]'>All Movies {">"} </button></h2>
      <div className="relative flex items-center group sm:w-full">
        <div className="w-full h-full   ">
          {(isAllMovies? filtered : searching )?.map((item) => 
            <MoviePopular key={item?.id} item={item} />
          )}
        </div>
      </div>
    </>
  );
};

export default RowPopular;
