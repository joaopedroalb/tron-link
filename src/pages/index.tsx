import styles from "../styles/home.module.scss";
import {useState} from 'react'

declare var window: any

function HomePage() {
  const [address,setaddress] = useState<null|string>(null)

  const getTronWeb =  async() =>{
    if(window){
      if(window.tronWeb && window.tronWeb.defaultAddress.base58){
        setaddress(window.tronWeb.defaultAddress.base58);
      }else{
        console.log('deu ruim')
      }
    }
  }

  return (
    <div className={styles.containerBg}>
      <h1>Web3 Project</h1>

      <div className={styles.btnContainer}>
        <button onClick={getTronWeb}>Connect</button>
        <p>{address&&`Seu enderço é ${address}`}</p>
      </div>
    </div>
  );
}

export default HomePage;
