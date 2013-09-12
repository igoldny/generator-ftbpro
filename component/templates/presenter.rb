class <%= name %>Presenter < ApplicationPresenter
  private

  def cached_data
    <%= _.underscored(name) %>: '<%= _.underscored(name) %>'
  end

  def redis_key
    "<%= _.underscored(name) %>"
  end

  def redis_ttl
    1.hour
  end
end
