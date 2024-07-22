import { useEffect, useState } from "react";
import { Link } from 'react-router-dom'
import { RacesAPI } from "../api/api";
import { Team } from "./model/Team";
import RaceChart from "./RaceChart";
import './Standings.css';
import { useTeams } from "../TeamContext";

function Standings(){
    const { teams, error} = useTeams();    

    if(error) {
        return <div>Error: {error}</div>
    }

    if(!teams) {
        return <div>Loading ...</div>
    }

    return (
        <div className="standings-container">
            <table>
                <thead>
                    <tr>
                        <td>Pos</td>
                        <td>Team</td>
                        <td>Points</td>
                    </tr>
                </thead>
                <tbody>
                    {teams.map((team, index) => (
                        <tr key={index}>
                            <td>{index + 1}.</td>
                            <td><Link to={`/${team.name}`}>{team.name}</Link></td>
                            <td>{team.all_points}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <RaceChart teams={teams}></RaceChart>
        </div>
    );
}

export default Standings;