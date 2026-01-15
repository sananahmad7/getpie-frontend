import AvailableBusinessesSlice from '../components/SliceOfTheMarket/AvailableBusinessesSlice'
import ContactFormSlice from '../components/SliceOfTheMarket/ContactFormSlice'
import FeaturesSlice from '../components/SliceOfTheMarket/FeaturesSlice'
import HeroSlice from '../components/SliceOfTheMarket/Hero'
import MarketingProgramSlice from '../components/SliceOfTheMarket/MarketingProgramSlice'
import ReadyToLearnSlice from '../components/SliceOfTheMarket/ReadyToLearnSlice'

function SliceOfTheMarket() {
    return (
        <div>
            <HeroSlice />
            <FeaturesSlice />
            <ContactFormSlice />
            <AvailableBusinessesSlice />
            <MarketingProgramSlice />
            <ReadyToLearnSlice />

        </div>
    )
}

export default SliceOfTheMarket