---
lang: en
title: 'API docs: context.createviewgetter'
keywords: LoopBack 4.0, LoopBack 4
sidebar: lb4_sidebar
permalink: /doc/en/lb4/apidocs.context.createviewgetter.html
---

<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [@loopback/context](./context.md) &gt; [createViewGetter](./context.createviewgetter.md)

## createViewGetter() function

Create a context view as a getter with the given filter

<b>Signature:</b>

```typescript
export declare function createViewGetter<T = unknown>(ctx: Context, bindingFilter: BindingFilter, session?: ResolutionSession): Getter<T[]>;
```

## Parameters

|  Parameter | Type | Description |
|  --- | --- | --- |
|  ctx | <code>Context</code> | Context object |
|  bindingFilter | <code>BindingFilter</code> | A function to match bindings |
|  session | <code>ResolutionSession</code> | Resolution session |

<b>Returns:</b>

`Getter<T[]>`

