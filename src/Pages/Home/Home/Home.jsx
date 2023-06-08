import Banner from "../Banner/Banner";
import PopularInstructor from "../PopularInstructor/PopularInstructor";
import PopularMenu from "../PopularMenu/PopularMenu";
import DarkMode from "./DarkMode/DarkMode";

const Home = () => {
    return (
        <div> 
          
          <Banner/> 
          <PopularMenu/>
          <PopularInstructor/>
        </div>
    );
};
export default Home;


