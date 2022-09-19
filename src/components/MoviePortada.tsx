import watchnow from '../assets/watchnow.png'
import iconuser from '../assets/iconuser.png'

const user = [
{
    img: iconuser,
  },
  {
    img: iconuser,
  },
]

const countUser = user.length;

 

const MoviePortada = ({item}: any) => {

  return (
    <>
      <div className="w-full  inline-block  relative sm:p-[0%]  rounded-[20px]  ">
        <img
          className="w-[100%] h-40 block rounded-[20px] object-fill "
          src={`https://image.tmdb.org/t/p/w500/${item?.backdrop_path}`}
          alt="/"
        />
        <div className="absolute top-4 left-4 flex flex-row  items-center">
          {user.map((item,id) => {
            return <img key={id} className="sm:w-12 w-6" src={item.img} />;
          })}
          <p className="text-center pl-2 ">+ {countUser} are watching now</p>
        </div>

        <div className="absolute bottom-4 left-4 cursor-pointer">
          <img className='sm:w-48 w-28 ' src={watchnow} />
        </div>
        <div className='absolute  sm:bottom-[12%] bottom-[12%] sm:left-[50%] left-[50%] 	sm:font-extrabold  sm:text-5xl text-lg font-extrabold'>{item?.title.toUpperCase()}</div>
      </div>
    </>
  );
}

export default MoviePortada