import './App.css';
import React, { useEffect, useState } from 'react';
import Rectangle13 from './img/Rectangle13.png'
import Rectangle11 from './img/Rectangle11.png'
import Rectangle12 from './img/Rectangle12.png'
import Rectangle14 from './img/Rectangle14.png'
import Cart from './img/Vector.png'
import Search from './img/search.png'
import Profile from './img/profile.png'
import Bg from './img/bg.png'


function App() {
  const initialCount = parseInt(localStorage.getItem("count")) ||0
  const [count, setCount] = useState(initialCount); 
  

  useEffect(() => { localStorage.setItem("count", count); },[count])

  const [hover,setHover]= useState(false);
  const [hover1,setHover1]= useState(false);
  const [hover2,setHover2]= useState(false);
  const [hover3,setHover3]= useState(false);
const handleHover=()=>{
  setHover(!hover)
}
const handleHover1=()=>{
  setHover1(!hover1)
}
const handleHover2=()=>{
  setHover2(!hover2)
}
const handleHover3=()=>{
  setHover3(!hover3)
}

  return (
   <>
   <nav>
        <input type='search' className='search' placeholder='Search prishé beauty products' /> <span> <img src={Search} style={{ paddingTop: "14px" }} alt="Search" /></span>  <div className='header-icon' >  <img src={Profile} alt="Profile" />  <img src={Cart} className='card-count' alt="cart" /><p className='card-number' >{count} </p></div>
   </nav>
      <div className="App">
        <div className="prod-header" style={{ backgroundImage:`url(${Bg})`}}>
          
          <p className='title-text1' >Shop By
          </p>
          <p className='title-text2'> Category</p>
          <div className='border'></div>
          <div className='prod-cat'>
            <div className='prod-key'>Eyes</div>
            <div className='prod-key'>Lips</div>
            <div className='prod-key'>Face</div>
          </div>

        </div>
        <div className='prod-list'>
          <div>
            <div className='prod-name'>
              <img alt="logo" src={hover ? Rectangle12 : Rectangle13} onMouseOver={handleHover} onMouseOut={handleHover} />
              <p className='prod-text'>
                Weightless Eyeshadow StickWeightless Eyeshadow Stick
              </p>
              <div className='price-section'>
                <div className='price-tag'>
                  <p> ₹629</p>
                </div>
                <div className='price-label' onClick={()=>setCount(count+1)} > <p> Add to Bag</p> </div>

              </div>

            </div>
            <div className='prod-name' >
              <img alt="logo" src={hover1 ? Rectangle14 : Rectangle13} onMouseOver={handleHover1} onMouseOut={handleHover1} />
              <p className='prod-text'>
                Weightless Eyeshadow StickWeightless Eyeshadow Stick
              </p>
              <div className='price-section'>
                <div className='price-tag'>
                  <p> ₹629</p>
                </div>
                <div className='price-label' onClick={() => setCount(count + 1)}> <p> Add to Bag</p> </div>

              </div>

            </div>
          </div>
          <div>
            <div className='prod-name'>
              <img alt="logo" src={hover2 ? Rectangle11 : Rectangle13} onMouseOver={handleHover2} onMouseOut={handleHover2} />
              <p className='prod-text'>
                Weightless Eyeshadow StickWeightless Eyeshadow Stick
              </p>
              <div className='price-section'>
                <div className='price-tag'>
                  <p> ₹629</p>
                </div>
                <div className='price-label' onClick={() => setCount(count + 1)}> <p> Add to Bag</p> </div>

              </div>

            </div>
            <div className='prod-name'>
              <img alt="logo" src={hover3 ? Rectangle12 : Rectangle14} onMouseOver={handleHover3} onMouseOut={handleHover3} />
              <p className='prod-text'>
                Weightless Eyeshadow StickWeightless Eyeshadow Stick
              </p>
              <div className='price-section'>
                <div className='price-tag'>
                  <p> ₹629</p>
                </div>
                <div className='price-label' onClick={() => setCount(count + 1)}> <p> Add to Bag</p> </div>

              </div>

            </div>
          </div>

        </div>
      </div></>
  );
}

export default App;
