import {React, useMemo} from 'react';
import bgImage from '../images/pattern-bg-mobile.png'
import arrow from '../images/icon-arrow.svg'
import { GoogleMap, useLoadScript, Marker } from '@react-google-maps/api';

const Home = () => {
  const {} = useLoadScript({googleMapKey: ''})
  return (
    <>
      <img src={bgImage} alt="bg image" className='bg-image'/>
      <header>
        <h3>IP Address Tracker</h3>
        <div className='input-text'>
          <input type="text" placeholder='Search for any IP address or domain' />
          <button><img src={arrow} alt="arrow" /></button>
        </div>
      </header>
      <main>
        <section>
          <h5>ip address</h5>
          <h1>192.212.174.101</h1>
        </section>
        <section>
          <h5>location</h5>
          <h1>brooklyn, NY 10001</h1>
        </section>
        <section>
          <h5>timezone</h5>
          <h1>UTC-05:00</h1>
        </section>
        <section>
          <h5>ISP</h5>
          <h1>SpaceX Starlink</h1>
        </section>
      </main>
      <div>MAP</div>
    </>
  )
}

export default Home