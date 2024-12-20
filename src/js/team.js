export default class Team {
    constructor() {
        this.members = new Set();
    }

    add(character) {
        if (this.members.has(character)) {
            console.error('Персонаж уже присутствует в команде');
        } else {
            this.members.add(character);
        }
    }

    addAll(...characters) {
        characters.forEach((character) => this.members.add(character));
    }

    toArray() {
        return Array.from(this);
    }
}
