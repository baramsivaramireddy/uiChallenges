

const DayOnePage = () => {

    return (<>


        <UI />
        <UIDiagramComponent />
    </>)
}



const UIDiagramComponent = () => {

    return (<>



        <a href="https://dribbble.com/shots/17476642/attachments/12611642?mode=media" className="text-blue-500" target="_blank" > click here to see inspiration</a>
        <p> It was taken from dribble </p>
    </>)
}

const UI = () => {

    return (<>

        <div className="h-screen flex flex-col">
            <div className="h-[10vh]">
                <Header />
            </div>
            <div className="flex-auto  mt-20">
                <IntroSection />
            </div>
        </div>
    </>)
}


const Header = () => {

    return (<>
        <div className="flex items-center  justify-between pl-10  pr-5 py-5">
            <PrimaryHeader />
            <SecounderHeader />

        </div>
    </>)
}

const PrimaryHeader = () => {



    return (<>

        <div className="flex items-center   gap-5">

            <p className="font-bold text-xl"> worque</p>

            <ul className="flex  pl-10  gap-5">

                <li> Platform.</li>
                <li> Resource.</li>
                <li>Solutions.</li>
                <li> Pricing.</li>
            </ul>
        </div>

    </>)
}

const SecounderHeader = () => {

    return (<>

        <div className="flex  gap-5">

            <button> Login in</button>
            <button className="rounded border boder-2  py-2 px-4 shadow-sm"> Get started </button>
        </div>

    </>)
}



const IntroSection = () => {

    return (<>


        <div className="flex h-a    justify-center pl-24 flex-col items-start">
            <IntroTextComponent />
            <TrailComponent />
            <WorkingWithCompaniesComponent />
        </div>
    </>)
}


const WorkingWithCompaniesComponent = () => {

    let companies = [
        'spotify',
        'walmart',
        'vodafone',
        'canon'
    ]
    return (<>

        <div className="py-5">
            <p className="text-gray-400"> Working  with the best </p>
            <div>
                <ul className="flex  gap-5 font-bold">
                    {companies.map((e, i) => (<li key={i}> {e}</li>))}
                </ul>
            </div>
        </div>
    </>)
}

const TrailComponent = () => {
    return (<>



        <div className="flex gap-10">

            <button className=" rounded bg-black text-white py-3 px-4"> Start free trail</button>
            <button className="rounded-full border-l-2 border-r-2  px-3 border-black "> get a demo</button>
        </div>
    </>)

}


const IntroTextComponent = () => {

    return (<>
        <div className="text-5xl font-bold leading-relaxed">
            <p>Integrate your </p>
            <p>Stack  automate</p>
            <p> your work</p>
        </div>
        <div className=" py-5">
            <p>
                Evolve at the speed and scale of your bussiness
            </p>
            <p>
                with the leader in low-code  automation
            </p>
        </div>

    </>)
}
export default DayOnePage;