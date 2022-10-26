import styles from "../styles/Global"
import assets from "../assets"
import Button from "./Button"

const SectionWrapper = ({ title, description, showBtn, mockupImg, banner, reserve }) => {
  return (
    <div className={`min-h-screen ${styles.section} ${reserve ? styles.bgWhite : styles.bgPrimary} ${banner}`}>

      <div className={`flex items-center ${ reserve ? styles.boxReverseClass : styles.boxClass} w-11/12 sm:w-full minmd:w-3/4`}>
        <div className={`${styles.descDiv}  
             ${reserve ? "fadeRightMini" :  "fadeLeftMini"}
             ${reserve ? styles.textRight : styles.textLeft}
        `}>
          <h1 className={`
          ${reserve ? styles.blackText : styles.whiteText}
          ${styles.h1Text}`}>{title}</h1>
          <p className={`
          ${reserve ? styles.blackText : styles.whiteText}
          ${styles.descriptionText}`}>{description}</p>

          {showBtn && (
            <Button
              assetUrl={assets.expo}
              link="deploy nft marketplace react native"
            />
          )}
        </div>
        <div className={`flex-1 ${styles.flexCenter} p-8 sm:px-0`}>
          <img src={mockupImg} alt="mockup" className={`${reserve ? "fadeRightMini" : "fadeLeftMini" } ${styles.sectionImg}`} />
        </div>
      </div>
    </div>
  )
}

export default SectionWrapper