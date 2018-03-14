/**
 * @author David Zarandi (Azuwey)
 */
import { StoreUpdate } from '..';

export interface IStoreManager {
	setValue(storeParam: StoreUpdate): void;
	getValue(key: string): any;
	removeValue(key: string): void;
}