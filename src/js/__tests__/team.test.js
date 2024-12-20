import Character from '../character';
import Team from '../team';

test('Checking of adding', () => {
    const team = new Team();
    const character = new Character({ name: 'маг', health: 100 });
    const expected = team.members.size;
    team.add(character);
    const received = team.members.size;
    expect(received).not.toBe(expected);
});

test('Checking of re-adding', () => {
    const team = new Team();
    const character = new Character({ name: 'маг', health: 100 });
    team.add(character);
    const expected = team.members.size;
    team.add(character);
    const received = team.members.size;
    expect(received).toBe(expected);
});

test('Checking of adding all', () => {
    const team = new Team();
    const wizard = new Character({ name: 'маг', health: 100 });
    const swordsman = new Character({ name: 'мечник', health: 10 });
    team.addAll(wizard, swordsman);
    const result = team.members.size;
    expect(result).toBe(2);
});

test('Checking of re-adding all', () => {
    const team = new Team();
    const wizard = new Character({ name: 'маг', health: 100 });
    const swordsman = new Character({ name: 'мечник', health: 10 });
    team.addAll(wizard, swordsman, wizard);
    const result = team.members.size;
    expect(result).toBe(2);
});

test('Checking of conversion to array', () => {
    const team = new Team();
    const wizard = new Character({ name: 'маг', health: 100 });
    const swordsman = new Character({ name: 'мечник', health: 10 });
    team.addAll(wizard, swordsman);
    const result = team.toArray();
    expect(Array.isArray(result)).toBe(true);
});
