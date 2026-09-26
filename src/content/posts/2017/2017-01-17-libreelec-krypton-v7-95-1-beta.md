---
layout: post
title: "LibreELEC (Krypton) v7.95.1 BETA"
image: "img/posts/2017/beta_7951.png"
---

LibreELEC (Krypton) 8.0 preview release continues with v7.95.1 release available for all build projects except Amlogic aarch64 devices. We have now forked and frozen the release branch on GitHub; which means from this point we allow updates to add-ons but will refuse any new feature additions, major build-system changes, and all software package bumps to the release branch unless changes resolve a known problem or critical security issue. This approach assures stability in the 8.0 release branch and continuity of Alpha testing. LibreELEC v7.95.1 is based on Kodi Krypton 17.0-RC3.

Amlogic aarch64 projects (WeTek Hub, WeTek Play 2, and Odroid C2) are excluded due to a memory leak issue we are still diagnosing. Although the problem is also present in recent Alpha builds we felt it was inappropriate to release until this is resolved as a Beta release attracts many more user-upgrades from Jarvis installs. Our investigation continues and we hope to start Beta soon.

Changes in v7.95.1 include:

- Fix atvclient IR sensor support in Krypton
- Fix issues in ATi/Intel drivers (build with DRI3 support but default to DRI2)
- Fix window manager (fluxbox) so apps start maximised
- Fix numerous sync/timing issues on Amlogic 'arm' devices
- Fix audio passthrough for [JustBoom](https://www.justboom.co/products) DAC devices for RPi
- Fix use of colour highlighting in systemd log messages
- Update pulse-eight CEC adapter support (libCEC 4.0.1)
- Update to Raspberry Pi firmware to resolve minor CEC issues
- Update to Linux 4.9.3 kernel
- Update to Linux support patches for Raspberry Pi
- Update to Kodi v17.0-RC3
- Update to LibreELEC settings 0.8.7
- Add media\_build DVB driver support to Generic/RPi/RPi2 projects
- Add UDL driver support to RPi/RPi2 projects
- Add skin.estouchy package to the LibreELEC add-on repo

[View detailed changes on GitHub](https://github.com/LibreELEC/LibreELEC.tv/compare/7.90.010...7.95.1)

**MEDIA BUILD**

The team have added the CrazyCat fork of media\_build drivers to the Linux 4.9 kernel used in Generic x86\_64 and Raspberry Pi images. This adopts work from a long-running community release to increase the range of DVB devices that can be used "out of box" with Tvheadend/VDR. This includes TBS cards and the Geniatech T230C DVB-T2 stick.

**BOOT PARTITION SIZE**

The LibreELEC (Krypton) 7.95.1 image for Generic x86\_64 hardware is 216MB so it fits in the 230MB boot partition size limit of older OpenELEC installations without resizing the boot partition or forcing a complete reinstallation.

**\*\* CANARY PERIOD \*\***

LibreELEC operates a 24-hour ‘canary’ period between release files being posted for download and the release being available via auto-update. During this time LibreELEC 8.0 Alpha preview and LibreELEC 7.0.3 users can use the LibreELEC settings add-on to update manually within the Kodi GUI. To update from older LibreELEC 7.0 releases (e.g. 7.0.2) or OpenELEC use the .tar file below.

**New installations using the LibreELEC USB-SD Creator app**

[LibreELEC.USB-SD.Creator.Linux-32bit.bin](http://releases.libreelec.tv/LibreELEC.USB-SD.Creator.Linux-32bit.bin) [(info)](http://releases.libreelec.tv/LibreELEC.USB-SD.Creator.Linux-32bit.bin?mirrorlist) [LibreELEC.USB-SD.Creator.Linux-64bit.bin](http://releases.libreelec.tv/LibreELEC.USB-SD.Creator.Linux-64bit.bin) [(info)](http://releases.libreelec.tv/LibreELEC.USB-SD.Creator.Linux-64bit.bin?mirrorlist) [LibreELEC.USB-SD.Creator.macOS.dmg](http://releases.libreelec.tv/LibreELEC.USB-SD.Creator.macOS.dmg) [(info)](http://releases.libreelec.tv/LibreELEC.USB-SD.Creator.macOS.dmg?mirrorlist) [LibreELEC.USB-SD.Creator.Win32.exe](http://releases.libreelec.tv/LibreELEC.USB-SD.Creator.Win32.exe) [(info)](http://releases.libreelec.tv/LibreELEC.USB-SD.Creator.Win32.exe?mirrorlist)

**New installation using 3rd party USB or SD writer apps (.img.gz)**

[LibreELEC-Generic.x86\_64-7.95.1.img.gz](http://releases.libreelec.tv/LibreELEC-Generic.x86_64-7.95.1.img.gz) ([info](http://releases.libreelec.tv/LibreELEC-Generic.x86_64-7.95.1.img.gz?mirrorlist)) [LibreELEC-RPi.arm-7.95.1.img.gz](http://releases.libreelec.tv/LibreELEC-RPi.arm-7.95.1.img.gz) ([info](http://releases.libreelec.tv/LibreELEC-RPi.arm-7.95.1.img.gz?mirrorlist)) [LibreELEC-RPi2.arm-7.95.1.img.gz](http://releases.libreelec.tv/LibreELEC-RPi2.arm-7.95.1.img.gz) ([info](http://releases.libreelec.tv/LibreELEC-RPi2.arm-7.95.1.img.gz?mirrorlist)) [LibreELEC-imx6.arm-7.95.1.img.gz](http://releases.libreelec.tv/LibreELEC-imx6.arm-7.95.1.img.gz) ([info](http://releases.libreelec.tv/LibreELEC-imx6.arm-7.95.1.img.gz?mirrorlist)) [LibreELEC-WeTek\_Play.arm-7.95.1.img.gz](http://releases.libreelec.tv/LibreELEC-WeTek_Play.arm-7.95.1.img.gz) ([info](http://releases.libreelec.tv/LibreELEC-WeTek_Play.arm-7.95.1.img.gz?mirrorlist)) [LibreELEC-WeTek\_Core.arm-7.95.1.img.gz](http://releases.libreelec.tv/LibreELEC-WeTek_Core.arm-7.95.1.img.gz) ([info](http://releases.libreelec.tv/LibreELEC-WeTek_Core.arm-7.95.1.img.gz?mirrorlist))

**New Install to WeTek internal NAND (.zip)**

[LibreELEC-WeTek\_Play.arm-7.95.1.zip](http://releases.libreelec.tv/LibreELEC-WeTek_Play.arm-7.95.1.zip) ([info](http://releases.libreelec.tv/LibreELEC-WeTek_Play.arm-7.95.1.zip?mirrorlist)) [LibreELEC-WeTek\_Core.arm-7.95.1.zip](http://releases.libreelec.tv/LibreELEC-WeTek_Core.arm-7.95.1.zip) ([info](http://releases.libreelec.tv/LibreELEC-WeTek_Core.arm-7.95.1.zip?mirrorlist))

**Manual Update from LibreELEC 7.0 or OpenELEC (.tar)**

[LibreELEC-Generic.x86\_64-7.95.1.tar](http://releases.libreelec.tv/LibreELEC-Generic.x86_64-7.95.1.tar) ([info](http://releases.libreelec.tv/LibreELEC-Generic.x86_64-7.95.1.tar?mirrorlist)) [LibreELEC-RPi.arm-7.95.1.tar](http://releases.libreelec.tv/LibreELEC-RPi.arm-7.95.1.tar) ([info](http://releases.libreelec.tv/LibreELEC-RPi.arm-7.95.1.tar?mirrorlist)) [LibreELEC-RPi2.arm-7.95.1.tar](http://releases.libreelec.tv/LibreELEC-RPi2.arm-7.95.1.tar) ([info](http://releases.libreelec.tv/LibreELEC-RPi2.arm-7.95.1.tar?mirrorlist)) [LibreELEC-imx6.arm-7.95.1.tar](http://releases.libreelec.tv/LibreELEC-imx6.arm-7.95.1.tar) ([info](http://releases.libreelec.tv/LibreELEC-imx6.arm-7.95.1.tar?mirrorlist)) [LibreELEC-WeTek\_Play.arm-7.95.1.tar](http://releases.libreelec.tv/LibreELEC-WeTek_Play.arm-7.95.1.tar) ([info](http://releases.libreelec.tv/LibreELEC-WeTek_Play.arm-7.95.1.tar?mirrorlist)) [LibreELEC-WeTek\_Core.arm-7.95.1.tar](http://releases.libreelec.tv/LibreELEC-WeTek_Core.arm-7.95.1.tar) ([info](http://releases.libreelec.tv/LibreELEC-WeTek_Core.arm-7.95.1.tar?mirrorlist))

**SUPPORT ASSISTANCE AND BUG REPORTS**

If you spot issues, please flag them via a [bug report in the forums](http://forum.libreelec.tv/forum-35.html). You are also encouraged to participate in LibreELEC development and [submit fixes via GitHub!](https://github.com/LibreELEC/LibreELEC.tv)


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

