import {Platform} from 'react-native';

export const PLATFORM_IOS = 'ios';
export const PLATFORM_ANDROID = 'android';

export const isIos = () => Platform.OS === PLATFORM_IOS;
export const isAndroid = () => Platform.OS === PLATFORM_ANDROID;