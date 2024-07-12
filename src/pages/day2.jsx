
import { MdOutlineMenu } from "react-icons/md";
import { FaLifeRing } from "react-icons/fa";
import { FaSyringe } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
const DayTwoPage = () => {

    return (<>


        <UI />
        <UIDiagramComponent />
    </>)
}

export default DayTwoPage;


const UIDiagramComponent = () => {

    return (<>

        <a href="https://dribbble.com/shots/21464002-Lossless-Mobile" className="text-blue-500" target="_blank" > click here to see inspiration</a>
        <p> It was taken from dribble </p>
    </>)
}

const UI = () => {

    return (<>

        <div className="h-screen flex flex-col">
            <div className="h-[10vh]">
                <Header />
            </div>
            <div className="flex-auto h-full  ">
                <IntroSection />
            </div>
        </div>
    </>)
}

const Header = () => {
    return (<>

        <div className="flex justify-between px-5 text-4xl font-bold items-center py-4">
            <p className="flex  gap-5 items-center ">  <FaLifeRing /> <span className="text-xl"> lossless</span> </p>
            <p className=" rounded-full border-2  bg-gray-500 text-white"><MdOutlineMenu /></p>

        </div>
    </>)
}

const IntroSection = () => {
    return (<>
        <div className="relative h-full">
            <div className="bg-black text-white py-20">

                <HeadingCard />
                <DummyDataCard />
                <TwoButtons />
            </div>
            <div className=" bottom-0 mt-10">

                <FooterCard />
            </div>
        </div>

    </>)
}

const HeadingCard = () => {
    return (<>

        <div className="text-3xl p-5">
            Restoring  Trust in web3 Security
        </div>
    </>)
}

const DummyDataCard = () => (<><div className="p-5">  <p className="flex flex-col md:flex-row">
    <p> Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
    and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
    <p></p>
</p></div></>)

const TwoButtons = () => {
    return (<>
        <div className="flex flex-col  md:flex-row gap-5">

            <div className="flex py-4 px-4 text-white bg-violet-500 rounded-full justify-between items-center mx-5 ">

                <p> Documentation  </p>
                <p className="text-2xl"><FaArrowRight /></p>
            </div>
            <div className=" backdrop-blur-sm bg-white/15 flex py-4 px-4 text-white font-bold  rounded-full justify-between items-center mx-5 ">
                <p className=""> Tech stack</p>
                <p className="text-2xl"><FaArrowRight /></p>
            </div>
        </div>
    </>)
}
const FooterCard = () => {

    return (<>
        <div className="pl-5">
            <p className="text-2xl"> supported chains</p>
            <div className=" flex justify-between p-5 text-2xl">

                {[1, 2, 3, 4, 5, 6].map((_, i) => (<span className="rounded-full text-red-500 bg-black p-2" key={i}><FaSyringe /> </span>))}
            </div>
        </div>

    </>)
}