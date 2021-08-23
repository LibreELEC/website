---
layout: post
title: "LibreELEC (Jarvis) v7.0.2 MR"
image: "img/posts/2016/100-percent-free.png"
---

The v7.0.2 maintenance release has a strong Raspberry flavour with firmware and Kodi updates to resolve minor Pi issues and a bootloop with the Xperience1080 skin. There are also tweaks to polish the "noobs" experience as the Raspberry Pi Foundation now includes LibreELEC in the list of distributions available via noobs and their downloads page. If you are not using Pi hardware this is a minor update as there have been few reports of things to fix. v7.0.2 changes include:

- Fix an issue where journald logs were wiped on RPi due to time/NTP changes
- Fix an issue where Kodi skins with no cursor bootloop on Pi hardware
- Fix an issue with mtools creating corrupt directories in installer images
- Fix an machine-id issue when /storage/.cache doesn't exist on first boot
- Fix context key mapping on the OSMC remote
- Fix some JSON formatting issues for the noobs installer
- Update to brcmfmac43430-sdio wlan firmware for RPi3
- Update to RPi/RPi2 backports and firmware
- Update Linux kernel to 4.4.13 to track Pi support patches
- Update eventlicd version to latest
- Update various noobs files to improve cosmetics
- Update udev rules to prevent noobs partitions auto-mounting
- Add support for new i2c soundcards on Pi hardware
- Add support for RTC\_DRV\_DS3232 on RPi/RPi2
- Add support for auto-delete of FSCK.\* files in boot partitions
- Add 40x40 LibreELEC icon to the noobs installer
- Add support for the Terratec Cinergy S2 Rev.3 DVB card

**\*\*REMINDER\*\***

LibreELEC operates a 24-hour ‘canary’ period between maintenance release files being posted to the download page and the release being available via auto-update and noobs.

**ADD-ONS**

Recent add-on changes include: Adding 'unclutter' support to Chromium to allow optional hiding of the mouse cursor (useful in Kiosk set-ups). Syncthing now supports user-updating of the Syncthing binary within the addon. Hyperion has been updated and now ships with an improved default config file. Docker has been updated and now supports status pop-up notifications in the Kodi GUI. Oscam has been updated. The mpg123 and squeezlite binaries have been added to our multimedia-tools bundle, and both Music Player Daemon (MPD) and Moonlight have been added to the repo.

Enjoy :)

{% include paypal.html %}
