---
title: "being digital"
name: beingdigital
# sidebar: toc
---

<ul>
  {% for post in site.categories.name %}
    <li>
      <a href="{{ post.url }}">{{ post.title }}</a>
    </li>
    <p>
    {{post.content}}
    </p>
  {% endfor %}
</ul>