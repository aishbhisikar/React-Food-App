import React from 'react'
import ContactForm from './ContactForm'
import './abt.css'

function About() {
    return (
        <div className="mainabout" id="about">
            <div className="cf">
                    <div className="cForm">
                        <h3>Get in touch...</h3>
                        <ContactForm/>
                        
                    </div>
                    <div className="about">
                        <h3>About..</h3>
                        <h4>Aishwarya Bhisikar</h4>
                        <ul style={{listStyleType:'initial'}}>
                            <li>B.E Graduate In year 2019 From India</li>
                            <li>Currently in UK on Dependent Visa</li>
                            <li>Skills: React,Html&css, MySql, Js & jQuery</li>
                            <li>Email: abhisikar59@gmail.com</li>
                        </ul>  
                    </div>
                    <div className="clear"></div>
            </div>
                <div class="footer">
                    <p>Copyright © 2021-2022 mobilise.com</p>
                    
                </div>
        </div>	
    )
}

export default About
