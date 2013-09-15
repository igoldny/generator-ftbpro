'use strict';
var util = require('util');
var yeoman = require('yeoman-generator');
var fleck = require('fleck');

var PresenterGenerator = module.exports = function PresenterGenerator(args, options, config) {
  yeoman.generators.NamedBase.apply(this, arguments);
  this.underscored_name = fleck.underscore(this.name);
  this.dasherize_name = fleck.dasherize(this.underscored_name);
  console.log('creating ' + this.name + ' ftbpro presenter');
};

util.inherits(PresenterGenerator, yeoman.generators.NamedBase);

PresenterGenerator.prototype.files = function files() {
  this.copy('presenter.rb', 'app/presenters/' + this.underscored_name + '_presenter.rb');
};
