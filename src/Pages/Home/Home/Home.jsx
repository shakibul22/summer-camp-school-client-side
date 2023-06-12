import Banner from "../Banner/Banner";

import PopularInstructor from "../PopularInstructor/PopularInstructor";
import PopularMenu from "../PopularMenu/PopularMenu";
import Statistics from "../Statistics/Statistics";


const Home = () => {
    return (
        <div> 
          
          <Banner/> 
          <PopularMenu/>
       
          <PopularInstructor/>
          <Statistics/>

        </div>
    );
};
export default Home;


