export function chooseWord(){
    const words = ['munificent','interlude', 'cavalcade',
		           'promontory', 'moribund', 'pabulum',
		           'sinecure', 'vestments','illegitimate',
		           'consummate', 'dialectical', 'corpulent',
		           'duopoly', 'oligarchic', 'gavel',
		           'edifice', 'verily', 'varlet',
		           'venal', 'sacrosanct', 'purgative',
		           'substantiate', 'corporeal', 'plenitude'];

	let rand = Math.floor(Math.random() * words.length);
	return words[rand];
}
