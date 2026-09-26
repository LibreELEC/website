---
layout: post
title: "LibreELEC (Krypton) v7.90.008 ALPHA"
image: "img/posts/2016/alpha_eightball.png"
---

LibreELEC (Krypton) 8.0 preview builds continue with v7.90.008 containing Kodi v17.0-beta5 which is focussed on bug fixing (including a major bug in v17b4 which is why we skipped it). This release also uses the Linux 4.8 kernel which is our intended kernel for the lifetime of v8.0 builds.

Changes in v7.90.008 include:

- Fix Amlogic default audio device patch to allow external USB audio devices
- Fix sshd config and remove user/group permisssion hacks on /storage
- Fix connman so verbose output does not show buildserver paths
- Fix Generic build installer visual issues and remove unused menu options
- Fix ffmpeg issues connecting to TLS 1.2 streams
- Fix vmware and vbox driver support for Virtual
- Update Samba configuration to improve performance and interoperability
- Update main nVidia driver to 367.57
- Update Linux kernel to 4.8.4
- Update Kodi to v17-beta5
- Update Raspberry Pi support patches for Linux/Kodi
- Update (align) Linux kernel configurations of various S905 devices
- Add support for DRI3 on Intel GPUs to resolve tearing in Tiger VNC
- Add support for PL2303 USB serial devices to Odroid\_C2
- Add support for VIA 82XX audio chipsets to Generic
- Add support for Avermedia TD110 to iMX6 4.4 kernel

[View detailed changes on GitHub](https://github.com/LibreELEC/LibreELEC.tv/compare/7.90.007...7.90.008)

In this build lcdproc configuration has been moved from LibreELEC settings to an installable add-on which can be found in the LibreELEC 8.0 add-on repo.

**\*\* REMINDER \*\***

LibreELEC operates a 24-hour ‘canary’ period between release files being posted for download and the release being available via auto-update. During this time Krypton users can update manually using the LibreELEC settings add-on. Jarvis users can update using the older .tar file method.

 

**New installations using the LibreELEC USB-SD Creator app**

[LibreELEC.USB-SD.Creator.Linux-32bit.bin](http://releases.libreelec.tv/LibreELEC.USB-SD.Creator.Linux-32bit.bin) [(info)](http://releases.libreelec.tv/LibreELEC.USB-SD.Creator.Linux-32bit.bin?mirrorlist) [LibreELEC.USB-SD.Creator.Linux-64bit.bin](http://releases.libreelec.tv/LibreELEC.USB-SD.Creator.Linux-64bit.bin) [(info)](http://releases.libreelec.tv/LibreELEC.USB-SD.Creator.Linux-64bit.bin?mirrorlist) [LibreELEC.USB-SD.Creator.macOS.dmg](http://releases.libreelec.tv/LibreELEC.USB-SD.Creator.macOS.dmg) [(info)](http://releases.libreelec.tv/LibreELEC.USB-SD.Creator.macOS.dmg?mirrorlist) [LibreELEC.USB-SD.Creator.Win32.exe](http://releases.libreelec.tv/LibreELEC.USB-SD.Creator.Win32.exe) [(info)](http://releases.libreelec.tv/LibreELEC.USB-SD.Creator.Win32.exe?mirrorlist)

**New installation using 3rd party USB or SD writer apps (.img.gz)**

[LibreELEC-Generic.x86\_64-7.90.008.img.gz](http://releases.libreelec.tv/LibreELEC-Generic.x86_64-7.90.008.img.gz) ([info](http://releases.libreelec.tv/LibreELEC-Generic.x86_64-7.90.008.img.gz?mirrorlist)) [LibreELEC-RPi.arm-7.90.008.img.gz](http://releases.libreelec.tv/LibreELEC-RPi.arm-7.90.008.img.gz) ([info](http://releases.libreelec.tv/LibreELEC-RPi.arm-7.90.008.img.gz?mirrorlist)) [LibreELEC-RPi2.arm-7.90.008.img.gz](http://releases.libreelec.tv/LibreELEC-RPi2.arm-7.90.008.img.gz) ([info](http://releases.libreelec.tv/LibreELEC-RPi2.arm-7.90.008.img.gz?mirrorlist)) [LibreELEC-imx6.arm-7.90.008.img.gz](http://releases.libreelec.tv/LibreELEC-imx6.arm-7.90.008.img.gz) ([info](http://releases.libreelec.tv/LibreELEC-imx6.arm-7.90.008.img.gz?mirrorlist)) [LibreELEC-Odroid\_C2.aarch64-7.90.008.img.gz](http://releases.libreelec.tv/LibreELEC-Odroid_C2.aarch64-7.90.008.img.gz) ([info](http://releases.libreelec.tv/LibreELEC-Odroid_C2.aarch64-7.90.008.img.gz?mirrorlist)) [LibreELEC-WeTek\_Play.arm-7.90.008.img.gz](http://releases.libreelec.tv/LibreELEC-WeTek_Play.arm-7.90.008.img.gz) ([info](http://releases.libreelec.tv/LibreELEC-WeTek_Play.arm-7.90.008.img.gz?mirrorlist)) [LibreELEC-WeTek\_Core.arm-7.90.008.img.gz](http://releases.libreelec.tv/LibreELEC-WeTek_Core.arm-7.90.008.img.gz) ([info](http://releases.libreelec.tv/LibreELEC-WeTek_Core.arm-7.90.008.img.gz?mirrorlist)) [LibreELEC-WeTek\_Hub.aarch64-7.90.008.img.gz](http://releases.libreelec.tv/LibreELEC-WeTek_Hub.aarch64-7.90.008.img.gz) ([info](http://releases.libreelec.tv/LibreELEC-WeTek_Hub.aarch64-7.90.008.img.gz?mirrorlist)) [LibreELEC-WeTek\_Play\_2.aarch64-7.90.008.img.gz](http://releases.libreelec.tv/LibreELEC-WeTek_Play_2.aarch64-7.90.008.img.gz) ([info](http://releases.libreelec.tv/LibreELEC-WeTek_Play_2.aarch64-7.90.008.img.gz?mirrorlist))

**New Install to WeTek internal NAND (.zip)**

[LibreELEC-WeTek\_Play.arm-7.90.008.zip](http://releases.libreelec.tv/LibreELEC-WeTek_Play.arm-7.90.008.zip) ([info](http://releases.libreelec.tv/LibreELEC-WeTek_Play.arm-7.90.008.zip?mirrorlist)) [LibreELEC-WeTek\_Core.arm-7.90.008.zip](http://releases.libreelec.tv/LibreELEC-WeTek_Core.arm-7.90.008.zip) ([info](http://releases.libreelec.tv/LibreELEC-WeTek_Core.arm-7.90.008.zip?mirrorlist)) [LibreELEC-WeTek\_Hub.aarch64-7.90.008.zip](http://releases.libreelec.tv/LibreELEC-WeTek_Hub.aarch64-7.90.008.zip) ([info](http://releases.libreelec.tv/LibreELEC-WeTek_Hub.aarch64-7.90.008.zip?mirrorlist)) [LibreELEC-WeTek\_Play\_2.aarch64-7.90.008.zip](http://releases.libreelec.tv/LibreELEC-WeTek_Play_2.aarch64-7.90.008.zip) ([info](http://releases.libreelec.tv/LibreELEC-WeTek_Play_2.aarch64-7.90.008.zip?mirrorlist))

**Manual Update from LibreELEC 7.0 or OpenELEC (.tar)**

[LibreELEC-Generic.x86\_64-7.90.008.tar](http://releases.libreelec.tv/LibreELEC-Generic.x86_64-7.90.008.tar) ([info](http://releases.libreelec.tv/LibreELEC-Generic.x86_64-7.90.008.tar?mirrorlist)) [LibreELEC-RPi.arm-7.90.008.tar](http://releases.libreelec.tv/LibreELEC-RPi.arm-7.90.008.tar) ([info](http://releases.libreelec.tv/LibreELEC-RPi.arm-7.90.008.tar?mirrorlist)) [LibreELEC-RPi2.arm-7.90.008.tar](http://releases.libreelec.tv/LibreELEC-RPi2.arm-7.90.008.tar) ([info](http://releases.libreelec.tv/LibreELEC-RPi2.arm-7.90.008.tar?mirrorlist)) [LibreELEC-imx6.arm-7.90.008.tar](http://releases.libreelec.tv/LibreELEC-imx6.arm-7.90.008.tar) ([info](http://releases.libreelec.tv/LibreELEC-imx6.arm-7.90.008.tar?mirrorlist)) [LibreELEC-Odroid\_C2.aarch64-7.90.008.tar](http://releases.libreelec.tv/LibreELEC-Odroid_C2.aarch64-7.90.008.tar) ([info](http://releases.libreelec.tv/LibreELEC-Odroid_C2.aarch64-7.90.008.tar?mirrorlist)) [LibreELEC-WeTek\_Play.arm-7.90.008.tar](http://releases.libreelec.tv/LibreELEC-WeTek_Play.arm-7.90.008.tar) ([info](http://releases.libreelec.tv/LibreELEC-WeTek_Play.arm-7.90.008.tar?mirrorlist)) [LibreELEC-WeTek\_Core.arm-7.90.008.tar](http://releases.libreelec.tv/LibreELEC-WeTek_Core.arm-7.90.008.tar) ([info](http://releases.libreelec.tv/LibreELEC-WeTek_Core.arm-7.90.008.tar?mirrorlist)) [LibreELEC-WeTek\_Hub.arm-7.90.008.tar](http://releases.libreelec.tv/LibreELEC-WeTek_Hub.aarch64-7.90.008.tar) ([info](http://releases.libreelec.tv/LibreELEC-WeTek_Hub.aarch64-7.90.008.tar?mirrorlist)) [LibreELEC-WeTek\_Play\_2.arm-7.90.008.tar](http://releases.libreelec.tv/LibreELEC-WeTek_Play_2.aarch64-7.90.008.tar) ([info](http://releases.libreelec.tv/LibreELEC-WeTek_Play_2.aarch64-7.90.008.tar?mirrorlist))

**SUPPORT ASSISTANCE AND BUG REPORTS**

If you spot issues, please flag them via a [bug report in the forums](http://forum.libreelec.tv/forum-35.html). You are also very welcome and encouraged to get involved and [submit fixes via GitHub!](https://github.com/LibreELEC/LibreELEC.tv)

{% include paypal.html %}
