import {Download, Features, SectionWrapper} from "./components";
import assets from "./assets"




const App =()=> {
  return (
    <>
   
    <SectionWrapper
    title="Você possui uma loja de Nifty NFTs. Comece a vender e crescer."
    description="Compre, armazene, colete NFTs, troque e ganhe criptomoedas. Junte-se a mais de 25 milhões de pessoas usando o Marketplace"
    showBtn
    mockupImg={assets.homeHero}
    banner="banner"
    />
    </>
  );
}

export default App;
