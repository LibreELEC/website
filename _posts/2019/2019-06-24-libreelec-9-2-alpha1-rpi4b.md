---
layout: post
title: "LibreELEC (Leia) 9.1.001 ALPHA with Raspberry Pi 4B Support"
image: "img/posts/2019/rpi4-featured-image.jpg"
---

4B is not a typo! For the last six months a small group of LibreELEC developers have been collaborating with Pi Foundation staff and fellow ‘Alpha team’ members on initial software support for the new board. The 4B has faster memory, faster CPUs, faster Ethernet, faster USB, and more native codecs than previous generations. It’s a comprehensive hardware refresh that will please many users seeking a 4K capable device for LibreELEC and Kodi – here’s the new specification:

- 1.5GHz Quad A72 (BCM2711) with 1MB L2 cache, 32KB L1
- 3200-LPDDR4 (1GB, 2GB or 4GB)
- HEVC decode to 4K@60 (with HDR)
- H.264 decode to 1080p@60
- 2x 4K micro-HDMI (LE/Kodi outputs to 1x screen)
- HBR audio (TrueHD/DTS-HD)
- 2x USB 3.0 ports
- 2x USB 2.0 ports
- Analogue 2.0 audio and Composite video port
- Gigabit Ethernet (not over USB!)
- 2.4GHz/5.0GHz 802.11 b/g/n/ac WiFi and Bluetooth 5.0
- 5V/3A USB-C power input
- Micro-SD card slot

Initial demand for the Raspberry Pi 4 is going to be massive and it will be a couple of days before the first users get their hands on boards. To answer some of your questions we posted a short video review to our YouTube channel that explains some of the new capabilities and shows the new LibreELEC 9.2 ALPHA release running on the board:

\[embedyt\] https://www.youtube.com/watch?v=6mxY0r2gr0Q&width=640&height=385\[/embedyt\]

**HARDWARE**

The 0.1Hz CPU bump to 1.5GHz appears modest (3B+ is 1.4GHz) but switching from quad A53 to an A72 chip results in a large gain in overall processing power and multimedia performance. Gigabit Ethernet that runs at full speed and USB 3.0 ports boosts bandwidth and playback from a NAS or USB 3.0 storage device is noticeably quicker. WiFi and Bluetooth performance is essentially the same as the previous model – only a minor change from Bluetooth 4.2 to 5.0.

The 4B continues to boot from a micro SD card to save $$ and maintain the famous $35 price-point for the 1GB RAM board, and new 2GB ($45) and 4GB ($55) board options have been added. Extra RAM boosts the number of use-cases for the 4B and makes Raspbian a usable Desktop OS. That's not particularly relevant to our use-case with Kodi, but we can see the 4B playing a wider role in schools and beyond in the future, which will be great for the Pi Foundation.

**SOFTWARE**

It would be nice to have the 4B running the latest mainline kernel as other devices in LibreELEC 9.2, but adding support for an all-newSoC chipset is a huge effort and the Pi Foundation needed to align initial 4B software with the current Raspbian release to maximise compatibility with existing softwar and to keep the workload sensible. Generic x86/64 devices are running Linux 5.1, while Raspberry Pi devices (0/1/2/3/4) are using Linux 4.19 with some new/extra code. LibreELEC 9.2 also bumps Kodi to v18.3 which was timed for release ahead of the launch (thanks @spiff). In the next 24-hours all the sources for our new "RPi4" image will be made available via our GitHub repository.

In this initial release 1080p playback behaviour and performance on the 4B are broadly on-par with the previous 3B/3B+ model, except for HEVC media which is now hardware decoded and massively improved. New 4K video capabilities still have plenty of rough edges to be smoothed out, but the Pi Foundation developers have been pushing fixes to the Alpha test team at a phenomenal rate over the last month and that will continue as the userbase expands.

The 4B now uses SPI flash for the bootloader. Current firmware supports SD card boot only - Network and USB booting are still on the Pi Foundation to-do list. Also on the list is HBR audio (current audio capabilities are the same as the 3B) and 3D video. The 4B hardware is HDR capable, but software support has a dependency on the new Linux kernel frameworks merged by Intel developers (with help from Team LibreELEC/Kodi) in Linux 5.2 and a kernel bump will be needed to use them. Once the initial excitement and activity from the 4B launch calms down, serious work on HDR and transitioning Raspberry Pi over to the new GBM/V4L2 video pipeline can start.

**ACCESSORIES**

Raspberry Pi 4B needs a 5V/3A power supply with a USB-C connector. If you are using USB devices with more than 500mA power draw the 5V/3A spec is a firm requirement. If you are using simple peripherals you should be able to reuse an existing 5V/2.5A PSU with a small micro-USB to USB-C adaptor. Users with 5V/2A or lower spec PSU’s should invest in a higher rated 5V/3A PSU.

Everyone will need a new case - the board layout is different to previous models. The 4B has two micro-HDMI sockets instead of one full-size HDMI socket, and the USB ports and Ethernet swap positions. On launch day the official Pi Foundation case is available, but Kodi fans might prefer an updated version of the [Flirc "Kodi Edition" case which is available for pre-order](https://flirc.tv/more/kodi-edition-raspberry-pi-4-case) at USD $11.20 (normal price $15.95) until the cases come into stock, making it an absolute steal. The Kodi Foundation receives a royalty on each case sold to help fund the project, and percentage goes towards the USC Norris Cancer Research Centre. The updated cases will ship in late July.

**ROCKCHIP**

LibreELEC 9.2 is not all about Rasberry Pi. Rockchip releases will continue in long-term 'Alpha' state with some minor nip/tuck changes to the kernel and to add more support for HDR infoframe data. We are still using the Linux 4.4 kernel in these images. In the near future we will make a longer 'development update' blog post to outline the plan to move Rockchip images to mainline kernels.

**ALLWINNER / AMLOGIC**

Our original goal was to announce Allwinner and Amlogic images alongside Rockchip and the 4B as part of the LibreELEC 9.2 release, but while overall readiness has greatly improved in recent months – each has specific technical challenges to overcome before they meet our basic critera for a public release. On the human side of the project several maintainers also have reduced availability for support due to work and family commitments, and the summer vacation season is about to start. Combining these factors together, the team felt it was better to be patient and not rush releases.

So instead of releasing LibreELEC 9.2 alpha images we are announcing the start of official nightly images from our master development branch. At the moment the master branch uses Linux 5.1 and Kodi v18 so nightlies mirror LibreELEC 9.2, but in the near future we will start moving master towards Linux 5.3 and Kodi v19. NB: Users of the new [Amlogic A311D based Khadas VIM3 board](https://www.khadas.com/vim) (which also lauches today) will be able to use the master-branch nightly images - we have a device-tree prepared.

**BETA NOTES**

LibreELEC 9.2 for Generic x86/64 and Raspberry Pi 0/1/2/3 devices is a solid beta quality release. Raspberry Pi 4B images are more “late stage Alpha” and are not feature complete or perfect. Normal LibreELEC testing rules apply; if you do not want to experiment on your family’s primary entertainment system – please stick with your current version and wait for the final/stable release. If you do want to experiment – please be prepared to submit log files and work with developers to hunt down problems and test solutions.

Enjoy :)

{% include paypal.html %}
