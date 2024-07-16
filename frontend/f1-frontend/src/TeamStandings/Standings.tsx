import { RacesAPI } from "../api/api";

function Standings(){
    const api = RacesAPI
    const data = api.getRaces()

    return (
        <table>
            <thead>
                <tr>
                    <td>Pos</td>
                    <td>Team</td>
                    <td>Points</td>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>1.</td>
                    <td></td>
                    <td>192</td>
                </tr>
            </tbody>
        </table>
    );
}

export default Standings;