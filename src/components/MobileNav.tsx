import {BsSearch} from 'react-icons/bs'
import {BsCart} from 'react-icons/bs'
import {AiOutlineUser} from 'react-icons/ai'
import {BiMenu} from 'react-icons/bi'
import CartCount from './CartCount'

const MobileNav = ({setShowCart}: any) => {
  return (
    <div className="sticky bg-white top-0 z-10">
        <div className="container p-8 lg:hidden">
            <div className="flex justify-between items-center">
                
                <div className="flex items-center gap-6">
                  <BiMenu  size={30}/>
                  <BsSearch size={24} />
                </div>
                <h1 className="text-4xl font-medium">Logo</h1>

                <div className="flex gap-4 text-[30px]">
                    <AiOutlineUser />
                

                    <div className="cursor-pointer relative"
                    onClick={() => setShowCart(true)}>
                        <BsCart />
                        <CartCount size='w-[20px] h-[20px]' />
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default MobileNav