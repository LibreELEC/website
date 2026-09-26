---
layout: post
title: "LibreELEC (Leia) v8.90.004 ALPHA"
image: "img/posts/2018/leia2.jpg"
---

The LibreELEC 9.0 Alpha cycle has continued and releases for Amlogic and Slice hardware have been added additionally to the test cycle. We official support now **Khadas VIM** (AML S905X) and the **LePotato** (AML S905X) too. There are no plans to release LibreELEC 9.0 images for NXP/iMX6 hardware as support was removed from Kodi some months ago. Support will be reinstated in a future LibreELEC release and we will update you on progress with the next-generation Kodi video pipeline (which makes that possible) soon.

Alpha releases are important to the team because we cannot test every scenario and sometimes sidestep issues without realising. The project needs a body of regular testers to go find the problems we miss. Testing will be particularly important for LibreELEC 9.0 as Kodi v18 includes substantial internal changes to VideoPlayer and introduces new retro-gaming capabilities.

**TEST NOTES**

Our current focus is the OS core and we are more interested in hardware and driver bugs than Kodi problems. Please report the issues you find by starting a thread in the forums or use our [bug tracker](https://forum.libreelec.tv/core/ticketsystem/). Raspberry Pi users are reminded that **dtoverlay=lirc-rpi** has now been deprecated. Please read the [infrared remotes wiki page](https://wiki.libreelec.tv/infrared_remotes#important_changes_in_libreelec_90)  before updating.

**\*\* CAUTION \*\***

Alpha builds exist for hands-on testing not a hands-off experience. If you run Alpha builds you must be willing to report issues and engage the LibreELEC and Kodi developers in hunting bugs. If you have no idea what a debug log is or "wife acceptance factor" is critical, these builds are not for you. If you want to run Alpha builds please make a backup and store it somewhere off-box first. Your failure to make a backup is not our problem.

**Updates since v8.90.003 ALPHA:**

\- added official Khadas VIM and LePotato support - added images to the test cycle for for WeTek devices (Core, Play 1, Play 2, Hub), Odroid\_C2 and for Slice 1 + 3 - updated to Kodi 18 Beta 1 (v2) - updated Raspberry Pi to latest 4.14 Kernel and added back the HEVC optimisations that allows HEVC playback at the RPi - a lot more updates and fixes, have a look at the [full changelog](https://github.com/LibreELEC/LibreELEC.tv/compare/8.90.003...8.90.004)

**LibreELEC 9.0 Alpha 004 (Kodi 18 Beta 1)**

To update an existing installation from within the Kodi GUI select manual update in the LibreELEC settings add-on and then check for updates; select the LibreELEC 9.0 channel and then the 8.90.004 release. To create new install media please use our simple [USB/SD Creator App](https://libreelec.tv/downloads/). The following .img.gz files can also be used to create install media or update the old fashioned way:

**RPi 2/3** [LibreELEC-RPi2.arm-8.90.004.img.gz](http://releases.libreelec.tv/LibreELEC-RPi2.arm-8.90.004.img.gz) ([info](http://releases.libreelec.tv/LibreELEC-RPi2.arm-8.90.004.img.gz?mirrorlist))

**RPi 0/1** [LibreELEC-RPi.arm-8.90.004.img.gz](http://releases.libreelec.tv/LibreELEC-RPi.arm-8.90.004.img.gz) ([info](http://releases.libreelec.tv/LibreELEC-RPi.arm-8.90.004.img.gz?mirrorlist))

**Generic** [LibreELEC-Generic.x86\_64-8.90.004.img.gz](http://releases.libreelec.tv/LibreELEC-Generic.x86_64-8.90.004.img.gz) ([info](http://releases.libreelec.tv/LibreELEC-Generic.x86_64-8.90.004.img.gz?mirrorlist))

**Odroid\_C2** [LibreELEC-Odroid\_C2.arm-8.90.004.img.gz](http://releases.libreelec.tv/LibreELEC-Odroid_C2.arm-8.90.004.img.gz) ([info](http://releases.libreelec.tv/LibreELEC-Odroid_C2.arm-8.90.004.img.gz?mirrorlist))

**KVIM** [LibreELEC-KVIM.arm-8.90.004.img.gz](http://releases.libreelec.tv/LibreELEC-KVIM.arm-8.90.004.img.gz) ([info](http://releases.libreelec.tv/LibreELEC-KVIM.arm-8.90.004.img.gz?mirrorlist))

**LePotato** [LibreELEC-LePotato.arm-8.90.004.img.gz](http://releases.libreelec.tv/LibreELEC-LePotato.arm-8.90.004.img.gz) ([info](http://releases.libreelec.tv/LibreELEC-LePotato.arm-8.90.004.img.gz?mirrorlist))

**Slice** [LibreELEC-Slice.arm-8.90.004.img.gz](http://releases.libreelec.tv/LibreELEC-Slice.arm-8.90.004.img.gz) ([info](http://releases.libreelec.tv/LibreELEC-Slice.arm-8.90.004.img.gz?mirrorlist))

**Slice3** [LibreELEC-Slice3.arm-8.90.004.img.gz](http://releases.libreelec.tv/LibreELEC-Slice3.arm-8.90.004.img.gz) ([info](http://releases.libreelec.tv/LibreELEC-Slice3.arm-8.90.004.img.gz?mirrorlist))

**WeTek\_Core** [LibreELEC-WeTek\_Core.arm-8.90.004.img.gz](http://releases.libreelec.tv/LibreELEC-WeTek_Core.arm-8.90.004.img.gz) ([info](http://releases.libreelec.tv/LibreELEC-WeTek_Core.arm-8.90.004.img.gz?mirrorlist))

**WeTek\_Hub** [LibreELEC-WeTek\_Hub.arm-8.90.004.img.gz](http://releases.libreelec.tv/LibreELEC-WeTek_Hub.arm-8.90.004.img.gz) ([info](http://releases.libreelec.tv/LibreELEC-WeTek_Hub.arm-8.90.004.img.gz?mirrorlist))

**WeTek\_Play** [LibreELEC-WeTek\_Play.arm-8.90.004.img.gz](http://releases.libreelec.tv/LibreELEC-WeTek_Play.arm-8.90.004.img.gz) ([info](http://releases.libreelec.tv/LibreELEC-WeTek_Play.arm-8.90.004.img.gz?mirrorlist))

**WeTek\_Play\_2** [LibreELEC-WeTek\_Play\_2.arm-8.90.004.img.gz](http://releases.libreelec.tv/LibreELEC-WeTek_Play_2.arm-8.90.004.img.gz) ([info](http://releases.libreelec.tv/LibreELEC-WeTek_Play_2.arm-8.90.004.img.gz?mirrorlist))


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

