"use strict";(self.webpackChunkmy_blog=self.webpackChunkmy_blog||[]).push([[4119],{3905:function(e,o,t){t.d(o,{Zo:function(){return c},kt:function(){return d}});var n=t(7294);function a(e,o,t){return o in e?Object.defineProperty(e,o,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[o]=t,e}function r(e,o){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);o&&(n=n.filter((function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var o=1;o<arguments.length;o++){var t=null!=arguments[o]?arguments[o]:{};o%2?r(Object(t),!0).forEach((function(o){a(e,o,t[o])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(o){Object.defineProperty(e,o,Object.getOwnPropertyDescriptor(t,o))}))}return e}function l(e,o){if(null==e)return{};var t,n,a=function(e,o){if(null==e)return{};var t,n,a={},r=Object.keys(e);for(n=0;n<r.length;n++)t=r[n],o.indexOf(t)>=0||(a[t]=e[t]);return a}(e,o);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)t=r[n],o.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=n.createContext({}),s=function(e){var o=n.useContext(p),t=o;return e&&(t="function"==typeof e?e(o):i(i({},o),e)),t},c=function(e){var o=s(e.components);return n.createElement(p.Provider,{value:o},e.children)},m={inlineCode:"code",wrapper:function(e){var o=e.children;return n.createElement(n.Fragment,{},o)}},u=n.forwardRef((function(e,o){var t=e.components,a=e.mdxType,r=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=s(t),d=a,h=u["".concat(p,".").concat(d)]||u[d]||m[d]||r;return t?n.createElement(h,i(i({ref:o},c),{},{components:t})):n.createElement(h,i({ref:o},c))}));function d(e,o){var t=arguments,a=o&&o.mdxType;if("string"==typeof e||a){var r=t.length,i=new Array(r);i[0]=u;var l={};for(var p in o)hasOwnProperty.call(o,p)&&(l[p]=o[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var s=2;s<r;s++)i[s]=t[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}u.displayName="MDXCreateElement"},6919:function(e,o,t){t.r(o),t.d(o,{frontMatter:function(){return l},contentTitle:function(){return p},metadata:function(){return s},assets:function(){return c},toc:function(){return m},default:function(){return d}});var n=t(7462),a=t(3366),r=(t(7294),t(3905)),i=["components"],l={title:"Import LoopBack 3 Models into a LoopBack 4 Project",date:new Date("2019-10-08T00:00:00.000Z"),authors:"bajtos",slug:"import-loopback-3-models-to-loopback-4",tags:["LoopBack 3","migration"]},p=void 0,s={permalink:"/blog/import-loopback-3-models-to-loopback-4",editUrl:"https://github.com/loopbackio/loopback-blog/blog/2019/2019-10-08-import-lb3-models-to-lb4.md",source:"@site/blog/2019/2019-10-08-import-lb3-models-to-lb4.md",title:"Import LoopBack 3 Models into a LoopBack 4 Project",description:"Originally published on strongloop.com",date:"2019-10-08T00:00:00.000Z",formattedDate:"October 8, 2019",tags:[{label:"LoopBack 3",permalink:"/blog/tags/loop-back-3"},{label:"migration",permalink:"/blog/tags/migration"}],readingTime:4.04,truncated:!0,authors:[{name:"Miroslav Bajto\u0161",title:"LoopBack Maintainer",url:"http://github.com/bajtos",imageURL:"https://avatars.githubusercontent.com/u/1140553",key:"bajtos"}],frontMatter:{title:"Import LoopBack 3 Models into a LoopBack 4 Project",date:"2019-10-08T00:00:00.000Z",authors:"bajtos",slug:"import-loopback-3-models-to-loopback-4",tags:["LoopBack 3","migration"]},prevItem:{title:"LoopBack 4 2019 Q3 Overview",permalink:"/blog/loopback-4-2019-q3-overview"},nextItem:{title:"LoopBack 4 September 2019 Milestone Update",permalink:"/blog/september-2019-milestone"}},c={authorsImageUrls:[void 0]},m=[{value:"What&#39;s Next?",id:"whats-next",children:[],level:2},{value:"Call to Action",id:"call-to-action",children:[],level:2}],u={toc:m};function d(e){var o=e.components,t=(0,a.Z)(e,i);return(0,r.kt)("wrapper",(0,n.Z)({},u,t,{components:o,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Originally published on ",(0,r.kt)("a",{parentName:"em",href:"https://strongloop.com"},"strongloop.com"))),(0,r.kt)("p",null,"It has been almost a year since ",(0,r.kt)("a",{parentName:"p",href:"https://strongloop.com/strongblog/loopback-4-ga"},"LoopBack 4.0 GA was announced"),". Since then, we have been working hard on closing the feature gap between the new and the old versions and looking for ways to simplify migration of projects built on LoopBack 3."),(0,r.kt)("p",null,"In June, we announced a new feature that allows LoopBack 3 applications to be mounted in LoopBack 4 projects, allowing developers to start writing new features using LoopBack 4 while keeping existing APIs powered by LoopBack 3 (Read more about it in this ",(0,r.kt)("a",{parentName:"p",href:"https://strongloop.com/strongblog/migrate-from-loopback-3-to-loopback-4/"},"blog post"),")."),(0,r.kt)("p",null,"Today, we are happy to announce a preview version of a tool automating migration of models from LoopBack 3 to LoopBack 4:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"lb4 import-lb3-models\n")),(0,r.kt)("p",null,"Let me show you the new command in practice, using our ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/strongloop/loopback-next/tree/master/examples/lb3-application"},(0,r.kt)("inlineCode",{parentName:"a"},"lb3-application"))," example, which is based on ",(0,r.kt)("a",{parentName:"p",href:"https://loopback.io/doc/en/lb3/Getting-started-with-LoopBack.html"},"Getting started with LoopBack 3"),"."),(0,r.kt)("p",null,"First of all, upgrade your global installation of LoopBack 4 CLI to get the new feature!"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'$ npm install -g "@loopback/cli"\n')),(0,r.kt)("p",null,"Now we can run the following command to start the migration process:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"$ lb4 import-lb3-models lb3app/server/server.js\n")),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"A side note: in our example project, the LoopBack 3 application is a part of the root LoopBack 4 project. Therefore it does not have its own ",(0,r.kt)("inlineCode",{parentName:"em"},"package.json")," file and LoopBack 3 dependencies are included in the top-level ",(0,r.kt)("inlineCode",{parentName:"em"},"package.json")," file along LoopBack 4 dependencies. The directory of the LoopBack 3 application cannot be loaded directly via ",(0,r.kt)("inlineCode",{parentName:"em"},"require")," as a result, and we have to provide a full path to the server file to the CLI tool. On the other hand, if you are importing from a standalone LoopBack 3 project which has ",(0,r.kt)("inlineCode",{parentName:"em"},"main")," entry in ",(0,r.kt)("inlineCode",{parentName:"em"},"package.json")," configured to point to ",(0,r.kt)("inlineCode",{parentName:"em"},"server/server.js")," (as is the case with projects scaffolded by our LoopBack 3 CLI tool), then it's enough to use the path to your LoopBack 3 project directory as the argument, e.g. ",(0,r.kt)("inlineCode",{parentName:"em"},"lb3app"),").")),(0,r.kt)("p",null,"The generator will greet you with a warning about the experimental status and then load the LoopBack 3 application at the provided path. Once the application is loaded, the generator shows a list of models available for import."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"? Select models to import: (Press <space> to select, <a> to toggle all, <i> to invert selection)\n\u276f\u25ef Application\n \u25ef AccessToken\n \u25ef User\n \u25ef RoleMapping\n \u25ef Role\n \u25ef ACL\n \u25ef Scope\n(Move up and down to reveal more choices)\n")),(0,r.kt)("p",null,"The initial version includes built-in LoopBack 3 models too, because they don't have any direct counterparts in LoopBack 4. We would like to investigate different options for importing models based on LoopBack 3 built-in models. Depending on the findings, the behavior of this prompt may change in the future."),(0,r.kt)("p",null,"Using arrows and the spacebar, we select the ",(0,r.kt)("inlineCode",{parentName:"p"},"CoffeeShop")," model to import and confirm the selection."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"? Select models to import:\n \u25ef Role\n \u25ef ACL\n \u25ef Scope\n\u276f\u25c9 CoffeeShop\n \u25ef Application\n \u25ef AccessToken\n \u25ef User\n(Move up and down to reveal more choices)\n")),(0,r.kt)("p",null,"Now the generator migrates the model definition to the LoopBack 4 style, creates a TypeScript model file, and also updates the relevant index file."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"? Select models to import: CoffeeShop\nModel CoffeeShop will be created in src/models/coffee-shop.model.ts\n\nIgnoring the following unsupported settings: acls\n   create src/models/coffee-shop.model.ts\n   update src/models/index.ts\n")),(0,r.kt)("p",null,"The definition of ",(0,r.kt)("inlineCode",{parentName:"p"},"CoffeeShop")," model includes access-control configuration, which is not supported by LoopBack 4. The tool will warn about other unsupported fields besides ",(0,r.kt)("inlineCode",{parentName:"p"},"acls"),", for example ",(0,r.kt)("inlineCode",{parentName:"p"},"relations")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"methods"),"."),(0,r.kt)("p",null,"The initial release has a few more limitations beyond missing support for ",(0,r.kt)("inlineCode",{parentName:"p"},"acls"),". Please refer to our documentation at ",(0,r.kt)("a",{parentName:"p",href:"https://loopback.io/doc/en/lb4/Importing-LB3-models.html"},"Importing models from LoopBack 3 projects"),"."),(0,r.kt)("h2",{id:"whats-next"},"What's Next?"),(0,r.kt)("p",null,"We are releasing this early preview version to get feedback from you, our users! Please give the new command a try and let us know which parts of the migration experience we should improve next. Start by checking the known limitations described in the documentation and up-vote the linked GitHub issues. If there is no GitHub issue describing your feature yet then please open a new one."),(0,r.kt)("p",null,"Besides importing model definitions, we are also working on a declarative way of exposing models via REST APIs. This will allow LoopBack 4 applications to be written in a style that's closer to LoopBack 3, where REST API are built from a model definition file (e.g. ",(0,r.kt)("inlineCode",{parentName:"p"},"common/models/product.json"),") and model configuration file (",(0,r.kt)("inlineCode",{parentName:"p"},"server/model-config.json"),"). Once this feature is implemented, it will be possible to migrate both model definition and REST API from LoopBack 3. You can track our progress in GitHub issues ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/strongloop/loopback-next/issues/2036"},"loopback-next#2036")," and ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/strongloop/loopback-next/issues/3822"},"loopback-next#3822"),"."),(0,r.kt)("h2",{id:"call-to-action"},"Call to Action"),(0,r.kt)("p",null,"LoopBack's success depends on you! We appreciate your continuous support and engagement to make LoopBack even better and meaningful for your API creation experience. Here's how you can join us and help the project:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/strongloop/loopback-next/issues"},"Report issues"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/strongloop/loopback-next/blob/master/docs/CONTRIBUTING.md"},"Contribute")," code and documentation."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/strongloop/loopback-next/labels/good%20first%20issue"},'Open a pull request on one of our "good first issues"'),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/strongloop/loopback-next/issues/110"},"Join")," our user group.")))}d.isMDXComponent=!0}}]);