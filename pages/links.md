---
layout: page
permalink: /links/
description: Latest post links
---
<h1 style="text-align:center;">🎋Links</h1>

##### Latest Blog Posts
<ul>
{% assign lblog = site.blogs | sort: 'end_date' | reverse %}
  {% for blog in lblog limit:5 %}
    <a href="{{ blog.url }}"><li>{{ blog.title }}</li></a>
    <small class="text-muted"> - {{ blog.date | date_to_long_string }}</small>
    <br/>
  {% endfor %}
</ul>

##### Latest Microblog Posts
<ul>
{% assign lmicro = site.microblogs | sort: 'end_date' | reverse %}
  {% for microblog in lmicro limit:2 %}
    <a href="{{ microblog.url }}"><li>{{ microblog.title }}</li></a>
    <small class="text-muted"> - {{ microblog.date | date_to_long_string }}</small>
    <br/>
  {% endfor %}
</ul>

##### Latest Book Notes
<ul>
{% assign lbook = site.books | sort: 'end_date' | reverse %}
  {% for book in lbook limit:2 %}
    <a href="{{ book.url }}"><li>{{ book.title }}</li></a>
    <small class="text-muted"> - {{ book.date | date_to_long_string }}</small>
    <br/>
  {% endfor %}
</ul>

##### Permalinks

- [☕ Buy me a Coffee](https://www.buymeacoffee.com/vyshnav)
- [✍🏻 Blog](/blog/)