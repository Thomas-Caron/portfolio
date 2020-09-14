import React from 'react';

import './styles.scss';
import Loading from '../Loading';
import Fixed from '../Fixed';
import Home from '../Home';
import About from '../About';
import Skills from '../Skills';
import Portfolio from '../Portfolio';
import Contact from '../Contact';
import Footer from '../Footer';

const App = ({ scrollValue, returnScrollValue, loading, loadingFalse }) => {
  window.addEventListener('scroll', () => {
    let value = window.scrollY;
    returnScrollValue(value);
  });
  setTimeout(() => { loadingFalse() }, 2700);
  return (
    <div className="App">
      {loading && (
        <Loading/>
       )}
      {!loading && (
        <>
          <Fixed scrollValue={scrollValue} />
          <Home scrollValue={scrollValue} />
          <main>
            <About/>
            <Skills/>
            <Portfolio/>
            <Contact/>
          </main>
          <Footer/>
        </>
      )}
    </div>
  );
}

export default App;
