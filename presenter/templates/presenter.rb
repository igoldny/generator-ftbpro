class <%= name %>Presenter < ApplicationPresenter
  private

  def cached_data
    <%= underscored_name %>: '<%= underscored_name %>'
  end

  def redis_key
    "<%= underscored_name %>"
  end

  def redis_ttl
    1.hour
  end
end
