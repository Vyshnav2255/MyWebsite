---
layout: page
title: About
permalink: /about/
weight: 6
image: /assets/card.png
description: Hi I’m Vyshnav Gangadharan 👋, a 23-year-old UI/UX Designer, Illustrator & Developer. I’m a self-taught UI/UX designer who loves Coding, Illustrating & creating 3D stuff
---

# About Me
Hi👋, Nice to meet you😊
<br>I’m **{{ site.author.name }}**, a 23-year-old UI/UX Designer, Illustrator & Developer. I’m a self-taught UI/UX designer who loves Coding, Illustrating & creating 3D stuff.

I currently live in Kerala🌴, India. I enjoy reading books📗 and listening to podcasts🎙️. I love creating creative content✨, and you can find most of my works here. See what I’m doing [now](/now).

<p class="text-center" style="margin-bottom: 2rem; margin-top: 2rem;">
{% include elements/button.html link="mailto:hi@vyshnav.xyz" text="Say hello!" icon="chat" %}
{% include elements/button.html link="https://www.buymeacoffee.com/vyshnav" text="Buy Me a Coffee" icon="coffee" %}
</p>

<div class="about-sec-h text-mute">Software Skills</div>

<div>
{% include about/software-skills.html %}
</div>

<div class="about-sec-h text-mute">Design Skills</div>

<div>
{% include about/design-skills.html %}
</div>

<div class="about-sec-h text-mute">Coding Skills</div>

<div>
{% include about/coding-skills.html %}
</div>

<div class="about-sec-h text-mute">Work Experience</div>
<div class="row">
    {% include about/work-timeline.html %}
</div>

<div class="about-sec-h text-mute">Education</div>
<div class="row">
    {% include about/edu-timeline.html %}
</div>