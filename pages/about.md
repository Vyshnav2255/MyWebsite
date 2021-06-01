---
layout: page
title: About
permalink: /about/
weight: 6
description: Hi I am Vyshnav Gangadharan 👋
---

# About Me
Hi I am **{{ site.author.name }}** 👋,
A 21-year-old Graphics & UI/UX designer currently pursuing 🎓B.Tech (Chemical engineering) from National Institute of Technology, Calicut. I'm a self-taught Graphics designer, UI/UX designer, Video Editor, Coder & Film Maker.
I currently live in Kerala🌴, India. I enjoy reading books📗 and listing to podcasts🎙️. I love creating creative content✨, and you can find most of my works here.

<p class="text-center">
{% include elements/iconbtn.html link="mailto:hi@vyshnav.xyz?subject=Resume" text="Resume" icon="icon-file-pdf" %}
{% include elements/iconbtn.html link="mailto:hi@vyshnav.xyz" text="Contact me" icon="icon-mail" %}
{% include elements/iconbtn.html link="https://www.buymeacoffee.com/vyshnav" text="Support" icon="icon-coffee" %}
</p>

<div class="mb-5">
{% include about/books.html %}
</div>

<hr>

<div class="about-sec-h text-themed">
    🖥️ Programs
</div>

<div>
{% include about/programs.html %}
</div>

<hr>

<div class="about-sec-h text-themed">
    💻 Programming Skills
</div>

<div>
{% include about/programming-skills.html %}
</div>

<hr>

<div class="about-sec-h text-themed">
    🎥 Other Skills
</div>

<div>
{% include about/other-skills.html %}
</div>

<hr>

<details>
<summary class="about-sec-h text-themed">💼 Work Experience</summary>
<div class="row">
    {% include about/edu-time.html %}
</div>
</details>

<details>
    <summary class="about-sec-h text-themed">🎓 Education</summary>
        <div class="row">
            {% include about/timeline.html %}
        </div>
</details>

&nbsp;
&nbsp;