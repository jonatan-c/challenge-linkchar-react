import { useMovies } from '../hooks/useMovies';
import RowPortada from '../components/RowPortada';
import RowContinueWatching from '../components/RowContinueWatching';
import RowPopular from '../components/RowPopular';
import RowNewTrailers from '../components/RowNewTrailers';
import React from 'react';
 

const Home = () => {

    const { nowPlaying, popular,topRated,upcoming} = useMovies();
    const [search, setSearch] = React.useState("")

    const onSearchChange = (e: any) => {
      setSearch(e.target.value);
    };
    const searching = popular?.filter((project) => {
      return project.title.toLowerCase().includes(search.toLowerCase());
    });
   

    return(
    <>
    <div className='flex flex-row sm:w-[100%] justify-center'>
          <input type="text" placeholder='Search' autoComplete="off" onChange={onSearchChange}  value={search} name="search" className=' text-center   text-white bg-slate-400/40  items-center '  ></input>
    </div>
      <div className="w-full flex flex-nowrap py-[50px]" >
        <div className="sm:w-[30%] sm:flex sm:flex-col   hidden sm:order-0   sm:justify-start pl-16  ">
          <RowNewTrailers    numberMovie={2} title="New Trailers" upcoming ={upcoming}/>
        </div>
        <div className="sm:w-[64%]  sm:flex-row sm:border-l-white sm:border-l-2 sm:items-center  sm:pl-12  overflow-x-hidden overflow-y-hidden  w-full ">
          <RowPortada  numberMovie={1}    topRated={topRated}/>
          <RowContinueWatching   numberMovie={2} title="Continue Watching" nowPlaying={nowPlaying} />
          <RowPopular  numberMovie={3} title="Popular Movies 2021" searching={searching} />
        </div>
      </div>
    </>
  );
}

export default Home