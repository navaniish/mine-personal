import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Lenis from '@studio-freight/lenis';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import LoadingScreen from './components/LoadingScreen';
import CustomCursor from './components/CustomCursor';
import CranesDemo from './pages/CranesDemo';
import HexagonBackground from './components/HexagonBackground';
import ChatBot from './components/ChatBot';

const Layout = ({ children }) => {
  const location = useLocation();
  const isDemo = location.pathname.startsWith('/demo');

  return (
    <div className="min-h-screen flex flex-col font-body selection:bg-primary/20 selection:text-primary relative z-10">
      {!isDemo && <Navbar />}
      <main className="flex-grow">
        {children}
      </main>
      {!isDemo && <Footer />}
      {!isDemo && <ChatBot />}
    </div>
  );
};

function App() {
  useEffect(() => {
    /*
    const lenis = new Lenis({
      duration: 0.8,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      direction: 'vertical',
      gestureDirection: 'vertical',
      smooth: true,
      mouseMultiplier: 1.2,
      smoothTouch: false,
      touchMultiplier: 2,
      infinite: false,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
    */
  }, []);

  return (
    <Router>
      <LoadingScreen />
      <CustomCursor />
      <HexagonBackground />
      
      {/* Cinematic Background Blobs */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/10 blur-[120px] rounded-full animate-blob"></div>
        <div className="absolute bottom-[10%] right-[-10%] w-[35%] h-[35%] bg-accent/10 blur-[120px] rounded-full animate-blob [animation-delay:2s]"></div>
        <div className="absolute top-[40%] right-[20%] w-[20%] h-[20%] bg-secondary/5 blur-[80px] rounded-full animate-blob [animation-delay:4s]"></div>
      </div>

      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/demo/cranes" element={<CranesDemo />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
