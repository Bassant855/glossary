import {BsSearch} from 'react-icons/bs'
import {BsCart} from 'react-icons/bs'
import {AiOutlineUser} from 'react-icons/ai'
import CartCount from './CartCount'
const Navbar = ({setShowCart}: any) => {
  return (
    <div className="sticky bg-white top-0 z-10">
        <div className="container hidden lg:block">
            <div className="flex justify-between items-center p-8">
                <h1 className="text-4xl font-medium">Logo</h1>
                <div className="relative w-full max-w-[500px]">
                    <input 
                    className="bg-[#f2f3f5] border-none outline-none px-6 py-3 rounded-[30px] w-full" 
                    type="text" 
                    placeholder="Search Product...." />
                    <BsSearch className="absolute top-0 right-0 mt-4 mr-5 text-gray-500" size={20}/>
                </div>

                <div className="flex gap-4">
                    <div className="icons_wrapper">
                        <AiOutlineUser/>
                    </div>
                    <div className="icons_wrapper relative cursor-pointer"
                     onClick={() => setShowCart(true)}>
                        <BsCart/>
                        <CartCount size='w-[25px] h-[25px]' />
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar