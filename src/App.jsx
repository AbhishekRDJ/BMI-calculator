import { useEffect } from 'react';
import './App.css'
import BMICalculator from './components/Calculator.jsx'

function App() {
  useEffect(() => {
    // Create the glow element dynamically
    const glow = document.createElement("div");
    glow.classList.add("cursor-glow");
    document.body.appendChild(glow);

    // Track mouse movement
    const handleMouseMove = (e) => {
      glow.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
    };

    document.addEventListener("mousemove", handleMouseMove);

    // Cleanup function to remove event listener
    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.body.removeChild(glow);
    };
  }, []);

  return <BMICalculator />;
}

export default App
