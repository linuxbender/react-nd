import {AsyncStorage} from 'react-native'
import {STORAGE_KEY} from './constants'
import {uuid} from './numberHelper';

/** return all of the decks along with their titles, questions, and answers */
export function getDecks() {
    return AsyncStorage.getItem(STORAGE_KEY)
        .then(dbJSON => {
            if (!dbJSON) {
                return []
            }
            let data = JSON.parse(dbJSON);
            return Object.keys(data).map(i => data[i]);
        })
}

/** take in a single id argument and return the deck associated with that id */
export function getDeck(id) {
    return getDecks()
        .then(decks => decks.key === id)
}

/** take in a single title argument and add it to the decks */
export function saveDeckTitle(title) {
    let key = uuid();
    return AsyncStorage.mergeItem(STORAGE_KEY, JSON.stringify({
        [key]: {
            key: key,
            title,
            questions: [],
            timestamp: Date.now()
        }
    }))
}

/** take in two arguments, title and card, and will add the card to the list of
 * questions for the deck with the associated title */
export function addCardToDeck(title, question) {
    return getDecks()
        .then(decks => {
            decks[title].questions.push(question);
            return AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(decks))
        })
}
