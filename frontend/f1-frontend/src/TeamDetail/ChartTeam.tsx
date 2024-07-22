import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, LineElement, PointElement, CategoryScale, LinearScale, Title, Tooltip, Legend } from 'chart.js';
import { Team } from '../TeamStandings/model/Team';

ChartJS.register(LineElement, PointElement, CategoryScale, LinearScale, Title, Tooltip, Legend);

interface RaceChartProps {
    team: Team;
}

const RaceChart: React.FC<RaceChartProps> = ({ team }) => {
    const labels = team?.races_by_year[2023].map((race, index) => {
        return index.toString();
    });

    const yearColors = [
        '#FF0000', // Red 2018
        '#00FF00', // Green 2019
        '#0000FF', // Blue 2020
        '#FFFF00', // Yellow 2021
        '#FF00FF', // Magenta 2022
        '#00FFFF', // Cyan 2023
        '#800080'  // Lila 2024
    ];

    const datasets = Object.keys(team.races_by_year).map((year, index) => {
        let cumulativePoints = 0;
        const data = team.races_by_year[Number(year)].map(race => {
            cumulativePoints += Number(race.points);
            return cumulativePoints;
        });


        return {
            label: year,
            data: data,
            borderColor: yearColors[index],
            backgroundColor: yearColors[index],
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
