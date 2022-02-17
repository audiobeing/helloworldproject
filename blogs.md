---
title: blogs page
# layout: blogs
---
<div style = "flex= 1 grow;
   align-self= center; ">
    <h2>being digital</h2>
    <ul>
    {% for post in site.categories.beingdigital %}
        <li>
        <a href="{{site.baseurl}}{{ post.url }}">{{ post.title }}</a>
        </li>
        <!-- <p>
        {{post.content}}
        </p> -->
    {% endfor %}
    </ul>
</div>
<div >
    <h2>skeuomorph</h2>
    <ul>
    {% for post in site.categories.skeuomorph %}
        <li>
        <a href="{{site.baseurl}}{{ post.url }}">{{ post.title }}</a>
        </li>
        <p>
        <!-- {{post.content}} -->
        </p>
    {% endfor %}
    </ul>
</div>
<div >
    <h2>L_ab_o</h2>
    <ul>
    {% for post in site.categories.programming %}
        <li>
        <a href="{{site.baseurl}}{{ post.url }}">{{ post.title }}</a>
        </li>
        <p>
        <!-- {{post.content}} -->
        </p>
    {% endfor %}
    </ul>
</div>