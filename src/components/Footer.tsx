import {BsTruck} from 'react-icons/bs'
import {FiPhoneCall} from 'react-icons/fi'
import {GiPresent} from 'react-icons/gi'
import {BsCash} from 'react-icons/bs'

const Footer = () => {
  return (
    <div className='mt-10 mb-5'>
        <div className='container my-10'>
            <div className='grid gap-5 lg:grid-cols-4'>

                <div className='flex items-center gap-4'>
                    <div className='w-[50px] h-[50px] bg-gray-300 rounded-full flex justify-center items-center'>
                        <BsTruck size={25} className='text-accentDark'/>
                    </div>
                    <div>
                        <h4 className='text-accent font-medium text-xl'>Free Shipping</h4>
                        <p className='text-sm text-gray-400 pt-1'>Lorem, ipsum dolor.</p>
                    </div>
                </div>

                <div className='flex items-center gap-4'>
                    <div className='w-[50px] h-[50px] bg-gray-300 rounded-full flex justify-center items-center'>
                        <BsCash size={25} className='text-accentDark'/>
                    </div>
                    <div>
                        <h4 className='text-accent font-medium text-xl'>Best Price Guarantee</h4>
                        <p className='text-sm text-gray-400 pt-1'>Lorem, ipsum dolor.</p>
                    </div>
                </div>

                <div className='flex items-center gap-4'>
                    <div className='w-[50px] h-[50px] bg-gray-300 rounded-full flex justify-center items-center'>
                        <GiPresent size={25} className='text-accentDark'/>
                    </div>
                    <div>
                        <h4 className='text-accent font-medium text-xl'>Free Curbside Pickup</h4>
                        <p className='text-sm text-gray-400 pt-1'>Lorem, ipsum dolor.</p>
                    </div>
                </div>

                <div className='flex items-center gap-4'>
                    <div className='w-[50px] h-[50px] bg-gray-300 rounded-full flex justify-center items-center'>
                        <FiPhoneCall size={25} className='text-accentDark'/>
                    </div>
                    <div>
                        <h4 className='text-accent font-medium text-xl'>Support 24/7</h4>
                        <p className='text-sm text-gray-400 pt-1'>Lorem, ipsum dolor.</p>
                    </div>
                </div>


            </div> 
        </div>

        <hr/>
        <div className="container">
            <p className='text-gray-500 text-lg text-center mt-3'>	&copy; Copyright @Bassant Hassan 2023. </p>
        </div>
    </div>
  )
}

export default Footer