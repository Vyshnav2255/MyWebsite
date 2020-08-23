---
name: Emoji not working Elementary OS Fix
tags: [Fix, ElementaryOS, Linux]
image: /Images/Bies/9992.png
description:
external_url:
comments: true
date: 2020-04-14
layout: post
redirect_from: /blog/9992-emoji-not-working-elementary-os-fix
---

![alt text](/Images/Bies/9992.png "1")
> This method will work on almost all linux distros.


1. Download [fonts](https://noto-website-2.storage.googleapis.com/pkgs/Noto-hinted.zip) .
2. Extract it.
3. Create a folder named `.fonts` in home directory and create a folder named `noto` inside it and paste all fonts.
4. Go to `.config` folder and create a new folder and name it `fontconfig`.
5. Then create another folder inside that and name it `conf.d`.
6. Open the folder `Right click > New> Empty file` and name it `01-emoji.conf`.
7. Open the file in Code and paste this.
    ```
    <?xml version="1.0" encoding="UTF-8"?>
    <!DOCTYPE fontconfig SYSTEM "fonts.dtd">
    <fontconfig>
    <alias>
    <family>serif</family>
    <prefer>
    <family>Noto Color Emoji</family>
    </prefer>
    </alias>
    <alias>
    <family>sans-serif</family>
    <prefer>
    <family>Noto Color Emoji</family>
    </prefer>
    </alias>
    <alias>
    <family>monospace</family>
    <prefer>
    <family>Noto Color Emoji</family>
    </prefer>
    </alias>
    </fontconfig>
    ```
8. Save file and Reboot.