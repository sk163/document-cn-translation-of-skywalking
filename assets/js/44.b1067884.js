(window.webpackJsonp=window.webpackJsonp||[]).push([[44],{208:function(t,e,s){"use strict";s.r(e);var n=s(0),a=Object(n.a)({},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"content"},[t._m(0),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),t._m(3),t._v(" "),s("p",[t._v("报警规则主要有以下几点：")]),t._v(" "),t._m(4),t._v(" "),t._m(5),t._m(6),t._v(" "),t._m(7),t._v(" "),t._m(8),t._v(" "),s("p",[t._v("这些度量名称定义在 "),s("router-link",{attrs:{to:"./../../guides/backend-oal-scripts.html"}},[t._v("OAL 脚本")]),t._v("中, 现在，来自"),s("strong",[t._v("Service")]),t._v(", "),s("strong",[t._v("Service Instance")]),t._v(", "),s("strong",[t._v("Endpoint")]),t._v("的度量可以用于告警，我们会在后期版本中进行扩展。")],1),t._v(" "),s("p",[t._v("如果你希望有其它的告警场景，请提交issue或pr。")])])},[function(){var t=this.$createElement,e=this._self._c||t;return e("h1",{attrs:{id:"告警"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#告警","aria-hidden":"true"}},[this._v("#")]),this._v(" 告警")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("告警的核心由一组规则驱动，这些规则定义在"),e("code",[this._v("config/ Alarm -settings.yml")]),this._v("文件中。\n告警规则的定义分为两部分。")])},function(){var t=this.$createElement,e=this._self._c||t;return e("ol",[e("li",[this._v("告警规则。它们定义了应该如何触发度量警报，应该考虑什么条件。")]),this._v(" "),e("li",[this._v("网络钩子。当警告触发时，哪些服务终端需要被告知。")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"规则"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#规则","aria-hidden":"true"}},[this._v("#")]),this._v(" 规则")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ul",[s("li",[s("strong",[t._v("Rule name")]),t._v("。在告警信息中显示的唯一名称。必须以"),s("code",[t._v("_rule")]),t._v("结尾。")]),t._v(" "),s("li",[s("strong",[t._v("Indicator name")]),t._v("。 也是oal脚本中的度量名。只支持long,double和int类型。详情见\n"),s("a",{attrs:{href:"#%E6%89%80%E6%9C%89%E5%8F%AF%E8%83%BD%E7%9A%84%E5%BA%A6%E9%87%8F%E5%90%8D%E7%A7%B0%E5%88%97%E8%A1%A8"}},[t._v("所有可能的度量名称列表")]),t._v(".")]),t._v(" "),s("li",[s("strong",[t._v("Include names")]),t._v("。其下的实体名称都在此规则中。比如服务名，终端名。")]),t._v(" "),s("li",[s("strong",[t._v("Threshold")]),t._v("。阈值。")]),t._v(" "),s("li",[s("strong",[t._v("OP")]),t._v("。 操作符, 支持 "),s("code",[t._v(">")]),t._v(", "),s("code",[t._v("<")]),t._v(", "),s("code",[t._v("=")]),t._v("。欢迎贡献所有的操作符。")]),t._v(" "),s("li",[s("strong",[t._v("Period")]),t._v(".。多久告警规则需要被核实一下。这是一个时间窗口，与后端部署环境时间相匹配。")]),t._v(" "),s("li",[s("strong",[t._v("Count")]),t._v("。 在一个Period窗口中，如果"),s("strong",[t._v("value")]),t._v("s超过Threshold值（按op），达到Count值，需要发送警报。")]),t._v(" "),s("li",[s("strong",[t._v("Silence period")]),t._v("。在时间N中触发报警后，在"),s("strong",[t._v("TN -> TN + period")]),t._v("这个阶段不告警。 默认情况下，它和"),s("strong",[t._v("Period")]),t._v("一样，这意味着相同的告警（在同一个Indicator name拥有相同的Id）在同一个Period内只会触发一次。")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"language-yaml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-yaml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("rules")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Rule unique name, must be ended with `_rule`.")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("endpoint_percent_rule")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Indicator value need to be long, double or int")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("indicator-name")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" endpoint_percent\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("threshold")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("75")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("op")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" <\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# The length of time to evaluate the metric")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("period")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# How many times after the metric match the condition, will trigger alarm")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("count")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# How many times of checks, the alarm keeps silence after alarm triggered, default as same as period.")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("silence-period")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),t._v("\n    \n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("service_percent_rule")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("indicator-name")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" service_percent\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# [Optional] Default, match all services in this indicator")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("include-names")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" service_a\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" service_b\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("threshold")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("85")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("op")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" <\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("period")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("count")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),t._v("\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"默认告警规则"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#默认告警规则","aria-hidden":"true"}},[this._v("#")]),this._v(" 默认告警规则")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("为了方便，我们在发行版中提供了默认的"),e("code",[this._v("alarm setting.yml")]),this._v("文件，包括以下规则\n1.过去3分钟内服务平均响应时间超过1秒。\n1.服务成功率在过去2分钟内低于80%。\n1.服务90%响应时间在过去3分钟内低于1000毫秒.\n1.服务实例在过去2分钟内的平均响应时间超过1秒。\n1.端点平均响应时间过去2分钟超过1秒。")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"所有可能的度量名称列表"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#所有可能的度量名称列表","aria-hidden":"true"}},[this._v("#")]),this._v(" 所有可能的度量名称列表")])}],!1,null,null,null);e.default=a.exports}}]);