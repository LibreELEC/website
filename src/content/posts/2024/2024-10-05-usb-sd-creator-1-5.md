---
layout: post
title: "LibreELEC USB-SD Creator v1.5"
description: "USB-SD Creator Update!"
image: img/posts/icon-usb-sd-creator.jpg
---

LibreELEC USB-SD Creator v1.5 is available!

This long-overdue update to LibreEEC USB-SD Creator adds Arabic and Korean language translations, switches Windows to x64, and reinstates support for macOS. The updated installer files are now live on mirrors and website download links are updated.

Huge thanks to @kambala-decapitator, @phunkyfish, @CvH, @lrusak, @chewitt for their efforts on bumping Qt, modernising code, reworking the build processes to use CMake and auto-build the app using GitHub actions. We now sign macOS bits correctly to prevent gatekeeper issues. Translation changes from Transifex are now synced automatically so language updates need less effort.

The creator app contains a version check. Older releases will prompt that a new version is available but will not auto-download or auto-update; newer app versions must installed manually. Older Linux 32/64 and Win32 versions will also show the update prompt but no udpates are available: Windows Win32 has been discontinued and Linux needs more work before we can reinstate support.

Download Links:

- [LibreELEC USB-SD Creator (macOS)](https://releases.libreelec.tv/LibreELEC.USB-SD.Creator.macOS.dmg) - [mirrors/sha256](https://releases.libreelec.tv/LibreELEC.USB-SD.Creator.x64.exe?mirrorlist)
- [LibreELEC USB-SD Creator (Windows x64)](https://releases.libreelec.tv/LibreELEC.USB-SD.Creator.x64.exe) - [mirrors/sha256](https://releases.libreelec.tv/LibreELEC.USB-SD.Creator.x64.exe?mirrorlist)

Enjoy! :)


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

