import styles from "../styles/Projects.module.css"
import Navigation from './navigation'
import "nes.css/css/nes.min.css";
import {Carousel,CarouselItem} from 'react-bootstrap';


function Projects()
{
    return <div> 
      <Navigation></Navigation>
      <div className={styles.container}>
        <br/><br/>
        <h2 className={styles.title}>My Projects</h2>
        <div className="nes-container is-dark with-title">
          <p className="title">Resume Analyser and Parser</p>
              <div className = {styles.projectImage}>
                {/* <p className="nes-balloon from-left nes-pointer"> */}
                  <a href="https://github.com/swetha4444/Resume-Analyser-Software" target={"_blank"} rel="noreferrer" >
                    <video>
                      <source src={"https://user-images.githubusercontent.com/68152189/122644103-1ae8d000-d131-11eb-9f0b-13990ddfe8b3.mp4"} type="video/mp4"/>
                    </video>
                  </a>
              </div>
            <p>
              A resume is a summarized document which represents a job seeker’s 
              professional background and skills for a prospective employer. 
              The resume parser converts an unstructured form of resume data 
              into a structured format, it extracts it into machine-readable output like CSV.
              Automated resume screening increases quality of hire by reducing false positives
              because candidates can&apos;t trick the system through keyword stuffing. It also reduces
              false negatives because candidates with good qualifications no longer slip through the
              keyword filters.
            </p>        
            <br/>
            <a href="#" className="nes-badge"><span className="is-success">NLP</span></a>&nbsp;&nbsp; 
            <a href="#" className="nes-badge"><span className="is-success">Text Classification</span></a>&nbsp;&nbsp;
            <a href="#" className="nes-badge"><span className="is-success">Knowledge Graph</span></a>&nbsp;&nbsp;
            <a href="#" className="nes-badge"><span className="is-success">Keyword Extraction</span></a>&nbsp;&nbsp; 
            <a href="#" className="nes-badge"><span className="is-success">Data Analysis</span></a>&nbsp;&nbsp; 
        </div>        
        <div className="nes-container is-dark with-title">
          <p className="title">Twitter Analyser</p>
              <div className = {styles.projectImage}>
                {/* <p className="nes-balloon from-left nes-pointer"> */}
                  <a href="https://github.com/swetha4444/TwitterAnalysis-Product-Review" target={"_blank"} rel="noreferrer" >
                    <video>
                      <source src={"https://user-images.githubusercontent.com/68152189/120896833-d80efe80-c640-11eb-9b0f-021009a3fec5.mp4"} type="video/mp4"/>
                    </video>
                  </a>
              </div>
            <p>
              Ever wanted to purchase a product online? Wanted to know how it actually fared?
             Social media and customer reviews are the best ways to decide the quality of a 
             product. This project intends to help the user determine the reviews of the 
             produdct using state-of-the-art techniques.
            </p>        
            <br/>
            <a href="#" className="nes-badge"><span className="is-success">NLP</span></a>&nbsp;&nbsp; 
            <a href="#" className="nes-badge"><span className="is-success">Text Classification</span></a>&nbsp;&nbsp;
            <a href="#" className="nes-badge"><span className="is-success">BERT Transformers</span></a>&nbsp;&nbsp;
            <a href="#" className="nes-badge"><span className="is-success">APIs</span></a>&nbsp;&nbsp; 
            <a href="#" className="nes-badge"><span className="is-success">Data Analysis</span></a>&nbsp;&nbsp; 
            <a href="#" className="nes-badge"><span className="is-success">Wordcloud</span></a>&nbsp;&nbsp; 
            <a href="#" className="nes-badge"><span className="is-success">Data Mining</span></a>&nbsp;&nbsp; 
        </div>       
        <div className="nes-container is-dark with-title">
          <p className="title">COVID Distancing and Mask Detection</p>
              <div className = {styles.projectImage}>
                {/* <p className="nes-balloon from-left nes-pointer"> */}
                  <a href="https://github.com/swetha4444/Zenith-COV19" target={"_blank"} rel="noreferrer" >
                    <img src="https://media.discordapp.net/attachments/758339851996233730/939263655709642823/unknown.png?width=858&height=594"></img>
                  </a>
              </div>
            <p>
              The world today is shaken by the deadly virus that has bought the fast moving 
              lives of today&apos;s modern society to an absolute stand still. Two science-backed 
              methods to limit the spread of the raging infection are: Maintaining social 
              distance and Wearing Masks.<br/>
              These measures bring down the pressure on healthcare resources and persona,
              while delaying the pandemic peak and also saving patients from exorbitant virus
              loads. We bring a solution that automates the constant policing needed for 
              ensuring that people follow the above precautionary measures.
              We created a program that utilizes Artificial Network to check if the social 
              distancing norms are being followed, and other precautionary measures like the 
              use of face masks that could possibly help in avoiding the need for future 
              lockdown. This can automate the human task of monitoring public spaces if 
              social distancing rules are being followed. The program uses pre-trained models 
              like YOLO and FACE-NET to achieve the same through Computer Vision.
            </p>        
            <br/>
            <a href="#" className="nes-badge"><span className="is-success">Computer Vision</span></a>&nbsp;&nbsp; 
            <a href="#" className="nes-badge"><span className="is-success">Object Recognition</span></a>&nbsp;&nbsp;
            <a href="#" className="nes-badge"><span className="is-success">Face Net</span></a>&nbsp;&nbsp;
            <a href="#" className="nes-badge"><span className="is-success">YOLO</span></a>&nbsp;&nbsp; 
            <a href="#" className="nes-badge"><span className="is-success">Data Augmentation</span></a>&nbsp;&nbsp; 
        </div>                
        <div className="nes-container is-dark with-title">
          <p className="title">Image Compression using K-Means and Autoencoders</p>
              <div className = {styles.projectImage}>
                {/* <p className="nes-balloon from-left nes-pointer"> */}
                  <a href="https://github.com/swetha4444/Image-Compression-using-K-Means-Clustering-and-Autoencoders" target={"_blank"} rel="noreferrer" >
                    <img src="https://github.com/swetha4444/Image-Compression-using-K-Means-Clustering-and-Autoencoders/blob/main/Outputs/ae%20app%202.PNG?raw=true"></img>
                  </a>
              </div>
            <p>
              A project which performs compression and decompression of images from the MNIST
              dataset using autoencoder and K-Means clustering and deployment of the model
              using Flask.
            </p>        
            <br/>
            <a href="#" className="nes-badge"><span className="is-success">Image Compression</span></a>&nbsp;&nbsp; 
            <a href="#" className="nes-badge"><span className="is-success">Flask</span></a>&nbsp;&nbsp;
            <a href="#" className="nes-badge"><span className="is-success">Machine Learning</span></a>&nbsp;&nbsp;
        </div>                 
        <div className="nes-container is-dark with-title">
          <p className="title">Expense Tracker</p>
              <div className = {styles.projectImage}>
                {/* <p className="nes-balloon from-left nes-pointer"> */}
                  <a href="https://github.com/swetha4444/Expense-Tracker" target={"_blank"} rel="noreferrer" >
                    <img src="https://github.com/swetha4444/Expense-Tracker/raw/96ee2eeb7ca1eb74e636510bd9703feecfefb826/ezgif.com-gif-maker%20(1).gif"></img>
                  </a>
              </div>
            <p>
              Keeping track of your expenses is an important part of managing your overall 
              finances. Using this application, one can not only keep an account of his/her 
              expenses but can get a graphical insight of your overall spendings.<br/>
              <b>User Interface Design :</b> HTML, CSS, Bootstrap, Reat JS, Chart JS<br/>
              <b>Database:</b> MongoDB<br/>
              <b>Web Browser:</b> Google Chrome, Microsoft Edge<br/>
            </p>        
            <br/>
            <a href="#" className="nes-badge"><span className="is-success">Full Stack</span></a>&nbsp;&nbsp; 
            <a href="#" className="nes-badge"><span className="is-success">MERN Stack</span></a>&nbsp;&nbsp;
            <a href="#" className="nes-badge"><span className="is-success">Data Analysis</span></a>&nbsp;&nbsp;
        </div>                
        <div className="nes-container is-dark with-title">
          <p className="title">Payroll Management System</p>
              <div className = {styles.projectImage}>
                {/* <p className="nes-balloon from-left nes-pointer"> */}
                  <a href="https://github.com/swetha4444/Payroll-Management-System" target={"_blank"} rel="noreferrer" >
                    <img src="https://media.discordapp.net/attachments/758339851996233730/939268528836608070/unknown.png"></img>
                  </a>
              </div>
            <p>
              A database management software for managing employee&apos;s payroll. It&apos;s designed to organize all the 
              tasks of employee payment and calculating wages, deductions. Created using HTML, CSS, Python (Django) 
              and MySQL . Finally, we can say that this system will not only automate the process but save the 
              valuable time of the manager or the admin, which can be well utilized by his institute. This will 
              be an additional advantage and management of power based on their free time from his normal duty.
            </p>        
            <br/>
            <a href="#" className="nes-badge"><span className="is-success">Agile Development</span></a>&nbsp;&nbsp; 
            <a href="#" className="nes-badge"><span className="is-success">Python</span></a>&nbsp;&nbsp;
            <a href="#" className="nes-badge"><span className="is-success">SRS Documentation</span></a>&nbsp;&nbsp;
            <a href="#" className="nes-badge"><span className="is-success">Dialogflow Chatbot</span></a>&nbsp;&nbsp;
        </div>               
        <div className="nes-container is-dark with-title">
          <p className="title">CV Attendance System</p>
              <div className = {styles.projectImage}>
                {/* <p className="nes-balloon from-left nes-pointer"> */}
                  <a href="https://github.com/swetha4444/CV-Attendance-System" target={"_blank"} rel="noreferrer" >
                    <img src="https://media.discordapp.net/attachments/758339851996233730/939269628792832030/unknown.png"></img>
                  </a>
              </div>
            <p>
              The first step to develop a facial recognition-based attendance system is to create a database, 
              which will store all employees images along with their information. Once the database is created, 
              our objective is to check the availability of the image obtained from the footage in the database. 
              The individual face extracted from the footage now needs to be processed and finally classified it 
              so that one image can be distinguished from another and to predict who the person is.
            </p>        
            <br/>
            <a href="#" className="nes-badge"><span className="is-success">Computer Vision</span></a>&nbsp;&nbsp; 
            <a href="#" className="nes-badge"><span className="is-success">Image dataset creation</span></a>&nbsp;&nbsp;
            <a href="#" className="nes-badge"><span className="is-success">Image Processing</span></a>&nbsp;&nbsp;
            <a href="#" className="nes-badge"><span className="is-success">SVM</span></a>&nbsp;&nbsp;
        </div>

        <br/><br/> <br/><br/>
        <h2 className={styles.title}>Certifications</h2>
        <div className="nes-container is-rounded is-dark">
          <Carousel className={styles.certifiates}>
            <Carousel.Item interval={1000}>
              <img
                src="https://media.discordapp.net/attachments/758339851996233730/939271156001808424/2.JPG?width=790&height=594"
                alt="First slide"
              />
            </Carousel.Item>

            <Carousel.Item interval={1000}>
              <img
                src="https://media.discordapp.net/attachments/758339851996233730/939271156245074010/3.JPG"
                alt="Second slide"
              />
            </Carousel.Item>

            <Carousel.Item interval={1000}>
              <img
                src="https://media.discordapp.net/attachments/758339851996233730/939271156488339497/4.JPG?width=795&height=594"
                alt="Third slide"
              />
            </Carousel.Item>

            <Carousel.Item interval={1000}>
              <img
                src="https://media.discordapp.net/attachments/758339851996233730/939271156731617290/5.JPG?width=794&height=593"
                alt="Fourth slide"
              />
            </Carousel.Item>

            <Carousel.Item interval={1000}>
              <img
                src="https://media.discordapp.net/attachments/758339851996233730/939271157046202408/6.JPG?width=795&height=594"
                alt="Fifth slide"
              />
            </Carousel.Item>

            <Carousel.Item interval={1000}>
              <img
                src="https://media.discordapp.net/attachments/758339851996233730/939271157327216690/7.JPG?width=800&height=594"
                alt="Sixth slide"
              />
            </Carousel.Item>

            <Carousel.Item interval={1000}>
              <img
                src="https://media.discordapp.net/attachments/758339851996233730/939271157687939102/8.JPG?width=806&height=594"
                alt="Seventh slide"
              />
            </Carousel.Item>

            <Carousel.Item interval={1000}>
              <img
                src="https://media.discordapp.net/attachments/758339851996233730/939271158036041799/1.JPG?width=788&height=594"
                alt="Eighth slide"
              />
            </Carousel.Item>
          </Carousel>
        </div>
      </div>
    </div>
}

export default Projects