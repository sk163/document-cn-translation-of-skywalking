(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{242:function(t,e,a){"use strict";a.r(e);var s=a(0),r=Object(s.a)({},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"content"},[t._m(0),t._v(" "),a("p",[t._v("SkyWalking 已经提供了多种存储解决方案. 在本文档中, 您可以学习如何轻松实现新存储.")]),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),t._m(3),t._m(4),t._v(" "),a("p",[t._v("下面是所有数据存储所需实现的 DAO 接口")]),t._v(" "),t._m(5),t._v(" "),t._m(6),t._v(" "),t._m(7),t._v(" "),t._m(8),t._v(" "),t._m(9),t._v(" "),t._m(10),t._v(" "),a("p",[t._v("您不必为了实现数据存储而克隆主托管库, 您可以轻松地依赖我们的 Apache 版本. 看一下 "),a("a",{attrs:{href:"https://github.com/OpenSkywalking/SkyWalking-With-Es5x-Storage",target:"_blank",rel:"noopener noreferrer"}},[t._v("OpenSkywalking/SkyWalking-With-Es5x-Storage"),a("OutboundLink")],1),t._v(" 仓库, SkyWalking v6 重新发布 ElasticSearch 5 TCP 链接数据存储的实现.")])])},[function(){var t=this.$createElement,e=this._self._c||t;return e("h1",{attrs:{id:"数据存储扩展"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#数据存储扩展","aria-hidden":"true"}},[this._v("#")]),this._v(" 数据存储扩展")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"定义您的存储提供者"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#定义您的存储提供者","aria-hidden":"true"}},[this._v("#")]),this._v(" 定义您的存储提供者")])},function(){var t=this.$createElement,e=this._self._c||t;return e("ol",[e("li",[this._v("定义一个类扩展 "),e("code",[this._v("org.apache.skywalking.oap.server.library.module.ModuleProvider")]),this._v(".")]),this._v(" "),e("li",[this._v("让此存储提供者继承存储模块("),e("code",[this._v("StorageModule")]),this._v(").")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"language-java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@Override")]),t._v(" \n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Class")]),a("span",{pre:!0,attrs:{class:"token generics"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("extends")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ModuleDefine")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("module")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("StorageModule")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"实现所有-dao-接口"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#实现所有-dao-接口","aria-hidden":"true"}},[this._v("#")]),this._v(" 实现所有 DAO 接口")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ol",[a("li",[t._v("IServiceInventoryCacheDAO")]),t._v(" "),a("li",[t._v("IServiceInstanceInventoryCacheDAO")]),t._v(" "),a("li",[t._v("H2EndpointInventoryCacheDAO")]),t._v(" "),a("li",[t._v("H2NetworkAddressInventoryCacheDAO")]),t._v(" "),a("li",[t._v("IBatchDAO")]),t._v(" "),a("li",[t._v("StorageDAO")]),t._v(" "),a("li",[t._v("IRegisterLockDAO")]),t._v(" "),a("li",[t._v("H2TopologyQueryDAO")]),t._v(" "),a("li",[t._v("IMetricQueryDAO")]),t._v(" "),a("li",[t._v("ITraceQueryDAO")]),t._v(" "),a("li",[t._v("IMetadataQueryDAO")]),t._v(" "),a("li",[t._v("IAggregationQueryDAO")]),t._v(" "),a("li",[t._v("IAlarmQueryDAO")]),t._v(" "),a("li",[t._v("IHistoryDeleteDAO")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"注册所有的-service-实现"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#注册所有的-service-实现","aria-hidden":"true"}},[this._v("#")]),this._v(" 注册所有的 service 实现")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("在 "),e("code",[this._v("public void prepare()")]),this._v(" 方法中, 使用 "),e("code",[this._v("this#registerServiceImplementation")]),this._v(" 方法去注册绑定您的接口实现.")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"实例"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#实例","aria-hidden":"true"}},[this._v("#")]),this._v(" 实例")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("code",[this._v("org.apache.skywalking.oap.server.storage.plugin.elasticsearch.StorageModuleElasticsearchProvider")]),this._v(" 或 "),e("code",[this._v("org.apache.skywalking.oap.server.storage.plugin.jdbc.mysql.MySQLStorageProvider")]),this._v(" 就是一个很好的例子.")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"重新发布新的数据存储实现"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#重新发布新的数据存储实现","aria-hidden":"true"}},[this._v("#")]),this._v(" 重新发布新的数据存储实现")])}],!1,null,null,null);e.default=r.exports}}]);