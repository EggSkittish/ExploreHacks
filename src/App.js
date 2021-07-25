import './App.css';
import React from "react";
import Webcam from "react-webcam";
function App() {

  const videoConstraints = {
    width: 1280,
    height: 720,
    facingMode: "user"
  };
  
  const webcamRef = React.useRef(null);
  
  const capture = React.useCallback(
    () => {
      const imageSrc = webcamRef.current.getScreenshot();
    },
    [webcamRef]
  );

  
  return (
    <div className="App">
      <header className="App-header"><br/><br/>
      <img src="endcovid19.png"  alt="logo" />
      <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
Before you got vaccinated
      <Webcam
          audio={false}
          height={500}
          ref={webcamRef}
          screenshotFormat="image/jpeg"
          width={500}
          videoConstraints={videoConstraints}
        />
        <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
      
      <div style={{width:"600px"}}><br/>
  <p>
    Directions to get your covid 19 vaccination in the destination type in a local pharmacy like CVS or Costco.
  </p>
  </div>
  <img src="/Screenshot 2021-07-23 163706.png"  alt="logo" />
    <button onClick={() => window.open('https://maps.google.com', '_blank')}>
      Do your part
  </button>
  <div style={{width:"600px"}}><br/>
  <p>
    Get things back to normal get vaccinated and take back what was lost because of coved 19.
  </p>
  </div>
  
  <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
  <div style={{width:"600px"}}><br/>
  <p>If you don't know something read this.</p>
  </div>
  <img src="/Screenshot 2021-07-23 163352.png"  alt="logo" />
  <div style={{width:"600px"}}><br/>
  <p> Everything you need to know about getting the covid 19 vaccine don't let covid 19 win.</p>
  </div>

  
  <button onClick={() => window.open('https://www.hopkinsmedicine.org/health/conditions-and-diseases/coronavirus/covid19-vaccine-hesitancy-12-things-you-need-to-know', '_blank')}>
    Information buttion
</button>
<br/><br/><br/><br/><br/><br/><br/>
<br/><br/><br/><br/><br/><br/><br/>
<img src="/hi555.png" className="App-logo" alt="logo" /><br/><br/><br/>
<div style={{width:"600px"}}><br/>
<p> Anything else you need to know about getting the covid 19 vaccine. </p>
</div>
  
  <button onClick={() => window.open('https://www.cdc.gov/cdc-info/ask-cdc.html', '_blank')}>
    Help button
</button>
<br/><br/><br/><br/><br/><br/>
After you got vaccinated
<Webcam
          audio={false}
          height={500}
          ref={webcamRef}
          screenshotFormat="image/jpeg"
          width={500}
          videoConstraints={videoConstraints}
        />



</header>


    </div>
  );
}

export default App;
