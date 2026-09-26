---
layout: post
title: "LibreELEC (Krypton) v7.90.006 ALPHA"
image: "img/posts/2016/alfa_v6.png"
---

LibreELEC (Krypton) 8.0 preview builds continue with v7.90.006 containing Kodi v17.0-beta2. The Kodi developers are still submitting changes in volume so our current plan is to hold in Alpha until Kodi reaches RC1. The iMX6 build is not currently available as testing has not completed. Changes in v7.90.006 include:

- Fix root ownership of /storage during netboot
- Fix power-off behaviour on iMX6 (CEC ignore TV off)
- Fix power-off behaviour on WeTek Hub
- Fix kmsg text before boot splash on Odroid C2
- Fix advancedsettings.xml options on WeTek Hub/Core/Play
- Update Raspberry Pi Linux and Kodi support patches
- Update core builds to Linux 4.7.4
- Update to our own linux-amlogic 3.10 kernel
- Update to our own linux-amlogic 3.14 kernel
- Update a large number of other misc. packages
- Update RTL8192EU driver
- Update AMD GPU driver(s)
- Update iMX6 to use LZO squashfs compression
- Update remote keymap for WeTek Hub
- Update WeTek Hub/Core/Play to use interactive governor
- Add support for newer ChromeOS hardware
- Add support for HK RTC shield on Odroid C2
- Add support for GPIO fan control on TBS Matrix boxes
- Add support for 'run' mode in USB installer for Live Mode testing
- Add initial support for HD audio formats on Odroid C2 and WeTek Hub
- Add LibreELEC settings to Kodi settings menu (see below)
- Remove LibreELEC settings from home-screen navigation (see above)

[View detailed changes on GitHub](https://github.com/LibreELEC/LibreELEC.tv/compare/7.90.005...7.90.006)

**LibreELEC SETTINGS**

Please note the last two lines in the list above. The LibreELEC settings add-on has not disappeared, it has moved from the home screen menu into Kodi settings.

**New installation via USB or SD card media**

[LibreELEC.USB-SD.Creator.Linux-32bit.bin](http://releases.libreelec.tv/LibreELEC.USB-SD.Creator.Linux-32bit.bin) [(info)](http://releases.libreelec.tv/LibreELEC.USB-SD.Creator.Linux-32bit.bin?mirrorlist) [LibreELEC.USB-SD.Creator.Linux-64bit.bin](http://releases.libreelec.tv/LibreELEC.USB-SD.Creator.Linux-64bit.bin) [(info)](http://releases.libreelec.tv/LibreELEC.USB-SD.Creator.Linux-64bit.bin?mirrorlist) [LibreELEC.USB-SD.Creator.macOS.dmg](http://releases.libreelec.tv/LibreELEC.USB-SD.Creator.macOS.dmg) [(info)](http://releases.libreelec.tv/LibreELEC.USB-SD.Creator.macOS.dmg?mirrorlist) [LibreELEC.USB-SD.Creator.Win32.exe](http://releases.libreelec.tv/LibreELEC.USB-SD.Creator.Win32.exe) [(info)](http://releases.libreelec.tv/LibreELEC.USB-SD.Creator.Win32.exe?mirrorlist)

**New installation using 3rd party USB or SD writer apps (.img.gz)**

[LibreELEC-Generic.x86\_64-7.90.006.img.gz](http://releases.libreelec.tv/LibreELEC-Generic.x86_64-7.90.006.img.gz) ([info](http://releases.libreelec.tv/LibreELEC-Generic.x86_64-7.90.006.img.gz?mirrorlist)) [LibreELEC-RPi.arm-7.90.006.img.gz](http://releases.libreelec.tv/LibreELEC-RPi.arm-7.90.006.img.gz) ([info](http://releases.libreelec.tv/LibreELEC-RPi.arm-7.90.006.img.gz?mirrorlist)) [LibreELEC-RPi2.arm-7.90.006.img.gz](http://releases.libreelec.tv/LibreELEC-RPi2.arm-7.90.006.img.gz) ([info](http://releases.libreelec.tv/LibreELEC-RPi2.arm-7.90.006.img.gz?mirrorlist)) [LibreELEC-WeTek\_Play.arm-7.90.006.img.gz](http://releases.libreelec.tv/LibreELEC-WeTek_Play.arm-7.90.006.img.gz) ([info](http://releases.libreelec.tv/LibreELEC-WeTek_Play.arm-7.90.006.img.gz?mirrorlist)) [LibreELEC-WeTek\_Core.arm-7.90.006.img.gz](http://releases.libreelec.tv/LibreELEC-WeTek_Core.arm-7.90.006.img.gz) ([info](http://releases.libreelec.tv/LibreELEC-WeTek_Core.arm-7.90.006.img.gz?mirrorlist)) [LibreELEC-Odroid\_C2.aarch64-7.90.006.img.gz](http://releases.libreelec.tv/LibreELEC-Odroid_C2.aarch64-7.90.006.img.gz) ([info](http://releases.libreelec.tv/LibreELEC-Odroid_C2.aarch64-7.90.006.img.gz?mirrorlist)) [LibreELEC-WeTek\_Hub.aarch64-7.90.006.img.gz](http://releases.libreelec.tv/LibreELEC-WeTek_Hub.aarch64-7.90.006.img.gz) ([info](http://releases.libreelec.tv/LibreELEC-WeTek_Hub.aarch64-7.90.006.img.gz?mirrorlist))

**New Install to WeTek internal NAND (.zip)**

[LibreELEC-WeTek\_Play.arm-7.90.006.zip](http://releases.libreelec.tv/LibreELEC-WeTek_Play.arm-7.90.006.zip) ([info](http://releases.libreelec.tv/LibreELEC-WeTek_Play.arm-7.90.006.zip?mirrorlist)) [LibreELEC-WeTek\_Core.arm-7.90.006.zip](http://releases.libreelec.tv/LibreELEC-WeTek_Core.arm-7.90.006.zip) ([info](http://releases.libreelec.tv/LibreELEC-WeTek_Core.arm-7.90.006.zip?mirrorlist)) [LibreELEC-WeTek\_Hub.aarch64-7.90.006.zip](http://releases.libreelec.tv/LibreELEC-WeTek_Hub.aarch64-7.90.006.zip) ([info](http://releases.libreelec.tv/LibreELEC-WeTek_Hub.aarch64-7.90.006.zip?mirrorlist))

**Manual Update from LibreELEC 7.0 or OpenELEC (.tar)**

[LibreELEC-Generic.x86\_64-7.90.006.tar](http://releases.libreelec.tv/LibreELEC-Generic.x86_64-7.90.006.tar) ([info](http://releases.libreelec.tv/LibreELEC-Generic.x86_64-7.90.006.tar?mirrorlist)) [LibreELEC-RPi.arm-7.90.006.tar](http://releases.libreelec.tv/LibreELEC-RPi.arm-7.90.006.tar) ([info](http://releases.libreelec.tv/LibreELEC-RPi.arm-7.90.006.tar?mirrorlist)) [LibreELEC-RPi2.arm-7.90.006.tar](http://releases.libreelec.tv/LibreELEC-RPi2.arm-7.90.006.tar) ([info](http://releases.libreelec.tv/LibreELEC-RPi2.arm-7.90.006.tar?mirrorlist)) [LibreELEC-WeTek\_Play.arm-7.90.006.tar](http://releases.libreelec.tv/LibreELEC-WeTek_Play.arm-7.90.006.tar) ([info](http://releases.libreelec.tv/LibreELEC-WeTek_Play.arm-7.90.006.tar?mirrorlist)) [LibreELEC-WeTek\_Core.arm-7.90.006.tar](http://releases.libreelec.tv/LibreELEC-WeTek_Core.arm-7.90.006.tar) ([info](http://releases.libreelec.tv/LibreELEC-WeTek_Core.arm-7.90.006.tar?mirrorlist)) [LibreELEC-WeTek\_Hub.arm-7.90.006.tar](http://releases.libreelec.tv/LibreELEC-WeTek_Hub.aarch64-7.90.006.tar) ([info](http://releases.libreelec.tv/LibreELEC-WeTek_Hub.aarch64-7.90.006.tar?mirrorlist)) [LibreELEC-Odroid\_C2.aarch64-7.90.006.tar](http://releases.libreelec.tv/LibreELEC-Odroid_C2.aarch64-7.90.006.tar) ([info](http://releases.libreelec.tv/LibreELEC-Odroid_C2.aarch64-7.90.006.tar?mirrorlist))

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

