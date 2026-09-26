---
layout: post
title: "LibreELEC (Krypton) v7.90.002 ALPHA"
image: "img/posts/2016/theateam.png"
---

LibreELEC (Krypton) 8.0 preview builds continue with v7.90.002 which is now available for Generic x86\_64 hardware and Raspberry Pi devices. Other hardware platforms are still pending upstream Kodi development for Amlogic reaching a suitable point where we can start builds. Changes in v7.90.002 include:

Main changes:

- Fix overlay folder creation in Raspberry Pi images
- Fix option to disable samba via LibreELEC settings
- Fix occasional first boot issues with /etc/machineid
- Fix crackling digital audio with alsa and non-Kodi apps
- Fix for null NTP values in LibreELEC settings
- Fix support for DVD playback in Kodi
- Update Linux Kernel to 4.6.2
- Update Kodi to git master as of 10/6
- Update RPi/RPi2 backports and firmware
- Add HDMI audio support for Atom Baytrail/Cherrytrail
- Add support for distro specific RPi/RPi2 config.txt
- Add support for manual updates via LibreELEC settings (read below)

In this build we have introduced a new GUI for manual update in LibreELEC settings. If you disable auto-update you can select a release "channel" e.g. LibreELEC-8.0, and you will see a list of available update files. If you select a file it will be downloaded in preparation for our normal reboot > update > reboot process. We still have no plans to enable auto-updating for major releases, but this change will allow you to perform a manual update using a remote control from the sofa instead of requiring you to copy files over to the box.

**\*\*REMINDER\*\***

LibreELEC operates a 24-hour ‘canary’ period between release files being posted to the download page and the release being available via auto-update.

\*\* CAUTION \*\*

Alpha builds exist for hands-on testing not a hands-off experience. If you run Alpha builds you must be willing to report issues via the forums and engage the LibreELEC and Kodi developers in hunting bugs. If you have no idea what a debug log is or “wife acceptance factor” is critical, these builds are not for you.

If you want to run Alpha builds _please_ make a backup and store it somewhere safe (off-box) first. Your failure to make a backup is not our problem.

Enjoy :)

[LibreELEC PREVIEW BUILDS](https://libreelec.tv/downloads/preview/)

{% include paypal.html %}
