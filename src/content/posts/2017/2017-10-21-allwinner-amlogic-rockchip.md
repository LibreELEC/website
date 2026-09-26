---
layout: post
title: "Allwinner, Amlogic, Rockchip"
image: "img/posts/2017/github_branches.png"
---

GitHub watchers among you will have noticed new branches labelled Allwinner, Amlogic and Rockchip being added to our repo. Here's a high-level explanation of what's going on:

Extending Kodi to support new SoC/GPU devices requires new code interfaces. In the past each new silicon vendor required their own interface which multiplied Kodi complexity. It became clear this approach was not sustainable so Kodi's architects called a halt to new interfaces unless open and broadly supported standards were used. This has caused the 'Kodi on Linux' hardware scene to be static for some time.

On Android 'mediacodec' and 'audiotrack' evolved into stable API's that allow Kodi to support a consistent and open interface. If a SoC vendor using Android supports them well, Kodi runs well. Krypton enforced minimum API versions and dropped support for older hardware that required hacks to work. This disrupted a percentage of users with non-compliant devices, but ultimately resulted in a massive reduction in Android issue reports.

Atomic DRM/KMS (Direct Rendering Manager, not DRM encryption) and V4L2 (Video for Linux v2) are emerging Linux standards with a similar goal. Both are under active development and require features of current kernels, but most SoC/GPU vendors are now working towards V4L2 support. Some are motivated by Google pushing manufacturers of Android/ChromeOS products to upstream hardware support and reduce long-term technical debt in the Android ecosystem, but we benefit too.

LibreELEC developers have been experimenting with Atomic DRM/KMS support in Kodi and we have proof-of-concept images with software decoding for SoC/GPU hardware from Allwinner, AMD, Amlogic, Broadcom, iMX6, Intel, [Qualcomm](https://www.youtube.com/watch?v=gEEmCsgioII), Rockchip and Samsung. Hardware decoding depends on vendor-specific V4L2 drivers which are still evolving but we are collaborating with developers from BayLibre, FFMpeg, Kodi, Linaro, Linux kernel, MPV, Plex, Rockhip and the Sunxi Community. Current progress is 'two steps forwards, one step backwards' as advances in one code component often require rewrites elsewhere, but momentum is increasing.

The Allwinner, Amlogic and Rockchip branches have been added to improve visibility of our efforts and drive wider collaboration. Our long-term aim is generic support for new SoC families with a common codebase and the LibreELEC buildsystem supporting easier addition of new devices. It is important to state clearly that the team have made no decisions or commitments on SoC families and devices that can be (or will be) long-term supported and public testing is still a long way off, so please be patient.

Thanks for reading :)


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

