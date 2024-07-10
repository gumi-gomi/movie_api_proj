import React from 'react';
import './App.css';
import Secondlayer from './layers/Secondlayer';
import Thirdlayer from './layers/Thirdlayer';
import Fourthlayer from './layers/fourthlayer';
import Fifthlayer from './layers/Fifthlayer';
import Firstlayer from './layers/Firstlayer';
import Sixthalyer from './layers/Sixthlayer';
import Footer from './layers/Footer';

function App() {
  return (
    <>
      <Firstlayer/>
      <Secondlayer/>
      <Thirdlayer/>
      {/* <Fourthlayer/> */}
      <Fifthlayer/>
      <Sixthalyer/>
      <Footer/>
    </>
  );
}

export default App;
