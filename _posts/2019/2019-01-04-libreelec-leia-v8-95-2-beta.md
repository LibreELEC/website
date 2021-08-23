---
layout: post
title: "LibreELEC (Leia) v8.95.2 BETA"
image: "img/posts/2019/aqewslopikdhzbgv.jpg"
---

**LibreELEC 9.0 (Leia) Beta 2** has finally arrived after a long gestation period. Based upon Kodi v18 RC4, the 9.0 Beta 2 release contains many changes and refinements to user experience and a complete overhaul of the underlying OS core to improve stability and extend hardware support. Kodi v18 also brings new features like Kodi Retroplayer and DRM support that (equipped with an appropriate add-on) allows Kodi to unofficially stream content from services like Netflix and Amazon.

Compared to 9.0 Beta 1, major changes are:

- Updated to Kodi 18 RC4
- Updated to Linux Kernel 4.19.12
- a lot more updates and fixes, have a look at the [detailed changelog](https://github.com/LibreELEC/LibreELEC.tv/compare/8.95.001...8.95.002)

Compared to 8.2, major changes are:

**Settings Add-on:**

- Changeable SSH passwords!
- Default firewall (iptables) with simple configurations for Home/Public networks
- Updates are moved to their own menu, other options are cleaned up a little
- Safe Mode boot when Kodi experiences startup problems

Changeable SSH passwords and a default firewall configuration have been added to combat the increasing number of HTPC installs that can be found on the public internet. The increase is partly due to simple maths; our userbase has grown so the number of users inappropriately exposing their HTPC to the internet has also grown. The static password for libreelec is present on most/all password dictionary lists so it's important we start encouraging users to change it (the first-run wizard will prompt when SSH is enabled).

More people are using VPN services for privacy without realising this exposes SSH/SMB/Web services. To combat this problem we have added simple firewall configurations for Home/Public networks; the Home configuration blocks inbound connections from non-private networks, e.g. traffic from the Internet to the public IP address used with the VPN connection.

As the Kodi piracy scene continues to decline we have seen an increase in users with outdated add-ons that cause problems during upgrades so "Safe Mode" counts Kodi startup crashes. After five startup failures it intervenes with a default (clean) configuration and prominent warning so users know there is a problem - but still have a working GUI to troubleshoot from.

![]({{site.baseurl}}/img/posts/2019/about-400x300.jpg) ![]({{site.baseurl}}/img/posts/2019/safemode-400x300.jpg)

**Retroplayer:**

Kodi v18 brings initial support for retro gaming and the ability to play hundreds of retro games directly from within Kodi. We provide a large number of emulator cores from our add-on repo, but no games (bring your own) although there are a couple of open source test game add-ons (2048 etc.) in our repo. In this first iteration of Kodi retro gaming support the user interface can be a little confusing and we still need to write-up some HOWTO guides for the wiki. Kodi developers are working on a game database (for Kodi v19) which will make the process of managing and using game ROMs easier in the future.

![]({{site.baseurl}}/img/posts/2019/game-400x300.png)

**DVB Drivers:**

We now offer a larger range of DVB drivers (depending on your platform) to choose from. The "DVB drivers from the latest kernel" option also includes the majority of Hauppage drivers which have been recently upstreamed into the kernel, which is great to see!

![]({{site.baseurl}}/img/posts/2019/driverselect-400x282.jpg) ![]({{site.baseurl}}/img/posts/2019/driverselect-400x248.png)

**Rockchip:**

Despite the 8.95.1 release number our Rockchip releases remain in an Alpha state with limited support. The Kodi version is updated but there are no significant video/audio improvements to the Rockchip 4.4 kernel codebase - and none planned. Our work on Rockchip support has refocussed onto the Linux 4.20 kernel to use the modern kernel frameworks needed for the next-generation Kodi video pipeline. This work is progressing nicely, but it means the 4.4 codebase "is what it is" until a future kernel bump.

**New Devices:**

Amlogic

- Khadas VIM(1) - requires a clean install if using current community images
- Libre Computer Le Potato

Rockchip

- 96rocks ROCK960
- ASUS Tinker Board
- Firefly ROC-RK3328-CC
- Khadas Edge
- PINE64 ROCK64
- PINE64 RockPro64
- Popcorn Hour RockBox
- Popcorn Hour Transformer
- Rockchip Sapphire Board
- Mqmaker MiQi

If you experience problems, please open an thread at our [forum](https://forum.libreelec.tv). You can also open an ticket at our [issue tracker](https://forum.libreelec.tv/core/ticketsystem/).

**Downloads:**

**RPi 2/3** [LibreELEC-RPi2.arm-8.95.002.img.gz](http://releases.libreelec.tv/LibreELEC-RPi2.arm-8.95.002.img.gz) ([info](http://releases.libreelec.tv/LibreELEC-RPi2.arm-8.95.002.img.gz?mirrorlist))

**RPi 0/1** [LibreELEC-RPi.arm-8.95.002.img.gz](http://releases.libreelec.tv/LibreELEC-RPi.arm-8.95.002.img.gz) ([info](http://releases.libreelec.tv/LibreELEC-RPi.arm-8.95.002.img.gz?mirrorlist))

**Generic** [LibreELEC-Generic.x86\_64-8.95.002.img.gz](http://releases.libreelec.tv/LibreELEC-Generic.x86_64-8.95.002.img.gz) ([info](http://releases.libreelec.tv/LibreELEC-Generic.x86_64-8.95.002.img.gz?mirrorlist))

**Odroid\_C2** [LibreELEC-Odroid\_C2.arm-8.95.002.img.gz](http://releases.libreelec.tv/LibreELEC-Odroid_C2.arm-8.95.002.img.gz) ([info](http://releases.libreelec.tv/LibreELEC-Odroid_C2.arm-8.95.002.img.gz?mirrorlist))

**KVIM** [LibreELEC-KVIM.arm-8.95.002.img.gz](http://releases.libreelec.tv/LibreELEC-KVIM.arm-8.95.002.img.gz) ([info](http://releases.libreelec.tv/LibreELEC-KVIM.arm-8.95.002.img.gz?mirrorlist))

**LePotato** [LibreELEC-LePotato.arm-8.95.002.img.gz](http://releases.libreelec.tv/LibreELEC-LePotato.arm-8.95.002.img.gz) ([info](http://releases.libreelec.tv/LibreELEC-LePotato.arm-8.95.002.img.gz?mirrorlist))

**Slice** [LibreELEC-Slice.arm-8.95.002.img.gz](http://releases.libreelec.tv/LibreELEC-Slice.arm-8.95.002.img.gz) ([info](http://releases.libreelec.tv/LibreELEC-Slice.arm-8.95.002.img.gz?mirrorlist))

**Slice3** [LibreELEC-Slice3.arm-8.95.002.img.gz](http://releases.libreelec.tv/LibreELEC-Slice3.arm-8.95.002.img.gz) ([info](http://releases.libreelec.tv/LibreELEC-Slice3.arm-8.95.002.img.gz?mirrorlist))

**WeTek\_Core** [LibreELEC-WeTek\_Core.arm-8.95.002.img.gz](http://releases.libreelec.tv/LibreELEC-WeTek_Core.arm-8.95.002.img.gz) ([info](http://releases.libreelec.tv/LibreELEC-WeTek_Core.arm-8.95.002.img.gz?mirrorlist))

**WeTek\_Hub** [LibreELEC-WeTek\_Hub.arm-8.95.002.img.gz](http://releases.libreelec.tv/LibreELEC-WeTek_Hub.arm-8.95.002.img.gz) ([info](http://releases.libreelec.tv/LibreELEC-WeTek_Hub.arm-8.95.002.img.gz?mirrorlist))

**Warning: Update at WP1 is broken if you use img.gz - please use .tar to update:**

**WeTek\_Play** [LibreELEC-WeTek\_Play.arm-8.95.002.tar](http://releases.libreelec.tv/LibreELEC-WeTek_Play.arm-8.95.002.tar) ([info](http://releases.libreelec.tv/LibreELEC-WeTek_Play.arm-8.95.002.tar?mirrorlist))

**WeTek\_Play** [LibreELEC-WeTek\_Play.arm-8.95.002.img.gz](http://releases.libreelec.tv/LibreELEC-WeTek_Play.arm-8.95.002.img.gz) ([info](http://releases.libreelec.tv/LibreELEC-WeTek_Play.arm-8.95.002.img.gz?mirrorlist))

**WeTek\_Play\_2** [LibreELEC-WeTek\_Play\_2.arm-8.95.002.img.gz](http://releases.libreelec.tv/LibreELEC-WeTek_Play_2.arm-8.95.002.img.gz) ([info](http://releases.libreelec.tv/LibreELEC-WeTek_Play_2.arm-8.95.002.img.gz?mirrorlist))

**\*\*\* IMPORTANT \*\*\***

**Rockchip images are not available via the USB/SD Creator App (we're working on a fix)**

**Please download them manually!**

**Rockchip RK3328**

**Firefly ROC-RK3328-CC** [LibreELEC-RK3328.arm-8.90.011-roc-cc.img.gz](http://releases.libreelec.tv/LibreELEC-RK3328.arm-8.90.011-roc-cc.img.gz) ([info](http://releases.libreelec.tv/LibreELEC-RK3328.arm-8.90.011-roc-cc.img.gz?mirrorlist))

**Generic Rockchip Box** [LibreELEC-RK3328.arm-8.90.011-box.img.gz](http://releases.libreelec.tv/LibreELEC-RK3328.arm-8.90.011-box.img.gz) ([info](http://releases.libreelec.tv/LibreELEC-RK3328.arm-8.90.011-box.img.gz?mirrorlist))

**PINE64 ROCK64 / Popcorn Hour Transformer** [LibreELEC-RK3328.arm-8.90.011-rock64.img.gz](http://releases.libreelec.tv/LibreELEC-RK3328.arm-8.90.011-rock64.img.gz) ([info](http://releases.libreelec.tv/LibreELEC-RK3328.arm-8.90.011-rock64.img.gz?mirrorlist))

**Popcorn Hour RockBox** [LibreELEC-RK3328.arm-8.90.011-rockbox.img.gz](http://releases.libreelec.tv/LibreELEC-RK3328.arm-8.90.011-rockbox.img.gz) ([info](http://releases.libreelec.tv/LibreELEC-RK3328.arm-8.90.011-rockbox.img.gz?mirrorlist))

**MVR9** [LibreELEC-RK3328.arm-8.90.011-box-trn9.img.gz](http://releases.libreelec.tv/LibreELEC-RK3328.arm-8.90.011-box-trn9.img.gz) ([info](http://releases.libreelec.tv/LibreELEC-RK3328.arm-8.90.011-box-trn9.img.gz?mirrorlist))

**Z28** [LibreELEC-RK3328.arm-8.90.011-box-z28.img.gz](http://releases.libreelec.tv/LibreELEC-RK3328.arm-8.90.011-box-z28.img.gz) ([info](http://releases.libreelec.tv/LibreELEC-RK3328.arm-8.90.011-box-z28.img.gz?mirrorlist))

**Rockchip RK3399**

**96rocks ROCK960** [LibreELEC-RK3399.arm-8.90.011-rock960.img.gz](http://releases.libreelec.tv/LibreELEC-RK3399.arm-8.90.011-rock960.img.gz) ([info](http://releases.libreelec.tv/LibreELEC-RK3399.arm-8.90.011-rock960.img.gz?mirrorlist))

**PINE64 RockPro64** [LibreELEC-RK3399.arm-8.90.011-rockpro64.img.gz](http://releases.libreelec.tv/LibreELEC-RK3399.arm-8.90.011-rockpro64.img.gz) ([info](http://releases.libreelec.tv/LibreELEC-RK3399.arm-8.90.011-rockpro64.img.gz?mirrorlist))

**Rockchip Sapphire Board** [LibreELEC-RK3399.arm-8.90.011-sapphire.img.gz](http://releases.libreelec.tv/LibreELEC-RK3399.arm-8.90.011-sapphire.img.gz) ([info](http://releases.libreelec.tv/LibreELEC-RK3399.arm-8.90.011-sapphire.img.gz?mirrorlist))

**Rockchip RK3288**

**ASUS Tinker Board** [LibreELEC-TinkerBoard.arm-8.90.011-rk3288.img.gz](http://releases.libreelec.tv/LibreELEC-TinkerBoard.arm-8.90.011-rk3288.img.gz) ([info](http://releases.libreelec.tv/LibreELEC-TinkerBoard.arm-8.90.011-rk3288.img.gz?mirrorlist))

**mqmaker MiQi** [LibreELEC-MiQi.arm-8.90.011-rk3288.img.gz](http://releases.libreelec.tv/LibreELEC-MiQi.arm-8.90.011-rk3288.img.gz) ([info](http://releases.libreelec.tv/LibreELEC-MiQi.arm-8.90.011-rk3288.img.gz?mirrorlist))

{% include paypal.html %}
