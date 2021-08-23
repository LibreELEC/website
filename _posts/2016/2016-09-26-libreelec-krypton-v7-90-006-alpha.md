---
layout: post
title: "LibreELEC (Krypton) v7.90.006 ALPHA"
image: "img/posts/2016/alfa_v6.png"
---

LibreELEC (Krypton) 8.0 preview builds continue with v7.90.006 containing Kodi v17.0-beta2. The Kodi developers are still submitting changes in volume so our current plan is to hold in Alpha until Kodi reaches RC1. The iMX6 build is not currently available as testing has not completed. Changes in v7.90.006 include:

- Fix root ownership of /storage during netboot
- Fix power-off behaviour on iMX6 (CEC ignore TV off)
- Fix power-off behaviour on WeTek Hub
- Fix kmsg text before boot splash on Odroid C2
- Fix advancedsettings.xml options on WeTek Hub/Core/Play
- Update Raspberry Pi Linux and Kodi support patches
- Update core builds to Linux 4.7.4
- Update to our own linux-amlogic 3.10 kernel
- Update to our own linux-amlogic 3.14 kernel
- Update a large number of other misc. packages
- Update RTL8192EU driver
- Update AMD GPU driver(s)
- Update iMX6 to use LZO squashfs compression
- Update remote keymap for WeTek Hub
- Update WeTek Hub/Core/Play to use interactive governor
- Add support for newer ChromeOS hardware
- Add support for HK RTC shield on Odroid C2
- Add support for GPIO fan control on TBS Matrix boxes
- Add support for 'run' mode in USB installer for Live Mode testing
- Add initial support for HD audio formats on Odroid C2 and WeTek Hub
- Add LibreELEC settings to Kodi settings menu (see below)
- Remove LibreELEC settings from home-screen navigation (see above)

[View detailed changes on GitHub](https://github.com/LibreELEC/LibreELEC.tv/compare/7.90.005...7.90.006)

**LibreELEC SETTINGS**

Please note the last two lines in the list above. The LibreELEC settings add-on has not disappeared, it has moved from the home screen menu into Kodi settings.

**New installation via USB or SD card media**

[LibreELEC.USB-SD.Creator.Linux-32bit.bin](http://releases.libreelec.tv/LibreELEC.USB-SD.Creator.Linux-32bit.bin) [(info)](http://releases.libreelec.tv/LibreELEC.USB-SD.Creator.Linux-32bit.bin?mirrorlist) [LibreELEC.USB-SD.Creator.Linux-64bit.bin](http://releases.libreelec.tv/LibreELEC.USB-SD.Creator.Linux-64bit.bin) [(info)](http://releases.libreelec.tv/LibreELEC.USB-SD.Creator.Linux-64bit.bin?mirrorlist) [LibreELEC.USB-SD.Creator.macOS.dmg](http://releases.libreelec.tv/LibreELEC.USB-SD.Creator.macOS.dmg) [(info)](http://releases.libreelec.tv/LibreELEC.USB-SD.Creator.macOS.dmg?mirrorlist) [LibreELEC.USB-SD.Creator.Win32.exe](http://releases.libreelec.tv/LibreELEC.USB-SD.Creator.Win32.exe) [(info)](http://releases.libreelec.tv/LibreELEC.USB-SD.Creator.Win32.exe?mirrorlist)

**New installation using 3rd party USB or SD writer apps (.img.gz)**

[LibreELEC-Generic.x86\_64-7.90.006.img.gz](http://releases.libreelec.tv/LibreELEC-Generic.x86_64-7.90.006.img.gz) ([info](http://releases.libreelec.tv/LibreELEC-Generic.x86_64-7.90.006.img.gz?mirrorlist)) [LibreELEC-RPi.arm-7.90.006.img.gz](http://releases.libreelec.tv/LibreELEC-RPi.arm-7.90.006.img.gz) ([info](http://releases.libreelec.tv/LibreELEC-RPi.arm-7.90.006.img.gz?mirrorlist)) [LibreELEC-RPi2.arm-7.90.006.img.gz](http://releases.libreelec.tv/LibreELEC-RPi2.arm-7.90.006.img.gz) ([info](http://releases.libreelec.tv/LibreELEC-RPi2.arm-7.90.006.img.gz?mirrorlist)) [LibreELEC-WeTek\_Play.arm-7.90.006.img.gz](http://releases.libreelec.tv/LibreELEC-WeTek_Play.arm-7.90.006.img.gz) ([info](http://releases.libreelec.tv/LibreELEC-WeTek_Play.arm-7.90.006.img.gz?mirrorlist)) [LibreELEC-WeTek\_Core.arm-7.90.006.img.gz](http://releases.libreelec.tv/LibreELEC-WeTek_Core.arm-7.90.006.img.gz) ([info](http://releases.libreelec.tv/LibreELEC-WeTek_Core.arm-7.90.006.img.gz?mirrorlist)) [LibreELEC-Odroid\_C2.aarch64-7.90.006.img.gz](http://releases.libreelec.tv/LibreELEC-Odroid_C2.aarch64-7.90.006.img.gz) ([info](http://releases.libreelec.tv/LibreELEC-Odroid_C2.aarch64-7.90.006.img.gz?mirrorlist)) [LibreELEC-WeTek\_Hub.aarch64-7.90.006.img.gz](http://releases.libreelec.tv/LibreELEC-WeTek_Hub.aarch64-7.90.006.img.gz) ([info](http://releases.libreelec.tv/LibreELEC-WeTek_Hub.aarch64-7.90.006.img.gz?mirrorlist))

**New Install to WeTek internal NAND (.zip)**

[LibreELEC-WeTek\_Play.arm-7.90.006.zip](http://releases.libreelec.tv/LibreELEC-WeTek_Play.arm-7.90.006.zip) ([info](http://releases.libreelec.tv/LibreELEC-WeTek_Play.arm-7.90.006.zip?mirrorlist)) [LibreELEC-WeTek\_Core.arm-7.90.006.zip](http://releases.libreelec.tv/LibreELEC-WeTek_Core.arm-7.90.006.zip) ([info](http://releases.libreelec.tv/LibreELEC-WeTek_Core.arm-7.90.006.zip?mirrorlist)) [LibreELEC-WeTek\_Hub.aarch64-7.90.006.zip](http://releases.libreelec.tv/LibreELEC-WeTek_Hub.aarch64-7.90.006.zip) ([info](http://releases.libreelec.tv/LibreELEC-WeTek_Hub.aarch64-7.90.006.zip?mirrorlist))

**Manual Update from LibreELEC 7.0 or OpenELEC (.tar)**

[LibreELEC-Generic.x86\_64-7.90.006.tar](http://releases.libreelec.tv/LibreELEC-Generic.x86_64-7.90.006.tar) ([info](http://releases.libreelec.tv/LibreELEC-Generic.x86_64-7.90.006.tar?mirrorlist)) [LibreELEC-RPi.arm-7.90.006.tar](http://releases.libreelec.tv/LibreELEC-RPi.arm-7.90.006.tar) ([info](http://releases.libreelec.tv/LibreELEC-RPi.arm-7.90.006.tar?mirrorlist)) [LibreELEC-RPi2.arm-7.90.006.tar](http://releases.libreelec.tv/LibreELEC-RPi2.arm-7.90.006.tar) ([info](http://releases.libreelec.tv/LibreELEC-RPi2.arm-7.90.006.tar?mirrorlist)) [LibreELEC-WeTek\_Play.arm-7.90.006.tar](http://releases.libreelec.tv/LibreELEC-WeTek_Play.arm-7.90.006.tar) ([info](http://releases.libreelec.tv/LibreELEC-WeTek_Play.arm-7.90.006.tar?mirrorlist)) [LibreELEC-WeTek\_Core.arm-7.90.006.tar](http://releases.libreelec.tv/LibreELEC-WeTek_Core.arm-7.90.006.tar) ([info](http://releases.libreelec.tv/LibreELEC-WeTek_Core.arm-7.90.006.tar?mirrorlist)) [LibreELEC-WeTek\_Hub.arm-7.90.006.tar](http://releases.libreelec.tv/LibreELEC-WeTek_Hub.aarch64-7.90.006.tar) ([info](http://releases.libreelec.tv/LibreELEC-WeTek_Hub.aarch64-7.90.006.tar?mirrorlist)) [LibreELEC-Odroid\_C2.aarch64-7.90.006.tar](http://releases.libreelec.tv/LibreELEC-Odroid_C2.aarch64-7.90.006.tar) ([info](http://releases.libreelec.tv/LibreELEC-Odroid_C2.aarch64-7.90.006.tar?mirrorlist))

**SUPPORT ASSISTANCE AND BUG REPORTS**

If you spot issues, please flag them via a [bug report in the forums](http://forum.libreelec.tv/forum-35.html). You are also very welcome and encouraged to get involved and [submit fixes via GitHub!](https://github.com/LibreELEC/LibreELEC.tv)

{% include paypal.html %}
