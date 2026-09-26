---
layout: post
title: "LibreELEC (Jarvis) v7.0.1 MR"
image: "img/posts/2016/free_upgrade.png"
---

It's been three weeks since we published LibreELEC 7.0.0 so its time to roll-up fixes for minor issues in a maintenance release (MR). The list of changes is shown below. It's a short list as the 7.0.0 release is proving to be nice and stable.

- Fix (disable) power saving mode on RTL8812AU chips
- Fix minor issues with SSL certificate paths
- Fix for an EPG search issue (backported from Krypton)
- Fix machine-id uniqueness on hardware with slow-loading network drivers
- Fix boot splash aspect ratio on nVidia GPU systems
- Update Kodi RPi-backport patch to address minor Kodi video issues
- Update the LibreELEC add-on repo to use gzipped addons.xml
- Add support for the Netgear WNA1000M v2 to RTL8192CU
- Add support for bluez auto-pairing with DualShock3 controllers
- Add LibreELEC RSS feed to Kodi (RSS remains off by default)

**\*\*REMINDER\*\***

LibreELEC operates a 24-hour ‘canary’ period between maintenance release files being posted to the download page and the release being available via auto-update.

**ADD-ONS**

Tinc, Syncthing, Inadyn and Dispmanx (VNC for Raspberry Pi) have been added to the LibreELEC add-on repo courtesy of contributor Anton Voyl. LibreELEC team also added four bundle add-ons; System Tools, Multimedia Tools, DVB Tools, and Raspberry Pi Tools. These group commonly requested extra tools into four convenient packages making it easier for you to install, and easier for us to maintain.

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

