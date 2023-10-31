import hero1 from '../../public/assets/hero.webp'
import hero2 from '../../public/assets/hero__2.webp'
import hero3 from '../../public/assets/hero__3.webp'
import {BiRightArrowAlt} from 'react-icons/bi'

const Hero = () => {
  return (
    <div className="container">
        <div className="grid xl:grid-cols-3 xl:grid-rows-2 gap-8">

            <div className="xl:col-span-2 xl:row-start-1 xl:row-end-[-1] relative">
                <img src={hero1} alt="hero"
                 className=' w-full h-full object-cover rounded-lg' />

                <div className='absolute max-w-[470px] sm:ml-16 ml-8 top-[50%] -translate-y-[50%] sm:space-y-4'>
                     <p className='text-2xl hidden sm-block'>100% Original Dry Fruits</p>
                     <h2 className='text-2xl sm:text-4xl md:text-6kl font-bold'>Dried Fruits Best Healthy</h2>
                     <p className='text-gray-500 text-xl pt-4 sm:pt-8'>Starting At</p>
                     <div className='text-red-600 text-2xl font-medium sm:text-4xl pb-4 sm:pb-8'>$18.36</div>
                     <button className='bg-accentDark hover:bg-accent text-white rounded-full w-fit flex items-center
                     gap-4 text-[14px] px-4 py-2 sm:py-3 cursor-pointer'>
                        Shop Now <BiRightArrowAlt/>
                    </button>
                </div>
                
                
            </div>

            <div className="relative">
                <img src={hero2} alt="hero2"
                className='w-full h-full object-cover rounded-lg' />

                <div className='absolute max-w-[470px] sm:ml-16 ml-8 top-[50%] -translate-y-[50%] sm:space-y-4'>
                    <h2 className='font-bold text-2xl sm:text-3xl'>Best Yummy Pizza</h2>
                    <p className='text-gray-500 text-xl '>Starting At</p>
                    <div className='text-red-600 text-2xl font-medium sm:text-4xl pb-2 sm:pb-4'>$25</div>
                    <button className='bg-accent hover:bg-accentDark text-white rounded-full w-fit flex items-center
                     gap-4 text-[14px] px-4 py-1 sm:py-2 cursor-pointer'>
                        Shop Now <BiRightArrowAlt/>
                    </button>

                </div>
            </div>

            <div className="relative">
                <img src={hero3} alt="hero2"
                className='w-full h-full object-cover rounded-lg' />

                <div className='absolute max-w-[470px] sm:ml-16 ml-8 top-[50%] -translate-y-[50%] sm:space-y-4'>
                    <h2 className='font-bold text-2xl sm:text-3xl'>Best Yummy Pizza</h2>
                    <p className='text-gray-500 text-xl '>Starting At</p>
                    <div className='text-red-600 text-2xl font-medium sm:text-4xl pb-2 sm:pb-4'>$25</div>
                    <button className='bg-accent hover:bg-accentDark text-white rounded-full w-fit flex items-center
                     gap-4 text-[14px] px-4 py-1 sm:py-2 cursor-pointer'>
                        Shop Now <BiRightArrowAlt/>
                    </button>

                </div>
            </div>


        </div>
    </div>
  )
}

export default Hero