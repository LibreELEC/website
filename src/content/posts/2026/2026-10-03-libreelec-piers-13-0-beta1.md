---
layout: post
title: "LibreELEC 13 Beta 1"
description: "Backup first, ask questions later. LE13 Beta 1 is here!"
---

# LibreELEC 13 Beta 1

LibreELEC 13 Beta 1 is now available for testing. This release moves our base to the upcoming **Kodi 22 (Piers)** and brings major hardware and driver updates across all platforms.

### Kodi 22 Highlights
* **HDR Enhancements:** End-to-end HDR support with 10-bit output and a tonemapped GUI.
* **Movie Extras:** Watch trailers, deleted scenes, and bonus clips directly from the movie page.
* **Faster TV Remotes:** Snappier button response and better plug-and-play remote support.
* **Auto Storage Cleanup:** Silently clears old cached artwork to keep your drive from filling up.
* **Retro Gaming Perks:** Classic games now support on-screen achievement popups and built-in cheats.

Behind the scenes, there is also a huge amount of under-the-hood improvements, including major core updates like FFmpeg 9, modernized rendering pipelines, and extensive stability and performance fixes throughout the system.

### Web Browsers via Flatpak
LibreELEC 13 adds native support for Flatpak. This means you can finally install and launch full web browsers and standalone apps directly on your TV, with proper hardware acceleration.

### Notable Changes Since LE 12
* Removed the Generic Legacy image (older Intel and Nvidia ION platforms are no longer supported).
* Updated Kodi remote handling `Lircmap.xml` and `remote.xml` are no longer used.
* Added NVIDIA 580-series driver support to Generic, covering GeForce 10 through RTX 40 series.
* Generic x86_64 now requires a 1 GB boot partition.

### Overhauled Amlogic Support
Amlogic support sees major improvements.

* H264/MPEG2/HEVC decoding on all boards
* VP9 decoding on all except GXBB and GXLX
* 4K UHD with HDR10/HLG on all boards except GXBB
* 8-bit output on GXBB/GXL, 10-bit output on GXM and newer
* Pass-through HDMI and HBR audio on all boards
* Pass-through S/PDIF audio on boards with optical output
* Motion-adaptive deinterlace on G12A and newer
* Software bwdif deinterlace on GXBB/GXL/GXM
* DVB-C/S/S2/T/T2 support on the handful of boards staff have

MPEG4 and VC1 decode currently lack v4l2_request uAPI to develop around but we are working on proposals with a working implementation to upstream. DVB support needs to be ground-up rewritten and this is something we will start scoping soon. S4 support is at an early stage but starting to progress.

The image name reverts to "Amlogic" to recognise that G12 and SM1 (and S4 in the future) are not 'GX' boards, and while Meson8 support continues to slowly edge forwards, there are no signs of usable AMLMX images on the horizon.

Hero credit for the reversal in Amlogic fortunes largely belongs to Claude (Fable/Opus5.5) and Codex (GPT-6.0) though staff are becoming less incompetent at persuading LLM tools to do their evil bidding and deserve a mention in dispatches.

### Hardware Updates
* **Rockchip:** Added official support for RK3588, RK3576, and RK356X boards (Orange Pi 5, Radxa Rock 5, etc.).
* **Allwinner:** Added support for H616-based devices (Orange Pi Zero 2).
* **x86 / HTPC:** Modernized driver stack for newer Intel chips and current Nvidia GPUs.

### Add-ons & Networking
* **Tailscale:** New service add-on for secure remote access and maintenance away from home.
* **Steam Link:** Added to stream games directly from your local gaming PC.
* **WPA3 Wi-Fi:** Support for modern, secure Wi-Fi networks.
* **New Emulators:** Added PlayStation 1 (SwanStation) and Nintendo 64 cores.

---

**Note for testers:** This is a beta and a major Kodi version jump. Some third-party skins and add-ons will need updates to work on Kodi 22. **Make a full backup** via the LibreELEC settings addon before updating, and report any bugs on the forum.
