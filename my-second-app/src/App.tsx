import { useState,useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Map from "@arcgis/core/Map.js";
import MapView from "@arcgis/core/views/MapView.js";
function App() {
   const [eMap, eMapView] = useState();
   
useEffect(() => {
 
// Create a Map instance
const myMap = new Map({
  basemap: "streets-vector"
});
// Create a MapView instance (for 2D viewing) and reference the map instance
const view = new MapView({
  map: myMap,
  container: "viewDiv" 
});
   
  });

  return (

    
    <>
      <div className='container'>
        <div className='row _mainpanel1'>header</div>
        <div className='row _mainpanel2'>RSI training</div>
        <div className='row _mainpanel3'>

<div id="viewDiv"></div>

         {/* <div className='col'>
            <div className='card first-card'>
            <div className='row first-row'>
              <div className='card '></div>
              </div>
              <div className='row second-row'>
              <div className='card'></div>
              </div>
              <div className='row third-row'>
              <div className='card'></div>
              </div>
              </div>

          </div>
           <div className='col'>
            <div className='card first-card'>
            <div className='row first-row'>
              <div className='card '>
                <div className='rose-div2'></div>
              </div>
              </div>
              <div className='row second-row'>
              <div className='card'>
                <div className='rose-div1'></div>
              </div>
              </div>
              <div className='row third-row'>
              <div className='card'></div>
              </div>
              </div>

          </div>
           <div className='col'>
            <div className='card first-card'>
            <div className='row first-row'>
              <div className='card '>
                <div>
                  <img src={rose} width= "112px"
    height= "99px"
     className="rounded-circle" />
                </div>
              </div>
              </div>
              <div className='row second-row'>
              <div className='card'>
                <img src={rose} width= "112px"
    height= "99px"
      />
              </div>
              </div>
              <div className='row third-row'>
              <div className='card'>
                <div className='rose-div'></div>
              </div>
              </div>
              </div>

          </div>
           <div className='col'>
            <div className='card first-card'>
            <div className='row first-row'>
              <div className='card '></div>
              </div>
              <div className='row second-row'>
              <div className='card'></div>
              </div>
              <div className='row third-row'>
              <div className='card'></div>
              </div>
              </div>

          </div> */}
          
        </div>
      </div>
    </>
  )
}

export default App
