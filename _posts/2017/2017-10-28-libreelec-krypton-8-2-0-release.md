---
layout: post
title: "LibreELEC (Krypton) 8.2.0 RELEASE"
image: "img/posts/2017/release_820.png"
---

LibreELEC 8.2.0 provides a mid-year bump to improve hardware support on Intel and Raspberry Pi hardware. It also resolves minor support issues on a range of devices and fixes a number of important security issues affecting the core OS reported in recent months. Kodi is bumped to 17.5, and Samba bumps to 4.6 which brings support for SMB2/3 to LibreELEC for the first time. **PLEASE READ THE RELEASE NOTES** below before posting an issue in the forums as there are disruptive changes to Samba, Lirc and Tvheadend. **NB: An issue with HEVC playback on Raspberry Pi and Slice hardware was reported during the initial canary period and replacement 8.2.0.1  images with a fix (for those devices only) have now been published.**

Changes since LibreELEC 8.0.2 include:

- Fix boot-time overwrite of samba.conf.sample to ensure v4 template exists
- Fix Samba startup failures by detecting/disabling old (v3) samba.conf files
- Fix NAND install on WeTek Hub/Play 2 after Android Marshmallow updates
- Fix VMware OVF template, drop OVA .img suffix and force ‘installer’ mode
- Fix an issue in the embedded getedid script
- Fix Kodi to support 352KHz and 384KHz audio over S/PDIF
- Fix clearing of core files from /storage/.cache during Kodi startup
- Fix vulnerability (CVE-2017-1000250 aka Blueborne pt.1) in BlueZ
- Fix vulnerability (CVE-2017-1000251 aka Blueborne pt.2) in all kernels except Amlogic 3.10
- Fix a Python /dev/random issue that caused some Python crypto functions to error
- Fix to prevent boot-loops when a failed update leaves valid files in /storage/.update
- Update Amlogic 3.14 kernel to use kernel wireless-regdb on all reference devices
- Update RPi firmware to solve minor CEC button press issues
- Update RPi wifi firmware to resolve CVE-2017-9417 (Broadpwn)
- Update wpa\_supplicant to resolve multiple CVE's (KRACK)
- Update linux-firmware and misc-firmware packages
- Update nvidia-legacy driver to 340.104
- Update nvidia main driver to 384.90
- Update RTL8192EU driver
- Update RTL8188EU driver
- Update RPi kernel to 4.9.59
- Update Generic kernel to 4.11.8
- Update from LibreSSL to OpenSSL
- Update Samba to 4.6.8
- Update to lirc 0.9.4d
- Update Kodi to 17.5 (the 17.5.1 release is for Android only)
- Update kernel to enable SMB2 support (default) and where possible SMB3
- Update LibreELEC settings add-on to expose more Samba config options
- Revert Hauppauge DualHD tuner support (back to single-tuner, which works)
- Add Slice and Slice3 projects
- Add (merge) Virtual project into Generic
- Add buildsystem changes to make backports from master easier
- Add support for the Xiaomi Mi Box Bluetooth remote
- Add support for Xbox ONE (DVB-C/T/T2) USB tuner (excluding Amlogic devices)
- Add alsa configuration for the IQAudIO Digi+ on Raspberry Pi devices
- Add dummy Tvheadend 4.0 add-on to ensure 4.0 is disabled on upgrade

[See detailed changes on GitHub](https://github.com/LibreELEC/LibreELEC.tv/compare/8.0.2...8.2.0) - along with lesser [differences from the 8.1.2 BETA](https://github.com/LibreELEC/LibreELEC.tv/compare/8.1.2...8.2.0) release.

**!!! SAMBA / SMB  CHANGES !!!**

_**Samba = server** software embedded into LibreELEC images_

_**SMB = client protocol** used for connecting to Windows Server and Samba shares_

LibreELEC 8.2.0 includes changes that allow the Kodi SMB client and our embedded Samba server to support SMB2/3 connections; deprecating SMB1 to improve security and performance. This is necessary to cope with changes Microsoft introduced in the Windows 10 'Fall Creators Update' to resolve SMB1 security issues. Please see Microsoft notes [here](https://blogs.technet.microsoft.com/filecab/2016/09/16/stop-using-smb1/) and [here](https://support.microsoft.com/en-us/help/4034314/smbv1-is-not-installed-windows-10-and-windows-server-version-1709) and [here](https://support.microsoft.com/en-us/help/4046019/guest-access-smb2-disabled-by-default-in-windows-10-server-2016) for an explanation.

LibreELEC changes are summarised below:

- The Kodi SMB client now defaults to SMB3 connections but can fail to negotiate SMB3 with old Samba (NAS) versions. A new option in Kodi Settings > Services > SMB client > allows SMB2 or SMB1 to be forced for compatibility with legacy SMB servers.

- Some router and NAS devices have proprietary SMB1 implementations that do not support NTLMv2 and forcing SMB1 still results in a refused connection. This is normally resolved by adding **client NTLMv2 auth = no** and **client use spnego = no** to /storage/.kodi/.smb/user.conf before rebooting. In a future LibreELEC release we will make this configurable within the Kodi settings GUI.

- The embedded Samba server defaults to and supports only SMB2/SMB3 connections. The LibreELEC Settings add-on allows the minimum protocol version to be changed, e.g. to enable SMB1 for compatibility with legacy SMB clients. It also supports GUI configuration of WORKGROUP name.

- In other Linux distros Samba clients default to SMB1 for all Samba versions up to v4.7 when the Samba default changes to SMB2. If the installed Samba version is between v4.1 and v4.6 you can force SMB2/3 connections by adding **client min protocol = SMB2** and **client max protocol = SMB3** to smb.conf. Samba versions older than v4.1 do not support SMB2/3 and require the LibreELEC Samba server to be configured for SMB1 support.

- Samba detects v3 /storage/.config/samba.conf configurations and ignores them to avoid the Samba service failing on startup. If this happens Samba starts with a default v4 configuration. Custom Samba configurations must be updated to use the new Samba 4.x base template (samba.conf.sample).

- Kodi "Windows network browsing" needs the Kodi SMB client to support SMB1 and we now default to SMB2/3 connections so browsing no longer works. Windows SMB share sources must be added using the full server/share path. SMB sources from Samba/NAS devices can normally be browsed via the "ZeroConf network browsing" alternative.

- Connection failures to anonymous and guest shares on a Windows server are normally solved by creating a local machine user account and password credential on the server for Kodi to use, then setting read or read-write permissions for that credential to the shares Kodi will access.

- Connection failures from a Windows client to the embedded Samba server are probably the result of Win10 changes that remove support for guest/anonymous access. Enabling password authentication in the LibreELEC settings add-on and setting username/password credentials should restore access.

- Local filesystem mounts of a remote SMB filesystem via systemd or autostart.sh now default to SMB2 so connections to SMB1 shares fail unless _vers=1.0_ is added into the mount command to force SMB1.

**SAMBA / SMB CONFIGURATION FILES**

Kodi forum posts commonly refer to Samba configuration files in ~/.smb/smb.conf which is common in other Linux distros but is not correct for LibreELEC and Kodi 17.4 or newer. The embedded Samba server obtains the runtime config from /etc/samba/smb.conf unless /storage/.config/samba.conf custom config is present. The Kodi SMB client configuration is stored in /storage/.kodi/.smb/smb.conf which can be extended with changes in /storage/.kodi/.smb/user.conf if required. nb: Changes to smb.conf in the same location will be overwritten by GUI client changes. If you experience issues with SMB shares (client or server) please post in the forums sharing details of the Windows and Samba versions and a Kodi debug log.

**!! LIRC CHANGES !!**

In LibreELEC 8.0 the Lirc service is enabled when an IR receiver is detected in the system, but it is not started unless used with the lirc\_rpi or lirc\_xbox drivers or a personal lircd.conf. In LibreELEC 8.2 the Lirc service is enabled and supports all drivers which can result in the service starting and interfering with normal IR operations. If you experience "double button presses" after updating the Lirc service can be disabled in the 'Services' tab of the LibreELEC settings add-on. The Lirc service is disabled in new installations and must be manually enabled. Thanks to @HiasoffT changes the Lirc service is now configurable using a combination of /storage/.config/lirc\_options.conf and lircd.conf - the same approach used in desktop Linux distributions and most howto instructions users find via Google searches.

**!! TVHEADEND CHANGES !!**

LibreELEC 8.2 does not provide Tvheadend (Server) 4.0 so the add-on repo has been populated with a dummy 4.0 add-on that Kodi will download then mark as broken. It has been discontinued because it is no longer maintained upstream. Tvheadend 4.2 has been available for some time and has proven to be more stable with better features and hardware support. Unfortunately Tvheadend does not provide an automatic upgrade or configuration export/import process so 4.0 users must perform a new installation of Tvheadend 4.2. This is inconvenient, but there is no other option.

NB: Existing Tvheadend 4.2 add-on users will see "fail to start" messages after updating to the LibreELEC 8.2.0 release. Once Kodi has started it checks our add-on repo and a new (compatible) version is downloaded and installed. Once the add-on has updated Tvheadend 4.2 will start normally.

**INTEL HBR AUDIO**

Initial patches to resolve the lack of pass-through HBR audio on NUC devices and similar with an internal DP > HDMI convertor were published recently. Testing has shown good results on Linux 4.13+ kernels but issues are seen with older Intel/NUC hardware using the 4.11 kernel used in LibreELEC 8.2. As a result these patches are not suitable for the 8.2.0 release and this minor issue will be resolved with LibreELEC 9.0 in the future.

**AUTO-UPDATE**

Following a number of significant security issues we need to ensure more users run the latest release to benefit from security bug fixes. LibreELEC 8.2.0 changes the default OS update option from manual to auto-update to ensure maintenance updates, e.g. 8.2.0 to 8.2.1 roll-out faster. Major version updates will remain user-initiated and there are no changes to the 24-hour canary period between a release and update files being distributed via auto-update.

{% include paypal.html %}

[or donate by purchasing a LibreELEC teeshirt or hoodie](https://libreelec.tv/shop/)

 

**New installations using the LibreELEC USB-SD Creator app**

[LibreELEC.USB-SD.Creator.Linux-32bit.bin](http://releases.libreelec.tv/LibreELEC.USB-SD.Creator.Linux-32bit.bin) [(info)](http://releases.libreelec.tv/LibreELEC.USB-SD.Creator.Linux-32bit.bin?mirrorlist) [LibreELEC.USB-SD.Creator.Linux-64bit.bin](http://releases.libreelec.tv/LibreELEC.USB-SD.Creator.Linux-64bit.bin) [(info)](http://releases.libreelec.tv/LibreELEC.USB-SD.Creator.Linux-64bit.bin?mirrorlist) [LibreELEC.USB-SD.Creator.macOS.dmg](http://releases.libreelec.tv/LibreELEC.USB-SD.Creator.macOS.dmg) [(info)](http://releases.libreelec.tv/LibreELEC.USB-SD.Creator.macOS.dmg?mirrorlist) [LibreELEC.USB-SD.Creator.Win32.exe](http://releases.libreelec.tv/LibreELEC.USB-SD.Creator.Win32.exe) [(info)](http://releases.libreelec.tv/LibreELEC.USB-SD.Creator.Win32.exe?mirrorlist)

**New installation using 3rd party USB or SD writer apps (.img.gz)**

[LibreELEC-Generic.x86\_64-8.2.0.img.gz](http://releases.libreelec.tv/LibreELEC-Generic.x86_64-8.2.0.img.gz) ([info](http://releases.libreelec.tv/LibreELEC-Generic.x86_64-8.2.0.img.gz?mirrorlist)) [LibreELEC-RPi.arm-8.2.0.1.img.gz](http://releases.libreelec.tv/LibreELEC-RPi.arm-8.2.0.1.img.gz) ([info](http://releases.libreelec.tv/LibreELEC-RPi.arm-8.2.0.1.img.gz?mirrorlist)) [LibreELEC-RPi2.arm-8.2.0.1.img.gz](http://releases.libreelec.tv/LibreELEC-RPi2.arm-8.2.0.1.img.gz) ([info](http://releases.libreelec.tv/LibreELEC-RPi2.arm-8.2.0.1.img.gz?mirrorlist)) [LibreELEC-Slice.arm-8.2.0.1.img.gz](http://releases.libreelec.tv/LibreELEC-Slice.arm-8.2.0.1.img.gz) ([info](http://releases.libreelec.tv/LibreELEC-Slice.arm-8.2.0.1.img.gz?mirrorlist)) [LibreELEC-Slice3.arm-8.2.0.1.img.gz](http://releases.libreelec.tv/LibreELEC-Slice3.arm-8.2.0.1.img.gz) ([info](http://releases.libreelec.tv/LibreELEC-Slice3.arm-8.2.0.1.img.gz?mirrorlist)) [LibreELEC-imx6.arm-8.2.0.img.gz](http://releases.libreelec.tv/LibreELEC-imx6.arm-8.2.0.img.gz) ([info](http://releases.libreelec.tv/LibreELEC-imx6.arm-8.2.0.img.gz?mirrorlist)) [LibreELEC-Odroid\_C2.aarch64-8.2.0.img.gz](http://releases.libreelec.tv/LibreELEC-Odroid_C2.aarch64-8.2.0.img.gz) ([info](http://releases.libreelec.tv/LibreELEC-Odroid_C2.aarch64-8.2.0.img.gz?mirrorlist)) [LibreELEC-WeTek\_Play.arm-8.2.0.img.gz](http://releases.libreelec.tv/LibreELEC-WeTek_Play.arm-8.2.0.img.gz) ([info](http://releases.libreelec.tv/LibreELEC-WeTek_Play.arm-8.2.0.img.gz?mirrorlist)) [LibreELEC-WeTek\_Core.arm-8.2.0.img.gz](http://releases.libreelec.tv/LibreELEC-WeTek_Core.arm-8.2.0.img.gz) ([info](http://releases.libreelec.tv/LibreELEC-WeTek_Core.arm-8.2.0.img.gz?mirrorlist)) [LibreELEC-WeTek\_Hub.aarch64-8.2.0.img.gz](http://releases.libreelec.tv/LibreELEC-WeTek_Hub.aarch64-8.2.0.img.gz) ([info](http://releases.libreelec.tv/LibreELEC-WeTek_Hub.aarch64-8.2.0.img.gz?mirrorlist)) [LibreELEC-WeTek\_Play\_2.aarch64-8.2.0.img.gz](http://releases.libreelec.tv/LibreELEC-WeTek_Play_2.aarch64-8.2.0.img.gz) ([info](http://releases.libreelec.tv/LibreELEC-WeTek_Play_2.aarch64-8.2.0.img.gz?mirrorlist))

**New Install to WeTek internal NAND (.zip)**

[LibreELEC-WeTek\_Play.arm-8.2.0.zip](http://releases.libreelec.tv/LibreELEC-WeTek_Play.arm-8.2.0.zip) ([info](http://releases.libreelec.tv/LibreELEC-WeTek_Play.arm-8.2.0.zip?mirrorlist)) [LibreELEC-WeTek\_Core.arm-8.2.0.zip](http://releases.libreelec.tv/LibreELEC-WeTek_Core.arm-8.2.0.zip) ([info](http://releases.libreelec.tv/LibreELEC-WeTek_Core.arm-8.2.0.zip?mirrorlist)) [LibreELEC-WeTek\_Hub.aarch64-8.2.0.zip](http://releases.libreelec.tv/LibreELEC-WeTek_Hub.aarch64-8.2.0.zip) ([info](http://releases.libreelec.tv/LibreELEC-WeTek_Hub.aarch64-8.2.0.zip?mirrorlist)) [LibreELEC-WeTek\_Play\_2.aarch64-8.2.0.zip](http://releases.libreelec.tv/LibreELEC-WeTek_Play_2.aarch64-8.2.0.zip) ([info](http://releases.libreelec.tv/LibreELEC-WeTek_Play_2.aarch64-8.2.0.zip?mirrorlist))

**Manual Update from LibreELEC 7.0, 8.0, or OpenELEC (.tar)**

[LibreELEC-Generic.x86\_64-8.2.0.tar](http://releases.libreelec.tv/LibreELEC-Generic.x86_64-8.2.0.tar) ([info](http://releases.libreelec.tv/LibreELEC-Generic.x86_64-8.2.0.tar?mirrorlist)) [LibreELEC-RPi.arm-8.2.0.1.tar](http://releases.libreelec.tv/LibreELEC-RPi.arm-8.2.0.1.tar) ([info](http://releases.libreelec.tv/LibreELEC-RPi.arm-8.2.0.1.tar?mirrorlist)) [LibreELEC-RPi2.arm-8.2.0.1.tar](http://releases.libreelec.tv/LibreELEC-RPi2.arm-8.2.0.1.tar) ([info](http://releases.libreelec.tv/LibreELEC-RPi2.arm-8.2.0.1.tar?mirrorlist)) [LibreELEC-Slice.arm-8.2.0.1.tar](http://releases.libreelec.tv/LibreELEC-Slice.arm-8.2.0.1.tar) ([info](http://releases.libreelec.tv/LibreELEC-Slice.arm-8.2.0.1.tar?mirrorlist)) [LibreELEC-Slice3.arm-8.2.0.1.tar](http://releases.libreelec.tv/LibreELEC-Slice3.arm-8.2.0.1.tar) ([info](http://releases.libreelec.tv/LibreELEC-Slice3.arm-8.2.0.1.tar?mirrorlist)) [LibreELEC-imx6.arm-8.2.0.tar](http://releases.libreelec.tv/LibreELEC-imx6.arm-8.2.0.tar) ([info](http://releases.libreelec.tv/LibreELEC-imx6.arm-8.2.0.tar?mirrorlist)) [LibreELEC-Odroid\_C2.aarch64-8.2.0.tar](http://releases.libreelec.tv/LibreELEC-Odroid_C2.aarch64-8.2.0.tar) ([info](http://releases.libreelec.tv/LibreELEC-Odroid_C2.aarch64-8.2.0.tar?mirrorlist)) [LibreELEC-WeTek\_Play.arm-8.2.0.tar](http://releases.libreelec.tv/LibreELEC-WeTek_Play.arm-8.2.0.tar) ([info](http://releases.libreelec.tv/LibreELEC-WeTek_Play.arm-8.2.0.tar?mirrorlist)) [LibreELEC-WeTek\_Core.arm-8.2.0.tar](http://releases.libreelec.tv/LibreELEC-WeTek_Core.arm-8.2.0.tar) ([info](http://releases.libreelec.tv/LibreELEC-WeTek_Core.arm-8.2.0.tar?mirrorlist)) [LibreELEC-WeTek\_Hub.arm-8.2.0.tar](http://releases.libreelec.tv/LibreELEC-WeTek_Hub.aarch64-8.2.0.tar) ([info](http://releases.libreelec.tv/LibreELEC-WeTek_Hub.aarch64-8.2.0.tar?mirrorlist)) [LibreELEC-WeTek\_Play\_2.arm-8.2.0.tar](http://releases.libreelec.tv/LibreELEC-WeTek_Play_2.aarch64-8.2.0.tar) ([info](http://releases.libreelec.tv/LibreELEC-WeTek_Play_2.aarch64-8.2.0.tar?mirrorlist))
