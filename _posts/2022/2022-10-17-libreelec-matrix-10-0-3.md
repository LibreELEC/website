---
layout: post
title: "LibreELEC (Matrix) 10.0.3"
description: "LE 10.0 ... the beta continues"
image: img/posts/icon-release-k19.jpg
---

LibreELEC 10.0.3 has been released, bringing Kodi (Matrix) v19.4 with additional fixes from the Kodi Matrix branch (till Oct 2, 2022).
  
Users of LibreELEC 10 Beta or RC1 get an automatic update to the final version. LibreELEC 9.2 setups will not be automatically updated, you will need to [manually update](https://wiki.libreelec.tv/support/update).

We can offer stable and good working versions for Allwinner, Generic and Rockchip devices. The RPi4 is also in good shape but the codebase is rather new, so it is not polished yet (keep reading for details).  

## CHANGES SINCE 10.0.2

updates:

- update Kodi to latest version from the Matrix branch
- several minor package updates

fixes:

- RPi multiple decoder and playback fixes
- Bluetooth related fixes at the settings Add-On

## RASPBERRY PI 0-1

There are no Raspberry Pi 0-1 releases for LE10.0. The RPi graphic drivers are still in progress of a complete rewrite, additionally the current development is focused on RPi 4.

- Support for RPi0-1 is dropped, its unlikely to return (lacking horsepower for the new graphic stack)

## RASPBERRY PI 2-3

As new addition we support RPi2 and RPi3 at LE10. Please keep in mind this is still brand new and not widely tested. Likely bugs are still possible. Overall, the current version is properly useable.

Note that GPU accelerated H265 decoding is no longer available in LE 10 and future versions. If this is important to you stay at LE 9.2.

#### Working (RPi4)

- HDMI output up to 4kp60
- H264 and H265 HW decoding
- NEW: HDR output (HDR10 and HLG)
- NEW: HD audio passthrough (Dolby TrueHD, DTS HD)
- NEW: deinterlacing support (PVR/DVD)
- NEW: 10/12bit video output

#### Known Issues

- 50/60fps H264 HW decoding may need `force_turbo=1` or `core_freq_min=500` in config.txt to avoid AV-sync-issues/skipping
- Kodi runs in 4096x2160 instead of 3840x2160 on 4k TVs after fresh installation  
  Solution: Change resolution in system settings (1920x1080 50 or 60Hz plus setting up whitelist and enabling "Adjust display refresh rate" in player settings is recommended)
- Hyperion Add-on no longer works  
  No solution for now, Hyperion doesn’t support the new graphics driver stack yet
- The additional DVB drivers are not present.

#### Important changes since LE9.2

- `hdmi_mode`, `hdmi_group`, `hdmi_edid_file` etc settings in config.txt can no longer be used to work around display issues.  
  Alternatives:
  - Run `getedid create` to install permanent EDID file (same as on Generic)
  - Use `video=...` kernel command line option to force a video mode
    Eg: add `video=HDMI-A-1:1280x720M@60D` to cmdline.txt
- Analog audio output is not enabled by default  
  Solution: add `dtparam=audio=on` and `audio_pwm_mode=1` to config.txt to enable it

## MAKE BACKUPS

Due the many breaking changes at Kodi and LibreELEC, it is strongly recommended to create a backup BEFORE you upgrade. Otherwise, rolling back is basically impossible. Kodi does not support in-place downgrades, and if it ever worked for you in the past it was simple luck, not design. Python3 guarantees problems this time.

So unless you are already running an image with Kodi 19 inside, a clean install is preferred. We apologize for the inconvenience, but we expect a much higher than normal support effort with in-place upgrades so it’s sensible advice.

## CHANGES

You can read the official Team Kodi release announcement for Matrix/v19.4 [here](https://kodi.tv/article/kodi-matrix-19-4-release/), and (again) the recent [Upcoming Changes](https://libreelec.tv/2021/02/14/upcoming-changes/) blog post for more info on Kodi changes and the transition to GBM/V4L2. You probably (and hopefully) won’t notice it, but every package that goes into the LibreELEC OS has been updated to its latest or recent release. It’s been two years since Kodi 18 was released, so the change set is too large to list. [GitHub](https://github.com/LibreELEC/LibreELEC.tv/releases/tag/10.0.3) has the full history for those interested.

## SUPPORT

Project staff are available in the [forum](https://forum.libreelec.tv) to answer questions and provide advice. If you have a problem, technical issues are best accompanied by system and Kodi debug logs - help us to help you.

Enjoy! :)

## Donating

{% include opencollective.html %}

[**Click here to go to the download page.**](https://libreelec.tv/downloads/)

## SHA256 Hashes

Just add `?mirrorlist` after the link to show the SHA256 hash, for example `https://releases.libreelec.tv/LibreELEC-RPi4.arm-10.0.3.img.gz?mirrorlist` .  
We are working at a proper integration into the website.
