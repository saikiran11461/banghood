import React from 'react';
import styles from './styles.module.css';
//  
import {HiOutlineCurrencyDollar,HiOutlineGift} from 'react-icons/hi';
import {RiMedalLine} from 'react-icons/ri';
import {GiReturnArrow} from 'react-icons/gi';
import {Button} from 'react-bootstrap';
import profile from '../Components/profile.png';
import Navigation from './Navigation';
import Carausal from './Carausal';
// import flash from '../Components/flash.png';


const UpperHome = () => {
  return (
    <div className={styles.Slides}>
        <div className={styles.splash}>
        <Navigation/>
        </div>
        <div className={styles.slideShow}>
            <Carausal/>
        </div>
        <div className={styles}>
        <img style={{width:"100%",height:"100%"}} alt="" />   
        </div>



        <div className={styles.user}>

         <div className={styles.Profile}>

             <img src={profile} alt="" style={{height:"70%",width:"100%"}}/>
             <h5 >Welcome To Banggood</h5>
             <div>
              <Button className={styles.click}>Sign In</Button>
              <Button className={styles.click}>Sign Up</Button>

             </div>
         </div>
         <div className={styles.List}>
             <h6 className={styles.welcome}>Customer Service Policy</h6> 
        <ul className={styles.Ul}>
            <li><HiOutlineCurrencyDollar style={{fontSize:"25px",marginRight:"5px"}}/>Payment Security</li>
            <li><HiOutlineGift style={{fontSize:"25px",marginRight:"5px"}}/>Delivery Guarantee</li>
            <li><RiMedalLine style={{fontSize:"25px",marginRight:"5px"}}/>Quality Guarantee</li>
            <li><GiReturnArrow style={{fontSize:"25px",marginRight:"5px"}}/>No Reason Returns</li>
        </ul>
            

         </div>



        </div>
    </div>
  )
}

export default UpperHome;


















