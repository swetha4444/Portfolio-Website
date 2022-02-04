import styles from "../styles/Projects.module.css"
import Navigation from './navigation'

function Projects()
{
    return <div> 
            <Navigation></Navigation>
            <div className={styles.container}><h1 className={styles.head}>
            <br/><br/>
            My Projects!
          </h1></div>
    </div>
}

export default Projects