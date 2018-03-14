"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @author David Zarandi (Azuwey)
 */
var __1 = require("..");
var carnotite_1 = require("carnotite");
var eventId = new Date().getTime().toString();
var StoreHelper = /** @class */ (function () {
    function StoreHelper(_key) {
        this._key = _key;
        this._isFirst = true;
        this._storeManager = __1.StoreManager.getInstance();
        console.log(eventId);
    }
    StoreHelper.prototype.store = function (target, propertyKey) {
        console.log(eventId);
        Object.defineProperty(target, propertyKey, {
            get: this._getter,
            set: this._setter
        });
    };
    StoreHelper.prototype._getter = function () {
        console.log('triggered');
        return JSON.parse(this._storeManager.getValue(this._key));
    };
    StoreHelper.prototype._setter = function (value) {
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
    };
    __decorate([
        carnotite_1.EventDispatcher,
        __metadata("design:type", Object)
    ], StoreHelper.prototype, "_eventDispatcher", void 0);
    __decorate([
        carnotite_1.EventListener(eventId),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Object)
    ], StoreHelper.prototype, "_getter", null);
    return StoreHelper;
}());
exports.StoreHelper = StoreHelper;
//# sourceMappingURL=storeHelper.js.map