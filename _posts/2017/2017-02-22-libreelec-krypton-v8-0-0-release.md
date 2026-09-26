---
layout: post
title: "LibreELEC (Krypton) v8.0.0 RELEASE"
image: "img/posts/2017/release_800a.jpg"
---

LibreELEC (Krypton) 8.0.0 has arrived after a long gestation period encompassing 10x official alpha and 3x beta releases in addition to 200+ nightly milhouse builds. Based upon Kodi v17.0, our 8.0.0 release contains many small refinements to our user experience and a complete overhaul of the underlying OS core to enhance stability and extend hardware support. For a description of new features and changes in Kodi please read [the official Kodi v17.0 release notice](https://kodi.tv/kodi17/).

Changes since 7.95.3 include:

- Fix for TVheadend issues in the WeTek Play 2 DVB driver
- Fix for interactive governor causing slowdown issues on the WeTek Core
- Fix for missing Bluetooth "connect and trust" option when pairing
- Fix for missing ir-keytable streamzap support after recent changes
- Updates to refine lirc repeat timing changes
- Update WeTek Play 2 remote keymap to expose more buttons
- Updates to linux-amlogic 3.10 (arm) and 3.14 (aarch64) kernels
- Add hexdump busybox applet needed for Odroid\_C2 overclocking

[View detailed changes on GitHub](https://github.com/LibreELEC/LibreELEC.tv/compare/7.95.3...8.0.0)

**BOOT PARTITION SIZE**

The LibreELEC (Krypton) 8.0.0 image for Generic x86\_64 hardware is 216MB so it fits in the 230MB boot partition size limit of older OpenELEC installations without resizing the boot partition or forcing a complete reinstallation.

**AMLOGIC MIXED-ARCH BUILDS**

If you have been using community created mixed-arch builds for Odroid C2, WeTek Hub and Play 2 (aarch64 kernel with 32-bit userspace) and want to revert to official builds you must remove 32-bit binary add-ons before updating as they will not run. You will also need to run "touch /storage/.update/.nocompat" to override the CPU arch check in the update process else it detects a mismatch and aborts. If you are currently using official builds there is nothing to do - update as normal.

**SYNC PLAYBACK TO DISPLAY**

Kodi Krypton requires the video clock for pass-through audio synchronisation. If you have enabled "Sync Playback to Display" Kodi is forced to use the display clock. This automatically disables pass-through, and audio is output as PCM remixed to the defined 2.0, 5.1, etc. channel configuration. This difference from Kodi Jarvis is responsible for ~99% of "pass-through audio not working after update" reports.

**BUGS AND FIXES**

Thanks to the large number of users who tested and provided feedback on Alpha and Beta builds we are confident there are no major issues in 8.0.0, but v8.0.1 is tentatively scheduled in 2-3 weeks to resolve anything that needs attention.

**SUPPORT FOR OLDER RELEASES**

It is now ~12 months since Kodi Jarvis was released and ~8 months since our developer team switched attention to Kodi Krypton. If you experience an issue on LibreELEC 7.0.x builds please update to 8.0.0 and re-test first, before [reporting the problem via the forums](http://forum.libreelec.tv/forum-35.html).

**\*\* CANARY PERIOD \*\***

LibreELEC operates a 24-hour ‘canary’ period between release files being posted for download and the release being available via auto-update.

**Update: We have seen reports of boxes getting stuck on the Krypton splash screen after updating. Removing /storage/.kodi/userdata/Databases/Addons27.db manually allows Kodi to complete migration but add-ons will need to be re-enabled afterwards. The bug has been reported to Kodi. Auto-update will not be available until the issue is resolved. If you do not experience the issue when updating, do not delete the Addons27.db file!**

During this time our LibreELEC 8.0 Alpha or Beta preview and 7.0.3 users can use the LibreELEC settings add-on to update manually from within the Kodi GUI. To update from older LibreELEC 7.0 releases (e.g. 7.0.2) or OpenELEC use the .tar file below.

**New installations using the LibreELEC USB-SD Creator app**

[LibreELEC.USB-SD.Creator.Linux-32bit.bin](http://releases.libreelec.tv/LibreELEC.USB-SD.Creator.Linux-32bit.bin) [(info)](http://releases.libreelec.tv/LibreELEC.USB-SD.Creator.Linux-32bit.bin?mirrorlist) [LibreELEC.USB-SD.Creator.Linux-64bit.bin](http://releases.libreelec.tv/LibreELEC.USB-SD.Creator.Linux-64bit.bin) [(info)](http://releases.libreelec.tv/LibreELEC.USB-SD.Creator.Linux-64bit.bin?mirrorlist) [LibreELEC.USB-SD.Creator.macOS.dmg](http://releases.libreelec.tv/LibreELEC.USB-SD.Creator.macOS.dmg) [(info)](http://releases.libreelec.tv/LibreELEC.USB-SD.Creator.macOS.dmg?mirrorlist) [LibreELEC.USB-SD.Creator.Win32.exe](http://releases.libreelec.tv/LibreELEC.USB-SD.Creator.Win32.exe) [(info)](http://releases.libreelec.tv/LibreELEC.USB-SD.Creator.Win32.exe?mirrorlist)

**New installation using 3rd party USB or SD writer apps (.img.gz)**

[LibreELEC-Generic.x86\_64-8.0.0.img.gz](http://releases.libreelec.tv/LibreELEC-Generic.x86_64-8.0.0.img.gz) ([info](http://releases.libreelec.tv/LibreELEC-Generic.x86_64-8.0.0.img.gz?mirrorlist)) [LibreELEC-RPi.arm-8.0.0.img.gz](http://releases.libreelec.tv/LibreELEC-RPi.arm-8.0.0.img.gz) ([info](http://releases.libreelec.tv/LibreELEC-RPi.arm-8.0.0.img.gz?mirrorlist)) [LibreELEC-RPi2.arm-8.0.0.img.gz](http://releases.libreelec.tv/LibreELEC-RPi2.arm-8.0.0.img.gz) ([info](http://releases.libreelec.tv/LibreELEC-RPi2.arm-8.0.0.img.gz?mirrorlist)) [LibreELEC-imx6.arm-8.0.0.img.gz](http://releases.libreelec.tv/LibreELEC-imx6.arm-8.0.0.img.gz) ([info](http://releases.libreelec.tv/LibreELEC-imx6.arm-8.0.0.img.gz?mirrorlist)) [LibreELEC-Odroid\_C2.aarch64-8.0.0.img.gz](http://releases.libreelec.tv/LibreELEC-Odroid_C2.aarch64-8.0.0.img.gz) ([info](http://releases.libreelec.tv/LibreELEC-Odroid_C2.aarch64-8.0.0.img.gz?mirrorlist)) [LibreELEC-WeTek\_Play.arm-8.0.0.img.gz](http://releases.libreelec.tv/LibreELEC-WeTek_Play.arm-8.0.0.img.gz) ([info](http://releases.libreelec.tv/LibreELEC-WeTek_Play.arm-8.0.0.img.gz?mirrorlist)) [LibreELEC-WeTek\_Core.arm-8.0.0.img.gz](http://releases.libreelec.tv/LibreELEC-WeTek_Core.arm-8.0.0.img.gz) ([info](http://releases.libreelec.tv/LibreELEC-WeTek_Core.arm-8.0.0.img.gz?mirrorlist)) [LibreELEC-WeTek\_Hub.aarch64-8.0.0.img.gz](http://releases.libreelec.tv/LibreELEC-WeTek_Hub.aarch64-8.0.0.img.gz) ([info](http://releases.libreelec.tv/LibreELEC-WeTek_Hub.aarch64-8.0.0.img.gz?mirrorlist)) [LibreELEC-WeTek\_Play\_2.aarch64-8.0.0.img.gz](http://releases.libreelec.tv/LibreELEC-WeTek_Play_2.aarch64-8.0.0.img.gz) ([info](http://releases.libreelec.tv/LibreELEC-WeTek_Play_2.aarch64-8.0.0.img.gz?mirrorlist))

**New Install to WeTek internal NAND (.zip)**

[LibreELEC-WeTek\_Play.arm-8.0.0.zip](http://releases.libreelec.tv/LibreELEC-WeTek_Play.arm-8.0.0.zip) ([info](http://releases.libreelec.tv/LibreELEC-WeTek_Play.arm-8.0.0.zip?mirrorlist)) [LibreELEC-WeTek\_Core.arm-8.0.0.zip](http://releases.libreelec.tv/LibreELEC-WeTek_Core.arm-8.0.0.zip) ([info](http://releases.libreelec.tv/LibreELEC-WeTek_Core.arm-8.0.0.zip?mirrorlist)) [LibreELEC-WeTek\_Hub.aarch64-8.0.0.zip](http://releases.libreelec.tv/LibreELEC-WeTek_Hub.aarch64-8.0.0.zip) ([info](http://releases.libreelec.tv/LibreELEC-WeTek_Hub.aarch64-8.0.0.zip?mirrorlist)) [LibreELEC-WeTek\_Play\_2.aarch64-8.0.0.zip](http://releases.libreelec.tv/LibreELEC-WeTek_Play_2.aarch64-8.0.0.zip) ([info](http://releases.libreelec.tv/LibreELEC-WeTek_Play_2.aarch64-8.0.0.zip?mirrorlist))

**Manual Update from LibreELEC 7.0 or OpenELEC (.tar)**

[LibreELEC-Generic.x86\_64-8.0.0.tar](http://releases.libreelec.tv/LibreELEC-Generic.x86_64-8.0.0.tar) ([info](http://releases.libreelec.tv/LibreELEC-Generic.x86_64-8.0.0.tar?mirrorlist)) [LibreELEC-RPi.arm-8.0.0.tar](http://releases.libreelec.tv/LibreELEC-RPi.arm-8.0.0.tar) ([info](http://releases.libreelec.tv/LibreELEC-RPi.arm-8.0.0.tar?mirrorlist)) [LibreELEC-RPi2.arm-8.0.0.tar](http://releases.libreelec.tv/LibreELEC-RPi2.arm-8.0.0.tar) ([info](http://releases.libreelec.tv/LibreELEC-RPi2.arm-8.0.0.tar?mirrorlist)) [LibreELEC-imx6.arm-8.0.0.tar](http://releases.libreelec.tv/LibreELEC-imx6.arm-8.0.0.tar) ([info](http://releases.libreelec.tv/LibreELEC-imx6.arm-8.0.0.tar?mirrorlist)) [LibreELEC-Odroid\_C2.aarch64-8.0.0.tar](http://releases.libreelec.tv/LibreELEC-Odroid_C2.aarch64-8.0.0.tar) ([info](http://releases.libreelec.tv/LibreELEC-Odroid_C2.aarch64-8.0.0.tar?mirrorlist)) [LibreELEC-WeTek\_Play.arm-8.0.0.tar](http://releases.libreelec.tv/LibreELEC-WeTek_Play.arm-8.0.0.tar) ([info](http://releases.libreelec.tv/LibreELEC-WeTek_Play.arm-8.0.0.tar?mirrorlist)) [LibreELEC-WeTek\_Core.arm-8.0.0.tar](http://releases.libreelec.tv/LibreELEC-WeTek_Core.arm-8.0.0.tar) ([info](http://releases.libreelec.tv/LibreELEC-WeTek_Core.arm-8.0.0.tar?mirrorlist)) [LibreELEC-WeTek\_Hub.arm-8.0.0.tar](http://releases.libreelec.tv/LibreELEC-WeTek_Hub.aarch64-8.0.0.tar) ([info](http://releases.libreelec.tv/LibreELEC-WeTek_Hub.aarch64-8.0.0.tar?mirrorlist)) [LibreELEC-WeTek\_Play\_2.arm-8.0.0.tar](http://releases.libreelec.tv/LibreELEC-WeTek_Play_2.aarch64-8.0.0.tar) ([info](http://releases.libreelec.tv/LibreELEC-WeTek_Play_2.aarch64-8.0.0.tar?mirrorlist))

{% include paypal.html %}
