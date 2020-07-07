const fs = require('fs');

const Module = require('../Module/module.js').MainClass;



exports.MainClass = class Module {
    constructor() {
        this.moduleName = this.constructor.name;
        this.init();
    }

    final() {
        this.log('Event', 'Finalized the module.');
    }

    static getModuleNames() {
        return fs.readdirSync('./modules/');
    }

    init() {
        this.load();
        this.log('Event', 'Initialized the module.');
    }

    load() {
        this.modules = {};
        let modNames = Module.getModuleNames();

        modNames.forEach(name => {
            let mod = require('../' + name + '/module.js');

            if(name == this.moduleName)
                return;

            this.modules[name] = new mod.MainClass();
        });

        this.log('Event', 'Loaded all modules.')
    }

    log(type, message) {
        console.log(type + ' | ' + this.moduleName + '\t| ' + message)
    }
}
