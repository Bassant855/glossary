


const data = [
    {id:0, img:'../../public/assets/product__1.webp',name:'Dried Mango', price:'$500'},
    {id:1, img:'../../public/assets/product__2.webp',name:'Crunchy Crisps', price:'$300'},
    {id:2, img:'../../public/assets/product__3.webp',name:'Jewel Cranberries', price:'$200'},
    {id:3, img:'../../public/assets/product__4.webp',name:'Almond organic', price:'$100'},
]
const data2 = [
    {id:0, img:'../../public/assets/product__5.webp',name:'Fresh Tomato', price:'$400'},
    {id:1, img:'../../public/assets/product__2.webp',name:'Crunchy Crisps', price:'$300'},
    {id:2, img:'../../public/assets/product__3.webp',name:'Jewel Cranberries', price:'$200'},
    {id:3, img:'../../public/assets/product__1.webp',name:'Almond organic', price:'$100'},
]
import feature1 from '../../public/assets/feature__1.webp'
import feature2 from '../../public/assets/feature__2.webp'
import {AiFillStar} from 'react-icons/ai'
import {AiOutlineStar} from 'react-icons/ai'
import {AiOutlineShopping} from 'react-icons/ai'

const FeatuerSection = () => {
    
    


  return (
    <div className="container my-10">

        <div className="lg:flex justify-between items-center">
            <div>
                <h4 className="font-medium text-xl">Fruits & Vegetables</h4>
                <p className="text-gray-500 text-lg pt-3 sm:text-base">Buy farm fresh fruits and vegetables online at the best prices</p>
            </div>
            <div className="flex gap-3 mt-3">
                <button className="bg-lightGreen rounded-full text-white px-3 py-2">Fruits</button>
                <button className="hover:text-accent">Vegetables</button>
                <button className="hover:text-accent">Bread & Bakery</button>
            </div>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2 pt-8">
            <div>
                <img src={feature1} alt="" className='w-full h-full object-cover' />
            </div>

            {
                data.map((pro1) => {
                    return (
                        <div key={pro1.id} className='border border-gray-300 transition-all cursor-pointer hover:scale-105 rounded-lg'>
                            <img src={pro1.img} alt="" />

                            <div className='flex justify-between px-3 relative'>
                                <div className='flex text-yellow-400 text-xl'>
                                    <AiFillStar/>
                                    <AiFillStar/>
                                    <AiFillStar/>
                                    <AiFillStar/>
                                    <AiOutlineStar/>
                                </div>
                                <button className='bg-accent text-white w-[50px] h-[50px] rounded-full text-[28px]
                                 flex items-center justify-center -top-4 absolute right-2' >
                                    <AiOutlineShopping/>
                                </button>
                                
                            </div>

                            <h3 className='font-medium text-md p-3'>{pro1.name}</h3>
                            <p className='text-red-500 px-3 text-xl pb-3 font-semibold'>{pro1.price}</p>
                        </div>
                    )
                })
            }
        </div>


        <div className="lg:flex justify-between items-center my-5">
            <div>
                <h4 className="font-medium text-xl">Breakfast & Dairy</h4>
                <p className="text-gray-500 text-lg pt-3 sm:text-base">Buy best quality breakfast online from big-basket stop near you.</p>
            </div>
            <div className="flex gap-3 mt-3">
                <button className="bg-lightGreen rounded-full text-white px-3 py-2">Eggs & Dairy</button>
                <button className="hover:text-accent">Pizza</button>
                <button className="hover:text-accent">Snacks</button>
            </div>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2 pt-8">
            <div>
                <img src={feature2} alt="" className='w-full h-full object-cover' />
            </div>

            {
                data2.map((pro) => {
                    return (
                        <div key={pro.id} className='border border-gray-300 transition-all cursor-pointer hover:scale-105 rounded-lg'>
                            <img src={pro.img} />

                            <div className='flex justify-between px-3 relative'>
                                <div className='flex text-yellow-400 text-xl'>
                                    <AiFillStar/>
                                    <AiFillStar/>
                                    <AiFillStar/>
                                    <AiFillStar/>
                                    <AiOutlineStar/>
                                </div>
                                <button className='bg-accent text-white w-[50px] h-[50px] rounded-full text-[28px]
                                 flex items-center justify-center -top-4 absolute right-2' >
                                    <AiOutlineShopping/>
                                </button>
                                
                            </div>

                            <h3 className='font-medium text-md p-3'>{pro.name}</h3>
                            <p className='text-red-500 px-3 text-xl pb-3 font-semibold'>{pro.price}</p>
                        </div>
                    )
                })
            }
        </div>


    </div>
  )
}

export default FeatuerSection