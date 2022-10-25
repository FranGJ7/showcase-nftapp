import {Download, Features, SectionWrapper} from "./components";
import assets from "./assets"




const App =()=> {
  return (
    <>
    <Download/>
    <Features/>
    <SectionWrapper
    title="You own store of Nifty NFTs. Start Sell & Growing."
    description="Buy, store, collect NFTs, exchange & earn crypto. Join 25+ million people using ProNef Marketplace"
    showBtn
    mockupImg={assets.homeHero}
    banner="banner"
    />
    </>
  );
}

export default App;
