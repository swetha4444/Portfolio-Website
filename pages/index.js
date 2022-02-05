import styles from '../styles/Home.module.css'
import Navigation from './navigation'
import "nes.css/css/nes.min.css";
import 'bootstrap/dist/css/bootstrap.min.css';   

export default function Home() {

  return (
    <div>
        <Navigation></Navigation>
        <div className={styles.container}>
          <br/><br/><br/>
          <h1 className={styles.title}>Hi! I am Swetha!  <i className="nes-kirby"></i></h1>
          <h2 className={styles.subtitle}><span className={styles.text_1}>Aspiring Data Scientist</span><span className={styles.text_2}>Software Developer</span></h2>
          <h1 className={styles.about}>As a self-driven individual with good inter-personal skills, 
          can easily adapt to any work environment, open for exciting roles and have a fascination for Data Science. 
          Also intrested in Software Development and everyday automation. Intrested in planning and designing all the way to solving real-life problems with code.
          </h1>
          <br/><br/>
          <div className={styles.terminal}>
            <output>
              <div className={styles.terminalHead}>My Technical Skills</div>
              <table className={styles.terminalTable}>
                <tr className={styles.tr}>
                  <th className={styles.th}>Data Science</th>
                  <th className={styles.th}>Technology</th>
                </tr>
                <tr className={styles.tr}>
                  <td className={styles.td}>BI Tools</td>
                  <td className={styles.td}>Tableau, Power BI</td>
                </tr>
                <tr className={styles.tr}>
                  <td className={styles.td}>Libraries</td>
                  <td className={styles.td}>Keras, Tensorflow, Scikit-learn, OpenCV,NLTK</td>
                </tr>
                <tr className={styles.tr}>
                  <td className={styles.td}>Deployment</td>
                  <td className={styles.td}> Flask, Streamlit</td>
                </tr>
                <tr className={styles.tr}>
                  <td className={styles.td}>Data Base</td>
                  <td className={styles.td}>SQL,MongoDB,Snowflake</td>
                </tr>
              </table>
              <br/>
              <table className={styles.terminalTable}>
                <tr className={styles.tr}>
                  <th className={styles.th}>Web Development</th>
                  <th className={styles.th}>Technology</th>
                </tr>
                <tr className={styles.tr}>
                  <td className={styles.td}>Front-End</td>
                  <td className={styles.td}>React JS,Next JS,Three JS,HTML5,<br/> CSS3, JavaScript,Bootstrap</td>
                </tr>
                <tr className={styles.tr}>
                  <td className={styles.td}>Back-End</td>
                  <td className={styles.td}>NodeJS, PHP (Basic), Apache Tomcat</td>
                </tr>
                <tr className={styles.tr}>
                  <td className={styles.td}>Data Base</td>
                  <td className={styles.td}>MySQL, MongoDB</td>
                </tr>
                <tr className={styles.tr}>
                  <td className={styles.td}>Version Control</td>
                  <td className={styles.td}>Git and GitHub</td>
                </tr>
                <tr className={styles.tr}>
                  <td className={styles.td}>Android Development</td>
                  <td className={styles.td}>Java</td>
                </tr>
              </table>
              <br/>
              <table className={styles.terminalTable}>
                <tr className={styles.tr}>
                  <td className={styles.td}>Programming Languages <br/> and Concepts</td>
                  <td className={styles.td}>Python, C, R, Java, C++ (Basic),<br/> Data Structures and Algorithms</td>
                </tr>
              </table>
            </output>
          </div>
          <br/><br/>
          <div className={styles.socials}>
            <a href="https://twitter.com/swethasaseendr2" target={"_blank"} rel="noreferrer"><i className="nes-icon twitter is-large"></i></a>
            <a href="" target={"_blank"} rel="noreferrer" ><i className="nes-icon medium is-large"></i></a>
            <a href="https://github.com/swetha4444" target={"_blank"} rel="noreferrer"><i className="nes-icon github is-large"></i></a>
            <a href="mailto:swethasaseendran4@gmail.com"><i className="nes-icon gmail is-large"></i></a>
            <a href="https://www.linkedin.com/in/swetha-saseendran-794749194/" target={"_blank"} rel="noreferrer"><i className="nes-icon linkedin is-large"></i></a>
          </div>
        </div> 
    </div>
  )
}

