---
layout: post
title: "LibreELEC 13.0 BETA1"
description: "Backup first, ask questions later. LE13 BETA1 is here!"
---

# LibreELEC 13.0 BETA1

The first LibreELEC 13.0 beta is now available bringing Kodi v22 (Piers) RC2 and major hardware and feature updates for all supported platforms:

### Kodi v22 (Piers)
While many of the improvements are hidden under-the-hood, here are changes you'll notice in daily use:
* Movie Extras: Trailers, Deleted Scenes, and Bonus Clips play from the movie info screen
* Chapter Skip: Press Up/Down during playback to move between chapters/bookmarks
* Blu-ray Handling: Menu handling and detection of the main feature is much improved
* Artwork Cleanup: Orphaned posters and fanart are automatically removed
* Playback: Faster stream start and improved 4K HDR colour support
* HDR: Subtitles and OSD screens are tonemapped to reduce brightness
* Audio: Numerous fixes for audio sync issues after seek
* Gaming: Support for RetroAchievements, multi-disc games, and built-in cheats

### Flatpak
We support flatpak apps and Brave, Chrome, and Firefox browser add-ons can be installed from the LibreELEC repo. Flatpak improves browser 
support with hardware decoding and multi-channel audio. Flatpak add-ons are available for all 64-bit devices.

### Remotes
Kodi remote handling no longer uses 'Lircmap.xml' and 'remote.xml' so remote configurations may need to be adapted.

### Retroplayer
Kodi v22 supports many new emulator cores including PlayStation(1) and Nintendo64, and these are now available from the LibreELEC add-on repo.

### Add-ons
* Tailscale has been added for secure remote access and mesh networking
* Steam Link allows you to stream games from a local Gaming PC

### Allwinner
Overall support is improved and we have added support for H616 devices.

### Amlogic
The image is renamed to 'Amlogic' and we added support for S4 hardware. Amlogic sees a massive improvement to media capabilities:
* Hardware decode for H264/MPEG2/HEVC/VC1 on all boards
* Hardware decode for VP9 on GXL and newer, and AV1 on S4
* Motion adaptive hardware deinterlace on G12A and newer
* 4K UHD with HDR10/HLG on all boards except GXBB
* 8-bit output on GXBB/GXL, 10-bit on GXM and newer
* Pass-through HDMI and S/PDIF audio on all boards
* DVB-C/S/S2/T/T2 support on the handful of boards staff have 

In short: images now have ~95% feature parity with legacy vendor kernel images and playback is robust. We have authored a mountain of kernel drivers 
and we are slowly expanding support to newer chipsets.

### Generic
* Generic (GBM) adds support for nVidia 580.xx compatible GPUs
* Generic Legacy (X11) is discontinued

Including nVidia drivers increases the Generic image size significantly and 13.0 requires a 1GB boot partition. If you have a smaller boot partition 
updates will abort. The fastest way to increase boot partition size is Backup > Reinstall > Restore. Shrink > Move > Expand of partitions can also 
be done but is 10x slower.

The Legacy image is discontinued because the nVidia 340.xx drivers (EOS since 2018) no longer compile against current Xorg server releases, and better
browser support via Flatpak removed the last justification to continue the image. Users with AMD and Intel GPUs can swap to the Generic (non-Legacy) 
image. Users with nVidia GPUs must refer to nVidia documentation for the 580.xx driver series to check the GPU is supported. Also note that the latest
nVidia drivers (590.xx and up) drop support for pre-RTX cards and this bump will be necessary in future LibreELEC releases.
 
### Raspberry Pi
Nothing to report for RPi images. Nothing was broken. Nothing needed to be fixed :)

### Rockchip
Images are not available for BETA1 due to some lingering issues and lack of developer time. We hope to include them for BETA2.
* RK3566, RK3568, RK3576, RK3588 support is added
* RK3288 support is discontinued
* Hardware deinterlacing on all boards

---

NOTE: This is a BETA release with a Kodi major-version change. Third-party skins and add-ons may need updates for Kodi v22. 
Kodi does not support downgrades so please make a backup before updating. Bugs should be reported in the forum.
