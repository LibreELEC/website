---
layout: post
title: "Sponsored Slaves Required!"
image: "img/posts/2018/server-overload.png"
---

The project needs help. We would like to start releasing new images for a number of Amlogic and Rockchip devices including long talked-about (and needed) generic catch-all images, but this has a major impact on project resources. LE 7.0 released 8x images, LE 8.0/8.2 has 11x images, and LE 9.0 increases output to 22x images with another increase on the horizon once Allwinner support becomes possible and NXP (iMX) support is re-added. Increased output impacts our build server/slave capacity and requires us to rethink how our images are tested. It also affects our human resources (the other kind of build slave).

To outline the problem:

- If we build images manually we have enough build-slave capacity to handle 20-25 images
- If we build 20-25 images manually the human slaves burn-out and quit the project
- If we build 20-25 images it's impractical for the team to test all images before release
- If we build images automatically we save the sanity of the project staff!
- If we build automatically and crowd-source testing we must release untested images
- If we want confidence in untested images we need to crowd-test frequently, i.e. nightly images
- If we want to build 25+ images nightly, we don't have enough build-slave capacity
- If we build less frequently we gain capacity but lose confidence
- If we add NXP and Allwinner images in the future we will have 35+ images!
- We also need to build and test many of the GitHub pull-requests we receive
- We also need to build and test new devices in development branches
- We also need to build and test full releases (less frequently, but most importantly!)
- We also need to automate build and test for 60x add-ons over 8x CPU/ARCH combos

The team have been experimenting with Jenkins continuous-integration/automation and nightly builds (with 11x images and add-ons) and we have a core workflow figured out. It shows our cross-compile build-system needs core changes to become more parallel and compute efficient, but this is complex work and those improvements will be long-term.

In the the short and mid-term we need compute capacity. It currently takes ~3 hours to create a single LE image using a single build-slave (16x CPU Cores, 32GB RAM, 15k-rpm disks) and while utilisation improves building many images in parallel, image creation time slows to 8-9 hours. TL/DR: We do not have the capacity to provide frequent images (to catch issues early and build high confidence in crowdsourced testing) and handle the ad-hoc workload from development builds, the creation of official release images, and sustaining work on a large number of binary add-ons.

How can you help?

If you are able donate and host build-slave hardware (minimum 8x Cores, 16GB RAM, 640GB of SSD or 10-15k drives) with proper power, cooling and connectivity, or can make a one-time or recurring annual donation that allows us to rent build-slaves from a reputable hosting provider, we need to hear from you. In the mid-term we will need at least two additional build-slaves so we need to find multiple sponsors.

The team also needs regular access to one WebEx, GoToMeeting or similar web-conferencing account to host monthly team calls with an average of 15-20 people. Humans talk better than they type and we need to boost our communication during a time of growth and change. Key team members reside in countries where free VOIP services are routinely blocked so business services (which are not) are required.

In both cases the project will be happy to publicly credit and acknowledge the brands and people who help us out, if recognition is desired.

contact@ our domain.

Thanks! :)

{% include paypal.html %}
