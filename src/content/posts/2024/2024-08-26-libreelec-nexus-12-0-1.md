---
layout: post
title: "LibreELEC (Omega) 12.0.1"
description: "LE 12.0.1 Patch Happens"
image: img/posts/icon-release-k21.jpg
---

LibreELEC 12.0.1 with Kodi (Omega) v21.1 has been released!

## IMPORTANT

64-bit capable ARM SoC devices including Raspberry Pi 4/5 have been switched from 'arm' to 'aarch64' userspace. Manual update in LibreELEC settings will not list LibreELEC 12.0 releases on switched devices as there are no matching arm images (only aarch64). You can [manually update](https://wiki.libreelec.tv/support/update) by placing a LibreELEC 12 release file (.tar or .img.gz) in /storage/.update and rebooting.

If using Widevine to access DRM protected streaming services like Prime Video, Netflix, etc. the Widevine CDN folder in /storage/.kodi/cdm on switched devices must be deleted before first use as the existing arm libraries do not work on aarch64 systems. On first use after deletion aarch64 Widevine libraries will be downloaded and installed.

If using Docker containers via LinuxServer.io add-ons the arch change should be handled automatically. If using containers installed from the console: arm containers must be removed before updating as they will not run on aarch64. After updating aarch64 (arm64) compatible versions of your containers can be (re)installed.

Updating from LibreELEC 9.x and older requires a clean install due to the Python 3 changes introduced since LibreELEC 10.x (Kodi v19).

## CHANGES SINCE 12.0.0

- Kodi: updated to 21.1
- linux: update to 6.6.46
- [several small updates and fixes](https://github.com/LibreELEC/LibreELEC.tv/compare/12.0.0...12.0.1)

## RPi gpiozero

- [RPi gpiozero is broken](https://github.com/gpiozero/gpiozero/issues/1166) (due kernel version) and requires a workaround for now at LE 12.0.1  
If you want to use it change line 66 of `/storage/.kodi/addons/virtual.rpi-tools/lib/gpiozero/pins/lgpio.py`  

from   
`chip = 4 if (self._get_revision() & 0xff0) >> 4 == 0x17 else 0`  

to  
`chip = 0`

## KNOWN PROBLEMS

- Allwinner OrangePi Win does not work properly, currently unfixed.
- Allwinner and Rockchip devices are not widely tested. If there are problems please report them.
- Rockchip RK3328 (Rock64 ...) devices are currently are not working.

## RASPBERRY PI

- 50/60fps H264 HW decoding may need `force_turbo=1` or `core_freq_min=500` in config.txt to avoid AV-sync-issues/skipping

## GENERIC (x86_64)

The Generic image uses GBM/V4L2 graphics stack and supports HDR/HDR10/HLG with recent AMD and Intel GPUs. The Generic-Legacy image runs X11 graphics stack and does not support HDR. Use Generic-Legacy if:

- You need support for nVidia GPUs
- You need support for the Chrome Browser add-on
- You see graphical glitches on older hardware, e.g. NUC 6th Gen

Intel and AMD hardware can switch between Generic/Generic-Legacy versions. Note that Generic (GBM) uses OpenGLES while Generic-Legacy (X11) uses OpenGL so visualiser and screensaver add-ons need to be removed and reinstalled when switching. You also need to clear the package cache in /storage/.kodi/addons/packages else reinstalling reuses the (wrong) cached package instead of downloading from the LibreELEC repo.

NB: nVidia made progress in support for modern graphics standards and recent cards (with recent drivers) can use mesa. However the mesa (GBM) drivers depend on Wayland which lacks automatic refresh-rate switching for a good Kodi experience and Kodi supports VDPAU not NVDEC. In short: there is still no clear technical path for modern nVidia cards to use the Generic (GBM) image, only Generic-Legacy (X11) and we continue to recommend users do not invest in nVidia GPUs.

## AMLOGIC

The AMLGX image allows older Amlogic hardware to run the latest Kodi version and add-ons but it is not as feature-complete or stable as older vendor-kernel releases. It is not perfect but quite usable with typical 1080p-oriented media collections:

- Supports Amlogic S905, S905D/X, and S912 hardware
- H264 1080p playback and seeking work well
- HEVC and VP9 1080p/4K playback work well but seeking is 50/50
- HDR works on S905X/D and S912 devices
- Multi-Channel PCM and Pass-Through audio works on HDMI up to 7.1 channels
- Software-only decoding on S905X2/D2/Y2, S905X3, S922X,and  A311D devices

To set expectations the 'No' list includes:

- No support for updates from older LibreELEC and CE releases (clean install is mandatory)
- No support for internal eMMC install on box hardware except WeTek Hub/Play2
- No support for SSV6501 and S908CS WiFi chips
- No drivers for in-box DVB tuners
- No hardware deinterlacing
- No HDR to SDR tonemapping

The AMLGX image has a different boot and SD card preparation process so [PLEASE READ THIS WIKI ARTICLE](https://wiki.libreelec.tv/hardware/amlogic) for more info on differences between AMLGX and older LibreELEC (and CE) releases.

## BACKUPS

Kodi supports upgrades not downgrades. We recommend creating a backup BEFORE upgrading else rolling back to the previous release can be complicated.

## SUPPORT

Project staff are available in the [forum](https://forum.libreelec.tv) to answer questions and provide advice. If you have a problem, technical issues are best accompanied by system and Kodi debug logs - help us to help you.

Enjoy! :)

[** Click here to go to the download page **](https://libreelec.tv/downloads/)


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


## SHA256

Append `?mirrorlist` to download links to see the file SHA256 hash, e.g. `https://releases.libreelec.tv/LibreELEC-RPi4.arm-12.0.1.img.gz?mirrorlist`.
