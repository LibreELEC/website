---
layout: post
title: "LibreELEC (Krypton) v8.0.1 MR"
image: "img/posts/2017/release801b.jpg"
---

LibreELEC (Krypton) v8.0.1 MR is available bringing Kodi v17.1, hardware support for the [Raspberry Pi Zero W](https://www.raspberrypi.org/blog/raspberry-pi-zero-w-joins-family/), improved software HEVC decoding on RPi3/CM3 hardware, driver support for Fe Pi audio cards, and support for Cirrus Logic DAC audio cards (thanks to @HiassofT). The bump to Kodi v17.1 resolves several upgrade and user-experience issues we have seen with the initial Kodi v17.0 release, and happiness is enhanced for users wearing an [official LibreELEC tee-shirt or hoodie](https://libreelec.tv/shop/).

Changes since 8.0.0 include:

- Fix missing support for lirc\_xbox driver
- Fix gpio-ir-recv issues on iMX6
- Fix (experimental) to correct audio delay issues when using Bluetooth speakers
- Fix filesystem resize script error with parted
- Update to Kodi 17.1
- Update to Linux 4.9.13 on Generic and RPi/RPi2 builds
- Update to Linux 3.14 kernel used on Amlogic aarch64 projects
- Update to RPi backports patch with HEVC improvements on RPi3/CM3
- Add support for configurable CEC button repeat settings on all build projects
- Add hardware support for Cirrus Logic RPi/RPi2 DAC boards
- Add hardware support for Fe Pi audio boards
- Add hardware support for [Raspberry Pi Zero W](https://www.raspberrypi.org/blog/raspberry-pi-zero-w-joins-family/)

[See detailed changes on GitHub](https://github.com/LibreELEC/LibreELEC.tv/compare/8.0.0...8.0.1)

**KODI 17.1**

Kodi 17.1 resolves a bug that caused reports of Kodi hanging on the "Migrating add-ons database" splash screen. It also restores list caching to mitigate reports of the Krypton GUI being "slow" compared to Jarvis. The lack of caching was noticeable in streaming add-ons like YouTube that use multi-page lists of search results. Further information on 17.1 changes can be seen in the [Kodi 17.1 release notes](https://kodi.tv/kodi-v17-1-krypton/).

**BOB DE-INTERLACING**

Raspberry Pi and Slice now default to "bob" de-interlacing to avoid reports of corrupted video seen with some DVB dongles. Advanced de-interlacing works great with the majority of devices, but Bob provides a safe default that works everywhere to avoid support cases.

**ADSP**

To avoid issues when Jarvis users update with unsupported ADSP add-ons v8.0.1 hides the ADSP configuration options in the GUI and disables support in code. ADSP add-ons and functions are expected to be part of the Kodi v18.0 (Leia) release.

**CHROMEBOXES**

Chromebox users with older devices/installs are advised to update the firmware before updating to LibreELEC 8.0 builds as this assures compatibility with newer Intel drivers. Older Chromebox firmwares may leave you with a black screen and cursor after updating. Please go to https://mrchromebox.tech to download the update tools and read instructions for updating Chromebox firmware.

**OLDER RELEASES**

Development on LibreELEC 7.0 and Kodi Jarvis has ceased. If you experience an issue on LibreELEC 7.0.x please update to 8.0.1 and re-test before [reporting the problem](http://forum.libreelec.tv/forum-35.html).

**\*\* CANARY PERIOD \*\***

LibreELEC operates a 24-hour ‘canary’ period between files being posted for download and the release being available via auto-update. During this time LibreELEC 8.0 Alpha or Beta preview and 7.0.3 users can use the LibreELEC settings add-on to update manually from within the Kodi GUI. To update from older LibreELEC 7.0 releases (e.g. 7.0.2) or OpenELEC use the .tar file below.

**New installations using the LibreELEC USB-SD Creator app**

[LibreELEC.USB-SD.Creator.Linux-32bit.bin](http://releases.libreelec.tv/LibreELEC.USB-SD.Creator.Linux-32bit.bin) [(info)](http://releases.libreelec.tv/LibreELEC.USB-SD.Creator.Linux-32bit.bin?mirrorlist) [LibreELEC.USB-SD.Creator.Linux-64bit.bin](http://releases.libreelec.tv/LibreELEC.USB-SD.Creator.Linux-64bit.bin) [(info)](http://releases.libreelec.tv/LibreELEC.USB-SD.Creator.Linux-64bit.bin?mirrorlist) [LibreELEC.USB-SD.Creator.macOS.dmg](http://releases.libreelec.tv/LibreELEC.USB-SD.Creator.macOS.dmg) [(info)](http://releases.libreelec.tv/LibreELEC.USB-SD.Creator.macOS.dmg?mirrorlist) [LibreELEC.USB-SD.Creator.Win32.exe](http://releases.libreelec.tv/LibreELEC.USB-SD.Creator.Win32.exe) [(info)](http://releases.libreelec.tv/LibreELEC.USB-SD.Creator.Win32.exe?mirrorlist)

**New installation using 3rd party USB or SD writer apps (.img.gz)**

[LibreELEC-Generic.x86\_64-8.0.1.img.gz](http://releases.libreelec.tv/LibreELEC-Generic.x86_64-8.0.1.img.gz) ([info](http://releases.libreelec.tv/LibreELEC-Generic.x86_64-8.0.1.img.gz?mirrorlist)) [LibreELEC-RPi.arm-8.0.1.img.gz](http://releases.libreelec.tv/LibreELEC-RPi.arm-8.0.1.img.gz) ([info](http://releases.libreelec.tv/LibreELEC-RPi.arm-8.0.1.img.gz?mirrorlist)) [LibreELEC-RPi2.arm-8.0.1.img.gz](http://releases.libreelec.tv/LibreELEC-RPi2.arm-8.0.1.img.gz) ([info](http://releases.libreelec.tv/LibreELEC-RPi2.arm-8.0.1.img.gz?mirrorlist)) [LibreELEC-imx6.arm-8.0.1.img.gz](http://releases.libreelec.tv/LibreELEC-imx6.arm-8.0.1.img.gz) ([info](http://releases.libreelec.tv/LibreELEC-imx6.arm-8.0.1.img.gz?mirrorlist)) [LibreELEC-Odroid\_C2.aarch64-8.0.1.img.gz](http://releases.libreelec.tv/LibreELEC-Odroid_C2.aarch64-8.0.1.img.gz) ([info](http://releases.libreelec.tv/LibreELEC-Odroid_C2.aarch64-8.0.1.img.gz?mirrorlist)) [LibreELEC-WeTek\_Play.arm-8.0.1.img.gz](http://releases.libreelec.tv/LibreELEC-WeTek_Play.arm-8.0.1.img.gz) ([info](http://releases.libreelec.tv/LibreELEC-WeTek_Play.arm-8.0.1.img.gz?mirrorlist)) [LibreELEC-WeTek\_Core.arm-8.0.1.img.gz](http://releases.libreelec.tv/LibreELEC-WeTek_Core.arm-8.0.1.img.gz) ([info](http://releases.libreelec.tv/LibreELEC-WeTek_Core.arm-8.0.1.img.gz?mirrorlist)) [LibreELEC-WeTek\_Hub.aarch64-8.0.1.img.gz](http://releases.libreelec.tv/LibreELEC-WeTek_Hub.aarch64-8.0.1.img.gz) ([info](http://releases.libreelec.tv/LibreELEC-WeTek_Hub.aarch64-8.0.1.img.gz?mirrorlist)) [LibreELEC-WeTek\_Play\_2.aarch64-8.0.1.img.gz](http://releases.libreelec.tv/LibreELEC-WeTek_Play_2.aarch64-8.0.1.img.gz) ([info](http://releases.libreelec.tv/LibreELEC-WeTek_Play_2.aarch64-8.0.1.img.gz?mirrorlist))

**New Install to WeTek internal NAND (.zip)**

[LibreELEC-WeTek\_Play.arm-8.0.1.zip](http://releases.libreelec.tv/LibreELEC-WeTek_Play.arm-8.0.1.zip) ([info](http://releases.libreelec.tv/LibreELEC-WeTek_Play.arm-8.0.1.zip?mirrorlist)) [LibreELEC-WeTek\_Core.arm-8.0.1.zip](http://releases.libreelec.tv/LibreELEC-WeTek_Core.arm-8.0.1.zip) ([info](http://releases.libreelec.tv/LibreELEC-WeTek_Core.arm-8.0.1.zip?mirrorlist)) [LibreELEC-WeTek\_Hub.aarch64-8.0.1.zip](http://releases.libreelec.tv/LibreELEC-WeTek_Hub.aarch64-8.0.1.zip) ([info](http://releases.libreelec.tv/LibreELEC-WeTek_Hub.aarch64-8.0.1.zip?mirrorlist)) [LibreELEC-WeTek\_Play\_2.aarch64-8.0.1.zip](http://releases.libreelec.tv/LibreELEC-WeTek_Play_2.aarch64-8.0.1.zip) ([info](http://releases.libreelec.tv/LibreELEC-WeTek_Play_2.aarch64-8.0.1.zip?mirrorlist))

**Manual Update from LibreELEC 7.0 or OpenELEC (.tar)**

[LibreELEC-Generic.x86\_64-8.0.1.tar](http://releases.libreelec.tv/LibreELEC-Generic.x86_64-8.0.1.tar) ([info](http://releases.libreelec.tv/LibreELEC-Generic.x86_64-8.0.1.tar?mirrorlist)) [LibreELEC-RPi.arm-8.0.1.tar](http://releases.libreelec.tv/LibreELEC-RPi.arm-8.0.1.tar) ([info](http://releases.libreelec.tv/LibreELEC-RPi.arm-8.0.1.tar?mirrorlist)) [LibreELEC-RPi2.arm-8.0.1.tar](http://releases.libreelec.tv/LibreELEC-RPi2.arm-8.0.1.tar) ([info](http://releases.libreelec.tv/LibreELEC-RPi2.arm-8.0.1.tar?mirrorlist)) [LibreELEC-imx6.arm-8.0.1.tar](http://releases.libreelec.tv/LibreELEC-imx6.arm-8.0.1.tar) ([info](http://releases.libreelec.tv/LibreELEC-imx6.arm-8.0.1.tar?mirrorlist)) [LibreELEC-Odroid\_C2.aarch64-8.0.1.tar](http://releases.libreelec.tv/LibreELEC-Odroid_C2.aarch64-8.0.1.tar) ([info](http://releases.libreelec.tv/LibreELEC-Odroid_C2.aarch64-8.0.1.tar?mirrorlist)) [LibreELEC-WeTek\_Play.arm-8.0.1.tar](http://releases.libreelec.tv/LibreELEC-WeTek_Play.arm-8.0.1.tar) ([info](http://releases.libreelec.tv/LibreELEC-WeTek_Play.arm-8.0.1.tar?mirrorlist)) [LibreELEC-WeTek\_Core.arm-8.0.1.tar](http://releases.libreelec.tv/LibreELEC-WeTek_Core.arm-8.0.1.tar) ([info](http://releases.libreelec.tv/LibreELEC-WeTek_Core.arm-8.0.1.tar?mirrorlist)) [LibreELEC-WeTek\_Hub.arm-8.0.1.tar](http://releases.libreelec.tv/LibreELEC-WeTek_Hub.aarch64-8.0.1.tar) ([info](http://releases.libreelec.tv/LibreELEC-WeTek_Hub.aarch64-8.0.1.tar?mirrorlist)) [LibreELEC-WeTek\_Play\_2.arm-8.0.1.tar](http://releases.libreelec.tv/LibreELEC-WeTek_Play_2.aarch64-8.0.1.tar) ([info](http://releases.libreelec.tv/LibreELEC-WeTek_Play_2.aarch64-8.0.1.tar?mirrorlist))

{% include paypal.html %}
