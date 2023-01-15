---
layout: post
title: "LibreELEC (Matrix) 10.0.4"
description: "LibreELEC 10.0 ... Kodi Matrix Continues"
image: img/posts/icon-release-k19.jpg
---

## NEWS

LibreELEC 10.0.4 has been released, bringing Kodi (Matrix) v19.5. Users of LibreELEC 10.x will receive an automatic update (if enabled). LibreELEC 9.2 installs are not automatically updated, and users will need to [manually update](https://wiki.libreelec.tv/support/update).

## CHANGES SINCE 10.0.3

- Update Kodi to 19.5
- Updated RPi firmware
- AMD GPU fixes

## RASPBERRY Pi 0-1

There are no official LibreELEC 10.x releases for Raspberry Pi 0-1 as support has been discontinued. Older Pi devices lack the CPU/RAM resources needed for a good Kodi experience with the new video pipeline used in Kodi v19 releases.

## RASPBERRY Pi 2-3

The new video pipeline used in LibreELEC 10.x does not support enhanced HEVC software decoding. If HEVC media playback is important to you please remain on LibreELEC 9.2 releases or consider a Raspberry Pi 4 upgrade (RPi4 has native HEVC hardware decoding).

## RASPBERRY Pi 4

Raspberry Pi 4 and Raspberry Pi 400 hardware supports:

- HDMI output up to 4kp60
- H264 and H265 HW decoding
- HDR output (HDR10 and HLG)
- HD audio passthrough (Dolby TrueHD, DTS HD)
- Hardware deinterlacing support (PVR/DVD)
- 10/12bit video output

#### Known Issues

- 50/60fps H264 HW decoding may need `force_turbo=1` or `core_freq_min=500` in config.txt to avoid AV-sync-issues/skipping
- Kodi runs in 4096x2160 instead of 3840x2160 on 4k TVs after fresh installation (Change to 1080p@60 is recommended)
- Run Kodi GUI at 1920x1080/60 and use the whitelist + "Adjust display refresh rate" to use 4K during playback
- Hyperion no longer works due to changes in the video pipeline. Consider hardare/external grabbers.
- Additional DVB drivers are not present

#### Important Changes

- Raspberry Pi `hdmi_mode`, `hdmi_group`, `hdmi_edid_file` config.txt settings are no longer used.
- Alternatives:
  - Run `getedid create` to install permanent EDID file (same as on Generic)
  - Use `video=...` kernel boot params in cmdline.txt to force a video mode, e.g. `video=HDMI-A-1:1280x720M@60D`
  - Analog audio output is not enabled by default. Add `dtparam=audio=on` and `audio_pwm_mode=1` to config.txt to enable it

## BACKUPS

The team does not support direct update from LibreELEC 9.2 to LibreELEC 10.0 due to breaking Python changes with Kodi add-ons. We strongly recommend users create a backup BEFORE creating a clean LibreELEC 10.x installation as downgrade (which Kodi has never supported) is basically impossible. Users with an existing LibreELEC 10.x installation can update as normal.

## CHANGES

The official Team Kodi release announcement for Matrix/v19.5 is [here](https://kodi.tv/article/kodi-matrix-19-5-release/) and LibreELEC blog posts on video pipeline changes (GBM/V4L2) are [here](https://libreelec.tv/2021/02/14/upcoming-changes/). See [GitHub](https://github.com/LibreELEC/LibreELEC.tv/releases/tag/10.0.4) for the full changelog.

## SUPPORT

Project staff are available in the [forum](https://forum.libreelec.tv) to answer questions and provide advice. If you have a problem, technical issues are best accompanied by system and Kodi debug logs - help us to help you.

Enjoy! :)

## DONATING

{% include opencollective.html %}

[**Click here to go to the download page.**](https://libreelec.tv/downloads/)

## HASHES

Append `?mirrorlist` to download URLs to view the SHA256 hash. For example `https://releases.libreelec.tv/LibreELEC-RPi4.arm-10.0.4.img.gz?mirrorlist`
