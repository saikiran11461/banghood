import React from 'react';
import AllCards from '../Components/AllCards';
// import Footer from '../Components/Footer';
// import Navabar from '../Components/Navabar';
import UpperHome from '../Components/UpperHome';
// import Footer from '../Components/Footer';

const Home = () => {
  return (
    <div>
        {/* <Navabar/> */}
        <UpperHome/>
        { <AllCards/>}
       
    </div>
  )
}

export default Home;