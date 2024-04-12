import "./app.scss"
import Navbar from './components/navbar';
import Hero from './components/hero/hero';

const App = () => {
  return <div>
    <section id="Homepage"><Navbar/>
    <Hero/>
    </section>
    <section id="Services">Parallax</section>
    <section>Services</section>
    <section id="Portfolio" className="bg-none">Parallax</section>
    <section>Portfolio1</section>
    <section>Portfolio2</section>
    <section>Portfolio3</section>
    <section id="Contact">Contact</section>
  </div>;
};

export default App;
