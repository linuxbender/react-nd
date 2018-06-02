if (!Array.prototype.firstOrDefault) {
    Array.prototype.firstOrDefault = function(defaultType = {}) {
        return this && this.length > 0 ? this[0] : defaultType;
    }
}

if (!Array.prototype.filterByKey) {
    Array.prototype.filterByKey = function(key = '') {
        return this.filter(item => item.key === key) || [];
    }
}