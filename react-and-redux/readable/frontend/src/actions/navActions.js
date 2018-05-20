import * as T from './actionNames';

export const navActiveCategory = (data = '') => {
    return {type: T.NAV_ACTIVE_CATEGORY, data};
};