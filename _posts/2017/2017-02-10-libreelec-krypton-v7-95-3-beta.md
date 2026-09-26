---
layout: post
title: "LibreELEC (Krypton) v7.95.3 BETA"
image: "img/posts/2017/beta_calm_nearlythere.png"
---

LibreELEC (Krypton) 8.0 preview releases continue with v7.95.3. This is a minor release to correct lirc issues and bring aarch64 devices (WeTek Hub/Play 2 and Odroid C2) up to Beta now that the memory fragmentation issue has been resolved. LibreELEC v7.95.3 is based upon Kodi Krypton 17.0 final. If no major issues are identified we expect 8.0.0 to be the next release.

Changes in v7.95.3 include:

- Fix systemd/timing issues that resulted in multiple instances of lirc running
- Fix repeat-delay values for eventlirc
- Fix bluez to ensure bluetooth drivers are auto-loaded
- Fix memory fragmentation issues on aarch64/x86\_64 projects
- Update to Linux 4.9.8 for RPi/Slice/Generic projects
- Update Linux support patches and firmware for Raspberry Pi
- Update u-boot for iMX6
- Update CEC support patches for iMX6
- Add backport for Kodi creation of cache folders
- Add kernel support for ADAU7002 audio modules in RPi

[View detailed changes on GitHub](https://github.com/LibreELEC/LibreELEC.tv/compare/7.95.2...7.95.3)

**BOOT PARTITION SIZE**

The LibreELEC (Krypton) 7.95.3 image for Generic x86\_64 hardware is 216MB so it fits in the 230MB boot partition size limit of older OpenELEC installations without resizing the boot partition or forcing a complete reinstallation.

**\*\* CANARY PERIOD \*\***

LibreELEC operates a 24-hour ‘canary’ period between release files being posted for download and the release being available via auto-update. During this time our LibreELEC 8.0 Alpha or Beta preview and LibreELEC 7.0.3 users can use the LibreELEC settings add-on to update manually from within the Kodi GUI. To update from older LibreELEC 7.0 releases (e.g. 7.0.2) or OpenELEC use the .tar file below.

**New installations using the LibreELEC USB-SD Creator app**

[LibreELEC.USB-SD.Creator.Linux-32bit.bin](http://releases.libreelec.tv/LibreELEC.USB-SD.Creator.Linux-32bit.bin) [(info)](http://releases.libreelec.tv/LibreELEC.USB-SD.Creator.Linux-32bit.bin?mirrorlist) [LibreELEC.USB-SD.Creator.Linux-64bit.bin](http://releases.libreelec.tv/LibreELEC.USB-SD.Creator.Linux-64bit.bin) [(info)](http://releases.libreelec.tv/LibreELEC.USB-SD.Creator.Linux-64bit.bin?mirrorlist) [LibreELEC.USB-SD.Creator.macOS.dmg](http://releases.libreelec.tv/LibreELEC.USB-SD.Creator.macOS.dmg) [(info)](http://releases.libreelec.tv/LibreELEC.USB-SD.Creator.macOS.dmg?mirrorlist) [LibreELEC.USB-SD.Creator.Win32.exe](http://releases.libreelec.tv/LibreELEC.USB-SD.Creator.Win32.exe) [(info)](http://releases.libreelec.tv/LibreELEC.USB-SD.Creator.Win32.exe?mirrorlist)

**New installation using 3rd party USB or SD writer apps (.img.gz)**

[LibreELEC-Generic.x86\_64-7.95.3.img.gz](http://releases.libreelec.tv/LibreELEC-Generic.x86_64-7.95.3.img.gz) ([info](http://releases.libreelec.tv/LibreELEC-Generic.x86_64-7.95.3.img.gz?mirrorlist)) [LibreELEC-RPi.arm-7.95.3.img.gz](http://releases.libreelec.tv/LibreELEC-RPi.arm-7.95.3.img.gz) ([info](http://releases.libreelec.tv/LibreELEC-RPi.arm-7.95.3.img.gz?mirrorlist)) [LibreELEC-RPi2.arm-7.95.3.img.gz](http://releases.libreelec.tv/LibreELEC-RPi2.arm-7.95.3.img.gz) ([info](http://releases.libreelec.tv/LibreELEC-RPi2.arm-7.95.3.img.gz?mirrorlist)) [LibreELEC-imx6.arm-7.95.3.img.gz](http://releases.libreelec.tv/LibreELEC-imx6.arm-7.95.3.img.gz) ([info](http://releases.libreelec.tv/LibreELEC-imx6.arm-7.95.3.img.gz?mirrorlist)) [LibreELEC-Odroid\_C2.aarch64-7.95.3.img.gz](http://releases.libreelec.tv/LibreELEC-Odroid_C2.aarch64-7.95.3.img.gz) ([info](http://releases.libreelec.tv/LibreELEC-Odroid_C2.aarch64-7.95.3.img.gz?mirrorlist)) [LibreELEC-WeTek\_Play.arm-7.95.3.img.gz](http://releases.libreelec.tv/LibreELEC-WeTek_Play.arm-7.95.3.img.gz) ([info](http://releases.libreelec.tv/LibreELEC-WeTek_Play.arm-7.95.3.img.gz?mirrorlist)) [LibreELEC-WeTek\_Core.arm-7.95.3.img.gz](http://releases.libreelec.tv/LibreELEC-WeTek_Core.arm-7.95.3.img.gz) ([info](http://releases.libreelec.tv/LibreELEC-WeTek_Core.arm-7.95.3.img.gz?mirrorlist)) [LibreELEC-WeTek\_Hub.aarch64-7.95.3.img.gz](http://releases.libreelec.tv/LibreELEC-WeTek_Hub.aarch64-7.95.3.img.gz) ([info](http://releases.libreelec.tv/LibreELEC-WeTek_Hub.aarch64-7.95.3.img.gz?mirrorlist)) [LibreELEC-WeTek\_Play\_2.aarch64-7.95.3.img.gz](http://releases.libreelec.tv/LibreELEC-WeTek_Play_2.aarch64-7.95.3.img.gz) ([info](http://releases.libreelec.tv/LibreELEC-WeTek_Play_2.aarch64-7.95.3.img.gz?mirrorlist))

**New Install to WeTek internal NAND (.zip)**

[LibreELEC-WeTek\_Play.arm-7.95.3.zip](http://releases.libreelec.tv/LibreELEC-WeTek_Play.arm-7.95.3.zip) ([info](http://releases.libreelec.tv/LibreELEC-WeTek_Play.arm-7.95.3.zip?mirrorlist)) [LibreELEC-WeTek\_Core.arm-7.95.3.zip](http://releases.libreelec.tv/LibreELEC-WeTek_Core.arm-7.95.3.zip) ([info](http://releases.libreelec.tv/LibreELEC-WeTek_Core.arm-7.95.3.zip?mirrorlist)) [LibreELEC-WeTek\_Hub.aarch64-7.95.3.zip](http://releases.libreelec.tv/LibreELEC-WeTek_Hub.aarch64-7.95.3.zip) ([info](http://releases.libreelec.tv/LibreELEC-WeTek_Hub.aarch64-7.95.3.zip?mirrorlist)) [LibreELEC-WeTek\_Play\_2.aarch64-7.95.3.zip](http://releases.libreelec.tv/LibreELEC-WeTek_Play_2.aarch64-7.95.3.zip) ([info](http://releases.libreelec.tv/LibreELEC-WeTek_Play_2.aarch64-7.95.3.zip?mirrorlist))

**Manual Update from LibreELEC 7.0 or OpenELEC (.tar)**

[LibreELEC-Generic.x86\_64-7.95.3.tar](http://releases.libreelec.tv/LibreELEC-Generic.x86_64-7.95.3.tar) ([info](http://releases.libreelec.tv/LibreELEC-Generic.x86_64-7.95.3.tar?mirrorlist)) [LibreELEC-RPi.arm-7.95.3.tar](http://releases.libreelec.tv/LibreELEC-RPi.arm-7.95.3.tar) ([info](http://releases.libreelec.tv/LibreELEC-RPi.arm-7.95.3.tar?mirrorlist)) [LibreELEC-RPi2.arm-7.95.3.tar](http://releases.libreelec.tv/LibreELEC-RPi2.arm-7.95.3.tar) ([info](http://releases.libreelec.tv/LibreELEC-RPi2.arm-7.95.3.tar?mirrorlist)) [LibreELEC-imx6.arm-7.95.3.tar](http://releases.libreelec.tv/LibreELEC-imx6.arm-7.95.3.tar) ([info](http://releases.libreelec.tv/LibreELEC-imx6.arm-7.95.3.tar?mirrorlist)) [LibreELEC-Odroid\_C2.aarch64-7.95.3.tar](http://releases.libreelec.tv/LibreELEC-Odroid_C2.aarch64-7.95.3.tar) ([info](http://releases.libreelec.tv/LibreELEC-Odroid_C2.aarch64-7.95.3.tar?mirrorlist)) [LibreELEC-WeTek\_Play.arm-7.95.3.tar](http://releases.libreelec.tv/LibreELEC-WeTek_Play.arm-7.95.3.tar) ([info](http://releases.libreelec.tv/LibreELEC-WeTek_Play.arm-7.95.3.tar?mirrorlist)) [LibreELEC-WeTek\_Core.arm-7.95.3.tar](http://releases.libreelec.tv/LibreELEC-WeTek_Core.arm-7.95.3.tar) ([info](http://releases.libreelec.tv/LibreELEC-WeTek_Core.arm-7.95.3.tar?mirrorlist)) [LibreELEC-WeTek\_Hub.arm-7.95.3.tar](http://releases.libreelec.tv/LibreELEC-WeTek_Hub.aarch64-7.95.3.tar) ([info](http://releases.libreelec.tv/LibreELEC-WeTek_Hub.aarch64-7.95.3.tar?mirrorlist)) [LibreELEC-WeTek\_Play\_2.arm-7.95.3.tar](http://releases.libreelec.tv/LibreELEC-WeTek_Play_2.aarch64-7.95.3.tar) ([info](http://releases.libreelec.tv/LibreELEC-WeTek_Play_2.aarch64-7.95.3.tar?mirrorlist))

**SUPPORT ASSISTANCE AND BUG REPORTS**

Please flag issues via a [bug report in the forums](http://forum.libreelec.tv/forum-35.html). You are also encouraged to participate in LibreELEC development and [submit fixes via GitHub!](https://github.com/LibreELEC/LibreELEC.tv)

{% include paypal.html %}
