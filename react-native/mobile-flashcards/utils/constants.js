import {StyleSheet} from 'react-native'

export const STORAGE_KEY = 'com.theforce:mobile-flashcards:storage';
export const NOTIFICATION_KEY = 'com.theforce:mobile-flashcards:notification';

// https://coolors.co/083d77-ebebd3-f4d35e-ee964b-f95738

export const lightBlue = '#1d4992';
export const darkBlue = '#083d77';
export const deepGreen = '#01641d';
export const eggShell = '#ebebd3';
export const yellow = '#f4d35e';
export const orange = '#f95738';
export const softRed = '#e0413b';
export const pink = '#ff084a';

// other colors
export const white = '#ffffff';
export const blackLicorice = '#212121';
export const black = '#000000';

// styles
export const appStyles = StyleSheet.create({
    container: {
        alignItems: 'stretch',
        justifyContent: 'space-around',
        marginLeft: 10,
        marginRight: 10,
    },
    padItem: {
        marginTop: 10,
        marginBottom: 10,
    },
    header: {
        fontSize: 20,
        fontWeight: '600',
        textAlign: 'center',
    },
    input: {
        paddingLeft: 10,
        paddingRight: 10,
        paddingTop: 10,
        paddingBottom: 10,
    },
});
