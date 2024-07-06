import React from 'react'
import styles from './Campanha.module.css'

const Campanha = (props) => {

    function defineMensagem(mes) {
        if(mes === "setembro") {
            return "Prevençao ao suicídio"
        } else if(mes === "outubro") {
            return "Concientização sobre o câncer de mama"
        } else {
            return "Prevenção e combate ao câncer e próstata"
        }
    }

    function defineCorDeFundo(mes) {
        if(mes === "setembro") {
            return styles.setembro
        }
    }

  return (
    <div className={defineCorDeFundo(props.mes)}>
        <p>{defineMensagem(props.mes)}</p>
    </div>
  )
}

export default Campanha