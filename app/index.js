'use strict';
var util = require('util');
var path = require('path');
var yeoman = require('yeoman-generator');


var FtbproGenerator = module.exports = function FtbproGenerator(args, options, config) {
  yeoman.generators.Base.apply(this, arguments);

  this.on('end', function () {
    this.installDependencies({ skipInstall: options['skip-install'] });
  });

  this.pkg = JSON.parse(this.readFileAsString(path.join(__dirname, '../package.json')));
};

util.inherits(FtbproGenerator, yeoman.generators.Base);

FtbproGenerator.prototype.askFor = function askFor() {
  var cb = this.async();

  // have Yeoman greet the user.
  console.log(this.yeoman);

  var prompts = [{
    type: 'confirm',
    name: 'someOption',
    message: 'Would you like to enable this option?',
    default: true
  }];

  this.prompt(prompts, function (props) {
    this.someOption = props.someOption;

    cb();
  }.bind(this));
};

FtbproGenerator.prototype.app = function app() {

};

FtbproGenerator.prototype.projectfiles = function projectfiles() {

};
