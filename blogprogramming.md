---
title: "programming"
# sidebar: toc
---

<ul>
  {% for post in site.categories.programming %}
    <li>
      <a href="{{ post.url }}">{{ post.title }}</a>
    </li>
    <p>
    {{post.content}}
    </p>
  {% endfor %}
</ul>