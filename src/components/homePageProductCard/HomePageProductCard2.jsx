import { useDispatch, useSelector } from "react-redux";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import { useNavigate } from "react-router-dom";
import { addToCart, deleteFromCart } from "../../redux/cartSlice";
import toast from "react-hot-toast";
import { useEffect,useState } from "react";
import Image1 from "../../assets/assets/category/vr.png"
// import Image1 from "../../assets/assets/category/vr.png";
// import Image2 from "../../assets/assets/category/headphone.png";
import Image2 from "../../assets/assets/category/macbook.png";
import Image3 from "../../assets/assets/category/watch.png";
import Image4 from "../../assets/assets/category/speaker1.png";
import Image5 from "../../assets/assets/hero/headphone.png";
import Image6 from "../../assets/assets/category/gaming.png";
import Image7 from "../../assets/assets/category/gaming.png";
import Image8 from "../../assets/assets/category/gaming.png";
import Slider from "react-slick";
import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Button,
  } from "@material-tailwind/react";


// productData 
const productData1 = [
    {
        id: 1,
        image: 'https://5.imimg.com/data5/FB/GW/US/SELLER-56407887/cool-color-trousers-500x500.jpg',
        title: 'Hand Painted Blue Kaushalam Tea Pot in Aluminium',
        desc: 'Shop Hand Painted Blue Kaushalam Tea Pot in Aluminium, handmade by Mrinalika Jain. Fair pricing. Ethically made. Positive impact.',
        price: 150,
        trendingProductName: 'Featured',
        quantity: 1,
    },
    {
        id: 2,
        image: 'https://images-cdn.ubuy.co.in/65c7a9d49d4cd77c907e1eed-penkiiy-plus-size-womens-casual-long.jpg',
        title: 'Kaushalam kalash Copper Pot',
        desc: 'Shop Hand Painted Blue Kaushalam Tea Pot in Aluminium, handmade by Mrinalika Jain. Fair pricing. Ethically made. Positive impact.',
        price: 120,
        trendingProductName: 'Featured',
        quantity: 1,
    },
    {
        id: 3,
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ75WS4sguKrHI6tC4mHdXgHAx-4vHQ6kN_9Q&s',
        title: 'Hand Painted Blue Kaushalam Tea Pot in Aluminium',
        desc: 'Shop Hand Painted Blue Kaushalam Tea Pot in Aluminium, handmade by Mrinalika Jain. Fair pricing. Ethically made. Positive impact.',
        price: 130,
        trendingProductName: 'Featured',
        quantity: 1,
    },
    {
        id: 4,
        image: 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/c7ca30c9-1374-49a1-b7d8-77925d2fdace/sportswear-essential-womens-oversized-t-shirt-ttnp64.png',
        title: 'Hand Painted Blue Kaushalam Tea Pot in Aluminium',
        desc: 'Shop Hand Painted Blue Kaushalam Tea Pot in Aluminium, handmade by Mrinalika Jain. Fair pricing. Ethically made. Positive impact.',
        price: 120,
        trendingProductName: 'Featured',
        quantity: 1,
    },
 
]
const productData2 = [
    {
        id: 1,
        image: Image5,
        title: 'Best Selling wireless Headphones',
        desc: 'Shop Hand Painted Blue Kaushalam Tea Pot in Aluminium, handmade by Mrinalika Jain. Fair pricing. Ethically made. Positive impact.',
        price: 950,
        trendingProductName: 'Featured',
        quantity: 1,
    },
    {
        id: 2,
        image: Image2,
        title: 'Gaming Laptops',
        desc: 'Shop Hand Painted Blue Kaushalam Tea Pot in Aluminium, handmade by Mrinalika Jain. Fair pricing. Ethically made. Positive impact.',
        price: 120000,
        trendingProductName: 'Featured',
        quantity: 1,
    },
    
    {
        id: 3,
        image:"https://images-cdn.ubuy.co.in/633b12488d2edc65997f4c20-smart-watch-bluetooth-smartwatch-touch.jpg",
        title: 'Firebolt Andriod watch',
        desc: 'Shop Hand Painted Blue Kaushalam Tea Pot in Aluminium, handmade by Mrinalika Jain. Fair pricing. Ethically made. Positive impact.',
        price: 1200,
        trendingProductName: 'Featured',
        quantity: 1,
    },
    {
        id: 4,
        image: "https://media.croma.com/image/upload/v1701198128/Croma%20Assets/Large%20Appliances/Washers%20and%20Dryers/Images/269579_5_yyybp5.png",
        title: 'Samsung Washing Machine',
        desc: 'Shop Hand Painted Blue Kaushalam Tea Pot in Aluminium, handmade by Mrinalika Jain. Fair pricing. Ethically made. Positive impact.',
        price: 30000,
        trendingProductName: 'Featured',
        quantity: 1,
    },
 
]
const productData3 = [
    {
        id: 1,
        image: "https://images-static.nykaa.com/media/catalog/product/1/7/17abb77RLL0101_3.jpg?tr=w-500",
        title: 'RedTape Sneakers',
        desc: 'Shop Hand Painted Blue Kaushalam Tea Pot in Aluminium, handmade by Mrinalika Jain. Fair pricing. Ethically made. Positive impact.',
        price: 950,
        trendingProductName: 'Featured',
        quantity: 1,
    },
    {
        id: 2,
        image:"https://images-cdn.ubuy.co.in/637032c1e7e7471cb02f2004-huohuli-men-39-s-casual-sandals-leather.jpg",
        title: 'Bata Sandles for Women',
        desc: 'Shop Hand Painted Blue Kaushalam Tea Pot in Aluminium, handmade by Mrinalika Jain. Fair pricing. Ethically made. Positive impact.',
        price: 1200,
        trendingProductName: 'Featured',
        quantity: 1,
    },
    
    {
        id: 3,
        image:"https://admin.mochishoes.com/product/60-2/660/60-2M11.jpg",
        title: 'Bata Mens Sandlas',
        desc: 'Shop Hand Painted Blue Kaushalam Tea Pot in Aluminium, handmade by Mrinalika Jain. Fair pricing. Ethically made. Positive impact.',
        price: 1200,
        trendingProductName: 'Featured',
        quantity: 1,
    },
    {
        id: 4,
        image: "https://images-cdn.ubuy.co.in/634d34a19426bc551558c49c-crocs-mens-womens-bayaband-clog-shoes.jpg",
        title: 'Crocs clogs ',
        desc: 'Shop Hand Painted Blue Kaushalam Tea Pot in Aluminium, handmade by Mrinalika Jain. Fair pricing. Ethically made. Positive impact.',
        price: 2500,
        trendingProductName: 'Featured',
        quantity: 1,
    },
 
]

const HomePageProductCard = () => {
    const[checkLogin,setCheckLogin] = useState(false);
    const settings ={
        dots: false,
        arrows : true,
        infinite: true,
        speed: 1000,
        autoplay:true,
        // slidesToShow: 1,
        slidesToScroll: 1,
        autoplaySpeed: 4000,
        cssEase: "ease-in-out",
        pauseOnHover: false,
        pauseOnFocus: true,
        rows:1,
      
       };
       const user=JSON.parse(localStorage.getItem('user'));
       useEffect(()=>{
        if(user == null){
          setCheckLogin(false)
        }else{
          setCheckLogin(true)
        }
        // console.log(user.labels)
      },[user])
    const navigate=useNavigate();

    const cartitems = useSelector((state)=> state.cart);
    const dispatch = useDispatch();

    const invalid = (item) =>{
        toast.error("Please Login");
    }

    const addcart = (item)=>{
        dispatch(addToCart(item));
        toast.success("Add to cart");
    }
    const deleteCart =(item)=>{
        dispatch(deleteFromCart(item));
        toast.success("Delete Cart")
    }

    useEffect(()=>{
     localStorage.setItem('cart',JSON.stringify(cartitems));
    },[cartitems])

    
    return (
        <div className=" ">
        {checkLogin === true ? (<div className="mt-10">
            {/* Heading  */}
            <div className="">
                <h1 className=" text-center mb-5 text-2xl font-semibold">Bestselling Products</h1>
            </div>
<Carousel 
            responsive={{
                desktop: {
                  breakpoint: {
                    max: 3000,
                    min: 1024
                  },
                  items: 4,
                  partialVisibilityGutter: 40
                },
                mobile: {
                  breakpoint: {
                    max: 464,
                    min: 0
                  },
                  items: 1,
                  partialVisibilityGutter: 30
                },
                tablet: {
                  breakpoint: {
                    max: 1024,
                    min: 464
                  },
                  items: 2,
                  partialVisibilityGutter: 30
                }
              }}
   additionalTransfrom={0}
   arrows
   autoPlaySpeed={3000}
   centerMode={false}
   className=""
   containerClass="container-with-dots"
   dotListClass=""
   draggable
   focusOnSelect={false}
   infinite
   itemClass=""
   keyBoardControl
   minimumTouchDrag={80}
   pauseOnHover
   renderArrowsWhenDisabled={false}
   renderButtonGroupOutside={false}
   renderDotsOutside={false}
   rewind={false}
   rewindWithAnimation={false}
   rtl={false}
   shouldResetAutoplay
   showDots={false}
   sliderClass=""
   slidesToSlide={1}
   swipeable
  
 >
    
 <Card className="w-76">
    <CardHeader shadow={false} floated={false} className="h-96">
        <img
          src="https://rukminim2.flixcart.com/image/312/312/xif0q/washing-machine-new/t/7/o/-original-imahy4fbmgmdgpsk.jpeg?q=70"
          alt="card-image"
          className="h-full w-full object-cover"
        />
      </CardHeader>
      <CardBody>
        <div className="mb-2 flex items-center justify-between">
          <Typography color="blue-gray" className="font-medium">
            Apple AirPods
          </Typography>
          <Typography color="blue-gray" className="font-medium">
            $95.00
          </Typography>
        </div>
        <Typography
          variant="small"
          color="gray"
          className="font-normal opacity-75"
        >
          With plenty of talk and listen time, voice-activated Siri access, and
          an available wireless charging case.
        </Typography>
      </CardBody>
      <CardFooter className="pt-0">
        <Button
         onClick={()=>addcart(item)}
          ripple={false}
          fullWidth={true}
          className="bg-blue-gray-900/10 text-blue-gray-900 shadow-none hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100"
        >
          Add to Cart
        </Button>
      </CardFooter>
    </Card>	
    <Card className="w-76">
      <CardHeader shadow={false} floated={false} className="h-96">
        <img
         src="https://rukminim2.flixcart.com/image/612/612/xif0q/painting/n/3/d/24-3-sanfs36055-saf-original-imahfy528m4z2g8j.jpeg?q=70"
          alt="card-image"
          className="h-full w-full object-cover"
        />
      </CardHeader>
      <CardBody>
        <div className="mb-2 flex items-center justify-between">
          <Typography color="blue-gray" className="font-medium">
            Apple AirPods
          </Typography>
          <Typography color="blue-gray" className="font-medium">
            $95.00
          </Typography>
        </div>
        <Typography
          variant="small"
          color="gray"
          className="font-normal opacity-75"
        >
          With plenty of talk and listen time, voice-activated Siri access, and
          an available wireless charging case.
        </Typography>
      </CardBody>
      <CardFooter className="pt-0">
        <Button
        onClick={()=>addcart(item)}
          ripple={false}
          fullWidth={true}
          className="bg-blue-gray-900/10 text-blue-gray-900 shadow-none hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100"
        >
          Add to Cart
        </Button>
      </CardFooter>
    </Card>
    <Card className="w-76">
      <CardHeader shadow={false} floated={false} className="h-96">
        <img 
          src="https://rukminim2.flixcart.com/image/312/312/xif0q/tablet/o/c/q/-original-imagj72vyhczg7ww.jpeg?q=70"
          className=" p-5 h-full w-full object-cover"
        />
      </CardHeader>
      <CardBody>
        <div className="mb-2 flex items-center justify-between">
          <Typography color="blue-gray" className="font-medium">
            Apple AirPods
          </Typography>
          <Typography color="blue-gray" className="font-medium">
            $95.00
          </Typography>
        </div>
        <Typography
          variant="small"
          color="gray"
          className="font-normal opacity-75"
        >
          With plenty of talk and listen time, voice-activated Siri access, and
          an available wireless charging case.
        </Typography>
      </CardBody>
      <CardFooter className="pt-0">
        <Button
          ripple={false}
          onClick={()=>addcart(item)}
          
          fullWidth={true}
          className="bg-blue-gray-900/10 text-blue-gray-900 shadow-none hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100"
        >
          Add to Cart
        </Button>
      </CardFooter>
    </Card> 
    <Card className="w-76">
      <CardHeader shadow={false} floated={false} className="h-96">
        <img
         src="https://rukminim2.flixcart.com/image/612/612/xif0q/smartwatch/h/n/f/39-t55-pinka-142-android-ios-wtg-yes-original-imagxqzprvda9fgm.jpeg?q=70"
          alt="card-image"
          className="h-full p-12 w-full object-cover"
        />
      </CardHeader>
      <CardBody>
        <div className="mb-2 flex items-center justify-between">
          <Typography color="blue-gray" className="font-medium">
            Apple AirPods
          </Typography>
          <Typography color="blue-gray" className="font-medium">
            $95.00
          </Typography>
        </div>
        <Typography
          variant="small"
          color="gray"
          className="font-normal opacity-75"
        >
          With plenty of talk and listen time, voice-activated Siri access, and
          an available wireless charging case.
        </Typography>
      </CardBody>
      <CardFooter className="pt-0">
         <div className="flex justify-center ">
                                            {cartitems.some((p)=>p.id === item.id)
                                              ?
                                              <button onClick={()=>deleteCart(item)}  className=" bg-blue-600 hover:bg-blue-800 w-full text-white py-[4px] rounded-lg font-bold">
                                             Delete From Cart
                                          </button>
                                          :
                                          <button onClick={()=>addcart(item)}  className=" bg-blue-600 hover:bg-blue-800 w-full text-white py-[4px] rounded-lg font-bold">
                                          Add To Cart
                                      </button>
                                              }
                                            </div>
      </CardFooter>
    </Card> 
    <Card className="w-76">
      <CardHeader shadow={false} floated={false} className="h-96">
        <img
          src="https://rukminim2.flixcart.com/image/612/612/xif0q/trouser/2/u/s/m-pl1527-libas-original-imagvkhkxddxv3qe.jpeg?q=70"
          alt="card-image"
          className="h-full w-full object-cover"
        />
      </CardHeader>
      <CardBody>
        <div className="mb-2 flex items-center justify-between">
          <Typography color="blue-gray" className="font-medium">
            Apple AirPods
          </Typography>
          <Typography color="blue-gray" className="font-medium">
            $95.00
          </Typography>
        </div>
        <Typography
          variant="small"
          color="gray"
          className="font-normal opacity-75"
        >
          With plenty of talk and listen time, voice-activated Siri access, and
          an available wireless charging case.
        </Typography>
      </CardBody>
      <CardFooter className="pt-0">
         <div className="flex justify-center ">
                                            {cartitems.some((p)=>p.id === item.id)
                                              ?
                                              <button onClick={()=>deleteCart(item)}  className=" bg-blue-600 hover:bg-blue-800 w-full text-white py-[4px] rounded-lg font-bold">
                                             Delete From Cart
                                          </button>
                                          :
                                          <button onClick={()=>addcart(item)}  className=" bg-blue-600 hover:bg-blue-800 w-full text-white py-[4px] rounded-lg font-bold">
                                          Add To Cart
                                      </button>
                                              }
                                            </div>
      </CardFooter>
    </Card>
    <Card className="w-76">
      <CardHeader shadow={false} floated={false} className="h-96">
        <img
          src="https://rukminim2.flixcart.com/image/612/612/k7gikcw0/kurta/d/p/6/m-11024036-house-of-pataudi-original-imafpzgszjzrnzbd.jpeg?q=70"
          alt="card-image"
          className="h-full w-full object-cover"
        />
      </CardHeader>
      <CardBody>
        <div className="mb-2 flex items-center justify-between">
          <Typography color="blue-gray" className="font-medium">
            Apple AirPods
          </Typography>
          <Typography color="blue-gray" className="font-medium">
            $95.00
          </Typography>
        </div>
        <Typography
          variant="small"
          color="gray"
          className="font-normal opacity-75"
        >
          With plenty of talk and listen time, voice-activated Siri access, and
          an available wireless charging case.
        </Typography>
      </CardBody>
      <CardFooter className="pt-0">
         <div className="flex justify-center ">
                                            {cartitems.some((p)=>p.id === item.id)
                                              ?
                                              <button onClick={()=>deleteCart(item)}  className=" bg-blue-600 hover:bg-blue-800 w-full text-white py-[4px] rounded-lg font-bold">
                                             Delete From Cart
                                          </button>
                                          :
                                          <button onClick={()=>addcart(item)}  className=" bg-blue-600 hover:bg-blue-800 w-full text-white py-[4px] rounded-lg font-bold">
                                          Add To Cart
                                      </button>
                                              }
                                            </div>
      </CardFooter>
    </Card>
    <Card className="w-76">
      <CardHeader shadow={false} floated={false} className="h-96">
        <img
          src="https://rukminim2.flixcart.com/image/612/612/xif0q/shoe/8/v/z/-original-imagz7u7hmwsvh4g.jpeg?q=70"
          alt="card-image"
          className="h-full w-full object-cover"
        />
      </CardHeader>
      <CardBody>
        <div className="mb-2 flex items-center justify-between">
          <Typography color="blue-gray" className="font-medium">
            Apple AirPods
          </Typography>
          <Typography color="blue-gray" className="font-medium">
            $95.00
          </Typography>
        </div>
        <Typography
          variant="small"
          color="gray"
          className="font-normal opacity-75"
        >
          With plenty of talk and listen time, voice-activated Siri access, and
          an available wireless charging case.
        </Typography>
      </CardBody>
      <CardFooter className="pt-0">
        <Button
          ripple={false}
          fullWidth={true}
          className="bg-blue-gray-900/10 text-blue-gray-900 shadow-none hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100"
        >
          Add to Cart
        </Button>
      </CardFooter>
    </Card>    
    <Card className="w-76">
      <CardHeader shadow={false} floated={false} className="h-96">
        <img
          src="https://rukminim2.flixcart.com/image/612/612/xif0q/shoe/6/k/t/7-rlo0845-7-red-tape-white-original-imagp2a6gnunm9jr.jpeg?q=70"
          alt="card-image"
          className="h-full w-full object-cover"
        />
      </CardHeader>
      <CardBody>
        <div className="mb-2 flex items-center justify-between">
          <Typography color="blue-gray" className="font-medium">
            Apple AirPods
          </Typography>
          <Typography color="blue-gray" className="font-medium">
            $95.00
          </Typography>
        </div>
        <Typography
          variant="small"
          color="gray"
          className="font-normal opacity-75"
        >
          With plenty of talk and listen time, voice-activated Siri access, and
          an available wireless charging case.
        </Typography>
      </CardBody>
      <CardFooter className="pt-0">
         <div className="flex justify-center ">
                                            {cartitems.some((p)=>p.id === item.id)
                                              ?
                                              <button onClick={()=>deleteCart(item)}  className=" bg-blue-600 hover:bg-blue-800 w-full text-white py-[4px] rounded-lg font-bold">
                                             Delete From Cart
                                          </button>
                                          :
                                          <button onClick={()=>addcart(item)}  className=" bg-blue-600 hover:bg-blue-800 w-full text-white py-[4px] rounded-lg font-bold">
                                          Add To Cart
                                      </button>
                                              }
                                            </div>
      </CardFooter>
    </Card> 
</Carousel>
                             {/* best of Fashion */}
            <h1 className=" ml-[650px] font-bold text-2xl">Best Of Fashion</h1>
<Carousel
            responsive={{
                desktop: {
                  breakpoint: {
                    max: 3000,
                    min: 1024
                  },
                  items: 4,
                  partialVisibilityGutter: 40
                },
                mobile: {
                  breakpoint: {
                    max: 464,
                    min: 0
                  },
                  items: 1,
                  partialVisibilityGutter: 30
                },
                tablet: {
                  breakpoint: {
                    max: 1024,
                    min: 464
                  },
                  items: 2,
                  partialVisibilityGutter: 30
                }
              }}
   additionalTransfrom={0}
   arrows
   autoPlaySpeed={3000}
   centerMode={false}
   className=""
   containerClass="container-with-dots"
   dotListClass=""
   draggable
   focusOnSelect={false}
   infinite
   itemClass=""
   keyBoardControl
   minimumTouchDrag={80}
   pauseOnHover
   renderArrowsWhenDisabled={false}
   renderButtonGroupOutside={false}
   renderDotsOutside={false}
   rewind={false}
   rewindWithAnimation={false}
   rtl={false}
   shouldResetAutoplay
   showDots={false}
   sliderClass=""
   slidesToSlide={1}
   swipeable
  
>
    
 <Card className="w-76">
    <CardHeader shadow={false} floated={false} className="h-96">
        <img
          src="https://rukminim2.flixcart.com/image/612/612/xif0q/smartwatch/n/9/v/-original-imagz38tra6nqxvc.jpeg?q=70"
          alt="card-image"
          className="h-full w-full object-cover"
        />
      </CardHeader>
      <CardBody>
        <div className="mb-2 flex items-center justify-between">
          <Typography color="blue-gray" className="font-medium">
            Apple AirPods
          </Typography>
          <Typography color="blue-gray" className="font-medium">
            $95.00
          </Typography>
        </div>
        <Typography
          variant="small"
          color="gray"
          className="font-normal opacity-75"
        >
          With plenty of talk and listen time, voice-activated Siri access, and
          an available wireless charging case.
        </Typography>
      </CardBody>
      <CardFooter className="pt-0">
         <div className="flex justify-center ">
                                            {cartitems.some((p)=>p.id === item.id)
                                              ?
                                              <button onClick={()=>deleteCart(item)}  className=" bg-blue-600 hover:bg-blue-800 w-full text-white py-[4px] rounded-lg font-bold">
                                             Delete From Cart
                                          </button>
                                          :
                                          <button onClick={()=>addcart(item)}  className=" bg-blue-600 hover:bg-blue-800 w-full text-white py-[4px] rounded-lg font-bold">
                                          Add To Cart
                                      </button>
                                              }
                                            </div>
      </CardFooter>
    </Card>	
    <Card className="w-76">
      <CardHeader shadow={false} floated={false} className="h-96">
        <img
         src={Image2}
          alt="card-image"
          className="h-full w-full object-cover"
        />
      </CardHeader>
      <CardBody>
        <div className="mb-2 flex items-center justify-between">
          <Typography color="blue-gray" className="font-medium">
            Apple AirPods
          </Typography>
          <Typography color="blue-gray" className="font-medium">
            $95.00
          </Typography>
        </div>
        <Typography
          variant="small"
          color="gray"
          className="font-normal opacity-75"
        >
          With plenty of talk and listen time, voice-activated Siri access, and
          an available wireless charging case.
        </Typography>
      </CardBody>
      <CardFooter className="pt-0">
         <div className="flex justify-center ">
                                            {cartitems.some((p)=>p.id === item.id)
                                              ?
                                              <button onClick={()=>deleteCart(item)}  className=" bg-blue-600 hover:bg-blue-800 w-full text-white py-[4px] rounded-lg font-bold">
                                             Delete From Cart
                                          </button>
                                          :
                                          <button onClick={()=>addcart(item)}  className=" bg-blue-600 hover:bg-blue-800 w-full text-white py-[4px] rounded-lg font-bold">
                                          Add To Cart
                                      </button>
                                              }
                                            </div>
      </CardFooter>
    </Card>
    <Card className="w-76">
      <CardHeader shadow={false} floated={false} className="h-96">
        <img
          src="https://images.unsplash.com/photo-1629367494173-c78a56567877?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=927&q=80"
          alt="card-image"
          className="h-full    w-full object-cover"
        />
      </CardHeader>
      <CardBody>
        <div className="mb-2 flex items-center justify-between">
          <Typography color="blue-gray" className="font-medium">
            Apple AirPods
          </Typography>
          <Typography color="blue-gray" className="font-medium">
            $95.00
          </Typography>
        </div>
        <Typography
          variant="small"
          color="gray"
          className="font-normal opacity-75"
        >
          With plenty of talk and listen time, voice-activated Siri access, and
          an available wireless charging case.
        </Typography>
      </CardBody>
      <CardFooter className="pt-0">
         <div className="flex justify-center ">
                                            {cartitems.some((p)=>p.id === item.id)
                                              ?
                                              <button onClick={()=>deleteCart(item)}  className=" bg-blue-600 hover:bg-blue-800 w-full text-white py-[4px] rounded-lg font-bold">
                                             Delete From Cart
                                          </button>
                                          :
                                          <button onClick={()=>addcart(item)}  className=" bg-blue-600 hover:bg-blue-800 w-full text-white py-[4px] rounded-lg font-bold">
                                          Add To Cart
                                      </button>
                                              }
                                            </div>
      </CardFooter>
    </Card> 
    <Card className="w-76">
      <CardHeader shadow={false} floated={false} className="h-96">
        <img
         src="https://rukminim2.flixcart.com/image/612/612/xif0q/headphone/b/q/i/-original-imagmu7vmqq7gbu2.jpeg?q=70"
          alt="card-image"
          className="h-full w-full object-cover"
        />
      </CardHeader>
      <CardBody>
        <div className="mb-2 flex items-center justify-between">
          <Typography color="blue-gray" className="font-medium">
            Apple AirPods
          </Typography>
          <Typography color="blue-gray" className="font-medium">
            $95.00
          </Typography>
        </div>
        <Typography
          variant="small"
          color="gray"
          className="font-normal opacity-75"
        >
          With plenty of talk and listen time, voice-activated Siri access, and
          an available wireless charging case.
        </Typography>
      </CardBody>
      <CardFooter className="pt-0">
         <div className="flex justify-center ">
                                            {cartitems.some((p)=>p.id === item.id)
                                              ?
                                              <button onClick={()=>deleteCart(item)}  className=" bg-blue-600 hover:bg-blue-800 w-full text-white py-[4px] rounded-lg font-bold">
                                             Delete From Cart
                                          </button>
                                          :
                                          <button onClick={()=>addcart(item)}  className=" bg-blue-600 hover:bg-blue-800 w-full text-white py-[4px] rounded-lg font-bold">
                                          Add To Cart
                                      </button>
                                              }
                                            </div>
      </CardFooter>
    </Card> 
    <Card className="w-76">
      <CardHeader shadow={false} floated={false} className="h-96">
        <img
          src="https://rukminim2.flixcart.com/image/612/612/xif0q/gamingconsole/r/1/p/-original-imaghyyk5zct4duf.jpeg?q=70"
          className="h-full w-full object-cover"
        />
      </CardHeader>
      <CardBody>
        <div className="mb-2 flex items-center justify-between">
          <Typography color="blue-gray" className="font-medium">
            Apple AirPods
          </Typography>
          <Typography color="blue-gray" className="font-medium">
            $95.00
          </Typography>
        </div>
        <Typography
          variant="small"
          color="gray"
          className="font-normal opacity-75"
        >
          With plenty of talk and listen time, voice-activated Siri access, and
          an available wireless charging case.
        </Typography>
      </CardBody>
      <CardFooter className="pt-0">
         <div className="flex justify-center ">
                                            {cartitems.some((p)=>p.id === item.id)
                                              ?
                                              <button onClick={()=>deleteCart(item)}  className=" bg-blue-600 hover:bg-blue-800 w-full text-white py-[4px] rounded-lg font-bold">
                                             Delete From Cart
                                          </button>
                                          :
                                          <button onClick={()=>addcart(item)}  className=" bg-blue-600 hover:bg-blue-800 w-full text-white py-[4px] rounded-lg font-bold">
                                          Add To Cart
                                      </button>
                                              }
                                            </div>
      </CardFooter>
    </Card>
    <Card className="w-76">
      <CardHeader shadow={false} floated={false} className="h-96">
        <img
          src="https://rukminim2.flixcart.com/image/612/612/xif0q/computer/1/m/0/-original-imagt65skkzmngb3.jpeg?q=70"
          alt="card-image"
          className="h- w-full object-cover"
        />
      </CardHeader>
      <CardBody>
        <div className="mb-2 flex items-center justify-between">
          <Typography color="blue-gray" className="font-medium">
            Apple AirPods
          </Typography>
          <Typography color="blue-gray" className="font-medium">
            $95.00
          </Typography>
        </div>
        <Typography
          variant="small"
          color="gray"
          className="font-normal opacity-75"
        >
          With plenty of talk and listen time, voice-activated Siri access, and
          an available wireless charging case.
        </Typography>
      </CardBody>
      <CardFooter className="pt-0">
        <Button
          ripple={false}
          onClick={()=>addcart(item)}
          fullWidth={true}
          className="bg-blue-gray-900/10 text-blue-gray-900 shadow-none hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100"
        >
          Add to Cart
        </Button>
      </CardFooter>
    </Card>
    <Card className="w-76">
      <CardHeader shadow={false} floated={false} className="h-96">
        <img
          src="https://rukminim2.flixcart.com/image/612/612/xif0q/speaker/s/g/e/-original-imahy4y8heh2dbbr.jpeg?q=70"
          alt="card-image"
          className="h-full w-full object-cover"
        />
      </CardHeader>
      <CardBody>
        <div className="mb-2 flex items-center justify-between">
          <Typography color="blue-gray" className="font-medium">
            Apple AirPods
          </Typography>
          <Typography color="blue-gray" className="font-medium">
            $95.00
          </Typography>
        </div>
        <Typography
          variant="small"
          color="gray"
          className="font-normal opacity-75"
        >
          With plenty of talk and listen time, voice-activated Siri access, and
          an available wireless charging case.
        </Typography>
      </CardBody>
      <CardFooter className="pt-0">
         <div className="flex justify-center ">
                                            {cartitems.some((p)=>p.id === item.id)
                                              ?
                                              <button onClick={()=>deleteCart(item)}  className=" bg-blue-600 hover:bg-blue-800 w-full text-white py-[4px] rounded-lg font-bold">
                                             Delete From Cart
                                          </button>
                                          :
                                          <button onClick={()=>addcart(item)}  className=" bg-blue-600 hover:bg-blue-800 w-full text-white py-[4px] rounded-lg font-bold">
                                          Add To Cart
                                      </button>
                                              }
                                            </div>
      </CardFooter>
    </Card>    
    <Card className="w-76">
      <CardHeader shadow={false} floated={false} className="h-96">
        <img
          src={Image8}
          alt="card-image"
          className="h-full w-full object-cover"
        />
      </CardHeader>
      <CardBody>
        <div className="mb-2 flex items-center justify-between">
          <Typography color="blue-gray" className="font-medium">
            Apple AirPods
          </Typography>
          <Typography color="blue-gray" className="font-medium">
            $95.00
          </Typography>
        </div>
        <Typography
          variant="small"
          color="gray"
          className="font-normal opacity-75"
        >
          With plenty of talk and listen time, voice-activated Siri access, and
          an available wireless charging case.
        </Typography>
      </CardBody>
      <CardFooter className="pt-0">
        <Button
          ripple={false}
          onClick={()=>addcart(item)}
          fullWidth={true}
          className="bg-blue-gray-900/10 text-blue-gray-900 shadow-none hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100"
        >
          Add to Cart
        </Button>
      </CardFooter>
    </Card> 
</Carousel>;
                             {/* best of Electronics */}
            <h1 className=" ml-[650px] font-bold text-2xl">Best Of Electronics</h1>
<Carousel
            responsive={{
                desktop: {
                  breakpoint: {
                    max: 3000,
                    min: 1024
                  },
                  items: 5,
                  partialVisibilityGutter: 40
                },
                mobile: {
                  breakpoint: {
                    max: 464,
                    min: 0
                  },
                  items: 1,
                  partialVisibilityGutter: 30
                },
                tablet: {
                  breakpoint: {
                    max: 1024,
                    min: 464
                  },
                  items: 2,
                  partialVisibilityGutter: 30
                }
              }}
   additionalTransfrom={0}
   arrows
   autoPlaySpeed={3000}
   centerMode={false}
   className=""
   containerClass="container-with-dots"
   dotListClass=""
   draggable
   focusOnSelect={false}
   infinite
   itemClass=""
   keyBoardControl
   minimumTouchDrag={80}
   pauseOnHover
   renderArrowsWhenDisabled={false}
   renderButtonGroupOutside={false}
   renderDotsOutside={false}
   rewind={false}
   rewindWithAnimation={false}
   rtl={false}
   shouldResetAutoplay
   showDots={false}
   sliderClass=""
   slidesToSlide={1}
   swipeable
  
>
    
 <Card className="w-76">
    <CardHeader shadow={false} floated={false} className="h-96">
        <img
          src={Image2}
          alt="card-image"
          className="h-full w-full object-cover"
        />
      </CardHeader>
      <CardBody>
        <div className="mb-2 flex items-center justify-between">
          <Typography color="blue-gray" className="font-medium">
            Apple AirPods
          </Typography>
          <Typography color="blue-gray" className="font-medium">
            $95.00
          </Typography>
        </div>
        <Typography
          variant="small"
          color="gray"
          className="font-normal opacity-75"
        >
          With plenty of talk and listen time, voice-activated Siri access, and
          an available wireless charging case.
        </Typography>
      </CardBody>
      <CardFooter className="pt-0">
         <div className="flex justify-center ">
                                            {cartitems.some((p)=>p.id === item.id)
                                              ?
                                              <button onClick={()=>deleteCart(item)}  className=" bg-blue-600 hover:bg-blue-800 w-full text-white py-[4px] rounded-lg font-bold">
                                             Delete From Cart
                                          </button>
                                          :
                                          <button onClick={()=>addcart(item)}  className=" bg-blue-600 hover:bg-blue-800 w-full text-white py-[4px] rounded-lg font-bold">
                                          Add To Cart
                                      </button>
                                              }
                                            </div>
      </CardFooter>
    </Card>	
    <Card className="w-76">
      <CardHeader shadow={false} floated={false} className="h-96">
        <img
         src={Image1}
          alt="card-image"
          className="h-full w-full object-cover"
        />
      </CardHeader>
      <CardBody>
        <div className="mb-2 flex items-center justify-between">
          <Typography color="blue-gray" className="font-medium">
            Apple AirPods
          </Typography>
          <Typography color="blue-gray" className="font-medium">
            $95.00
          </Typography>
        </div>
        <Typography
          variant="small"
          color="gray"
          className="font-normal opacity-75"
        >
          With plenty of talk and listen time, voice-activated Siri access, and
          an available wireless charging case.
        </Typography>
      </CardBody>
      <CardFooter className="pt-0">
         <div className="flex justify-center ">
                                            {cartitems.some((p)=>p.id === item.id)
                                              ?
                                              <button onClick={()=>deleteCart(item)}  className=" bg-blue-600 hover:bg-blue-800 w-full text-white py-[4px] rounded-lg font-bold">
                                             Delete From Cart
                                          </button>
                                          :
                                          <button onClick={()=>addcart(item)}  className=" bg-blue-600 hover:bg-blue-800 w-full text-white py-[4px] rounded-lg font-bold">
                                          Add To Cart
                                      </button>
                                              }
                                            </div>
      </CardFooter>
    </Card>
    <Card className="w-76">
      <CardHeader shadow={false} floated={false} className="h-96">
        <img
          src={Image1}
          alt="card-image"
          className="h-full w-full object-cover"
        />
      </CardHeader>
      <CardBody>
        <div className="mb-2 flex items-center justify-between">
          <Typography color="blue-gray" className="font-medium">
            Apple AirPods
          </Typography>
          <Typography color="blue-gray" className="font-medium">
            $95.00
          </Typography>
        </div>
        <Typography
          variant="small"
          color="gray"
          className="font-normal opacity-75"
        >
          With plenty of talk and listen time, voice-activated Siri access, and
          an available wireless charging case.
        </Typography>
      </CardBody>
      <CardFooter className="pt-0">
        <Button
          ripple={false}
          onClick={()=>addcart(item)}
          fullWidth={true}
          className="bg-blue-gray-900/10 text-blue-gray-900 shadow-none hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100"
        >
          Add to Cart
        </Button>
      </CardFooter>
    </Card> 
    <Card className="w-76">
      <CardHeader shadow={false} floated={false} className="h-96">
        <img
         src={Image1}
          alt="card-image"
          className="h-full w-full object-cover"
        />
      </CardHeader>
      <CardBody>
        <div className="mb-2 flex items-center justify-between">
          <Typography color="blue-gray" className="font-medium">
            Apple AirPods
          </Typography>
          <Typography color="blue-gray" className="font-medium">
            $95.00
          </Typography>
        </div>
        <Typography
          variant="small"
          color="gray"
          className="font-normal opacity-75"
        >
          With plenty of talk and listen time, voice-activated Siri access, and
          an available wireless charging case.
        </Typography>
      </CardBody>
      <CardFooter className="pt-0">
         <div className="flex justify-center ">
                                            {cartitems.some((p)=>p.id === item.id)
                                              ?
                                              <button onClick={()=>deleteCart(item)}  className=" bg-blue-600 hover:bg-blue-800 w-full text-white py-[4px] rounded-lg font-bold">
                                             Delete From Cart
                                          </button>
                                          :
                                          <button onClick={()=>addcart(item)}  className=" bg-blue-600 hover:bg-blue-800 w-full text-white py-[4px] rounded-lg font-bold">
                                          Add To Cart
                                      </button>
                                              }
                                            </div>
      </CardFooter>
    </Card> 
    <Card className="w-76">
      <CardHeader shadow={false} floated={false} className="h-96">
        <img
          src={Image1}
          alt="card-image"
          className="h-full w-full object-cover"
        />
      </CardHeader>
      <CardBody>
        <div className="mb-2 flex items-center justify-between">
          <Typography color="blue-gray" className="font-medium">
            Apple AirPods
          </Typography>
          <Typography color="blue-gray" className="font-medium">
            $95.00
          </Typography>
        </div>
        <Typography
          variant="small"
          color="gray"
          className="font-normal opacity-75"
        >
          With plenty of talk and listen time, voice-activated Siri access, and
          an available wireless charging case.
        </Typography>
      </CardBody>
      <CardFooter className="pt-0">
         <div className="flex justify-center ">
                                            {cartitems.some((p)=>p.id === item.id)
                                              ?
                                              <button onClick={()=>deleteCart(item)}  className=" bg-blue-600 hover:bg-blue-800 w-full text-white py-[4px] rounded-lg font-bold">
                                             Delete From Cart
                                          </button>
                                          :
                                          <button onClick={()=>addcart(item)}  className=" bg-blue-600 hover:bg-blue-800 w-full text-white py-[4px] rounded-lg font-bold">
                                          Add To Cart
                                      </button>
                                              }
                                            </div>
      </CardFooter>
    </Card>
    <Card className="w-76">
      <CardHeader shadow={false} floated={false} className="h-96">
        <img
          src={Image1}
          alt="card-image"
          className="h-full w-full object-cover"
        />
      </CardHeader>
      <CardBody>
        <div className="mb-2 flex items-center justify-between">
          <Typography color="blue-gray" className="font-medium">
            Apple AirPods
          </Typography>
          <Typography color="blue-gray" className="font-medium">
            $95.00
          </Typography>
        </div>
        <Typography
          variant="small"
          color="gray"
          className="font-normal opacity-75"
        >
          With plenty of talk and listen time, voice-activated Siri access, and
          an available wireless charging case.
        </Typography>
      </CardBody>
      <CardFooter className="pt-0">
        <Button
          ripple={false}
          fullWidth={true}
          onClick={()=>addcart(item)}
          className="bg-blue-gray-900/10 text-blue-gray-900 shadow-none hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100"
        >
          Add to Cart
        </Button>
      </CardFooter>
    </Card>
    <Card className="w-76">
      <CardHeader shadow={false} floated={false} className="h-96">
        <img
          src={Image1}
          alt="card-image"
          className="h-full w-full object-cover"
        />
      </CardHeader>
      <CardBody>
        <div className="mb-2 flex items-center justify-between">
          <Typography color="blue-gray" className="font-medium">
            Apple AirPods
          </Typography>
          <Typography color="blue-gray" className="font-medium">
            $95.00
          </Typography>
        </div>
        <Typography
          variant="small"
          color="gray"
          className="font-normal opacity-75"
        >
          With plenty of talk and listen time, voice-activated Siri access, and
          an available wireless charging case.
        </Typography>
      </CardBody>
      <CardFooter className="pt-0">
        <Button
          ripple={false}
          fullWidth={true}
          onClick={()=>addcart(item)}
          className="bg-blue-gray-900/10 text-blue-gray-900 shadow-none hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100"
        >
          Add to Cart
        </Button>
      </CardFooter>
    </Card>    
    <Card className="w-76">
      <CardHeader shadow={false} floated={false} className="h-96">
        <img
          src={Image1}
          alt="card-image"
          className="h-full w-full object-cover"
        />
      </CardHeader>
      <CardBody>
        <div className="mb-2 flex items-center justify-between">
          <Typography color="blue-gray" className="font-medium">
            Apple AirPods
          </Typography>
          <Typography color="blue-gray" className="font-medium">
            $95.00
          </Typography>
        </div>
        <Typography
          variant="small"
          color="gray"
          className="font-normal opacity-75"
        >
          With plenty of talk and listen time, voice-activated Siri access, and
          an available wireless charging case.
        </Typography>
      </CardBody>
      <CardFooter className="pt-0">
        <Button
          ripple={false}
          fullWidth={true}
          onClick={()=>addcart(item)}
          className="bg-blue-gray-900/10 text-blue-gray-900 shadow-none hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100"
        >
          Add to Cart
        </Button>
      </CardFooter>
    </Card> 
</Carousel>



        </div>):(
            <div className="mt-10">
            {/* Heading  */}
            <div className="">
                <h1 className=" text-center mb-5 text-2xl font-semibold">Bestselling Products</h1>
            </div>

            {/* main  */}
            <section className="text-gray-600 body-font">
                <div className="container px-5 py-5 mx-auto">
                    <div className="flex flex-wrap -m-4">
                        {productData1.map((item, index) => {
                            const { image, title, price } = item
                            return (
                                <div key={index} className="p-4 w-full md:w-1/4">
                                   
                                    <div className="h-full border border-gray-300 rounded-xl overflow-hidden shadow-md cursor-pointer">
                                            <img
                                                onClick={()=>navigate('/productInfo')}
                                                className="lg:h-80  h-96 w-full"
                                                src={image}
                                                alt="blog"
                                            />
                                        <div className="p-6">
                                            <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                                                E-bharat
                                            </h2>
                                            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                                                {title.substring(0, 25)}
                                            </h1>
                                            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                                                ₹{price}
                                            </h1>

                                            <div onClick={()=>invalid(item)} className="flex justify-center ">
                                                <button  className=" bg-blue-500 hover:bg-blue-600 w-full text-white py-[4px] rounded-lg font-bold">
                                                    Grab Now
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </section>
            <h1 className=" ml-[650px] font-bold text-2xl">Best Of Electronics</h1>
            <section className="text-gray-600 body-font">
                <div className="container px-5 py-5 mx-auto">
                    <div className="flex flex-wrap -m-4">
                        {productData2.map((item, index) => {
                            const { image, title, price } = item
                            return (
                                <div key={index} className="p-4 w-full md:w-1/4">
                                    <div className="h-full border border-gray-300 rounded-xl overflow-hidden shadow-md cursor-pointer">
                                            <img
                                                onClick={()=>navigate('/productInfo')}
                                                className="lg:h-80  h-96 w-full"
                                                src={image}
                                                alt="blog"
                                            />
                                        <div className="p-6">
                                            <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                                                E-bharat
                                            </h2>
                                            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                                                {title.substring(0, 25)}
                                            </h1>
                                            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                                                ₹{price}
                                            </h1>

                                            <div onClick={()=>invalid(item)}  className="flex justify-center ">
                                                <button   className=" bg-blue-500 hover:bg-blue-600 w-full text-white py-[4px] rounded-lg font-bold">
                                                    Grab Now
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </section>
        </div>
        )}
        
        </div>
        
    );
}

export default HomePageProductCard;