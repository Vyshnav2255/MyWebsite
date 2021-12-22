---
title: Emoji not working Elementary OS Fix
tags: [Linux]
image: /Images/Blog/9992.png
description: This method will work on almost all linux distros.
external_url:
date: 2020-04-14
layout: post
---
> This method will work on almost all linux distros.

1. First install fonts using `sudo apt install fonts-noto-color-emoji`
2. Go to `.config` folder and create a new folder and name it `fontconfig`.
3. Then create another folder inside that and name it `conf.d`.
4. Open the folder `Right click > New> Empty file` and name it `01-emoji.conf`.
5. Open the file in Code and paste this.
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
6. To clear font cache run `fc-cache -f -v`
7. Restart the programs