export class Race{
    location: string | undefined
    points: number | undefined

    constructor(initializer: any) {
        if(!initializer) return
        if(initializer.location) this.location = initializer.location
        if(initializer.points) this.points = initializer.points
    }
}