from bs4 import BeautifulSoup
import requests
from .team import Team
from .race import Race
from .cache import team_cache, team_name_mapping

def getTeamStanding():
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
    name_format = team_name_mapping[team.name][year]
    print(name_format)
    endpoint = f'https://www.formula1.com/en/results.html/{year}/team/{name_format}.html'
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
    team.add_races(year, races)
    
    return team
