import ContactCTA from "../components/Home/ContactCTA"
import ProShopGrid from "../components/PieShop/Products"
import ProShopBanner from "../components/PieShop/ProShopBanner"
import ShopCTA from "../components/PieShop/ShopCTA"

function PieShop() {
    return (
        <div>
            <ProShopBanner />
            <ProShopGrid />
            <ShopCTA />
        </div>
    )
}

export default PieShop