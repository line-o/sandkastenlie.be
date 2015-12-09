---
layout: default
title: "Documentation"
script: "/js/injected.js"
examples: [
    ["19e899bbed1d6aed4bc5", "BarbNerdy - Riders on the Storm - @CCCamp15, DJ Mix"],
    ["532cf0c77963e38f3774", "Zeit für Wissenschaft, Podcast"],
    ["9a9cfbd00092c7db6760", "ThoughtWorks Interview, Podcast"]
]
---

<div class="jumbotron">
  <h1>Sandbox Love</h1>
  <h2>
     Interactive playground
  </h2>
  <p>Try out possible applications of Podlove Web Player 3.0</p>
  <p style="line-height: 1.75em">
    <a class="btn btn-primary" href="http://sandkastenlie.be/playground.html" title="Read the Podlove Web Player Documentation">Documentation</a>
    <a class="btn btn-primary" href="https://github.com/podlove/podlove-web-player" title="Go to Web Player Github Site">GitHub</a>
    <a class="btn btn-primary" href="http://sourcerer.org/blog" title="Go to Web Player Wordpress Demo">WordPress Example</a>
    <a class="btn btn-primary" href="http://podlove.org/podlove-web-player/" title="Main project page podlove.org">Project Site</a>
  </p>

</div>
<h3>Examples</h3>
<ul>{% for ex in page.examples %}<li><a href="playground.html?gist={{ex[0]}}">{{ex[1]}}</a></li>{% endfor %}</ul>
