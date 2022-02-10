import styles from "../styles/home.module.scss";
import {useState} from 'react'

function HomePage() {
  const [address,setaddress] = useState<null|string>(null)

  const w:any = window

  const getTronWeb =  async() =>{
    if(w.tronWeb && w.tronWeb.defaultaddresss.base58){
      setaddress(w.tronWeb.defaultaddresss.base58);
    }else{
      console.log('deu ruim')
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
