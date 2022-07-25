"use strict";(self.webpackChunkmy_blog=self.webpackChunkmy_blog||[]).push([[7410],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=o.createContext({}),p=function(e){var t=o.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=p(e.components);return o.createElement(i.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},c=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),c=p(n),m=r,h=c["".concat(i,".").concat(m)]||c[m]||d[m]||a;return n?o.createElement(h,l(l({ref:t},u),{},{components:n})):o.createElement(h,l({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,l=new Array(a);l[0]=c;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:r,l[1]=s;for(var p=2;p<a;p++)l[p]=n[p];return o.createElement.apply(null,l)}return o.createElement.apply(null,n)}c.displayName="MDXCreateElement"},9072:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return i},metadata:function(){return p},assets:function(){return u},toc:function(){return d},default:function(){return m}});var o=n(7462),r=n(3366),a=(n(7294),n(3905)),l=["components"],s={title:"LoopBack 4 Offers Inclusion of Related Models",date:new Date("2019-10-23T00:00:00.000Z"),authors:"agnes512",slug:"inclusion-of-related-models",tags:["feature","related models"]},i=void 0,p={permalink:"/blog/inclusion-of-related-models",editUrl:"https://github.com/loopbackio/loopback-blog/blog/2019/2019-10-23-inclusion-of-related-models.md",source:"@site/blog/2019/2019-10-23-inclusion-of-related-models.md",title:"LoopBack 4 Offers Inclusion of Related Models",description:"Originally published on strongloop.com",date:"2019-10-23T00:00:00.000Z",formattedDate:"October 23, 2019",tags:[{label:"feature",permalink:"/blog/tags/feature"},{label:"related models",permalink:"/blog/tags/related-models"}],readingTime:6.375,truncated:!0,authors:[{name:"Agnes Lin",title:"LoopBack Maintainer",url:"https://github.com/agnes512",imageURL:"https://avatars3.githubusercontent.com/u/50331796",key:"agnes512"}],frontMatter:{title:"LoopBack 4 Offers Inclusion of Related Models",date:"2019-10-23T00:00:00.000Z",authors:"agnes512",slug:"inclusion-of-related-models",tags:["feature","related models"]},prevItem:{title:"LoopBack 4 October 2019 Milestone Update",permalink:"/blog/october-2019-milestone"},nextItem:{title:"LoopBack 4 2019 Q3 Overview",permalink:"/blog/loopback-4-2019-q3-overview"}},u={authorsImageUrls:[void 0]},d=[{value:"0. Before you get started",id:"0-before-you-get-started",children:[],level:2},{value:"1. Set up models and datasource",id:"1-set-up-models-and-datasource",children:[],level:2},{value:"2. Set up relations and register inclusion resolver for each relation",id:"2-set-up-relations-and-register-inclusion-resolver-for-each-relation",children:[],level:2},{value:"3. Try it out!",id:"3-try-it-out",children:[],level:2},{value:"Limitations",id:"limitations",children:[],level:2},{value:"Call to Action",id:"call-to-action",children:[],level:2}],c={toc:d};function m(e){var t=e.components,s=(0,r.Z)(e,l);return(0,a.kt)("wrapper",(0,o.Z)({},c,s,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"Originally published on ",(0,a.kt)("a",{parentName:"em",href:"https://strongloop.com"},"strongloop.com"))),(0,a.kt)("p",null,"LoopBack 4 now offers a new feature: inclusion of related models! This addition not only simplifies querying data in LoopBack 4, but since we have similar features in LoopBack 3 it also closes one feature gap between LoopBack 3 as well. The idea is to use the ",(0,a.kt)("inlineCode",{parentName:"p"},"inclusion resolver"),", which is a function that helps to query data over different relations, to achieve such simplifications for us."),(0,a.kt)("p",null,"Here is a simple use case of inclusion: a customer has many orders."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"hasMany",src:n(4701).Z,width:"2884",height:"540"})),(0,a.kt)("p",null,"If we'd like to get a customer's instance with all their orders instances, we can query on ",(0,a.kt)("inlineCode",{parentName:"p"},"Customer")," with filter ",(0,a.kt)("inlineCode",{parentName:"p"},"{include: [{relation: 'orders']}"),". The inclusion resolvers are similar to GraphQL resolvers -- it will find the target instances of ",(0,a.kt)("inlineCode",{parentName:"p"},"Customer")," first and pass its result to the inclusion resolver of ",(0,a.kt)("inlineCode",{parentName:"p"},"orders"),". The query result will contain the return value of ",(0,a.kt)("inlineCode",{parentName:"p"},"orders")," nested under corresponding ",(0,a.kt)("inlineCode",{parentName:"p"},"Customer")," instead of connecting to database twice. Read on for detailed examples and explanations!"),(0,a.kt)("p",null,"LoopBack 4 creates a different inclusion resolver for each relation type. Each relation has its own inclusion resolver ",(0,a.kt)("inlineCode",{parentName:"p"},"inclusionResolver"),". And each repository has a built-in property ",(0,a.kt)("inlineCode",{parentName:"p"},"inclusionResolvers")," as a registry for its ",(0,a.kt)("inlineCode",{parentName:"p"},"inclusionResolver"),"s."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"inclusionResolvers",src:n(1883).Z,width:"3524",height:"1324"})),(0,a.kt)("p",null,"To enable querying related models for a certain relation, the corresponding ",(0,a.kt)("inlineCode",{parentName:"p"},"inclusionResolver")," of that relation has to be registered to the ",(0,a.kt)("inlineCode",{parentName:"p"},"inclusionResolvers"),". I promise the set up is not as complicated as what you just read through.\nLet me show you the steps to enable this feature in few steps!"),(0,a.kt)("h2",{id:"0-before-you-get-started"},"0. Before you get started"),(0,a.kt)("p",null,"Upgrade your global installation of LoopBack 4 command line interface (CLI) to get the new feature."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'$ npm install -g "@loopback/cli"\n')),(0,a.kt)("h2",{id:"1-set-up-models-and-datasource"},"1. Set up models and datasource"),(0,a.kt)("p",null,"You can set up models and datasource by the CLI ",(0,a.kt)("inlineCode",{parentName:"p"},"lb4 model")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"lb4 datasouce"),". "),(0,a.kt)("p",null,"I use ",(0,a.kt)("inlineCode",{parentName:"p"},"MySQL")," as my database in this case. And here are my models ",(0,a.kt)("inlineCode",{parentName:"p"},"Customer")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"Order"),":"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"customer.model.ts"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},'// imports\n@model()\nexport class Customer extends Entity {\n  @property({\n    id: true,\n    generated: true\n  })\n  id: number;\n\n  @property({\n    type: "string"\n  })\n  name: string;\n  // constructor\n}\n')),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"order.model.ts"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},'@model()\nexport class Order extends Entity {\n  @property({\n    id: true,\n    generated: true\n  })\n  id: number;\n\n  @property({\n    type: "string",\n    required: true\n  })\n  description: string;\n}\n//constructor\n')),(0,a.kt)("h2",{id:"2-set-up-relations-and-register-inclusion-resolver-for-each-relation"},"2. Set up relations and register inclusion resolver for each relation"),(0,a.kt)("p",null,"We are setting up two relations in this example:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"hasMany"),": a ",(0,a.kt)("inlineCode",{parentName:"li"},"Customer")," has many ",(0,a.kt)("inlineCode",{parentName:"li"},"Order"),"s. Named this relation as ",(0,a.kt)("inlineCode",{parentName:"li"},"orders"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"belongsTo"),": an ",(0,a.kt)("inlineCode",{parentName:"li"},"Order")," has a ",(0,a.kt)("inlineCode",{parentName:"li"},"Customer"),". Named this relation as ",(0,a.kt)("inlineCode",{parentName:"li"},"customer"),". The foreign key is ",(0,a.kt)("inlineCode",{parentName:"li"},"customerId"),".")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"relations",src:n(9106).Z,width:"2884",height:"540"})),(0,a.kt)("p",null,"You can either modify your model and repository files or use CLI ",(0,a.kt)("inlineCode",{parentName:"p"},"lb4 relation")," to set up relations and enable the ",(0,a.kt)("inlineCode",{parentName:"p"},"inclusionResolver")," in each relation. Here's how I set the ",(0,a.kt)("inlineCode",{parentName:"p"},"belongsTo")," relation through the CLI:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"$ lb4 relation\n? Please select the relation type: belongsTo\n? Please select source model: Order\n? Please select target model: Customer\n? Source property name for the relation getter: customerId\n? Allow Order queries to include data from related Customer instances? Yes\n   create src/controllers/order-customer.controller.ts\n\nRelation BelongsTo was created in src/\n")),(0,a.kt)("p",null,"This prompt registers the ",(0,a.kt)("inlineCode",{parentName:"p"},"inclusionResolver")," for this ",(0,a.kt)("inlineCode",{parentName:"p"},"belongsTo")," relation for you."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"? Allow Order queries to include data from related Customer instances? (Y/n)\n\n")),(0,a.kt)("p",null,"It defaults to ",(0,a.kt)("inlineCode",{parentName:"p"},"Yes"),". Make sure to choose 'yes' if you'd like to use inclusion and your model is traversable."),(0,a.kt)("p",null,"Here is the code snippet for models after setting up two relations and enabling both inclusion resolvers:"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"customer.model.ts"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"// imports\n@model()\nexport class Customer extends Entity {\n  // id, name properties\n  @hasMany(() => Order)\n  orders?: Order[];\n  // constructor\n}\n")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"order.model.ts"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"// imports\n@model()\nexport class Order extends Entity {\n  // id, desc properties\n  @belongsTo(() => Customer)\n  customerId: Customer;\n}\n//constructor\n")),(0,a.kt)("p",null,"And you'll see the inclusion resolvers are enabled in the repository classes:"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"customer.repository.ts"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},'//imports\nexport class CustomerRepository extends DefaultCrudRepository {\n  public readonly orders: HasManyRepositoryFactory<\n    Order,\n    typeof Customer.prototype.id\n  >;\n  constructor(\n    dataSource: DbDataSource,\n    orderRepositoryGetter: Getter<OrderRepository>\n  ) {\n    super(Customer, dataSource);\n    this.orders = this.createHasManyRepositoryFactoryFor(\n      "orders",\n      orderRepositoryGetter\n    );\n    // this line registers inclusion resolver, allows us to query related models\n    this.registerInclusionResolver("orders", this.orders.inclusionResolver);\n  }\n}\n')),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"order.repository.ts"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},'export class OrderRepository extends DefaultCrudRepository {\n  public readonly customer: BelongsToAccessor<\n    Customer,\n    typeof Order.prototype.id\n  >;\n\n  constructor(\n    dataSource: juggler.DataSource,\n    customerRepositoryGetter: Getter<CustomerRepository>\n  ) {\n    super(Order, dataSource);\n    this.customer = this.createBelongsToAccessorFor(\n      "customer",\n      customerRepositoryGetter\n    );\n\n    // this line registers inclusion resolver, allows us to query related models\n    this.registerInclusionResolver("customer", this.customer.inclusionResolver);\n  }\n}\n')),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"Notice: I use default values in this example. We also recommend to follow the naming convention. If you'd like to custom property names or relation names, check our site ",(0,a.kt)("a",{parentName:"em",href:"https://loopback.io/doc/en/lb4/Relations.html"},"Relations")," for more details.")),(0,a.kt)("h2",{id:"3-try-it-out"},"3. Try it out!"),(0,a.kt)("p",null,"At this point, you're able to query related models by specifying the relation name in the inclusion field. Let's create instances for ",(0,a.kt)("inlineCode",{parentName:"p"},"Customer")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"Order"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"Customer: [\n  {id: 1, name: `Thor`},\n  {id: 2, name: `Captain`},\n],\nOrder: [\n  {id: 1, desc: `Rocket Raccoon`, customerId: 1},\n  {id: 2, desc: `Shield`, customerId: 2},\n  {id: 3, desc: `Mjolnir`, customerId: 1},\n]\n")),(0,a.kt)("p",null,"You can either query data via controllers or do it in the repository level."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"export class CustomerController {\n// constructor\n @get('/customers', {\n    ...\n}\n\nexport class OrderController {\n// constructor\n @get('/orders', {\n    ...\n}\n")),(0,a.kt)("p",null,"For hasMany relation ",(0,a.kt)("inlineCode",{parentName:"p"},"orders"),", these queries return all customers with their ",(0,a.kt)("inlineCode",{parentName:"p"},"Order"),"s:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Use controllers (or use the API Explorer ",(0,a.kt)("a",{parentName:"p",href:"http://localhost:3000/explorer/"},(0,a.kt)("inlineCode",{parentName:"a"},"http://localhost:3000/explorer/")),"):"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-sh"}," GET http://localhost:3000/customers?filter[include][][relation]=orders\n"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"This is the same as you process data in the repository level:"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-ts"},'await customerRepository.find({ include: [{ relation: "orders" }] });\n')))),(0,a.kt)("p",null,"Result:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"[\n  {\n    id: 1,\n    name: 'Thor',\n    orders: [\n      {id: 1, desc: 'Mjolnir', customerId: 1},\n      {id: 3, desc: 'Rocket Raccoon', customerId: 1},\n    ],\n  },\n  {\n    id: 2,\n    name: 'Captain',\n    orders: [{id: 2, desc: 'Shield', customerId: 2}],\n  },\n];\n")),(0,a.kt)("p",null,"Here is a diagram to make this more intuitive:"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"inclusion",src:n(3812).Z,width:"4480",height:"1448"})),(0,a.kt)("p",null,"For belongsTo relation ",(0,a.kt)("inlineCode",{parentName:"p"},"customer"),", these queries return the ",(0,a.kt)("inlineCode",{parentName:"p"},"Order")," that has ",(0,a.kt)("inlineCode",{parentName:"p"},"id = 1")," and includes the ",(0,a.kt)("inlineCode",{parentName:"p"},"Customer")," it belongs to."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Use controllers (or use the API Explorer ",(0,a.kt)("a",{parentName:"p",href:"http://localhost:3000/explorer/"},(0,a.kt)("inlineCode",{parentName:"a"},"http://localhost:3000/explorer/")),"):"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"GET http://localhost:3000/orders/1?filter[include][][relation]=customer\n"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"This is the same as you process data in the repository level:"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"await orderRepository.findById(1, {include: [{relation: 'customer'}]};)\n")))),(0,a.kt)("p",null,"Result:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"[\n  {\n    id: 1,\n    desc: 'Rocket Raccoon',\n    customerId: 1,\n    customer: {id: 1, name: 'Thor'},\n  },\n]\n")),(0,a.kt)("p",null,"Besides the example I've shown above, our ",(0,a.kt)("a",{parentName:"p",href:"https://loopback.io/doc/en/lb4/todo-list-tutorial.html"},"TodoList Tutorial")," example also uses inclusion. Check on the site for more detailed steps. "),(0,a.kt)("p",null,"Hope this new feature is helpful for you!"),(0,a.kt)("h2",{id:"limitations"},"Limitations"),(0,a.kt)("p",null,"Though we've finished the implementation of this new feature and test it against SQL and NoSQL databases, there are some limitations:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Including related models with a custom scope is not supported. For example, for ",(0,a.kt)("inlineCode",{parentName:"li"},"orders")," of a ",(0,a.kt)("inlineCode",{parentName:"li"},"Customer"),", it cannot filter a certain ",(0,a.kt)("inlineCode",{parentName:"li"},"Order"),"s that you want to include in ",(0,a.kt)("inlineCode",{parentName:"li"},"orders"),". Related GH issue: ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/strongloop/loopback-next/issues/3453"},"Include related models with a custom scope")),(0,a.kt)("li",{parentName:"ul"},"We don't support recursive inclusion of related models. Related GH issue: ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/strongloop/loopback-next/issues/3454"},"Recursive inclusion of related models")),(0,a.kt)("li",{parentName:"ul"},"It doesn't split numbers of queries. Related GH issue: ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/strongloop/loopback-next/issues/3444"},"Support ",(0,a.kt)("inlineCode",{parentName:"a"},"inq")," splitting"),"."),(0,a.kt)("li",{parentName:"ul"},"It might not work well with ",(0,a.kt)("inlineCode",{parentName:"li"},"ObjectId")," of MongoDB. Related GH issue: ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/strongloop/loopback-next/issues/3456"},"Spike: robust handling of ObjectID type for MongoDB"))),(0,a.kt)("p",null,"We have some discussions on these issues. Please check out the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/strongloop/loopback-next/issues/3585"},"Post MVP Enhancement")," story if you're interested. We'd love to hear your input and feel free to contribute. "),(0,a.kt)("p",null,"Thanks for choosing LoopBack!"),(0,a.kt)("h2",{id:"call-to-action"},"Call to Action"),(0,a.kt)("p",null,"LoopBack's success depends on you! We appreciate your continuous support and engagement to make LoopBack even better and meaningful for your API creation experience. Here's how you can join us and help the project:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/strongloop/loopback-next/issues"},"Report issues"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/strongloop/loopback-next/blob/master/docs/CONTRIBUTING.md"},"Contribute")," code and documentation."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/strongloop/loopback-next/labels/good%20first%20issue"},'Open a pull request on one of our "good first issues"'),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/strongloop/loopback-next/issues/110"},"Join")," our user group.")))}m.isMDXComponent=!0},4701:function(e,t,n){t.Z=n.p+"assets/images/inclusion-of-related-models-hasmany-3c062e8e6b871d17f8b7a3b84a47cc1f.png"},3812:function(e,t,n){t.Z=n.p+"assets/images/inclusion-of-related-models-includes-115470a66edb26ebeda5a127fb948dd3.png"},9106:function(e,t,n){t.Z=n.p+"assets/images/inclusion-of-related-models-relations-190dceb1245245bda45c2d831e26d9ed.png"},1883:function(e,t,n){t.Z=n.p+"assets/images/inclusion-of-related-models-resolvers-09732e907a4692831607ccf87e190a01.png"}}]);