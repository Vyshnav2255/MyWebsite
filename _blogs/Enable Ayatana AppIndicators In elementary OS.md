---
title: Enable Ayatana AppIndicators In elementary OS
tags: [Linux]
image: /Images/Blog/6.png
description: The latest elementary OS 5.1.7 does not allow other apps to show in the wingpanel.
external_url:
date: 2020-11-01
layout: post
---
![alt text](/Images/Blog/6.png "1")

The latest elementary OS 5.1.7 does not allow other apps to show in the wingpanel. And there is a simple fix for that. In this article I will show you how to fix that.

#### Step 1

Open file manager as **administrator**.

#### Step 2

Go to this location ``/etc/xdg/autostart`` and open the file `indicator-application.desktop` in code editor.

#### Step 3

Replace the line

`OnlyShowIn=Unity;GNOME;`

with this

`OnlyShowIn=Unity;GNOME;Pantheon;`

and save the file.

#### Step 4

Now you need to install **wingpanel-indicator-ayatana** which is no longer available in elementary OS. So you can download them [here](http://ppa.launchpad.net/elementary-os/stable/ubuntu/pool/main/w/wingpanel-indicator-ayatana/). You should install the file which doesn't have `dbg` in its name.

#### Step 5

Now restart the system.