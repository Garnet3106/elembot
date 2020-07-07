const fs = require('fs');

const Module = require('../Module/module.js').MainClass;



exports.MainClass = class Module {
    constructor() {
        this.moduleName = this.constructor.name;
        this.init();
    }

    final() {}

    static getModuleNames() {
        return fs.readdirSync('./modules/');
    }

    init() {}

    launchBOT() {
        this.loadModules();
    }

    loadModules() {
        this.modules = {};
        let modNames = Module.getModuleNames();

        modNames.forEach(name => {
            let mod = require('../' + name + '/module.js');

            if(name == this.moduleName)
                return;

            let obj = new mod.MainClass();
            obj.log('Event', 'Initialized the module.');
            this.modules[name] = obj;
        });

        this.log('Event', 'Completed loading all modules.')
        this.unloadModules();
    }

    log(type, message) {
        let typeSpaces = ' ';
        let nameSpaces = ' ';

        while(typeSpaces.length + type.length < 10)
            typeSpaces += ' ';

        while(nameSpaces.length + this.moduleName.length < 15)
            nameSpaces += ' ';

        console.log(type + typeSpaces + '| ' + this.moduleName + nameSpaces + '| ' + message)
    }

    unloadModules() {
        if(this.modules == undefined)
            return;

        Object.keys(this.modules).forEach(key => {
            let obj = this.modules[key];
            obj.final();
            obj.log('Event', 'Finalized the module.');
        });
    }
}
