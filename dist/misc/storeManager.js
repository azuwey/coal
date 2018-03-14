"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var StoreManager = /** @class */ (function () {
    function StoreManager() {
        if (StoreManager._instance) {
            throw new Error('Instantiation failed: Use DatabaseManager.getInstance() instead of new.');
        }
        else {
            StoreManager._instance = this;
        }
    }
    StoreManager.getInstance = function () {
        if (StoreManager._instance) {
            return StoreManager._instance;
        }
        else {
            return new StoreManager();
        }
    };
    StoreManager.prototype.setValue = function (storeParam) {
        localStorage.setItem(storeParam.key, JSON.stringify(storeParam.value));
    };
    StoreManager.prototype.getValue = function (key) {
        var item = localStorage.getItem(key);
        if (item) {
            return localStorage.getItem(key) || '';
        }
        else {
            return false;
        }
    };
    StoreManager.prototype.removeValue = function (key) {
        localStorage.removeItem(key);
    };
    return StoreManager;
}());
exports.StoreManager = StoreManager;
//# sourceMappingURL=storeManager.js.map