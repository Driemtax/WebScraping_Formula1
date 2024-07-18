from bs4 import BeautifulSoup
import requests
from .team import Team
from .race import Race
from .cache import team_cache

def getTeamStanding():
    if 'team_standing' in team_cache:
        return team_cache['team_standing']
    
    endpoint = 'https://www.formula1.com/en/results.html/2024/team.html'
    html = requests.get(endpoint)
    soup = BeautifulSoup(html.text, 'lxml')
    table = soup.find('table', class_ = 'resultsarchive-table')
    teams = []
    rows = table.find_all('tr')[1:] # jumps the header row
    for row in rows:
        columns = row.find_all('td')
        if columns:
            name = columns[2].text.strip()
            points = columns[3].text.strip()
            team = Team(name, points)
            teams.append(team)
    
    team_cache['team_standing'] = teams
    return teams

def getStanding(team, year):
    name_format = team.name.lower().replace(" ", "_")
    print(name_format)
    endpoint = f'https://www.formula1.com/en/results.html/{year}/team/{name_format}.html'
    real_endpoint = 'https://www.formula1.com/en/results.html/2024/team/red_bull_racing_honda_rbpt.html'
    correctness = endpoint == real_endpoint
    print(correctness)
    html = requests.get(endpoint)
    soup = BeautifulSoup(html.text, 'lxml')

    table = soup.find('table', class_ = 'resultsarchive-table')
    races = []
    rows = table.find_all('tr')[1:] # jumps the header row
    for row in rows:
        columns = row.find_all('td')
        if columns:
            location = columns[1].text.strip()
            points = columns[3].text.strip()
            race = Race(location, points)
            races.append(race)
    team.races = races
    
    return team
