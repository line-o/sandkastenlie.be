---
layout: default
title: "Documentation"
script: "/js/injected.js"
examples: [
    ["532cf0c77963e38f3774", "Zeit für Wissenschaft"],
    ["9a9cfbd00092c7db6760", "ThoughtWorks Interview"]
]
---

<div class="jumbotron">
    <h1>Sandbox Love</h1>
    <h2>
       Playground to visualize different user scenarios use cases of the [Podlove Web Player](http://podlove.org).
    </h2>
</div>
<h3>Examples</h3>
<ul>{% for ex in page.examples %}<li><a href="200.html?gist={{ex[0]}}">{{ex[1]}}</a></li>{% endfor %}</ul>
