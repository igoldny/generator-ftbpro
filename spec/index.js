'use strict';
var util = require('util');
var yeoman = require('yeoman-generator');
var fleck = require('fleck');

var SpecGenerator = module.exports = function SpecGenerator(args, options, config) {
  yeoman.generators.NamedBase.apply(this, arguments);
  this.underscored_name = fleck.underscore(this.name);
  this.dasherize_name = fleck.dasherize(this.underscored_name);
  console.log('creating ' + this.name + ' ftbpro spec');
};

util.inherits(SpecGenerator, yeoman.generators.NamedBase);

SpecGenerator.prototype.files = function files() {
  this.dependency = [
    '#= require singlepage/templates/_' + this.underscored_name,
    '#= require singlepage/views/' + this.underscored_name
  ];

  if (this.options.base) {
    this.dependency.unshift('#= require singlepage/templates/_base_' + this.underscored_name);
  }

  if (this.options.collections) {
    this.dependency.push('#= require singlepage/model/' + this.underscored_name);
    this.dependency.push('#= require singlepage/collections/' + this.underscored_name);
  }

  if (this.options.model) {
    this.dependency.push('#= require singlepage/model/' + this.underscored_name);
  }

  this.dependency = this.dependency.join('\n');

  if (this.options.collections) {
    this.copy('spec_model.js.coffee', 'spec/javascripts/singlepage/models/' + this.underscored_name + '_spec.js.coffee');
    this.copy('spec_collection.js.coffee', 'spec/javascripts/singlepage/collections/' + this.underscored_name + '_spec.js.coffee');
    return this.copy('spec_view_with_data.js.coffee', 'spec/javascripts/singlepage/views/' + this.underscored_name + '_spec.js.coffee');
  }

  if (this.options.model) {
    this.copy('spec_model.js.coffee', 'spec/javascripts/singlepage/models/' + this.underscored_name + '_spec.js.coffee');
    return this.copy('spec_view_with_data.js.coffee', 'spec/javascripts/singlepage/views/' + this.underscored_name + '_spec.js.coffee');
  }

  if (this.options.hash) {
    return this.copy('spec_view_with_data.js.coffee', 'spec/javascripts/singlepage/views/' + this.underscored_name + '_spec.js.coffee');
  }

  this.copy('spec_view.js.coffee', 'spec/javascripts/singlepage/views/' + this.underscored_name + '_spec.js.coffee');
};
