function compare(a, b) {
	if (a.health > b.health) return -1;
	if (a.health === b.health) return 0;
	if (a.health < b.health) return 1;
}

export default function sortHealth(arrayCharacters) {
	return arrayCharacters.sort(compare)
}
