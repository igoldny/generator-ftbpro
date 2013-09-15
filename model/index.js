'use strict';
var util = require('util');
var yeoman = require('yeoman-generator');
var fleck = require('fleck');

var ModelGenerator = module.exports = function ModelGenerator(args, options, config) {
  yeoman.generators.NamedBase.apply(this, arguments);
  this.underscored_name = fleck.underscore(this.name);
  this.dasherize_name = fleck.dasherize(this.underscored_name);
  console.log('creating ' + this.name + ' ftbpro model');
};

util.inherits(ModelGenerator, yeoman.generators.NamedBase);

ModelGenerator.prototype.files = function files() {
  this.copy('model.js.coffee', 'singlepage/assets/javascripts/singlepage/model/' + this.underscored_name + '.js.coffee');
};
