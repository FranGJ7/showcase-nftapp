import styles from "../styles/Global"
import assets from "../assets"
  
  const  Download  = ()=>{
    return(
     <div className={`${styles.section} ${styles.bgWhite}`}>
      <div className={`${styles.subSection} flex-col text-center`}>
        <div>
          <h1 className={`${styles.h1Text}`}>Baixe o código fonte</h1>
          <p className={`${styles.pText}`}>Obtenha o código-fonte completo no Githud</p>
        </div>
        <button className={styles.btnPrimary}>Código Fonte</button>
        <div className={styles.flexCenter}>
          <img src={assets.scene} alt="Downlaod-png"
          className={styles.fullImg} />
        </div>
      </div>
     </div>
    )
}

export default Download