import { Movie } from '../interfaces/movieInterface';
import MovieNewTrailers from './MovieNewTrailers';
import iconselect from '../assets/iconselect.png'
import iconagregar from '../assets/iconagregar.png'


 
interface Props {
    upcoming?: Movie[];
    numberMovie?: number;
    title?: string;
  }

const RowNewTrailers= ({title,  upcoming,  numberMovie }: Props) => {

        const filtered =  upcoming?.slice(0,numberMovie)

        const genresFavouture = [
            {name: "Action"},
            {name: "Western"},
            {name: "Adventures"},
            {name: "Drama"},
            {name: "Sci-Fi"},
        ]

        const addYourFavouriteGenres = [
            {name: "Crime"},
            {name: "Comedy"},
            {name: "Thriller"},
        ]
 
    return (
      <>
        <div className="flex sm:flex-row justify-between   ">
          <h2 className="text-white font-bold md:text-xl sm:pl-[14%] rounded-sm ">
            {title}
          </h2>
          <div className=" sm:pr-[6%] ">
            <p className="inline-block px-3">Sort By</p>
            <p className="inline-block">
              Today{" "}
              <img
                className="px-2 inline-block cursor-pointer"
                src={iconselect}
                alt=""
              />
            </p>
          </div>
        </div>
        <div className=" flex sm:items-center  justify-center sm:flex-col sm:py-6 sm:px-[12%] ">
          <div className="  ">
            {filtered?.map((item) => (
              <MovieNewTrailers key={item.id} item={item} />
            ))}
          </div>
          <div className="flex sm:flex-col justify-start items-start w-full">
            <h2 className="text-white font-bold md:text-xl  rounded-sm text-start justify-start right-1 sm:py-6 ">
              Favourite Genres
            </h2>
            <div className=''>
              {genresFavouture.map((genre,id) => {
                return <p key={id} className="sm:inline-block sm:px-2 sm:mx-4 sm:my-2  rounded-full bg-green-200/40">{genre.name}</p>;
              })}
            </div>
            <h2 className="text-white font-bold md:text-xl sm:py-4  rounded-sm text-start justify-start right-1 ">
                <img className='inline-block items-center text-center px-1' src={iconagregar} alt="" />
                 Add your favourite genres
            </h2>
            <div>
              {addYourFavouriteGenres.map((genre,id) => {
                return <p key={id} className="sm:inline-block sm:px-2 sm:mx-4 sm:my-2  rounded-full bg-black/50">{genre.name}</p>;
              })}
            </div>
          </div>
        </div>
      </>
    );
}

export default RowNewTrailers
