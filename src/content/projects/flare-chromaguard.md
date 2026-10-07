---
title: "Lights, Camera, Malfunction: When Illumination Robustness Leaves VLA Models Blind to Color"
short_title: "FLARE & ChromaGuard"
venue: CoRL
year: 2026
status: accepted
highlight: true
section: Sensor
teaser: flare-chromaguard-teaser.svg
authors:
  - name: "M. Watanabe"
    me: true
  - name: "T. Sato"
    me: true
  - name: "K. Yoshioka"
    me: true
tags:
  - Security
  - Transformer
links:
  arxiv: https://arxiv.org/abs/2607.14698
  project: https://keio-csg.github.io/ChromaGuard/
description_ja: "ロボット操作の汎用基盤となりつつある Vision-Language-Action (VLA) モデルが、照明のわずかな変化に脆いことを示した研究。狙った照射で成功率をゼロまで落とす物理スポットライト攻撃 FLARE を提案し、モデル内部へのアクセスなしに成立することを実証した。さらに標準的な対策である素朴なデータ拡張が、モデルに「色をノイズとして捨てる」ことを学習させ、形状だけに頼る知覚へ退化させてしまう落とし穴を発見。色を保持したまま敵対的学習を行う ChromaGuard により、実機6自由度ロボットで通常時97.5%、攻撃下92.5%の成功率を達成した。"
order: 4
---

Vision-Language-Action models have become a powerful paradigm for general-purpose robot
manipulation, but moving them into the real world exposes a vulnerability to minor
environmental perturbations.

FLARE is an optimized physical spotlight attack that exploits this through targeted
illumination, dropping baseline task success rates to zero without any access to model
internals. Adversarial training is the standard countermeasure — but it hides a pitfall.
Naive data augmentation conditions VLA models to treat color as noise, collapsing their
perception into a purely shape-biased processor. A diagnostic grayscale evaluation exposes
the damage: the defended model keeps high success rates on grayscale inputs while its
success on benign, color-dependent tasks falls to at most 47.5%, below the undefended
baseline.

ChromaGuard is a chroma-preserving adversarial training method that closes the gap. On a
physical 6-DoF robotic platform it reaches 97.5% success on benign color-dependent tasks
and 92.5% under attack.
