"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @author David Zarandi (Azuwey)
 */
var __1 = require("..");
/*var _storeManager: StoreManager;
var _key: string;
var _isFirst: boolean = true;

export function Stores(key: string) {
    return (
        target: Object,
        propertyKey: string
    ) => {
        (typeof localStorage != 'undefined') && (() => {
            _key = key;
            _storeManager = StoreManager.getInstance();
            Object.defineProperty(target, propertyKey, {
                get: _getter,
                set: _setter
            });
        })();
    }
}

const _getter = (): any => {
    return JSON.parse(_storeManager.getValue(_key));
}

const _setter = (value: any) => {
    if (_isFirst) {
        _isFirst = false;
        if (!_storeManager.getValue(_key)) {
            var update = { key: _key, value: value };
            _storeManager.setValue(update);
        }
    }
    else {
        var update = { key: _key, value: value };
        _storeManager.setValue(update);
    }
    return _getter();
}*/
function Store(key) {
    return function (target, propertyKey) {
        (typeof localStorage != 'undefined') && (function () {
            var _storeHelper = new __1.StoreHelper(key);
            _storeHelper.store(target, propertyKey);
        })();
    };
}
exports.Store = Store;
//# sourceMappingURL=store.decorator.js.map