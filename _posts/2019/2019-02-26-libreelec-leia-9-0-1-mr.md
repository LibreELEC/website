---
layout: post
title: "LibreELEC (Leia) 9.0.1 MR"
image: "img/posts/2019/catcatcat.jpg"
---

**LibreELEC 9.0.1 (Leia)** has arrived based upon Kodi v18.1, the 9.0.1 release contains many changes and refinements to user experience and a complete overhaul of the underlying OS core to improve stability and extend hardware support. Kodi v18 also brings new features like Kodi Retroplayer and DRM support that (equipped with an appropriate add-on) allows Kodi to unofficially stream content from services like Netflix and Amazon.

**Changes since LibreELEC 9.0.0:**

- updated Kodi to 18.1
- updated Kernel to 4.19.23
- fixed TBS 5520SE tuning
- fixed Zotac remotes
- fixed pvr.hts (Tvheadend) timeshift (partly)

**Settings Add-on:**

- Changeable SSH passwords!
- Default firewall (iptables) with simple configurations for Home/Public networks
- Updates are moved to their own menu, other options are cleaned up a little
- Safe Mode boot when Kodi experiences startup problems

- ![]({{site.baseurl}}/img/posts/2019/info2-800x600.jpg)
    
- ![]({{site.baseurl}}/img/posts/2019/safemode-800x600.jpg)
    

Changeable SSH passwords and a default firewall configuration have been added to combat the increasing number of HTPC installs that can be found on the public internet. The increase is partly due to simple maths; our userbase has grown so the number of users inappropriately exposing their HTPC to the internet has also grown. The static password for libreelec is present on most/all password dictionary lists so it's important we start encouraging users to change it (the first-run wizard will prompt when SSH is enabled).  
  
More people are using VPN services for privacy without realising this exposes SSH/SMB/Web services. To combat this problem we have added simple firewall configurations for Home/Public networks; the Home configuration blocks inbound connections from non-private networks, e.g. traffic from the Internet to the public IP address used with the VPN connection.  
  
As the Kodi piracy scene continues to decline we have seen an increase in users with outdated add-ons that cause problems during upgrades so "Safe Mode" counts Kodi startup crashes. After five startup failures it intervenes with a default (clean) configuration and prominent warning so users know there is a problem - but still have a working GUI to troubleshoot from.

**Retroplayer:**

Kodi v18 brings initial support for retro gaming and the ability to play hundreds of retro games directly from within Kodi. We provide a large number of emulator cores from our add-on repo, but no games (bring your own) although there are a couple of open source test game add-ons (2048 etc.) in our repo. In this first iteration of Kodi retro gaming support the user interface can be a little confusing and we still need to write-up some HOWTO guides for the wiki. Kodi developers are working on a game database (for Kodi v19) which will make the process of managing and using game ROMs easier in the future.

![]({{site.baseurl}}/img/posts/2019/game-800x600.png)

**DVB Drivers:**

We now offer a larger range of DVB drivers (depending on your platform) to choose from. The "DVB drivers from the latest kernel" option also includes the majority of Hauppage drivers which have been recently upstreamed into the kernel, which is great to see!

- ![]({{site.baseurl}}/img/posts/2019/driverselect.jpg)
    
- ![]({{site.baseurl}}/img/posts/2019/driverselect-800x495.png)
    

**Rockchip:**

Despite the 8.95.1 release number our Rockchip releases remain in an Alpha state with limited support. The Kodi version is updated but there are no significant video/audio improvements to the Rockchip 4.4 kernel codebase - and none planned. Our work on Rockchip support has refocussed onto the Linux 4.20 kernel to use the modern kernel frameworks needed for the next-generation Kodi video pipeline. This work is progressing nicely, but it means the 4.4 codebase "is what it is" until a future kernel bump.

**New Devices:**

**Amlogic**

- Khadas VIM(1) - requires a clean install if using current community images
- Libre Computer LePotato

**Rockchip**

- 96rocks ROCK960
- ASUS Tinker Board
- Firefly ROC-RK3328-CC
- Khadas Edge
- PINE64 ROCK64
- PINE64 RockPro64
- Popcorn Hour RockBox
- Popcorn Hour Transformer
- Radxa ROCK Pi 4
- Rockchip Sapphire Board
- Mqmaker MiQi

If you experience problems, please open an thread at our [forum](https://forum.libreelec.tv). You can also open an ticket at our [issue tracker](https://forum.libreelec.tv/core/ticketsystem/).

**Upgrading**

On first boot the Kodi media database will be upgraded. Depending on your hardware and media collection size this could take several minutes. Please be patient.

**Downloads**

[**Click here to go to the download page.**](https://libreelec.tv/downloads_new/)
