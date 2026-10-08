import { useEffect, useState } from 'react'
import { TbMathGreater } from "react-icons/tb";
import { useParams } from 'react-router';

function ProductDetail() {

    //JavaScript
    const route = useParams();
    // console.log(route)
    
    const [products, setProduct] = useState([]);
    // let count = 1;
    const [count, setCount] = useState(1);


    const increase = () => {
        setCount(count + 1);
    }
    const decrease = () => {
        if(count == 1){
            setCount(1)
        }else{
            setCount(count - 1);
        }
    }
  
    useEffect(() => {
  
      //create function
      const fetchingData = async () => {
        const respone = await fetch(`https://fakestoreapi.com/products/${route.id}`);
        // console.log(respone);
        const data = await respone.json();
        // console.log(data);
        setProduct(data);
      }
      //call function
      fetchingData();
    }, [])

  return (
    <div className="h-140">

            <div className=" p-4">

                <div className=" bg-gray-100 flex items-center m-auto gap-2 max-w-[90%] lg:max-w-[70%] mx-auto text-sm">
                    <a href="">Home</a>
                    <TbMathGreater />
                    <a href="">Product</a>
                    <TbMathGreater />
                    <p>{products.title}</p>
                </div>

                <div className=" flex justify-center max-w-[90%] lg:max-w-[70%] m-auto mt-12">
                    <div className="w-[50%] h-110 p-6 ">
                        <div className="w-full h-full px-24">
                            <img className="w-full h-full" src={products.image} alt="" />
                        </div>
                    </div>
                    <div className="w-[50%]">
                        <h3 className="text-gray-500 uppercase text-xl">{products.category}</h3>
                        <h2 className="text-3xl mt-2">{products.title}</h2>
                        <h2 className="text-2xl font-bold mt-2">{products.price}</h2>
                        <div className="mt-6 flex items-center gap-6">
                            <div className="flex gap-6 border border-gray-300 px-5 py-2 text-sm font-bold rounded">
                                <button onClick={decrease}>-</button>
                                <span>{count}</span>
                                <button onClick={increase}>+</button>
                            </div>
                            <div>
                                <button className="bg-orange-500/90 text-white px-5 py-2 rounded">
                                    Add to cart
                                </button>
                            </div>
                        </div>
                        <hr className="mt-4"/>
                        <p className="mt-4 text-gray-500">
                            {products.description}
                        </p>

                    </div>
                </div>
            </div>
    </div>
  )
}

export default ProductDetail