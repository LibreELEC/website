---
layout: post
title: "LibreELEC (Krypton) v7.90.001 ALPHA"
image: "img/posts/2016/LibreELEC-ALPHA-720x340.png"
---

Alpha builds are an important part of our long-term test strategy. Our developers do high quality testing but we are small in number, don't have every device to test with, and often sidestep problems without realising. The project needs a community of regular testers with a larger selection of hardware and more 'human' behaviour to find problems we miss. Thorough testing will be particularly important for LibreELEC 8.0 as Kodi v17 brings major video changes and introduces new retro gaming capabilities.

At this stage it's too early to talk about release dates but we do want to talk about LibreELEC releasing 8.0 shortly after Kodi push their v17.0 release. It would be awesome if the time gap is small, but our priority is a stable release not fast release. If there are outstanding issues when Kodi v17.0 ships (as there were with Kodi v15 and v16) we may hold LibreELEC 8.0 back until v17.1 or needed patches become available. If this is going to happen we promise to be open about our plans to manage expectations.

**AUTO UPDATE**

LibreELEC v7.90.001 will update automatically to future Alpha builds and then Beta and the Final 8.0 release if auto-update is enabled. Initial LibreELEC 8.0 Alpha builds have no fixed schedule but as time advances we're aiming for a weekly Alpha build.

**TEST NOTES**

The current focus for Alpha testing is the OS core. LibreELEC has moved up to the Linux 4.6 kernel and there are other major-package changes. Right now we're more interested in hardware/driver things that don't work than Kodi issues. Controller input changes from @garbear are now merged but other parts of the new gaming features are still taking shape.

v7.90.001 is available for Generic x86\_64 hardware and Raspberry Pi devices. Kodi video changes for Amlogic devices (Odroid C2 and WeTek Play/Core) are "work in progress" but we have visibility on developer progress and hope to start Alpha builds for them in the near future. Similar changes for imx6 (Cubox-i2/i4 and Hummingboard) devices are also in development, but we have low visibility on progress and a decision to continue or discontinue support for imx6 is still pending.

**\*\* CAUTION \*\***

Alpha builds exist for hands-on testing not a hands-off experience. If you run Alpha builds you must be willing to report issues via the forums and engage the LibreELEC and Kodi developers in hunting bugs. If you have no idea what a debug log is or "wife acceptance factor" is critical, these builds are not for you.

If you want to run Alpha builds _please_ make a backup and store it somewhere safe (off-box) first. Your failure to make a backup is not our problem.

Enjoy :)

[LibreELEC PREVIEW BUILDS](https://libreelec.tv/downloads/preview/)

{% include paypal.html %}
