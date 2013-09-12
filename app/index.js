'use strict';
var util = require('util');
var path = require('path');
var yeoman = require('yeoman-generator');


var FtbproGenerator = module.exports = function FtbproGenerator(args, options, config) {
  yeoman.generators.Base.apply(this, arguments);
};

util.inherits(FtbproGenerator, yeoman.generators.Base);

FtbproGenerator.prototype.askFor = function askFor() {
  var cb = this.async();
  console.log(this.yeoman); // have Yeoman greet the user.

  var prompts = [{
    type: 'confirm',
    name: 'someOption',
    message: 'Would you like to enable ftbpro generator?',
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
