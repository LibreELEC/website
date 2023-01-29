---
layout: post
title: "LibreELEC (Matrix) 11 Beta1"
description: "LE 11.0 ... let the beta begin"
image: img/posts/icon-release-k20.jpg
---

The first Beta of LibreELEC 11 has been released, bringing Kodi (Nexus) v20.0.

## News

With the new release cycle we add a Generic-legacy (Nvidia, Chrome, older hardware) image and reintroduce support for Amlogic (S905, S912). If you use them make sure to read the paragraph about them.
  
LibreELEC 10.0 setups will not be automatically updated, you will need to [manually update](https://wiki.libreelec.tv/support/update).

## RASPBERRY PI

- 50/60fps H264 HW decoding may need `force_turbo=1` or `core_freq_min=500` in config.txt to avoid AV-sync-issues/skipping
- Kodi at RPi4 runs in 4096x2160 instead of 3840x2160 on 4k TVs after fresh installation - configure Kodi as [described at the wiki](https://wiki.libreelec.tv/configuration/4k-hdr) and optionally add hdmi_enable_ekp60=1 to config.txt and enable HDMI UltraHD Deep Color in your TV's HDMI port configuration to get 4kp60 modes

## GENERIC PC

The new default Generic image uses the same graphic stack we are using for all other platforms which enables among other things HDR for recent AMD and Intel CPUs.
We additional introduced a Generic-legacy image that uses the same old graphic stack we used in LE7-10 (X11). You can upgrade between these images without data loss.

When should I use Generic-legacy:

- usage of a Nvidia GPU
- graphical glitches appear at older hardware, for example NUC 6th Gen.
- usage of the Chrome Add-On

## ALLWINNER

Support for the Orange Pi 3 LTS board is still work in progress and has known problems.

## AMLOGIC

Support for Amlogic S905, S905X/D, and S912 devices resumes. H264 playback and seeking is solid. HEVC playback is okay and seeking has recently improved from 2/10 to maybe 7/10. HDR works with HEVC/VP9 media on S905X/D and S912 devices. Multi-Channel PCM and Pass-Through audio works on HDMI up to 7.1 channels. With typical 1080p oriented media collections the AMLGX image is usable and provides access to the latest Kodi release and compatible add-ons. To be crystal clear: the AMLGX image is not perfect, but the cost-of-living is high and $0 software updates to older hardware are more appealing to users than $150+ purchases of new hardware. If we resume support (with caveats) fewer old boxes will be junked and some folks will be happy. There's also an increased chance of people contributing improvements to smooth rough edges that exist.

Here's the essential 'No' list:

- No support for updates from older LE releases (clean install is mandatory)
- No support for internal eMMC install except WeTek Hub/Play2 and SBC boards
- No support for SSV6501 and S908CS WiFi chips
- No drivers for in-box DVB tuners
- No hardware deinterlacing
- No HDR to SDR tonemapping
- No formal support for newer S905X2/D2/Y2, S905X3, S922X, A311D devices (read below)

The reason for not formally supporting newer hardware generations is all about hardware decode drivers and user expectations. Amlogic hardware video decoding requires the "VDEC" driver for older hardware (GXBB/GXL/GXM) and the "HEVC" driver (driver, not codec) for newer hardware (G12A/G12B/SM1) and both generations prefer a later iteration of "multi" decoder firmware. The current upstream driver code attempts to mix both drivers in a common codebase with partial success and does not support multi firmware. As a result, the current drivers work well on older hardware but there are major bugs that prevent 10-bit output and 4K output on newer hardware, and users with newer and (on paper) more capable hardware generally have higher expectations. To avoid high levels of user feedback and frustration; if you have newer Amlogic hardware our recommendation is to run Kodi on the Android install that shipped with the box. If you choose to run AMLGX images on newer hardware; expect 1080p maximum output, and minimum interest from developers if you post test reports in the forums.

## MAKE BACKUPS

Due the many breaking changes at Kodi and LibreELEC, it is strongly recommended to create a backup BEFORE you upgrade. Otherwise, rolling back is basically impossible. Kodi does not support in-place downgrades, and if it ever worked for you in the past it was simple luck, not design. Python3 guarantees problems this time.

So unless you are already running an image with Kodi 19 inside, a clean install is preferred. We apologize for the inconvenience, but we expect a much higher than normal support effort with in-place upgrades so it’s sensible advice.

## SUPPORT

Project staff are available in the [forum](https://forum.libreelec.tv) to answer questions and provide advice. If you have a problem, technical issues are best accompanied by system and Kodi debug logs - help us to help you.

Enjoy! :)

## Donating

{% include opencollective.html %}

[**Click here to go to the download page.**](https://libreelec.tv/downloads/)

## SHA256 Hashes

Just add `?mirrorlist` after the link to show the SHA256 hash, for example `https://releases.libreelec.tv/LibreELEC-RPi4.arm-10.95.0.img.gz?mirrorlist` .  
We are working at a proper integration into the website.
