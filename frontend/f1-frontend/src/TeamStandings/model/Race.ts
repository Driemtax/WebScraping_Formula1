export class Race{
    location: string | undefined
    points: number

    constructor(initializer: any) {
        if(!initializer){
            this.points = 0;
            return;
        }
        if(initializer.location) this.location = initializer.location
        this.points = initializer.points !== undefined ? initializer.points : 0;
    }
}