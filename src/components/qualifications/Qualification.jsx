import React from 'react'
import './Qualification.css';

const Qualification = () => {
  return (
    <section className="qualification section" id="qualification">
        <h2 className="section__title">Qualification</h2>
        <span className="section__subtitle">My Personal Journey</span>

        <div className="qualification__container container">
            <div className="qualification__tabs">
                <div className="qualification__button qualification__active button--flex">
                    <i className="uil uil-graduation-cap qualification__icon"></i>Education
                </div>
            </div>

            <div className="qualification__sections">
                <div className="qualification__content qualification__content-active">

                   <div className="qualification__data">

                        <div className='card__data'>
                            <h3 className="qualification__title">Bachlor Of Information Technology</h3>
                            <span className="qualification__subtitle">UCSC</span>
                            <p className="qualification__description">3rd Year Undergraduate</p>
                            <div className="qualification__calender">
                                <i className="uil uil-calendar-alt"></i>2021 - Present
                            </div>
                        </div>                        
                    </div>

                    <div className="qualification__data">

                        <div className='card__data'>
                            <h3 className="qualification__title">G.C.E Advanced Level</h3>
                            <p className="qualification__subtitle">DS Senanayaka College Colombo</p>
                            <p className="qualification__description">Sat For Exam in Science Stream</p>
                            
                            <div className="qualification__calender">
                                <i className="uil uil-calendar-alt"></i>2019
                            </div>
                        </div>      
                                          
                    </div> 

                    <div className="qualification__data">

                        <div className='card__data'>
                            <h3 className="qualification__title">G.C.E Ordinary Level</h3>
                            <p className="qualification__subtitle">DS Senanayaka College Colombo</p>
                            <p className="qualification__description">Completed with 3A 3B 3C</p>
                            <div className="qualification__calender">
                                <i className="uil uil-calendar-alt"></i>2016
                            </div>
                        </div>                        
                    </div>                              

                </div>                
            </div>
            <div className="qualification__tabs">
                <div className="qualification__button qualification__active button--flex">
                    <i className="uil uil-briefcase-alt qualification__icon"></i>Experience
                </div>
            </div>
            <div className="qualification__sections">
                <div className="qualification__content qualification__content-active">

                   <div className="qualification__data">

                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                        <div className='card__data'>
                            <h3 className="qualification__title">Demonstrator</h3>
                            <span className="qualification__subtitle">Earth International</span>
                            <p className="qualification__description">Tasked with assisting lecturers during lab sessions, which included coding sessions and 
content development.And also tasked to teach students on programming and database 
systems.</p>
                            <div className="qualification__calender">
                                <i className="uil uil-calendar-alt"></i>2022 - 2023
                            </div>
                        </div>                        
                    </div>
                       
                </div>                
            </div>
        </div>
    </section>
  )
}

export default Qualification