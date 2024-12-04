const Home = ({ menuShut }) => {
  return (
    <div
      onLoad={menuShut}
      onClick={menuShut}
      className='bg-kyiv_buildings bg-cover h-full'
    >
      <div className='flex flex-col ml-4 pt-2 opacity-60 font-medium text-xl z-10'>
        <span>PhD</span>
        <span> Assistant Professor</span>
        <span>School of Architecture</span>
      </div>
    </div>
  )
}

export default Home
