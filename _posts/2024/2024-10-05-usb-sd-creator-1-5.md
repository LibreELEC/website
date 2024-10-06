---
layout: post
title: "LibreELEC USB-SD Creator v1.5"
description: "USB-SD Creator Update!"
image: img/posts/icon-usb-sd-creator.jpg
---

LibreELEC USB-SD Creator v1.5 is available!

This long-overdue update to LibreEEC USB-SD Creator adds Arabic and Korean language translations, switches Windows to x64, and reinstates support for macOS. The updated installer files are now live on mirrors and website download links are updated.

Huge thanks to @kambala-decapitator, @phunkyfish, @CvH, @lrusak, @chewitt for their efforts on bumping Qt, modernising code, reworking the build processes to use CMake and auto-build the app using GitHub actions. We now sign macOS bits correctly to prevent gatekeeper issues. Translation changes from Transifex are now synced automatically so language updates need less effort.

The creator app contains a version check. Older releases will prompt that a new version is available but will not auto-download or auto-update; newer app versions must installed manually. Older Linux 32/64 and Win32 versions will also show the update prompt but no udpates are available: Windows Win32 has been discontinued and Linux needs more work before we can reinstate support.

Download Links:

- [LibreELEC USB-SD Creator (macOS)](https://releases.libreelec.tv/LibreELEC.USB-SD.Creator.macOS.dmg) - [mirrors/sha256](https://releases.libreelec.tv/LibreELEC.USB-SD.Creator.x64.exe?mirrorlist)
- [LibreELEC USB-SD Creator (Windows x64)](https://releases.libreelec.tv/LibreELEC.USB-SD.Creator.x64.exe) - [mirrors/sha256](https://releases.libreelec.tv/LibreELEC.USB-SD.Creator.x64.exe?mirrorlist)

Enjoy! :)

{% include opencollective.html %}
