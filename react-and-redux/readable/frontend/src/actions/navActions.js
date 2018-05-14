import * as types from "./index";

export const navActiveCategory = (data = '') => {
    return {type: types.NAV_ACTIVE_CATEGORY, data};
};