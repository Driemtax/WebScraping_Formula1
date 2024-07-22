import { Race } from "./Race"

export class Team{
    name: string
    all_points: number | undefined
    races_by_year: { [year: number]: Race[] }

    constructor(initializer?: any) {
        if(!initializer){
            this.name = '';
            this.races_by_year = {};
            return;
        }
        this.name = initializer.name !== undefined ? initializer.name : '';
        this.all_points = initializer.points !== undefined ? initializer.points : undefined;
        this.races_by_year = initializer.races_by_year !== undefined ? initializer.races_by_year : {};
    }
}