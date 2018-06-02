import * as T from './actionNames';

export const loadDecksSuccess = data => ({
    type: T.LOAD_DECKS_SUCCESS, data
});

export const createDeckSuccess = data => ({
    type: T.CREATE_DECK_SUCCESS, data
});

export const updateDeckSuccess = data => ({
    type: T.UPDATE_DECK_SUCCESS, data
});

export const deleteDeckSuccess = data => ({
    type: T.DELETE_DECK_SUCCESS, data
});

export const createNewDeck = data => ({ type: T.CREATE_NEW_DECK, data});

export const loadDecks = decks => ({type: T.LOAD_DECKS, decks});


export const UPDATE_DECK = 'UPDATE_DECK';

export function updateDeck(deck) {
    return {
        type: UPDATE_DECK,
        updatedDeck: {
            [deck.key]: deck
        }
    }
}