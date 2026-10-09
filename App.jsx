import React from 'react';
import './App.css';

function App() {
const handleGetStarted = () => {
window.location.href = '#plants';
};

return ( <div className="app"> <section className="landing-page"> <div className="landing-content"> <h1>Paradise Nursery</h1> <p>
Welcome to Paradise Nursery, your destination for beautiful
indoor plants. Bring nature into your home and create a
greener, happier living space with our collection of plants. </p> <button
         className="get-started-btn"
         onClick={handleGetStarted}
       >
Get Started </button> </div> </section> </div>
);
}

export default App;
