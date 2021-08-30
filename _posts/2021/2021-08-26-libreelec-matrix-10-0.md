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
a3c487238457aefcc7869fdb06454a5be15ae863667b112ecdcc4cde027b4de8  LibreELEC-A64.arm-10.0.0-orangepi-win.img.gz
f74eda46037b6c90ef681b30b7ec3b4980f4b87e4dd252f6102274809f19ecc0  LibreELEC-A64.arm-10.0.0-pine64.img.gz
6df8893cb956bb4a430622ff45fbc3d6ff71fa75dc1e528cefca8aa9d57e8ef4  LibreELEC-A64.arm-10.0.0-pine64-lts.img.gz
e5908a99beb03087edea9a5a85862e3ea57d1acd814e1f5880d7770f4ee2ce70  LibreELEC-A64.arm-10.0.0-pine64-plus.img.gz
f27b56d5803f88f920807a2096ab8eeb957ace6469f24e27675996788cc82173  LibreELEC-Generic.x86_64-10.0.0.img.gz
3677d787c79e352e943e02bb5455031a407468de0f72103bd6b57ccf6c0441d7  LibreELEC-H3.arm-10.0.0-bananapi-m2p.img.gz
193d06078a381f208f7ef97b20c09ae59cc5277c4683cb872cf58212dc1e354c  LibreELEC-H3.arm-10.0.0-beelink-x2.img.gz
4648aa94b3bc9356827b38093787747dd1643dcef68c2d02ab47546fa646dec6  LibreELEC-H3.arm-10.0.0-libretech-h3.img.gz
81d83cead4475b77b5a84e997c9efffb4cf56bf740777f0feed210d3f4de8ccb  LibreELEC-H3.arm-10.0.0-nanopi-m1.img.gz
32d0ec1042ed4ca367f86b6af76043b18d2c6ee462b4277f09bf1766718cf38f  LibreELEC-H3.arm-10.0.0-orangepi-2.img.gz
7e3410316f6be501ba4c54b33a076dd7851213f0c9054ff11e004f62bee9ca2c  LibreELEC-H3.arm-10.0.0-orangepi-pc.img.gz
7bd5c194688e57088cb003e0a51095fa4336e2419cd9f6483fc04ea7930ee230  LibreELEC-H3.arm-10.0.0-orangepi-pc-plus.img.gz
0bec2e348a81a16379f161486777ff77d451ab6e147cfd40d08db50d8d9b32c9  LibreELEC-H3.arm-10.0.0-orangepi-plus2e.img.gz
1ba13ffaf66fbe2dfee25c64a1b20ea37883800f7685f1979f16ceda7d6b8ad8  LibreELEC-H3.arm-10.0.0-orangepi-plus.img.gz
1947f42d38c9aeabe6f70816a14c7229ff8c8460b5451be63cc91e02aec22929  LibreELEC-H5.arm-10.0.0-orangepi-pc2.img.gz
8780d64e866e89ff3dc3c02ec8a32baacec7e32c40433ed2277c7b84edee0381  LibreELEC-H5.arm-10.0.0-tritium-h5.img.gz
1b58b0d4b326b9a4f8b4800e097270e6a148d16a70db3b909afc00652fda56e2  LibreELEC-H6.arm-10.0.0-beelink-gs1.img.gz
99e4237618bf3c0f243f09c6713cde934de8b79d1033d745343643093a3600ae  LibreELEC-H6.arm-10.0.0-orangepi-3.img.gz
1a67c5515fe71622341da8f1da8192dafdddad4e7d12786964c951fc15fbf739  LibreELEC-H6.arm-10.0.0-orangepi-lite2.img.gz
dfdf1d0d613352bb533c637fd461134fc39ba8cbed0f0ab974e32b9ff8203057  LibreELEC-H6.arm-10.0.0-orangepi-one-plus.img.gz
03d069ebc0f5f8ec7ce3029af670cf48affd9fb65c780ded5241b42663661e18  LibreELEC-H6.arm-10.0.0-pine-h64.img.gz
1f411fae6cb07750184c8297253c3b10cb0a1f4c8947e84f2f40f48718685360  LibreELEC-H6.arm-10.0.0-pine-h64-model-b.img.gz
f9c86256353084147946b98edc9363775ded4923ff06cbd4d83862ae594b5a5f  LibreELEC-H6.arm-10.0.0-tanix-tx6.img.gz
9afc8d34067ec95d4c5b2c0446b94cd214812b7cae19bc65133d898617f97b79  LibreELEC-R40.arm-10.0.0-bananapi-m2u.img.gz
82e14d85895b6f28cc6c7401c39c0af3a79ec088c87f42d3b1ed7438512964cb  LibreELEC-RK3288.arm-10.0.0-miqi.img.gz
280c5cd13f47efe34af9440c94d020c46d9365c6ac0ee7a644ef4566c1c31323  LibreELEC-RK3288.arm-10.0.0-tinker.img.gz
58b4c4565700e5c299a06b945f6ef0fd010e9bea27486c5aeffa18a9b2d59ea4  LibreELEC-RK3328.arm-10.0.0-a1.img.gz
8803022b748163ff08c8fcb5a277d7ffe61d52c6085c09d5ac7f31b74104604d  LibreELEC-RK3328.arm-10.0.0-roc-cc.img.gz
92d60d114cdb91660c1d7ddf5105447c8a6562abb21fa02e31dc55bfecf80287  LibreELEC-RK3328.arm-10.0.0-rock64.img.gz
8ba74d21abbdd98cc13f7139a46b0fc2f6be6ca3dfe23292cb027ddcd2ef1131  LibreELEC-RK3399.arm-10.0.0-hugsun-x99.img.gz
65fb581d795cd61abc630465a3971be389b044534aba66d72ebad448941a1c3f  LibreELEC-RK3399.arm-10.0.0-khadas-edge.img.gz
8557f0adc0196251e66ccc8c1d523bdea1a689a1eb4c8e1cc918812a0866f1ff  LibreELEC-RK3399.arm-10.0.0-nanopc-t4.img.gz
bc7fc486c543facefa33ff61ba8cee557bc441254ba207be5ae102eb511218fa  LibreELEC-RK3399.arm-10.0.0-nanopi-m4.img.gz
a3df7178ab03afd12b3557af2f6209eaefd9b440419ed226f8c5812dd050a037  LibreELEC-RK3399.arm-10.0.0-orangepi.img.gz
b5e729d928e8703c0915ef0718a515668464c573505d11a7507825c751a21f4a  LibreELEC-RK3399.arm-10.0.0-rock960.img.gz
607ab415f0a25b0e268f2f766e2d0a1fa01c6da39e9507e02a75cdb28bde7885  LibreELEC-RK3399.arm-10.0.0-rock-pi-4.img.gz
4bad15a7fda9579fd6586599171dbcee9c1f51cc3da746b53485f5b50cf2f46b  LibreELEC-RK3399.arm-10.0.0-rock-pi-n10.img.gz
c4f3a0f01509add53b2be0ec8ea08ad02c8ba35027baed7697410d53cc11c37f  LibreELEC-RK3399.arm-10.0.0-rockpro64.img.gz
c0675146b0e65c8255ad4a633bc7486fa9fdffc4ec853ee69d0a4ed5b0bbb5d6  LibreELEC-RK3399.arm-10.0.0-roc-pc.img.gz
cfe0e24948de72ef825869658c15c1ff2c6db4bc492182f14b9881b7d518a61a  LibreELEC-RK3399.arm-10.0.0-sapphire.img.gz
d06ca25fa353819ada360dd8cdd801e70cc223a30dfaa0d7ac202f2c9768317f  LibreELEC-RPi4.arm-10.0.0.img.gz
```
