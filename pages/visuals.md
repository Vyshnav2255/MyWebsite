---
title: Visual Ideas
layout: default
permalink: /visuals
image: /assets/card.png
description: What I’m doing now
---

<div class="post-grid m-3 mt-5">
  {% for item in site.data.visuals %}

    {% if visuals.external_url %}
      {% assign visuals_url = visuals.external_url %}
    {% else %}
      {% assign visuals_url = visuals.url | relative_url %}
    {% endif %}

    <div class="post-grid-item">
    <a title="{{ item.name }}" target="_blank" rel="noopener" href="{{ item.url }}" class="project card text-dark">
        {% if item.image %}
            <img id="{{ item.image }}-img" class="card-img-top" src="{{ item.image }}" alt="{{ item.name }}" />
        {% endif %}
    </a>
    </div>

  {% endfor %}

</div>