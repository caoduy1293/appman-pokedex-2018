export function hpLevelCalculation() {
    // maximum is 100. if value is higher than 100 set it to 100, otherwise 0.
}
export function strengthLevelCalculation(attacks) {
    // use attacks length to multiply by 50, maximum is 100. e.g. if value is 1 set it to 50, 2 set it to 100, otherwise 0.
}
export function weaknessLevelCalculation(weaknesses) {
    // use weaknesses length multiply by 100, maximum is 100. e.g. if value is 1 set it to 100, otherwise 0.
}
export function damageLevelCalculation() {
    // use damage value without symbol of all attacks skill. e.g. 50+ set it to 50, 20* set it to 20, otherwise 0.
}
export function happinessLevelCalculation() {
    // ((HP / 10) + (Damage /10 ) + 10 - (Weakness)) / 5
}

/*
Example

Pikachu {
    name: 'Pikachu',
        hp: 110,
        attacks: [
        { name: 'attack A', damage: '20+'},
        { name: 'attack B', damage: '40x'}
    ],
        weaknesses: [
        { name: 'weakness A'},
    ]
}

Output {
    hp: 100,
        strength: '100%',
        weakness: '50%',
        damage: 60,
        happiness: 5
}*/
