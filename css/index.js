'use strict';
var util = require('util');
var yeoman = require('yeoman-generator');
var fleck = require('fleck');

var CssGenerator = module.exports = function CssGenerator(args, options, config) {
  yeoman.generators.NamedBase.apply(this, arguments);
  this.underscored_name = fleck.underscore(this.name);
  this.dasherize_name = fleck.dasherize(this.underscored_name);
  console.log('creating ' + this.name + ' ftbpro css');
};

util.inherits(CssGenerator, yeoman.generators.NamedBase);

CssGenerator.prototype.files = function files() {
  this.copy('stylesheets.css.scss', 'singlepage/assets/stylesheets/singlepage/views/' + this.dasherize_name + '.css.scss');
};
