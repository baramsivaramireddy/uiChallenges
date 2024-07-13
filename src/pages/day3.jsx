import { useState } from "react";
import { TiShoppingCart } from "react-icons/ti";
import { GiLoveHowl } from "react-icons/gi";
const DayTwoPage = () => {

    return (<>


        <UI productDetails={productDetails} />
        <UIDiagramComponent />
    </>)
}

export default DayTwoPage;


const productDetails = {
    name: "Closet",
    image: "https://images.pexels.com/photos/6758280/pexels-photo-6758280.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    title: "Free standing",
    address: {
        city: "BebraveLike",
        country: "Ukraine"
    },
    color: 'Darl/Brown',
    Size: '175 * 60 * 210mm',
    Weight: "35.3lbs.(16.01kgs)",
    price: {
        actual: '195',
        offering: '143.90'
    }
}

const UI = ({ productDetails }) => {

    return (<>
        <div className="min-h-screen p-10 relative">

            <div className="my-5">
                <Heading productName={productDetails.name} />
            </div>
            <ImageComponent url={productDetails.image} />
            <div>
                <ProductDetailsComponent
                    title={productDetails.title}
                    city={productDetails.address.city}
                    color={productDetails.color}
                    country={productDetails.address.country}
                    size={productDetails.Size}
                    weight={productDetails.Weight}
                />

            </div>
            <div>
                <ShopingCart actual={productDetails.price.actual} offering={productDetails.price.offering} />
            </div>
        </div>


    </>)
}



const Heading = (props) => {
    const { productName } = props
    return (<>
        <div className="flex justify-between">
            <div>
                <p className="text-xl text-gray-400 font-bold"> {productName}</p>
            </div>
            <div>
                <LoveComponent />
            </div>

        </div>

    </>)
}

const LoveComponent = () => {

    const [isLiked, setIsLiked] = useState(false);

    const handleLikeClick = () => {
        setIsLiked((prev) => (!prev))
    }
    return (<>

        <div onClick={handleLikeClick} className={`${isLiked ? "text-red-500" : 'text-gray-500'}`}> <GiLoveHowl /></div>
    </>)
}


const ImageComponent = ({ url }) => {


    return (<>

        <div className="flex justify-center items-center" >
            <img src={url} alt={'image of product'} width={200} height={300} />
        </div>
    </>)
}


const ProductDetailsComponent = ({ title, city, country, color, size, weight }) => {

    return (<>
        <div className="my-9 flex flex-col gap-5">
            <div className="">
                <p className="text-3xl font-semibold">{title}</p>
                <p> {city}, {country} </p>
            </div>
            <div>

                <div className="flex justify-between">
                    <p className="text-gray-400 text-xl">Color </p>
                    <p className="text-black font-semibold"> {color}</p>
                </div>
                <div className="flex justify-between">
                    <p  className="text-gray-400 text-xl">size </p>
                    <p className="text-black font-semibold"> {size}</p>
                </div>
                <div className="flex justify-between">
                    <p className="text-gray-400 text-xl">weight </p>
                    <p className="text-black font-semibold"> {weight}</p>
                </div>
            </div>
        </div>

    </>)
}

const ShopingCart = ({ actual, offering }) => {

    return (<>
        <div className="flex   justify-between items-center">
            <div>
                <p className="line-through  text-gray-300 text-xl"> ${actual}</p>
                <p className="text-black  font-bold text-xl"> ${offering}</p>
            </div>
            <div className="bg-violet-500 rounded  p-2 hover:bg-blue-500">
                <TiShoppingCart className="hover:text-blue  text-2xl hover:bg-blue-500" />
            </div>
        </div>
    </>)
}
const UIDiagramComponent = () => {

    return (<>

        <a href="https://dribbble.com/shots/21076001-Day-026-Shopping-Card" className="text-blue-500" target="_blank" > click here to see inspiration</a>
        <p> It was taken from dribble </p>
    </>)
}