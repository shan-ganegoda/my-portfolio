import React,{useState} from 'react'
import './Services.css';

const Services = () => {

    const[toggleState, setToggleState] = useState(0);

    const toggleTab = (index) =>{
        setToggleState(index);
    }
  return (

    <section className="services section" id="services">
        <h2 className="section__title">Services</h2>
        <span className="section__subtitle">What i Offer</span>

        <div className="service__backgroundeffect"></div>

        <div className="services__container container grid">

            <div className="services__content">
                <div>
                    <i className="uil uil-web-grid services__icon"></i>
                    <h3 className="services__title">Product<br />Designer</h3>
                </div>

                <span className="services__button" onClick={()=>
                toggleTab(1)}>
                    View More
                    <i className="uil uil-arrow-right services__button-icon"></i>
                </span>

                <div className={toggleState ===1 ? "services__model active-model" : "services__model"}>
                    <div className="services__model-content">
                        <i onClick={() => toggleTab(0)} className="uil uil-times services__model-close"></i>

                        <h3 className="services__model-title">FrontEnd Designer</h3>
                        <p className="services__model-description">
                            Service More than 6+ months of experience.
                            Providing quality work to clients and companies
                        </p>

                        <ul className="services__model-services grid">

                            <li className="services__model-service">
                                <i className="uil uil-check-circle services__model-icon"></i>
                                <p className="services__model-info">
                                    I Develop FrontEnds.
                                </p>
                            </li>

                            <li className="services__model-service">
                                <i className="uil uil-check-circle services__model-icon"></i>
                                <p className="services__model-info">
                                    Web Application Development.
                                </p>
                            </li>

                            <li className="services__model-service">
                                <i className="uil uil-check-circle services__model-icon"></i>
                                <p className="services__model-info">
                                    Mobile Application Development.
                                </p>
                            </li>

                            <li className="services__model-service">
                                <i className="uil uil-check-circle services__model-icon"></i>
                                <p className="services__model-info">
                                    I Position Your Company Brand.
                                </p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="services__content">
                <div>
                    <i className="uil uil-web-grid services__icon"></i>
                    <h3 className="services__title">WEB<br />Designer</h3>
                </div>

                <span className="services__button">View More
                    <i className="uil uil-arrow-right services__button-icon"></i>
                </span>

                <div className="services__model">
                    <div className="services__model-content">
                        <i className="uil uil-times services__model-close"></i>

                        <h3 className="services__model-title">Visual Designer</h3>
                        <p className="services__model-description">
                            Service More than 6+ months of experience.
                            Providing quality work to clients and companies
                        </p>

                        <ul className="services__model-services grid">

                            <li className="services__model-service">
                                <i className="uil uil-check-circle services__model-icon"></i>
                                <p className="services__model-info">
                                    I Develop FrontEnds.
                                </p>
                            </li>

                            <li className="services__model-service">
                                <i className="uil uil-check-circle services__model-icon"></i>
                                <p className="services__model-info">
                                    Web Application Development.
                                </p>
                            </li>

                            <li className="services__model-service">
                                <i className="uil uil-check-circle services__model-icon"></i>
                                <p className="services__model-info">
                                    Mobile Application Development.
                                </p>
                            </li>

                            <li className="services__model-service">
                                <i className="uil uil-check-circle services__model-icon"></i>
                                <p className="services__model-info">
                                    I Position Your Company Brand.
                                </p>
                            </li>

                        </ul>
                    </div>
                </div>
            </div>

            <div className="services__content">
                <div>
                    <i className="uil uil-web-grid services__icon"></i>
                    <h3 className="services__title">FrontEnd<br />Designer</h3>
                </div>

                <span className="services__button">View More
                    <i className="uil uil-arrow-right services__button-icon"></i>
                </span>

                <div className="services__model">
                    <div className="services__model-content">
                        <i className="uil uil-times services__model-close"></i>

                        <h3 className="services__model-title">FrontEnd Designer</h3>
                        <p className="services__model-description">
                            Service More than 6+ months of experience.
                            Providing quality work to clients and companies
                        </p>

                        <ul className="services__model-services grid">

                            <li className="services__model-service">
                                <i className="uil uil-check-circle services__model-icon"></i>
                                <p className="services__model-info">
                                    I Develop FrontEnds.
                                </p>
                            </li>

                            <li className="services__model-service">
                                <i className="uil uil-check-circle services__model-icon"></i>
                                <p className="services__model-info">
                                    Web Application Development.
                                </p>
                            </li>

                            <li className="services__model-service">
                                <i className="uil uil-check-circle services__model-icon"></i>
                                <p className="services__model-info">
                                    Mobile Application Development.
                                </p>
                            </li>

                            <li className="services__model-service">
                                <i className="uil uil-check-circle services__model-icon"></i>
                                <p className="services__model-info">
                                    I Position Your Company Brand.
                                </p>
                            </li>

                        </ul>
                    </div>
                </div>
            </div>

        </div>
    </section>
  )
}

export default Services