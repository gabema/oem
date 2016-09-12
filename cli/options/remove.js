const fs = require("fs");
const pkg = require('../../package');
const chalk = require('chalk');

/**
 * Component Creator
 */
const RemoveComponent = function(componentName) {
    this.fileName = componentName;
    this.componentDir = './src/components/' + this.fileName;
    this.templatesDir = './src/components/' + this.fileName + '/templates';
    this
        .removeDirectory(this.componentDir)
        .removeDirectory(this.templatesDir)
        .updatePackageJson()
        .reply();
};

RemoveComponent.prototype = {

    removeDirectory: function(path) {
        var that = this;
        if (fs.existsSync(path)) {
            fs.readdirSync(path).forEach(function(file, index) {
                var curPath = path + "/" + file;
                if (fs.lstatSync(curPath).isDirectory()) { // recurse
                    that.removeDirectory(curPath);
                } else { // delete file
                    fs.unlinkSync(curPath);
                }
            });
            fs.rmdirSync(path);
        }
        return this;
    },

    updatePackageJson: function() {
        delete pkg.oem.development[this.fileName];
        delete pkg.oem.components[this.fileName];
        fs.writeFileSync('./package.json', JSON.stringify(pkg, null, 4));
        return this;
    },

    reply: function(){
        console.log("");
        console.log("");
        console.log(chalk.bgWhite("       "));
        console.log(chalk.black.bgWhite("  OEM  "), " REMOVE ");
        console.log(chalk.bgWhite("       "));
        console.log("");
        console.log("");
        console.log('Component', chalk.bold(this.fileName), 'has been removed');
        console.log("");
        console.log("");
    }

};

module.exports = {
    RemoveComponent: RemoveComponent
};