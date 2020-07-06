exports.Module = class Module {
    constructor() {
        this.modName = this.constructor.name;
        this.init();
    }

    final() {
        this.log('Event', 'Finalized the module.');
    }

    init() {
        this.log('Event', 'Initialized the module.');
    }

    log(type, message) {
        console.log(type + ' | ' + this.modName + '\t| ' + message)
    }
}
