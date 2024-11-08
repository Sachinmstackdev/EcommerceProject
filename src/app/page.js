import ProductCarousel from './components/Carousel/ProductCarousel'
import CategorySelector from './components/CategorySelector'
import MenSection from './components/CategorySection/MenSection'
import SecondCategoryButton from './components/SecondCategorybutton'
import WomenSection from './components/CategorySection/WomenSection'
import FourCardsButton from './components/FourCardsbutton'
import CoverImage from './components/offers/CoverImage'
import OfferProductsShowcase from './components/offers/OfferProductsShowcase'
import OfferProductsShowcase2 from './components/offers/OfferProductsShowcase2'
import AutoSlideCard from './components/Carousel/AutoSlideCard'
import AutoSlideCard2 from './components/Carousel/AutoSlideCard2'
import OfferProductsShowcase3 from './components/offers/OfferProductsShowcase3'
import OfferProductsShowcase4 from './components/offers/OfferProductsShowcase4'
import Footer from './components/Footer'
export default function Home() {
  return (
    <main>
      <ProductCarousel />
      <CategorySelector />
      <MenSection />
      <SecondCategoryButton />
      <WomenSection />
      <FourCardsButton />
      <CoverImage />
      <OfferProductsShowcase />
      <OfferProductsShowcase2 />
      <AutoSlideCard />
      <AutoSlideCard2 />
      <OfferProductsShowcase3 />
      <OfferProductsShowcase4 />
      <Footer />
    </main>
  )
}
