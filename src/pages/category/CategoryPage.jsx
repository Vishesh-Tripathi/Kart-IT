import React, { useContext, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Layout from '../../components/layout/Layout';
import MyContext from '../../context/MyContext';
import Loader from '../../components/loader/Loader';
import { useDispatch, useSelector } from "react-redux";
import toast from "react-hot-toast";
import { addToCart, deleteFromCart } from "../../redux/cartSlice";
import img from "../../assets/sc.png"

function CategoryPage() {
    const {categoryname}=useParams();

    const context=useContext(MyContext);
    const {getAllProducts,loading}=context;

    const navigate=useNavigate();
    console.log(categoryname);

    const filterProduct=getAllProducts.filter((obj)=>obj.category.includes(categoryname));
    const Banner = getAllProducts.filter((obj)=>obj.category.includes('Banner'));
      console.log(Banner)
    const cartItems = useSelector((state) => state.cart);
    const dispatch = useDispatch();

    const addCart = (item) => {
        // console.log(item)
        dispatch(addToCart(item));
        toast.success("Add to cart")
    }

    const deleteCart = (item) => {
        dispatch(deleteFromCart(item));
        toast.success("Delete cart")
    }

    console.log(filterProduct)

    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cartItems));
    }, [cartItems])
  return (
    <Layout>




          {/* Banner */}

         <div>{
            Banner.filter((obj)=>obj.title.includes(categoryname)).map((item,index) =>{
                const { $id, title, price, productImageUrl,quantity } = item;
                return(
                    <div key={index}>
                        <div className='w-full h-full'>
                            <img className='w-full h-full' src={productImageUrl} alt="" />
                        </div>

                    </div>
                )
            })
            
            
            }
            
            
         </div>
    <div className="mt-10">
        {/* Heading  */}
        <div className="">
            <h1 className=" text-center mb-5 text-2xl font-semibold first-letter:uppercase">{categoryname}</h1>
        </div>
        {loading ?

            <div className="flex justify-center">
                <Loader />
            </div>

            :

            <section className="text-gray-600 body-font">
                {/* main 2 */}
                <div className="container px-5 py-5 mx-auto">
                    {/* main 3  */}
                    <div className="flex flex-wrap -m-4 justify-center">
                        {filterProduct.length > 0 ?
                            <>
                                {filterProduct.slice(0,20).map((item, index) => {
                                    const { $id, title, price, productImageUrl,quantity } = item;
                                    return (
                                        <div key={index} className="p-4 w-full md:w-1/4">
                                            <div className="  justify-center items-center h-full border border-gray-300 rounded-xl overflow-hidden shadow-md cursor-pointer object-fill">
                                                <img
                                                    onClick={() => navigate(`/productinfo/${$id}`)}
                                                    className="lg:h-80  h-96   scale-75 "
                                                    src={productImageUrl}
                                                    alt="img"
                                                />
                                                <div className="p-6">
                                                    <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                                                    </h2>
                                                    <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                                                        {title.substring(0, 25)}
                                                    </h1>
                                                    <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                                                        ₹{price}
                                                    </h1>
                                                    <div className="flex justify-center ">
                                                    {cartItems.some((p) => p.$id === item.$id)

?
<button
    onClick={() => deleteCart(item)}
    className=" bg-blue-700 hover:bg-blue-600 w-full text-white py-[4px] rounded-lg font-bold">
Delete To Cart
</button>

:

<button
    onClick={() => addCart(item)}
    className=" bg-blue-500 hover:bg-blue-600 w-full text-white py-[4px] rounded-lg font-bold">
Add To Cart
</button>
}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })}
                            </>

                            :

                            <div>
                                <div className="flex justify-center">
                                    <img className=" mb-2" src="https://cdn-icons-png.flaticon.com/128/2748/2748614.png" alt="" />
                                </div>
                                <h1 className=" text-black text-xl">No {categoryname} product found</h1>
                            </div>
                        }
                    </div>
                </div>
            </section>

        }
    </div>
</Layout>
  )
}

export default CategoryPage