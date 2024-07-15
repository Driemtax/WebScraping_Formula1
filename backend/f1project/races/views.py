from django.http import JsonResponse
from . import scraper

def api_home(request, *args, **kwargs):
    teams = scraper.getTeamStanding()
    for team in teams:
        team = scraper.getStanding(team, 2024)
    
    data = [team.to_dict() for team in teams]

    return JsonResponse(data, safe=False)