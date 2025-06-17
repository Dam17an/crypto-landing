import Hero from './Components/Hero/Hero.jsx';
import FeatureCards from "./Components/FeatureCards/FeatureCards";
import IntroSection from "./Components/IntroSection/IntroSection";
import Support from "./Components/Support/Support";
import Trade from "./Components/Trade/Trade";
import Subscription from "./Components/Subscription/Subscription";
import Footer from "./Components/Footer/Footer";

function App() {
    return (
        <div className="App">
            <Hero />
            <FeatureCards />
            <IntroSection />
            <Support />
            <Trade />
            <Subscription />
            <Footer />
        </div>
    );
}

export default App;