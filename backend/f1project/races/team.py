class Team:
    def __init__(self, name, points) :
        self.name = name
        self.points = points
    
    def to_dict(self):
        return {
            'name' : self.name,
            'points' : self.points
        }