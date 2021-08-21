---
layout: post
title: "LibreELEC (Matrix) 10.0 BETA2"
image: img/posts/icon-release-k19.jpg
---

LibreELEC 10.0 BETA 2 is released bringing Kodi (Matrix) v19.0 (including additional fixes) to LibreELEC users.

Changes from LibreELEC 10.0 BETA 1 [are listed here.](https://github.com/LibreELEC/LibreELEC.tv/compare/9.95.1...e3f11652c4ea19eff11c0df4eabef92b96d138ff) As discussed in the recent [Upcoming Changes](https://libreelec.tv/2021/02/upcoming-changes/) blog post it, the 10.0 release is a disruptive and limited hardware release. If you have not read the blog post - please do - because we are not releasing images for all hardware. In summary: this is a stable release for Generic (x86\_64 PCs). Stable-Beta for Allwinner and Rockchip. Stable “Alpha” for Raspberry Pi 4 as the code is still very new. RPi 2/3 are still in development targetting an LE10.2 release. RPi 0/1 are discontinued. All others hardware is still in development and not in a state for formal releases.

**\*\* DO NOT UPGRADE! \*\***

Yes, we mean that. The team are super keen for you to run the latest LibreELEC release but we recommend you clean install not upgrade an existing installation - unless you are upgrading from a recent nightly image, i.e. you are already using Kodi 19.

The two simple (but complex) reasons for this advice are:

a) Python3 changes in Kodi v19 mean 99.99% of add-ons stop working. Most official Kodi add-ons now have Matrix compatible versions in the Kodi repo, but the transtion to them is not always smooth. Incompatible Python2 add-ons are disabled automatically on upgrade and users need to find/update add-ons to Python3 versions before re-enabling them. Banned/piracy add-ons are heavily impacted by the Python3 change, and while we don't care about them breaking, we do care about the abuse that's often hurled at staff when we refuse sympathy or support to that subset of users.

b) Kernel changes for RPi4 users combined with no release for RPi2/3 users and discontinued support for RPi0/1 users means signifant changes in the user experience (Raspberry Pi users are a combined 80% of our active installed base). We are pretty confident RPi4 users will like the update since it brings HBR audio and initial HDR video support, but it's still a big change. Generic (where there is a lower level of change) and Allwinner/Rockchip (which already run on modern kernels) are less impacted.

**SPARE CARDS AND BACKUPS**

Using a spare SD card or USB stick to clean install onto makes "rolling back" in the event of problems simple. If you will reuse the same boot media, make a backup first and move it off-box so you can clean install an earlier release then restore from the backup. Kodi does not support in-place downgrades and it ever worked for you in the past it was luck not design (and Python3 guarantees problems this time). Your failure to make a backup is not our problem!

So unless you are already running an image with Kodi 19 inside, a clean install is preferred. We apologise for the inconvenience but we expect a much higher than normal support effort with in-place upgrades so it's sensible advice.

**CHANGES**

You can read the official Team Kodi release announcement for Matrix/v19.0 [here](https://kodi.tv/article/kodi-190-matrix-release) and (again) the recent [Upcoming Changes](https://libreelec.tv/2021/02/upcoming-changes/) blog post for more info on Kodi changes and the transition to GBM/V4L2. You probably (and hopefully) won't notice, but every package that goes into the LibreELEC OS has been updated to a latest or recent release. It's been two years since Kodi 18 was released so the changeset is too large to list. [GitHub](https://github.com/LibreELEC/LibreELEC.tv/compare/libreelec-9.2...master) has the full history.

**SUPPORT**

Project staff are available in the [forum](https://forum.libreelec.tv) to answer questions and provide advice. Please remember this is a beta. We are expecting some minor bugs/issues to be found and there will probably be a BETA2 release before we reach 10.0. If you have a problem, technical issues are best accompanied by system and Kodi debug logs - help us to help you.

Enjoy! :)

[**Click here to go to the download page.**](https://libreelec.tv/downloads/)