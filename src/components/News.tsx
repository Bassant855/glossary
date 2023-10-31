import post1 from '../../public/assets/post__1.webp'
import post2 from '../../public/assets/post__2.webp'
import post3 from '../../public/assets/post__3.webp'

const News = () => {
  return (
    <div className='container my-10 '>
        <h3 className='text-xl font-bold text-[22px]'>Latest News</h3>
        <p className='text-md text-gray-500 pt-1 pb-5'>Present posts in a best way to highlight interesting moments of your blog.</p>
        <div className='grid sm:grid-cols-2 gap-5 mt-5 lg:grid-cols-3 '>

            <div>
                <div className='rounded-lg'>
                    <img src={post1} alt="" className='hover:scale-105 transition-transform rounded-lg' />
                </div>
                <p className='text-lightGreen font-semibold pt-3'>Aug 27, 2023 / 8 Comments</p>
                <h4 className='pt-3 font-bold text-xl'>Healthy Food Healthy Life</h4>
            </div>
            <div>
                <div className='rounded-lg'>
                    <img src={post2} alt="" className='hover:scale-105 transition-transform rounded-lg' />
                </div>
                <p className='text-lightGreen font-semibold pt-3'>Aug 25, 2023 / 1 Comments</p>
                <h4 className='pt-3 font-bold text-xl'>Healthy Food Healthy Life</h4>
            </div>
            <div>
                <div className='rounded-lg'>
                    <img src={post3} alt="" className='hover:scale-105 transition-transform rounded-lg' />
                </div>
                <p className='text-lightGreen font-semibold pt-3'>Aug 30, 2023 / 6 Comments</p>
                <h4 className='pt-3 font-bold text-xl'>Healthy Food Healthy Life</h4>
            </div>


        </div>
    </div>
  )
}

export default News