import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { Team } from "../TeamStandings/model/Team";
import { useState } from "react";


function TeamDetail() {
    const { name } = useParams<{name: string }>();
    const [teamItem, setTeamItem] = useState<Team | null>(null)
    const [error, SetError] = useState<string | null>(null)

    useEffect(() => {
        
    })


    if(error){
        return <div className="error">Something went wrong: </div>
    }

    if(!teamItem){
        return (
            <div className="Error">Welche Jahre möchten Sie vergleichen?: {name}</div>
        )
    }

    return (
        <div className=""></div>
    )
    
}

export default TeamDetail;