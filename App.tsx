import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';

function App() {
  return (
    <div className="relative min-h-screen bg-brand-secondary font-body text-brand-dark selection:bg-brand-primary selection:text-white overflow-x-hidden">
      
      {/* Navigation and Main Content */}
      <div className="relative z-10">
        <Navbar />
        <main>
          <Home />
        </main>
        <Footer />
      </div>

      {/* Floating CTA */}
      <div className="fixed bottom-8 right-8 z-50">
        <button 
          onClick={() => document.getElementById('contact')?.scrollIntoView({behavior: 'smooth'})}
          className="bg-brand-primary text-white p-6 rounded-none border-2 border-brand-light shadow-[4px_4px_0px_0px_#fffefb] hover:shadow-[2px_2px_0px_0px_#fffefb] hover:translate-x-[2px] hover:translate-y-[2px] transition-all"
          aria-label="Contact"
        >
          <span className="font-title font-bold text-xl">Let's Talk</span>
        </button>
      </div>
    </div>
  );
}

export default App;