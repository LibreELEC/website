---
layout: post
title: "LibreELEC (Leia) 9.2.5"
image: "img/posts/2020/9.2.5.jpg"
---

**LibreELEC 9.2.5 (Leia)** has arrived based upon Kodi v18.8 only for RPi4. This release only contains a fix for RPi4. 
There is no 9.2.5 for every other platform.  

**Changes since 9.2.4:**

- firmware fix for RPi4 (blank screen at start)

**Kodi 19 Matrix:**

We have currently no plans yet to create an official Alpha release of LE10 with the Alpha version of Kodi 19. Due the drawn out release cycle of Kodi and the experiences from the past few years we are waiting a bit longer to avoid major problems. Nightly builds could be downloaded like usual, that includes the latest unstable development snapshot of LE10/Kodi19.

**Change for Raspberry 4:**

With LE 9.2 and later you need to add _"**hdmi\_enable\_4kp60=1**"_ to your config.txt if you want to use 4k output at the RPi4. Before you needed _"**hdmi\_enable\_4k=1**"_ that is now deprecated.

If you experience problems, please open an thread at our [forum](https://forum.libreelec.tv). You can also open an ticket at our [Github issue tracker](https://github.com/LibreELEC/LibreELEC.tv/issues).

**Upgrading**

On first boot the Kodi media database will be upgraded. Depending on your hardware and media collection size this could take several minutes. Please be patient.

**Downloads**

[**Click here to go to the download page.**](https://libreelec.tv/downloads_new/)
