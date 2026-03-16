import Hero from './components/sections/Hero'
import Services from './components/sections/Services'
import Advantages from './components/sections/Advantages'
import Reviews from './components/sections/Reviews'
import Coverage from './components/sections/Coverage'
import Pricing from './components/sections/Pricing'
import Contact from './components/sections/Contact'
import SocialNetworks from './components/sections/SocialNetworks'

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <Advantages />
      <Coverage />
      <Reviews />
      <Pricing />
      <Contact />
      <SocialNetworks />
    </>
  )
}
