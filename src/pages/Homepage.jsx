
import { useNavigate } from 'react-router-dom';
const HomePage = () => {

    return (<>


        <HomePageComponent />

    </>)
}



const HomePageComponent = () => {

    const navigate = useNavigate();
    let listOfLink = [

        { link: '/day1', label: 'day one', description: 'a basic landing page' },
        { link: '/day2', label: 'day two', description: 'a basic landing page' },
        { link: '/day3', label: 'day three', description: 'a product card page' }
    ]
    return (<>

        <p> Hi i am siva . </p>
        <p> I want to improve my frontend skills</p>
        <p> Along with my friend I am taking a ui from internet , probably from dribble . Later , I will try to code it up . </p>
        <p> I want to do it for a month .</p>

        <ol>

            {listOfLink.map((e, i) => (<li key={i}>   <button onClick={() => { navigate(e.link) }}   > {e.label}</button> </li>))}
        </ol>
    </>)
}

export default HomePage;