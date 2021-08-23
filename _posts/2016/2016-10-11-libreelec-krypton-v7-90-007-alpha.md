---
layout: post
title: "LibreELEC (Krypton) v7.90.007 ALPHA"
image: "img/posts/2016/LibreELEC-Alpha-007-O.jpg"
---

LibreELEC (Krypton) 8.0 preview builds continue with v7.90.007 containing Kodi v17.0-beta3 which is starting to focus less on big changes and more on bug fixing. Amlogic audio also makes a leap forwards thanks to @kwiboo and @longchair from the [RasPlex](http://www.rasplex.com/) and [Plex Inc.](https://www.plex.tv/) teams completing Amlogic kernel changes that allow hardware auto-detection capabilities in Kodi to "just work" without hacks.

The LibreELEC settings add-on now has a function to submit essential log files to a paste website and display the URL shortcode. This allows less experienced users to demonstrate an issue and share logs with developers without learning SSH and Linux terminal commands first. Original credit belongs to Gordon at [FiveNinjas](http://fiveninjas.com/) who has been collaborating with us to adapt the Raspberry Pi Compute Module based "Slice" box to use LibreELEC - [a preview build for the Slice is now available in the forums](https://forum.libreelec.tv/thread-1893.html).

Changes in v7.90.007 include:

- Fix 'chmod' ownership of /storage during boot
- Fix Amlogic 3.14 kernel audio presentation to alsa
- Fix support for HK RTC shield on Odroid C2
- Fix unwanted debug logging in RTL8812AU driver
- Update nVidia legacy driver to 340.98
- Update core builds to Linux 4.7.6
- Update Kodi to v17-beta3
- Update Raspberry Pi Linux and Kodi support patches
- Update iMX6 kernel to 4.4.19
- Update iMX6 firmware and fix Kodi patches
- Update Odroid C2 project to use our own linux-amlogic 3.14 kernel
- Update wording and presentation of boot-time backup/restore messages
- Update boot config to ensure /storage/backup is always created
- Add support for log submission to sprunge.us and shortcode display
- Add initial support for the [WeTek Play 2](http://wetek.com/product/wetek-play2) (S905) device
- Add default xorg.conf to enable DRI/Glamour support on AMD cards
- Add initial support for Intel Baytrail 32-bit EFI booting
- Add serial console service to WeTek\_Hub

[View detailed changes on GitHub](https://github.com/LibreELEC/LibreELEC.tv/compare/7.90.006...7.90.007)

We are anticipating another couple of Kodi beta releases before a release candidate appears, so our next alpha build will move LibreELEC 8.0 up to Linux 4.8 kernel. This bump has already been in testing for several weeks via @milhouse builds and is well proven on Raspberry Pi and x86 hardware which make up the larger portions of our userbase.

Reminder: LibreELEC settings has been moved to the Kodi Settings screen.

**New installations using the LibreELEC USB-SD Creator app**

[LibreELEC.USB-SD.Creator.Linux-32bit.bin](http://releases.libreelec.tv/LibreELEC.USB-SD.Creator.Linux-32bit.bin) [(info)](http://releases.libreelec.tv/LibreELEC.USB-SD.Creator.Linux-32bit.bin?mirrorlist) [LibreELEC.USB-SD.Creator.Linux-64bit.bin](http://releases.libreelec.tv/LibreELEC.USB-SD.Creator.Linux-64bit.bin) [(info)](http://releases.libreelec.tv/LibreELEC.USB-SD.Creator.Linux-64bit.bin?mirrorlist) [LibreELEC.USB-SD.Creator.macOS.dmg](http://releases.libreelec.tv/LibreELEC.USB-SD.Creator.macOS.dmg) [(info)](http://releases.libreelec.tv/LibreELEC.USB-SD.Creator.macOS.dmg?mirrorlist) [LibreELEC.USB-SD.Creator.Win32.exe](http://releases.libreelec.tv/LibreELEC.USB-SD.Creator.Win32.exe) [(info)](http://releases.libreelec.tv/LibreELEC.USB-SD.Creator.Win32.exe?mirrorlist)

**New installation using 3rd party USB or SD writer apps (.img.gz)**

[LibreELEC-Generic.x86\_64-7.90.007.img.gz](http://releases.libreelec.tv/LibreELEC-Generic.x86_64-7.90.007.img.gz) ([info](http://releases.libreelec.tv/LibreELEC-Generic.x86_64-7.90.007.img.gz?mirrorlist)) [LibreELEC-RPi.arm-7.90.007.img.gz](http://releases.libreelec.tv/LibreELEC-RPi.arm-7.90.007.img.gz) ([info](http://releases.libreelec.tv/LibreELEC-RPi.arm-7.90.007.img.gz?mirrorlist)) [LibreELEC-RPi2.arm-7.90.007.img.gz](http://releases.libreelec.tv/LibreELEC-RPi2.arm-7.90.007.img.gz) ([info](http://releases.libreelec.tv/LibreELEC-RPi2.arm-7.90.007.img.gz?mirrorlist)) [LibreELEC-imx6.arm-7.90.007.img.gz](http://releases.libreelec.tv/LibreELEC-imx6.arm-7.90.007.img.gz) ([info](http://releases.libreelec.tv/LibreELEC-imx6.arm-7.90.007.img.gz?mirrorlist)) [LibreELEC-Odroid\_C2.aarch64-7.90.007.img.gz](http://releases.libreelec.tv/LibreELEC-Odroid_C2.aarch64-7.90.007.img.gz) ([info](http://releases.libreelec.tv/LibreELEC-Odroid_C2.aarch64-7.90.007.img.gz?mirrorlist)) [LibreELEC-WeTek\_Play.arm-7.90.007.img.gz](http://releases.libreelec.tv/LibreELEC-WeTek_Play.arm-7.90.007.img.gz) ([info](http://releases.libreelec.tv/LibreELEC-WeTek_Play.arm-7.90.007.img.gz?mirrorlist)) [LibreELEC-WeTek\_Core.arm-7.90.007.img.gz](http://releases.libreelec.tv/LibreELEC-WeTek_Core.arm-7.90.007.img.gz) ([info](http://releases.libreelec.tv/LibreELEC-WeTek_Core.arm-7.90.007.img.gz?mirrorlist)) [LibreELEC-WeTek\_Hub.aarch64-7.90.007.img.gz](http://releases.libreelec.tv/LibreELEC-WeTek_Hub.aarch64-7.90.007.img.gz) ([info](http://releases.libreelec.tv/LibreELEC-WeTek_Hub.aarch64-7.90.007.img.gz?mirrorlist)) [LibreELEC-WeTek\_Play\_2.aarch64-7.90.007.img.gz](http://releases.libreelec.tv/LibreELEC-WeTek_Play_2.aarch64-7.90.007.img.gz) ([info](http://releases.libreelec.tv/LibreELEC-WeTek_Play_2.aarch64-7.90.007.img.gz?mirrorlist))

**New Install to WeTek internal NAND (.zip)**

[LibreELEC-WeTek\_Play.arm-7.90.007.zip](http://releases.libreelec.tv/LibreELEC-WeTek_Play.arm-7.90.007.zip) ([info](http://releases.libreelec.tv/LibreELEC-WeTek_Play.arm-7.90.007.zip?mirrorlist)) [LibreELEC-WeTek\_Core.arm-7.90.007.zip](http://releases.libreelec.tv/LibreELEC-WeTek_Core.arm-7.90.007.zip) ([info](http://releases.libreelec.tv/LibreELEC-WeTek_Core.arm-7.90.007.zip?mirrorlist)) [LibreELEC-WeTek\_Hub.aarch64-7.90.007.zip](http://releases.libreelec.tv/LibreELEC-WeTek_Hub.aarch64-7.90.007.zip) ([info](http://releases.libreelec.tv/LibreELEC-WeTek_Hub.aarch64-7.90.007.zip?mirrorlist)) [LibreELEC-WeTek\_Play\_2.aarch64-7.90.007.zip](http://releases.libreelec.tv/LibreELEC-WeTek_Play_2.aarch64-7.90.007.zip) ([info](http://releases.libreelec.tv/LibreELEC-WeTek_Play_2.aarch64-7.90.007.zip?mirrorlist))

**Manual Update from LibreELEC 7.0 or OpenELEC (.tar)**

[LibreELEC-Generic.x86\_64-7.90.007.tar](http://releases.libreelec.tv/LibreELEC-Generic.x86_64-7.90.007.tar) ([info](http://releases.libreelec.tv/LibreELEC-Generic.x86_64-7.90.007.tar?mirrorlist)) [LibreELEC-RPi.arm-7.90.007.tar](http://releases.libreelec.tv/LibreELEC-RPi.arm-7.90.007.tar) ([info](http://releases.libreelec.tv/LibreELEC-RPi.arm-7.90.007.tar?mirrorlist)) [LibreELEC-RPi2.arm-7.90.007.tar](http://releases.libreelec.tv/LibreELEC-RPi2.arm-7.90.007.tar) ([info](http://releases.libreelec.tv/LibreELEC-RPi2.arm-7.90.007.tar?mirrorlist)) [LibreELEC-imx6.arm-7.90.007.tar](http://releases.libreelec.tv/LibreELEC-imx6.arm-7.90.007.tar) ([info](http://releases.libreelec.tv/LibreELEC-imx6.arm-7.90.007.tar?mirrorlist)) [LibreELEC-Odroid\_C2.aarch64-7.90.007.tar](http://releases.libreelec.tv/LibreELEC-Odroid_C2.aarch64-7.90.007.tar) ([info](http://releases.libreelec.tv/LibreELEC-Odroid_C2.aarch64-7.90.007.tar?mirrorlist)) [LibreELEC-WeTek\_Play.arm-7.90.007.tar](http://releases.libreelec.tv/LibreELEC-WeTek_Play.arm-7.90.007.tar) ([info](http://releases.libreelec.tv/LibreELEC-WeTek_Play.arm-7.90.007.tar?mirrorlist)) [LibreELEC-WeTek\_Core.arm-7.90.007.tar](http://releases.libreelec.tv/LibreELEC-WeTek_Core.arm-7.90.007.tar) ([info](http://releases.libreelec.tv/LibreELEC-WeTek_Core.arm-7.90.007.tar?mirrorlist)) [LibreELEC-WeTek\_Hub.arm-7.90.007.tar](http://releases.libreelec.tv/LibreELEC-WeTek_Hub.aarch64-7.90.007.tar) ([info](http://releases.libreelec.tv/LibreELEC-WeTek_Hub.aarch64-7.90.007.tar?mirrorlist)) [LibreELEC-WeTek\_Play\_2.arm-7.90.007.tar](http://releases.libreelec.tv/LibreELEC-WeTek_Play_2.aarch64-7.90.007.tar) ([info](http://releases.libreelec.tv/LibreELEC-WeTek_Play_2.aarch64-7.90.007.tar?mirrorlist))

**SUPPORT ASSISTANCE AND BUG REPORTS**

If you spot issues, please flag them via a [bug report in the forums](http://forum.libreelec.tv/forum-35.html). You are also very welcome and encouraged to get involved and [submit fixes via GitHub!](https://github.com/LibreELEC/LibreELEC.tv)

{% include paypal.html %}
