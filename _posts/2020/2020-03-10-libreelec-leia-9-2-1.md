---
layout: post
title: "LibreELEC (Leia) 9.2.1"
image: "img/posts/2020/9.2.1.jpg"
---

**LibreELEC 9.2.1 (Leia)** the final version has arrived based upon Kodi v18.6, the 9.2.1 release contains many changes and refinements to user experience and a complete overhaul of the underlying OS core to improve stability and extend hardware support compared to the LE 9.0 release.  

**Changes since 9.2.0:**

- WireGuard support added to settings
- improvements for the RPi4
- serveral minor updates

**Change for Raspberry 4:**

With LE 9.1.002 and later you need to add _"**hdmi\_enable\_4kp60=1**"_ to your config.txt if you want to use 4k output at the RPi4. Before you needed _"**hdmi\_enable\_4k=1**"_ that is now deprecated.

**Raspberry 4:**

It would be nice to have the 4B running the latest mainline kernel as other devices in LibreELEC 9.2, but adding support for an all-newSoC chipset is a huge effort and the Pi Foundation needed to align initial 4B software with the current Raspbian release to maximise compatibility with existing software and to keep the workload sensible. Generic x86/64 devices are running Linux 5.1, while Raspberry Pi devices (0/1/2/3/4) are using Linux 4.19 with some new/extra code.

In this initial release 1080p playback behaviour and performance on the 4B are broadly on-par with the previous 3B/3B+ model, except for HEVC media which is now hardware decoded and massively improved. New 4K video capabilities still have plenty of rough edges to be smoothed out, but the Pi Foundation developers have been pushing fixes to the test team at a phenomenal rate over the last month and that will continue as the userbase expands.

The 4B now uses SPI flash for the bootloader. Current firmware supports SD card boot only - Network and USB booting are still on the Pi Foundation to-do list. Also on the list is HBR audio (current audio capabilities are the same as the 3B) and 3D video. The 4B hardware is HDR capable, but software support has a dependency on the new Linux kernel frameworks merged by Intel developers (with help from Team LibreELEC/Kodi) in Linux 5.2 and a kernel bump will be needed to use them. Once the initial excitement and activity from the 4B launch calms down, serious work on HDR and transitioning Raspberry Pi over to the new GBM/V4L2 video pipeline can start.

**Rockchip:**

Our Rockchip releases remain in an state with limited support. The Kodi version is updated but there are no significant video/audio improvements to the Rockchip 4.4 kernel codebase - and none planned. Our work on Rockchip support has refocussed onto the Linux 5.x kernel to use the modern kernel frameworks needed for the next-generation Kodi video pipeline. This work is progressing nicely, but it means the 4.4 codebase "is what it is" until a future kernel bump.

**Amlogic**

Our original goal was to announce Allwinner and Amlogic images alongside Rockchip as part of the LibreELEC 9.2 release, but while overall readiness has greatly improved in recent months – each has specific technical challenges to overcome before they meet our basic critera for a public release. On the human side of the project several maintainers also have reduced availability for support due to work and family commitments. Combining these factors together, the team felt it was better to be patient and not rush releases.  
  
So instead of releasing LibreELEC 9.2 stable images, we are announcing the start of official nightly images from our master development branch.

If you experience problems, please open an thread at our [forum](https://forum.libreelec.tv). You can also open an ticket at our [issue tracker](https://forum.libreelec.tv/core/ticketsystem/).

**Upgrading**

On first boot the Kodi media database will be upgraded. Depending on your hardware and media collection size this could take several minutes. Please be patient.

**Downloads**

[**Click here to go to the download page.**](https://libreelec.tv/downloads_new/)
