'use strict'

// Створити абстрактний клас Figeure3D з властивостю ім'я (string не пуста) і методом обчислити об'єм.
// Створити класи нащадки: сфера, куб, *циліндр. Написати аксессори(сеттери та геттери) для властивостей.
// Створити функцію getVolume3DFigure, яка приймає будь яку 3d фігуру і повертає її об'єм.

class Figeure3D {
    /**
     * 
     * @param {string} name 
     */
    constructor(name) {
        this.name = name;
    }
    getVolume3DFigure() {
        throw new Error('method abstract class');
    }
    get name() {
        return this._name;
    }
    set name(value) {
        if (typeof value !== 'string') {
            throw new TypeError('name must be string');
        }
        if (value.trim().length === 0) {
            throw new TypeError('an empty string is not allowed');
        }
        return this._name = value;
    }
}

class Sphere extends Figeure3D {
    /**
     * 
     * @param {number} radius 
     */
    constructor(radius){
        super('Sphere');
        this.radius = radius;
    }
    get radius() {
        return this._radius;
    }
    set radius(value) {
        if (typeof value !== 'number') {
            throw new TypeError('radius must be number');
        }
        return this._radius = value;
    }
    getVolume3DFigure() {
        return (3 / 4) * Math.PI * (Math.pow(this._radius, 3));
    }
}

class Cube extends Figeure3D {
    /**
     * 
     * @param {number} edge 
     */
    constructor(edge){
        super('Cube');
        this.edge = edge;
    }
    get edge() {
        return this._edge;
    }
    set edge(value) {
        if (typeof value !== 'number') {
            throw new TypeError('edge must be number');
        }
        return this._edge = value;
    }

    getVolume3DFigure() {
        return Math.pow(this._edge, 3);
    }
}

class Cylinder extends Figeure3D {
    /**
     * 
     * @param {number} radius 
     * @param {number} height 
     */
    constructor(radius, height){
        super('Cylinder');
        this.radius = radius;
        this.height = height;
    }
    get radius() {
        return this._radius;
    }
    set radius(value) {
        if (typeof value !== 'number') {
            throw new TypeError('radius must be number');
        }
        return this._radius = value;
    }
    get height() {
        return this._height;
    }
    set height(value) {
        if (typeof value !== 'number') {
            throw new TypeError('height must be number');
        }
        return this._height = value;
    }
    getVolume3DFigure() {
        return Math.PI * Math.pow(this._radius, 2) * this._height;
    }
}