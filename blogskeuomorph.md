---
title: "skeuomorph"
# sidebar: toc 
# whats toc
---

<ul>
  {% for post in site.categories.skeuomorph %}
    <li>
      <a href="{{ post.url }}">{{ post.title }}</a>
    </li>
    <p>
    {{post.content}}
    </p>
  {% endfor %}
</ul>