import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, LineElement, PointElement, CategoryScale, LinearScale, Title, Tooltip, Legend } from 'chart.js';
import { Team } from './model/Team';

ChartJS.register(LineElement, PointElement, CategoryScale, LinearScale, Title, Tooltip, Legend);

interface RaceChartProps {
    teams: Team[];
}

const RaceChart: React.FC<RaceChartProps> = ({ teams }) => {
    const labels = teams[0]?.races_by_year[2024].map(race => race.location) || [];

    const teamColors: {[key: string]: string} = {
        'Red Bull Racing Honda RBPT': '#23326A',
        'Ferrari': '#D40000',
        'McLaren Mercedes': '#FF8000',
        'Mercedes': '#04BFAD',
        'Aston Martin Aramco Mercedes': '#00665E',
        'RB Honda RBPT': '#041F3D',
        'Haas Ferrari': '#111111',
        'Alpine Renault': '#0078C1',
        'Williams Mercedes': '#0331A0',
        'Kick Sauber Ferrari': '#00e701'
    };

    const datasets = teams.map((team, teamIndex) => {
        let cumulativePoints = 0;
        const data = team.races_by_year[2024].map(race => {
            cumulativePoints += Number(race.points);
            return cumulativePoints;
        });

        const teamColor = teamColors[team.name] || '#000000';

        return {
            label: team.name,
            data: data,
            borderColor: teamColor,
            backgroundColor: teamColor,
            fill: false,
        };
    });

    const data = {
        labels: labels,
        datasets: datasets
    };

    return (
        <div>
            <Line data={data} />
        </div>
    );
};

export default RaceChart;
