import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
const productData1 = [
    {
        id: 1,
        image: 'https://rukminim1.flixcart.com/fk-p-flap/460/280/image/e905928a8e78d60a.jpeg?q=20',
        title: 'Best Gaming Deals',
        desc: 'Shop Hand Painted Blue Kaushalam Tea Pot in Aluminium, handmade by Mrinalika Jain. Fair pricing. Ethically made. Positive impact.',
        price: 150,
        trendingProductName: 'Featured',
        quantity: 1,
    },
    {
        id: 2,
        image: 'https://rukminim1.flixcart.com/fk-p-flap/460/280/image/e78222cfc7944609.jpeg?q=20',
        title: 'just Rs. 1099',
        desc: 'Shop Hand Painted Blue Kaushalam Tea Pot in Aluminium, handmade by Mrinalika Jain. Fair pricing. Ethically made. Positive impact.',
        price: 120,
        trendingProductName: 'Featured',
        quantity: 1,
    },
    {
        id: 3,
        image: 'https://rukminim1.flixcart.com/fk-p-flap/450/280/image/876290384568bcf5.jpeg?q=20',
        title: 'from 1199',
        desc: 'Shop Hand Painted Blue Kaushalam Tea Pot in Aluminium, handmade by Mrinalika Jain. Fair pricing. Ethically made. Positive impact.',
        price: 130,
        trendingProductName: 'Featured',
        quantity: 1,
    },
    {
        id: 4,
        image: 'https://rukminim1.flixcart.com/fk-p-flap/450/280/image/41985dca8cfd4cc3.png?q=20',
        title: 'Grab or Gone',
        desc: 'Shop Hand Painted Blue Kaushalam Tea Pot in Aluminium, handmade by Mrinalika Jain. Fair pricing. Ethically made. Positive impact.',
        price: 120,
        trendingProductName: 'Featured',
        quantity: 1,
    },
    {
        id: 5,
        image: "https://rukminim1.flixcart.com/fk-p-flap/450/280/image/f649ea5350dca3ca.jpeg?q=20",
        title: 'Up to 60% Off',
        desc: 'Shop Hand Painted Blue Kaushalam Tea Pot in Aluminium, handmade by Mrinalika Jain. Fair pricing. Ethically made. Positive impact.',
        price: 950,
        trendingProductName: 'Featured',
        quantity: 1,
    },
    {
        id: 6,
        image: "https://rukminim1.flixcart.com/fk-p-flap/450/280/image/3bce1ecd06961ccb.jpeg?q=20",
        title: 'min 70% off',
        desc: 'Shop Hand Painted Blue Kaushalam Tea Pot in Aluminium, handmade by Mrinalika Jain. Fair pricing. Ethically made. Positive impact.',
        price: 120000,
        trendingProductName: 'Featured',
        quantity: 1,
    },
    
    {
        id: 7,
        image:"https://rukminim1.flixcart.com/fk-p-flap/450/280/image/6c64d0cee1564807.jpeg?q=20",
        title: 'Min 30% off',
        desc: 'Shop Hand Painted Blue Kaushalam Tea Pot in Aluminium, handmade by Mrinalika Jain. Fair pricing. Ethically made. Positive impact.',
        price: 1200,
        trendingProductName: 'Featured',
        quantity: 1,
    },
    {
        id: 8,
        image: "https://rukminim1.flixcart.com/fk-p-flap/450/280/image/203245ec13cd8e18.jpeg?q=20",
        title: 'Up to 50% Off',
        desc: 'Shop Hand Painted Blue Kaushalam Tea Pot in Aluminium, handmade by Mrinalika Jain. Fair pricing. Ethically made. Positive impact.',
        price: 30000,
        trendingProductName: 'Featured',
        quantity: 1,
    },
    
]

function FeaturedBrand() {
  return (
    <div>
           {/* best of Fashion */}
        <h1 className=" ml-4 sm:ml-[650px] font-bold text-2xl">Featured Brands</h1>
        
        <Carousel 
           responsive={{
            desktop: {
              breakpoint: {
                max: 3000,
                min: 1024
              },
              items: 4,
              partialVisibilityGutter: 400
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
speed ={3000}
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
swipeable  >
        {
          productData1.map((data)=>(
            <div key={data.id} className="p-4 w-full " >
                <div className="w-full  cursor-pointer">
                    <div className="h-full">

                   <img src={data.image} alt=""  className="h-full w-full object-cover"/>
                    </div>
                   
                                </div>
                
              

            </div>
          ))
        }
     </Carousel>
      
    </div>
  )
}

export default FeaturedBrand
