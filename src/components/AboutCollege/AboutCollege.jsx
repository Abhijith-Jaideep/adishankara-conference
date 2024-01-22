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
                        <p align='justify'>Adi Shankara Institute of Engineering & Technology (ASIET) was established in Kalady with the goal of providing technical education that instills in students both professional excellence and strong ethical values. The institute is run by the Adi Shankara Trust, a well-respected educational organization that has been active for over 50 years.

                            Founded in 2001 and maintained by the Sringeri Mutt with the benign blessings of His Holiness Sri Sri Bharathi Tirtha Mahaswamiji, the college is dedicated to promoting the overall growth and development of its students.

                            ASIET is situated in a beautiful and inspiring location, reminiscent of the peaceful presence of Jagadguru Adi Shankaracharya. The college is affiliated with the APJ Abdul Kalam Technological University in Kerala, and is approved by the AICTE. It offers undergraduate, graduate, and PhD level courses, with four of its programs being NBA accredited (CSE, ECE, EEE & MECH) demonstrating its commitment to high-quality education.
                        </p>
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
                            <p align='justify'>The Department of Computer Science & Engineering (CSE) at ASIET, Kalady, an NBA accredited department, boasts a distin- guished reputation in education and research. Established in 2001, it offers robust undergraduate, postgraduate and research pro- grams that cater to industry demands. The department houses well-equipped labs that facilitate hands-on learning, equipping stu- dents for the rapidly evolving tech landscape, research, and inno- vative endeavours. The expert faculty, cutting-edge facilities, and unwavering commitment to excellence solidify the department's role in shaping proficient professionals and researchers. Notably, ASIET's Department of Computer Science & Engineering (Artificial Intelligence), stemming from the parent CSE department, marks a significant milestone in organising undergraduate programs. These departments have established collaborative partnerships with vari- ous industrial organisations, further enhancing its commitment to bridging academia and Industry.</p>
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