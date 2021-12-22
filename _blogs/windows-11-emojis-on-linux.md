---
title: Windows 11 Emojis on Linux
tags: [Linux]
image: /Images/Blog/24.png
description: Steps for enabling Windows 11 emojis on Linux
date: 2021-12-22
layout: post
---

Microsoft recently announced a huge upgrade to the existing emoji with Windows 11. You can read the official [announcement of the emojis by the Microsoft Design team](https://medium.com/microsoft-design/emotionality-at-work-398182387adc). I was totally in love with that 3D emojis. But later, they replaced it with a flat version of the emoji, which still looked great.

So I thought of replacing my current Noto Emoji Font in Linux with the new windows 11 emoji font. And I successfully replaced it. In this article, I will show you how exactly I did it.

#### Follow these steps

1. First download [Segoe UI Emoji font](https://drive.google.com/file/d/1ibOFjBdqUGGV13Gie2oAGdVj43HKyomD/view?usp=sharing)
2. Copy that font and paste it in `~/.fonts` directory
3. If you have previously installed Noto Emoji Font, uninstall it by running `sudo apt remove fonts-noto-color-emoji`
4. Go to `~/.config` folder and create a new folder and name it `fontconfig`
5. Then create another folder inside that and name it `conf.d`
6. Open the folder `Right click > New> Empty file` and name it `01-emoji.conf`
7. Open the file in Code and paste this
    ```
    <?xml version="1.0" encoding="UTF-8"?>
    <!DOCTYPE fontconfig SYSTEM "fonts.dtd">
    <fontconfig>
    <alias>
        <family>serif</family>
        <prefer>
            <family>Segoe UI Emoji</family>
        </prefer>
    </alias>
    <alias>
        <family>sans-serif</family>
        <prefer>
            <family>Segoe UI Emoji</family>
        </prefer>
    </alias>
    <alias>
        <family>monospace</family>
        <prefer>
            <family>Segoe UI Emoji</family>
        </prefer>
    </alias>
    </fontconfig>
    ```
8. To clear font cache run `fc-cache -f -v`
9. Restart the programs

I hope it's working for you. If it isn't, you can DM me on Twitter or mail me by clicking the feedback link at the bottom of this page.

I have been using it for a week. It's looking great, and I haven't found any missing emojis or other issues. If you need to go back to the default emojis, [follow these steps](/blog/emoji-not-working-elementary-os-fix).