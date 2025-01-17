---
lang: en
title: 'API docs: sequelize.sequelizecrudrepository.gettablename'
keywords: LoopBack 4.0, LoopBack 4, Node.js, TypeScript, OpenAPI
sidebar: lb4_sidebar
editurl: https://github.com/loopbackio/loopback-next/tree/master/extensions/sequelize
permalink: /doc/en/lb4/apidocs.sequelize.sequelizecrudrepository.gettablename.html
---

<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [@loopback/sequelize](./sequelize.md) &gt; [SequelizeCrudRepository](./sequelize.sequelizecrudrepository.md) &gt; [getTableName](./sequelize.sequelizecrudrepository.gettablename.md)

## SequelizeCrudRepository.getTableName() method

This function retrieves the table name associated with a given entity class. Different loopback connectors have different conventions for picking up table names, unless the name is specified in the  decorator.

The function follows the following cases to determine the table name: - It checks if the name property is specified in the  decorator and uses it. (this takes precedence over all other cases) - If the dialect of the dataSource is PostgreSQL, it uses the lowercased version of the model class name. - If the dialect is MySQL or any other dialect, it uses the default model class name.

**Signature:**

```typescript
getTableName(entityClass?: typeof Entity & {
        prototype: T;
    }): string;
```

## Parameters

|  Parameter | Type | Description |
|  --- | --- | --- |
|  entityClass | typeof [Entity](./repository.entity.md) &amp; { prototype: T; } | _(Optional)_ The entity class for which the table name is being retrieved. |

**Returns:**

string

{<!-- -->string<!-- -->} - The table name associated with the entity class. Which is used when performing the query.


