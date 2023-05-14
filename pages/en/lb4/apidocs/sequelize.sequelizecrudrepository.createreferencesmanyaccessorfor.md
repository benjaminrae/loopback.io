---
lang: en
title: 'API docs: sequelize.sequelizecrudrepository.createreferencesmanyaccessorfor'
keywords: LoopBack 4.0, LoopBack 4, Node.js, TypeScript, OpenAPI
sidebar: lb4_sidebar
editurl: https://github.com/loopbackio/loopback-next/tree/master/extensions/sequelize
permalink: /doc/en/lb4/apidocs.sequelize.sequelizecrudrepository.createreferencesmanyaccessorfor.html
---

<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [@loopback/sequelize](./sequelize.md) &gt; [SequelizeCrudRepository](./sequelize.sequelizecrudrepository.md) &gt; [createReferencesManyAccessorFor](./sequelize.sequelizecrudrepository.createreferencesmanyaccessorfor.md)

## SequelizeCrudRepository.createReferencesManyAccessorFor() method

Function to create a references many accessor

**Signature:**

```typescript
protected createReferencesManyAccessorFor<Target extends Entity, TargetId>(relationName: string, targetRepoGetter: Getter<EntityCrudRepository<Target, TargetId>>): ReferencesManyAccessor<Target, ID>;
```

## Parameters

|  Parameter | Type | Description |
|  --- | --- | --- |
|  relationName | string | Name of the relation defined on the source model |
|  targetRepoGetter | Getter&lt;[EntityCrudRepository](./repository.entitycrudrepository.md)<!-- -->&lt;Target, TargetId&gt;&gt; |  |

**Returns:**

[ReferencesManyAccessor](./repository.referencesmanyaccessor.md)<!-- -->&lt;Target, ID&gt;

