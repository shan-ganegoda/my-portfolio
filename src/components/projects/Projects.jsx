import React,{useState} from 'react'
import './Projects.css';

import Calculator from '../../assets/projects/calculator.png';
import FCode from '../../assets/projects/fcodelearning.png';
import SHJ from '../../assets/projects/shj.jpg';

const Services = () => {

    const[toggleState, setToggleState] = useState(0);

    const toggleTab = (index) =>{
        setToggleState(index);
    }
  return (

    <section className="services section" id="projects">
        <h2 className="section__title">Projects</h2>
        <span className="section__subtitle">What i have done</span>

        <div className="services__container container grid">

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
                <img src={FCode} alt="FCodeLearning Project" />
                    <div className="data__body">
                        <p className='data__title'>FCodeLearning Learning Platform</p>
                        <span className='data__description'> 
                        This project is a personal endeavor aimed at gaining hands-on experience in web development 
                        while creating a valuable educational resource.
                        </span>

                        <div className="data__tags ">
                            <p className='tags'>Angular</p>
                            <p className='tags'>SpringBoot</p>
                            <p className='tags'>MySql</p>
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
                            <p className='tags'>Material</p>
                        </div>
                    </div>
                </div>
                
            </div>

        </div>
    </section>
  )
}

export default Services