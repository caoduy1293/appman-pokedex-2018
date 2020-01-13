export const calHp = (v)=>{
    const value = Number(v);
    if(isNaN(v)){return 0 }
    if(value > 100){ return 100}
    return value
};

export const calcStr = (v)=> {
    const value = v * 50;
    if (isNaN(value)) {
        return 0
    } else {
        if (value > 100) {
            return 100
        } else {
            return value
        }
    }
};

export function calcHap(hp = 0, dmg = 0, weak = 0) {
    const hap = (hp / 10 + dmg / 10 + 10 - weak / 100) / 5;
    return Math.round(hap)
}

export function calcWeak(weaknesses = []) {
    const sumWeak = weaknesses.reduce((prev, cur) => {
        const v = cur.value;
        if (typeof v === 'string') {
            const curNumber = Number(v.replace(/[^0-9]/g, '')) * 100;
            return prev + curNumber
        }
        return prev
    }, 0);
    return sumWeak > 100 ? 100 : sumWeak
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
