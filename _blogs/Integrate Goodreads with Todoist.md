---
title: Integrate Goodreads with Todoist
tags:
- Tips & Tricks
- IFTTT
image: /Images/Blog/1.png
description: Create want to read as a task.
external_url:
date: 2020-07-16
layout: post
---
![alt text](/Images/Blog/1.png "1")


Recently I read an article by Todoist about different [productivity methods](https://todoist.com/productivity-methods), and in one of the materials, I read about automation. Creating an automatic todo task, for example, if you add articles in the pocket app it will create a task in Todoist. So this made me think why not add **Goodreads** want to read to **Todoist**. So I did it, now whenever I mark a book as want to read it will create a task t in my Todoist. It is a straightforward process, and I will give you all the details on how to do it. You can do this with TickTick also.

#### **Steps**

1. Install [IFTTT](https://ifttt.com/) and connect your Todoist account with it. If you don't have Todoist [click here](https://doist.grsm.io/vyshnavgangadharan6232) to get *2 Months of Todoist premium*, existing users can also use it.
2. Go to [Goodreads](https://www.goodreads.com/) web and scroll down to the bottom and click API.
3. Click on "Developer key" and enter your password.
4. Type **IFTTT** in the Application name and Company name box and click ok.
5. Now replace the key part with your key.
    ```
    https://www.goodreads.com/user/updates_rss/xxxxxxxx?key=uESf34fcArS0xG2Gh9fw
    ```
6. Now go to Goodreads profile and copy the URL. You will get a URL like this
    ```
    https://www.goodreads.com/user/show/6565503-test-user
    ```
7. Now replace the ```xxxxxxxx``` from the previous URL with this number. Now your link is ready.
8. Now click on [this link](https://ifttt.com/applets/VAwfDRBp) to set up your IFTTT.
9. Copy-paste our final URL in the Feed Url box.
10. Now click on the project and choose a project where you want to add the task. I recommend you create a **new project** and then click on save.

If you have any doubt, you can comment below.
