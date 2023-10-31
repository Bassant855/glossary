import {LuMailOpen} from 'react-icons/lu'

const Form = () => {
  return (
    <div className='bg-accentDark my-10  p-5 py-10 '>
        <div className='container flex justify-between items-center flex-col md:flex-row gap-5'>

            <div className='text-white flex items-center gap-3'>
                <LuMailOpen className='font-semibold ' size={55}/>
                <div>
                    <h2 className='font-semibold text-[25px]'>Sign up To Our Newsletters</h2>
                    <p>...and receive $20 coupon for first shopping</p>
                </div>
            </div>
            
            <div className='w-full relative max-w-[500px] bg-white rounded-full'>
                <input type="text" placeholder='Your Email Adress...' className='py-4 px-6 rounded-full border-none outline-none' />
                <button className='bg-accentDark hover:bg-accent rounded-full px-4 py-2 absolute translate-y-[-50%] top-[50%] right-2'>Subscribe!</button>
            </div>

        </div>
    </div>
  )
}

export default Form