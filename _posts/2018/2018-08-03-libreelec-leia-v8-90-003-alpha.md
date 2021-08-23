---
layout: post
title: "LibreELEC (Leia) v8.90.003 ALPHA"
image: "img/posts/2018/le-alpha.jpg"
---

The LibreELEC 9.0 Alpha cycle has started! and releases for Generic (x86\_64) and Raspberry Pi hardware have been published. At this stage there are still some important technical decisions to make and work to complete before we start Alpha releases for Amlogic, Rockchip and Slice hardware (August is also holiday season). There are no plans to release LibreELEC 9.0 images for NXP/iMX6 hardware as support was removed from Kodi some months ago. Support will be reinstated in a future LibreELEC release and we will update you on progress with the next-generation Kodi video pipeline (which makes that possible) soon.

Alpha releases are important to the team because we cannot test every scenario and sometimes sidestep issues without realising. The project needs a body of regular testers to go find the problems we miss. Testing will be particularly important for LibreELEC 9.0 as Kodi v18 includes substantial internal changes to VideoPlayer and introduces new retro-gaming capabilities.

**TEST NOTES**

Our current focus is the OS core and we are more interested in hardware and driver bugs than Kodi problems. Please report the issues you find by starting a thread in the forums or use our [bug tracker](https://forum.libreelec.tv/core/ticketsystem/). Raspberry Pi users are reminded that **dtoverlay=lirc-rpi** has now been deprecated. Please read the [infrared remotes wiki page](https://wiki.libreelec.tv/infrared_remotes#important_changes_in_libreelec_90)  before updating.

**\*\* CAUTION \*\***

Alpha builds exist for hands-on testing not a hands-off experience. If you run Alpha builds you must be willing to report issues and engage the LibreELEC and Kodi developers in hunting bugs. If you have no idea what a debug log is or "wife acceptance factor" is critical, these builds are not for you. If you want to run Alpha builds please make a backup and store it somewhere off-box first. Your failure to make a backup is not our problem.

Enjoy 🙂

**LibreELEC 9.0 Alpha 003 (Kodi 18 Alpha 3)**

To update an existing installation from within the Kodi GUI select manual update in the LibreELEC settings add-on and then check for updates; select the LibreELEC 9.0 channel and then the 8.90.003 release. To create new install media please use our simple [USB/SD Creator App](https://libreelec.tv/downloads/). The following .img.gz files can also be used to create install media or update the old fashioned way:

**RPi 2/3** [LibreELEC-RPi2.arm-8.90.003.img.gz](http://releases.libreelec.tv/LibreELEC-RPi2.arm-8.90.003.img.gz) ([info](http://releases.libreelec.tv/LibreELEC-RPi2.arm-8.90.003.img.gz?mirrorlist))

**RPi 0/1** [LibreELEC-RPi.arm-8.90.003.img.gz](http://releases.libreelec.tv/LibreELEC-RPi.arm-8.90.003.img.gz) ([info](http://releases.libreelec.tv/LibreELEC-RPi.arm-8.90.003.img.gz?mirrorlist))

**Generic** [LibreELEC-Generic.x86\_64-8.90.003.img.gz](http://releases.libreelec.tv/LibreELEC-Generic.x86_64-8.90.003.img.gz) ([info](http://releases.libreelec.tv/LibreELEC-Generic.x86_64-8.90.003.img.gz?mirrorlist))

{% include paypal.html %}
