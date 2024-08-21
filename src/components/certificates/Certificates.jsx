import React from 'react'
import './certificates.css';

import  JavaB  from '../../assets/certificates/jb.png';
import  MoraWB  from '../../assets/certificates/mora.png';
import  JSB  from '../../assets/certificates/jsb.png';
import  SpringB  from '../../assets/certificates/springboot.png';
import  JavaI  from '../../assets/certificates/ji.png';
import  ReactB  from '../../assets/certificates/rb.png';
import  JavaP  from '../../assets/certificates/jp.png';
import  JiraFund  from '../../assets/certificates/jiraf.png';
import  Postman  from '../../assets/certificates/Postman.png';
import  Angular from '../../assets/certificates/angular.png';
import  Security from '../../assets/certificates/springsecurity.png';
import  JUnit from '../../assets/certificates/junit.png';
import  GitHub from '../../assets/certificates/github.png';


const Certificates = () => {

  return (
    <section className="certificates section" id="certificates">
        <h2 className="section__title">Certificates</h2>
        <span className="section__subtitle">What i archived</span>


        <div className="certificates__container container">

            <div className="certificates__content  grid">

                <div className="certificate__item">
                    <img src={JavaB} alt="Java Beginner" />
                    <span>Java Introduction</span>
                </div>

                <div className="certificate__item">
                    <img src={MoraWB} alt="Moratuwa Web Development" />
                    <span>Web Development</span>
                </div>

                <div className="certificate__item">
                    <img src={JSB} alt="JavaScript Beginner" />
                    <span>Javascript Beginner</span>
                </div>

                <div className="certificate__item">
                    <img src={SpringB} alt="SpringBoot Beginner" />
                    <span>SpringBoot Beginner</span>
                </div>

                <div className="certificate__item">
                    <img src={JavaI} alt="Java Intermediate" />
                    <span>Java Intermediate</span>
                </div>

                <div className="certificate__item">
                    <img src={JavaP} alt="Java Programming" />
                    <span>Java Programming</span>
                </div>

                <div className="certificate__item">
                    <img src={ReactB} alt="React Beginner" />
                    <span>React + Redux</span>
                </div>

                <div className="certificate__item">
                    <img src={JiraFund} alt="Jira Fundementals" />
                    <span>Jira Fundementals</span>
                </div>

                <div className="certificate__item">
                    <img src={Postman} alt="Postman" />
                    <span>Postman Student Expert</span>
                </div>

                <div className="certificate__item">
                    <img src={Angular} alt="Angular" />
                    <span>Angular</span>
                </div>

                <div className="certificate__item">
                    <img src={Security} alt="Security" />
                    <span>Spring Security</span>
                </div>

                <div className="certificate__item">
                    <img src={JUnit} alt="Security" />
                    <span>JUnit</span>
                </div>

                <div className="certificate__item">
                    <img src={GitHub} alt="Security" />
                    <span>GitHub</span>
                </div>

            </div>
        </div>
    </section>
  )
}

export default Certificates