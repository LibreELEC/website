---
layout: post
title: "LibreELEC (Krypton) v7.90.010 ALPHA"
image: "img/posts/2016/alpha_ten_sparkler.png"
---

LibreELEC (Krypton) 8.0 preview builds continue with v7.90.010 containing Kodi v17.0-beta7 and a few package updates as this will be the final alpha build before we start beta. We have moved up to the Linux 4.9 kernel and have resolved a number of longer-running bugs.

Changes in v7.90.010 include:

- Fix power-on function for the WeTek Hub remote
- Fix CEC support on WeTek Play and WeTek Core
- Fix screensaver activation when Bluetooth devices are connected
- Update to Linux 4.9.0 kernel for Generic and Raspberry Pi
- Update to Linux support patches for Raspberry Pi
- Updates to Linux 3.14 kernel for Amlogic aarch64 projects
- Update to LibreELEC settings 0.8.6
- Update to Kodi v17-beta7
- Add overlayfs support to Amlogic 3.14 kernel
- Add aarch64 support to docker components
- Add synaptic touchpad driver to Xorg
- Add script for Intel/nVidia EDID capture and setup
- Remove virtualbox support from Virtual project

[View detailed changes on GitHub](https://github.com/LibreELEC/LibreELEC.tv/compare/7.90.009...7.90.010)

**\*\* CHRISTMAS 'CANARY' PERIOD \*\***

LibreELEC normally operates a 24-hour ‘canary’ period between release files being posted for download and the release being available via auto-update. To avoid support problems during the Christmas period when project staff are "doing the family thing" auto-update will be disabled until 27th December. During this time Krypton users can update manually using the LibreELEC settings add-on. Jarvis users wanting to update can use the older .tar file method.

**New installations using the LibreELEC USB-SD Creator app**

[LibreELEC.USB-SD.Creator.Linux-32bit.bin](http://releases.libreelec.tv/LibreELEC.USB-SD.Creator.Linux-32bit.bin) [(info)](http://releases.libreelec.tv/LibreELEC.USB-SD.Creator.Linux-32bit.bin?mirrorlist) [LibreELEC.USB-SD.Creator.Linux-64bit.bin](http://releases.libreelec.tv/LibreELEC.USB-SD.Creator.Linux-64bit.bin) [(info)](http://releases.libreelec.tv/LibreELEC.USB-SD.Creator.Linux-64bit.bin?mirrorlist) [LibreELEC.USB-SD.Creator.macOS.dmg](http://releases.libreelec.tv/LibreELEC.USB-SD.Creator.macOS.dmg) [(info)](http://releases.libreelec.tv/LibreELEC.USB-SD.Creator.macOS.dmg?mirrorlist) [LibreELEC.USB-SD.Creator.Win32.exe](http://releases.libreelec.tv/LibreELEC.USB-SD.Creator.Win32.exe) [(info)](http://releases.libreelec.tv/LibreELEC.USB-SD.Creator.Win32.exe?mirrorlist)

**New installation using 3rd party USB or SD writer apps (.img.gz)**

[LibreELEC-Generic.x86\_64-7.90.010.img.gz](http://releases.libreelec.tv/LibreELEC-Generic.x86_64-7.90.010.img.gz) ([info](http://releases.libreelec.tv/LibreELEC-Generic.x86_64-7.90.010.img.gz?mirrorlist)) [LibreELEC-RPi.arm-7.90.010.img.gz](http://releases.libreelec.tv/LibreELEC-RPi.arm-7.90.010.img.gz) ([info](http://releases.libreelec.tv/LibreELEC-RPi.arm-7.90.010.img.gz?mirrorlist)) [LibreELEC-RPi2.arm-7.90.010.img.gz](http://releases.libreelec.tv/LibreELEC-RPi2.arm-7.90.010.img.gz) ([info](http://releases.libreelec.tv/LibreELEC-RPi2.arm-7.90.010.img.gz?mirrorlist)) [LibreELEC-imx6.arm-7.90.010.img.gz](http://releases.libreelec.tv/LibreELEC-imx6.arm-7.90.010.img.gz) ([info](http://releases.libreelec.tv/LibreELEC-imx6.arm-7.90.010.img.gz?mirrorlist)) [LibreELEC-Odroid\_C2.aarch64-7.90.010.img.gz](http://releases.libreelec.tv/LibreELEC-Odroid_C2.aarch64-7.90.010.img.gz) ([info](http://releases.libreelec.tv/LibreELEC-Odroid_C2.aarch64-7.90.010.img.gz?mirrorlist)) [LibreELEC-WeTek\_Play.arm-7.90.010.img.gz](http://releases.libreelec.tv/LibreELEC-WeTek_Play.arm-7.90.010.img.gz) ([info](http://releases.libreelec.tv/LibreELEC-WeTek_Play.arm-7.90.010.img.gz?mirrorlist)) [LibreELEC-WeTek\_Core.arm-7.90.010.img.gz](http://releases.libreelec.tv/LibreELEC-WeTek_Core.arm-7.90.010.img.gz) ([info](http://releases.libreelec.tv/LibreELEC-WeTek_Core.arm-7.90.010.img.gz?mirrorlist)) [LibreELEC-WeTek\_Hub.aarch64-7.90.010.img.gz](http://releases.libreelec.tv/LibreELEC-WeTek_Hub.aarch64-7.90.010.img.gz) ([info](http://releases.libreelec.tv/LibreELEC-WeTek_Hub.aarch64-7.90.010.img.gz?mirrorlist)) [LibreELEC-WeTek\_Play\_2.aarch64-7.90.010.img.gz](http://releases.libreelec.tv/LibreELEC-WeTek_Play_2.aarch64-7.90.010.img.gz) ([info](http://releases.libreelec.tv/LibreELEC-WeTek_Play_2.aarch64-7.90.010.img.gz?mirrorlist))

**New Install to WeTek internal NAND (.zip)**

[LibreELEC-WeTek\_Play.arm-7.90.010.zip](http://releases.libreelec.tv/LibreELEC-WeTek_Play.arm-7.90.010.zip) ([info](http://releases.libreelec.tv/LibreELEC-WeTek_Play.arm-7.90.010.zip?mirrorlist)) [LibreELEC-WeTek\_Core.arm-7.90.010.zip](http://releases.libreelec.tv/LibreELEC-WeTek_Core.arm-7.90.010.zip) ([info](http://releases.libreelec.tv/LibreELEC-WeTek_Core.arm-7.90.010.zip?mirrorlist)) [LibreELEC-WeTek\_Hub.aarch64-7.90.010.zip](http://releases.libreelec.tv/LibreELEC-WeTek_Hub.aarch64-7.90.010.zip) ([info](http://releases.libreelec.tv/LibreELEC-WeTek_Hub.aarch64-7.90.010.zip?mirrorlist)) [LibreELEC-WeTek\_Play\_2.aarch64-7.90.010.zip](http://releases.libreelec.tv/LibreELEC-WeTek_Play_2.aarch64-7.90.010.zip) ([info](http://releases.libreelec.tv/LibreELEC-WeTek_Play_2.aarch64-7.90.010.zip?mirrorlist))

**Manual Update from LibreELEC 7.0 or OpenELEC (.tar)**

[LibreELEC-Generic.x86\_64-7.90.010.tar](http://releases.libreelec.tv/LibreELEC-Generic.x86_64-7.90.010.tar) ([info](http://releases.libreelec.tv/LibreELEC-Generic.x86_64-7.90.010.tar?mirrorlist)) [LibreELEC-RPi.arm-7.90.010.tar](http://releases.libreelec.tv/LibreELEC-RPi.arm-7.90.010.tar) ([info](http://releases.libreelec.tv/LibreELEC-RPi.arm-7.90.010.tar?mirrorlist)) [LibreELEC-RPi2.arm-7.90.010.tar](http://releases.libreelec.tv/LibreELEC-RPi2.arm-7.90.010.tar) ([info](http://releases.libreelec.tv/LibreELEC-RPi2.arm-7.90.010.tar?mirrorlist)) [LibreELEC-imx6.arm-7.90.010.tar](http://releases.libreelec.tv/LibreELEC-imx6.arm-7.90.010.tar) ([info](http://releases.libreelec.tv/LibreELEC-imx6.arm-7.90.010.tar?mirrorlist)) [LibreELEC-Odroid\_C2.aarch64-7.90.010.tar](http://releases.libreelec.tv/LibreELEC-Odroid_C2.aarch64-7.90.010.tar) ([info](http://releases.libreelec.tv/LibreELEC-Odroid_C2.aarch64-7.90.010.tar?mirrorlist)) [LibreELEC-WeTek\_Play.arm-7.90.010.tar](http://releases.libreelec.tv/LibreELEC-WeTek_Play.arm-7.90.010.tar) ([info](http://releases.libreelec.tv/LibreELEC-WeTek_Play.arm-7.90.010.tar?mirrorlist)) [LibreELEC-WeTek\_Core.arm-7.90.010.tar](http://releases.libreelec.tv/LibreELEC-WeTek_Core.arm-7.90.010.tar) ([info](http://releases.libreelec.tv/LibreELEC-WeTek_Core.arm-7.90.010.tar?mirrorlist)) [LibreELEC-WeTek\_Hub.arm-7.90.010.tar](http://releases.libreelec.tv/LibreELEC-WeTek_Hub.aarch64-7.90.010.tar) ([info](http://releases.libreelec.tv/LibreELEC-WeTek_Hub.aarch64-7.90.010.tar?mirrorlist)) [LibreELEC-WeTek\_Play\_2.arm-7.90.010.tar](http://releases.libreelec.tv/LibreELEC-WeTek_Play_2.aarch64-7.90.010.tar) ([info](http://releases.libreelec.tv/LibreELEC-WeTek_Play_2.aarch64-7.90.010.tar?mirrorlist))

**SUPPORT ASSISTANCE AND BUG REPORTS**

If you spot issues, please flag them via a [bug report in the forums](http://forum.libreelec.tv/forum-35.html). You are also very welcome and encouraged to get involved and [submit fixes via GitHub!](https://github.com/LibreELEC/LibreELEC.tv)


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

