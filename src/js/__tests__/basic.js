import sortHealth from "../filterHealth";


const ArrayCharacters = [
	{name: 'мечник', health: 10},
	{name: 'маг', health: 100},
	{name: 'лучник', health: 80},
];

const res = [
	{ name: 'маг', health: 100 },
	{ name: 'лучник', health: 80 },
	{ name: 'мечник', health: 10 }
];

test('sorting health value', () => {
	expect(sortHealth(ArrayCharacters).toBe(res))
})
