import pfimg from '../images/jiji.jpg'

const Info = () => {
  return (
    <div className='text-center'>
        <img src={pfimg} alt="profile image" className='rounded-t-lg w-full' />
        <h2 className='mt-6 text-xl sm:text-4xl font-bold'>Ivis Jane</h2>
        <h4 className='text-orange-400 text-sm sm:text-[19px] sm:mt-1'>Frontend Developer</h4>
        <p className='mt-1 sm:mt-2 text-[12px] sm:text-base'>
          <a href="#">ivisjane.website</a>
        </p>
        <button className='bg-white border-2 border-slate-400 rounded-lg shadow py-1 sm:py-3 mt-5 w-2/3 text-sm sm:text-xl lg:hover:scale-95'>
          <i className="fa-solid fa-envelope pr-1 sm:text-lg"></i> Email
        </button>
    </div>
  )
}

export default Info