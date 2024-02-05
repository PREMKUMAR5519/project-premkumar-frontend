import React from 'react'
import '../styles/About.css'
import { GiMeditation } from "react-icons/gi";
import { FaHeartbeat } from "react-icons/fa";
import { MdOutlineHealthAndSafety } from "react-icons/md";
import { IoIosFitness } from "react-icons/io";
function About() {
  return (
    <div className='aboutmain_container' > 
          <h1>About Fitsible</h1>

    <div className='aboutmain_container1' >
      <div className='aboutone' >
        <div className='aboutoneone' > <IoIosFitness className='icons' /><div className='aboutquotes' ><h4>TIPS AND ADVICE</h4><p>for your growth and wellness</p></div></div>
        <div className='aboutonetwo' ><GiMeditation className='icons'  /><div className='aboutquotes' ><h4>FOR ADVANCED</h4><p>time schedule for separate exercises</p></div></div>
      </div>
      <div className='aboutone' >
      <div className='aboutonethree' ><FaHeartbeat className='icons'  /><div className='aboutquotes' ><h4>HEART RATE</h4><p>by daily workout you can be fit.</p></div></div>
        <div className='aboutonefour' ><MdOutlineHealthAndSafety className='icons'  /><div className='aboutquotes' ><h4>BEST PROGRAM</h4><p>introduced best selected programs</p></div></div>

      </div>

    </div>
      <h4>Welcome to Fitsible – Your Ultimate Fitness Companion!</h4>
      <h2>Our Mission</h2>
      <p>At Fitsible, we believe in the transformative power of fitness. Our mission is to empower individuals on their journey to a healthier, happier life by providing a seamless and personalized fitness experience. We are committed to making fitness accessible, enjoyable, and sustainable for everyone.</p>
      <h2>Who We Are</h2>
      <p>Fitsible is a passionate team of fitness enthusiasts and skilled web developers who came together with a shared vision. We understand the challenges that often accompany the pursuit of a healthy lifestyle, and we are dedicated to providing the tools and support you need to succeed.</p>
      <h2>Data-Driven Insights</h2>
      <p>Track your progress with precision. Fitsible provides in-depth analytics and insights into your fitness journey. From calories burned to personal bests, our platform empowers you with the knowledge to make informed decisions about your health.</p>
      <h2>Community Support</h2>
      <p>We believe that fitness is a journey best shared. Connect with like-minded individuals, share your achievements, and find motivation within the Fitsible community. Together, we strive for progress, not perfection.</p>
      <h2>Our Values</h2>
      <div>
        <span>Passion:</span><span> We are driven by a deep passion for health and wellness, and we channel that passion into creating a platform that inspires and motivates.</span>
        <span>Innovation: </span><span>Embracing innovation, we stay at the forefront of technology to bring you the latest advancements in fitness tracking and personalized training.</span>
        <span>Inclusivity: </span><span> Fitness is for everyone. Fitsible celebrates diversity and inclusivity, offering a welcoming space for individuals of all backgrounds and fitness levels.</span>

      
      </div>
    </div>
  )
}

export default About