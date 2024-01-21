import React from 'react'
import "./AboutConf.css"
import about_img from "../../assets/about_img.png"
export default function AboutConf() {
  return (
    <>
        <div className="aboutconf_main_container" id='about'>
        <div className="aboutconf_container">
            <h1 className="about_title">About ICCP</h1>
            <div className="about_elements">
                <div className="about_img">
                    <img src={about_img} alt="" />
                </div>
                <div className="about_text">
                    <p align='justify'>ICCP, or the International Council for Commercial Arbitration, is a global organization dedicated to promoting and facilitating international commercial arbitration. Established in 1961, ICCP provides a platform for practitioners, academics, and professionals in the field of international arbitration to collaborate, share knowledge, and contribute to the development and improvement of international arbitration practices. ICCP is known for its influential role in shaping arbitration rules and standards, including the widely recognized ICC Arbitration Rules. The organization regularly organizes conferences, seminars, and training programs to foster discussions on emerging trends and challenges in international commercial arbitration. ICCP plays a crucial role in promoting the use of arbitration as an effective and efficient means of resolving cross-border commercial disputes, contributing to the harmonization and enhancement of global arbitration practices.</p>
                </div>
            </div>
        </div>
        </div>
    </>
  )
}
