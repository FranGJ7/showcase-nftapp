import { Download, Features, SectionWrapper } from "./components";
import assets from "./assets"
import styles from "./styles/Global";




const App = () => {
  return (
    <>
      <SectionWrapper
        title="Você pode ter uma loja de Nifty NFTs. Comece a vender e crescer."
        description="Compre, armazene, colete NFTs, troque e ganhe criptomoedas. Junte-se a mais de 25 milhões de pessoas usando o Marketplace"
        showBtn
        mockupImg={assets.homeHero}
        banner="banner"
      />

      <SectionWrapper
        title="Interface de usuário Marketplace"
        description="Experimente uma interface agradável com cores constantes suave e um design fluente"
        mockupImg={assets.homeCards}
        reserve
      />

      <Features/>

      <SectionWrapper
        title="Deploy"
        description="Usando expo que roda nativamente em todos os dispositivos dos usuários. você pode facilmente colocar seu aplicativo nas mãos das pessoas"
        mockupImg={assets.feature}
        banner="banner"
        
      />

      <SectionWrapper
        title="Maneira criativa de mostrar a loja"
        description="O aplicativo contém duas telas, a primeira tela lista todos os NFTs, enquanto a segunda mostra os detalhes de um NFT específico"
        mockupImg={assets.mockup}
        banner="banner02"
      />
      <Download/>
      <div className="px-4 py-2 justify-center items-center bg-primary flex-col text-center banner04">
        <p className={`${styles.pText} ${styles.whiteText}`}>Feito por Fran
          <span className="bold"></span>
        </p>
      </div>
    
    </>
  );
}

export default App;
