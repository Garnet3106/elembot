const fs = require('fs');

const Module = require('../Module/module.js').MainClass;



exports.MainClass = class Settings extends Module {
    final() {
        this.log('Event', 'Finalized the module.');
    }

    init() {
        this.log('Event', 'Started initializing the module.');

        this.load();

        this.log('Event', 'Initialized the module.');
    }

    load() {
        this.data = [];

        let moduleNames = Module.getModuleNames();

        moduleNames.forEach(name => {
            let filePath = './modules/' + name + '/settings.json';

            try {
                fs.statSync(filePath);
            } catch(excep) {
                fs.writeFileSync(filePath, JSON.stringify({}));
                this.log('Event', 'Created setting file for module: ' + name)
            }

            this.data[name] = JSON.parse(fs.readFileSync(filePath, 'utf-8'));
            this.log('Event', 'Loaded setting file for module: ' + name)
        });
    }
}
