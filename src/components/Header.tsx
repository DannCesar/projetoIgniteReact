// componentes com 1º letra em maiusculo
// utilizando CSS modules, para evitar que a estilização de um componente afete a de outro
import styles from './Header.module.css'
import igniteLogo from  '../assets/igniteLogo.svg'
export function Header(){
    return(
        <header className={styles.header}>

        <img src={igniteLogo} alt="logo ignite" />
        <strong >Ignite Feed</strong>
        </header>
    )
}