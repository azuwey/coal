/**
 * @author David Zarandi (Azuwey)
 */
import { StoreManager } from '..';
import { EventDispatcher, EventListener, IEventDispatcher } from 'carnotite';

const eventId = new Date().getTime().toString();

export class StoreHelper {
	@EventDispatcher
	private _eventDispatcher!: IEventDispatcher;
	private _storeManager: StoreManager;
	private _isFirst: boolean = true;

	constructor(private _key: string) {
		this._storeManager = StoreManager.getInstance();
		console.log(eventId);
	}

	public store(
		target: Object,
		propertyKey: string
	): void {
		console.log(eventId);
		Object.defineProperty(target, propertyKey, {
			get: this._getter,
			set: this._setter
		});
	}

	@EventListener(eventId)
	private _getter(): any {
		console.log('triggered');
		return JSON.parse(this._storeManager.getValue(this._key));
	}

	private _setter(value: any): void {
		if (this._isFirst) {
			this._isFirst = false;
			if (!this._storeManager.getValue(this._key)) {
				var update = { key: this._key, value: value };
				this._storeManager.setValue(update);
				this._eventDispatcher.emit(eventId);
			}
		}
		else {
			var update = { key: this._key, value: value };
			this._storeManager.setValue(update);
			this._eventDispatcher.emit(eventId);
		}
		console.log(eventId);
	}
}