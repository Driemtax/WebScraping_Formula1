from bs4 import BeautifulSoup
import requests
from .team import Team

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
    return teams
