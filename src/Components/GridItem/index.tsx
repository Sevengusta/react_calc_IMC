import { Level  } from "../../Helpers/IMC"
import  Styles  from "../GridItem/GridItem.module.css"
import upImage from "../../Assets/up.png"
import downImage from "../../Assets/down.png"

type Prop = {
    data: Level
}

export const GridItem = ({data}:Prop) => {
    return (
        <div className={Styles.main} style={{backgroundColor: data.color}}>
            {data.yourImc &&
                <div className={Styles.yourImc}>
                    <strong style={{fontSize: 25}}>Resultado</strong>
                </div>
            }
            <div className={Styles.gridIcon}>
                {data.icon === 'up' && <img src={upImage} width="30"></img> }
                {data.icon === 'down' && <img src={downImage} width="30"></img> }
            </div>
            <div className={Styles.gridTitle}>{data.title}</div>

            {data.yourImc &&
                <div className={Styles.yourImc}>
                    seu IMC é de {data.yourImc} kg/m²
                </div>
            }

            <div className={Styles.gridInfos}>
                <>
                IMC está entre <strong>{data.imc[0]} </strong> e <strong> {data.imc[1]} </strong>
                </>
            </div>

        </div>

    )
}