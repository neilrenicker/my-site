# Create archives by year
#
# Implementation:
# {% for year in site.years %}                                                                                    
# <h1>Articles written in {{ year.first.date | date: "%Y" }}</h1>
#   {% for post in year %}
#     <article>
#       <h1><a href="{{ post.url }}" title="{{ post.title }}">{{ post.title }}</a></h1>
#     </article>
#   {% endfor %}
# {% endfor %}

class Jekyll::Site
  alias :site_payload_without_yearly_archives :site_payload

  def site_payload
    data = site_payload_without_yearly_archives
    data['site']['years'] = YearlyArchives::find_years(self.posts.reverse)
    data
  end
end

module YearlyArchives

  def self.find_years(posts)
    posts.group_by { |post| post.date.year }.values
  end

end