---
title: blogs page
layout: blogs
---
<div id="column">
    <ul>
    {% for post in site.categories.beingdigital %}
        <li>
        <a href="{{ post.url }}">{{ post.title }}</a>
        </li>
        <!-- <p>
        {{post.content}}
        </p> -->
    {% endfor %}
    </ul>
</div>
<div id="column">
    <ul>
    {% for post in site.categories.skeuomorph %}
        <li>
        <a href="{{ post.url }}">{{ post.title }}</a>
        </li>
        <p>
        <!-- {{post.content}} -->
        </p>
    {% endfor %}
    </ul>
</div>
<div id="column">
    <ul>
    {% for post in site.categories.programming %}
        <li>
        <a href="{{ post.url }}">{{ post.title }}</a>
        </li>
        <p>
        <!-- {{post.content}} -->
        </p>
    {% endfor %}
    </ul>
</div>