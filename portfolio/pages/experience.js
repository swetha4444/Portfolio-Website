import Navigation from './navigation'
import styles from '../styles/Experience.module.css'
import { VerticalTimeline, VerticalTimelineElement,WorkIcon,SchoolIcon,StarIcon }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

function Experience()
{
    return <div>
        <Navigation></Navigation>
        <div className={styles.container}>
        <br/><br/><br/>
        <VerticalTimeline>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: 'black', color: 'yellow'}}
                contentArrowStyle={{ borderRight: '7px solid  yellow' }}
                date="Jul 2021  to Dec 2021"
                iconStyle={{ background: 'green', color: '#fff' }}
            >
                <h3 className="vertical-timeline-element-title">Data Science Intern</h3>
                <h4 className="vertical-timeline-element-subtitle">First Insights</h4>
                <p>
                Working to build an Aspect Based Sentiment Analysis Model, topic modelling using LDA and 
                BERT Transformers for sentiment analysis and optimized LDA using data wrangling techniques.
                Automated sentiment analysis integrated with word search to perform sentiment analysis on 
                the reviews related to the given keyword and similar words.
                </p>
            </VerticalTimelineElement>

            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: 'black', color: 'yellow' }}
                contentArrowStyle={{ borderRight: '7px solid  yellow' }}
                date="May 2021 to Aug 2021"
                iconStyle={{ background: 'green', color: '#fff' }}
            >
                <h3 className="vertical-timeline-element-title">CV Research Intern</h3>
                <h4 className="vertical-timeline-element-subtitle">OYOBO Sports (SRIC)</h4>
                <p>
                Researched to build Computer Vision based motion technology to analyse the bio-mechanics of a 
                sports person.
                Built computer vision solutions for Pose recognition, BMI based motion analysis and other 
                use-cases using OpenCV and Mediapipe.
                Deployed the models using Flask API to integrate with React Native Application.
                </p>
            </VerticalTimelineElement>

            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: 'black', color: 'yellow' }}
                contentArrowStyle={{ borderRight: '7px solid  yellow' }}
                date="May 2021 to Aug 2021"
                iconStyle={{ background: 'green', color: '#fff' }}
            >
                <h3 className="vertical-timeline-element-title">Full Stack Developer Intern </h3>
                <h4 className="vertical-timeline-element-subtitle">GUVI Geek Network Private Limited</h4>
                <p>
                Worked alongside other developers to implement an online learning
                and teaching marketplace site using HTML, CSS, jquery-ajax,Bootstrap,
                PHP and MySQL
                </p>
            </VerticalTimelineElement>
        </VerticalTimeline>
        </div>
    </div>
}

export default Experience