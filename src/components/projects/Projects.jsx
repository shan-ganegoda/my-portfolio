import React, { useState } from 'react'
import './Projects.css';

import Calculator from '../../assets/projects/calculator.png';
import TVRD from '../../assets/projects/project.png';
import SHJ from '../../assets/projects/shj.jpg';
import ProjectCard from './ProjectCard';

const Services = () => {

    const [toggleState, setToggleState] = useState(0);

    const toggleTab = (index) => {
        setToggleState(index);
    }
    return (

        <section className="services section" id="projects">
            <h2 className="section__title">Projects</h2>
            <span className="section__subtitle">What i have done</span>

            <div className="services__container container grid">

            {/* <ProjectCard name="asd" description="asd" />
            <ProjectCard name="asd" description="asd" />
            <ProjectCard name="asd" description="asd" /> */}

                <div className="services__content">

                    <div className="data__content">
                        <img src={TVRD} alt="FCodeLearning Project" />
                        <div className="data__body">
                            <p className='data__title'>Thriposha and Vaccine Request and Distribution Management System</p>
                            <span className='text-justify'>
                                This is my final year project, which I Finished Recently. The proposed attempt aims to improve
                                the Threeposha and vaccination distribution and request management processes, which are
                                now managed manually using a paper-based system. I introduce new business procedures to
                                improve the system's efficiency and reliability.
                            </span>

                            <div className="data__tags ">
                                <p className='tags'>Angular</p>
                                <p className='tags'>SpringBoot</p>
                                <p className='tags'>Tailwind</p>
                            </div>
                        </div>
                    </div>

                </div>

                <div className="services__content">

                    <div className="data__content">
                        <img src={Calculator} alt="Calculator Project" />
                        <div className="data__body">
                            <p className='data__title'>GPA Calculator And Progress Evaluator</p>
                            <span className='data__description'>
                                The University GPA Calculator Project is a web-based application developed by
                                our team to assist students in calculating their Grade Point Average (GPA) at
                                the university level.
                            </span>

                            <div className="data__tags">
                                <p className='tags'>Angular</p>
                                <p className='tags'>Firebase</p>
                                <p className='tags'>Material</p>
                            </div>
                        </div>
                    </div>

                </div>


                <div className="services__content">

                    <div className="data__content">
                        <img src={SHJ} alt="Calculator Project" />
                        <div className="data__body">
                            <p className='data__title'>SH Jewellery Project</p>
                            <span className='data__description'>
                                This is an ongoing Project to implement a Web System to Sarath Hemachandra Jewellery.

                            </span>

                            <div className="data__tags">
                                <p className='tags'>Angular</p>
                                <p className='tags'>SpringBoot</p>
                                <p className='tags'>MySql</p>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </section>
    )
}

export default Services