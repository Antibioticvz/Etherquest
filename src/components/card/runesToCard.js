import {BaseCard, ExtraAbility} from './cardTemplates'
import u from './util'

class Card {
	constructor(runes) {

		runes = getActiveRunes(runes)

		const baseCard = new BaseCard(runes.baseCardX, runes.baseCard)
		let extraAbility = new ExtraAbility(runes.extraAbilityX, runes.extraAbility)

		if ( incompatible() ) {
			extraAbility.text = ''
			extraAbility.mana = 0
		}

		this.text = fixGrammar(`${baseCard.text} ${extraAbility.text}`)
		this.mana = round( baseCard.mana + extraAbility.mana, 0 )
		this.type = baseCard.type
		if (this.type == 'creature') {
			this.attack = baseCard.attack
			this.defense = baseCard.defense
			this.hp = baseCard.hp
		}

		this.attackType = baseCard.attackType
		this.color = baseCard.color
		this.runes = baseCard.rune + extraAbility.rune
		this.name = baseCard.name

		function incompatible() {
			return oneItemMatches( 
				baseCard.incompatibility.concat(baseCard.tags), 
				extraAbility.incompatibility.concat(extraAbility.tags) 
			)
		}
	}
}

// rest is all utility stuff

const runesToCard = (runes) => {
	return new Card(runes)
}

const fixGrammar = (string) => {
	console.log(string)

	string = string.replace(/1 (\b[^ ]+?\b |)cards/, '1 card')
	string = string.replace(/1 (\b[^ ]+?\b |)creatures/, '1 creature')
	string = string.replace(/ $/, '')
	return string
}

const oneItemMatches = function (haystack, arr) {
		return arr.some(function (v) {
				return haystack.indexOf(v) >= 0
		})
}

const round = u.round

/* rules for runes:
// 1: first 2 characters are active
// 2: letters are base cards, numbers are extra abilities
// 3: last 2 number is 'x' for base cards and extra abilities
// 4: gene strength is in parentheses
runesArray = [
	'f(10)5(10)l(10)3(10)0(10)9(10)8(10)s(10)l(10)k(10)3(10)0(10)3(10)21', 
	'd(10)3(10)s(10)l(10)j(10)3(10)d(10)k(10)A(10)2(10)s(10)l(10)k(10)j(10)2(10)d(10)k(10)2(10)s(10)k(10)j(10)63', 
	'k(10)6(10)l(10)k(10)j(10)d(10)l(10)2(10)d(10)3(10)9(10)2(10)k(10)s(10)d(10)82'
]
*/

// will need to be updated when rune format changes
const getActiveRunes = (runes) => {

	const firstLetter = runes.match(/[a-zA-Z]/)[0]
	const firstNumber = runes.match(/\)\d\(/)[0].replace(/[()]/g, '')
	const last2Numbers = runes.match(/\d\d$/)[0]

	return {
		baseCard: firstLetter, 
		baseCardX: last2Numbers[0],
		extraAbility: firstNumber,
		extraAbilityX: last2Numbers[1],
	}
}

export {runesToCard}


