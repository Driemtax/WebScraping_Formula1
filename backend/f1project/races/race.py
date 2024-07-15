class Race:
    def __init__(self, location, points):
        self.location = location
        self.points = points
    
    def to_dict(self):
        return {
            'location' : self.location,
            'points' : self.points
        }