---
layout: page
title: About
permalink: /about/
weight: 6
description: Hi I am Vyshnav Gangadharan 👋
---

# About Me
Hi I am **{{ site.author.name }}** 👋,
A 21-year-old Graphic designer, currently pursuing B.Tech (Chemical engineering) from National Institute of Technology, Calicut. As a design enthusiast, I have good experience working with many kinds of graphic designing software and have experience designing a logo to motion graphics. I also love writing scripts for short films as well as direction.

<p class="text-center">
{% include elements/iconbtn.html link="mailto:hi@vyshnav.xyz?subject=Resume" text="Resume" icon="far fa-file-pdf" %}
{% include elements/iconbtn.html link="mailto:hi@vyshnav.xyz" text="Contact me" icon="far fa-envelope" %}
{% include elements/iconbtn.html link="https://www.buymeacoffee.com/vyshnav" text="Support" icon="fas fa-hand-holding-usd" %}
</p>

<div>
{% include about/books.html %}
</div>

<div class="about-sec-h">
    🖥️ Programs
</div>

<div>
{% include about/programs.html %}
</div>

<div class="about-sec-h">
    💻 Programming Skills
</div>

<div>
{% include about/programming-skills.html %}
</div>

<div class="about-sec-h">
    🎥 Other Skills
</div>

<div>
{% include about/other-skills.html %}
</div>

<div class="about-sec-h">
    💼 Work Experience
</div>

<div class="row">
    {% include about/edu-time.html %}
</div>
                    
<div class="about-sec-h">
    🎓 Education
</div>
                    
<div class="row">
    {% include about/timeline.html %}
</div>