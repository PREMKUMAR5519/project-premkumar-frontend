import React from 'react'
import '../styles/FoodPlan.css'
import dailyhabbitimg from '../images/dailyhabbitimg.jpg'
function Dailyhabbit() {
  return (
    <div className='foodplan_maincontainer' >
    <h1>Food Plan</h1>
    <div  className='foodplan_maincontainer1'  >
      <div className='foodplan_maincontainer1img' >
        <img className='imgsourcehabbit'  src={dailyhabbitimg} alt="" />
      </div>
      <div className='foodplan_maincontainer2' >
        <h3>Common daily habits to track:</h3>
<ul>
  <li>journal 1 sentence</li>
  <li>read 1 page</li>
  <li>meditate 1 minute</li>
  <li>do 1 push up</li>
  <li>stretch for 1 minute</li>
  <li>write 1 thing I’m grateful for</li>
  <li>make your bed</li>
  <li>wake up by [TIME]</li>
  <li>go to bed by [TIME]</li>
  <li>take a shower</li>
  <li>floss teeth</li>
  <li>weigh myself</li>
  <li>take medication</li>
  <li>play [INSTRUMENT] for 1 minute</li>
  <li>contact 1 potential client</li>
  <li>prioritize to-do list</li>
  <li>put all dishes put away</li>
  <li>take a walk outside</li>
  <li>walk the dog</li>
  <li>talk with mom</li>
  <li>say “I love you” at least once</li>
</ul>
      </div>

    </div>
  </div>
  )
}

export default Dailyhabbit