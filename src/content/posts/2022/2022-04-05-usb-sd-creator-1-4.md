---
layout: post
title: "LibreELEC USB-SD Creator 1.4"
description: "the story why QT is awesome"
image: img/posts/icon-usb-sd-creator.jpg
---

A new version of the LibreELEC USB-SD Creator is available at the download section. Currently, we can just offer a Windows version. The download works again and finally all images and devices are fully supported.

## Why did it break?

Some of you already recognized that the LibreELEC USB-SD Creator wasn’t working since we updated our download server and mirroring system. We switched completely to https and replaced our mirroring system. So far, everything worked like a charm, besides the LibreELEC USB-SD Creator. The former used libraries (QT 5.6.1) are now nearly 6 years old and completely outdated. That lead to several problems at newer OS updates, and it doesn’t understand recent security standards.

## They said QT is easy

Major updating is not that easy if nobody has knowledge about the used libraries. We were aware that the tool needed updates, but nobody of the team had the skills for it. To make things worse, we are using QT static builds (result is a single binary) that are really painful to create. Luckily team Kodi member phunkyfish and kambala helped us to do the heavy lifting, additionally we borrowed code from the Unraid fork of the USB-SD Creator.

## Why no OSX and Linux

The Linux and Mac Versions are working, but we are facing different problems.

### Mac OSX

We are still not able to sign the application for Mac due to an unknown error. If anyone has experience at this topic, pls head over to the [Github project](https://github.com/LibreELEC/usb-sd-creator/) and try if you get it working.

### Linux

Since QT stopped including XCB we need to pull these libraries from the OS. So unfortunately the binary is not static anymore. We found no solution yet. If anyone has experience at this topic, pls head over to the [Github project](https://github.com/LibreELEC/usb-sd-creator/).

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

LibreELEC.USB-SD.Creator.Win32.exe `3730ee946845d59d85926d7f55b3149b3ba3fc8db8d2bec319f3c3c635ba9775` [(Virus Total report)](https://www.virustotal.com/gui/file/3730ee946845d59d85926d7f55b3149b3ba3fc8db8d2bec319f3c3c635ba9775)
