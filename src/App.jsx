import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Highlights from './components/Highlights';
import Culture from './components/Culture';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-rose-50 via-white to-white text-slate-800">
      <Navbar />
      <Hero />
      <Highlights />
      <Culture />
      <Footer />
    </div>
  );
}

export default App;
