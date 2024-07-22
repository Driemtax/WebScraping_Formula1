import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { Team } from "../TeamStandings/model/Team";
import { useState } from "react";
import { RacesAPI } from "../api/api";
import { useTeams } from "../TeamContext";
import RaceChart from "../TeamStandings/RaceChart";
import ChartTeam from "./ChartTeam"



function TeamDetail() {
    const { name } = useParams<{name: string }>();
    const { teams, error } = useTeams();



    if(error){
        return <div className="error">Something went wrong: </div>
    }

    const team = teams?.find(team => team.name === name);

    if(!team){
        return (
            <div className="wrapper">
                <div className="Error">Kein Team gefunden, wie sind Sie hierhergekommen??</div>
            </div>
        )
    }

    return (
        <div>
            <h1>{team.name}</h1>
            <ChartTeam team={team}></ChartTeam>
        </div>
    )
    
}

export default TeamDetail;