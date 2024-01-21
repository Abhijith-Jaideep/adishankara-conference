import React from 'react'
import "./ImportantDates.css"

export default function ImportantDates() {
  return (
    <>
        <div className="impdates_main_container" id='importantdates'>

            <div className="impdates_container">
                <h1 className="dates_title">Important Dates</h1>
                <div className="impdates_table" style={{overflowX:"auto"}}>
                    <table>
                        
                        <tr>
                            <td>Paper submission</td>
                            <td>20th June 2022</td>
                            <td className='status'><span>Active</span></td>
                        </tr>
                        <tr>
                            <td>Paper submission Deadline</td>
                            <td>10th Sep 2022</td>
                            <td className='status'><span>Active</span></td>
                        </tr>
                        <tr>
                            <td>Acceptance Notification starts</td>
                            <td>15th Nov 2022</td>
                            <td className='status'><span>Active</span></td>
                        </tr>
                        <tr>
                            <td>Early Bird Registration</td>
                            <td>07th Dec 2022</td>
                            <td className='status'><span>Active</span></td>
                        </tr>
                        <tr>
                            <td>Registration closes</td>
                            <td>12th Dec 2022</td>
                            <td className='status'><span>Active</span></td>
                        </tr>
                        <tr>
                            <td>Camera ready copy submission</td>
                            <td>10th Dec 2022</td>
                            <td className='status'><span>Active</span></td>
                        </tr>
                        <tr>
                            <td>Pre conference Workshop</td>
                            <td>04th Jan 2023</td>
                            <td className='status'><span>Active</span></td>
                        </tr>
                        <tr className='conference'>
                            <td>Conference</td>
                            <td>04th Jan 2023</td>
                            <td className='status_conf'><span>Not Active</span></td>
                        </tr>
                    </table>
                </div>

            </div>
        </div>
    </>
  )
}
