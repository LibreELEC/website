---
layout: post
title: "LibreELEC (Krypton) v7.90.003 ALPHA"
image: "img/posts/2016/alpha_scrabble.png"
---

LibreELEC (Krypton) 8.0 preview builds continue with v7.90.003 which is now available for Generic x86\_64 hardware and Raspberry Pi devices. The Amlogic changes in Kodi VideoPlayer are still not at the point where we want larger-scale testing (and bug reporting) from WeTek Play/Core and Odroid C2 users so we continue to hold those builds. The changes in v7.90.003 include:

- Fix an issue where journald logs were wiped on RPi due to time/NTP changes
- Fix an issue with updating from .img.gz on WP/WC block device storage
- Fix an issue with mtools creating corrupt directories in installer images
- Fix an machine-id issue when /storage/.cache doesn’t exist on first boot
- Fix context key mapping on the OSMC remote
- Update to brcmfmac43430-sdio wlan firmware for RPi3
- Update to RPi/RPi2 backports and firmware
- Update eventlicd version to latest
- Update Kodi to v17.0-Alpha2
- Update udev rules to prevent noobs partitions auto-mounting
- Add support for new i2c soundcards on Pi hardware
- Add support for RTC\_DRV\_DS3232 on RPi/RPi2
- Add support for auto-delete of FSCK.\* files in boot partitions
- Add support for the Terratec Cinergy S2 Rev.3 DVB card

[View detailed changes on GitHub](https://github.com/LibreELEC/LibreELEC.tv/compare/7.90.002...7.90.003)

There are still issues with remote controls not auto-repeating (making scrolling harder) but we have identified the problem commit in the Linux 4.6.x kernel. The fix probably requires other packages to accommodate the kernel change; we cannot simply revert the commit, so we continue to unpick code spaghetti and investigate the solution. In v17-Alpha2 Kodi introduced the inputstream.rtmp add-on. Some streams that worked in earlier builds will break until you install it.

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

