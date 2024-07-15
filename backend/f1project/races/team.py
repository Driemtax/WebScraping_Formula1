class Team:
    def __init__(self, name, points) :
        self.name = name
        self.points = points
        self.races = []
    
    def to_dict(self):
        return {
            'name' : self.name,
            'points' : self.points,
            'races' : [race.to_dict() for race in self.races]
        }