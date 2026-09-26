---
layout: post
title: "LibreELEC (Matrix) 10.0.1"
description: "LE 10.0 ... the beta continues"
image: img/posts/icon-release-k19.jpg
---

The final version of LibreELEC 10.0.1 has been released, bringing Kodi (Matrix) v19.3 to LibreELEC users.
  
Users of LibreELEC 10 Beta or RC1 get an automatic update to the final version. LibreELEC 9.2 setups will not be automatically updated, you will need to [manually update](https://wiki.libreelec.tv/support/update).

We can offer stable and good working versions for Allwinner, Generic and Rockchip devices. The RPi4 is also in good shape but the codebase is rather new, so it is not polished yet (keep reading for details).

## CHANGES SINCE 10.0.0

updates:
- update Kodi to 19.3
- several minor package updates

fixes: 
- profiles are now useable
- powercyling related fixes for CEC
- NFS servers are discoverable again
- ASS subtitles are not properly shown
- RPi4 lockup of playback/kodi after n plays on repeat
- RPi4 HDMI screen turns off when sustained high CPU usage
- RPi4 "no signal" after bringing TV out of standy in 4kp50/60 mode
- Rpi4 crashes at H264 and H265 playback 
- RPi4 splash is not shown on HDMI0 if HDMI1 is connected

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
- The additional DVB drivers are not present.

#### Important changes since LE9.2:
- `hdmi_mode`, `hdmi_group`, `hdmi_edid_file` etc settings in config.txt can no longer be used to work around display issues.  
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

You can read the official Team Kodi release announcement for Matrix/v19.3 [here](https://kodi.tv/article/kodi-matrix-19-3-release), and (again) the recent [Upcoming Changes](https://libreelec.tv/2021/02/14/upcoming-changes/) blog post for more info on Kodi changes and the transition to GBM/V4L2. You probably (and hopefully) won’t notice it, but every package that goes into the LibreELEC OS has been updated to its latest or recent release. It’s been two years since Kodi 18 was released, so the change set is too large to list. [GitHub](https://github.com/LibreELEC/LibreELEC.tv/compare/libreelec-9.2...libreelec-10.0) has the full history for those interested.

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
4bb7651457958b52258be625011b708c0f5398cb033b8f92fc02f1bf42938f22  LibreELEC-A64.arm-10.0.1-orangepi-win.img.gz
a837526f2835258140dbef4bfcdca34fb743deaa488409feecacdfa84edf9a09  LibreELEC-A64.arm-10.0.1-pine64.img.gz
01ee2d8f9cef4df3901272195a93471f68b3d997072b785429163abc3b059cb6  LibreELEC-A64.arm-10.0.1-pine64-lts.img.gz
f94b0685fb38e1837c44db5b2528fd349401155c7c5cb469763bef05b1071046  LibreELEC-A64.arm-10.0.1-pine64-plus.img.gz
cb22f319ccb553f939ad66aa4ddcce86b5780715c4d701b18e15c331b4d9752a  LibreELEC-Generic.x86_64-10.0.1.img.gz
8b6e3d27433b9b96db0c5d99eadb5fe0ac3723f720924c6754ef41043a7c81e7  LibreELEC-H3.arm-10.0.1-bananapi-m2p.img.gz
8022c8643bdeb4afef80bc5bf62c602a00cfded11e0f5a8d8a92d5f8fc1994e0  LibreELEC-H3.arm-10.0.1-beelink-x2.img.gz
22dec31780c24d044b9556a1cf72c835dc865785a6ba0c9c589f2e8d0a35063c  LibreELEC-H3.arm-10.0.1-libretech-h3.img.gz
0f66f80cd60d2daa3014c793c2fc187f7f30e223fe7204ed99553900d12f999b  LibreELEC-H3.arm-10.0.1-nanopi-m1.img.gz
c33d07d5e2cf3bd2a1519155847dc5e6cf784b8407e833edddfc82b214eb31d9  LibreELEC-H3.arm-10.0.1-orangepi-2.img.gz
f2869c274684a3d12d1b7ff103433537021b0530e132ac65e76d53131ccbb44a  LibreELEC-H3.arm-10.0.1-orangepi-pc.img.gz
5117d8f373dde83c7eedcc0817aff5dab93dc9885b09bf69e8522f446304afbb  LibreELEC-H3.arm-10.0.1-orangepi-pc-plus.img.gz
875afc8e4e980c7c9179319a5ed93c605566c56337aafe7349191822f3f43575  LibreELEC-H3.arm-10.0.1-orangepi-plus2e.img.gz
9dce4f7bc5f6c34098085e992322db34212727b457edac17722559cf87c59115  LibreELEC-H3.arm-10.0.1-orangepi-plus.img.gz
f8cb3a2101a85b91025d240e0f56bff552b947a0f936b827816837bd3f66f88d  LibreELEC-H5.arm-10.0.1-orangepi-pc2.img.gz
633163d219273f29b04cd2a94cccf426df50fc0cfa508e4398e867877142259a  LibreELEC-H5.arm-10.0.1-tritium-h5.img.gz
3cd8ced0844d9bae257fbecc8bf8a772a8659ccd8885c5856cfcd0575d10a902  LibreELEC-H6.arm-10.0.1-beelink-gs1.img.gz
4fe558ef7bb3a801299bc91996d0fee935a4839455c2f40cd78d5c9a82a4dda2  LibreELEC-H6.arm-10.0.1-orangepi-3.img.gz
f5bf64cff2992a136c5e8cdb1bf58fa45de55f555c52cf688825b04aac6a9c2c  LibreELEC-H6.arm-10.0.1-orangepi-lite2.img.gz
2a70fb74c5b0727080254ecd781c6c816e716617f51e0711805c3b419ed558d8  LibreELEC-H6.arm-10.0.1-orangepi-one-plus.img.gz
97d78e86c9af6f789898cbbc1234bea9538703a06ffb61b0c8210cb51df3257b  LibreELEC-H6.arm-10.0.1-pine-h64.img.gz
d2acd431b62a3d59bc68df3982250695c847d33b51b69e869f55ac4a9c03aae6  LibreELEC-H6.arm-10.0.1-pine-h64-model-b.img.gz
39606919362ecacfa87cb75205fd269da0a69221d55a6186e47cd79bcc247a2e  LibreELEC-H6.arm-10.0.1-tanix-tx6.img.gz
bd0c69331c235adce73afaa32b9468ed081186e897d2af1146d5e2127ab166ce  LibreELEC-R40.arm-10.0.1-bananapi-m2u.img.gz
0547975443986891581f1bd8537e4d63096fd15b90350edeaa8450bff34a0ef9  LibreELEC-RK3288.arm-10.0.1-miqi.img.gz
b04dbb172642ca87b2e0f0dacb3f78777ef1d75a77d73b26c40118a116973b44  LibreELEC-RK3288.arm-10.0.1-tinker.img.gz
c3975bd595d48bd8c060db0ea7a2198cba644c28d6f6c3af03ecf2d8657a9d3d  LibreELEC-RK3328.arm-10.0.1-a1.img.gz
3d0336badd9718dea0b39633670488e7e88ae8fa994621cc20cb9fb129b9d1b2  LibreELEC-RK3328.arm-10.0.1-roc-cc.img.gz
d645e9dd1329445aa46892929a423a7003f438ea160f4f09f95672d11e594df1  LibreELEC-RK3328.arm-10.0.1-rock64.img.gz
6e24438e3c9b1be886ddcfca82f57094aff64fa58bc8fd36b20b8a5c9edbd7c4  LibreELEC-RK3399.arm-10.0.1-hugsun-x99.img.gz
1ff8ec6f881d3f9e1497cbce028fe5d6abe0b52b529eb1b4399d4ba0fd910b96  LibreELEC-RK3399.arm-10.0.1-khadas-edge.img.gz
a3562b5347d7b7d06355a8ffeb534a3c9f7f6a683c5fcab5eaa609836afdc15a  LibreELEC-RK3399.arm-10.0.1-nanopc-t4.img.gz
a68543c89d2aa32c28243347a494d4879f8580aedf59ad915f32cf841fd87581  LibreELEC-RK3399.arm-10.0.1-nanopi-m4.img.gz
9cd5914652c8655012d0d0f77bacc3b39bd6f4fc61215929bc46deb3fff97a5a  LibreELEC-RK3399.arm-10.0.1-orangepi.img.gz
542d6aeb56f99db22f0f9459dbd26e7954b5e044079e659512eaca30e1adfbb5  LibreELEC-RK3399.arm-10.0.1-rock960.img.gz
71f9894f15a3424d1c4c34ddac97586d2125440fa68756b77fab22da42a76346  LibreELEC-RK3399.arm-10.0.1-rock-pi-4.img.gz
5b7594e43f253d5024a4d9b0b15f4095e9c37e85b1087a45aad36e3bde4c0db0  LibreELEC-RK3399.arm-10.0.1-rock-pi-n10.img.gz
b3d7258a77e1c5da6ee17b49bdeddcbd85cfc771bf574143ae1af5e1e63d5304  LibreELEC-RK3399.arm-10.0.1-rockpro64.img.gz
0b2e86072dbab7ef38ea4e563570dc08524c7d13e3725489a5cf89e009de8788  LibreELEC-RK3399.arm-10.0.1-roc-pc.img.gz
da28979d8771195fe6e1f838d3b3c49d1a7528c048936d16801d2afa4bddfa9d  LibreELEC-RK3399.arm-10.0.1-sapphire.img.gz
d9ad33bf8a7111674e981ebed0ad4b5bf19ab96de5315e7f74e908c2a1c9e645  LibreELEC-RPi4.arm-10.0.1.img.gz
```
