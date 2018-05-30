import {AsyncStorage} from 'react-native'
import {STORAGE_KEY} from './constants'

/** return all of the decks along with their titles, questions, and answers */
export function getDecks() {
    return AsyncStorage.getItem(STORAGE_KEY)
        .then(dbJSON => {
            if (!dbJSON) {
                return {}
            }
            // console.log('[utils/storage::getDecks] dbJSON: '+ dbJSON) // DEBUG
            return JSON.parse(dbJSON)
        })
}

/** take in a single id argument and return the deck associated with that id */
export function getDeck(id) {
    return getDecks()
        .then(decks => decks[id])
}

/** take in a single title argument and add it to the decks */
export function saveDeckTitle(title) {
    return AsyncStorage.mergeItem(STORAGE_KEY, JSON.stringify({
        [title]: {
            title,
            questions: []
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
