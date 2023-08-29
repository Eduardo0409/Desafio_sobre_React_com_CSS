import styles from './Carro.module.css'

const carro = ({nome, marca, cor, ano, km, quant}) => {
  return (
    <div>
        <h1 className={styles.titulo}>Carro {quant}</h1>
        <div>
            <h5 className={styles.atributos}>Nome: {nome}</h5>
            <h5 className={styles.atributos}>Marca: {marca}</h5>
            <h5 className={styles.atributos}>Cor: {cor}</h5>
            <h5 className={styles.atributos}>Ano: {ano}</h5>
            <h5 className={styles.atributos}>Quilometragem: {km}km</h5>
        </div>
    </div>
  )
}

export default carro