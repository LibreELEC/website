---
layout: post
title: "LibreELEC (Krypton) v8.2.1 MR"
image: "img/posts/2017/release_821.png"
---

LibreELEC 8.2.1 is a maintenance release that includes Kodi 17.6. It also resolves a minor time-zone issue after recent daylight saving changes, a resume from suspend issue with the Apple IR driver, and it provides two new SMB client configuration options in Kodi settings. You can now set a minimum SMB protocol version to prevent prevent SMB1 from ever being used, and a 'legacy security' option forces weak authentication to resolve issues seen with the USB sharing functions on some older router/NAS devices. If updating to LibreELEC 8.2 for the first time **PLEASE READ THE RELEASE NOTES** below here before posting issues in the forums as there are disruptive changes to Lirc, Samba, and Tvheadend.

As Kodi 17.6 has been declared the final Krypton release (no further updates) we also expect LibreELEC 8.2.1 to be the final 8.2 update. The team are now focussed on LibreELEC (Leia) 9.0 development.

Changes since LibreELEC 8.2.0 include:

- Fix issues with the Apple IR driver not working after suspend
- Fix 'file exists' errors with SMB connections to Win10 shares
- Update Samba to 4.6.10
- Update tz-data to 2017c
- Update Kodi to 17.6
- Add SMB client options for minimum SMB protocol
- Add SMB legacy security option with NTLMv1 and disabled SPNEGO

[See detailed changes on GitHub](https://github.com/LibreELEC/LibreELEC.tv/compare/8.2.0...8.2.1).

**\*\* SAMBA / SMB  CHANGES \*\***

LibreELEC 8.2.x includes changes that allow the Kodi SMB client and our embedded Samba server to support SMB2/3 connections; deprecating SMB1 to improve security and performance. This is necessary to cope with changes Microsoft introduced in the Windows 10 'Fall Creators Update' to resolve SMB1 security issues. Please see Microsoft notes [here](https://blogs.technet.microsoft.com/filecab/2016/09/16/stop-using-smb1/) and [here](https://support.microsoft.com/en-us/help/4034314/smbv1-is-not-installed-windows-10-and-windows-server-version-1709) and [here](https://support.microsoft.com/en-us/help/4046019/guest-access-smb2-disabled-by-default-in-windows-10-server-2016) for an explanation.

LibreELEC changes are summarised below:

- The Kodi SMB client now defaults to SMB3 connections but can fail to negotiate SMB3 with old Samba (NAS) versions. New options in Kodi Settings > Services > SMB client > allow max SMB2 or SMB1 to be forced for compatibility with legacy SMB servers, or min SMB2 to be forced to ensure SMB1 is never used.

- Some router and NAS devices have proprietary SMB1 implementations that do not support NTLMv2 and forcing SMB1 still results in a refused connection. The legacy security option (visible only when SMB1 is the max protocol) can be set for compatibility. This forces weak auth. It should not be set unless needed.

- The embedded Samba server defaults to SMB2/SMB3 connections. The LibreELEC Settings add-on allows the minimum SMB version to be changed, e.g. to enable SMB1 for compatibility. It also supports GUI configuration of WORKGROUP name and requiring username/password authentication.

- In other Linux distros Samba clients default to SMB1 for all Samba versions up to v4.7 when the Samba default changes to SMB2. If the installed Samba version of your Linux distro is between v4.1 and v4.6 you can force SMB2/3 connections by adding **client min protocol = SMB2** and **client max protocol = SMB3** to your smb.conf. Samba versions older than v4.1 do not support SMB2/3 and require the LibreELEC Samba server to be configured for legacy SMB1 support.

- Samba detects v3 /storage/.config/samba.conf configurations and ignores them to avoid the Samba service failing on startup. If this happens Samba starts with a default v4 configuration. Custom Samba configurations must be manually updated to use the new Samba 4.x template (samba.conf.sample).

- Kodi "Windows network browsing" needs the Kodi SMB client to support SMB1 and we now default to SMB2/3 connections so SMB browsing no longer works. Windows SMB share sources must now be added using the full server/share path. SMB sources from Samba/NAS devices that support Avahi or ZeroConf can normally be browsed via the "ZeroConf network browsing" alternative.

- Connection failures to anonymous and guest shares on a Windows server are normally solved by creating a local machine user account and password credential on the server for Kodi to use, then setting read or read-write permissions for that credential to the shares Kodi will access.

- Connection failures from a Windows client to the embedded Samba server are probably the result of Win10 changes that remove support for guest/anonymous access. Enabling password authentication in the LibreELEC settings add-on and setting username/password credentials should allow access.

- Local filesystem mounts of a remote SMB filesystem via systemd or autostart.sh now default to SMB2 so connections to SMB1 shares fail unless _vers=1.0_ is added into the mount command to force SMB1. If using local mounts to USB shares on old router/NAS devices _sec=ntlm_ may also be required.

**\*\* LIRC CHANGES \*\***

In LibreELEC 8.0 the Lirc service is enabled when an IR receiver is detected in the system, but it is not started unless used with the lirc\_rpi or lirc\_xbox drivers or a personal lircd.conf. In LibreELEC 8.2 the Lirc service is enabled and supports all drivers which can result in the service starting and interfering with normal IR operations. If you experience "double button presses" after updating the Lirc service can be disabled in the 'Services' tab of the LibreELEC settings add-on. The Lirc service is disabled by default in new installations and must be manually enabled. Thanks to @HiasoffT changes the Lirc service is now configurable using a combination of /storage/.config/lirc\_options.conf and lircd.conf - the same approach used in desktop Linux distributions and most howto instructions users find via Google searches.

**\*\* TVHEADEND CHANGES \*\***

LibreELEC 8.2 does not provide Tvheadend (Server) 4.0 so the add-on repo has been populated with a dummy 4.0 add-on that Kodi will download then mark as broken. It has been discontinued because it is no longer maintained upstream. Tvheadend 4.2 has been available for some time and has proven to be more stable with better features and hardware support. Unfortunately Tvheadend does not provide an automatic upgrade or configuration export/import process so 4.0 users must perform a new installation of Tvheadend 4.2. This is inconvenient, but there is no other option.

NB: Existing Tvheadend 4.2 add-on users will see "fail to start" messages after updating to the LibreELEC 8.2.0 release. Once Kodi has started it checks our add-on repo and a new (compatible) version is downloaded and installed. Once the add-on has updated Tvheadend 4.2 will start normally.

 

{% include paypal.html %}

[or donate by purchasing a LibreELEC teeshirt or hoodie](https://libreelec.tv/shop/)

 

**New installations using the LibreELEC USB-SD Creator app**

[LibreELEC.USB-SD.Creator.Linux-32bit.bin](http://releases.libreelec.tv/LibreELEC.USB-SD.Creator.Linux-32bit.bin) [(info)](http://releases.libreelec.tv/LibreELEC.USB-SD.Creator.Linux-32bit.bin?mirrorlist) [LibreELEC.USB-SD.Creator.Linux-64bit.bin](http://releases.libreelec.tv/LibreELEC.USB-SD.Creator.Linux-64bit.bin) [(info)](http://releases.libreelec.tv/LibreELEC.USB-SD.Creator.Linux-64bit.bin?mirrorlist) [LibreELEC.USB-SD.Creator.macOS.dmg](http://releases.libreelec.tv/LibreELEC.USB-SD.Creator.macOS.dmg) [(info)](http://releases.libreelec.tv/LibreELEC.USB-SD.Creator.macOS.dmg?mirrorlist) [LibreELEC.USB-SD.Creator.Win32.exe](http://releases.libreelec.tv/LibreELEC.USB-SD.Creator.Win32.exe) [(info)](http://releases.libreelec.tv/LibreELEC.USB-SD.Creator.Win32.exe?mirrorlist)

**New installation using 3rd party USB or SD writer apps (.img.gz)**

[LibreELEC-Generic.x86\_64-8.2.1.img.gz](http://releases.libreelec.tv/LibreELEC-Generic.x86_64-8.2.1.img.gz) ([info](http://releases.libreelec.tv/LibreELEC-Generic.x86_64-8.2.1.img.gz?mirrorlist)) [LibreELEC-RPi.arm-8.2.1.img.gz](http://releases.libreelec.tv/LibreELEC-RPi.arm-8.2.1.img.gz) ([info](http://releases.libreelec.tv/LibreELEC-RPi.arm-8.2.1.img.gz?mirrorlist)) [LibreELEC-RPi2.arm-8.2.1.img.gz](http://releases.libreelec.tv/LibreELEC-RPi2.arm-8.2.1.img.gz) ([info](http://releases.libreelec.tv/LibreELEC-RPi2.arm-8.2.1.img.gz?mirrorlist)) [LibreELEC-Slice.arm-8.2.1.img.gz](http://releases.libreelec.tv/LibreELEC-Slice.arm-8.2.1.img.gz) ([info](http://releases.libreelec.tv/LibreELEC-Slice.arm-8.2.1.img.gz?mirrorlist)) [LibreELEC-Slice3.arm-8.2.1.img.gz](http://releases.libreelec.tv/LibreELEC-Slice3.arm-8.2.1.img.gz) ([info](http://releases.libreelec.tv/LibreELEC-Slice3.arm-8.2.1.img.gz?mirrorlist)) [LibreELEC-imx6.arm-8.2.1.img.gz](http://releases.libreelec.tv/LibreELEC-imx6.arm-8.2.1.img.gz) ([info](http://releases.libreelec.tv/LibreELEC-imx6.arm-8.2.1.img.gz?mirrorlist)) [LibreELEC-Odroid\_C2.aarch64-8.2.1.img.gz](http://releases.libreelec.tv/LibreELEC-Odroid_C2.aarch64-8.2.1.img.gz) ([info](http://releases.libreelec.tv/LibreELEC-Odroid_C2.aarch64-8.2.1.img.gz?mirrorlist)) [LibreELEC-WeTek\_Play.arm-8.2.1.img.gz](http://releases.libreelec.tv/LibreELEC-WeTek_Play.arm-8.2.1.img.gz) ([info](http://releases.libreelec.tv/LibreELEC-WeTek_Play.arm-8.2.1.img.gz?mirrorlist)) [LibreELEC-WeTek\_Core.arm-8.2.1.img.gz](http://releases.libreelec.tv/LibreELEC-WeTek_Core.arm-8.2.1.img.gz) ([info](http://releases.libreelec.tv/LibreELEC-WeTek_Core.arm-8.2.1.img.gz?mirrorlist)) [LibreELEC-WeTek\_Hub.aarch64-8.2.1.img.gz](http://releases.libreelec.tv/LibreELEC-WeTek_Hub.aarch64-8.2.1.img.gz) ([info](http://releases.libreelec.tv/LibreELEC-WeTek_Hub.aarch64-8.2.1.img.gz?mirrorlist)) [LibreELEC-WeTek\_Play\_2.aarch64-8.2.1.img.gz](http://releases.libreelec.tv/LibreELEC-WeTek_Play_2.aarch64-8.2.1.img.gz) ([info](http://releases.libreelec.tv/LibreELEC-WeTek_Play_2.aarch64-8.2.1.img.gz?mirrorlist))

**New Install to WeTek internal NAND (.zip)**

[LibreELEC-WeTek\_Play.arm-8.2.1.zip](http://releases.libreelec.tv/LibreELEC-WeTek_Play.arm-8.2.1.zip) ([info](http://releases.libreelec.tv/LibreELEC-WeTek_Play.arm-8.2.1.zip?mirrorlist)) [LibreELEC-WeTek\_Core.arm-8.2.1.zip](http://releases.libreelec.tv/LibreELEC-WeTek_Core.arm-8.2.1.zip) ([info](http://releases.libreelec.tv/LibreELEC-WeTek_Core.arm-8.2.1.zip?mirrorlist)) [LibreELEC-WeTek\_Hub.aarch64-8.2.1.zip](http://releases.libreelec.tv/LibreELEC-WeTek_Hub.aarch64-8.2.1.zip) ([info](http://releases.libreelec.tv/LibreELEC-WeTek_Hub.aarch64-8.2.1.zip?mirrorlist)) [LibreELEC-WeTek\_Play\_2.aarch64-8.2.1.zip](http://releases.libreelec.tv/LibreELEC-WeTek_Play_2.aarch64-8.2.1.zip) ([info](http://releases.libreelec.tv/LibreELEC-WeTek_Play_2.aarch64-8.2.1.zip?mirrorlist))

**Manual Update from LibreELEC 7.0, 8.0, or OpenELEC (.tar)**

[LibreELEC-Generic.x86\_64-8.2.1.tar](http://releases.libreelec.tv/LibreELEC-Generic.x86_64-8.2.1.tar) ([info](http://releases.libreelec.tv/LibreELEC-Generic.x86_64-8.2.1.tar?mirrorlist)) [LibreELEC-RPi.arm-8.2.1.tar](http://releases.libreelec.tv/LibreELEC-RPi.arm-8.2.1.tar) ([info](http://releases.libreelec.tv/LibreELEC-RPi.arm-8.2.1.tar?mirrorlist)) [LibreELEC-RPi2.arm-8.2.1.tar](http://releases.libreelec.tv/LibreELEC-RPi2.arm-8.2.1.tar) ([info](http://releases.libreelec.tv/LibreELEC-RPi2.arm-8.2.1.tar?mirrorlist)) [LibreELEC-Slice.arm-8.2.1.tar](http://releases.libreelec.tv/LibreELEC-Slice.arm-8.2.1.tar) ([info](http://releases.libreelec.tv/LibreELEC-Slice.arm-8.2.1.tar?mirrorlist)) [LibreELEC-Slice3.arm-8.2.1.tar](http://releases.libreelec.tv/LibreELEC-Slice3.arm-8.2.1.tar) ([info](http://releases.libreelec.tv/LibreELEC-Slice3.arm-8.2.1.tar?mirrorlist)) [LibreELEC-imx6.arm-8.2.1.tar](http://releases.libreelec.tv/LibreELEC-imx6.arm-8.2.1.tar) ([info](http://releases.libreelec.tv/LibreELEC-imx6.arm-8.2.1.tar?mirrorlist)) [LibreELEC-Odroid\_C2.aarch64-8.2.1.tar](http://releases.libreelec.tv/LibreELEC-Odroid_C2.aarch64-8.2.1.tar) ([info](http://releases.libreelec.tv/LibreELEC-Odroid_C2.aarch64-8.2.1.tar?mirrorlist)) [LibreELEC-WeTek\_Play.arm-8.2.1.tar](http://releases.libreelec.tv/LibreELEC-WeTek_Play.arm-8.2.1.tar) ([info](http://releases.libreelec.tv/LibreELEC-WeTek_Play.arm-8.2.1.tar?mirrorlist)) [LibreELEC-WeTek\_Core.arm-8.2.1.tar](http://releases.libreelec.tv/LibreELEC-WeTek_Core.arm-8.2.1.tar) ([info](http://releases.libreelec.tv/LibreELEC-WeTek_Core.arm-8.2.1.tar?mirrorlist)) [LibreELEC-WeTek\_Hub.arm-8.2.1.tar](http://releases.libreelec.tv/LibreELEC-WeTek_Hub.aarch64-8.2.1.tar) ([info](http://releases.libreelec.tv/LibreELEC-WeTek_Hub.aarch64-8.2.1.tar?mirrorlist)) [LibreELEC-WeTek\_Play\_2.arm-8.2.1.tar](http://releases.libreelec.tv/LibreELEC-WeTek_Play_2.aarch64-8.2.1.tar) ([info](http://releases.libreelec.tv/LibreELEC-WeTek_Play_2.aarch64-8.2.1.tar?mirrorlist))
