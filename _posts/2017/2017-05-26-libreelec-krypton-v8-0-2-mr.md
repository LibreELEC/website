---
layout: post
title: "LibreELEC (Krypton) v8.0.2 MR"
image: "img/posts/2017/release_802.jpg"
---

LibreELEC (Krypton) v8.0.2 MR brings an update to Kodi v17.3, improved support for Intel WIFI and Bluetooth devices, performance enhancements to HEVC support on Raspberry Pi, and minor nip/tuck fixes for user-reported issues since v8.0.1. Kodi v17.3 addresses a notable subtitle (zip file) handling vulnerability that has been widely reported in the media.

Changes since 8.0.1 include:

- Fix for zero byte AddonsXX.db files
- Fix for connman failing to enable ip\_forwarding when using the hotspot feature
- Fix for minimum Audio Engine sample rate in Kodi (allows forced 48KHz)
- Fix for suspend issues with CX231xx DVB devices
- Fix for unreliable 1000-BaseT Ethernet on iMX6 (we default to 100-BaseT)
- Fix for 720p > 1080p resolution switching on Amlogic aarch64 devices
- Fix for audio pops on media playback start/stop on Amlogic devices
- Update timezone data files to 2017b
- Update to Kodi 17.3
- Update to Linux 4.9.29 on Generic and RPi/RPi2 builds
- Update to Linux 3.14 kernel used on Amlogic aarch64 projects
- Update to RPi backports and firmwares
- Update to WeTek DVB firmware on WP2
- Add support for multiple Intel WIFI and Bluetooth firmwares
- Add support for GPIO\_SYSFS on RPi/RPi2
- Add support for CEC wakeup with LG Simplink devices on Odroid C2
- Add support for 050D:010d device to RTL8812AU driver
- Add lirc support for /dev/rc devices (see note below)

[See detailed changes on GitHub](https://github.com/LibreELEC/LibreELEC.tv/compare/8.0.1...8.0.2)

**KODI 17.3**

Kodi (Krypton) 17.3 contains several fixes to improve stability and usability. It also contains a notable security fix for an issue with subtitle zip files. Kodi 17.2 had a short lifespan after issues were found in the release. More information can be read in the official [Kodi 17.3 release notes](https://kodi.tv/article/kodi-v173-minor-bug-fix-and-security-release).

**LIRC**

Lirc now supports a number of IR receivers that historically used in-kernel decoding. If you experience double button presses after updating lirc support can be disabled from the services tab in the settings add-on.

**ADDONS27.DB**

There is strong evidence Kodi upgrade issues with zero byte Addons27.db files are caused by specific piracy add-ons. LibreELEC v8.0.2 contains changes to automatically remove zero byte DB files, but if this happens Kodi starts with all add-ons disabled and you must manually re-enable them. Please remember this is a self-inflicted inconvenience and we refuse support to users with piracy add-ons/repo's installed.

**SAMBA**

Samba announced [CVE-2017-7494](https://www.samba.org/samba/security/CVE-2017-7494.html) as we were about to release 8.0.2 and due to the serious vulnerability rating we postponed release to investigate. LibreELEC uses Samba 3.6.25 which is in the range of affected versions, but after Samba source code review (thanks @seo) we believe we are not vulnerable as we compile Samba without printer support, and this disables the vulnerable code path. We also attempted and failed to exploit our Samba version with the available metasploit module. Our confidence level on this is 99%. If you care about the missing 1% please disable the Samba service and keep reading.

**ROADMAP**

The team have plans to create a mid-year LibreELEC 8.2 release to bridge the long time gap between 8.0.2 and 9.0 which (along with Kodi v18) is expected around year-end. The main items in the release will be improved support for newer Intel GPU hardware, a bump to Samba 4.6 to bring support for SMB2/SMB3 in our Samba server and Kodi client connections (and resolve security issues) and a switch to OpenSSL to resolve issues seen with LibreSSL and certificates expiring after 2038. Timeline is 8-10 weeks away ~ some time after Linux 4.12 ships.

{% include paypal.html %}

[or donate by purchasing a LibreELEC teeshirt or hoodie](https://libreelec.tv/shop/)

**\*\* CANARY PERIOD \*\***

LibreELEC operates a 24-hour ‘canary’ period between files being posted for download and the release being available via auto-update. During this time LibreELEC 8.0 Alpha or Beta preview and 7.0.3 users can use the LibreELEC settings add-on to update manually from within the Kodi GUI. To update from older LibreELEC 7.0 releases (e.g. 7.0.2) or OpenELEC use the .tar file below.

**New installations using the LibreELEC USB-SD Creator app**

[LibreELEC.USB-SD.Creator.Linux-32bit.bin](http://releases.libreelec.tv/LibreELEC.USB-SD.Creator.Linux-32bit.bin) [(info)](http://releases.libreelec.tv/LibreELEC.USB-SD.Creator.Linux-32bit.bin?mirrorlist) [LibreELEC.USB-SD.Creator.Linux-64bit.bin](http://releases.libreelec.tv/LibreELEC.USB-SD.Creator.Linux-64bit.bin) [(info)](http://releases.libreelec.tv/LibreELEC.USB-SD.Creator.Linux-64bit.bin?mirrorlist) [LibreELEC.USB-SD.Creator.macOS.dmg](http://releases.libreelec.tv/LibreELEC.USB-SD.Creator.macOS.dmg) [(info)](http://releases.libreelec.tv/LibreELEC.USB-SD.Creator.macOS.dmg?mirrorlist) [LibreELEC.USB-SD.Creator.Win32.exe](http://releases.libreelec.tv/LibreELEC.USB-SD.Creator.Win32.exe) [(info)](http://releases.libreelec.tv/LibreELEC.USB-SD.Creator.Win32.exe?mirrorlist)

**New installation using 3rd party USB or SD writer apps (.img.gz)**

[LibreELEC-Generic.x86\_64-8.0.2.img.gz](http://releases.libreelec.tv/LibreELEC-Generic.x86_64-8.0.2.img.gz) ([info](http://releases.libreelec.tv/LibreELEC-Generic.x86_64-8.0.2.img.gz?mirrorlist)) [LibreELEC-RPi.arm-8.0.2.img.gz](http://releases.libreelec.tv/LibreELEC-RPi.arm-8.0.2.img.gz) ([info](http://releases.libreelec.tv/LibreELEC-RPi.arm-8.0.2.img.gz?mirrorlist)) [LibreELEC-RPi2.arm-8.0.2.img.gz](http://releases.libreelec.tv/LibreELEC-RPi2.arm-8.0.2.img.gz) ([info](http://releases.libreelec.tv/LibreELEC-RPi2.arm-8.0.2.img.gz?mirrorlist)) [LibreELEC-imx6.arm-8.0.2.img.gz](http://releases.libreelec.tv/LibreELEC-imx6.arm-8.0.2.img.gz) ([info](http://releases.libreelec.tv/LibreELEC-imx6.arm-8.0.2.img.gz?mirrorlist)) [LibreELEC-Odroid\_C2.aarch64-8.0.2.img.gz](http://releases.libreelec.tv/LibreELEC-Odroid_C2.aarch64-8.0.2.img.gz) ([info](http://releases.libreelec.tv/LibreELEC-Odroid_C2.aarch64-8.0.2.img.gz?mirrorlist)) [LibreELEC-WeTek\_Play.arm-8.0.2.img.gz](http://releases.libreelec.tv/LibreELEC-WeTek_Play.arm-8.0.2.img.gz) ([info](http://releases.libreelec.tv/LibreELEC-WeTek_Play.arm-8.0.2.img.gz?mirrorlist)) [LibreELEC-WeTek\_Core.arm-8.0.2.img.gz](http://releases.libreelec.tv/LibreELEC-WeTek_Core.arm-8.0.2.img.gz) ([info](http://releases.libreelec.tv/LibreELEC-WeTek_Core.arm-8.0.2.img.gz?mirrorlist)) [LibreELEC-WeTek\_Hub.aarch64-8.0.2.img.gz](http://releases.libreelec.tv/LibreELEC-WeTek_Hub.aarch64-8.0.2.img.gz) ([info](http://releases.libreelec.tv/LibreELEC-WeTek_Hub.aarch64-8.0.2.img.gz?mirrorlist)) [LibreELEC-WeTek\_Play\_2.aarch64-8.0.2.img.gz](http://releases.libreelec.tv/LibreELEC-WeTek_Play_2.aarch64-8.0.2.img.gz) ([info](http://releases.libreelec.tv/LibreELEC-WeTek_Play_2.aarch64-8.0.2.img.gz?mirrorlist))

**New Install to WeTek internal NAND (.zip)**

[LibreELEC-WeTek\_Play.arm-8.0.2.zip](http://releases.libreelec.tv/LibreELEC-WeTek_Play.arm-8.0.2.zip) ([info](http://releases.libreelec.tv/LibreELEC-WeTek_Play.arm-8.0.2.zip?mirrorlist)) [LibreELEC-WeTek\_Core.arm-8.0.2.zip](http://releases.libreelec.tv/LibreELEC-WeTek_Core.arm-8.0.2.zip) ([info](http://releases.libreelec.tv/LibreELEC-WeTek_Core.arm-8.0.2.zip?mirrorlist)) [LibreELEC-WeTek\_Hub.aarch64-8.0.2.zip](http://releases.libreelec.tv/LibreELEC-WeTek_Hub.aarch64-8.0.2.zip) ([info](http://releases.libreelec.tv/LibreELEC-WeTek_Hub.aarch64-8.0.2.zip?mirrorlist)) [LibreELEC-WeTek\_Play\_2.aarch64-8.0.2.zip](http://releases.libreelec.tv/LibreELEC-WeTek_Play_2.aarch64-8.0.2.zip) ([info](http://releases.libreelec.tv/LibreELEC-WeTek_Play_2.aarch64-8.0.2.zip?mirrorlist))

**Manual Update from LibreELEC 7.0 or OpenELEC (.tar)**

[LibreELEC-Generic.x86\_64-8.0.2.tar](http://releases.libreelec.tv/LibreELEC-Generic.x86_64-8.0.2.tar) ([info](http://releases.libreelec.tv/LibreELEC-Generic.x86_64-8.0.2.tar?mirrorlist)) [LibreELEC-RPi.arm-8.0.2.tar](http://releases.libreelec.tv/LibreELEC-RPi.arm-8.0.2.tar) ([info](http://releases.libreelec.tv/LibreELEC-RPi.arm-8.0.2.tar?mirrorlist)) [LibreELEC-RPi2.arm-8.0.2.tar](http://releases.libreelec.tv/LibreELEC-RPi2.arm-8.0.2.tar) ([info](http://releases.libreelec.tv/LibreELEC-RPi2.arm-8.0.2.tar?mirrorlist)) [LibreELEC-imx6.arm-8.0.2.tar](http://releases.libreelec.tv/LibreELEC-imx6.arm-8.0.2.tar) ([info](http://releases.libreelec.tv/LibreELEC-imx6.arm-8.0.2.tar?mirrorlist)) [LibreELEC-Odroid\_C2.aarch64-8.0.2.tar](http://releases.libreelec.tv/LibreELEC-Odroid_C2.aarch64-8.0.2.tar) ([info](http://releases.libreelec.tv/LibreELEC-Odroid_C2.aarch64-8.0.2.tar?mirrorlist)) [LibreELEC-WeTek\_Play.arm-8.0.2.tar](http://releases.libreelec.tv/LibreELEC-WeTek_Play.arm-8.0.2.tar) ([info](http://releases.libreelec.tv/LibreELEC-WeTek_Play.arm-8.0.2.tar?mirrorlist)) [LibreELEC-WeTek\_Core.arm-8.0.2.tar](http://releases.libreelec.tv/LibreELEC-WeTek_Core.arm-8.0.2.tar) ([info](http://releases.libreelec.tv/LibreELEC-WeTek_Core.arm-8.0.2.tar?mirrorlist)) [LibreELEC-WeTek\_Hub.arm-8.0.2.tar](http://releases.libreelec.tv/LibreELEC-WeTek_Hub.aarch64-8.0.2.tar) ([info](http://releases.libreelec.tv/LibreELEC-WeTek_Hub.aarch64-8.0.2.tar?mirrorlist)) [LibreELEC-WeTek\_Play\_2.arm-8.0.2.tar](http://releases.libreelec.tv/LibreELEC-WeTek_Play_2.aarch64-8.0.2.tar) ([info](http://releases.libreelec.tv/LibreELEC-WeTek_Play_2.aarch64-8.0.2.tar?mirrorlist))
