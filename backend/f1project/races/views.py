from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from django.views.decorators.http import require_http_methods
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
        if 'team_standing' in team_cache:
            teams = team_cache['team_standing']
        else:
            teams = scraper.getTeamStanding()
            for team in teams:
                team = scraper.getStanding(team, 2024)
        
        data = [team.to_dict() for team in teams]

        return JsonResponse(data, safe=False)
    return JsonResponse({'error': 'Invalid request method'}, status=400)