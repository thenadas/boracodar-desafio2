import { useState } from 'react';

import ImgSofa from './assets/imageSofa.png';
import Img360 from './assets/Vector.png';
import ImgSofaGif from './assets/SofaBoraCodar.gif';
import ImgX from './assets/VectorX.png';

import './style.css';

function App() {

  const[estado, setEstado] = useState(true);
  const[icone, setIcone] = useState(<img src={Img360} alt="Imagem 360 grau" className='img360'/>);
  const[sofa, setSofa] = useState(<img src={ImgSofa} alt="imagem de um Sofa" className='imgSofa'/>);

  let sofaImg = <img src={ImgSofa} alt="imagem de um Sofa" className='imgSofa'/>
  let girar360 = <img src={Img360} alt="Imagem 360 grau" className='img360'/>
  let imgX = <img src={ImgX} alt="Imagem 360 grau"/>
  let sofaGif = <img src={ImgSofaGif} alt="Imagem 360 grau" className='imgSofa'/>


    function GirarImg(){
      if(estado === false){
        setEstado(true);
        setIcone(girar360);
        setSofa(sofaImg);
        return;
      }
      setEstado(false);
      setIcone(imgX);
      setSofa(sofaGif);
  }

  return (
    <div className='container'>
      <section className='container-img'>
        <button className='btn-img' onClick={GirarImg}>{icone}</button>
        {sofa}
      </section>
      <section>
        <p>Código: 42404</p>
        <h1>Sofa Margot II - Rosé</h1>
        <h3>R$ 4.000</h3>
        <button>Adicionar á cesta</button>
      </section>
    </div>
  );
}

export default App;

