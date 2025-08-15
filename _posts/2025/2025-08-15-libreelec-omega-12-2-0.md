---
layout: post
title: "LibreELEC (Omega) 12.2"
description: "LE 12.2 Press F5 to refresh"
image: img/posts/icon-release-k21.2.jpg
---

LibreELEC 12.2 with Kodi (Omega) v21.2+ is released!

The main purpose of the LibreELEC 12.2 release is hardware support: bumping kernels and display components to better handle current and recent Intel hardware and keeping Raspberry Pi boards aligned with RPiOS. The release contains Kodi Omega 21.2 with a small number of additional improvements that Kodi backported to Omega since the Kodi 21.2 release (no 21.3 release is planned).

## Generic-Legacy nVidia Changes

The nVidia Legacy 340.xx driver remained usable for six years after nVidia discontinued support, but it no longer compiles with the latest Xorg release so has been dropped from the Generic-Legacy image for LibreELEC 12.2 and the future 13.0 release. This impacts older nVidia cards, which are unfortunately the majority of active nVidia installations. We have investigated 'Nouveau' and may add support to the main Generic image in the future to assist Lakka retrogaming, but it creates more problems than it solves for video playback and is not a solution for LibreELEC use. Future nVidia GPU support remains a grey area and we continue our long-running advice to avoid purchasing nVidia GPU cards for LibreELEC use.

## Generic uses OpenGL

The Generic image has switched from OpenGLES to OpenGL to benefit retrogaming use within Kodi and improve deinterlacing options on some hardware. OpenGL images now support HDR (on hardware that supports HDR) and there should be no other functional changes.

## Tvheadend 4.3

Tvheadend developers declared v4.3 to be a stable rolling release some time ago and v4.2 has not been maintained or supported since 2019 so v4.2 is not available from the LibreELEC 12.2 repo and users are advised to move to Tvheadend v4.3. There is no direct update path from v4.2 to v4.3 so users will need to install v4.3 and configure a new installation. Issues with v4.3 should ideally be reported to Tvheadend developers via their forum (with detailed logs and info) but if reported in our forum we will do our best to assist too.

## NXP (iMX6/iMX8) and Qualcomm

Limited support for iMX8 and Qualcomm chips was added in 2018 to assist the early stages of Kodi GBM/V4L2 development. They are mostly used with industrial hardware designs and tablet devices and this relects in no active LibreELEC installs. iMX6 was used widely in the past, but there are now few active installs, and those are using self-built images. Support remains part of our codebase but we have stopped building and releasing official images.

## UPDATING

Users with 12.0 installs, or 11.0 installs on x86_64 hardware, can manually update as normal using the LibreELEC settings add-on or by placing an update file in the /storage/.update folder. 

Users with 11.x or 10.x installs on ARM hardware need to read below:

* 64-bit capable ARM SoC devices including Raspberry Pi 4/5 have switched from 'arm' to 'aarch64' userspace. Manual update in LibreELEC settings will not list LibreELEC 12.2 releases as there are no arm images (only aarch64). You can [manually update](https://wiki.libreelec.tv/support/update) by placing a LibreELEC 12 release file (.tar or .img.gz) in /storage/.update and rebooting.

* If using Widevine to access DRM protected streaming services (Prime, Netflix, etc.) the Widevine CDN folder in /storage/.kodi/cdm must be deleted first as the existing arm libraries do not work on aarch64 systems. On first use after deletion new aarch64 Widevine libraries will be downloaded and installed.

* If using Docker containers via LinuxServer.io add-ons the arch change should be handled automatically. If using containers installed directly from the console: arm containers must be removed before updating as they will not run on aarch64. After updating you can (re)install aarch64 (arm64) compatible versions of your containers.

Users with 9.0 or older installs must perform a clean install due to the Python 3 changes introduced since LibreELEC 10.x (Kodi v19).

## BACKUPS

Kodi supports upgrades not downgrades. Create a backup BEFORE upgrading else rolling back to the previous release can be complicated.

## SUPPORT

Project staff are available in the [forum](https://forum.libreelec.tv) to answer questions and provide advice. If you have a problem, technical issues are best accompanied by system and Kodi debug logs - help us to help you.

Enjoy! :)

[** Click here to go to the download page **](https://libreelec.tv/downloads/)

{% include opencollective.html %}

## SHA256

Append `?mirrorlist` to download links to see the file SHA256 hash, e.g. `https://releases.libreelec.tv/LibreELEC-RPi5.arm-12.2.0.img.gz?mirrorlist`.
