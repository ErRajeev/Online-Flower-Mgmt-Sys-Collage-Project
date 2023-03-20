import React, { useState } from "react";
import './Team.css'
import Footer from '../../Footer/footer'
import TeamData from "./TeamData";
const Team = () => {
    const [teamData, setTeamData] = useState(TeamData)
    return (
        <>
            <div className="about-section">
                <h2>About Us Page</h2>
                <p>Some text about who we are and what we do.</p>
                <p>Resize the browser window to see that this page is responsive by the way.</p>
            </div>
            <h2 className="team-title" >Our Team</h2>
            <div className="container">
                {
                    teamData.map((data) => {
                        return (
                            <>
                                <div className="team-column">
                                    <div className="team-card">
                                        <img className="team-pic" src={data.img} alt="Jane" />
                                        <div className="container">
                                            <h2>{data.name}</h2>
                                            <h4 className="team-title">{data.title}</h4>
                                            <p>{data.email}</p>
                                            <p>{data.details}</p>
                                        </div>
                                    </div>
                                </div>
                            </>
                        )
                    })}
            </div>
            <Footer />
        </>
    )
}
export default Team;