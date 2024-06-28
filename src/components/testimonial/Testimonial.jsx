/* eslint-disable react/no-unescaped-entities */
import vishesh from "../../assets/vishesh.png"
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Avatar,
} from "@material-tailwind/react";
import br1 from "../../assets/assets/brand/br-1.png"
import br2 from "../../assets/assets/brand/br-2.png"
import br3 from "../../assets/assets/brand/br-3.png"
import br4 from "../../assets/assets/brand/br-4.png"
import br5 from "../../assets/assets/brand/br-5.png"
import Slider from "react-slick"
const HeroSlide =[
    {
      id:1,
      img:"https://zeevector.com/wp-content/uploads/2021/02/Prestige-Logo-Vector.png",
      subtitle: "Sony",
      title: "PS4",
      title2: "Playstation",
      discription: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus beatae consequuntur a mollitia qui totam?",
    },
    {
      id:2,
      img:"https://pngimg.com/uploads/lg_logo/lg_logo_PNG15.png",
      subtitle: "zeras",
      title: "Oculs VR",
      title2: "Headset",
      discription: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus beatae consequuntur a mollitia qui totam?",
    },
    {
      id:3,
      img:"https://www.pngmart.com/files/12/Haier-Logo-Transparent-PNG.png",
      subtitle: "Apple",
      title: "M3-Chip",
      title2: "Macbook",
      discription: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus beatae consequuntur a mollitia qui totam?",
    },
    {
      id:4,
      img:"https://seapackaging.com/wp-content/uploads/2022/07/hrx-min-1.png",
      subtitle: "FireBolt",
      title: "Andriod",
      title2: "Smartwatch",
      discription: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus beatae consequuntur a mollitia qui totam?",
    },
    {
      id:5,
      img: "https://cdn.freelogovectors.net/wp-content/uploads/2023/09/allen-solly-logo-freelogovectors.net_.png",
      subtitle: "180 Watt",
      title: "Logitech 5.1",
      title2: "SoundSystem",
      discription: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus beatae consequuntur a mollitia qui totam?",
    },
    {
        id:6,
        img: "https://freepngimg.com/download/adidas/58136-logo-brand-adidas-sports-free-transparent-image-hd.png",
        subtitle: "180 Watt",
        title: "Logitech 5.1",
        title2: "SoundSystem",
        discription: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus beatae consequuntur a mollitia qui totam?",
      },
      {
        id:7,
        img: " https://vectorseek.com/wp-content/uploads/2023/09/boAt-Logo-Vector.svg-.png",
        subtitle: "180 Watt",
        title: "Logitech 5.1",
        title2: "SoundSystem",
        discription: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus beatae consequuntur a mollitia qui totam?",
      },
      {
        id:8,
        img: "https://companieslogo.com/img/orig/CAMPUS.NS_BIG-db38a91a.png?t=1684137811",
        subtitle: "180 Watt",
        title: "Logitech 5.1",
        title2: "SoundSystem",
        discription: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus beatae consequuntur a mollitia qui totam?",
      },
      {
        id:9,
        img: "https://logodownload.org/wp-content/uploads/2016/09/huawei-logo-1-1.png",
        subtitle: "180 Watt",
        title: "Logitech 5.1",
        title2: "SoundSystem",
        discription: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus beatae consequuntur a mollitia qui totam?",
      },
      {
        id:10,
        img: " https://www.freepnglogos.com/uploads/classic-samsung-logo-png-0.png",
        subtitle: "180 Watt",
        title: "Logitech 5.1",
        title2: "SoundSystem",
        discription: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus beatae consequuntur a mollitia qui totam?",
      },
      {
        id:11,
        img: "https://static.vecteezy.com/system/resources/previews/024/273/827/original/realme-logo-transparent-free-png.png",
        subtitle: "180 Watt",
        title: "Logitech 5.1",
        title2: "SoundSystem",
        discription: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus beatae consequuntur a mollitia qui totam?",
      },
      {
        id:12,
        img: "https://1000logos.net/wp-content/uploads/2021/05/JBL-logo.png",
        subtitle: "180 Watt",
        title: "Logitech 5.1",
        title2: "SoundSystem",
        discription: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus beatae consequuntur a mollitia qui totam?",
      },
     
    
  
  ]
  function StarIcon() {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="h-5 w-5 text-yellow-700"
      >
        <path
          fillRule="evenodd"
          d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
          clipRule="evenodd"
        />
      </svg>
    );
  }
   

const Testimonial = () => {
    const settings ={
        dots: true,
        mobileFirst:true,
        slidesPerRow:3,
        arrows : false,
        infinite: true,
        speed: 1000,
        autoplay:true,
        // slidesToShow: 1,
        slidesToScroll: 1,
        autoplaySpeed: 4000,
        cssEase: "ease-in-out",
        pauseOnHover: false,
        pauseOnFocus: true,
      
       };
       const settings1 ={
        dots: true,
        mobileFirst:true,
        slidesPerRow:3,
        arrows : false,
        infinite: true,
        speed: 1000,
        autoplay:true,
        // slidesToShow: 1,
        slidesToScroll: 1,
        autoplaySpeed: 4000,
        cssEase: "ease-in-out",
        pauseOnHover: false,
        pauseOnFocus: true,
      
       };
       
    return (
        <div>
            <section className="text-gray-600 body-font mb-10">
                {/* main  */}
                <div className="container px-5 py-10 mx-auto">
                    {/* Heading  */}
                    <h1 className=' text-center text-3xl font-bold text-black' >Testimonial</h1>
                    {/* para  */}
                    <h2 className=' text-center text-2xl font-semibold mb-10' >What our <span className=' text-blue-600'>customers</span> are saying</h2>
 <Carousel 
 responsive={{
  desktop: {
    breakpoint: {
      max: 3000,
      min: 1024
    },
    items: 3,
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
autoPlay = {true}
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
showDots={true}
sliderClass=""
slidesToSlide={1}
swipeable
 >
<div>
     <Card color="transparent" shadow={false} className="  w-full max-w-[26rem]">
      <CardHeader
        color="transparent"
        floated={false}
        shadow={false}
        className="mx-0 flex items-center gap-4 pt-0 pb-8"
      >
        <Avatar
          size="lg"
          variant="circular"
          src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
          alt="tania andrew"
        />
        <div className="flex w-full flex-col gap-0.5">
          <div className="flex items-center justify-between">
            <Typography variant="h5" color="blue-gray">
              Tania Andrew
            </Typography>
            <div className="5 flex items-center gap-0">
              <StarIcon />
              <StarIcon />
              <StarIcon />
              <StarIcon />
              <StarIcon />
            </div>
          </div>
          <Typography color="blue-gray">Frontend Lead @ Google</Typography>
        </div>
      </CardHeader>
      <CardBody className="mb-6 p-0">
        <Typography>
          &quot;I found solution to all my design needs from Creative Tim. I use
          them as a freelancer in my hobby projects for fun! And its really
          affordable, very humble guys !!!&quot;
        </Typography>
      </CardBody>
    </Card>
     </div>
<div>
     <Card color="transparent" shadow={false} className="  w-full max-w-[26rem]">
      <CardHeader
        color="transparent"
        floated={false}
        shadow={false}
        className="mx-0 flex items-center gap-4 pt-0 pb-8"
      >
        <Avatar
          size="lg"
          variant="circular"
          src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
          alt="tania andrew"
        />
        <div className="flex w-full flex-col gap-0.5">
          <div className="flex items-center justify-between">
            <Typography variant="h5" color="blue-gray">
              Tania Andrew
            </Typography>
            <div className="5 flex items-center gap-0">
              <StarIcon />
              <StarIcon />
              <StarIcon />
              <StarIcon />
              <StarIcon />
            </div>
          </div>
          <Typography color="blue-gray">Frontend Lead @ Google</Typography>
        </div>
      </CardHeader>
      <CardBody className="mb-6 p-0">
        <Typography>
          &quot;I found solution to all my design needs from Creative Tim. I use
          them as a freelancer in my hobby projects for fun! And its really
          affordable, very humble guys !!!&quot;
        </Typography>
      </CardBody>
    </Card>
     </div>
<div>
     <Card color="transparent" shadow={false} className="  w-full max-w-[26rem]">
      <CardHeader
        color="transparent"
        floated={false}
        shadow={false}
        className="mx-0 flex items-center gap-4 pt-0 pb-8"
      >
        <Avatar
          size="lg"
          variant="circular"
          src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
          alt="tania andrew"
        />
        <div className="flex w-full flex-col gap-0.5">
          <div className="flex items-center justify-between">
            <Typography variant="h5" color="blue-gray">
              Tania Andrew
            </Typography>
            <div className="5 flex items-center gap-0">
              <StarIcon />
              <StarIcon />
              <StarIcon />
              <StarIcon />
              <StarIcon />
            </div>
          </div>
          <Typography color="blue-gray">Frontend Lead @ Google</Typography>
        </div>
      </CardHeader>
      <CardBody className="mb-6 p-0">
        <Typography>
          &quot;I found solution to all my design needs from Creative Tim. I use
          them as a freelancer in my hobby projects for fun! And its really
          affordable, very humble guys !!!&quot;
        </Typography>
      </CardBody>
    </Card>
     </div>
<div>
     <Card color="transparent" shadow={false} className="  w-full max-w-[26rem]">
      <CardHeader
        color="transparent"
        floated={false}
        shadow={false}
        className="mx-0 flex items-center gap-4 pt-0 pb-8"
      >
        <Avatar
          size="lg"
          variant="circular"
          src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
          alt="tania andrew"
        />
        <div className="flex w-full flex-col gap-0.5">
          <div className="flex items-center justify-between">
            <Typography variant="h5" color="blue-gray">
              Tania Andrew
            </Typography>
            <div className="5 flex items-center gap-0">
              <StarIcon />
              <StarIcon />
              <StarIcon />
              <StarIcon />
              <StarIcon />
            </div>
          </div>
          <Typography color="blue-gray">Frontend Lead @ Google</Typography>
        </div>
      </CardHeader>
      <CardBody className="mb-6 p-0">
        <Typography>
          &quot;I found solution to all my design needs from Creative Tim. I use
          them as a freelancer in my hobby projects for fun! And its really
          affordable, very humble guys !!!&quot;
        </Typography>
      </CardBody>
    </Card>
     </div>
<div>
     <Card color="transparent" shadow={false} className="  w-full max-w-[26rem]">
      <CardHeader
        color="transparent"
        floated={false}
        shadow={false}
        className="mx-0 flex items-center gap-4 pt-0 pb-8"
      >
        <Avatar
          size="lg"
          variant="circular"
          src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
          alt="tania andrew"
        />
        <div className="flex w-full flex-col gap-0.5">
          <div className="flex items-center justify-between">
            <Typography variant="h5" color="blue-gray">
              Tania Andrew
            </Typography>
            <div className="5 flex items-center gap-0">
              <StarIcon />
              <StarIcon />
              <StarIcon />
              <StarIcon />
              <StarIcon />
            </div>
          </div>
          <Typography color="blue-gray">Frontend Lead @ Google</Typography>
        </div>
      </CardHeader>
      <CardBody className="mb-6 p-0">
        <Typography>
          &quot;I found solution to all my design needs from Creative Tim. I use
          them as a freelancer in my hobby projects for fun! And its really
          affordable, very humble guys !!!&quot;
        </Typography>
      </CardBody>
    </Card>
     </div>
   
<div>
     <Card color="transparent" shadow={false} className="  w-full max-w-[26rem]">
      <CardHeader
        color="transparent"
        floated={false}
        shadow={false}
        className="mx-0 flex items-center gap-4 pt-0 pb-8"
      >
        <Avatar
          size="lg"
          variant="circular"
          src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
          alt="tania andrew"
        />
        <div className="flex w-full flex-col gap-0.5">
          <div className="flex items-center justify-between">
            <Typography variant="h5" color="blue-gray">
              Tania Andrew
            </Typography>
            <div className="5 flex items-center gap-0">
              <StarIcon />
              <StarIcon />
              <StarIcon />
              <StarIcon />
              <StarIcon />
            </div>
          </div>
          <Typography color="blue-gray">Frontend Lead @ Google</Typography>
        </div>
      </CardHeader>
      <CardBody className="mb-6 p-0">
        <Typography>
          &quot;I found solution to all my design needs from Creative Tim. I use
          them as a freelancer in my hobby projects for fun! And its really
          affordable, very humble guys !!!&quot;
        </Typography>
      </CardBody>
    </Card>
     </div>
                    </Carousel>
                    
                </div>
            </section>
           
              {/* Brand Section */}
            <section className="  -mb-32">
              <div className=" font-bold flex items-center justify-center text-3xl">
               <h1 >Our <span className="text-blue-700 ">Top</span> brands </h1>

              </div>
                     <div className=" border-2 border-t-blue-600 w-full mt-2    "></div>
                     <div className=' w-full  container  sm:pb-0 '>
        <Slider {...settings} className="  ml-4 mt-[-70px] h-[350px] sm:w-full  ">
        {
          HeroSlide.map((data)=>(
            <div key={data.id}>
              <div className=''>
                   
                   <div className='   order-2  sm:ml-[250px] sm:order-1 relative '>
                    <img src={data.img} alt="" className=" pl-8 -ml-[20px] w-[250px]  h-[450px] sm:-ml-[80px]  sm:h-[450px] sm:scale-105 lg:scale-110 object-contain mx-auto   drop-shadow-[-8px_4px_6px_rgba(0,0,0,0.4)] relative z-40 " />
                   </div>
              </div>

            </div>
          ))
        }
        </Slider>
        </div>
            </section>
        </div>
    )
}

export default Testimonial