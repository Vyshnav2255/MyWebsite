---
title: I Started Learning Blender
tags: [Design]
image: /Images/Blog/27/1.png
description: Last week I started learning Blender. I spent 2 hours every day for the past 6 days learning it
date: 2022-07-08
layout: post
---

Last week I started learning Blender. I spent 2 hours every day for the past 6 days learning it.

Initially, I got really confused when I first opened the Blender application - tons of shortcuts, buttons, and tabs.

{% include elements/figure.html image="/Images/Blog/27/2.jpeg" caption="Today looks like a great day to start learning Blender 📦 - 9:31 AM - Jun 27, 2022 - Twitter" %}

Then I browsed YouTube to find some beginner tutorials and found the updated [Donut tutorial by Blender Guru](https://youtube.com/playlist?list=PLjEaoINr3zgFX8ZsChQVQsuDSjEqdWMAD). If you want to learn Blender, start by making a Donut 🍩. Most people start their Blender journey from here.

And as Andrew says, “80-20 rule applies to Blender also. You need only 20% of Blender features to make 80% of your projects.”

After spending 3 hours watching Andrew’s tutorials, I made my Donut.

{% include elements/figure.html image="/Images/Blog/27/3.jpeg" caption="My first Blender project - a Donut 🍩 - 5:04 PM - Jun 27, 2022 - Twitter" %}

At this point, I had completed 60% of the tutorial. The rest 40% was on animating and rendering this Donut.

After completing the remaining 40%, I started rendering the final Donut with animation. It took me 13 hours to render it. The reason it took 13 hours was due to my laptop specs. My laptop is 4 years old and runs on Linux([elementary OS](https://elementary.io/)) without an Nvidia graphics card. So the rendering is done using the CPU.

The animation duration was 10 seconds at 30fps, so 300 frames had to be rendered. Blender can directly render the animation as a video file, but most Blender experts don’t recommend doing this as the video quality is really low. So it is recommended to export all frames in *OpenEXR* format and later join them using Blender’s Video Editor.

After completing this and when I saw the final render, I got frustrated. The final render came out as transparent.

Then I spent 1 hour trying to figure out where I made the mistake. Since the issue was with the background, I knew it had something to do with the *Compositing*.

So I switched to the *Compositing* tab and found the mistake. I connected the *Viewer* and *Composite* nodes separately. Actually, it was supposed to be connected to the same node (*Add*). So I connected it correctly. You can see the *Compositing node tree* below.

{% include elements/figure.html image="/Images/Blog/27/4.png" caption="Compositing node tree" %}

After that, I did a test render and fixed some lighting issues and render settings.

Then I rendered the final animation. It took only 10 hours to render this time, and I was amazed by the output 🍩.

{% include elements/video.html id="44cnLL0z2Sw" %}

Here is the [Blender file](https://shop.vyshnav.xyz/l/sztgx) of this project, if you want to try it out.

I had so much fun creating it, and I’m so happy after seeing the final output. I never expected it would come out this well.

Later I spent 1 hour making a Santa Hat 🎅, and it was a lot easier compared to the donut. Here is the final render.

![Santa Hat](/Images/Blog/27/5.png "Santa Hat")

I will be spending this week also for learning Blender. I’m also working on a free Notion page containing resources and materials I used for learning Blender. I will be sharing it soon. I hope you enjoyed this blog post.