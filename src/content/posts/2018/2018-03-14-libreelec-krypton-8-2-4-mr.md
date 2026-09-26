---
layout: post
title: "LibreELEC (Krypton) 8.2.4 MR"
image: "img/posts/2018/release_824.png"
---

Team LibreELEC celebrates its second birthday (and international Pi-Day) with the release of LibreELEC (Krypton) v8.2.4 which brings minor bug-fixes and new firmware to support the [Raspberry Pi 3 Model B+](https://www.raspberrypi.org/blog/raspberry-pi-3-model-bplus-sale-now-35/) hardware announced this morning. Highlights of the new Pi hardware include:

- A **1.4GHz** 64-bit quad-core ARM Cortex-A53 CPU
- Dual-band **802.11ac** wireless LAN and Bluetooth 4.2
- **Faster Ethernet** (Gigabit Ethernet over USB 2.0)
- Power-over-Ethernet support (with separate PoE HAT)
- Improved PXE network and USB mass-storage booting
- Improved thermal management

Improvements to WiFi stability and performance on the 3B+ are noticeable. In private testing over the last two months we have been able to stream typical HD media over a 5GHz network at 105Mb/sec without the buffering and dropouts seen with the previous (2.4GHz only) model, and even 2.4GHz speeds reached 50Mb/sec where the 3B struggled to reach 35Mb/sec. Ethernet is still the best option for playing larger media files and the leap to gigabit Ethernet makes a positive impact on playback start times, even with throughput capped at 330Mb/sec by the internal USB 2.0 bus. The 1.4GHz CPU boosts 1080p HEVC decoding and general Kodi GUI performance, while thermal design improvements reduced our normal operating temperature despite speed increases and sdram overclock, although a small passive heatsink or case like [the Kodi flirc case](https://thepihut.com/products/kodi-edition-raspberry-pi-case?variant=20748229700) (which incorporates one) is still a good investment.

Our verdict: The 3B+ is not the fastest Single Board Computer (SBC) device available but raw speed has never been the main selling point of the Raspberry Pi, and Linux/Kodi support remains superlative and the key differentiator against other SBC's that look attractive on paper. Overall the Raspberry Pi 3B+ provides a positive performance boost for Kodi, and we are confident the Model 3B+ will replace the outgoing 3B as the #1 popular SBC to run LibreELEC on.

https://www.youtube.com/watch?v=i62xdD4QKtA

**MEDIACENTRE & RETROGAMING KITS**

Our [Shop page](https://libreelec.tv/shop/) has been updated with links to [Kodi mediacentre](https://thepihut.com/collections/raspberry-pi-kits-and-bundles/products/raspberry-pi-3b-plus-media-centre-kit) and [Kodi retrogaming](https://thepihut.com/collections/raspberry-pi-kits-and-bundles/products/raspberry-pi-3b-plus-retro-gaming-bundle) kits from The Pi Hut that are shipping with the new 3B+ hardware. Purchasing kits or [even a plain-board upgrade](https://thepihut.com/collections/raspberry-pi/products/raspberry-pi-3-model-b-plus) or [starter kit](https://thepihut.com/collections/raspberry-pi-kits-and-bundles/Raspberry-Pi-3B+) via the affiliate links on the shop page is an awesome way to support the education mission of the Pi Foundation (funded through board sales) and LibreELEC as we receive a small referral commission that goes towards our current funding goals.

**ANYTHING ELSE?**

The 8.2.4 release is 95% about supporting the new Raspberry Pi 3B+ but Pi firmware updates benefit all Pi users and a fix in the LibreELEC settings add-on solves a size calculation issue when creating backups on external storage. We also bump Samba to solve [another major bug-scare](https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2018-1057) although it is unlikely LibreELEC users are running a problem configuration. As with other recent updates; changes are limited to keep the focus on LibreELEC 9.0 and to avoid breaking things. [Full details of the changes](http://github.com/LibreELEC/LibreELEC.tv/compare/8.2.3...8.2.4) are on GitHub.

Happy Birth/Pi-Day!  :)


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

