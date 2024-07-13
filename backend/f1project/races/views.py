from django.http import JsonResponse
from . import scraper

def api_home(request, *args, **kwargs):
    teams = scraper.getTeamStanding()
    data = [team.to_dict() for team in teams]
    return JsonResponse(data, safe=False)