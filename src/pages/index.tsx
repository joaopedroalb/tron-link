import styles from "../styles/home.module.scss";
import {useState} from 'react'

declare var window: any

function HomePage() {
  const [address,setaddress] = useState<null|string>(null)
  const [loaded, setLoaded] = useState(false)

  const getTronWeb =  async() =>{
    if(window){
      if(window.tronWeb && window.tronWeb.defaultAddress.base58){
        setaddress(window.tronWeb.defaultAddress.base58);
      }else{
        setaddress(null)
      }

      setLoaded(true)
    }
  }

  return (
    <div className={styles.containerBg}>
      <h1>Web3 Project</h1>

      <div className={styles.btnContainer}>
        <button onClick={getTronWeb}>Connect</button>
        {
          loaded&&<p>{address ? `Seu enderço é ${address}`:'Por favor logue com a tron link'}</p>
        }
      </div>
    </div>
  );
}

export default HomePage;
