import { Race } from "./Race"

export class Team{
    name: string | undefined
    all_points: number | undefined
    races: Race[] = []

    constructor(initializer?: any) {
        if(!initializer) return;
        if(initializer.name) this.name = initializer.name;
        if(initializer.points) this.all_points = initializer.points;
        if(initializer.races) this.races = initializer.races;
    }
}