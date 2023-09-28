---
layout: post
title: "LibreELEC support for Raspberry Pi 5"
description: "LE RPi5"
image: "https://libreelec.tv/img/posts/2023/rpi5-featured-image.png"
---

Raspberry Pi 5 has been announced, with a solid 250% performance increase and many smaller but nice improvements for LibreELEC users. We have been supporting the Raspberry Pi Alpha test team with feedback for a while, and development images are ready. Raspberry Pi 5 has been a super-simple board to add support for: under 60 minutes from samples arriving to a usable image, and super-stable to use (even with Kodi 21 Alpha code). We are confident this will be a super-popular board for Kodi use.

High-level specificiations are:

- Broadcom BCM2712 2.4GHz quad-core 64-bit Arm Cortex-A76 CPU, with crypto extensions
- VideoCore VII GPU, supporting OpenGLES 3.1, Vulkan 1.2
- Dual 4Kp60 HDMI display output with HDR support
- 4Kp60 HEVC decoder
- LPDDR4X-4267 SDRAM (4GB and 8GB models at launch)
- Dual-band 802.11ac Wi-Fi
- Bluetooth 5.0 / Bluetooth Low Energy (BLE)
- microSD card slot, with support for high-speed SDR104 mode
- 2× USB 3.0 ports, supporting simultaneous 5Gbps operation
- 2× USB 2.0 ports
- Gigabit Ethernet, with PoE+ support (requires separate PoE+ HAT)
- 2× 4-lane MIPI camera/display transceivers
- PCIe 2.0 x1 interface for fast peripherals (needs M.2 HAT or other adapter)
- 5V/5A DC power via USB-C, with Power Delivery support
- Raspberry Pi standard 40-pin GPIO header
- Real-time clock (RTC) powered from external battery
- Power button

Here's some detailed front and back pics of the new board with descriptions of connectors and notable changes. Front: from bottom-left, moving anti-clockwise:

![pi5_board_front](https://libreelec.tv/img/posts/2023/pi5_board_front.png)

- USB-C Power: RPi5 uses a 5V/5A (25W) PSU (more info below)
- RTC connector: to connect a coin-cell battery and preserve date/time between reboots
- HDMI0: The same mini-HDMI connector as RPi4
- UART connector: to connect a serial debugging tool
- HDMI1: The same mini-HDMI connector as RPi4
- VID pins: to connect (solder) a composite video output
- CAM/DISP connectors: for Camera/Display devices (all new, but compatible with existing devices)
- POE: Connector for powering the board via a POE HAT (new HAT design required)
- Ethernet: The port returns to the RPi3 position to reduce board costs
- USB 2.x: 480Mbps, same as RPi4
- USB 3.x: 5Gbps on both ports (it's not a hub)
- FAN connector: 4-wire PWM interface so you can set speed and read it back
- GPIO connector: All new IO (RP1 chip) but same pinout for compatibilty
- WiFi/BT: Same chip as RPi4
- PCIe: Still being explored but with a (being designed) PCIe HAT should allow PCIe storage boot
- Power/Reset button: RPi5 has new low-power suspend/resume capabilities

The rear of the board hosts the SD card slot (same as previous generations):

![pi5_board_back](https://libreelec.tv/img/posts/2023/pi5_board_back.png)

**Cases and Cooling**

Bare-board temperatures with typical LibreELEC use are in the 45-75ºC range. This is well within the normal operating range of the BCM2712 chip and in testing we have not noticed thermal throttling, but most users prefer to run boards inside a case that provides some cooling. An official heatsink + fan kit compatible with the official case is available: the case lid is allows air to be drawn inside and the new PWM fan header allows fan speed to step up/down with temperature. For users who are not fans of fans (and fan noise) the popular Kodi flirc case has been revised and offers a passive cooling option. The Kodi flirc cases look great, lowers temperatures, and Team Kodi receives a royalty on every case which helps keep Kodi funded.

**Power Supplies**

Documentation states a USB-C 5V/5A (25W) PSU is required. In our testing the official 5V/3A (15W) PSU for RPi4 has worked fine *BUT* we boot from SD card, store media on NAS devices, use Ethernet not WiFi, and have no other peripherals connected to the board. If you plan to boot from USB or connect peripherals, power requirements increase and a 5V/5A spec PSU will be required. Our recommendation is always to use the official Raspberry Pi PSU to avoid power issues, but third-party alternatives will appear now the RPi5 specs are public. The inclusion of a power button and support for low-power states will please users keen to reduce idle power consumption.

**Booting**

Boot has minor changes from RPi4. There is supprot for SD card SDR104 modes so users with newer cards should see a bump in I/O performance. USB boot also benefits from redesiged USB3 with 5Gbps speeds. USB boot must be enabled in the boot EEPROM first and forces use of a 5V/5A PSU to avoid power "brown out" issues: power requirements increase with the USB hardware changes. RPi5 also has a PCIe connector and we look forward to seeing new HAT designs appearing that allow booting from flash storage devices.

**Media Decoding**

BCM2712 supports HEVC 4K60 hardware decoding. It no longer supports H264 in hardware as the performance bump from the Quad-Core A76 means it can software decode a broad range of media (AV1, H264, VC1, VP9) at 1080p with ease. In our testing a surprising amount of streaming optimised (lower refresh-rate and bitrate) 4K media also plays.

**Performance**

The Quad-Core A76 main CPU supporting crypto extensions, LPDDR4 RAM, SDR104 modes, and the VideoCore VII GPU result in noticeably improved Kodi GUI navigation. [Lots of scientific testing with numbers will be released](https://www.phoronix.com/review/raspberry-pi-5-benchmarks/6) and debated, but our subjective opinion is that an RPi5 with the default Estuary skin is now on-par with current entry-level and older mid-range Intel CPU hardware. Once PCIe flash storage HATs are available to further boost IO performance RPi5 will be level with current mid-range and older high-end Intel hardware. Scrolling in large media libraries and DVB schedules (views that tax the CPU and GPU) are visibly smoother than an RPi4 board, and the ability to software-decode all 1080p streaming media improves the "it just works" usability of services like Amazon, Disney+, Netflix and YouTube.

**Images and Releases**

Board bring-up has been done with our master (LibreELEC 12) development branch and an RPi5 nightly image will be available once the required Linux 6.1 (LTS) kernel, mesa, and rpi-eeprom sources have been made public. Images have 64-bit (aarch64) userspace and are not compatible with RPi4 or older hardware as the image is compile optimised for A76 cores and omits kernel configuration and boot files needed for older devices. There are no plans for a "stable" LibreELEC 11 release as the RPi5 kernel is still evolving and wider public testing will inevitably find issues to fix, so releasing a development image sets more approprite user expectations. Current images are however proving to be quite stable in family daily-driver use and we expect Kodi Omega to move from Alpha to Beta soon.

**Summary**

Users typically focus on hardware specification when choosing their next device but the secret to Raspberry Pi popularity is software support. In short: an average spec board with great software trumps a great spec board with average software. Raspberry Pi is no longer average hardware: RPi5 narrows the specification and performance gap against other on-paper better boards, and its software support is already excellent. For example: the all-new Videocore VII GPU already has fully conformant OpenGLES drivers ready to submit upstream. The kernel changes are ready to submit upstream. Kodi requires zero changes. In fact: adding RPi5 support to LibreELEC has almost been boring due to the exceptionally low level of development effort required. RPi5 is an all-round strong improvement on the RPi4 and will quickly become the #1 board to run LibreELEC on.

The only bad thing is.. You'll need to wait a month until the boards start shipping!

{% include opencollective.html %}
