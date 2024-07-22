import React, { createContext, useContext, useState, useEffect, ReactNode} from 'react'
import { Team } from './TeamStandings/model/Team'
import { RacesAPI } from './api/api'

interface TeamContextType {
    teams: Team[] | null;
    setTeams: React.Dispatch<React.SetStateAction<Team[] |null>>;
    error: String | null;
}

const TeamContext = createContext<TeamContextType | undefined>(undefined);

export const useTeams = () => {
    const context = useContext(TeamContext);
    if (context === undefined) {
        throw new Error('useTeams must be used within a TeamProvider')
    }
    return context;
};

interface TeamProviderProps {
    children: ReactNode
}

export const TeamProvider: React.FC<TeamProviderProps> = ({ children }) => {
    const [teams, setTeams] = useState<Team[] | null>(null);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        RacesAPI.getRaces()
        .then((data: Team[]) => setTeams(data))
        .catch((e) => setError(e.message));
    }, []);

    return (
        <TeamContext.Provider value={{teams, setTeams, error}}>
            {children}
        </TeamContext.Provider>
    );
};