---
layout: post
title: "LibreELEC (Jarvis) v7.0.2 MR"
image: "img/posts/2016/100-percent-free.png"
---

The v7.0.2 maintenance release has a strong Raspberry flavour with firmware and Kodi updates to resolve minor Pi issues and a bootloop with the Xperience1080 skin. There are also tweaks to polish the "noobs" experience as the Raspberry Pi Foundation now includes LibreELEC in the list of distributions available via noobs and their downloads page. If you are not using Pi hardware this is a minor update as there have been few reports of things to fix. v7.0.2 changes include:

- Fix an issue where journald logs were wiped on RPi due to time/NTP changes
- Fix an issue where Kodi skins with no cursor bootloop on Pi hardware
- Fix an issue with mtools creating corrupt directories in installer images
- Fix an machine-id issue when /storage/.cache doesn't exist on first boot
- Fix context key mapping on the OSMC remote
- Fix some JSON formatting issues for the noobs installer
- Update to brcmfmac43430-sdio wlan firmware for RPi3
- Update to RPi/RPi2 backports and firmware
- Update Linux kernel to 4.4.13 to track Pi support patches
- Update eventlicd version to latest
- Update various noobs files to improve cosmetics
- Update udev rules to prevent noobs partitions auto-mounting
- Add support for new i2c soundcards on Pi hardware
- Add support for RTC\_DRV\_DS3232 on RPi/RPi2
- Add support for auto-delete of FSCK.\* files in boot partitions
- Add 40x40 LibreELEC icon to the noobs installer
- Add support for the Terratec Cinergy S2 Rev.3 DVB card

**\*\*REMINDER\*\***

LibreELEC operates a 24-hour ‘canary’ period between maintenance release files being posted to the download page and the release being available via auto-update and noobs.

**ADD-ONS**

Recent add-on changes include: Adding 'unclutter' support to Chromium to allow optional hiding of the mouse cursor (useful in Kiosk set-ups). Syncthing now supports user-updating of the Syncthing binary within the addon. Hyperion has been updated and now ships with an improved default config file. Docker has been updated and now supports status pop-up notifications in the Kodi GUI. Oscam has been updated. The mpg123 and squeezlite binaries have been added to our multimedia-tools bundle, and both Music Player Daemon (MPD) and Moonlight have been added to the repo.

Enjoy :)


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

