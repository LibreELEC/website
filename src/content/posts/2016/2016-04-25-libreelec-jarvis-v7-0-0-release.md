---
layout: post
title: "LibreELEC (Jarvis) v7.0.0 RELEASE"
image: "img/posts/2016/highfive.png"
---

It's taken six weeks crammed with activity to reach this point. The LibreELEC collective has grown to approx. 45 people (someone needs to start a who's who guide) and there's generally been some rather cool things happening around us. Happy times indeed.

The v7.0.0 build contains Kodi Jarvis 16.1 (final) and a fix for some Verisign SSL certificate changes that impacted Pandora add-on users. It also addresses a bluez crash, a firmware update for Intel Skylake users, a fix for an Amlogic CEC issue on WeTek Play/Core. Most importantly it also contains our new logo branding. The website, forums, wiki, and social sites on Facebook and Twitter will be updated to showcase the same change in the next 48 hours.

This also marks the point when we deep-freeze the libreelec-7.0 branch. From this milestone forwards the only commits allowed will be bug and security fixes or addon maintenance. This approach ensures our nice stable release will remain a nice stable release. It also creates a stationary target for a growing number of downstream projects who use LibreELEC as the JeOS platform for their own releases. There will be a news post to highlight some of these collaborations in the near future.

In the past few days the Add-on repo has seen updates to Docker, Chromium, Tvheadend 4.2 and a few other Kodi add-ons. We also added a new "pi tools" bundle that contains RPi.GPIO, gpiozero and picamera.

**\*\*REMINDER\*\***

LibreELEC operates a 24-hour ‘canary’ period between major release files being posted to the download page and the release being available via the auto-update system.

That's all for now. Enjoy!

LibreELEC team :)

[DOWNLOADS](https://libreelec.tv/download/)


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

