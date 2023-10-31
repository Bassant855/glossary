import banner1 from '../../public/assets/banner__1.webp'
import banner2 from '../../public/assets/banner__2.webp'

const Banner = () => {
  return (
    <div className='container grid sm:grid-cols-2 gap-4 my-5 '>
        <div className='overflow-hidden rounded-lg'>
            <img src={banner1} alt="" className=' hover:scale-105 transition-transform cursor-pointer' />
        </div>
        <div className='overflow-hidden rounded-lg'>
            <img src={banner2} alt="" className=' hover:scale-105 transition-transform cursor-pointer'/>
        </div>
    </div>
  )
}

export default Banner