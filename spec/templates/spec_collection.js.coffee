#= require singlepage/model/<%= underscored_name %>
#= require singlepage/collections/<%= underscored_name %>

describe "<%= name %> Collection", ->
  before ->
    @collectionData =
      [
        foo: 'bar'
      ,
        foo: 'bar'
      ]

    @testCollection = new FTBPro.Collections.<%= name %>(@collectionData)

  it "should init collection", ->
    @testCollection.should.be.ok

  it "should have data", ->
