---
layout: post
title: "LibreELEC (Krypton) v7.95.2 BETA"
image: "img/posts/2017/beta_7952.png"
---

LibreELEC (Krypton) 8.0 preview releases continue with v7.95.2 available for all build projects except Amlogic aarch64 devices. LibreELEC v7.95.2 is based upon Kodi Krypton 17.0 final. If no major issues are identified we expect 8.0.0 to be the next release.

Changes in v7.95.2 include:

- Fix media\_build issues with some IR drivers
- Fix an issue with taglib and mp3 streams
- Fix TT-S2-3600 DVB device
- Update to DVB firmware
- Update to Raspberry Pi firmware
- Update to Linux support patches for Raspberry Pi
- Update to Kodi v17.0 final
- Update to LibreELEC settings 0.8.8 to fix minor cosmetic issues

[View detailed changes on GitHub](https://github.com/LibreELEC/LibreELEC.tv/compare/7.95.1...7.95.2)

**AARCH64 MEMLEAK**

Amlogic aarch64 projects (WeTek Hub, WeTek Play 2, and Odroid C2) are still excluded from Beta due to a memory leak issue. Although we have not identified the root cause, we have eliminated a number of areas from suspicion and are now focussed on the integration between Kodi and ffmpeg. We have also identified several issues with kernel memory management are are now testing changes to resolve them. If the memleak is fixed before 8.0.0 release we will provide a 7.95.2 build. If it is not fixed before 8.0.0 there will be an Alpha release for aarch64 approx. ~48 hours after 8.0.0 with a Beta for aarch64 once the issue is resolved. The team thanks our aarch64 users for being patient while we work the problem and follow a proper testing and release process.

**Update 7/2/2016:** The memory leak turns out to be a memory fragmentation issue (not actually a leak) and there is a simple workaround we can use until a full fix (some Kodi plumbing required) arrives in the future. Solving this has been a genuine team effort, with many eyeballs burning midnight oil and CPU cycles to eliminate ideas and progressively narrow the focus of the investigation. Kudos for the final Eureka! moment belongs to @popcornmix from the Pi Foundation staff. There will now be a 7.95.3 Beta release to prove this and other fixes for issues with remote controls in Generic builds that must be road-tested before we move forwards to 8.0.0 release.

**BOOT PARTITION SIZE**

The LibreELEC (Krypton) 7.95.2 image for Generic x86\_64 hardware is 216MB so it fits in the 230MB boot partition size limit of older OpenELEC installations without resizing the boot partition or forcing a complete reinstallation.

**\*\* CANARY PERIOD \*\***

LibreELEC operates a 24-hour ‘canary’ period between release files being posted for download and the release being available via auto-update. During this time our LibreELEC 8.0 Alpha or Beta preview and LibreELEC 7.0.3 users can use the LibreELEC settings add-on to update manually from within the Kodi GUI. To update from older LibreELEC 7.0 releases (e.g. 7.0.2) or OpenELEC use the .tar file below.

**New installations using the LibreELEC USB-SD Creator app**

[LibreELEC.USB-SD.Creator.Linux-32bit.bin](http://releases.libreelec.tv/LibreELEC.USB-SD.Creator.Linux-32bit.bin) [(info)](http://releases.libreelec.tv/LibreELEC.USB-SD.Creator.Linux-32bit.bin?mirrorlist) [LibreELEC.USB-SD.Creator.Linux-64bit.bin](http://releases.libreelec.tv/LibreELEC.USB-SD.Creator.Linux-64bit.bin) [(info)](http://releases.libreelec.tv/LibreELEC.USB-SD.Creator.Linux-64bit.bin?mirrorlist) [LibreELEC.USB-SD.Creator.macOS.dmg](http://releases.libreelec.tv/LibreELEC.USB-SD.Creator.macOS.dmg) [(info)](http://releases.libreelec.tv/LibreELEC.USB-SD.Creator.macOS.dmg?mirrorlist) [LibreELEC.USB-SD.Creator.Win32.exe](http://releases.libreelec.tv/LibreELEC.USB-SD.Creator.Win32.exe) [(info)](http://releases.libreelec.tv/LibreELEC.USB-SD.Creator.Win32.exe?mirrorlist)

**New installation using 3rd party USB or SD writer apps (.img.gz)**

[LibreELEC-Generic.x86\_64-7.95.2.img.gz](http://releases.libreelec.tv/LibreELEC-Generic.x86_64-7.95.2.img.gz) ([info](http://releases.libreelec.tv/LibreELEC-Generic.x86_64-7.95.2.img.gz?mirrorlist)) [LibreELEC-RPi.arm-7.95.2.img.gz](http://releases.libreelec.tv/LibreELEC-RPi.arm-7.95.2.img.gz) ([info](http://releases.libreelec.tv/LibreELEC-RPi.arm-7.95.2.img.gz?mirrorlist)) [LibreELEC-RPi2.arm-7.95.2.img.gz](http://releases.libreelec.tv/LibreELEC-RPi2.arm-7.95.2.img.gz) ([info](http://releases.libreelec.tv/LibreELEC-RPi2.arm-7.95.2.img.gz?mirrorlist)) [LibreELEC-imx6.arm-7.95.2.img.gz](http://releases.libreelec.tv/LibreELEC-imx6.arm-7.95.2.img.gz) ([info](http://releases.libreelec.tv/LibreELEC-imx6.arm-7.95.2.img.gz?mirrorlist)) [LibreELEC-WeTek\_Play.arm-7.95.2.img.gz](http://releases.libreelec.tv/LibreELEC-WeTek_Play.arm-7.95.2.img.gz) ([info](http://releases.libreelec.tv/LibreELEC-WeTek_Play.arm-7.95.2.img.gz?mirrorlist)) [LibreELEC-WeTek\_Core.arm-7.95.2.img.gz](http://releases.libreelec.tv/LibreELEC-WeTek_Core.arm-7.95.2.img.gz) ([info](http://releases.libreelec.tv/LibreELEC-WeTek_Core.arm-7.95.2.img.gz?mirrorlist))

**New Install to WeTek internal NAND (.zip)**

[LibreELEC-WeTek\_Play.arm-7.95.2.zip](http://releases.libreelec.tv/LibreELEC-WeTek_Play.arm-7.95.2.zip) ([info](http://releases.libreelec.tv/LibreELEC-WeTek_Play.arm-7.95.2.zip?mirrorlist)) [LibreELEC-WeTek\_Core.arm-7.95.2.zip](http://releases.libreelec.tv/LibreELEC-WeTek_Core.arm-7.95.2.zip) ([info](http://releases.libreelec.tv/LibreELEC-WeTek_Core.arm-7.95.2.zip?mirrorlist))

**Manual Update from LibreELEC 7.0 or OpenELEC (.tar)**

[LibreELEC-Generic.x86\_64-7.95.2.tar](http://releases.libreelec.tv/LibreELEC-Generic.x86_64-7.95.2.tar) ([info](http://releases.libreelec.tv/LibreELEC-Generic.x86_64-7.95.2.tar?mirrorlist)) [LibreELEC-RPi.arm-7.95.2.tar](http://releases.libreelec.tv/LibreELEC-RPi.arm-7.95.2.tar) ([info](http://releases.libreelec.tv/LibreELEC-RPi.arm-7.95.2.tar?mirrorlist)) [LibreELEC-RPi2.arm-7.95.2.tar](http://releases.libreelec.tv/LibreELEC-RPi2.arm-7.95.2.tar) ([info](http://releases.libreelec.tv/LibreELEC-RPi2.arm-7.95.2.tar?mirrorlist)) [LibreELEC-imx6.arm-7.95.2.tar](http://releases.libreelec.tv/LibreELEC-imx6.arm-7.95.2.tar) ([info](http://releases.libreelec.tv/LibreELEC-imx6.arm-7.95.2.tar?mirrorlist)) [LibreELEC-WeTek\_Play.arm-7.95.2.tar](http://releases.libreelec.tv/LibreELEC-WeTek_Play.arm-7.95.2.tar) ([info](http://releases.libreelec.tv/LibreELEC-WeTek_Play.arm-7.95.2.tar?mirrorlist)) [LibreELEC-WeTek\_Core.arm-7.95.2.tar](http://releases.libreelec.tv/LibreELEC-WeTek_Core.arm-7.95.2.tar) ([info](http://releases.libreelec.tv/LibreELEC-WeTek_Core.arm-7.95.2.tar?mirrorlist))

**SUPPORT ASSISTANCE AND BUG REPORTS**

Please flag issues via a [bug report in the forums](http://forum.libreelec.tv/forum-35.html). You are also encouraged to participate in LibreELEC development and [submit fixes via GitHub!](https://github.com/LibreELEC/LibreELEC.tv)

{% include paypal.html %}
