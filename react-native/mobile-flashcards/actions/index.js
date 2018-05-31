import {uuid} from '../utils/numberHelper';

export const LOAD_DECKS = 'LOAD_DECKS';
export const UPDATE_DECK = 'UPDATE_DECK';

export function loadDecks(decks) {
    return ({
        type: LOAD_DECKS,
        decks,
    })
}

export function updateDeck(deck) {
    return {
        type: UPDATE_DECK,
        updatedDeck: {
            [deck.title]: deck
        }
    }
}

export function createDeck(deckName) {
    const newDeck = {
        id: uuid(),
        key: uuid(),
        title: deckName,
        questions: [],
    };

    return updateDeck(newDeck)
}
