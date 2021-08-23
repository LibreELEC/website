---
layout: post
title: "LibreELEC (Jarvis) v7.0.1 MR"
image: "img/posts/2016/free_upgrade.png"
---

It's been three weeks since we published LibreELEC 7.0.0 so its time to roll-up fixes for minor issues in a maintenance release (MR). The list of changes is shown below. It's a short list as the 7.0.0 release is proving to be nice and stable.

- Fix (disable) power saving mode on RTL8812AU chips
- Fix minor issues with SSL certificate paths
- Fix for an EPG search issue (backported from Krypton)
- Fix machine-id uniqueness on hardware with slow-loading network drivers
- Fix boot splash aspect ratio on nVidia GPU systems
- Update Kodi RPi-backport patch to address minor Kodi video issues
- Update the LibreELEC add-on repo to use gzipped addons.xml
- Add support for the Netgear WNA1000M v2 to RTL8192CU
- Add support for bluez auto-pairing with DualShock3 controllers
- Add LibreELEC RSS feed to Kodi (RSS remains off by default)

**\*\*REMINDER\*\***

LibreELEC operates a 24-hour ‘canary’ period between maintenance release files being posted to the download page and the release being available via auto-update.

**ADD-ONS**

Tinc, Syncthing, Inadyn and Dispmanx (VNC for Raspberry Pi) have been added to the LibreELEC add-on repo courtesy of contributor Anton Voyl. LibreELEC team also added four bundle add-ons; System Tools, Multimedia Tools, DVB Tools, and Raspberry Pi Tools. These group commonly requested extra tools into four convenient packages making it easier for you to install, and easier for us to maintain.

Enjoy :)

{% include paypal.html %}
