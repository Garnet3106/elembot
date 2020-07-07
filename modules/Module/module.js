const fs = require('fs');



exports.MainClass = class Module {
    constructor() {
        this.moduleName = this.constructor.name;
        this.init();
    }

    fillSpaces(text, sumLen) {
        let leftSideLen = Math.floor((sumLen - text.length) / 2);
        let rightSideLen = sumLen - text.length - leftSideLen;

        if(leftSideLen <= 0 || rightSideLen <= 0) {
            return ' ' + text + ' ';
        } else {
            return ' '.repeat(leftSideLen) + text + ' '.repeat(rightSideLen);
        }
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
        let typeWithSpaces = this.fillSpaces(type, 10);
        let modNameWithSpaces = this.fillSpaces(this.moduleName, 15);

        console.log(typeWithSpaces + '|' + modNameWithSpaces + '|   ' + message)
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
