import React from 'react'
import './preconferenceworkshop.css'
import dummy from '../../assets/dummy.jpg'

const PreConferenceWorkshop = () => {
  return (
    <div className='preconferenceworkshop-container' id='preconferenceworkshop'>
      <h2 className='heading'>Pre-Conference Workshop</h2>
      <div className="workshop-container">

        <div className="workshop">
          <h2 className='workshop-title'>Sustainable AI</h2>
          <p className='workshop-description'>The primary focus of this workshop is on the recent trends on neuro-symbolic AI, Multimodal data fusion and AI driven health care system. The session on neurosymbolic AI is about combining the strength of statistical AI, symbolic AI and reasoning. The session on multimodal data fusion will give an insight on data capturing, integration and analysis of data from different sources that enables a holistic understanding of a learning process. The AI driven health care brings an industrial experts’ working experience with AI based health care system that builds the pathway for future medicine.</p>
          <br />
          <p className='faculty-coordinators'><b>Faculty Coordinators :</b> Dr. A. Shahina , Professor, Dr. T. Sree Sharmila, Associate Professor, SSNCE.</p>

          <div className="workshop-speakers">
            <div className="speaker">
              <img src={dummy} alt="" />
              <p>name</p>
              <p>designation</p>
            </div>
            <div className="speaker">
              <img src={dummy} alt="" />
              <p>name</p>
              <p>designation</p>
            </div>
            <div className="speaker">
              <img src={dummy} alt="" />
              <p>name</p>
              <p>designation</p>
            </div>
            <div className="speaker">
              <img src={dummy} alt="" />
              <p>name</p>
              <p>designation</p>
            </div>
          </div>
        </div>
        <div className="workshop">
          <h2 className='workshop-title'>IOT for Smart System</h2>
          <p className='workshop-description'>The hands-on session on IoT for smart system will integrate sensing, actuation, signal processing, and control in order to make decisions and create a smart environment . The session will encourage the participants to implement an IoT system using programming language from scratch. A brief discussion on robotics and its design from our experts will trigger the interest to explore more real-time applications.</p>
          <br />
          <p className='faculty-coordinators'><b>Faculty Coordinators :</b> Dr. A. Shahina , Professor, Dr. T. Sree Sharmila, Associate Professor, SSNCE.</p>
          <div className="workshop-speakers">
            <div className="speaker">
              <img src={dummy} alt="" />
              <p>name</p>
              <p>designation</p>
            </div>
            <div className="speaker">
              <img src={dummy} alt="" />
              <p>name</p>
              <p>designation</p>
            </div>
            <div className="speaker">
              <img src={dummy} alt="" />
              <p>name</p>
              <p>designation</p>
            </div>
          </div>
        </div>
        <div className="workshop">
          <h2 className='workshop-title'>Text analysis and Information Extraction & Retrieval (TIER 2023)</h2>
          <p className='workshop-description'>The Seventh Edition of workshop (TIER-2023) seeks to foster growth and excellence in the emerging NLP community in India. This time. the theme of the workshop is “Dialogue Systems” inspired by ChatGPT, conversational AI system that is recently released by OpenAI. A dialogue system or conversational agent is a computer system intended to converse with a human. ChatGPT is based on GPT-3 language model that can generate responses on the fly, allowing it to have more dynamic and varied conversation. This workshop includes talks by experts on current trends in dialogue systems, GPT architecture and a hands-on session on sentence generation using GPT.</p>
          <br />
          <p className='faculty-coordinators'><b>Faculty Coordinators :</b> Dr. A. Shahina , Professor, Dr. T. Sree Sharmila, Associate Professor, SSNCE.</p>
          <div className="workshop-speakers">
            <div className="speaker">
              <img src={dummy} alt="" />
              <p>name</p>
              <p>designation</p>
            </div>
            <div className="speaker">
              <img src={dummy} alt="" />
              <p>name</p>
              <p>designation</p>
            </div>
            <div className="speaker">
              <img src={dummy} alt="" />
              <p>name</p>
              <p>designation</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default PreConferenceWorkshop