export declare class StoreHelper {
    private _key;
    private _eventDispatcher;
    private _storeManager;
    private _isFirst;
    constructor(_key: string);
    store(target: Object, propertyKey: string): void;
    private _getter();
    private _setter(value);
}
