---
name: Emoji not working Elementary OS Fix
tags: [Fix, ElementaryOS, Linux]
image: /Images/Bies/9992.jpg
description:
external_url:
comments: true
date: 2020-04-14
layout: post
---

---
![alt text](/Images/Bies/9992.jpg "1")
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


{% if page.comments %}

<div id="disqus_thread"></div>
<script>

/**
*  RECOMMENDED CONFIGURATION VARIABLES: EDIT AND UNCOMMENT THE SECTION BELOW TO INSERT DYNAMIC VALUES FROM YOUR PLATFORM OR CMS.
*  LEARN WHY DEFINING THESE VARIABLES IS IMPORTANT: https://disqus.com/admin/universalcode/#configuration-variables*/
/*
var disqus_config = function () {
this.page.url = PAGE_URL;  // Replace PAGE_URL with your page's canonical URL variable
this.page.identifier = PAGE_IDENTIFIER; // Replace PAGE_IDENTIFIER with your page's unique identifier variable
};
*/
(function() { // DON'T EDIT BELOW THIS LINE
var d = document, s = d.createElement('script');
s.src = 'https://vyshnavgangadharan.disqus.com/embed.js';
s.setAttribute('data-timestamp', +new Date());
(d.head || d.body).appendChild(s);
})();
</script>
<noscript>Please enable JavaScript to view the <a href="https://disqus.com/?ref_noscript">comments powered by Disqus.</a></noscript>

{% endif %}