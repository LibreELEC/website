---
layout: post
title: "LibreELEC (Leia) v8.90.006 ALPHA"
image: "img/posts/2018/asdjghgvasjdgvasjvakhju.jpg"
---

The LibreELEC 9.0 Alpha cycle has continued and releases for Amlogic and Slice hardware have been added additionally to the test cycle. We official support now **Khadas VIM** (AML S905X) and the **LePotato** (AML S905X) too. Since the 8.90.006 release we support a wide range of Rockchip devices. There are no plans to release LibreELEC 9.0 images for NXP/iMX6 hardware as support was removed from Kodi some months ago. Support will be reinstated in a future LibreELEC, we wrote an dedicated article about the [future of LibreELEC](https://libreelec.tv/2018/09/development-update/).

Alpha releases are important to the team because we cannot test every scenario and sometimes sidestep issues without realising. The project needs a body of regular testers to go find the problems we miss. Testing will be particularly important for LibreELEC 9.0 as Kodi v18 includes substantial internal changes to VideoPlayer and introduces new retro-gaming capabilities.

**\*\* ROCKCHIP \*\***

We added several Rockchip devices at this release. Please consider it as alpha quality and not yet as perfect. All kind of flavors of HDR, 4k and audio are supported already. These images are rather new and it is likely that you hit an problem sooner or later. Please report them at our [issue tracker](https://forum.libreelec.tv/core/ticketsystem/) or at the dedicated [Rockchip forum](https://forum.libreelec.tv/board/43-rockchip/) that they could get fixed. Within the LE9 release cycle we are likely not able to finish the Rockchip devices to reach an perfect stable state - they stay in alpha status as long it is needed.

**TEST NOTES**

Our current focus is the OS core and we are more interested in hardware and driver bugs than Kodi problems. Please report the issues you find by starting a thread in the forums or use our [bug tracker](https://forum.libreelec.tv/core/ticketsystem/). Raspberry Pi users are reminded that **dtoverlay=lirc-rpi** has now been deprecated. Please read the [infrared remotes wiki page](https://wiki.libreelec.tv/infrared_remotes#important_changes_in_libreelec_90)  before updating.

**\*\* CAUTION \*\***

Alpha builds exist for hands-on testing not a hands-off experience. If you run Alpha builds you must be willing to report issues and engage the LibreELEC and Kodi developers in hunting bugs. If you have no idea what a debug log is or "wife acceptance factor" is critical, these builds are not for you. If you want to run Alpha builds please make a backup and store it somewhere off-box first. Your failure to make a backup is not our problem.

**Updates since v8.90.005 ALPHA:**

\- updated to Kodi 18 Beta 3 - Kernel updated to 4.18.11 for Generic, RPi and Slice - added Rockchip RK3328, RK3399 and RK3288 Devices - a lot more updates and fixes, have a look at the [full changelog](https://github.com/LibreELEC/LibreELEC.tv/compare/8.90.005...8.90.006)

**LibreELEC 9.0 Alpha 006 (Kodi 18 Beta 3)**

To update an existing installation from within the Kodi GUI select manual update in the LibreELEC settings add-on and then check for updates; select the LibreELEC 9.0 channel and then the 8.90.006 release. To create new install media please use our simple [USB/SD Creator App](https://libreelec.tv/downloads/). The following .img.gz files can also be used to create install media or update the old fashioned way:

**RPi 2/3** [LibreELEC-RPi2.arm-8.90.006.img.gz](http://releases.libreelec.tv/LibreELEC-RPi2.arm-8.90.006.img.gz) ([info](http://releases.libreelec.tv/LibreELEC-RPi2.arm-8.90.006.img.gz?mirrorlist))

**RPi 0/1** [LibreELEC-RPi.arm-8.90.006.img.gz](http://releases.libreelec.tv/LibreELEC-RPi.arm-8.90.006.img.gz) ([info](http://releases.libreelec.tv/LibreELEC-RPi.arm-8.90.006.img.gz?mirrorlist))

**Generic** [LibreELEC-Generic.x86\_64-8.90.006.img.gz](http://releases.libreelec.tv/LibreELEC-Generic.x86_64-8.90.006.img.gz) ([info](http://releases.libreelec.tv/LibreELEC-Generic.x86_64-8.90.006.img.gz?mirrorlist))

**Odroid\_C2** [LibreELEC-Odroid\_C2.arm-8.90.006.img.gz](http://releases.libreelec.tv/LibreELEC-Odroid_C2.arm-8.90.006.img.gz) ([info](http://releases.libreelec.tv/LibreELEC-Odroid_C2.arm-8.90.006.img.gz?mirrorlist))

**KVIM** [LibreELEC-KVIM.arm-8.90.006.img.gz](http://releases.libreelec.tv/LibreELEC-KVIM.arm-8.90.006.img.gz) ([info](http://releases.libreelec.tv/LibreELEC-KVIM.arm-8.90.006.img.gz?mirrorlist))

**LePotato** [LibreELEC-LePotato.arm-8.90.006.img.gz](http://releases.libreelec.tv/LibreELEC-LePotato.arm-8.90.006.img.gz) ([info](http://releases.libreelec.tv/LibreELEC-LePotato.arm-8.90.006.img.gz?mirrorlist))

**Slice** [LibreELEC-Slice.arm-8.90.006.img.gz](http://releases.libreelec.tv/LibreELEC-Slice.arm-8.90.006.img.gz) ([info](http://releases.libreelec.tv/LibreELEC-Slice.arm-8.90.006.img.gz?mirrorlist))

**Slice3** [LibreELEC-Slice3.arm-8.90.006.img.gz](http://releases.libreelec.tv/LibreELEC-Slice3.arm-8.90.006.img.gz) ([info](http://releases.libreelec.tv/LibreELEC-Slice3.arm-8.90.006.img.gz?mirrorlist))

**WeTek\_Core** [LibreELEC-WeTek\_Core.arm-8.90.006.img.gz](http://releases.libreelec.tv/LibreELEC-WeTek_Core.arm-8.90.006.img.gz) ([info](http://releases.libreelec.tv/LibreELEC-WeTek_Core.arm-8.90.006.img.gz?mirrorlist))

**WeTek\_Hub** [LibreELEC-WeTek\_Hub.arm-8.90.006.img.gz](http://releases.libreelec.tv/LibreELEC-WeTek_Hub.arm-8.90.006.img.gz) ([info](http://releases.libreelec.tv/LibreELEC-WeTek_Hub.arm-8.90.006.img.gz?mirrorlist))

**WeTek\_Play** [LibreELEC-WeTek\_Play.arm-8.90.006.img.gz](http://releases.libreelec.tv/LibreELEC-WeTek_Play.arm-8.90.006.img.gz) ([info](http://releases.libreelec.tv/LibreELEC-WeTek_Play.arm-8.90.006.img.gz?mirrorlist))

**WeTek\_Play\_2** [LibreELEC-WeTek\_Play\_2.arm-8.90.006.img.gz](http://releases.libreelec.tv/LibreELEC-WeTek_Play_2.arm-8.90.006.img.gz) ([info](http://releases.libreelec.tv/LibreELEC-WeTek_Play_2.arm-8.90.006.img.gz?mirrorlist))

**RK3328**

**Firefly ROC-RK3328-CC** [LibreELEC-RK3328.arm-8.90.006-roc-cc.img.gz](http://releases.libreelec.tv/LibreELEC-RK3328.arm-8.90.006-roc-cc.img.gz) ([info](http://releases.libreelec.tv/LibreELEC-RK3328.arm-8.90.006-roc-cc.img.gz?mirrorlist))

**Generic Rockchip Box** [LibreELEC-RK3328.arm-8.90.006-box.img.gz](http://releases.libreelec.tv/LibreELEC-RK3328.arm-8.90.006-box.img.gz) ([info](http://releases.libreelec.tv/LibreELEC-RK3328.arm-8.90.006-box.img.gz?mirrorlist))

**PINE64 ROCK64 / Popcorn Hour Transformer** [LibreELEC-RK3328.arm-8.90.006-rock64.img.gz](http://releases.libreelec.tv/LibreELEC-RK3328.arm-8.90.006-rock64.img.gz) ([info](http://releases.libreelec.tv/LibreELEC-RK3328.arm-8.90.006-rock64.img.gz?mirrorlist))

**Popcorn Hour RockBox** [LibreELEC-RK3328.arm-8.90.006-rockbox.img.gz](http://releases.libreelec.tv/LibreELEC-RK3328.arm-8.90.006-rockbox.img.gz) ([info](http://releases.libreelec.tv/LibreELEC-RK3328.arm-8.90.006-rockbox.img.gz?mirrorlist))

**MVR9** [LibreELEC-RK3328.arm-8.90.006-box-trn9.img.gz](http://releases.libreelec.tv/LibreELEC-RK3328.arm-8.90.006-box-trn9.img.gz) ([info](http://releases.libreelec.tv/LibreELEC-RK3328.arm-8.90.006-box-trn9.img.gz?mirrorlist))

**Z28** [LibreELEC-RK3328.arm-8.90.006-box-z28.img.gz](http://releases.libreelec.tv/LibreELEC-RK3328.arm-8.90.006-box-z28.img.gz) ([info](http://releases.libreelec.tv/LibreELEC-RK3328.arm-8.90.006-box-z28.img.gz?mirrorlist))

**RK3399**

**96rocks ROCK960** [LibreELEC-RK3399.arm-8.90.006-rock960.img.gz](http://releases.libreelec.tv/LibreELEC-RK3399.arm-8.90.006-rock960.img.gz) ([info](http://releases.libreelec.tv/LibreELEC-RK3399.arm-8.90.006-rock960.img.gz?mirrorlist))

**PINE64 RockPro64** [LibreELEC-RK3399.arm-8.90.006-rockpro64.img.gz](http://releases.libreelec.tv/LibreELEC-RK3399.arm-8.90.006-rockpro64.img.gz) ([info](http://releases.libreelec.tv/LibreELEC-RK3399.arm-8.90.006-rockpro64.img.gz?mirrorlist))

**Rockchip Sapphire Board** [LibreELEC-RK3399.arm-8.90.006-sapphire.img.gz](http://releases.libreelec.tv/LibreELEC-RK3399.arm-8.90.006-sapphire.img.gz) ([info](http://releases.libreelec.tv/LibreELEC-RK3399.arm-8.90.006-sapphire.img.gz?mirrorlist))

**RK3288**

**ASUS Tinker Board** [LibreELEC-TinkerBoard.arm-8.90.006-rk3288.img.gz](http://releases.libreelec.tv/LibreELEC-TinkerBoard.arm-8.90.006-rk3288.img.gz) ([info](http://releases.libreelec.tv/LibreELEC-TinkerBoard.arm-8.90.006-rk3288.img.gz?mirrorlist))

**mqmaker MiQi** [LibreELEC-MiQi.arm-8.90.006-rk3288.img.gz](http://releases.libreelec.tv/LibreELEC-MiQi.arm-8.90.006-rk3288.img.gz) ([info](http://releases.libreelec.tv/LibreELEC-MiQi.arm-8.90.006-rk3288.img.gz?mirrorlist))

{% include paypal.html %}
