import React from 'react'
import './aboutcollege.css'
import college from '../../../src/assets/about_img.png'

function AboutCollege() {
    return (
        <>
            <h1 className='about_title'>About Us</h1>
            <div className="about_college_container">
                <h2 className='heading1'>Our College</h2>
                <div className="our_college">
                    <div className="writing">
                        <p align='justify'>ASIET campus stands apart with its unique and environment friendly infrastructure.The College is equipped with all modern facilities that ensures the comprehensive delivery of pedagogy and also reinforces the holistic and creative development of students.The college takes pride in being an all encompassing campus that is physically- challenged- friendly, providing ramps and lifts for the less fortunate friends. The sprawling campus houses many covetous facilities.</p>
                    </div>

                    <div className="college_images">
                        <img src={college} alt="" />
                        <img src={college} alt="" />
                    </div>
                </div>

                <h2 className='heading2'>IT Department</h2>
                <div className="IT_department">
                    <div className="our_it">
                        <div className="writing">
                            <p align='justify'>ASIET campus stands apart with its unique and environment friendly infrastructure.The College is equipped with all modern facilities that ensures the comprehensive delivery of pedagogy and also reinforces the holistic and creative development of students.The college takes pride in being an all encompassing campus that is physically- challenged- friendly, providing ramps and lifts for the less fortunate friends. The sprawling campus houses many covetous facilities.</p>
                        </div>

                        <div className="college_images">
                            <img src={college} alt="" />
                            <img src={college} alt="" />
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default AboutCollege