import {
	rIsEnglishOnly,
	rIsPersianOnly,
} from '../regex';

type tPattern =
	| 'persianOnly'
	| 'englishOnly'
	| 'numberOnly';

class Utilities {
	// hello word => Hello world
	static upperCaseFirstLetter(
		word: string,
	): string {
		return String().concat(
			word.charAt(0).toUpperCase(),
			word.slice(1, word.length),
		);
	}
}

export default Utilities;
