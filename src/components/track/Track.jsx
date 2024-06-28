import { CiDiscount1 } from "react-icons/ci";
import { LiaShippingFastSolid } from "react-icons/lia";
import { BsWallet2 } from "react-icons/bs";
import { GiPositionMarker } from "react-icons/gi";
import { BiSupport } from "react-icons/bi";
const Track = () => {
    return (
        <section >
            <br />
            <br />
            <p className=" mt- 44 flex text-xl items-center justify-center text-gray-500">Best in Business </p>
            
            <h1 className=" mt-1 flex text-3xl items-center justify-center text-gray-800 ">Why &nbsp; <span className="text-blue-700">   Choose</span>  &nbsp; Us ?</h1>
            <h2 className=" text-gray-500 pl-8  sm:pl-36 sm:pr-24 mt-1 flex text-3xl items-center justify-center ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam nostrum </h2>
            <h2 className=" pl-8 text-gray-500 sm:pl-20 sm:pr-24 mt-1 flex text-3xl items-center justify-center ">necessitatibus dolores adipisci. Non, saepe.</h2>
            <div className=" mt-8 sm:ml-[650px] border-2 border-t-gray-600 sm:w-44"></div>
            <div className=" sm:p-24 flex-col sm:flex-row sm:flex sm:gap-20 gap-5 ">
             <div className=" pl-20 text-gray-500 sm:w-[450px] sm:pl-4 text-[92px]"> <CiDiscount1 />
              <h1 className=" -ml-7 text-2xl text-gray-700">Big Discounts</h1>
              <p className=" -ml-7 text-xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, laborum?</p>
             </div>
             <div className="pl-20 text-gray-500 sm:w-[450px] sm:pl-4 text-[92px]"> <LiaShippingFastSolid />
              <h1 className="-ml-7 text-2xl text-gray-700">Free Shipping</h1>
              <p className="-ml-7 text-xl ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, laborum?</p>
             </div>
             <div className="pl-20 text-gray-500 sm:w-[450px] sm:pl-4 text-[92px]"> <BsWallet2 />
              <h1 className="-ml-7 text-2xl text-gray-700">Secure Payments</h1>
              <p className="text-xl -ml-7 ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, laborum?</p>
             </div>
             <div className="pl-20 text-gray-500  sm:w-[450px] sm:pl-4 text-[92px]"> <GiPositionMarker />
              <h1 className="-ml-7 text-2xl text-gray-700">Order Tracking</h1>
              <p className=" -ml-7 text-xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, laborum?</p>
             </div>
             <div className="pl-20 text-gray-500 sm:w-[450px] sm:pl-4 text-[92px]"> <BiSupport />
              <h1 className="-ml-7 text-2xl text-gray-700">24/7 Support</h1>
              <p className=" -ml-7 text-xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, laborum?</p>
             </div>
             
            
            
           

            </div>
        </section>
    );
}

export default Track;