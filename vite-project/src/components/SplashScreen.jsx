import React,{ useState } from 'react'
import Splash1 from '../assets/Splash1.png'
import viteLogo from '../../public/vite.svg'
// import './index'
import '../App.css'

function SplashScreen() {
  const [count, setCount] = useState(0)



  const quotes = [
  {
    title: "Search for a lawyer",
    description: "Search for a lawyer, know more about his work experience and his area of practice."
  },
  {
    title: "Schedule a meeting",
    description: "Find the right time and schedule an appointment easily with your chosen lawyer."
  },
  {
    title: "Track case progress",
    description: "Stay informed by tracking the progress of your legal case in real-time."
  }
];

const SplashScreen = () => {
  const [stepIndex, setStepIndex] = useState(0);

  const handleNext = () => {
    if (stepIndex < quotes.length - 1) {
      setStepIndex(stepIndex + 1);
    }
}
}
  return (
    <>
      <div>
        <div className='onboarding-container'>
         <h1>Lawyer App</h1>   
         <h3>Search for a lawyer</h3>
            <div className='image-container'>
                <a href="" target="_blank">
                <img src={Splash1} className="illustration" alt="Search for a lawyer illustration" />
                </a>
            </div>
      </div>
    <div class="pagination-dots">
   {/* {steps.map((_, index) => (
          <span
            key={index}
            className={`dot ${index === stepIndex ? 'active' : ''}`}
          />
        ))} */}
    </div>
        <p className='quotes'>Search for a lawyer, know more about his work experience and his area of practice.</p>
        <button class="next-button">Next</button>
        <a href="#" class="skip-link" >Skip</a>
    </div>

    <script>

    </script>
    </>
  )
}
        // <button onClick={() => setCount((count) => count + 1)}>
        //   count is {count}
export default SplashScreen
