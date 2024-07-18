class Team:
    def __init__(self, name, points) :
        self.name = name
        self.points = points
        self.races_by_year = {year: [] for year in range(2018, 2025)}

    def add_races(self, year, races):
        if year in self.races_by_year:
            self.races_by_year[year] = races
        else:
            raise ValueError(f"Year {year} is out of the supported range (2018-2024)")
    
    def to_dict(self):
        return {
            'name' : self.name,
            'points' : self.points,
            'races' : {year: [race.to_dict() for race in self.races] for year, races in self.races_by_year.items()}
        }