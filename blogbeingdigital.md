---
title: "being digital"
# sidebar: toc
---

<ul>
  {% for post in site.categories.beingdigital %}
    <li>
      <a href="{{ post.url }}">{{ post.title }}</a>
    </li>
    <p>
    {{post.content}}
    </p>
  {% endfor %}
</ul>