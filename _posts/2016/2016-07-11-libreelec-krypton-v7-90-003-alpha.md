---
layout: post
title: "LibreELEC (Krypton) v7.90.003 ALPHA"
image: "img/posts/2016/alpha_scrabble.png"
---

LibreELEC (Krypton) 8.0 preview builds continue with v7.90.003 which is now available for Generic x86\_64 hardware and Raspberry Pi devices. The Amlogic changes in Kodi VideoPlayer are still not at the point where we want larger-scale testing (and bug reporting) from WeTek Play/Core and Odroid C2 users so we continue to hold those builds. The changes in v7.90.003 include:

- Fix an issue where journald logs were wiped on RPi due to time/NTP changes
- Fix an issue with updating from .img.gz on WP/WC block device storage
- Fix an issue with mtools creating corrupt directories in installer images
- Fix an machine-id issue when /storage/.cache doesn’t exist on first boot
- Fix context key mapping on the OSMC remote
- Update to brcmfmac43430-sdio wlan firmware for RPi3
- Update to RPi/RPi2 backports and firmware
- Update eventlicd version to latest
- Update Kodi to v17.0-Alpha2
- Update udev rules to prevent noobs partitions auto-mounting
- Add support for new i2c soundcards on Pi hardware
- Add support for RTC\_DRV\_DS3232 on RPi/RPi2
- Add support for auto-delete of FSCK.\* files in boot partitions
- Add support for the Terratec Cinergy S2 Rev.3 DVB card

[View detailed changes on GitHub](https://github.com/LibreELEC/LibreELEC.tv/compare/7.90.002...7.90.003)

There are still issues with remote controls not auto-repeating (making scrolling harder) but we have identified the problem commit in the Linux 4.6.x kernel. The fix probably requires other packages to accommodate the kernel change; we cannot simply revert the commit, so we continue to unpick code spaghetti and investigate the solution. In v17-Alpha2 Kodi introduced the inputstream.rtmp add-on. Some streams that worked in earlier builds will break until you install it.

**\*\*REMINDER\*\***

LibreELEC operates a 24-hour ‘canary’ period between release files being posted to the download page and the release being available via auto-update.

**\*\* CAUTION \*\***

Alpha builds exist for hands-on testing not a hands-off experience. If you run Alpha builds you must be willing to report issues via the forums and engage the LibreELEC and Kodi developers in hunting bugs. If you have no idea what a debug log is or “wife acceptance factor” is critical, these builds are not for you.

If you want to run Alpha builds _please_ make a backup and store it somewhere safe (off-box) first. Your failure to make a backup is not our problem.

Enjoy 🙂

[LibreELEC PREVIEW BUILDS](https://libreelec.tv/downloads/preview/)

{% include paypal.html %}
