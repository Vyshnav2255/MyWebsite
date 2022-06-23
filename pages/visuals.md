---
title: Visuals
layout: default
permalink: /visuals
image: /assets/card.png
description: All my visuals in one place
weight: 4
---

<div class="post-grid m-3 mt-5">
  {% for item in site.data.visuals %}
    <div class="post-grid-item">
      <a title="{{ item.name }}" target="_blank" rel="noopener" href="{{ item.url }}" class="project card text-dark">
        <img id="{{ item.image }}-img" class="card-img-top" src="{{ item.image }}" alt="{{ item.name }}" loading="lazy"/>
      </a>
    </div>
  {% endfor %}
</div>