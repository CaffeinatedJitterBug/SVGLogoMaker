class Shape {
    constructor(shapeColor, text, texColor) {
        this.shapeColor = shapeColor;
        this.text = text;
        this.texColor = texColor;
    }
}

class Circle extends Shape {
    constructor(shapeColor, text, texColor) {
        super(shapeColor, text, texColor);
    }

    render() {
        return(`<circle cx="150" cy="100" r="80" fill=${shapeColor} />`)
    }
}

class Square extends Shape {
    constructor(shapeColor, text, texColor) {
        super(shapeColor, text, texColor);
    }

    render() {
        return(`<rect width="160" height="160" fill=${shapeColor} />`)
    }
}

class Triangle extends Shape {
    constructor(shapeColor, text, texColor) {
        super(shapeColor, text, texColor);
    }

    render() {
        return(`<polygon points="50,150 250,150 50,150" fill=${shapeColor} />`)
    }
}