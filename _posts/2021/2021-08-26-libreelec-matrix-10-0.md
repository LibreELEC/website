---
layout: post
title: "LibreELEC (Matrix) 10.0.0"
description: "LE 10.0 ... the beta continues"
image: img/posts/icon-release-k19.jpg
---

The final version of LibreELEC 10.0.0 has been released, bringing Kodi (Matrix) v19.1 to LibreELEC users.
  
Users of LibreELEC 10 Beta or RC1 get an automatic update to the final version. LibreELEC 9.2 setups will not be automatically updated, you will need to [manually update](https://wiki.libreelec.tv/support/update).

We can offer stable and good working versions for Allwinner, Generic and Rockchip devices. The RPi4 is also in good shape but the codebase is rather new, so it is not polished yet (keep reading for details).

## REMAINING BUGS

Despite a long development period, there is still a major bug remaining. When you use **profiles**, LibreELEC's Settings Add-on can crash while switching to another profile.
The [issue is known](https://github.com/LibreELEC/LibreELEC.tv/issues/5303), but we have currently no fix for it. So if you depend on profiles, you cannot properly use LibreELEC 10.

## RASPBERRY PI 0-3

There are no Raspberry Pi 0-3 releases for LE10.0. The RPi graphic drivers are still in progress of a complete rewrite, additionally the current developement is focused on RPi 4.
- Support for RPi0-1 is dropped, its unlikely to return (lacking horsepower for the new graphic stack)
- Drivers for RPi2 and 3 are currently not yet feature complete and stable

## RASPBERRY PI 4

The situation for RPi 4 is different. There is a lot that properly works, but keep in mind this is still brand new. Unlikely bugs are still possible. 
Overall, the current version is properly useable.

#### Working
- HDMI output up to 4kp30
- H264 and H265 HW decoding
- NEW: HDR output (HDR10 and HLG)
- NEW: HD audio passthrough (Dolby TrueHD, DTS HD)

#### Known Issues:
- No deinterlacing with HW video decoders.
  Possible workaround: disable HW video decoding ("DRM PRIME decoder" in player settings), this works mostly fine for SD content (eg DVDs)
- 4K50/60 output is supported by the driver, but has some known issues (eg "no signal" when TV is put into standby and back on)
- 50/60fps H264 HW decoding may need `force_turbo=1` or `core_freq_min=500` in config.txt to avoid AV-sync-issues/skipping
- 10/12-bit video output isn’t implemented yet, 10-bit video is displayed in 8 bits
- Kodi runs in 4096x2160 instead of 3840x2160 on 4k TVs after fresh installation  
  Solution: Change resolution in system settings (1920x1080 50 or 60Hz plus setting up whitelist and enabling "Adjust display refresh rate" in player settings is recommended)
- Hyperion Add-on no longer works  
  No solution for now, Hyperion doesn’t support the new graphics driver stack yet

#### Important changes since LE9.2:
- `hdmi_mode`, `hdmi_group`, `hdmi_edid_file` etc settings in config.txt can longer be used to work around display issues.  
  Alternatives:
  - Run `getedid create` to install permanent EDID file (same as on Generic)
  - Use `video=...` kernel command line option to force a video mode
    Eg: add `video=HDMI-A-1:1280x720M@60D` to cmdline.txt
- Analog audio output is not enabled by default  
  Solution: add `dtparam=audio=on` and `audio_pwm_mode=1` to config.txt to enable it

## MAKE BACKUPS

Due the many breaking changes at Kodi and LibreELEC, it is strongly recommended to create a backup BEFORE you upgrade. Otherwise, rolling back is basically impossible. Kodi does not support in-place downgrades, and if it ever worked for you in the past it was simple luck, not design. Python3 guarantees problems this time.

So unless you are already running an image with Kodi 19 inside, a clean install is preferred. We apologize for the inconvenience, but we expect a much higher than normal support effort with in-place upgrades so it’s sensible advice.

## CHANGES

You can read the official Team Kodi release announcement for Matrix/v19.0 [here](https://kodi.tv/article/kodi-190-matrix-release), and (again) the recent [Upcoming Changes](https://libreelec.tv/2021/02/14/upcoming-changes/) blog post for more info on Kodi changes and the transition to GBM/V4L2. You probably (and hopefully) won’t notice it, but every package that goes into the LibreELEC OS has been updated to its latest or recent release. It’s been two years since Kodi 18 was released, so the change set is too large to list. [GitHub](https://github.com/LibreELEC/LibreELEC.tv/compare/libreelec-9.2...libreelec-10.0) has the full history for those interested.

## SUPPORT

Project staff are available in the [forum](https://forum.libreelec.tv) to answer questions and provide advice. If you have a problem, technical issues are best accompanied by system and Kodi debug logs - help us to help you.

Enjoy! :)

## Donating

{% include paypal.html %}


[**Click here to go to the download page.**](https://libreelec.tv/downloads/)


## SHA256 Hashes

<style>
  .highlight {
    font-size: 12px;
    line-height: 1.2;
  }
</style>

```
4b01e84cf7a12bb87da1d80d1ca92141  LibreELEC-A64.arm-10.0.0-orangepi-win.img.gz
dfa0657ef13ed548d4f024a0500a3dcd  LibreELEC-A64.arm-10.0.0-pine64.img.gz
13930499c500001365135fc93c3bc95e  LibreELEC-A64.arm-10.0.0-pine64-lts.img.gz
06411c5cb84e8dc5c87af73ea0255243  LibreELEC-A64.arm-10.0.0-pine64-plus.img.gz
83ab2c364214ce2c2ac04e7457d2eb3d  LibreELEC-Generic.x86_64-10.0.0.img.gz
69630d11e9bb964df329e16e7c4dcc7c  LibreELEC-H3.arm-10.0.0-bananapi-m2p.img.gz
776b9f52afe3af009ed5f8fa97eb53c9  LibreELEC-H3.arm-10.0.0-beelink-x2.img.gz
dfd33d385352eb50ee9505f83114e092  LibreELEC-H3.arm-10.0.0-libretech-h3.img.gz
8ae3a816c9619cdb0cb9837421a56d59  LibreELEC-H3.arm-10.0.0-nanopi-m1.img.gz
63a4484bba5b1fb2c26fb26f6ccad28d  LibreELEC-H3.arm-10.0.0-orangepi-2.img.gz
ac4b7ed736576c2fd370420dac0387cd  LibreELEC-H3.arm-10.0.0-orangepi-pc.img.gz
70e47307f941b702ba0a1226a5f809b2  LibreELEC-H3.arm-10.0.0-orangepi-pc-plus.img.gz
a880800d4b1fbf86f55794b41a54500a  LibreELEC-H3.arm-10.0.0-orangepi-plus2e.img.gz
5816df8b081aeb4314dc8f842703095c  LibreELEC-H3.arm-10.0.0-orangepi-plus.img.gz
7e80968d104234429c6d4ae818fe2aef  LibreELEC-H5.arm-10.0.0-orangepi-pc2.img.gz
7625dca2209d1d818cf38f3630ffa9e4  LibreELEC-H5.arm-10.0.0-tritium-h5.img.gz
79ba0dd0df16fa37b01a411a93af3225  LibreELEC-H6.arm-10.0.0-beelink-gs1.img.gz
a70811a99e1320ddd82df82301d28f96  LibreELEC-H6.arm-10.0.0-orangepi-3.img.gz
3880df2fabd89fd2e1685ca52e046b04  LibreELEC-H6.arm-10.0.0-orangepi-lite2.img.gz
699a5035cd735e705436551156e16846  LibreELEC-H6.arm-10.0.0-orangepi-one-plus.img.gz
a5c105a72b2d26a13a992435e1a1e005  LibreELEC-H6.arm-10.0.0-pine-h64.img.gz
a7cb40782eb746b97cc2d301479339c5  LibreELEC-H6.arm-10.0.0-pine-h64-model-b.img.gz
da900a42dc81cb07e129071101bf17cb  LibreELEC-H6.arm-10.0.0-tanix-tx6.img.gz
4f018b7bc1f7f7103bacf7f0ef79a3f8  LibreELEC-R40.arm-10.0.0-bananapi-m2u.img.gz
4827141f94ed8f9749a3c87ffb6be706  LibreELEC-RK3288.arm-10.0.0-miqi.img.gz
0a76f17de25d1985d0d681d53bb9addf  LibreELEC-RK3288.arm-10.0.0-tinker.img.gz
5d9798c596871368d93a3ef76bbc16d5  LibreELEC-RK3328.arm-10.0.0-a1.img.gz
c4596428aca190f78af0d81122ea1328  LibreELEC-RK3328.arm-10.0.0-roc-cc.img.gz
51ffed8750f108c53614e90af74b1add  LibreELEC-RK3328.arm-10.0.0-rock64.img.gz
0939fea1cdfc4eb3d1a1337df96bcb6d  LibreELEC-RK3399.arm-10.0.0-hugsun-x99.img.gz
40be704ca612b6676386dcd308263c86  LibreELEC-RK3399.arm-10.0.0-khadas-edge.img.gz
0972cd20f36b02824963ad8c0bda2900  LibreELEC-RK3399.arm-10.0.0-nanopc-t4.img.gz
cab114ca531b8a9ffa5ea02e646f78d4  LibreELEC-RK3399.arm-10.0.0-nanopi-m4.img.gz
d5740c0bec0287e670c77babeb4c7cf5  LibreELEC-RK3399.arm-10.0.0-orangepi.img.gz
c085e14077a2cad3482bc1085d18361c  LibreELEC-RK3399.arm-10.0.0-rock960.img.gz
4172478808ab80544d29fd15e6ea9bd1  LibreELEC-RK3399.arm-10.0.0-rock-pi-4.img.gz
60e4bed6042b5bc7b0b967bbb9c0b058  LibreELEC-RK3399.arm-10.0.0-rock-pi-n10.img.gz
7043355484c70cbd82c0cb68c31b6d2e  LibreELEC-RK3399.arm-10.0.0-rockpro64.img.gz
90d32fa99d9987e314c6288443649b55  LibreELEC-RK3399.arm-10.0.0-roc-pc.img.gz
c289947191b38e6bc2ed1432cb4aacb0  LibreELEC-RK3399.arm-10.0.0-sapphire.img.gz
789da75cf9377285fb7dd5d1c84fca5a  LibreELEC-RPi4.arm-10.0.0.img.gz
789da75cf9377285fb7dd5d1c84fca5a  LibreELEC-RPi4.arm-10.0.0.img.gz
```
