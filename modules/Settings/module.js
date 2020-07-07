const fs = require('fs');

const Module = require('../Module/module.js').MainClass;



exports.MainClass = class Settings extends Module {
    final() {
        this.log('Event', 'Finalized the module.');
    }

    init() {
        this.load();
    }

    load() {
        let filePath = './modules/Settings/settings.json';

        try {
            fs.statSync(filePath);
        } catch(excep) {
            fs.writeFileSync(filePath, JSON.stringify({}));
            this.log('Event', 'Created setting file.');
        }

        this.data = JSON.parse(fs.readFileSync(filePath, 'utf-8'));
        this.log('Event', 'Loaded setting file.');
    }
}
