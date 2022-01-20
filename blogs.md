---
title: blogs page
layout: blogs
---
<div id="column">
    <h1>being digital</h1>
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
    <h1>skeuomorph</h1>
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
    <h1>programming</h1>
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