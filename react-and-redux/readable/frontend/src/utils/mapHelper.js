export const mapNavCategory =  (stateCategory) => {
    const navCategory = stateCategory.map(i => i);
    navCategory.unshift({name:'all', path: ''});
    return navCategory;
};