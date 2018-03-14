/**
 * @author David Zarandi (Azuwey)
 */
import { IStoreManager, StoreUpdate } from '../';
export declare class StoreManager implements IStoreManager {
    private static _instance;
    private constructor();
    static getInstance(): StoreManager;
    setValue(storeParam: StoreUpdate): void;
    getValue(key: string): any;
    removeValue(key: string): void;
}
