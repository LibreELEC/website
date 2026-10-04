---
layout: post
title: "LibreELEC 13 Beta 1"
description: "Backup first, ask questions later. LE13 Beta 1 is here!"
---

# LibreELEC 13 Beta 1

LibreELEC 13 Beta 1 is now available for testing. This release moves our base to the upcoming **Kodi 22 (Piers)** and brings major hardware and driver updates across all platforms.

### Kodi 22 Highlights
* **Dimmed HDR Subtitles:** Subtitles now dim to match the scene’s brightness instead of glaring in dark rooms.
* **Native Movie Extras:** Watch trailers, deleted scenes, and bonus clips directly from the movie page.
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
Amlogic TV boxes have been moved to modern upstream Linux drivers, dropping years of old vendor patches. This brings significantly better playback stability on high-bitrate video and reliable support for USB and PCIe TV tuners (DVB).

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
