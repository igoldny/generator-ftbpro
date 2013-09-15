'use strict';
var util = require('util');
var yeoman = require('yeoman-generator');
var fleck = require('fleck');

var TemplateGenerator = module.exports = function TemplateGenerator(args, options, config) {
  yeoman.generators.NamedBase.apply(this, arguments);
  this.underscored_name = fleck.underscore(this.name);
  this.dasherize_name = fleck.dasherize(this.underscored_name);
  console.log('creating ' + this.name + ' ftbpro template');
};

util.inherits(TemplateGenerator, yeoman.generators.NamedBase);

TemplateGenerator.prototype.files = function files() {
  if (this.options.base) {
    this.copy('template.jst.jade', 'singlepage/assets/javascripts/singlepage/templates/_base_' + this.underscored_name + '.jst.jade');
  }

  this.copy('template.jst.jade', 'singlepage/assets/javascripts/singlepage/templates/_' + this.underscored_name + '.jst.jade');
};
