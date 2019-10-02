---
layout: page
title: About
permalink: /about/
weight: 3
---

# **About Me**
<link rel="manifest" href="/manifest.json">
Hi I am **{{ site.author.name }}**,<br>
A 20-year-old Graphic designer currently pursuing B.Tech (Chemical engineering) in National Institute of Technology, Calicut. I started using Photoshop at the age of 14. As a design enthusiast, I have good experience in working with many kinds of graphic designing software and have experience designing a logo to motion graphics. I also love writing script for short film as well as direction. 

<p class="text-center">
{% include elements/button.html link="http://drive.google.com/uc?export=view&id=1xTUQS3q5q7NwCZHlPheGKwnOlpT6FvEv" text="Download CV" size="lg" style="success" %} {% include elements/button.html link="mailto:vyshnav003@gmail.com" text="Hire Me" size="lg" style="outline-success" %}
<p>

<div class="row">
{% include about/skills.html title="Software Skills" source=site.data.software-skills %}
{% include about/skills.html title="Other Skills" source=site.data.other-skills %}
{% include about/skills.html title="Programming Skills" source=site.data.programming-skills %}


</div>

<p class="text-center">
{% include elements/button.html link="" text="WORK EXPERIENCE" style="danger" %}
</p>

<div class="row">
{% include about/edu-time.html %}
</div>

<p class="text-center">
{% include elements/button.html link="" text="EDUCATION" style="danger" %}
</p>

<div class="row">
{% include about/timeline.html %}
</div>