import { Race } from "../TeamStandings/model/Race";
import { Team } from "../TeamStandings/model/Team";

const baseURL = 'https://localhost:8000'

function translateToErrorMessage(status: number){
    switch (status) {
        case 401:
            return 'Please make sure you have authentification and try again.';
        case 403:
            return 'You dont have permission to do that!';
        default:
            return 'An error occured. Please try again.';
    }
}

function checkStatus(response: any) {
    if (response.ok) {
        return response;
    }
    else {
        const httpErrorInfo = {
            status: response.status,
            statusText : response.statusText,
            url : response.url
        };
        console.log(`log server http error: ${JSON.stringify(httpErrorInfo)}`);

        let errorMessage = translateToErrorMessage(httpErrorInfo.status);
        throw new Error(errorMessage);
    }
}

function parseJSON(response: Response){
    return response.json();
}

function convertToTeamModel(data: any) : Team {
    return new Team(data);
}

function convertToRaceModel(data: any) : Race {
    return new Race(data);
}

const RacesAPI = {
    getRaces() {
        const url = `${baseURL}/standings/teams`;
        return fetch(url)
            .then(checkStatus)
            .then(parseJSON)
            .then(convertToTeamModel)
            .catch((error: TypeError) => {
                console.log('log client error' + error);
                throw new Error('An error occurred while retrieving conflicts.')
            });
    }
}