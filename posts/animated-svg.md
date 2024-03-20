---
title: SVG动画Logo
date: 2024-03-18
author: 刘臻
gravatar: 72fe8695c9b25c0968eeafedf165a1cb
twitter: '@770226915Liu'
---

## 开始

SVG，可缩放矢量图形，放大也不会出现模糊，这就是我对svg的理解了，可能图标也就是我最常用到它的地方了，但直到我看到[antfu的博客](https://antfu.me/posts/animated-svg-logo)的logo时，太酷了！就跟手写的一样。于是跟着他的博客，我也尝试做了一个。

<script setup>
import Logo from '../.vitepress/theme/components/Logo.vue'
</script>

<div flex="~ justify-center">
    <Logo w-80 />
</div>

## 操作步骤

1. 在figma上找到一个偏手写体的字体，敲上字母。(我找的是Allison)。

   ![step1](/svglogo/step1.png)

2. 添加字体蒙层，这一步目前看不出什么，但也是关键中的关键。

   ![step2](/svglogo/step2.png)

3. 通过钢笔来进行临摹，这一块真的需要练习，搞得我头都大了，好在找了一个[钢笔游戏](https://bezier.method.ac/)来练习。

   ![step2](/svglogo/step3.png)

   ::: tip
   为了达到一笔写出的效果，钢笔的绘制也就需要连贯，去掉蒙层后实际的绘制路径是下面这样。不然导出的svg中path会有多个，你就需要判断多个path开始动画的时机了，会比较麻烦。
   :::

   ![nomask](/svglogo/nomask.png)

4. 最后就是添加动画代码。

```css
@media (prefers-reduced-motion) {
  path {
    animation: none !important;
    stroke-dasharray: unset !important;
  }
}
.path {
  stroke-dasharray: 430px 0;
  stroke-dashoffset: 0;
  animation: grow 10s ease forwards infinite;
  animation-delay: 0s;
}

@keyframes grow {
  0% {
    stroke-dashoffset: 0;
    stroke-dasharray: 0 430px;
    opacity: 0;
  }
  10% {
    opacity: 1;
  }
  40% {
    stroke-dasharray: 430px 0;
  }
  80% {
    stroke-dasharray: 430px 0;
  }
  95%,
  to {
    stroke-dasharray: 0 430px;
  }
}
```

:::tip
上面代码上的430px是svg路径的长度，你可以通过`path.getTotalLength()`来获得
:::

## 不足

文章开头的logo可以看到Z中间那一撇绘制的时候会有一些瑕疵，是因为钢笔太宽导致，但是缩小后又不太容易填满其他地方，所以只能找个相对可以的宽度来绘制，但是当做logo来使用就不怎么明显了，当时的我已经很开心了。
