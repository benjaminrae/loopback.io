"use strict";(self.webpackChunkmy_blog=self.webpackChunkmy_blog||[]).push([[9263],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var o=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,i=function(e,t){if(null==e)return{};var n,o,i={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=o.createContext({}),s=function(e){var t=o.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},c=function(e){var t=s(e.components);return o.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=s(n),m=i,h=d["".concat(p,".").concat(m)]||d[m]||u[m]||a;return n?o.createElement(h,r(r({ref:t},c),{},{components:n})):o.createElement(h,r({ref:t},c))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,r=new Array(a);r[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:i,r[1]=l;for(var s=2;s<a;s++)r[s]=n[s];return o.createElement.apply(null,r)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},6510:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return p},metadata:function(){return s},assets:function(){return c},toc:function(){return u},default:function(){return m}});var o=n(7462),i=n(3366),a=(n(7294),n(3905)),r=["components"],l={title:"LoopBack 4 August 2020 Milestone Update",date:new Date("2020-09-02T00:00:00.000Z"),authors:"jannyhou",slug:"august-2020-milestone",tags:["Milestone update"]},p=void 0,s={permalink:"/blog/august-2020-milestone",editUrl:"https://github.com/loopbackio/loopback-blog/blog/2020/2020-09-02-august-milestone.md",source:"@site/blog/2020/2020-09-02-august-milestone.md",title:"LoopBack 4 August 2020 Milestone Update",description:"Originally published on strongloop.com",date:"2020-09-02T00:00:00.000Z",formattedDate:"September 2, 2020",tags:[{label:"Milestone update",permalink:"/blog/tags/milestone-update"}],readingTime:4.92,truncated:!0,authors:[{name:"Janny Hou",title:"LoopBack Maintainer",url:"https://github.com/jannyhou",imageURL:"https://avatars2.githubusercontent.com/u/12554153",key:"jannyhou"}],frontMatter:{title:"LoopBack 4 August 2020 Milestone Update",date:"2020-09-02T00:00:00.000Z",authors:"jannyhou",slug:"august-2020-milestone",tags:["Milestone update"]},prevItem:{title:"Community Q&A Monthly Digest - Sept 2020",permalink:"/blog/2020-sept-slack-qa"},nextItem:{title:"Enriching LoopBack and its Community - You are Invited!",permalink:"/blog/2020-community-contribution"}},c={authorsImageUrls:[void 0]},u=[{value:"Documentation Enhancements",id:"documentation-enhancements",children:[{value:"Reorganizing the Concepts List",id:"reorganizing-the-concepts-list",children:[],level:3},{value:"Reorganizing How-to Guide List",id:"reorganizing-how-to-guide-list",children:[],level:3},{value:"Adding Property Types",id:"adding-property-types",children:[],level:3},{value:"Adding Application Layout",id:"adding-application-layout",children:[],level:3},{value:"Cleaning up Extensions",id:"cleaning-up-extensions",children:[],level:3},{value:"Renaming Legacy Juggler",id:"renaming-legacy-juggler",children:[],level:3}],level:2},{value:"Investigation",id:"investigation",children:[{value:"Restructuring Connector Reference",id:"restructuring-connector-reference",children:[],level:3}],level:2},{value:"Improving REST Experience",id:"improving-rest-experience",children:[{value:"REST Middleware",id:"rest-middleware",children:[],level:3},{value:"Optimizing Middleware Based Sequence",id:"optimizing-middleware-based-sequence",children:[],level:3},{value:"Improving Serviceability of @loopback/rest",id:"improving-serviceability-of-loopbackrest",children:[],level:3}],level:2},{value:"Switching to DCO",id:"switching-to-dco",children:[],level:2},{value:"Miscellaneous",id:"miscellaneous",children:[],level:2},{value:"Community Contributions",id:"community-contributions",children:[],level:2},{value:"Enriching LoopBack and its Community - You are Invited!",id:"enriching-loopback-and-its-community---you-are-invited",children:[],level:2}],d={toc:u};function m(e){var t=e.components,n=(0,i.Z)(e,r);return(0,a.kt)("wrapper",(0,o.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"Originally published on ",(0,a.kt)("a",{parentName:"em",href:"https://strongloop.com"},"strongloop.com"))),(0,a.kt)("p",null,"Our focus in August is the documentation restructure. The layout of several main sections are reorganized for easier navigation. Another significant improvement is about the request handling. More flexible approaches of adding LoopBack style middleware and express middleware are introduced in ",(0,a.kt)("inlineCode",{parentName:"p"},"@loopback/rest"),"."),(0,a.kt)("p",null,"We would like to appreciate ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/agnes512"},"Agnes Lin"),"'s great contributions during her internship. There has been so much fun and pleasure working with her! She will be continue helping us part time. Good luck with your school."),(0,a.kt)("p",null,"Keep reading to learn about the improved documentation and recently added features!"),(0,a.kt)("h2",{id:"documentation-enhancements"},"Documentation Enhancements"),(0,a.kt)("h3",{id:"reorganizing-the-concepts-list"},"Reorganizing the Concepts List"),(0,a.kt)("p",null,'The fundamental concepts were listed in section "Behind the Scene" sorted by the publish date. To have a concise name and a more organized layout for users to search, we renamed the section to be "Concepts" and restructured the documentations into the following sub-sections:'),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Crafting LoopBack 4"),(0,a.kt)("li",{parentName:"ul"},"Core"),(0,a.kt)("li",{parentName:"ul"},"REST APIs"),(0,a.kt)("li",{parentName:"ul"},"Data Access")),(0,a.kt)("p",null,"You can visit the more organized contents in ",(0,a.kt)("a",{parentName:"p",href:"https://loopback.io/doc/en/lb4/Concepts.html"},"https://loopback.io/doc/en/lb4/Concepts.html"),"."),(0,a.kt)("h3",{id:"reorganizing-how-to-guide-list"},"Reorganizing How-to Guide List"),(0,a.kt)("p",null,'The "How-to Guide" is also reorganized by topics. The existing tutorials are classified into the following sections for users to search quickly:'),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Building REST APIs"),(0,a.kt)("li",{parentName:"ul"},"Creating Other Forms of APIS"),(0,a.kt)("li",{parentName:"ul"},"Accessing Databases"),(0,a.kt)("li",{parentName:"ul"},"Accessing Services"),(0,a.kt)("li",{parentName:"ul"},"Validating Data"),(0,a.kt)("li",{parentName:"ul"},"Securing Applications"),(0,a.kt)("li",{parentName:"ul"},"Deploying Applications"),(0,a.kt)("li",{parentName:"ul"},"Troubleshooting")),(0,a.kt)("p",null,"You can visit the more organized contents in ",(0,a.kt)("a",{parentName:"p",href:"https://loopback.io/doc/en/lb4/"},"https://loopback.io/doc/en/lb4/"),"."),(0,a.kt)("h3",{id:"adding-property-types"},"Adding Property Types"),(0,a.kt)("p",null,"We added documentation for LoopBack 4 types including the syntax of model property definition in page ",(0,a.kt)("a",{parentName:"p",href:"https://loopback.io/doc/en/lb4/LoopBack-types.html"},"https://loopback.io/doc/en/lb4/LoopBack-types.html"),"."),(0,a.kt)("h3",{id:"adding-application-layout"},"Adding Application Layout"),(0,a.kt)("p",null,"We added project layout for LoopBack 4 applications in page ",(0,a.kt)("a",{parentName:"p",href:"https://loopback.io/doc/en/lb4/Loopback-application-layout.html"},"https://loopback.io/doc/en/lb4/Loopback-application-layout.html"),", users can find each file's meaning and responsibility in the application scaffolded by ",(0,a.kt)("inlineCode",{parentName:"p"},"lb4 app"),"."),(0,a.kt)("h3",{id:"cleaning-up-extensions"},"Cleaning up Extensions"),(0,a.kt)("p",null,"We are seeing more users creating extensions and it's a good time to make the extension creation experience easier and smoother. Therefore the extension generator and related documentations are updated to align with the latest code base. You can check the latest material in:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://loopback.io/doc/en/lb4/Component.html"},"Concept Component")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://loopback.io/doc/en/lb4/Creating-components.html"},"Creating Components"))),(0,a.kt)("p",null,"And run ",(0,a.kt)("inlineCode",{parentName:"p"},"lb4 extension")," to create extensions with the new component template."),(0,a.kt)("h3",{id:"renaming-legacy-juggler"},"Renaming Legacy Juggler"),(0,a.kt)("p",null,'The term "legacy juggler bridge" might give the wrong impression to users that the ',(0,a.kt)("inlineCode",{parentName:"p"},"loopback-datasource-juggler"),' won\'t be supported or not working well because of the "legacy" word. So we removed the misleading word "legacy" across the documentations and CLI prompts.'),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"loopback-datasource-juggler")," is still well maintained and we have a plan to modernize it. Feel free to join the discussion in ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/strongloop/loopback-next/issues/5956"},"issue #5956")," if you are interested."),(0,a.kt)("h2",{id:"investigation"},"Investigation"),(0,a.kt)("h3",{id:"restructuring-connector-reference"},"Restructuring Connector Reference"),(0,a.kt)("p",null,"The current connector contents are mixed with how-to guides, references and tutorials. The spike story ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/strongloop/loopback-next/issues/5961"},"5961")," came up with a better plan to reorganize them into the four quadrants layout:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},'Connector concepts, its role in the framework and its relations to other artifacts will go to section "Concepts/Datasources".'),(0,a.kt)("li",{parentName:"ul"},'Datasource level configurations and features like migration/discovery will go to section "How-to Guides/Configuring DataSource".'),(0,a.kt)("li",{parentName:"ul"},'All the other connector specific tutorials will go to section "Tutorials/Connect to back-end tutorial".')),(0,a.kt)("h2",{id:"improving-rest-experience"},"Improving REST Experience"),(0,a.kt)("h3",{id:"rest-middleware"},"REST Middleware"),(0,a.kt)("p",null,"A big feature took place in ",(0,a.kt)("inlineCode",{parentName:"p"},"@loopback/rest")," to support more flexible ways to add express middleware for handling requests. PR ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/strongloop/loopback-next/pull/5366"},"#5366")," added a middleware based sequence and wrapped existing actions as middleware. The new usage is documented in the following pages:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Concept ",(0,a.kt)("a",{parentName:"li",href:"https://loopback.io/doc/en/lb4/Middleware.html"},"Middleware")," in LoopBack 4."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://loopback.io/doc/en/lb4/REST-middleware-sequence.html"},"Middleware-based Sequence for REST Server"))),(0,a.kt)("h3",{id:"optimizing-middleware-based-sequence"},"Optimizing Middleware Based Sequence"),(0,a.kt)("p",null,"PR ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/strongloop/loopback-next/pull/6062"},"#6062")," optimized middleware based sequence and its middleware providers to be singletons:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"MiddlewareSequence is now a singleton and it caches a list of middleware."),(0,a.kt)("li",{parentName:"ul"},"Built-in middleware providers are now singletons."),(0,a.kt)("li",{parentName:"ul"},"Validating sorted middleware groups is supported. Error will be reported if a middleware is unreachable.")),(0,a.kt)("h3",{id:"improving-serviceability-of-loopbackrest"},"Improving Serviceability of @loopback/rest"),(0,a.kt)("p",null,"There are several improvements made for easier debugging and error tracing in ",(0,a.kt)("inlineCode",{parentName:"p"},"@loopback/rest")," module:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"PR ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/strongloop/loopback-next/pull/6159"},"#6159")," added more debug information for request parsing, routing, and method invocation. The debugging keywords are ",(0,a.kt)("inlineCode",{parentName:"p"},"loopback:rest:find-route"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"loopback:rest:invoke-method"),", and ",(0,a.kt)("inlineCode",{parentName:"p"},"loopback:rest:parse-param"),".")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"The route description is improved in PR ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/strongloop/loopback-next/pull/6168"},"#6188")," to include the verb and the path.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"PR ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/strongloop/loopback-next/pull/6171"},"#6171")," added HTTP server options and status information in the debug string. The debugging keyword is ",(0,a.kt)("inlineCode",{parentName:"p"},"loopback:http-server"),"."))),(0,a.kt)("h2",{id:"switching-to-dco"},"Switching to DCO"),(0,a.kt)("p",null,"To ",(0,a.kt)("a",{parentName:"p",href:"https://strongloop.com/strongblog/switching-to-dco/"},"make your contribution process simpler"),", we have changed the contribution method from CLA to DCO for ",(0,a.kt)("inlineCode",{parentName:"p"},"loopback-next")," and most of the connector repositories. Be sure to sign off your commits using the ",(0,a.kt)("inlineCode",{parentName:"p"},"-s")," flag or adding ",(0,a.kt)("inlineCode",{parentName:"p"},"Signed-off-By: Name<Email>")," in the commit message. For more details, see ",(0,a.kt)("a",{parentName:"p",href:"https://loopback.io/doc/en/contrib/code-contrib.html#developer-certificate-of-origin-dco"},"https://loopback.io/doc/en/contrib/code-contrib.html"),"."),(0,a.kt)("h2",{id:"miscellaneous"},"Miscellaneous"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"PR ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/strongloop/loopback-next/pull/6172"},"#6172")," makes sure the REST options are passed to http-server.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"PR ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/strongloop/loopback-next/pull/6105"},"#6105")," Reworked the validation code to use exiting ",(0,a.kt)("inlineCode",{parentName:"p"},"RestHttpErrors.invalidData")," error. This way the error object includes the parameter name in the error message & properties and has a machine-readable code property."))),(0,a.kt)("h2",{id:"community-contributions"},"Community Contributions"),(0,a.kt)("p",null,"Thank you for the contribution coming from the community. Here are some of the contributions that we'd like highlight:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Thanks to ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/nflaig"},"Nico Flaig"),"'s ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/strongloop/loopback-next/pull/5735"},"contribution"),"! Now ",(0,a.kt)("inlineCode",{parentName:"p"},"@loopback/authenticate")," supports applying multiple authentication strategies to one endpoint. The new syntax of decorator is:"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"@authenticate(\n  strategyOne | strategyOneWithOptions, \n  strategyTwo | strategyTwoWithOptions\n)\nmyFunction() {}\n")),(0,a.kt)("p",{parentName:"li"},"The new syntax is well documented in page ",(0,a.kt)("a",{parentName:"p",href:"https://loopback.io/doc/en/lb4/Authentication-component-decorator.html"},"Authentication Decorator"),".")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"We appreciate ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/madaky"},"Madaky"),"'s feature PR ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/strongloop/loopback-next/pull/5589"},"#5589")," which adds the token refresh service in extension ",(0,a.kt)("inlineCode",{parentName:"p"},"@loopback/authentication-jwt"),". You can check the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/strongloop/loopback-next/tree/master/extensions/authentication-jwt#endpoints-with-refresh-token"},"new guide")," to try it.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Many thanks to ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/achrinza"},"Rifa Achrinza"),"'s contribution in PR ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/strongloop/loopback-next/pull/6153"},"6153"),". The order filter now supports string value as the shortcut in addition to the existing array value. You can specify an order filter as ",(0,a.kt)("inlineCode",{parentName:"p"},"{order: 'name DESC'}"),"."))),(0,a.kt)("h2",{id:"enriching-loopback-and-its-community---you-are-invited"},"Enriching LoopBack and its Community - You are Invited!"),(0,a.kt)("p",null,"As mentioned in our ",(0,a.kt)("a",{parentName:"p",href:"https://strongloop.com/strongblog/2020-community-contribution/"},"recent blog post"),", your contribution is important to make LoopBack a sustainable open source project. "),(0,a.kt)("p",null,"Here is what you can do:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://join.slack.com/t/loopbackio/shared_invite/zt-8lbow73r-SKAKz61Vdao~_rGf91pcsw"},"Join LoopBack Slack community")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/strongloop/loopback-next/issues?q=is%3Aissue+is%3Aopen+label%3A%22good+first+issue%22"},"Look for first-contribution-friendly issues")),(0,a.kt)("li",{parentName:"ul"},"Give us feedback and join our discussion in ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/strongloop/loopback-next"},"our GitHub repo"))),(0,a.kt)("p",null,"Let's make LoopBack a better framework together!"))}m.isMDXComponent=!0}}]);