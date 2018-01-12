import u from './util'

class BaseCard {
	
	constructor(x, rune) {
			
		// this is an array of all base cards.
		return getItemWithRune([

			() => { 
				x = calculateRange(x, 2 , 6)
				this.name = 'Card name'
				this.text = `Target player draws ${round(x / 2, 1)} card.`
				this.mana = round(x,1)
				this.type = 'invocation'
				this.attackType = 'magic'
				this.color = 'blue'
				this.tags = ['draw', 'invocation']
				this.incompatibility = ['draw']
				this.rune = 'a'
				return this
			},

			() => { 
				x = calculateRange(x, 1 , 3)
				this.name = 'Card name'
				this.text = `Target creature or player gains ${round(x * 3, 1)} HP.`
				this.mana = round(x,1)
				this.type = 'invocation'
				this.attackType = 'melee'
				this.color = 'blue'
				this.tags = ['hp', 'invocation']
				this.incompatibility = ['hp']
				this.rune = 'b'
				return this
			},

			() => { 
				x = calculateRange(x, 2 , 6)
				this.name = 'Card name'
				this.text = `Target creature or player loses ${round(x, 1)} HP, you gain ${round(x / 2, 1)} HP.`
				this.mana = round(x,1)
				this.type = 'invocation'
				this.attackType = 'magic'
				this.color = 'blue'
				this.tags = ['hp', 'invocation']
				this.incompatibility = ['hp']
				this.rune = 'c'
				return this
			},

			() => { 
				x = calculateRange(x, 1 , 3)
				this.name = 'Card name'
				this.text = `Deal ${round( Math.log(x + 0.1) * 3 ) + 3} damage to target creature or player.`
				this.mana = round(x,1) + 1
				this.type = 'invocation'
				this.attackType = 'range'
				this.color = 'bronze'
				this.tags = ['damage', 'invocation']
				this.incompatibility = ['damage']
				this.rune = 'd'
				return this
			},

			() => { 
				x = calculateRange(x, 0 , 2)
				this.name = 'Card name'
				this.text = ``
				this.mana = round(x)
				this.type = 'creature'
				this.attackType = 'range'
				this.color = 'bronze'
				this.attack = round(x)
				this.defense = round(x / 2 + 1)
				this.hp = round(x / 2 + 1, 1)
				this.tags = ['creature']
				this.incompatibility = []
				this.rune = 'e'
				return this
			},

			() => { 
				x = calculateRange(x, 4 , 6)
				this.name = 'Card name'
				this.text = `You gain ${round(x / 2, 1)} HP.`
				this.mana = round(x)
				this.type = 'creature'
				this.attackType = 'magic'
				this.color = 'green'
				this.attack = round(x)
				this.defense = round(x / 2 + 1)
				this.hp = round(x / 2, 1)
				this.tags = ['creature', 'hp']
				this.incompatibility = ['hp']
				this.rune = 'f'
				return this
			},

			() => { 
				x = calculateRange(x, 1 , 4)
				this.name = 'Card name'
				this.text = `Remove 1 HP from this creature, gain ${round(x-2, 1)} mana until the end of turn.`
				this.mana = round(x, 1)
				this.type = 'creature'
				this.attackType = 'magic'
				this.color = 'green'
				this.attack = 0
				this.defense = round(x / 2 + 1)
				this.hp = round(x / 4, 1)
				this.tags = ['creature', 'mana']
				this.incompatibility = ['mana']
				this.rune = 'g'
				return this
			},

			() => { 
				x = calculateRange(x, 2 , 5)
				this.name = 'Card name'
				this.text = `Protection from magic damage.`
				this.mana = round(x, 1)
				this.type = 'creature'
				this.attackType = 'melee'
				this.color = 'green'
				this.attack = x
				this.defense = x + 1
				this.hp = round(x - 1, 1)
				this.tags = ['creature', 'protection']
				this.incompatibility = ['protection']
				this.rune = 'h'
				return this
			},

			() => { 
				x = calculateRange(x, 2 , 5)
				this.name = 'Card name'
				this.text = `Protection from magic damage.`
				this.mana = round(x, 1)
				this.type = 'creature'
				this.attackType = 'melee'
				this.color = 'green'
				this.attack = x
				this.defense = x + 1
				this.hp = round(x - 1, 1)
				this.tags = ['creature', 'protection']
				this.incompatibility = ['protection']
				this.rune = 'i'
				return this
			},

			() => { 
				x = calculateRange(x, 2 , 5)
				this.name = 'Card name'
				this.text = `Protection from magic damage.`
				this.mana = round(x, 1)
				this.type = 'creature'
				this.attackType = 'melee'
				this.color = 'dark'
				this.attack = x
				this.defense = x + 1
				this.hp = round(x - 1, 1)
				this.tags = ['creature', 'protection']
				this.incompatibility = ['protection']
				this.rune = 'j'
				return this
			},

			() => { 
				x = calculateRange(x, 2 , 5)
				this.name = 'Card name'
				this.text = `Protection from magic damage.`
				this.mana = round(x, 1)
				this.type = 'creature'
				this.attackType = 'melee'
				this.color = 'dark'
				this.attack = x
				this.defense = x + 1
				this.hp = round(x - 1, 1)
				this.tags = ['creature', 'protection']
				this.incompatibility = ['protection']
				this.rune = 'k'
				return this
			},

			() => { 
				x = calculateRange(x, 2 , 5)
				this.name = 'Card name'
				this.text = `Protection from magic damage.`
				this.mana = round(x, 1)
				this.type = 'creature'
				this.attackType = 'melee'
				this.color = 'dark'
				this.attack = x
				this.defense = x + 1
				this.hp = round(x - 1, 1)
				this.tags = ['creature', 'protection']
				this.incompatibility = ['protection']
				this.rune = 'l'
				return this
			},

			() => { 
				x = calculateRange(x, 2 , 5)
				this.name = 'Card name'
				this.text = `Protection from magic damage.`
				this.mana = round(x, 1)
				this.type = 'creature'
				this.attackType = 'melee'
				this.color = 'dark'
				this.attack = x
				this.defense = x + 1
				this.hp = round(x - 1, 1)
				this.tags = ['creature', 'protection']
				this.incompatibility = ['protection']
				this.rune = 'm'
				return this
			},

			() => { 
				x = calculateRange(x, 2 , 5)
				this.name = 'Card name'
				this.text = `Protection from magic damage.`
				this.mana = round(x, 1)
				this.type = 'creature'
				this.attackType = 'melee'
				this.color = 'red'
				this.attack = x
				this.defense = x + 1
				this.hp = round(x - 1, 1)
				this.tags = ['creature', 'protection']
				this.incompatibility = ['protection']
				this.rune = 'n'
				return this
			},

			() => { 
				x = calculateRange(x, 2 , 5)
				this.name = 'Card name'
				this.text = `Protection from magic damage.`
				this.mana = round(x, 1)
				this.type = 'creature'
				this.attackType = 'melee'
				this.color = 'red'
				this.attack = x
				this.defense = x + 1
				this.hp = round(x - 1, 1)
				this.tags = ['creature', 'protection']
				this.incompatibility = ['protection']
				this.rune = 'o'
				return this
			},

			() => { 
				x = calculateRange(x, 2 , 5)
				this.name = 'Card name'
				this.text = `Protection from magic damage.`
				this.mana = round(x, 1)
				this.type = 'creature'
				this.attackType = 'melee'
				this.color = 'red'
				this.attack = x
				this.defense = x + 1
				this.hp = round(x - 1, 1)
				this.tags = ['creature', 'protection']
				this.incompatibility = ['protection']
				this.rune = 'p'
				return this
			},

			() => { 
				x = calculateRange(x, 2 , 5)
				this.name = 'Card name'
				this.text = `Protection from magic damage.`
				this.mana = round(x, 1)
				this.type = 'creature'
				this.attackType = 'melee'
				this.color = 'red'
				this.attack = x
				this.defense = x + 1
				this.hp = round(x - 1, 1)
				this.tags = ['creature', 'protection']
				this.incompatibility = ['protection']
				this.rune = 'q'
				return this
			},

			() => { 
				x = calculateRange(x, 2 , 5)
				this.name = 'Card name'
				this.text = `Protection from magic damage.`
				this.mana = round(x, 1)
				this.type = 'creature'
				this.attackType = 'melee'
				this.color = 'bronze'
				this.attack = x
				this.defense = x + 1
				this.hp = round(x - 1, 1)
				this.tags = ['creature', 'protection']
				this.incompatibility = ['protection']
				this.rune = 'r'
				return this
			},

			() => { 
				x = calculateRange(x, 2 , 5)
				this.name = 'Card name'
				this.text = `Protection from magic damage.`
				this.mana = round(x, 1)
				this.type = 'creature'
				this.attackType = 'melee'
				this.color = 'bronze'
				this.attack = x
				this.defense = x + 1
				this.hp = round(x - 1, 1)
				this.tags = ['creature', 'protection']
				this.incompatibility = ['protection']
				this.rune = 's'
				return this
			},

			() => { 
				x = calculateRange(x, 2 , 5)
				this.name = 'Card name'
				this.text = `Protection from magic damage.`
				this.mana = round(x, 1)
				this.type = 'creature'
				this.attackType = 'melee'
				this.color = 'blue'
				this.attack = x
				this.defense = x + 1
				this.hp = round(x - 1, 1)
				this.tags = ['creature', 'protection']
				this.incompatibility = ['protection']
				this.rune = 't'
				return this
			}

		], rune)()
	}
}

class ExtraAbility {
	
	constructor(x, rune) {
			
		// this is an array of all added abilities.
		return getItemWithRune([

			() => { 
				x = calculateRange(x, 1 , 2)
				this.text = `Remove 1 HP from this creature, gain ${round(x, 1)} mana until the end of turn.`
				this.mana = round(x,1)
				this.tags = ['mana']
				this.incompatibility = ['mana', 'invocation']
				this.rune = '1'
				return this
			},

			() => { 
				x = calculateRange(x, 3, 6)
				this.text = `When cast, target player draws ${round(x / 3, 1)} cards.`
				this.mana = round(x,1)
				this.tags = ['draw']
				this.incompatibility = ['draw']
				this.rune = '2'
				return this
			},

			() => { 
				x = calculateRange(x, 2 , 3)
				this.text = `Remove ${round(x * 2, 1)} HP from this creature, destroy target creature. If this creature has less than ${round(x * 2, 1)} HP, remove all HP instead.`
				this.mana = round(x,1)
				this.tags = ['destroy']
				this.incompatibility = ['destroy', 'invocation']
				this.rune = '3'
				return this
			},

			() => { 
				x = calculateRange(x, 1 , 3)
				this.text = `When cast, deal ${x} damage to target creature or player.`
				this.mana = round(x,1)
				this.tags = ['damage']
				this.incompatibility = ['damage']
				this.rune = '4'
				return this
			},

			() => { 
				x = calculateRange(x, 2 , 4)
				this.text = `As an additional casting cost, remove ${round(x * 2, 1)} HP from target creature you control.`
				this.mana = -round(x,1)
				this.tags = ['']
				this.incompatibility = ['']
				this.rune = '5'
				return this
			},

			() => { 
				x = calculateRange(x, 2, 6)
				this.text = `As an additional casting cost, discard ${round(x / 2, 1)} cards.`
				this.mana = -round(x,1)
				this.tags = ['']
				this.incompatibility = ['']
				this.rune = '6'
				return this
			},

			() => { 
				x = calculateRange(x, 2 , 3)
				this.text = `When cast, target opponent draws ${round(x / 2, 1)} cards.`
				this.mana = -round(x,1)
				this.tags = ['draw']
				this.incompatibility = ['draw']
				this.rune = '7'
				return this
			},
	
			() => { 
				this.text = `When cast, end your turn.`
				this.mana = -1
				this.tags = ['turn']
				this.incompatibility = ['turn']
				this.rune = '8'
				return this
			}

		], rune)()
	}
}

const calculateRange = (x, min, max) => {
	let number = max - min
	return round( x / 10 * number + min )
}

const getItemWithRune = (array, rune) => {
	let counter = array.length
	while(counter--) {		
		if ( array[counter]().rune == rune ) return array[counter]
	}
}

const round = u.round

export {BaseCard}
export {ExtraAbility}
