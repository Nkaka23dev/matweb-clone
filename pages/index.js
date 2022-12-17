import Hero from "../components/Hero";
import Porfolio from "../components/Porfolio";
import Position from "../components/sections/Position";
import Services from "../components/sections/Services";

const title = 'Learn more about \n our portfolio'

export default function Home() {
  return (
    <>
      <Hero />
      <Porfolio title={title} />
      <Services/> 
      <Position/>
    </>
  )
}

