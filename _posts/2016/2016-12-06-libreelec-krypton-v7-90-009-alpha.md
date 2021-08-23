---
layout: post
title: "LibreELEC (Krypton) v7.90.009 ALPHA"
image: "img/posts/2016/alpha_009.png"
---

LibreELEC (Krypton) 8.0 preview builds continue with v7.90.009 containing Kodi v17.0-beta6 with a major "look and feel" overhaul to Estuary, the new default Krypton skin. The revised version known as Estuary v2 has more visual depth (is not as flat in appearance) and should be less of a visual shock for users making the switch from Kodi Jarvis/Confluence. Favourites have now been promoted to a main menu item and fanart is more visible than Estuary v1 when browsing in library views. We think it looks great and offer our congratulations! to the Kodi skinning team. Kodi v17-beta6 also refreshes the Kodi web interface with the new Chorus 2 web skin (also a huge improvement) and includes a number of sync and timing enhancements for Amlogic devices that should provide more stable playback with interlaced and live-streamed media formats.

Changes in v7.90.009 include:

- Fix tar unpack issues in busybox
- Fix WeTek Play 2 recovery image to resolve Android reinstall issues
- Fix memory leak issues with libass (update to 0.13.4)
- Fix alsa IEC958 (S/PDIF) presentation of Hifiberry Digi devices
- Fix temperature sensor support in WeTek Hub and WeTek Play 2
- Fix samba disk size/allocation reporting on Windows 8.x+
- Update to libCEC 4.0
- Update to LibreSSL v2.4.4
- Update Intel GPU driver to v1.7.8
- Update Intel iwlwifi-firmware drivers
- Update DVB drivers for WeTek Play 2
- Update to Linux 4.8.12 kernel for Generic and Raspberry Pi
- Update to Linux support patches for Raspberry Pi
- Updates to Linux 3.14 kernel for Amlogic aarch64 projects
- Update to LibreELEC settings 0.8.5
- Update to Kodi v17-beta6 including Estuary v2 and Chorus v2
- Change WeTek hub to use lirc instead of amremote
- Add additional devices ID's to Realtek RTL8812AU driver
- Add kernel support for Docker on Amlogic aarch64 devices

[View detailed changes on GitHub](https://github.com/LibreELEC/LibreELEC.tv/compare/7.90.008...7.90.009)

**WETEK HUB REMOTE**

The popular WeTek Hub box ships with a small and simple remote and many users would like a larger remote with more feature buttons. To accommodate this we are testing a switch from amremote to lirc which allows the on-board IR sensor to be configured for other remotes. These changes remove the Airmouse function which has little use under Linux, and the ability to power-on the device from the remote. We consider power-on important and are investigating changes to restore that capability.

**WETEK PLAY(1)/CORE CEC** 

CEC control is not working in the WeTek Play (1) and WeTek Core projects since Kodi bumped libCEC to v4.0.0, but after a month long wait for Kodi v17-beta6 we felt it was better to release v7.90.009 and get feedback on other changes than wait even longer for the fix. If you need CEC remote functions on these devices please do not update to v7.90.009. **Update:** ~2 hours after release the fix is submitted, but you'll have to wait until next release.

**ADD-ON CHANGES**

There are now add-on repositories for v7.90.001-008 releases (old version of LibreSSL) and a new one for v7.90.009 and newer (new version of LibreSSL). We will not be maintaining two repos, so the older repo is now frozen to change and users must update to v7.90.009 (or newer) to receive future add-on updates. After updating to v7.90.009 Kodi will automatically disable inputstream.smoothstream and inputstream.mpd as these are superseded by inputstream.adaptive which you will need to install for some streaming add-ons to continue working. The new repo also removes Kodi ADSP add-ons as ADSP features are not complete and will be moved to Kodi v18. The new iConnect add-on allows a LibreELEC device to use network services from a USB tethered iPhone.

**\*\* REMINDER \*\***

LibreELEC operates a 24-hour ‘canary’ period between release files being posted for download and the release being available via auto-update. During this time Krypton users can update manually using the LibreELEC settings add-on. Jarvis users can update using the older .tar file method.

**New installations using the LibreELEC USB-SD Creator app**

[LibreELEC.USB-SD.Creator.Linux-32bit.bin](http://releases.libreelec.tv/LibreELEC.USB-SD.Creator.Linux-32bit.bin) [(info)](http://releases.libreelec.tv/LibreELEC.USB-SD.Creator.Linux-32bit.bin?mirrorlist) [LibreELEC.USB-SD.Creator.Linux-64bit.bin](http://releases.libreelec.tv/LibreELEC.USB-SD.Creator.Linux-64bit.bin) [(info)](http://releases.libreelec.tv/LibreELEC.USB-SD.Creator.Linux-64bit.bin?mirrorlist) [LibreELEC.USB-SD.Creator.macOS.dmg](http://releases.libreelec.tv/LibreELEC.USB-SD.Creator.macOS.dmg) [(info)](http://releases.libreelec.tv/LibreELEC.USB-SD.Creator.macOS.dmg?mirrorlist) [LibreELEC.USB-SD.Creator.Win32.exe](http://releases.libreelec.tv/LibreELEC.USB-SD.Creator.Win32.exe) [(info)](http://releases.libreelec.tv/LibreELEC.USB-SD.Creator.Win32.exe?mirrorlist)

**New installation using 3rd party USB or SD writer apps (.img.gz)**

[LibreELEC-Generic.x86\_64-7.90.009.img.gz](http://releases.libreelec.tv/LibreELEC-Generic.x86_64-7.90.009.img.gz) ([info](http://releases.libreelec.tv/LibreELEC-Generic.x86_64-7.90.009.img.gz?mirrorlist)) [LibreELEC-RPi.arm-7.90.009.img.gz](http://releases.libreelec.tv/LibreELEC-RPi.arm-7.90.009.img.gz) ([info](http://releases.libreelec.tv/LibreELEC-RPi.arm-7.90.009.img.gz?mirrorlist)) [LibreELEC-RPi2.arm-7.90.009.img.gz](http://releases.libreelec.tv/LibreELEC-RPi2.arm-7.90.009.img.gz) ([info](http://releases.libreelec.tv/LibreELEC-RPi2.arm-7.90.009.img.gz?mirrorlist)) [LibreELEC-imx6.arm-7.90.009.img.gz](http://releases.libreelec.tv/LibreELEC-imx6.arm-7.90.009.img.gz) ([info](http://releases.libreelec.tv/LibreELEC-imx6.arm-7.90.009.img.gz?mirrorlist)) [LibreELEC-Odroid\_C2.aarch64-7.90.009.img.gz](http://releases.libreelec.tv/LibreELEC-Odroid_C2.aarch64-7.90.009.img.gz) ([info](http://releases.libreelec.tv/LibreELEC-Odroid_C2.aarch64-7.90.009.img.gz?mirrorlist)) [LibreELEC-WeTek\_Play.arm-7.90.009.img.gz](http://releases.libreelec.tv/LibreELEC-WeTek_Play.arm-7.90.009.img.gz) ([info](http://releases.libreelec.tv/LibreELEC-WeTek_Play.arm-7.90.009.img.gz?mirrorlist)) [LibreELEC-WeTek\_Core.arm-7.90.009.img.gz](http://releases.libreelec.tv/LibreELEC-WeTek_Core.arm-7.90.009.img.gz) ([info](http://releases.libreelec.tv/LibreELEC-WeTek_Core.arm-7.90.009.img.gz?mirrorlist)) [LibreELEC-WeTek\_Hub.aarch64-7.90.009.img.gz](http://releases.libreelec.tv/LibreELEC-WeTek_Hub.aarch64-7.90.009.img.gz) ([info](http://releases.libreelec.tv/LibreELEC-WeTek_Hub.aarch64-7.90.009.img.gz?mirrorlist)) [LibreELEC-WeTek\_Play\_2.aarch64-7.90.009.img.gz](http://releases.libreelec.tv/LibreELEC-WeTek_Play_2.aarch64-7.90.009.img.gz) ([info](http://releases.libreelec.tv/LibreELEC-WeTek_Play_2.aarch64-7.90.009.img.gz?mirrorlist))

**New Install to WeTek internal NAND (.zip)**

[LibreELEC-WeTek\_Play.arm-7.90.009.zip](http://releases.libreelec.tv/LibreELEC-WeTek_Play.arm-7.90.009.zip) ([info](http://releases.libreelec.tv/LibreELEC-WeTek_Play.arm-7.90.009.zip?mirrorlist)) [LibreELEC-WeTek\_Core.arm-7.90.009.zip](http://releases.libreelec.tv/LibreELEC-WeTek_Core.arm-7.90.009.zip) ([info](http://releases.libreelec.tv/LibreELEC-WeTek_Core.arm-7.90.009.zip?mirrorlist)) [LibreELEC-WeTek\_Hub.aarch64-7.90.009.zip](http://releases.libreelec.tv/LibreELEC-WeTek_Hub.aarch64-7.90.009.zip) ([info](http://releases.libreelec.tv/LibreELEC-WeTek_Hub.aarch64-7.90.009.zip?mirrorlist)) [LibreELEC-WeTek\_Play\_2.aarch64-7.90.009.zip](http://releases.libreelec.tv/LibreELEC-WeTek_Play_2.aarch64-7.90.009.zip) ([info](http://releases.libreelec.tv/LibreELEC-WeTek_Play_2.aarch64-7.90.009.zip?mirrorlist))

**Manual Update from LibreELEC 7.0 or OpenELEC (.tar)**

[LibreELEC-Generic.x86\_64-7.90.009.tar](http://releases.libreelec.tv/LibreELEC-Generic.x86_64-7.90.009.tar) ([info](http://releases.libreelec.tv/LibreELEC-Generic.x86_64-7.90.009.tar?mirrorlist)) [LibreELEC-RPi.arm-7.90.009.tar](http://releases.libreelec.tv/LibreELEC-RPi.arm-7.90.009.tar) ([info](http://releases.libreelec.tv/LibreELEC-RPi.arm-7.90.009.tar?mirrorlist)) [LibreELEC-RPi2.arm-7.90.009.tar](http://releases.libreelec.tv/LibreELEC-RPi2.arm-7.90.009.tar) ([info](http://releases.libreelec.tv/LibreELEC-RPi2.arm-7.90.009.tar?mirrorlist)) [LibreELEC-imx6.arm-7.90.009.tar](http://releases.libreelec.tv/LibreELEC-imx6.arm-7.90.009.tar) ([info](http://releases.libreelec.tv/LibreELEC-imx6.arm-7.90.009.tar?mirrorlist)) [LibreELEC-Odroid\_C2.aarch64-7.90.009.tar](http://releases.libreelec.tv/LibreELEC-Odroid_C2.aarch64-7.90.009.tar) ([info](http://releases.libreelec.tv/LibreELEC-Odroid_C2.aarch64-7.90.009.tar?mirrorlist)) [LibreELEC-WeTek\_Play.arm-7.90.009.tar](http://releases.libreelec.tv/LibreELEC-WeTek_Play.arm-7.90.009.tar) ([info](http://releases.libreelec.tv/LibreELEC-WeTek_Play.arm-7.90.009.tar?mirrorlist)) [LibreELEC-WeTek\_Core.arm-7.90.009.tar](http://releases.libreelec.tv/LibreELEC-WeTek_Core.arm-7.90.009.tar) ([info](http://releases.libreelec.tv/LibreELEC-WeTek_Core.arm-7.90.009.tar?mirrorlist)) [LibreELEC-WeTek\_Hub.arm-7.90.009.tar](http://releases.libreelec.tv/LibreELEC-WeTek_Hub.aarch64-7.90.009.tar) ([info](http://releases.libreelec.tv/LibreELEC-WeTek_Hub.aarch64-7.90.009.tar?mirrorlist)) [LibreELEC-WeTek\_Play\_2.arm-7.90.009.tar](http://releases.libreelec.tv/LibreELEC-WeTek_Play_2.aarch64-7.90.009.tar) ([info](http://releases.libreelec.tv/LibreELEC-WeTek_Play_2.aarch64-7.90.009.tar?mirrorlist))

**SUPPORT ASSISTANCE AND BUG REPORTS**

If you spot issues, please flag them via a [bug report in the forums](http://forum.libreelec.tv/forum-35.html). You are also very welcome and encouraged to get involved and [submit fixes via GitHub!](https://github.com/LibreELEC/LibreELEC.tv)

{% include paypal.html %}
