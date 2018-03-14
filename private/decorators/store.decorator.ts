/**
 * @author David Zarandi (Azuwey)
 */
import { StoreHelper } from '..';

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

export function Store(key: string) {
	return (
		target: Object,
		propertyKey: string
	) => {
		(typeof localStorage != 'undefined') && (() => {
			let _storeHelper = new StoreHelper(key);
			_storeHelper.store(target, propertyKey);
		})();
	}
}