---
layout: post
title: "LE9.2/10 fix for widevine"
image: img/posts/icon-info-le.jpg
---

Today we are releasing a LibreELEC update to primarily fix Widevine, its that piece of software that allows playback of Netflix, Amazon Prime and other paid video services.

The new version of widevine (4.10.2252.0 or newer) is mandatory to keep it working after May 31, 2021.   
With that new version (that is taken from ChromeOS) all ARM devices need additional libraries to make it work again.  
Sadly its not that simple and some not too nice workarounds came in place to keep it working due changes at ChromeOS.

The Generic (PC / Intel / AMD / Nvidia) images need no changes.

Raspberry Pi 2, 3 and 4
-----------------------

For Raspberry Pi 2/3 and 4 we made the LE 9.2.7 images that work out of the box. Just update to it and it should work.  
We will not provide auto update to that version - you will need to manually update if you need widevine.  
No additional changes needed (check [InputStream Helper add-on](https://kodi.wiki/view/Add-on:InputStream_Helper) for widevine update 4.10.2252.0 or newer).

LibreELEC 10
------------

**Update: With LibreELEC 10 Beta5 manual changes are not necessary anymore.**

~~manual howto is obsolete~~

**SUPPORT**

Project staff are available in the [forum](https://forum.libreelec.tv) to answer questions and provide advice. Please remember this is a beta. We are expecting some minor bugs/issues to be found. If you have a problem, technical issues are best accompanied by system and Kodi debug logs - help us to help you.

Enjoy! :)

[**Click here to go to the download page.**](https://libreelec.tv/downloads/)