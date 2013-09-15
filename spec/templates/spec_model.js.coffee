#= require singlepage/model/<%= underscored_name %>

describe "<%= name %> Model", ->
  before ->
    @modelData =
      foo: 'bar'

    @testModel = new FTBPro.Models.<%= name %>(@modelData)

  it "should init model", ->
    @testModel.should.be.ok

  it "should have data", ->
