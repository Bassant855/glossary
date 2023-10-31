import category1 from '../../public/assets/category__1.webp'
import category2 from '../../public/assets/category__2.webp'
import category3 from '../../public/assets/category__3.webp'
import category4 from '../../public/assets/category__4.webp'
import category5 from '../../public/assets/category__5.webp'
import category6 from '../../public/assets/category__6.webp'
import category7 from '../../public/assets/category__7.webp'

const Category = () => {
  return (
    <div className="container my-10 grid  gap-4 sm:grid-clos-2 md:grid-cols-3 lg:grid-cols-4">

        <div className="categoryCard">
            <div>
                <h3 className="text-xl font-medium">Fresh Fruits</h3>
                <p className="text-lg text-gray-500 pt-3">9 Products</p>
            </div>
            <img src={category1} alt="category img" className='w-[100px] h-[100px]'/>
        </div>

        <div className="categoryCard">
            <div>
                <h3 className="text-xl font-medium">Fresh Vegs</h3>
                <p className="text-lg text-gray-500 pt-3">8 Products</p>
            </div>
            <img src={category2} alt="category img" className='w-[100px] h-[100px]'/>
        </div>

        <div className="categoryCard">
            <div>
                <h3 className="text-xl font-medium">Canned Goods</h3>
                <p className="text-lg text-gray-500 pt-3">10 Products</p>
            </div>
            <img src={category3} alt="category img" className='w-[100px] h-[100px]'/>
        </div>

        <div className="categoryCard">
            <div>
                <h3 className="text-xl font-medium">Bread & Bakery</h3>
                <p className="text-lg text-gray-500 pt-3">12 Products</p>
            </div>
            <img src={category4} alt="category img" className='w-[100px] h-[100px]'/>
        </div>

        <div className="categoryCard">
            <div>
                <h3 className="text-xl font-medium">Fishes</h3>
                <p className="text-lg text-gray-500 pt-3">10 Products</p>
            </div>
            <img src={category5} alt="category img" className='w-[100px] h-[100px]'/>
        </div>

        <div className="categoryCard">
            <div>
                <h3 className="text-xl font-medium">Eggs & Dairy</h3>
                <p className="text-lg text-gray-500 pt-3">7 Products</p>
            </div>
            <img src={category6} alt="category img" className='w-[100px] h-[100px]'/>
        </div>

        <div className="categoryCard">
            <div>
                <h3 className="text-xl font-medium">Soft Drinks</h3>
                <p className="text-lg text-gray-500 pt-3">5 Products</p>
            </div>
            <img src={category7} alt="category img" className='w-[100px] h-[100px]'/>
        </div>

        <div className="categoryCard">
            <div>
                <h3 className="text-xl font-medium">Fresh Fruits</h3>
                <p className="text-lg text-gray-500 pt-3">9 Products</p>
            </div>
            <img src={category1} alt="category img" className='w-[100px] h-[100px]'/>
        </div>


    </div>
  )
}

export default Category