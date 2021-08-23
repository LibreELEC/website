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

{% include paypal.html %}
