export const SHOW_UI_LOADER = 'SHOW_UI_LOADER';
export const HIDE_UI_LOADER = 'HIDE_UI_LOADER';

export const showUiLoader = () => ({type: SHOW_UI_LOADER, data: true });
export const hideUiLoader = () => ({type: HIDE_UI_LOADER, data: false });