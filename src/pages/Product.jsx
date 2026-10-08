import { useEffect, useState } from 'react'
import { FaHeart } from 'react-icons/fa';
import { Link } from 'react-router';

function Product() {

  const [products, setProducts] = useState([]);

  useEffect(() => {
    function fetchingData() {

      fetch('https://fakestoreapi.com/products')
        .then(response => response.json())
        // .then(data => console.log(data))
        .then(data => setProducts(data))

    }
    //call function
    fetchingData();
  }, [])
  return (
    <>
      {/* Product Section */}
      <div className="mt-26">

        <div className="text-center ">
          <h3 className="text-3xl font-bold">Best Sellers</h3>
          <p className="text-gray-500 text-xl mt-4">Explore our best sellers products</p>
        </div>
        {/* Product container */}
        <div className=" mt-5 max-w-7xl mx-auto flex justify-around flex-wrap gap-y-6 px-16">

          {/* product item */}

          {products.map(pro => (

            <Link to={`/products/${pro.id}`}
              key={pro.id}
              className="bg-amber-100/50 w-[20%] min-w-62.5 p-4 mt-10 rounded shadow-[0px_0px_4px_gray] hover:shadow-[0px_0px_8px_red] hover:-translate-y-2.5 transition-all">
              <div className="p-4 h-64">
                <img src={pro.image} alt="" className="w-full h-full" />
              </div>
              <div className=''>
                <p className="line-clamp-1">{pro.title}</p>
                <p className='text-red-500 font-semibold '>$ {pro.price}</p>
              </div>
              <div className=" mt-1 flex justify-between items-center">
                <div className="bg-orange-500 w-[80%] flex justify-center py-1.5 rounded hover:bg-orange-500/80 transition-all">
                  <a 
                    href="" 
                    className="text-white">
                    Buy Now
                  </a>
                </div>
                <div className="flex justify-center p-2 ring ring-red-500 rounded hover:opacity-80 hover:cursor-pointer">
                  <FaHeart className="text-red-500"/>
                </div>

              </div>

            </Link>
          ))}

        </div>

      </div>

    </>
  )
}

export default Product