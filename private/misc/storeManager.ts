/**
 * @author David Zarandi (Azuwey)
 */
import { IStoreManager, StoreUpdate } from '../';

export class StoreManager implements IStoreManager {
	private static _instance: StoreManager;

	private constructor() {
		if (StoreManager._instance) {
			throw new Error('Instantiation failed: Use DatabaseManager.getInstance() instead of new.');
		} else {
			StoreManager._instance = this;
		}
	}

	public static getInstance(): StoreManager {
		if (StoreManager._instance) {
			return StoreManager._instance;
		} else {
			return new StoreManager();
		}
	}

	public setValue(storeParam: StoreUpdate): void {
		localStorage.setItem(storeParam.key,
			JSON.stringify(storeParam.value));
	}

	public getValue(key: string): any {
		let item: string | null = localStorage.getItem(key);
		if (item) {
			return localStorage.getItem(key) || '';
		} else {
			return false;
		}
	}

	public removeValue(key: string): void {
		localStorage.removeItem(key);
	}
}