import { useEffect, useState } from "react";
import { Link } from 'react-router-dom'
import { RacesAPI } from "../api/api";
import { Team } from "./model/Team";
import RaceChart from "./RaceChart";
import './Standings.css';

function Standings(){
    const [teamsItem, setTeamsItem] = useState<Team[] | null>(null)
    const [error, setError] = useState<string | null>(null)

    useEffect(() => {
        RacesAPI.getRaces()
            .then((data: Team[]) => setTeamsItem(data))
            .catch((e) => setError(e.message));
    }, [])

    if(error) {
        return <div>Error: {error}</div>
    }

    if(!teamsItem) {
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
                    {teamsItem.map((team, index) => (
                        <tr key={index}>
                            <td>{index + 1}.</td>
                            <td><Link to={`/${team.name}`}>{team.name}</Link></td>
                            <td>{team.all_points}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <RaceChart teams={teamsItem}></RaceChart>
        </div>
    );
}

export default Standings;