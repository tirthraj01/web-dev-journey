class Shape {
        constructor(color) {
        this.color = color;
    }
    paint() {
			console.log(`Painting with color ${this.color}`);
    }
    area() {
        throw new Error('The area method must be implemented in the subclass');
    }
    getDescription() {
        return `A shape with color ${this.color}`;
    }
}

class Rectangle extends Shape {
        constructor(width, height, color) {
        super(color); 
        this.width = width;
        this.height = height;
    }

    area() {
        return this.width * this.height;
    }

    getDescription() {
        return `A rectangle with width ${this.width}, height ${this.height}, and color ${this.color}`;
    }

}

const rect = new Rectangle(5, 10, "blue");

console.log(rect.area());
console.log(rect.getDescription());
rect.paint();   
