import HomeHero from '../components/Home/HomeHero'
import AboutSection from '../components/Home/Intro'
import WhyPiePay from '../components/Home/WhyPiePay'
import FeaturedItems from '../components/Home/FeaturedItems'
import TrainingSupport from '../components/Home/TrainingSupport'

function Home() {
    return (
        <div>
            <HomeHero />
            <AboutSection />
            <WhyPiePay />
            <FeaturedItems />
            <TrainingSupport />

        </div>
    )
}

export default Home