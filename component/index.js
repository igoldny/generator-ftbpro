'use strict';
var util = require('util');
var yeoman = require('yeoman-generator');
var fleck = require('fleck');

var ComponentGenerator = module.exports = function ComponentGenerator(args, options, config) {
  yeoman.generators.NamedBase.apply(this, arguments);
  this.pluralized_name = fleck.pluralize(this.name);
  this.slugified_name = this._.slugify(this.name);
  this.underscored_name = fleck.underscore(this.name);
  console.log('creating ' + this.name + ' ftbpro component');
};

util.inherits(ComponentGenerator, yeoman.generators.NamedBase);

ComponentGenerator.prototype.files = function files() {
  this.copy('presenter.rb', 'app/presenters/' + this.underscored_name + '_presenter.rb');
  this.copy('view.js.coffee', 'singlepage/assets/javascripts/singlepage/views/' + this.underscored_name + '.js.coffee');
  this.copy('template.jst.jade', 'singlepage/assets/javascripts/singlepage/templates/' + this.underscored_name + '.jst.jade');
  this.copy('stylesheets.css.scss', 'singlepage/assets/stylesheets/singlepage/views/' + this.underscored_name + '.css.scss');
  this.copy('spec.js.coffee', 'spec/singlepage/views/' + this.underscored_name + '.js.coffee');
};
