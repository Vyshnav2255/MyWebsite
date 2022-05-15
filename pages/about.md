---
layout: page
title: About
permalink: /about/
weight: 6
image: /assets/card.png
description: Hi I’m Vyshnav Gangadharan 👋, a 22-year-old Graphics & UI/UX designer currently pursuing 🎓B.Tech from National Institute of Technology, Calicut
---

# About Me
Hi👋, Nice to meet you😊
<br>I’m **{{ site.author.name }}**🥳, a 22-year-old Graphics & UI/UX designer currently pursuing 🎓B.Tech (Chemical engineering) from National Institute of Technology, Calicut. I'm a self-taught Graphics designer, UI/UX designer, Video Editor, Coder & Film Maker.

I currently live in Kerala🌴, India. I enjoy reading books📗 and listing to podcasts🎙️. I love creating creative content✨, and you can find most of my works here.

<p class="text-center" style="margin-bottom: 1.5rem;">
{% include elements/iconbtn.html link="mailto:hi@vyshnav.xyz" text="Say hello!" icon="chat" %}
{% include elements/iconbtn.html link="mailto:hi@vyshnav.xyz?subject=Resume" text="Resume" icon="file" %}
{% include elements/iconbtn.html link="https://www.buymeacoffee.com/vyshnav" text="Buy Me a Coffee" icon="coffee" %}
</p>

<div class="accordion-body">
    <div class="accordion">
        <div class="box active">
            <div class="label">Programs</div>
            <div class="content">{% include about/programs.html %}</div>
        </div>

        <div class="box">
            <div class="label">Coding Skills</div>
            <div class="content">{% include about/programming-skills.html %}</div>
        </div>

        <div class="box">
            <div class="label">Other Skills</div>
            <div class="content">{% include about/other-skills.html %}</div>
        </div>
    </div>
</div>

<div class="about-sec-h text-themed">💼 Work Experience</div>
<div class="row">
    {% include about/edu-time.html %}
</div>

<hr>

<div class="about-sec-h text-themed">🎓 Education</div>
<div class="row">
    {% include about/timeline.html %}
</div>

<script>
const accordion = document.getElementsByClassName('box');

for (i=0; i<accordion.length; i++) {
  accordion[i].addEventListener('click', function () {
    this.classList.toggle('active')
  })
}
</script>

&nbsp;
&nbsp;