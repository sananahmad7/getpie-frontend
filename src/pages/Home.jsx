import HomeHero from '../components/Home/HomeHero'
import AboutSection from '../components/Home/Intro'
import WhyPiePay from '../components/Home/WhyPiePay'
import FeaturedItems from '../components/Home/FeaturedItems'
import TrainingSupport from '../components/Home/TrainingSupport'
import AgentProgram from '../components/Home/AgentProgram'
import SuccessStories from '../components/Home/SuccessStories'
import ContactCTA from '../components/Home/ContactCTA'

function Home() {
    return (
        <div>
            <HomeHero />
            <AboutSection />
            <WhyPiePay />
            <FeaturedItems />
            <TrainingSupport />
            <AgentProgram />
            <SuccessStories />
            <ContactCTA />

        </div>
    )
}

export default Home