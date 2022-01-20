---
title: programming
layout: blogs
---

<ul>
  {% for post in site.posts %}
    <li>
      <a href="/thehelloworldproject{{ post.url }}">{{ post.title }}</a>
    </li>
  {% endfor %}
</ul>