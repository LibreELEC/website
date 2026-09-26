---
layout: post
title: "LibreELEC (Krypton) v7.90.004 ALPHA"
image: "img/posts/2016/alpha_mission.png"
---

LibreELEC (Krypton) 8.0 preview builds continue with v7.90.004 which is now available for all build projects. Krypton support for imx6, WeTek Play/Core and various Amlogic devices is still being refined so do not expect perfection: we need our supporting community builders and code contributors to  refocus their efforts from improving Jarvis to improving Krypton. The changes in v7.90.004 include:

- Fix IR auto-repeat on many remotes
- Fix use of custom remote.conf files
- Fix /flash and /system unmount messages at shutdown
- Fix use of freetype in lcdproc
- Fix use S/PDIF passthrough on imx6
- Fix typos in the imx6 update script
- Fix logic of NAND installs on WeTek Play/Core devices
- Fix "route add" failures from Busybox when using OpenVPN
- Fix handling of progressive content causing green screens in Generic
- Fix unsupported use of UAS in Raspberry Pi kernels
- Update to Linux 4.7 kernel
- Update to Kodi v17.0 alpha3
- Update to RPi/RPi2 backports and firmware
- Update to imx6 kernel, libcec and Kodi
- Update to boot resolution (splash rendering) code
- Update to amremote driver
- Update primary nVidia driver to 367.35
- Updates to numerous other build-system packages
- Add database migration status indication to Kodi splash screen
- Add creation of OVA images to the Virtual project
- Add Atric IR-wakeup-USB support to lirc
- Add disk "out of space" warnings to the init/update process

[View detailed changes on GitHub](https://github.com/LibreELEC/LibreELEC.tv/compare/7.90.003...7.90.004)

**PASSTHROUGH AUDIO**

In Kodi Krypton passthrough audio requires VideoPlayer to use the audio clock of the source material as its time reference. If you enable "sync playback to display" Kodi is forced to use the connected panel frequency for its clock reference so passthrough audio is automatically disabled. Older versions of Kodi had a mode that duplicates (or drops) source audio to keep the audio clock in sync with the panel but this hack has been removed in Krypton. This is mentioned because we see reports of "passthrough does not work in Alpha builds!" and legacy "sync playback to display" configuration is the main cause.

**KODI BETA**

Kodi are expected to release the first Krypton Beta in the next ~10 days but Kodi starting beta does not mean LibreELEC also starts beta. Kodi development still has a long way to go (multiple beta and release candidate builds) and we still have a major Amlogic kernel change and support for the WeTek Hub and other Generic S905 devices to pull in. LibreELEC will continue with Alpha builds until we are confident the major components are solid (no major version changes needed) and properly tested.

**\*\*REMINDER\*\***

LibreELEC operates a 24-hour ‘canary’ period between release files being posted to the download page and the release being available via auto-update.

**\*\* CAUTION \*\***

Alpha builds exist for hands-on testing not a hands-off experience. If you run Alpha builds you must be willing to report issues via the forums and engage the LibreELEC and Kodi developers in hunting bugs. If you have no idea what a debug log is or “wife acceptance factor” is critical, these builds are not for you.

If you want to run Alpha builds _please_ make a backup and store it somewhere safe (off-box) first. Your failure to make a backup is not our problem.

Enjoy 🙂

[LibreELEC PREVIEW BUILDS](https://libreelec.tv/downloads/preview/)


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

