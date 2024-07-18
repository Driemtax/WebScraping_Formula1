from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from django.views.decorators.http import require_http_methods
from django.shortcuts import get_object_or_404
from . import scraper
from .cache import team_cache

def api_home(request, *args, **kwargs):
    teams = scraper.getTeamStanding()
    for team in teams:
        team = scraper.getStanding(team, 2024)
    
    data = [team.to_dict() for team in teams]

    return JsonResponse(data, safe=False)

@csrf_exempt
@require_http_methods(["GET"])
def get_team_standings(request):
    if request.method == 'GET':
        if 'team_standing' not in team_cache:
            teams = scraper.getTeamStanding()
            for team in teams:
                for year in range(2018, 2025):
                    team = scraper.getStanding(team, year)
            team_cache['team_standing'] =  teams
        else:
            teams = team_cache['team_standing']
        
        data = [team.to_dict() for team in teams]

        return JsonResponse(data, safe=False)
    return JsonResponse({'error': 'Invalid request method'}, status=400)

@require_http_methods(["GET"])
def get_team_details(request, team_name):
    if request.method == 'GET':
        if 'team_standing' not in team_cache:
            get_team_standings(request)
            get_team_details(request, team_name)   
        else:
            teams = team_cache['team_standing']
            team = next((t for t in teams if t.name == team_name), None)

            if team is None:
                return JsonResponse({'error' : 'Team not found'}, status=404)
            
            data = team.to_dict()
            return JsonResponse(data, safe=False)
    return JsonResponse({'error' : 'Invalid request method'}, status=400)

