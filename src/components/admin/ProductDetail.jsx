import { Link, useNavigate } from "react-router-dom";
import service from "../../appwrite/config";
import { useContext } from "react";
import MyContext from "../../context/MyContext";
import Loader from "../loader/Loader";
import MyState from "../../context/MyState";

const ProductDetail = () => {
    const context=useContext(MyContext);
    const{loading,setLoading,getAllProducts,getAllProductsFunction}=context;

    const navigate=useNavigate();
    const deleteProduct=async(id)=>{
        setLoading(true);
        try{
            await service.deletedoc($id)
            toast.success('Product Deleted successfully')
            getAllProductsFunction();
            setLoading(false);
        }catch(error){
            console.log("not deleted");
            setLoading(false);
        }
    }
    return (
        <div>
            <div className="py-5 flex justify-between items-center">
                {/* text  */}
                <h1 className=" text-xl text-blue-300 font-bold">All Product</h1>
                {/* Add Product Button  */}
                <Link to={'/addproduct'}>
                    <button className="px-5 py-2 bg-blue-50 border border-blue-100 rounded-lg">Add Product</button>
                </Link>
            </div>

            {/* Loading  */}
            <div className="flex justify-center relative top-20">
                {loading && <Loader />}
            </div>

            {/* table  */}
            <div className="w-full overflow-x-auto mb-5">
                <table className="w-full text-left border border-collapse sm:border-separate border-blue-100 text-blue-400" >
                    <tbody>
                        <tr>
                            <th scope="col" className="h-12 px-6 text-md border-l first:border-l-0 border-blue-100 text-slate-700 bg-slate-100 font-bold fontPara">S.No.</th>
                            <th scope="col" className="h-12 px-6 text-md border-l first:border-l-0 border-blue-100 text-slate-700 bg-slate-100 font-bold fontPara">Image</th>
                            <th scope="col" className="h-12 px-6 text-md font-bold fontPara border-l first:border-l-0 border-blue-100 text-slate-700 bg-slate-100">Title</th>
                            <th scope="col" className="h-12 px-6 text-md font-bold fontPara border-l first:border-l-0 border-blue-100 text-slate-700 bg-slate-100">Price</th>
                            <th scope="col" className="h-12 px-6 text-md font-bold fontPara border-l first:border-l-0 border-blue-100 text-slate-700 bg-slate-100">Category</th>
                            <th scope="col" className="h-12 px-6 text-md font-bold fontPara border-l first:border-l-0 border-blue-100 text-slate-700 bg-slate-100">Date</th>
                            <th scope="col" className="h-12 px-6 text-md font-bold fontPara border-l first:border-l-0 border-blue-100 text-slate-700 bg-slate-100">Action</th>
                            <th scope="col" className="h-12 px-6 text-md font-bold fontPara border-l first:border-l-0 border-blue-100 text-slate-700 bg-slate-100">Action</th>
                        </tr>
                        {getAllProducts.map((item,index)=>{
                            const { $id, title, price, category, date, productImageUrl,quantity} = item
                            return (
                                <tr key={index} className="text-blue-300">
                            <td className="h-12 px-6 text-md transition duration-300 border-t border-l first:border-l-0 border-blue-100 stroke-slate-500 text-slate-500 ">
                                {index+1}
                            </td>
                            <td className="h-12 px-6 text-md transition duration-300 border-t border-l first:border-l-0 border-blue-100 stroke-slate-500 text-slate-500 first-letter:uppercase ">
                                        <div className="flex justify-center">
                                            <img className="w-20 " src={productImageUrl} alt="T-shirt" />
                                        </div>
                            </td>
                            <td className="h-12 px-6 text-md transition duration-300 border-t border-l first:border-l-0 border-blue-100 stroke-slate-500 text-slate-500 first-letter:uppercase ">
                                {title}
                            </td>
                            <td className="h-12 px-6 text-md transition duration-300 border-t border-l first:border-l-0 border-blue-100 stroke-slate-500 text-slate-500 first-letter:uppercase ">
                                ₹{price}
                            </td>
                            <td className="h-12 px-6 text-md transition duration-300 border-t border-l first:border-l-0 border-blue-100 stroke-slate-500 text-slate-500 first-letter:uppercase ">
                                {category}
                            </td>
                            <td className="h-12 px-6 text-md transition duration-300 border-t border-l first:border-l-0 border-blue-100 stroke-slate-500 text-slate-500 first-letter:uppercase ">
                                {date}
                            </td>
                            <td onClick={()=>navigate(`/updateproduct/${$id}`)} className="h-12 px-6 text-md transition duration-300 border-t border-l first:border-l-0 border-blue-100 stroke-slate-500 text-slate-500 text-green-500 cursor-pointer ">
                                Edit
                            </td>
                            <td onClick={()=>deleteProduct($id)} className="h-12 px-6 text-md transition duration-300 border-t border-l first:border-l-0 border-blue-100 stroke-slate-500 text-slate-500 text-red-500 cursor-pointer ">
                                Delete
                            </td>
                        </tr>
                            )
                        })}
                        
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default ProductDetail;