---
layout: post
title: "LibreELEC (Krypton) v8.1.2 BETA"
image: "img/posts/2017/release_812b.png"
---

This is the third beta for our 8.2 release. It addresses minor findings related to the Samba bump: we now detect and avoid invalid Samba v3 configurations, old samba.conf.sample templates are overwritten with the new v4 template, and remote SMB shares are mounted using SMB2 or where possible SMB3. The release also adds support for the Raspberry Pi IQAudIO Digi+ board and a Xiaomi BT remote, and includes security fixes for the Blueborne Linux/BlueZ vulnerability. This is hopefully the final 8.1.x beta release; next will be 8.2.0.

Changes since LibreELEC 8.1.1 include:

- Fix boot-time overwrite of samba.conf.sample to ensure v4 template exists
- Fix Samba startup failures by detecting/disabling old (v3) samba.conf files
- Fix an issue in the embedded getedid script
- Fix Kodi to support 352KHz and 384KHz audio over S/PDIF
- Fix clearing of core files from /storage/.cache during Kodi startup
- Fix vulnerability (CVE-2017-1000250 aka Blueborne pt.1) in BlueZ
- Fix vulnerability (CVE-2017-1000251 aka Blueborne pt.2) in all kernels except Amlogic 3.10
- Fix a Python /dev/random issue that caused some Python crypto functions to error
- Fix to prevent boot-loops when a failed update leaves valid files in /storage/.update
- Update Amlogic 3.14 kernel to use kernel wireless-regdb on all reference devices
- Update RPi firmware to solve minor CEC button press issues
- Update nvidia-legacy driver to 340.104
- Update nvidia main driver to 384.90
- Update RTL8192EU driver
- Update Samba to 4.6.8
- Update kernel to enable SMB2 support (default) and where possible SMB3
- Add support for the Xiaomi Mi Box Bluetooth remote
- Add alsa configuration for the IQAudIO Digi+ on Raspberry Pi devices

[See detailed changes on GitHub](https://github.com/LibreELEC/LibreELEC.tv/compare/8.1.1...8.1.2) - along with previous changes for [LibreELEC v8.1.0 BETA](https://libreelec.tv/2017/08/libreelec-krypton-v8-1-0-beta/) and [LibreELEC v8.1.1 BETA](https://libreelec.tv/2017/09/libreelec-krypton-v8-1-1-beta/) releases.

**!!! SAMBA / SMB  CHANGES !!!**

LibreELEC 8.2 includes changes that allow the Kodi SMB client and our embedded Samba server to support SMB2/3 connections; deprecating SMB1 to improve security and performance. This is a disruptive change and many users will need to adapt their use of SMB shares or Samba:

- The Kodi SMB client now defaults to SMB3 connections but can fail to negotiate SMB3 with old Samba (NAS) versions. A new option in Kodi Settings > Services > SMB client > allows SMB2 or SMB1 to be forced for compatibility with legacy SMB servers.
- The embedded Samba server defaults to and supports only SMB2/SMB3 connections. The LibreELEC Settings add-on allows the minimum protocol versions to be changed, e.g. to enable SMB1 for compatibility with legacy SMB clients. It also supports GUI configuration of WORKGROUP name.
- Samba detects v3 /storage/.config/samba.conf configurations and ignores them to avoid the Samba service failing on startup. If this happens Samba starts with a default v4 configuration. Custom Samba configurations must be updated to use the new Samba 4.x base template (samba.conf.sample).
- Kodi "Windows network browsing" needs the Kodi SMB client to support SMB1 and we now default to SMB2/3 connections so browsing no longer works. Windows SMB shares must be added using the full server/share path. SMB sources from Samba/NAS devices can normally be browsed via the "ZeroConf network browsing" alternative.
- Connection failures to anonymous and guest shares are normally solved by creating a local machine user account and password credential for Kodi to use, then setting read or read-write permissions for that credential to the shares Kodi will access.

**SAMBA / SMB CONFIGURATION FILES**

Kodi SMB client configuration is stored in /storage/.kodi/.smb/smb.conf which can be extended with changes in /storage/.kodi/.smb/user.conf if required. Posts in the Kodi forum often refer to files in ~/.smb/smb.conf which is not correct for Kodi 17.4 or newer.

Samba server configuration uses /etc/samba/smb.conf unless /storage/.config/samba.conf custom config is present. Samba will not use ~/.smb/smb.conf which is commonly used in other Linux distributions.

If you experience issues with SMB shares (client or server) please post in the forums sharing information on the Windows and Samba versions and a Kodi debug log, and we will do our best to help.

**!! LIRC CHANGES !!**

In LibreELEC 8.0 the Lirc service is enabled when an IR receiver is detected in the system, but it is not started unless used with the lirc\_rpi or lirc\_xbox drivers or a personal lircd.conf. In LibreELEC 8.2 the Lirc service is enabled and supports all drivers which can result in the service starting and interfering with normal IR operations. If you experience "double button presses" after updating the Lirc service can be disabled in the 'Services' tab of the LibreELEC settings add-on. The Lirc service is disabled in new installations and must be manually enabled. Thanks to @HiasoffT changes the Lirc service is now configurable using a combination of /storage/.config/lirc\_options.conf and lircd.conf - the same approach used in desktop Linux distributions and most howto instructions users find via Google searches.

**!! TVHEADEND CHANGES !!**

LibreELEC 8.2 does not provide Tvheadend (Server) 4.0 so existing Tvheadend 4.0 users must remove it and install Tvheadend (Server) 4.2 as part of their upgrade. Tvheadend 4.0 has been discontinued because it is no longer maintained upstream and Tvheadend 4.2 has been available for some time and has proven to be more stable with better features and hardware support. Tvheadend does not provide an automatic upgrade or configuration export/import process so Tvheadend 4.0 users must perform a new installation of Tvheadend 4.2 on their LibreELEC device. This is inconvenient, but there is no other option.

Existing Tvheadend 4.2 add-on users will see "fail to start" error messages after updating. Once Kodi has started it will check the LibreELEC add-on repo and (if automatic updates are enabled) an 8.2 compatible version will be downloaded and installed. Once the add-on has updated Tvheadend 4.2 starts normally.

**INTEL HBR AUDIO**

In the last week initial patches to resolve the lack of pass-through HBR audio on NUC devices and similar with an internal DP > HDMI convertor were published. Current testing shows good results on Linux 4.13+ kernels but issues are seen with older hardware and the 4.11 kernel used in LibreELEC 8.2. We have provided feedback and testing will continue as patches evolve. We will add a stable fix to an 8.2 maintenance release if possible.

**AUTO-UPDATE**

Following a number of significant security issues we need to ensure more users run the latest release to benefit from security bug fixes. We have changed the default option for auto-update from manual to auto, to ensure minor version updates, e.g. 8.2.0 to 8.2.1 roll-out faster. Major version updates are still user-initiated, e.g. 8.2.0 to a future 9.0.0 release, and users can revert to manual update if preferred. There is no change to the 24-hour canary period between release and files being distributed via auto-update.

 

{% include paypal.html %}

[or donate by purchasing a LibreELEC teeshirt or hoodie](https://libreelec.tv/shop/)

 

**New installations using the LibreELEC USB-SD Creator app**

[LibreELEC.USB-SD.Creator.Linux-32bit.bin](http://releases.libreelec.tv/LibreELEC.USB-SD.Creator.Linux-32bit.bin) [(info)](http://releases.libreelec.tv/LibreELEC.USB-SD.Creator.Linux-32bit.bin?mirrorlist) [LibreELEC.USB-SD.Creator.Linux-64bit.bin](http://releases.libreelec.tv/LibreELEC.USB-SD.Creator.Linux-64bit.bin) [(info)](http://releases.libreelec.tv/LibreELEC.USB-SD.Creator.Linux-64bit.bin?mirrorlist) [LibreELEC.USB-SD.Creator.macOS.dmg](http://releases.libreelec.tv/LibreELEC.USB-SD.Creator.macOS.dmg) [(info)](http://releases.libreelec.tv/LibreELEC.USB-SD.Creator.macOS.dmg?mirrorlist) [LibreELEC.USB-SD.Creator.Win32.exe](http://releases.libreelec.tv/LibreELEC.USB-SD.Creator.Win32.exe) [(info)](http://releases.libreelec.tv/LibreELEC.USB-SD.Creator.Win32.exe?mirrorlist)

**New installation using 3rd party USB or SD writer apps (.img.gz)**

[LibreELEC-Generic.x86\_64-8.1.2.img.gz](http://releases.libreelec.tv/LibreELEC-Generic.x86_64-8.1.2.img.gz) ([info](http://releases.libreelec.tv/LibreELEC-Generic.x86_64-8.1.2.img.gz?mirrorlist)) [LibreELEC-RPi.arm-8.1.2.img.gz](http://releases.libreelec.tv/LibreELEC-RPi.arm-8.1.2.img.gz) ([info](http://releases.libreelec.tv/LibreELEC-RPi.arm-8.1.2.img.gz?mirrorlist)) [LibreELEC-RPi2.arm-8.1.2.img.gz](http://releases.libreelec.tv/LibreELEC-RPi2.arm-8.1.2.img.gz) ([info](http://releases.libreelec.tv/LibreELEC-RPi2.arm-8.1.2.img.gz?mirrorlist)) [LibreELEC-Slice.arm-8.1.2.img.gz](http://releases.libreelec.tv/LibreELEC-Slice.arm-8.1.2.img.gz) ([info](http://releases.libreelec.tv/LibreELEC-Slice.arm-8.1.2.img.gz?mirrorlist)) [LibreELEC-Slice3.arm-8.1.2.img.gz](http://releases.libreelec.tv/LibreELEC-Slice3.arm-8.1.2.img.gz) ([info](http://releases.libreelec.tv/LibreELEC-Slice3.arm-8.1.2.img.gz?mirrorlist)) [LibreELEC-imx6.arm-8.1.2.img.gz](http://releases.libreelec.tv/LibreELEC-imx6.arm-8.1.2.img.gz) ([info](http://releases.libreelec.tv/LibreELEC-imx6.arm-8.1.2.img.gz?mirrorlist)) [LibreELEC-Odroid\_C2.aarch64-8.1.2.img.gz](http://releases.libreelec.tv/LibreELEC-Odroid_C2.aarch64-8.1.2.img.gz) ([info](http://releases.libreelec.tv/LibreELEC-Odroid_C2.aarch64-8.1.2.img.gz?mirrorlist)) [LibreELEC-WeTek\_Play.arm-8.1.2.img.gz](http://releases.libreelec.tv/LibreELEC-WeTek_Play.arm-8.1.2.img.gz) ([info](http://releases.libreelec.tv/LibreELEC-WeTek_Play.arm-8.1.2.img.gz?mirrorlist)) [LibreELEC-WeTek\_Core.arm-8.1.2.img.gz](http://releases.libreelec.tv/LibreELEC-WeTek_Core.arm-8.1.2.img.gz) ([info](http://releases.libreelec.tv/LibreELEC-WeTek_Core.arm-8.1.2.img.gz?mirrorlist)) [LibreELEC-WeTek\_Hub.aarch64-8.1.2.img.gz](http://releases.libreelec.tv/LibreELEC-WeTek_Hub.aarch64-8.1.2.img.gz) ([info](http://releases.libreelec.tv/LibreELEC-WeTek_Hub.aarch64-8.1.2.img.gz?mirrorlist)) [LibreELEC-WeTek\_Play\_2.aarch64-8.1.2.img.gz](http://releases.libreelec.tv/LibreELEC-WeTek_Play_2.aarch64-8.1.2.img.gz) ([info](http://releases.libreelec.tv/LibreELEC-WeTek_Play_2.aarch64-8.1.2.img.gz?mirrorlist))

**New Install to WeTek internal NAND (.zip)**

[LibreELEC-WeTek\_Play.arm-8.1.2.zip](http://releases.libreelec.tv/LibreELEC-WeTek_Play.arm-8.1.2.zip) ([info](http://releases.libreelec.tv/LibreELEC-WeTek_Play.arm-8.1.2.zip?mirrorlist)) [LibreELEC-WeTek\_Core.arm-8.1.2.zip](http://releases.libreelec.tv/LibreELEC-WeTek_Core.arm-8.1.2.zip) ([info](http://releases.libreelec.tv/LibreELEC-WeTek_Core.arm-8.1.2.zip?mirrorlist)) [LibreELEC-WeTek\_Hub.aarch64-8.1.2.zip](http://releases.libreelec.tv/LibreELEC-WeTek_Hub.aarch64-8.1.2.zip) ([info](http://releases.libreelec.tv/LibreELEC-WeTek_Hub.aarch64-8.1.2.zip?mirrorlist)) [LibreELEC-WeTek\_Play\_2.aarch64-8.1.2.zip](http://releases.libreelec.tv/LibreELEC-WeTek_Play_2.aarch64-8.1.2.zip) ([info](http://releases.libreelec.tv/LibreELEC-WeTek_Play_2.aarch64-8.1.2.zip?mirrorlist))

**Manual Update from LibreELEC 7.0, 8.0, or OpenELEC (.tar)**

[LibreELEC-Generic.x86\_64-8.1.2.tar](http://releases.libreelec.tv/LibreELEC-Generic.x86_64-8.1.2.tar) ([info](http://releases.libreelec.tv/LibreELEC-Generic.x86_64-8.1.2.tar?mirrorlist)) [LibreELEC-RPi.arm-8.1.2.tar](http://releases.libreelec.tv/LibreELEC-RPi.arm-8.1.2.tar) ([info](http://releases.libreelec.tv/LibreELEC-RPi.arm-8.1.2.tar?mirrorlist)) [LibreELEC-RPi2.arm-8.1.2.tar](http://releases.libreelec.tv/LibreELEC-RPi2.arm-8.1.2.tar) ([info](http://releases.libreelec.tv/LibreELEC-RPi2.arm-8.1.2.tar?mirrorlist)) [LibreELEC-Slice.arm-8.1.2.tar](http://releases.libreelec.tv/LibreELEC-Slice.arm-8.1.2.tar) ([info](http://releases.libreelec.tv/LibreELEC-Slice.arm-8.1.2.tar?mirrorlist)) [LibreELEC-Slice3.arm-8.1.2.tar](http://releases.libreelec.tv/LibreELEC-Slice3.arm-8.1.2.tar) ([info](http://releases.libreelec.tv/LibreELEC-Slice3.arm-8.1.2.tar?mirrorlist)) [LibreELEC-imx6.arm-8.1.2.tar](http://releases.libreelec.tv/LibreELEC-imx6.arm-8.1.2.tar) ([info](http://releases.libreelec.tv/LibreELEC-imx6.arm-8.1.2.tar?mirrorlist)) [LibreELEC-Odroid\_C2.aarch64-8.1.2.tar](http://releases.libreelec.tv/LibreELEC-Odroid_C2.aarch64-8.1.2.tar) ([info](http://releases.libreelec.tv/LibreELEC-Odroid_C2.aarch64-8.1.2.tar?mirrorlist)) [LibreELEC-WeTek\_Play.arm-8.1.2.tar](http://releases.libreelec.tv/LibreELEC-WeTek_Play.arm-8.1.2.tar) ([info](http://releases.libreelec.tv/LibreELEC-WeTek_Play.arm-8.1.2.tar?mirrorlist)) [LibreELEC-WeTek\_Core.arm-8.1.2.tar](http://releases.libreelec.tv/LibreELEC-WeTek_Core.arm-8.1.2.tar) ([info](http://releases.libreelec.tv/LibreELEC-WeTek_Core.arm-8.1.2.tar?mirrorlist)) [LibreELEC-WeTek\_Hub.arm-8.1.2.tar](http://releases.libreelec.tv/LibreELEC-WeTek_Hub.aarch64-8.1.2.tar) ([info](http://releases.libreelec.tv/LibreELEC-WeTek_Hub.aarch64-8.1.2.tar?mirrorlist)) [LibreELEC-WeTek\_Play\_2.arm-8.1.2.tar](http://releases.libreelec.tv/LibreELEC-WeTek_Play_2.aarch64-8.1.2.tar) ([info](http://releases.libreelec.tv/LibreELEC-WeTek_Play_2.aarch64-8.1.2.tar?mirrorlist))

**COMMENTS ARE CLOSED**

Comments on this blog post have been deliberately closed. Please direct all requests for support assistance to the forum where more people will see your post. If you'd like to post thanks! messages, please consider making a small donation to the project.
