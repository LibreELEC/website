---
layout: post
title: "LibreELEC (Krypton) 8.2.3 MR"
image: "img/posts/2018/release_823.png"
---

LibreELEC 8.2.3 is released to change our embedded pastebin provider from sprunge.us (RIP) to ix.io (working) so users can continue to submit logs to the forums through a URL without copy/pasting text or direct uploading log files. This is our preferred way to receive and read your log files so if you are not familiar with using the paste function [please read this wiki article](https://libreelec.wiki/how_to/provide_logfile#tab__via_ssh) to find out how. The 8.2.3 release also solves an issue with continuity errors on USB DVB adaptors that has been troubling some 8.2 users for some time; kudos to user [@jahutchi](https://forum.libreelec.tv/thread/4235-dvb-issue-since-le-switched-to-kernel-4-9-x/?postID=75965#post75965) for tracking down the problem kernel commit. We also address a long-running [crashing issue with Intel BayTrail hardware](https://bugzilla.kernel.org/show_bug.cgi?id=109051) that needed some users to force max\_cstate in kernel boot parameters, and for bonus credit users with an Intel NUC equipped with an LED can fiddle with the colours, as we backported the LED driver from our master branch.

[See detailed changes on GitHub](https://github.com/LibreELEC/LibreELEC.tv/compare/8.2.2...8.2.3).

**SPECTRE/MELTDOWN**

The Spectre and Meltdown security vulnerabilities have generated a lot of press in recent weeks. Raspberry Pi hardware is not affected. Amlogic hardware does not appear to be affected. Devices that run our Generic x86-64 image are considered vulnerable. However, there are no plans to address either issue in the current 8.2 release series. Why? .. because patches for these issues are still evolving and lots of testing will be required and that effort needs to focus on our active development branch. Both issues are also moot for LibreELEC because current exploits either require a browser (which we don't have) or local console access; in which case you are already the system root user and there's really no need for those exploits.

**WHAT'S NEXT?**

Having previously claimed 8.2.1 then 8.2.2 would be the final 8.2 release we'll stop making predictions and just see what happens. Kodi Leia is in a fluid state at the moment so the Alpha release milestone has moved back to April. There are no Kodi Krypton changes on the horizon (developers all switched to Leia months ago) but if we accumulate further nip/tuck fixes for reported issues or something exciting comes along we will consider another 8.2 maintenance release to fill the void.

Enjoy :)

{% include paypal.html %}

[or donate by purchasing a LibreELEC teeshirt or hoodie](https://libreelec.tv/shop/)
