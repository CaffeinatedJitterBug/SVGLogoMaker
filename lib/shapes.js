class Shape {
    constructor(shapeColor, text, textColor) {
        this.shapeColor = shapeColor;
        this.text = text;
        this.textColor = textColor;
    }
}

class Circle extends Shape {
    constructor(shapeColor, text, textColor) {
        super(shapeColor, text, textColor);
    }

    render() {
        return(`<circle cx="150" cy="100" r="80" fill=${this.shapeColor} />\n\n` + `  ` + `<text x="150" y="125" font-size="60" text-anchor="middle" fill=${this.textColor}>${this.text}</text>`);
    }
}

class Square extends Shape {
    constructor(shapeColor, text, textColor) {
        super(shapeColor, text, textColor);
    }

    render() {
        return(`<rect width="160" height="160" fill=${this.shapeColor} />\n\n` + `  ` + `<text x="150" y="125" font-size="60" text-anchor="middle" fill=${this.textColor}>${this.text}</text>`);
    }
}

class Triangle extends Shape {
    constructor(shapeColor, text, textColor) {
        super(shapeColor, text, textColor);
    }

    render() {
        return(`<polygon points="50,150 250,150 50,150" fill=${this.shapeColor} />\n\n` + `  ` + `<text x="150" y="125" font-size="60" text-anchor="middle" fill=${this.textColor}>${this.text}</text>`)
    }
}

module.exports = { Circle, Square, Triangle }