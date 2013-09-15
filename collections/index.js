'use strict';
var util = require('util');
var yeoman = require('yeoman-generator');
var fleck = require('fleck');

var CollectionsGenerator = module.exports = function CollectionsGenerator(args, options, config) {
  yeoman.generators.NamedBase.apply(this, arguments);
  this.underscored_name = fleck.underscore(this.name);
  this.dasherize_name = fleck.dasherize(this.underscored_name);
  console.log('creating ' + this.name + ' ftbpro collections');
};

util.inherits(CollectionsGenerator, yeoman.generators.NamedBase);

CollectionsGenerator.prototype.files = function files() {
  this.copy('collections.js.coffee', 'singlepage/assets/javascripts/singlepage/collections/' + this.underscored_name + '.js.coffee');
};
