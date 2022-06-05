class Poin{
    constructor(x, y){
        this.x = x;
        this.y = y;
    }
    displayName = "Poin";
    distance(b){
        const dx = this.x - b.x;
        const dy = this.y - b.y;
        return Math.hypot(dx, dy);
    }
}

let p1 = new Poin(5, 5);
let p2 = new Poin(10, 10);
console.log(p1.displayName);
console.log(p1.distance(p2));