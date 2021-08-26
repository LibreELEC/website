---
layout: post
title: "LibreELEC (Matrix) 10.0.0"
description: "LE 10.0 ... the beta continues"
image: img/posts/icon-release-k19.jpg
---

The final version of LibreELEC 10.0.0 has been released, bringing Kodi (Matrix) v19.1 to LibreELEC users.
  
Users of LibreELEC 10 Beta or RC1 get an automatic update to the final version. LibreELEC 9.2 setups will not be automatically updated, you will need to [manually update](https://wiki.libreelec.tv/support/update).

We can offer stable and good working versions for Allwinner, Generic and Rockchip devices. The RPi4 is also in good shape but the codebase is rather new, so it is not polished yet (keep reading for details).

## REMAINING BUGS

Despite a long development period, there is still a major bug remaining. When you use profiles, LibreELEC's Settings Add-on can crash while switching to another profile.
The [issue is known](https://github.com/LibreELEC/LibreELEC.tv/issues/5303),but we have currently no fix for it. So if you depend on profiles, you cannot properly use LibreELEC 10.

## RASPBERRY PI 0-3

There are no Raspberry Pi 0-3 releases for LE10.0. The RPi graphic drivers are still in progress of a complete rewrite, additionally the current developement is focused on RPi 4.
- Support for RPi0-1 is dropped, its unlikely to return (lacking horsepower for the new graphic stack)
- Drivers for RPi2 and 3 are currently unfinished and isn’t properly useable at this time

## RASPBERRY PI 4

The situation for RPi 4 is different. There is a lot that properly works, but keep in mind this is still brand new. Unlikely bugs are still possible. 
Overall, the current version is properly useable.

#### Working
- HDMI output up to 4kp30
- H264 and H265 HW decoding
- NEW: HDR output (HDR10 and HLG)
- NEW: HD audio passthrough (Dolby TrueHD, DTS HD)

#### Known Issues:
- No deinterlacing with HW video decoders.
  Possible workaround: disable HW video decoding ("DRM PRIME decoder" in player settings), this works mostly fine for SD content (eg DVDs)
- 4K50/60 output is supported by the driver, but has some known issues (eg "no signal" when TV is put into standby and back on)
- 50/60fps H264 HW decoding may need `force_turbo=1` or `core_freq_min=500` in config.txt to avoid AV-sync-issues/skipping
- 10/12-bit video output isn’t implemented yet, 10-bit video is displayed in 8 bits
- Kodi runs in 4096x2160 instead of 3840x2160 on 4k TVs after fresh installation  
  Solution: Change resolution in system settings (1920x1080 50 or 60Hz plus setting up whitelist and enabling "Adjust display refresh rate" in player settings is recommended)
- Hyperion Add-on no longer works  
  No solution for now, Hyperion doesn’t support the new graphics driver stack yet

#### Important changes since LE9.2:
- `hdmi_mode`, `hdmi_group`, `hdmi_edid_file` etc settings in config.txt can longer be used to work around display issues.  
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

You can read the official Team Kodi release announcement for Matrix/v19.0 [here](https://kodi.tv/article/kodi-190-matrix-release), and (again) the recent [Upcoming Changes](https://libreelec.tv/2021/02/upcoming-changes/) blog post for more info on Kodi changes and the transition to GBM/V4L2. You probably (and hopefully) won’t notice it, but every package that goes into the LibreELEC OS has been updated to its latest or recent release. It’s been two years since Kodi 18 was released, so the change set is too large to list. [GitHub](https://github.com/LibreELEC/LibreELEC.tv/compare/libreelec-9.2...libreelec-10.0) has the full history for those interested.

## SUPPORT

Project staff are available in the [forum](https://forum.libreelec.tv) to answer questions and provide advice. If you have a problem, technical issues are best accompanied by system and Kodi debug logs - help us to help you.

Enjoy! :)

## Donating

{% include paypal.html %}


[**Click here to go to the download page.**](https://libreelec.tv/downloads/)