---
layout: post
title: "LibreELEC (Krypton) v8.1.0 BETA"
image: "img/posts/2017/release_810.png"
---

This is a BETA of our 8.2 release; a mid-year bump to enhance hardware support and capabilities. It adds 10-bit HEVC support for recent Intel GPU generations, Samba 4.6 which brings support for SMB2/SMB3, and several SSL issues are resolved in a switch to OpenSSL. We continue to refine firmware we embed; removing old and unused files to reduce image size while adding new drivers and firmwares based on team findings and user reports. Kodi is updated to 17.4-RC1 with minor bugfixes since v17.3.

Changes since LibreELEC 8.0.2 include:

- Fix NAND install on WeTek Hub/Play 2 after Android Marshmallow updates
- Update RPi kernel to 4.9.41
- Update Generic kernel to 4.11.8
- Update from LibreSSL to OpenSSL
- Update to Samba 4.6.6
- Update nVidia main driver to 384.59
- Update to lirc 0.9.4d
- Update linux-firmware and misc-firmware packages
- Add Virtual project into Generic
- Add buildsystem changes to make backports from master easier
- Remove Tvheadend 4.0 server add-on (as superseded by Tvh 4.2)

[See detailed changes on GitHub](https://github.com/LibreELEC/LibreELEC.tv/compare/8.0.2...8.1.0)

**!!! SAMBA  UPDATE - IMPORTANT !!!**

The latest "Creators Update" for Windows 10 removes SMB1 client/server support and many NAS devices now ship with configuration that only supports SMB2/3, which causes problems because all versions of Kodi before 17.4 can only make SMB1 connections. This release includes changes that allow the Kodi SMB client and our embedded Samba server to work with SMB2/3 connections; improving SMB security and performance on most hardware. However, it is a disruptive change:

- The Kodi SMB client sometimes fails to negotiate SMB3 with old Samba versions. There is a new option in Kodi Settings > Services > SMB client > that allows SMB2 or SMB1 connections to be forced for compatibility with legacy SMB servers.
- Samba 3.x /storage/.config/samba.conf configurations must be updated to use the new Samba 4.x template (samba.conf.sample) as some Samba 3.x configuration is incompatible. The embedded Samba server may fail to start until this is done.
- Browsing SMB shares via "Windows network browsing" in Kodi requires the browser service on the SMB server. This SMB1 service is removed from Win10 in the creators update and there is no equivalent for SMB2/3 versions of the SMB protocol. When Kodi makes SMB2+ connections (which is now our default) Kodi network browsing to add sources will not work. Windows SMB shares can still be added using the full server/share path. It is still possible to browse non-Windows Samba/NAS devices that advertise SMB shares via ZeroConf (aka Bonjour/Avahi).
- Connection failures to anonymous and guest shares are solved by creating a new local machine (not Microsoft ID) user and strong password for Kodi to use on the server, then assigning appropriate read or read-write permissions to the shares Kodi will access.

If you experience issues with SMB share access please post in the forums sharing information on the Windows and Samba versions, and a Kodi debug log, and we will do our best to help.

**AUTO-UPDATE**

After recent security issues with Kodi and Samba we need to ensure more users are running the latest release to benefit from feature and security bug fixes. To achieve this we have changed the default setting for auto-update from manual to auto. Auto-update provides maintenance updates, e.g. 8.1.0 BETA to 8.2.0 and from 8.2.0 to 8.2.1 etc. in the 8.2 release series. Major version updates are still manual (user-initiated) updates, e.g. 8.2.0 to a future 9.0.0 release. Users can revert to manual update in the LibreELEC settings add-on.

 


<div class="my-8 p-6 rounded-2xl glass-card border border-brand-200/80 bg-gradient-to-r from-brand-50/60 to-sky-50/40 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-5 not-prose">
  <div class="flex items-center gap-4">
    <div class="w-12 h-12 rounded-xl bg-brand-500/10 border border-brand-500/20 text-brand-600 flex items-center justify-center text-xl shrink-0">
      <i class="fa-solid fa-heart text-rose-500"></i>
    </div>
    <div>
      <h4 class="font-bold text-slate-900 text-base m-0">Support LibreELEC Development</h4>
      <p class="text-xs text-slate-600 mt-1 mb-0">We are 100% community supported. Your contribution helps fund build infrastructure and test devices.</p>
    </div>
  </div>
  <a href="https://opencollective.com/libreelec/donate" target="_blank" rel="noopener" class="shrink-0 px-5 py-2.5 rounded-xl bg-brand-600 hover:bg-brand-700 text-white font-bold text-xs shadow-md shadow-brand-500/20 hover:shadow-brand-500/35 hover:-translate-y-0.5 transition-all duration-200 flex items-center gap-2 no-underline">
    <i class="fa-solid fa-gift"></i> Donate on OpenCollective
  </a>
</div>


[or donate by purchasing a LibreELEC teeshirt or hoodie](https://libreelec.tv/shop/)

 

**New installations using the LibreELEC USB-SD Creator app**

[LibreELEC.USB-SD.Creator.Linux-32bit.bin](http://releases.libreelec.tv/LibreELEC.USB-SD.Creator.Linux-32bit.bin) [(info)](http://releases.libreelec.tv/LibreELEC.USB-SD.Creator.Linux-32bit.bin?mirrorlist) [LibreELEC.USB-SD.Creator.Linux-64bit.bin](http://releases.libreelec.tv/LibreELEC.USB-SD.Creator.Linux-64bit.bin) [(info)](http://releases.libreelec.tv/LibreELEC.USB-SD.Creator.Linux-64bit.bin?mirrorlist) [LibreELEC.USB-SD.Creator.macOS.dmg](http://releases.libreelec.tv/LibreELEC.USB-SD.Creator.macOS.dmg) [(info)](http://releases.libreelec.tv/LibreELEC.USB-SD.Creator.macOS.dmg?mirrorlist) [LibreELEC.USB-SD.Creator.Win32.exe](http://releases.libreelec.tv/LibreELEC.USB-SD.Creator.Win32.exe) [(info)](http://releases.libreelec.tv/LibreELEC.USB-SD.Creator.Win32.exe?mirrorlist)

**New installation using 3rd party USB or SD writer apps (.img.gz)**

[LibreELEC-Generic.x86\_64-8.1.0.img.gz](http://releases.libreelec.tv/LibreELEC-Generic.x86_64-8.1.0.img.gz) ([info](http://releases.libreelec.tv/LibreELEC-Generic.x86_64-8.1.0.img.gz?mirrorlist)) [LibreELEC-RPi.arm-8.1.0.img.gz](http://releases.libreelec.tv/LibreELEC-RPi.arm-8.1.0.img.gz) ([info](http://releases.libreelec.tv/LibreELEC-RPi.arm-8.1.0.img.gz?mirrorlist)) [LibreELEC-RPi2.arm-8.1.0.img.gz](http://releases.libreelec.tv/LibreELEC-RPi2.arm-8.1.0.img.gz) ([info](http://releases.libreelec.tv/LibreELEC-RPi2.arm-8.1.0.img.gz?mirrorlist)) [LibreELEC-Slice.arm-8.1.0.img.gz](http://releases.libreelec.tv/LibreELEC-Slice.arm-8.1.0.img.gz) ([info](http://releases.libreelec.tv/LibreELEC-Slice.arm-8.1.0.img.gz?mirrorlist)) [LibreELEC-Slice3.arm-8.1.0.img.gz](http://releases.libreelec.tv/LibreELEC-Slice3.arm-8.1.0.img.gz) ([info](http://releases.libreelec.tv/LibreELEC-Slice3.arm-8.1.0.img.gz?mirrorlist)) [LibreELEC-imx6.arm-8.1.0.img.gz](http://releases.libreelec.tv/LibreELEC-imx6.arm-8.1.0.img.gz) ([info](http://releases.libreelec.tv/LibreELEC-imx6.arm-8.1.0.img.gz?mirrorlist)) [LibreELEC-Odroid\_C2.aarch64-8.1.0.img.gz](http://releases.libreelec.tv/LibreELEC-Odroid_C2.aarch64-8.1.0.img.gz) ([info](http://releases.libreelec.tv/LibreELEC-Odroid_C2.aarch64-8.1.0.img.gz?mirrorlist)) [LibreELEC-WeTek\_Play.arm-8.1.0.img.gz](http://releases.libreelec.tv/LibreELEC-WeTek_Play.arm-8.1.0.img.gz) ([info](http://releases.libreelec.tv/LibreELEC-WeTek_Play.arm-8.1.0.img.gz?mirrorlist)) [LibreELEC-WeTek\_Core.arm-8.1.0.img.gz](http://releases.libreelec.tv/LibreELEC-WeTek_Core.arm-8.1.0.img.gz) ([info](http://releases.libreelec.tv/LibreELEC-WeTek_Core.arm-8.1.0.img.gz?mirrorlist)) [LibreELEC-WeTek\_Hub.aarch64-8.1.0.img.gz](http://releases.libreelec.tv/LibreELEC-WeTek_Hub.aarch64-8.1.0.img.gz) ([info](http://releases.libreelec.tv/LibreELEC-WeTek_Hub.aarch64-8.1.0.img.gz?mirrorlist)) [LibreELEC-WeTek\_Play\_2.aarch64-8.1.0.img.gz](http://releases.libreelec.tv/LibreELEC-WeTek_Play_2.aarch64-8.1.0.img.gz) ([info](http://releases.libreelec.tv/LibreELEC-WeTek_Play_2.aarch64-8.1.0.img.gz?mirrorlist))

**New Install to WeTek internal NAND (.zip)**

[LibreELEC-WeTek\_Play.arm-8.1.0.zip](http://releases.libreelec.tv/LibreELEC-WeTek_Play.arm-8.1.0.zip) ([info](http://releases.libreelec.tv/LibreELEC-WeTek_Play.arm-8.1.0.zip?mirrorlist)) [LibreELEC-WeTek\_Core.arm-8.1.0.zip](http://releases.libreelec.tv/LibreELEC-WeTek_Core.arm-8.1.0.zip) ([info](http://releases.libreelec.tv/LibreELEC-WeTek_Core.arm-8.1.0.zip?mirrorlist)) [LibreELEC-WeTek\_Hub.aarch64-8.1.0.zip](http://releases.libreelec.tv/LibreELEC-WeTek_Hub.aarch64-8.1.0.zip) ([info](http://releases.libreelec.tv/LibreELEC-WeTek_Hub.aarch64-8.1.0.zip?mirrorlist)) [LibreELEC-WeTek\_Play\_2.aarch64-8.1.0.zip](http://releases.libreelec.tv/LibreELEC-WeTek_Play_2.aarch64-8.1.0.zip) ([info](http://releases.libreelec.tv/LibreELEC-WeTek_Play_2.aarch64-8.1.0.zip?mirrorlist))

**Manual Update from LibreELEC 7.0, 8.0, or OpenELEC (.tar)**

[LibreELEC-Generic.x86\_64-8.1.0.tar](http://releases.libreelec.tv/LibreELEC-Generic.x86_64-8.1.0.tar) ([info](http://releases.libreelec.tv/LibreELEC-Generic.x86_64-8.1.0.tar?mirrorlist)) [LibreELEC-RPi.arm-8.1.0.tar](http://releases.libreelec.tv/LibreELEC-RPi.arm-8.1.0.tar) ([info](http://releases.libreelec.tv/LibreELEC-RPi.arm-8.1.0.tar?mirrorlist)) [LibreELEC-RPi2.arm-8.1.0.tar](http://releases.libreelec.tv/LibreELEC-RPi2.arm-8.1.0.tar) ([info](http://releases.libreelec.tv/LibreELEC-RPi2.arm-8.1.0.tar?mirrorlist)) [LibreELEC-Slice.arm-8.1.0.tar](http://releases.libreelec.tv/LibreELEC-Slice.arm-8.1.0.tar) ([info](http://releases.libreelec.tv/LibreELEC-Slice.arm-8.1.0.tar?mirrorlist)) [LibreELEC-Slice3.arm-8.1.0.tar](http://releases.libreelec.tv/LibreELEC-Slice3.arm-8.1.0.tar) ([info](http://releases.libreelec.tv/LibreELEC-Slice3.arm-8.1.0.tar?mirrorlist)) [LibreELEC-imx6.arm-8.1.0.tar](http://releases.libreelec.tv/LibreELEC-imx6.arm-8.1.0.tar) ([info](http://releases.libreelec.tv/LibreELEC-imx6.arm-8.1.0.tar?mirrorlist)) [LibreELEC-Odroid\_C2.aarch64-8.1.0.tar](http://releases.libreelec.tv/LibreELEC-Odroid_C2.aarch64-8.1.0.tar) ([info](http://releases.libreelec.tv/LibreELEC-Odroid_C2.aarch64-8.1.0.tar?mirrorlist)) [LibreELEC-WeTek\_Play.arm-8.1.0.tar](http://releases.libreelec.tv/LibreELEC-WeTek_Play.arm-8.1.0.tar) ([info](http://releases.libreelec.tv/LibreELEC-WeTek_Play.arm-8.1.0.tar?mirrorlist)) [LibreELEC-WeTek\_Core.arm-8.1.0.tar](http://releases.libreelec.tv/LibreELEC-WeTek_Core.arm-8.1.0.tar) ([info](http://releases.libreelec.tv/LibreELEC-WeTek_Core.arm-8.1.0.tar?mirrorlist)) [LibreELEC-WeTek\_Hub.arm-8.1.0.tar](http://releases.libreelec.tv/LibreELEC-WeTek_Hub.aarch64-8.1.0.tar) ([info](http://releases.libreelec.tv/LibreELEC-WeTek_Hub.aarch64-8.1.0.tar?mirrorlist)) [LibreELEC-WeTek\_Play\_2.arm-8.1.0.tar](http://releases.libreelec.tv/LibreELEC-WeTek_Play_2.aarch64-8.1.0.tar) ([info](http://releases.libreelec.tv/LibreELEC-WeTek_Play_2.aarch64-8.1.0.tar?mirrorlist))
