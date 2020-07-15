---
lang: en
title: 'API docs: express.expressserver._constructor_'
keywords: LoopBack 4.0, LoopBack 4, Node.js, TypeScript, OpenAPI
sidebar: lb4_sidebar
editurl: https://github.com/strongloop/loopback-next/tree/master/packages/express
permalink: /doc/en/lb4/apidocs.express.expressserver._constructor_.html
---

<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [@loopback/express](./express.md) &gt; [ExpressServer](./express.expressserver.md) &gt; [(constructor)](./express.expressserver._constructor_.md)

## ExpressServer.(constructor)

Constructs a new instance of the `ExpressServer` class

<b>Signature:</b>

```typescript
constructor(config?: (HttpOptions & {
        basePath?: string | undefined;
        settings?: Record<string, unknown> | undefined;
    }) | (HttpsOptions & {
        basePath?: string | undefined;
        settings?: Record<string, unknown> | undefined;
    }) | undefined, parent?: Context);
```

## Parameters

|  Parameter | Type | Description |
|  --- | --- | --- |
|  config | ([HttpOptions](./http-server.httpoptions.md) &amp; { basePath?: string \| undefined; settings?: Record&lt;string, unknown&gt; \| undefined; }) \| ([HttpsOptions](./http-server.httpsoptions.md) &amp; { basePath?: string \| undefined; settings?: Record&lt;string, unknown&gt; \| undefined; }) \| undefined |  |
|  parent | [Context](./context.context.md) |  |

