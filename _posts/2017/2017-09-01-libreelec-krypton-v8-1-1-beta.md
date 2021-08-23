---
layout: post
title: "LibreELEC (Krypton) v8.1.1 BETA"
image: "img/posts/2017/release_811.png"
---

This is the second BETA of our 8.2 release; a mid-year version bump to enhance hardware support and capabilities. This beta addresses issues in our OVA image, a Broadcom WIFI firmware vulnerability for Raspberry Pi 3 and Zero W users, and MPEG issues seen with some nVidia cards. It also adds support for the inexpensive Xbox ONE (DVB-C/T/T2) USB tuner (about €12 on eBay), and LibreELEC settings gains new options for changing the embedded Samba server Workgroup and adjusting the SMB protocol versions supported for security and SMB share compatibility. Kodi is bumped to 17.4 final.

Changes since LibreELEC 8.1.0 include:

- Fix VMware OVF template, drop OVA .img suffix and force 'installer' mode
- Update RPi kernel to 4.9.43
- Update RPi wifi firmware to resolve CVE-2017-9417 (Broadpwn)
- Update to Samba 4.6.7
- Update to Kodi 17.4 final
- Update nVidia main driver to 384.69
- Update LibreELEC settings add-on to expose more Samba config options
- Revert Hauppauge DualHD tuner support (back to single-tuner, which works)
- Add support for Xbox ONE (DVB-C/T/T2) USB tuner

[See detailed changes on GitHub](https://github.com/LibreELEC/LibreELEC.tv/compare/8.1.0...8.1.1) - and the change summary for [LibreELEC v8.1.0 BETA](https://libreelec.tv/2017/08/libreelec-krypton-v8-1-0-beta/)

**!!! SAMBA  UPDATE - IMPORTANT !!!**

The fall "Creators Update" for Windows 10 removes SMB1 client/server support and NAS devices now ship with configuration that only supports SMB2/3 - causing problems because all versions of Kodi before 17.4 can only make SMB1 connections. This release includes changes that allow the Kodi SMB client and our embedded Samba server to work with SMB2/3 connections; improving SMB security and performance. However, it is a disruptive change:

- The Kodi SMB client sometimes fails to negotiate SMB3 with old Samba versions. There is a new option in Kodi Settings > Services > SMB client > that allows SMB2 or SMB1 connections to be forced for compatibility with legacy SMB servers.
- The embedded Samba server now defaults to minimum SMB2 and maximum SMB3 and the LibreELEC Settings add-on allows the supported SMB protocol versions to be changed for compatibility with legacy clients. It also allows configuration of the WORKGROUP name.
- Samba 3.x /storage/.config/samba.conf configurations must be updated to use the new Samba 4.x template (samba.conf.sample) as some Samba 3.x configuration is incompatible. The embedded Samba server may fail to start until this is done. If the reason for older changes was workgroup name please delete the file and use the new in-GUI configuration method.
- Browsing SMB shares via "Windows network browsing" in Kodi requires the browser service on the SMB server. This SMB1 service is removed from Win10 in the creators update and there is no equivalent for SMB2/3 versions of the SMB protocol. When Kodi makes SMB2+ connections (which is now our default) Kodi network browsing to add sources will not work. Windows SMB shares can still be added using the full server/share path. It is still possible to browse non-Windows Samba/NAS devices that advertise SMB shares via ZeroConf (aka Bonjour/Avahi).
- Connection failures to anonymous and guest shares are solved by creating a new local machine (not Microsoft ID) user and strong password for Kodi to use on the server, then assigning appropriate read or read-write permissions to the shares Kodi will access.

**SAMBA CONFIGURATION FILES**

The active configuration for the Kodi SMB client is stored in /storage/.kodi/.smb/smb.conf which can be extended with personal changes in /storage/.kodi/.smb/user.conf. Posts in the Kodi forum often refer to configuration files in ~/.smb/smb.conf - this location is incorrect for Kodi 17.4 which is modified to use its own 'internal' smbclient configuration.

The active configuration file for the embedded Samba server is /etc/samba/smb.conf unless a personal configuration exists in /storage/.config/samba.conf. Samba is started with an explicit declaration of the config file to use so it will not detect ~/.smb/smb.conf if it exists (this location is used on some other Linux distributions).

We see frequent forum postings where users attempt to change the Kodi smbclient configuration through the /storage/.config/samba.conf file. This is pointless. The embedded Samba server configuration has no effect on the Samba client connections made by Kodi.

If you experience issues with SMB shares (client or server) please post in the forums sharing information on the Windows and Samba versions, and a Kodi debug log, and we will do our best to help.

**!! LIRC CHANGES !!**

In LibreELEC 8.0 the Lirc service is enabled when an IR receiver is detected in the system, but it is not started unless used with the lirc\_rpi or lirc\_xbox drivers or a personal lircd.conf. In LibreELEC 8.2 the Lirc service supports all drivers. This can result in the service starting and interfering with normal IR operations. If you experience "double button presses" after updating the Lirc service can be disabled in the 'Services' tab of the LibreELEC settings add-on. The Lirc service is disabled in new installations and must be manually enabled. Thanks to @HiasoffT changes the Lirc service is now configurable using a combination of /storage/.config/lirc\_options.conf and lircd.conf - the same approach as most desktop Linux distributions (and howto instructions users find via Google searches).

**AUTO-UPDATE**

After recent security issues with Kodi and Samba we need to ensure more users are running the latest release to benefit from feature and security bug fixes. To achieve this we have changed the default setting for auto-update from manual to auto. Auto-update provides maintenance updates, e.g. 8.1.0 BETA to 8.1.1 and 8.2.0 and from 8.2.0 to 8.2.1 etc. in the 8.2 release series. Major version updates are still manual (user-initiated) updates, e.g. 8.2.0 to a future 9.0.0 release. Users can revert to manual update in the LibreELEC settings add-on. NB: LibreELEC operates a 24-hour canary period between new release files being available and auto-update being enabled.

 

{% include paypal.html %}

[or donate by purchasing a LibreELEC teeshirt or hoodie](https://libreelec.tv/shop/)

 

**New installations using the LibreELEC USB-SD Creator app**

[LibreELEC.USB-SD.Creator.Linux-32bit.bin](http://releases.libreelec.tv/LibreELEC.USB-SD.Creator.Linux-32bit.bin) [(info)](http://releases.libreelec.tv/LibreELEC.USB-SD.Creator.Linux-32bit.bin?mirrorlist) [LibreELEC.USB-SD.Creator.Linux-64bit.bin](http://releases.libreelec.tv/LibreELEC.USB-SD.Creator.Linux-64bit.bin) [(info)](http://releases.libreelec.tv/LibreELEC.USB-SD.Creator.Linux-64bit.bin?mirrorlist) [LibreELEC.USB-SD.Creator.macOS.dmg](http://releases.libreelec.tv/LibreELEC.USB-SD.Creator.macOS.dmg) [(info)](http://releases.libreelec.tv/LibreELEC.USB-SD.Creator.macOS.dmg?mirrorlist) [LibreELEC.USB-SD.Creator.Win32.exe](http://releases.libreelec.tv/LibreELEC.USB-SD.Creator.Win32.exe) [(info)](http://releases.libreelec.tv/LibreELEC.USB-SD.Creator.Win32.exe?mirrorlist)

**New installation using 3rd party USB or SD writer apps (.img.gz)**

[LibreELEC-Generic.x86\_64-8.1.1.img.gz](http://releases.libreelec.tv/LibreELEC-Generic.x86_64-8.1.1.img.gz) ([info](http://releases.libreelec.tv/LibreELEC-Generic.x86_64-8.1.1.img.gz?mirrorlist)) [LibreELEC-RPi.arm-8.1.1.img.gz](http://releases.libreelec.tv/LibreELEC-RPi.arm-8.1.1.img.gz) ([info](http://releases.libreelec.tv/LibreELEC-RPi.arm-8.1.1.img.gz?mirrorlist)) [LibreELEC-RPi2.arm-8.1.1.img.gz](http://releases.libreelec.tv/LibreELEC-RPi2.arm-8.1.1.img.gz) ([info](http://releases.libreelec.tv/LibreELEC-RPi2.arm-8.1.1.img.gz?mirrorlist)) [LibreELEC-Slice.arm-8.1.1.img.gz](http://releases.libreelec.tv/LibreELEC-Slice.arm-8.1.1.img.gz) ([info](http://releases.libreelec.tv/LibreELEC-Slice.arm-8.1.1.img.gz?mirrorlist)) [LibreELEC-Slice3.arm-8.1.1.img.gz](http://releases.libreelec.tv/LibreELEC-Slice3.arm-8.1.1.img.gz) ([info](http://releases.libreelec.tv/LibreELEC-Slice3.arm-8.1.1.img.gz?mirrorlist)) [LibreELEC-imx6.arm-8.1.1.img.gz](http://releases.libreelec.tv/LibreELEC-imx6.arm-8.1.1.img.gz) ([info](http://releases.libreelec.tv/LibreELEC-imx6.arm-8.1.1.img.gz?mirrorlist)) [LibreELEC-Odroid\_C2.aarch64-8.1.1.img.gz](http://releases.libreelec.tv/LibreELEC-Odroid_C2.aarch64-8.1.1.img.gz) ([info](http://releases.libreelec.tv/LibreELEC-Odroid_C2.aarch64-8.1.1.img.gz?mirrorlist)) [LibreELEC-WeTek\_Play.arm-8.1.1.img.gz](http://releases.libreelec.tv/LibreELEC-WeTek_Play.arm-8.1.1.img.gz) ([info](http://releases.libreelec.tv/LibreELEC-WeTek_Play.arm-8.1.1.img.gz?mirrorlist)) [LibreELEC-WeTek\_Core.arm-8.1.1.img.gz](http://releases.libreelec.tv/LibreELEC-WeTek_Core.arm-8.1.1.img.gz) ([info](http://releases.libreelec.tv/LibreELEC-WeTek_Core.arm-8.1.1.img.gz?mirrorlist)) [LibreELEC-WeTek\_Hub.aarch64-8.1.1.img.gz](http://releases.libreelec.tv/LibreELEC-WeTek_Hub.aarch64-8.1.1.img.gz) ([info](http://releases.libreelec.tv/LibreELEC-WeTek_Hub.aarch64-8.1.1.img.gz?mirrorlist)) [LibreELEC-WeTek\_Play\_2.aarch64-8.1.1.img.gz](http://releases.libreelec.tv/LibreELEC-WeTek_Play_2.aarch64-8.1.1.img.gz) ([info](http://releases.libreelec.tv/LibreELEC-WeTek_Play_2.aarch64-8.1.1.img.gz?mirrorlist))

**New Install to WeTek internal NAND (.zip)**

[LibreELEC-WeTek\_Play.arm-8.1.1.zip](http://releases.libreelec.tv/LibreELEC-WeTek_Play.arm-8.1.1.zip) ([info](http://releases.libreelec.tv/LibreELEC-WeTek_Play.arm-8.1.1.zip?mirrorlist)) [LibreELEC-WeTek\_Core.arm-8.1.1.zip](http://releases.libreelec.tv/LibreELEC-WeTek_Core.arm-8.1.1.zip) ([info](http://releases.libreelec.tv/LibreELEC-WeTek_Core.arm-8.1.1.zip?mirrorlist)) [LibreELEC-WeTek\_Hub.aarch64-8.1.1.zip](http://releases.libreelec.tv/LibreELEC-WeTek_Hub.aarch64-8.1.1.zip) ([info](http://releases.libreelec.tv/LibreELEC-WeTek_Hub.aarch64-8.1.1.zip?mirrorlist)) [LibreELEC-WeTek\_Play\_2.aarch64-8.1.1.zip](http://releases.libreelec.tv/LibreELEC-WeTek_Play_2.aarch64-8.1.1.zip) ([info](http://releases.libreelec.tv/LibreELEC-WeTek_Play_2.aarch64-8.1.1.zip?mirrorlist))

**Manual Update from LibreELEC 7.0, 8.0, or OpenELEC (.tar)**

[LibreELEC-Generic.x86\_64-8.1.1.tar](http://releases.libreelec.tv/LibreELEC-Generic.x86_64-8.1.1.tar) ([info](http://releases.libreelec.tv/LibreELEC-Generic.x86_64-8.1.1.tar?mirrorlist)) [LibreELEC-RPi.arm-8.1.1.tar](http://releases.libreelec.tv/LibreELEC-RPi.arm-8.1.1.tar) ([info](http://releases.libreelec.tv/LibreELEC-RPi.arm-8.1.1.tar?mirrorlist)) [LibreELEC-RPi2.arm-8.1.1.tar](http://releases.libreelec.tv/LibreELEC-RPi2.arm-8.1.1.tar) ([info](http://releases.libreelec.tv/LibreELEC-RPi2.arm-8.1.1.tar?mirrorlist)) [LibreELEC-Slice.arm-8.1.1.tar](http://releases.libreelec.tv/LibreELEC-Slice.arm-8.1.1.tar) ([info](http://releases.libreelec.tv/LibreELEC-Slice.arm-8.1.1.tar?mirrorlist)) [LibreELEC-Slice3.arm-8.1.1.tar](http://releases.libreelec.tv/LibreELEC-Slice3.arm-8.1.1.tar) ([info](http://releases.libreelec.tv/LibreELEC-Slice3.arm-8.1.1.tar?mirrorlist)) [LibreELEC-imx6.arm-8.1.1.tar](http://releases.libreelec.tv/LibreELEC-imx6.arm-8.1.1.tar) ([info](http://releases.libreelec.tv/LibreELEC-imx6.arm-8.1.1.tar?mirrorlist)) [LibreELEC-Odroid\_C2.aarch64-8.1.1.tar](http://releases.libreelec.tv/LibreELEC-Odroid_C2.aarch64-8.1.1.tar) ([info](http://releases.libreelec.tv/LibreELEC-Odroid_C2.aarch64-8.1.1.tar?mirrorlist)) [LibreELEC-WeTek\_Play.arm-8.1.1.tar](http://releases.libreelec.tv/LibreELEC-WeTek_Play.arm-8.1.1.tar) ([info](http://releases.libreelec.tv/LibreELEC-WeTek_Play.arm-8.1.1.tar?mirrorlist)) [LibreELEC-WeTek\_Core.arm-8.1.1.tar](http://releases.libreelec.tv/LibreELEC-WeTek_Core.arm-8.1.1.tar) ([info](http://releases.libreelec.tv/LibreELEC-WeTek_Core.arm-8.1.1.tar?mirrorlist)) [LibreELEC-WeTek\_Hub.arm-8.1.1.tar](http://releases.libreelec.tv/LibreELEC-WeTek_Hub.aarch64-8.1.1.tar) ([info](http://releases.libreelec.tv/LibreELEC-WeTek_Hub.aarch64-8.1.1.tar?mirrorlist)) [LibreELEC-WeTek\_Play\_2.arm-8.1.1.tar](http://releases.libreelec.tv/LibreELEC-WeTek_Play_2.aarch64-8.1.1.tar) ([info](http://releases.libreelec.tv/LibreELEC-WeTek_Play_2.aarch64-8.1.1.tar?mirrorlist))
