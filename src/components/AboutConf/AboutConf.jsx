import React from 'react'
import "./AboutConf.css"
import about_img from "../../assets/about_img.png"
export default function AboutConf() {
  return (
    <>
        <div className="aboutconf_main_container">
        <div className="aboutconf_container">
            <h1 className="about_title">About ICCP</h1>
            <div className="about_elements">
                <div className="about_img">
                    <img src={about_img} alt="" />
                </div>
                <div className="about_text">
                    <p align='justify'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugit voluptate laboriosam soluta? Libero aliquid incidunt error fugiat eaque soluta dolorum iure ipsum, eum et porro autem qui odio asperiores, facere nulla? Sunt, quas sint facilis eum tenetur numquam voluptas magnam. Commodi esse maxime, perferendis veritatis quo culpa quia enim odit. Lorem ipsum dolor sit amet consectetur</p>
                </div>
            </div>
        </div>
        </div>
    </>
  )
}
