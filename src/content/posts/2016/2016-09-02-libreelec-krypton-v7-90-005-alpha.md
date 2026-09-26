---
layout: post
title: "LibreELEC (Krypton) v7.90.005 ALPHA"
image: "img/posts/2016/alpha_graffiti.png"
---

LibreELEC (Krypton) 8.0 preview builds continue with v7.90.005 which is now available for all build projects. It contains Kodi v17.0-beta1 code, so yes, upstream Kodi has entered Beta while we remain in Alpha. Krypton for Intel/AMD x86 and Raspberry Pi devices is solid while iMX6 and Amlogic device support has progressed, but falls short of where we'd like to be for Beta. The changes in v7.90.005 include:

- Fix support for 5GHz networks on Realtek 8812au wireless devices
- Fix inclusion of distro specific config.txt on Raspberry Pi devices
- Fix installer USB/SD label to 'LIBREELEC' instead of random text
- Update to Kodi v17.0 beta 1
- Update core builds to Linux 4.7.2
- Update Raspberry Pi Linux and Kodi support patches
- Update Linux kernel for Odroid\_C2 (using HK sources)
- Update u-boot for Odroid\_C2
- Update nVidia main driver to 367.44
- Update wireless-regdb
- Update patches for Intel Baytrail/Cherrytrail HDMI audio support
- Add information on CPU governor in log generation script
- Add new project for the [WeTek\_Hub](http://wetek.com/product/wetek-hub) !!
- Add support for unique identifiers in network boot (for RPi3)
- Add x11grab\_xcb support to ffmpeg
- Add support for auto-detecting Intel GPUs and setting VAAPI + limited-range
- Add support for "limited range" in Kodi basic settings
- Remove ~/.libreelec patching support to reduce GPLv2 non-compliance
- Remove the kodi.game extension point as it's not required

[View detailed changes on GitHub](https://github.com/LibreELEC/LibreELEC.tv/compare/7.90.004...7.90.005)

**New installation via USB or SD card media**

[LibreELEC.USB-SD.Creator.Linux-32bit.bin](http://releases.libreelec.tv/LibreELEC.USB-SD.Creator.Linux-32bit.bin) [(info)](http://releases.libreelec.tv/LibreELEC.USB-SD.Creator.Linux-32bit.bin?mirrorlist) [LibreELEC.USB-SD.Creator.Linux-64bit.bin](http://releases.libreelec.tv/LibreELEC.USB-SD.Creator.Linux-64bit.bin) [(info)](http://releases.libreelec.tv/LibreELEC.USB-SD.Creator.Linux-64bit.bin?mirrorlist) [LibreELEC.USB-SD.Creator.macOS.dmg](http://releases.libreelec.tv/LibreELEC.USB-SD.Creator.macOS.dmg) [(info)](http://releases.libreelec.tv/LibreELEC.USB-SD.Creator.macOS.dmg?mirrorlist) [LibreELEC.USB-SD.Creator.Win32.exe](http://releases.libreelec.tv/LibreELEC.USB-SD.Creator.Win32.exe) [(info)](http://releases.libreelec.tv/LibreELEC.USB-SD.Creator.Win32.exe?mirrorlist)

**New installation using 3rd party USB or SD writer apps (.img.gz)**

[LibreELEC-Generic.x86\_64-7.90.005.img.gz](http://releases.libreelec.tv/LibreELEC-Generic.x86_64-7.90.005.img.gz) ([info](http://releases.libreelec.tv/LibreELEC-Generic.x86_64-7.90.005.img.gz?mirrorlist)) [LibreELEC-RPi.arm-7.90.005.img.gz](http://releases.libreelec.tv/LibreELEC-RPi.arm-7.90.005.img.gz) ([info](http://releases.libreelec.tv/LibreELEC-RPi.arm-7.90.005.img.gz?mirrorlist)) [LibreELEC-RPi2.arm-7.90.005.img.gz](http://releases.libreelec.tv/LibreELEC-RPi2.arm-7.90.005.img.gz) ([info](http://releases.libreelec.tv/LibreELEC-RPi2.arm-7.90.005.img.gz?mirrorlist)) [LibreELEC-imx6.arm-7.90.005.img.gz](http://releases.libreelec.tv/LibreELEC-imx6.arm-7.90.005.img.gz) ([info](http://releases.libreelec.tv/LibreELEC-imx6.arm-7.90.005.img.gz?mirrorlist)) [LibreELEC-WeTek\_Play.arm-7.90.005.img.gz](http://releases.libreelec.tv/LibreELEC-WeTek_Play.arm-7.90.005.img.gz) ([info](http://releases.libreelec.tv/LibreELEC-WeTek_Play.arm-7.90.005.img.gz?mirrorlist)) [LibreELEC-WeTek\_Core.arm-7.90.005.img.gz](http://releases.libreelec.tv/LibreELEC-WeTek_Core.arm-7.90.005.img.gz) ([info](http://releases.libreelec.tv/LibreELEC-WeTek_Core.arm-7.90.005.img.gz?mirrorlist)) [LibreELEC-Odroid\_C2.aarch64-7.90.005.img.gz](http://releases.libreelec.tv/LibreELEC-Odroid_C2.aarch64-7.90.005.img.gz) ([info](http://releases.libreelec.tv/LibreELEC-Odroid_C2.aarch64-7.90.005.img.gz?mirrorlist)) [LibreELEC-WeTek\_Hub.aarch64-7.90.005.img.gz](http://releases.libreelec.tv/LibreELEC-WeTek_Hub.aarch64-7.90.005.img.gz) ([info](http://releases.libreelec.tv/LibreELEC-WeTek_Hub.aarch64-7.90.005.img.gz?mirrorlist))

**New Install to WeTek internal NAND (.zip)**

[LibreELEC-WeTek\_Play.arm-7.90.005.zip](http://releases.libreelec.tv/LibreELEC-WeTek_Play.arm-7.90.005.zip) ([info](http://releases.libreelec.tv/LibreELEC-WeTek_Play.arm-7.90.005.zip?mirrorlist)) [LibreELEC-WeTek\_Core.arm-7.90.005.zip](http://releases.libreelec.tv/LibreELEC-WeTek_Core.arm-7.90.005.zip) ([info](http://releases.libreelec.tv/LibreELEC-WeTek_Core.arm-7.90.005.zip?mirrorlist)) [LibreELEC-WeTek\_Hub.aarch64-7.90.005.zip](http://releases.libreelec.tv/LibreELEC-WeTek_Hub.aarch64-7.90.005.zip) ([info](http://releases.libreelec.tv/LibreELEC-WeTek_Hub.aarch64-7.90.005.zip?mirrorlist))

**Manual Update from LibreELEC 7.0 or OpenELEC (.tar)**

[LibreELEC-Generic.x86\_64-7.90.005.tar](http://releases.libreelec.tv/LibreELEC-Generic.x86_64-7.90.005.tar) ([info](http://releases.libreelec.tv/LibreELEC-Generic.x86_64-7.90.005.tar?mirrorlist)) [LibreELEC-RPi.arm-7.90.005.tar](http://releases.libreelec.tv/LibreELEC-RPi.arm-7.90.005.tar) ([info](http://releases.libreelec.tv/LibreELEC-RPi.arm-7.90.005.tar?mirrorlist)) [LibreELEC-RPi2.arm-7.90.005.tar](http://releases.libreelec.tv/LibreELEC-RPi2.arm-7.90.005.tar) ([info](http://releases.libreelec.tv/LibreELEC-RPi2.arm-7.90.005.tar?mirrorlist)) [LibreELEC-imx6.arm-7.90.005.tar](http://releases.libreelec.tv/LibreELEC-imx6.arm-7.90.005.tar) ([info](http://releases.libreelec.tv/LibreELEC-imx6.arm-7.90.005.tar?mirrorlist)) [LibreELEC-WeTek\_Play.arm-7.90.005.tar](http://releases.libreelec.tv/LibreELEC-WeTek_Play.arm-7.90.005.tar) ([info](http://releases.libreelec.tv/LibreELEC-WeTek_Play.arm-7.90.005.tar?mirrorlist)) [LibreELEC-WeTek\_Core.arm-7.90.005.tar](http://releases.libreelec.tv/LibreELEC-WeTek_Core.arm-7.90.005.tar) ([info](http://releases.libreelec.tv/LibreELEC-WeTek_Core.arm-7.90.005.tar?mirrorlist)) [LibreELEC-WeTek\_Hub.arm-7.90.005.tar](http://releases.libreelec.tv/LibreELEC-WeTek_Hub.arm-7.90.005.tar) ([info](http://releases.libreelec.tv/LibreELEC-WeTek_Hub.arm-7.90.005.tar?mirrorlist)) [LibreELEC-Odroid\_C2.aarch64-7.90.005.tar](http://releases.libreelec.tv/LibreELEC-Odroid_C2.aarch64-7.90.005.tar) ([info](http://releases.libreelec.tv/LibreELEC-Odroid_C2.aarch64-7.90.005.tar?mirrorlist))

**\*\*REMINDER\*\***

LibreELEC operates a 24-hour ‘canary’ period between release files being posted to the download page and the release being available via auto-update. During this time Krypton users can update from within the LibreELEC settings add-on. Jarvis users wanting to move up will need to manually update the old-fashioned file copy/paste way.

Enjoy 🙂

[LibreELEC PREVIEW BUILDS](https://libreelec.tv/downloads/preview/)


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

