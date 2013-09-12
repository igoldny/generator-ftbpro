#= require singlepage/templates/_<%= _.underscored(name) %>
#= require singlepage/views/<%= _.underscored(name) %>

describe "<%= name %> View", ->
  before ->
    fixture.set '<div id="test-view"></div>'

    @component =
      name: '<%= name %>'
      el: $('#test-view')
      hash: '<%= name %>'

    @dataStub =
      test: 'test'

    @testView = loadViewForTest @component, @dataStub

  it "should init view", ->
    @testView.should.be.ok

  it "should be equal to test element", ->
    @testView.$el.should.be.equal @component.el

  it "should render template ", ->
    # write render template tests
