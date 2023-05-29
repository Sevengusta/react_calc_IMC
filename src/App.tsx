import { useState } from 'react'
import Styles from './app.module.css'
import poweredImage from './Assets/powered.png'
import leftArrow from "./Assets/leftarrow.png"
import { levels, calculateImc, Level } from './Helpers/IMC'
import { GridItem } from './Components/GridItem'

const App = () => {
  const [heigthField, SetHeightField] = useState<number>(0);
  const [weightField, SetweightField] = useState<number>(0);
  const [toShow, setToShow] = useState<Level | null>(null);
  
  const handleCalculateButton = () => {
    if (heigthField && weightField){
      setToShow(calculateImc(weightField,heigthField));
    }else {
      alert("Digite todos os campos")
    }
  };

  const handleBackButton =() => {
    setToShow(null);
    SetHeightField(0);
    SetweightField(0);
  }

  return (
    <div className={Styles.main}>
      <header>
        <div className={Styles.headerContainer}>
          <img src={poweredImage} alt="" width={150}/>
        </div>
      </header>
      <div className={Styles.container}>
        <div className={Styles.leftSide}>
          <h1>Calcule o seu IMC</h1>
          <p>IMC é a sigla para Índice de Massa Corpórea, parâmetro adotado
            pela Organização mundial de Saúde para calcular o peso ideal de
            cada pessoa.
          </p>
          <input 
            type="number" 
            placeholder="Digite a sua altura, Ex: 1.5 (m)"
            value={heigthField > 0 ? heigthField : ''}
            onChange={e => SetHeightField(+e.target.value)}
            disabled={toShow ? true : false}
              
          />
          <input 
            type="number" 
            placeholder="Digite o seu pego, Ex: 70.5 (kg)"
            value={weightField > 0 ? weightField : ''}
            onChange={e => SetweightField(+e.target.value)}
            disabled={toShow ? true : false}
          />
          <button onClick={handleCalculateButton } disabled={toShow ? true : false}>
            Calcular
          </button>

        </div>
        <div className={Styles.rightSide}>
          {!toShow &&
            <div className={Styles.grid}>
              {levels.map((item,index) => (
                <GridItem key={index} data={item} />
              ))}
          </div>
          }
          {toShow &&
            <div className={Styles.rightBig}>
              <div className={Styles.rightArrow} onClick={handleBackButton}>
                <img src={leftArrow} alt="" width={30}></img>
              </div>
              <GridItem  data={toShow} />
            </div>
          }
        </div>
      </div>
    </div>
  )
}

export default App