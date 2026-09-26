---
layout: post
title: "LibreELEC (Jarvis) v7.0 BETA1"
image: "img/posts/2016/calm_beta.jpeg"
---

LibreELEC are proud to announce delighted to hit our first major milestone, 7.0 b1 :**)**

The 7.0 beta 1 release is based around Jarvis 16.1-RC2. We're not expecting any serious issues as code commits since v6.90.005 have mostly focused on tweaks to the build-system not changes Kodi or the core OS. If there are no surprises we plan to release a final 7.0.0 build once Kodi team release 16.1 final.

From this point forward the only changes we allow in the 7.0 branch are commits that fix known user problems or major security issues. The LibreELEC team believe "lets bump everything possible and hope for the best" is _not_ the way to run things. LibreELEC staff prefer an "if it works, don't fix it" approach that requires less effort and respects all the testing that's been done in earlier releases.

Check the website for an update on LibreELEC 8.0 (Krypton) in the next few days.

**ADD-ONS**

Our addon repo is now in a happy state with Chromium, Hyperion, Docker, Tvheadend 4.0, Tvheadend 4.2 (with transcoding support) and the latest Kodi binary addons. NB: Chromium requires Xorg to run so it is only available on Generic builds, and Flash and Widevine support can be enabled in Chromium add-on settings. Transcoding in Tvheadend 4.2 is only available for Generic builds and requires hardware that can cope with transcoding. The Docker add-on is not available for WeTeK Play/Core which use an older (too old) Linux kernel.

During alpha testing we identified problems with the Kodi add-on database when you migrate from OpenELEC. The database ends up with two sets of entries for Kodi add-ons and since OpenELEC entries were added first and Kodi matches in numeric row order it becomes impossible to install LibreELEC add-ons. To resolve this we scan for and remove OpenELEC add-on entries from the local sqlite database the first time you boot into LibreELEC and the changes are effective after a reboot. If you have clean-installed LibreELEC there is nothing to worry about :)

**DOCKER**

Docker is worth a dedicated mention. Docker apps are (or should be if created properly) cross-platform and run anywhere. LibreELEC is a client-focussed distro which annoys a subset of users who'd rather we were laden with server capabilities. Docker fills this gap and there are _thousands_ of Docker apps. Docker should also be of interest to people using LibreELEC as a JeOS starting-point for non-mediacentre use cases. The wiki team will be scribbling some proper FAQ notes on Docker for you soon.

**\*\* IMPORTANT \*\***

LibreELEC operates a 24-hour 'canary' period between major release files being posted to the download page and the release being available via the auto-update system. This is for two reasons: First, if we find a problem we can pull the files before too many users grab the update. Second, it allows time for the release to propagate among our global network of download mirrors.

If you are running @milhouse or other community builds your system will not auto-update to the beta release. You must first perform a manual update to the beta release. Your system will then auto-update to any further beta releases (although none are currently planned) and/or the final v7.0.0 release.

**iMX6**

The download page also includes an iMX6 build based on a Linux 4.4 kernel and the exceptional work from @mk01 of the [Xbian](http://www.xbian.org) project who has created a huge catalogue of patches that @vpeter from the LibreELEC staff (aka 'misek' on SolidRun forums) has curated into a build that received strong positive feedback during private testing. The iMX6 image is currently released as a community build (e.g. not officially supported) pending user feedback and further development.

**DOWNLOADS**

[CLICK HERE FOR DOWNLOADS](https://libreelec.tv/downloads/)

{% include paypal.html %}
