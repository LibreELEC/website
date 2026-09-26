---
layout: post
title: "Development Update"
image: "img/posts/2018/caaat.jpg"
---

Team LibreELEC has been rather quiet on development and priorities for a while. Silent does not mean inactive though, so here's an update on what's been happening and what's coming soon:

**GBM/V4L2 and DRMPRIME**

Our work on Kodi's next-generation Linux video rendering and DRMPRIME decoding pipeline continues to make solid progress and there has been some great multi-vendor and multi-project teamwork. Initial support for the DRMPRIME decoder is part of Kodi v18 (existing in parallel with older proprietary code-paths) and we now have functional "proof of concept" LibreELEC images for the following platforms:

- Allwinner (A20, A33, H3, H5) on Linux 4.18+
- AMD (radeon) using VAAPI on Linux 4.18+
- Amlogic (GXBB/GXL) on Linux 4.18+
- Intel (i915) using VAAPI on Linux 4.18+
- NXP (iMX6) using etnaviv on Linux 4.18+
- Qualcomm (DragonBoard 410c) using freedreno on Linux 4.18+
- Raspberry Pi (VC4) on Linux 4.18+
- Rockchip (3288, 3328, 3399) using rkmpp on Rockchip Linux 4.4

Kodi is one of the first major-name apps to adopt GBM/V4L2 as a framework covering multiple GPU/SoC types so this work is elevating our project profile within the Linux community. Progress is good, but also slow as we are constantly breaking new ground, and each new improvement to Kodi and FFmpeg needs to be tested over an increasing number of GPU/SoC hardware targets which have their own individual quirks. Each platform is at a different stage of evolution, but the overall trend is that we are starting to shift focus away from code creation to code stabilisation and fixing.

There are two objectives for the next-generation pipeline; maintenance and performance. Removing older and proprietary code-paths in Kodi simplifies code and makes it easier to maintain and introduce new features that work consistently over devices that share the common GBM/DRMPRIME code path. Moving to modern code frameworks like V4L2 that use zero-copy techniques allows better performance on all hardware, but this will be most beneficial to the increasing number of low-power ARM devices that need to more efficiently process ever-increasing amounts of video data.

LibreELEC 10.0 will remove support for Xorg/X11 windowing on x86\_64 hardware and move the entire distro to a common DRM/GBM video framework. This change will also impact nVidia users as Kodi v19 removes support for VDPAU (it doesn't support many new graphics features and is no longer developed) and there are currently no signs of nVidia supporting GBM like all other GPU/SoC vendors. Between now and LibreELEC 10.0 the team will be working to achieve GBM/DRMPRIME feature parity so nobody notices the switch :)

**ROCKCHIP**

Forward progress on Rockchip stalled in recent months because we had to stop and adapt a large chunk of the work completed on the Rockchip Linux 4.4 kernel codebase so it could start the parallel and lengthy process of being upstreamed into the mainline kernel. This burned lots of time, but work to get the Rockchip 4.4 kernel into a reasonable state (not perfect, but usable) has now resumed. Recent commits have added initial support for HDR on RK3328/3399 devices so it's no surprise that active-install stats have started to show an increase in the number of users running test images. RK3399 support still needs work and we also need to start thinking about the install/first-run experience. It is likely that Alpha releases for Rockchip hardware run for some time, with full release targeting LibreELEC 9.2.

**ALLWINNER**

Video driver development essential for LibreELEC to support newer Allwinner SoC's is also starting to drop into place. Community developer Paul Cooper (codekipper) has started to nudge the sunxi i2s audio driver towards multi-channel audio support, and Paul Kocialkowski from the Bootlin team [working on player support for their current kickstarter project](https://bootlin.com/blog/allwinner-vpu-support-in-mainline-linux-status-update-week-23/) joined our Slack team to contribute to our V4L2 'group therapy' sessions and further the cause of the bootlin driver and Kodi support (see the Bootlin blog for demo videos).

To showcase their work on the DRM driver the bootlin team have shared an LE image. At the current time their codebase is a little behind our master branch and further behind current Kodi master branch. The majority of their code has been actively developed in collaboration with our developers working on other SoC platforms, but we need to adapt their concepts in a couple of areas so approaches remain unified over multiple SoC/GPU types. We are also waiting on mali GBM libraries to be released for the H6 chip, and we haven't done any serious work on distro packaging. Most SoCs have hardware support challenges when bumping to mainline kernels (device trees, drivers, etc.) and we expect Allwinner hardware to be no exception. So we are still some way from making firm plans. Overall platform support needs to progress further before we can start thinking about distro packaging and initial target devices.

**NXP (iMX6)**

Support for the proprietary iMX6 code-path used in LibreELEC 7.x/8.x releases was dropped from Kodi v18 due to a long-term lack of maintainers and it being completely broken for 6+ months due to other code changes. Our long-term plan is to switch iMX6 releases to the new Kodi pipeline and open source 'etnaviv' video driver. At the current time distro packaging is mostly complete and Kodi boots and runs but video rendering for GC2000 (i.MX6q and similar) devices has some limitations that mean we cannot achieve full frame rate when rendering a 1080p video while GC3000 devices (i.MX6qp and similar) render at full speed. We will most likely wait until LE10 before we releasing images for iMX6 devices again.

**AMLOGIC**

Maxime Jourdan (now working for Baylibre) has made great progress on a V4L2 video decoding driver and his initial patch-set has been submitted to the kernel for review. We now have functional images for GXBB (S905) and GXL (S905X/D/W) devices running a mainline 4.18+ kernel that hardware decode the 1080p video formats we need to support. At the current time deinterlaced media is handled in software which is okay (it works) but further development will be needed to support the hardware deinterlace IP capabilities. HDMI audio is working with 2.0 output and collaboration among developers working across Amlogic, Allwinner and Rockchip (which all use the same DesignWare audio IP) is starting to fill gaps in multi-channel support. The main block to public test releases is now the DRM (Direct Rendering Manager) display driver which provides HDMI support and the foundation for DRMPRIME in Kodi. Neil Armstrong from the Baylibre team has historically worked on the DRM driver pro-bono in his spare time, but with a busy work schedule progress has been slow. [LibreComputer](https://libre.computer/) who manufacture the popular "LePotato" board (aka, AML-S905X-CC) have agreed to fund further work under their support contract with Baylibre so Neil can schedule time and move the driver forwards. The short-term goal is HDMI 1.4 support (up to 4K/30) with a separate block of work for HDMI 2.0 following once more of the kernel framework for HDR and colourspace handling (ongoing work from Intel and AMD) is in-place. This is awesome and we'd like to publicly thank LibreComputer for their open-source commitment (Da hero's of the hour!).

Switching Amlogic GXBB/GXL hardware to use DRMPRIME on a mainline kernel was our original stretch "Plan A" for LibreELEC 9.0 but the timescales do not align. We also considered "Plan B" with a simple delay to Amlogic releases while others moved forwards, but in the end the only sensible option was "Plan Z" and we've dusted off the 3.14 kernel codebase for one final round. Our goal for LibreELEC 9.0 is simply to improve on LibreELEC 8.2 by absorbing some of the less objectionable bits from community releases while expanding official support to the LePotato and Khadas VIM(1) devices. At the same time we're not aiming for perfection, because it's a dead-end and deeply flawed codebase. There is a lot more to discuss on our mainline kernel plans, but we'll save that for a dedicated blog post after LibreELEC 9.0 has shipped.

**GENERIC AND RASPBERRY PI**

The team are currently working through changes to move Raspberry Pi images to Linux 4.18  (the Generic image has already bumped). Our original plan was Linux 4.14 everywhere due to it's LTS status and use with Raspbian which would benefit Pi support, but the latest generations of Intel and AMD hardware need something newer. It also became clear the Raspberry Pi Foundation and LibreELEC are mutually interdependent. We depend on Pi Foundation staff supporting and fixing issues in the latest kernels, and the Pi Foundation depends on LibreELEC needing (and proving) the latest kernels to justify supporting them. If we remained on Linux 4.14 we removed their justification and in the long-term both sides would become stuck on a 'safe' kernel. Generic and Raspberry Pi releases represent 85% of our active userbase so kernel choice is an important decision and it's taken a few rounds of passionate debate to reach agreement. Helped by a clear "don't worry folks, we have your backs!" commitment from the Pi Foundation staff, we finally reached consensus to keep moving our kernel baseline onwards and upwards.

**ALPHA, BETA and KODI**

LibreELEC 9.0 Alpha releases are now running and will continue for a while as our definition of Beta is "finished product with only minor bugs" so we need to have kernel bumps etc. complete before we can progress. In the past we've been in lock-step with the Kodi schedule and were able to go full-release within 24 hours of Kodi 17.0, but this time around the pre-Alpha stage of development has been chaotic and we're behind on where we'd normally expect to be in our release plan. It's likely that Kodi 18.0 will ship before we're done with Beta testing, but the team are working hard to move things forwards.

Thanks for reading! :)
