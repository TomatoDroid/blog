---
title: 一次面试
date: 2024-07-26
auth: 刘臻
gravatar: 72fe8695c9b25c0968eeafedf165a1cb
twitter: '@770226915Liu'
---

# 一

这个 newObj 实际指向的是 obj，内容与 obj 一致， 要求访问 newObj.xxx 时，log输出 xxx ，如果是函数，在函数调用之后还需要输出函数的返回值。

```javascript
let obj = {
    name: 'obj',
    hello() {
        return 'hello';
    }
}

let newObj = xxx
```

```javascript
let newObj = new Proxy({
    get(target, property, recever) {
        const value = Reflect.get(target, property, recever)
        if (typeof value === "function") {
            return function(...args) {
                const result = value.apply(this, args)
                console.log(`函数返回值: ${result}`)
                return result
            }
        }
        console.log(`访问属性: ${property}`);
        return value
    }
})
```

# 二

使用 promise 优化下面这段代码，避免回调地狱

```javascript
setTimeout(function () {  //第一层
    console.log('武林要以和为贵');
    setTimeout(function () {  //第二程
        console.log('要讲武德');
        setTimeout(function () {   //第三层
            console.log('不要搞窝里斗');
        }, 1000)
    }, 2000)
}, 3000)
```

```javascript
function sleep (timeout: number, content: string) {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log(content);
            resolve(content);
        }, timeout);
    })
}

sleep(3000, '武林要以和为贵').then(() => sleep(2000, '要讲武德')).then(() => sleep(1000, "不要搞窝里斗"));
```

# 三

这些代码可能存在什么问题？ 请修改

```javascript
import { reactive, ref } from 'vue'

const counter = ref(0)

// 要求每一个返回的 counter 相互独立.
function useCounter() {

    return {
        value: counter.value,
        increment: () => counter.value++,
    }
}

let arr = reactive([1, 2, 3])
function emptyArr() {
    arr = reactive([]);
}
```

```javascript
function useCounter() {
    const counter = ref(0)

    return {
        value: counter,
        increment: () => counter.value++
    }
}

let arr = reactive([1, 2, 3])
function emptyArr() {
    arr.length = 0;
}
```

# 四

现在有类似这样的一个数据结构，要求编写一个函数，传入这样的一个结构，生成一个 component

```TypeScript
import type { Component, defineComponent, h} from "vue";

interface VirtualNode {
    tag: string;
    content: string;
    props: {
        [key: string]: string;
    },
    children: VirtualNode[];
}

function createComponent(node: VirtualNode): Component {
}
```

```TypeScript
function createComponent(node: VirtualNode): Component {
    return defineComponent({
        setup() {
            const renderNode = (node: VirtualNode): VNode => {
                const { tag, props, content, children } = node
                return h(
                    tag,
                    props,
                    content
                     ? content
                     : (children ? children.map(renderNode) : null)
                );

            }

            return () => renderNode(node)
        }
    })
}
```

# 五

设计一个 useMouseInside 函数，要求鼠标进入或者离开元素之后，调用 cb

```javascript
function useMouseInside(el, cb) {
}
```

```javascript
function useMouseInside(el, cb) {
    const isInside = ref(false);

  // 定义鼠标进入事件处理函数
  const handleMouseEnter = () => {
    isInside.value = true;
    cb(true);
  };

  // 定义鼠标离开事件处理函数
  const handleMouseLeave = () => {
    isInside.value = false;
    cb(false);
  };

  onMounted(() => {
    if (el.value) {
      el.value.addEventListener('mouseenter', handleMouseEnter);
      el.value.addEventListener('mouseleave', handleMouseLeave);
    }
  });

  onBeforeUnmount(() => {
    if (el.value) {
      el.value.removeEventListener('mouseenter', handleMouseEnter);
      el.value.removeEventListener('mouseleave', handleMouseLeave);
    }
  });

  return {
    isInside
  };
}
```
