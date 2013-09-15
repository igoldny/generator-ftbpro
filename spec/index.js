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
  if (this.options.collections) {
    this.copy('spec_model.js.coffee', 'spec/singlepage/models/' + this.underscored_name + '_spec.js.coffee');
    this.copy('spec_collection.js.coffee', 'spec/singlepage/collections/' + this.underscored_name + '_spec.js.coffee');
    return this.copy('spec_view_model_collections.js.coffee', 'spec/singlepage/views/' + this.underscored_name + '_spec.js.coffee');
  }

  if (this.options.model) {
    this.copy('spec_model.js.coffee', 'spec/singlepage/models/' + this.underscored_name + '_spec.js.coffee');
    return this.copy('spec_view_model.js.coffee', 'spec/singlepage/views/' + this.underscored_name + '_spec.js.coffee');
  }

  if (this.options.hash) {
    return this.copy('spec_view_hash.js.coffee', 'spec/singlepage/views/' + this.underscored_name + '_spec.js.coffee');
  }

  this.copy('spec_view.js.coffee', 'spec/singlepage/views/' + this.underscored_name + '_spec.js.coffee');
};
