---
layout: post
title: "LibreELEC (Omega) 12 Beta1"
description: "LE 12.0 b... b... b... beta"
image: img/posts/icon-release-k21.jpg
---

LibreELEC 12 Beta1 has released, bringing Kodi (Omega) v21.0.

## NEWS

With the new release cycle we changed many devices to 64-bit, including Rasberry Pi 4 and 5.

If using Widevine DRM (required for various copyprotected video add-ons like Prime Video, Netflix, etc.) on one of these devices and updating from LibreELEC 11, Widevine DRM will need to be reinstalled on these devices due to the changed architecture.

LibreELEC 11.0 installs will not automatically update, but you can [manually update](https://wiki.libreelec.tv/support/update). LibreELEC installs from before LibreELEC 10.0 must make a clean install due to the Python 3 changes since Kodi v19.

## KNOWN PROBLEMS

- Allwinner and Rockchip devices are not widely tested. If there are problems please report them.
- nVidia ION is broken in this beta. It is fixed in the upcoming Beta2.
- Rockchip RK3328 (Rock64 ...) devices are currently are not working.

## RASPBERRY PI

- 50/60fps H264 HW decoding may need `force_turbo=1` or `core_freq_min=500` in config.txt to avoid AV-sync-issues/skipping

## GENERIC (x86_64)

The Generic image runs the same GBM/V4L2 graphics stack we have long used with ARM devices. It supports HDR with recent AMD and Intel GPUs. We added a Generic-legacy image that runs the older X11 graphics stack used in LibreELEC 7.0-10.0. Devices may update between the GBM and X11 images without issues.

Use the Generic-legacy image if:

- You need support for nVidia GPUs
- You need support for the Chrome Browser add-on
- You see graphical glitches on older hardware, e.g. NUC 6th Gen

NB: In the last year nVidia has made progress in their support for modern graphics standards. Drivers are now mesa/GBM compatible but still have dependencies on Wayland which we do not use, and Kodi has no plan to support proprietary NVDEC decoding (but VDPAU remains). We still recommend users avoid investing in nVidia GPUs.

## AMLOGIC

Support for Amlogic S905, S905X/D, and S912 devices resumes. H264 playback and seeking is solid. HEVC playback is okay and seeking recently improved from 2/10 to maybe 7/10. HDR works with HEVC/VP9 media on S905X/D and S912 devices. Multi-Channel PCM and Pass-Through audio works on HDMI up to 7.1 channels. With typical 1080p oriented media collections the AMLGX image is quite usable and provides access to the latest Kodi release and compatible add-ons. To be crystal clear: the AMLGX image is not perfect, but cost-of-living is high and $0 updates to old hardware are more appealing to users than $150+ purchases of new hardware. If we resume support (with caveats) fewer old boxes end up in landfill. There's also an increased chance of people contributing improvements to smooth the rough edges that exist.

To set expectations, here's the 'No' list:

- No support for updates from older LibreELEC releases (clean install is mandatory)
- No support for internal eMMC install except WeTek Hub/Play2 and SBC boards
- No support for SSV6501 and S908CS WiFi chips
- No drivers for in-box DVB tuners
- No hardware deinterlacing
- No HDR to SDR tonemapping
- No formal support for newer S905X2/D2/Y2, S905X3, S922X, A312D devices (read below)

The reason for not formally supporting newer hardware generations is all about hardware decode drivers and user expectations. Amlogic hardware video decoding requires the "VDEC" driver for older GXBB/GXL/GXM hardware and "HEVC" driver (driver, not codec) for newer G12A/G12B/SM1 hardware, and both generations prefer a later iteration of "multi" decoder firmware. The current upstream driver code attempts to mix both drivers in a common codebase with partial success and does not support multi firmware blobs. As a result, the current drivers work well on older hardware, but bugs prevent 10-bit and 4K output on newer hardware, and users with newer and (on paper) more capable hardware generally have higher expectations and more demanding media. To avoid negative feedback and user frustration; if you have newer Amlogic hardware our recommendation is to run Kodi on the Android install that shipped with the box. If you choose to run AMLGX images on newer hardware; expect 1080p maximum output, and minimum interest from developers if you post known issues in the forums.

AMLGX has a different boot and SD card preparation process, i.e. no renaming of device-tree files, so [PLEASE READ THIS WIKI ARTICLE](https://wiki.libreelec.tv/hardware/amlogic) for more info on differences between AMLGX and legacy images.

## MAKE BACKUPS

We always recommend creating a backup BEFORE upgrades. Otherwise, a quick roll back to the previous version is significantly more difficult. Kodi does not support downgrades; if it ever worked for you in the past it was luck, not design. The Python 3 changes that took place between LibreELEC 9 and LibreELEC 10 guarantee in-situ upgrade challenges, so unless you are already running LibreELEC 10 a clean install is mandatory.

## SUPPORT

Project staff are available in the [forum](https://forum.libreelec.tv) to answer questions and provide advice. If you have a problem, technical issues are best accompanied by system and Kodi debug logs - help us to help you.

Enjoy! :)

## Donating


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


[**Click here to go to the download page.**](https://libreelec.tv/downloads/)

## SHA256 Hashes

Just add `?mirrorlist` after the link to show the SHA256 hash, for example `https://releases.libreelec.tv/LibreELEC-RPi4.arm-11.95.1.img.gz?mirrorlist`.
We are working at a proper integration into the website.
