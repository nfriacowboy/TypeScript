//// [tests/cases/compiler/decoratorMetadataWithImportDeclarationNameCollision.ts] ////

//// [db.ts]
export class db {
    public doSomething() {
    }
}

//// [service.ts]
import {db} from './db';
function someDecorator(target) {
    return target;
}
@someDecorator
class MyClass {
    db: db;

    constructor(db: db) {
        this.db = db;
        this.db.doSomething();
    }
}
export {MyClass};


//// [db.js]
var db = (function () {
    function db() {
    }
    db.prototype.doSomething = function () {
    };
    return db;
})();
exports.db = db;
//// [service.js]
var db_1 = require('./db');
function someDecorator(target) {
    return target;
}
var MyClass = (function () {
    function MyClass(db) {
        this.db = db;
        this.db.doSomething();
    }
    MyClass = __decorate([
        someDecorator, 
        __metadata('design:paramtypes', [db_1.db])
    ], MyClass);
    return MyClass;
})();
exports.MyClass = MyClass;
