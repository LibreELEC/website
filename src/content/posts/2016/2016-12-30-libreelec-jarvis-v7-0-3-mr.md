---
layout: post
title: "LibreELEC (Jarvis) v7.0.3 MR"
image: "img/posts/2016/update_703.png"
---

LibreELEC (Jarvis) v7.0.3 MR is a minor update bringing "armchair upgrades" to the settings add-on, firmware support for the [BCM2837 based Raspberry Pi 2B+](https://www.raspberrypi.org/forums/viewtopic.php?t=160578) and drivers for the new [Hifiberry Digi+ Pro](https://www.hifiberry.com/products/digiplus/) card. Fixes for Kodi Jarvis stopped after our v7.0.2 release in June so there are no Kodi changes, and the developer team has been focussed on Krypton for some time so we do not want to introduce new issues at this late stage in the Jarvis lifecycle by forcing major OS changes. Add-on updates for 7.0 releases will continue (if add-on maintainers submit changes) but 7.0.3 MR is the final LibreELEC 7.0 release. The team is now "full speed ahead" towards Krypton.

**UPDATE CHANNELS**

The "check for update" function in LibreELEC Settings displays official releases and allows manual updates without copy/pasting .tar files to samba shares or running wget commands from the SSH console. Setting "LibreELEC 8.0" as the update channel allows easy manual update from 7.0.3 to a current Krypton preview, or the final LibreELEC 8.0 release when it arrives.

The video below shows manual update to a LibreELEC 8.0 preview release:

https://www.youtube.com/watch?v=CjlHY6syRHw

**AUTO-UPDATE TO KRYPTON?**

Users frequently ask us whether LibreELEC will automatically update to Krypton when released. The answer is no. In our experience the combined OS and Kodi update easily but users see issues with add-ons. For this reason the decision to update to 8.0 must be user-initiated (and ideally after a backup is taken and moved off-box). The new update channels feature in LibreELEC 7.0.3 helps to make the manual update easy - all you need is a remote control.

**BOOT/DISK PARTITION SIZE**

The LibreELEC 7.0.3 image for Generic x86\_64 hardware is 215MB. This means it will fit in the 230MB boot partition size limit of older OpenELEC installations without resizing the boot partition or forcing a complete reinstallation.

**\*\*REMINDER\*\***

LibreELEC operates a 24-hour ‘canary’ period between maintenance release files being posted to the download page and the release being available via auto-update and the noobs lite installer.

That's all. Enjoy :)


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

