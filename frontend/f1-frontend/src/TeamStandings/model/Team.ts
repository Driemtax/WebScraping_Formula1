import { Race } from "./Race"

export class Team{
    name: string
    all_points: number | undefined
    races: Race[] = []

    constructor(initializer?: any) {
        if(!initializer){
            this.name = '';
            return;
        }
        this.name = initializer.name !== undefined ? initializer.name : '';
        if(initializer.points) this.all_points = initializer.points;
        if(initializer.races) this.races = initializer.races;
    }
}