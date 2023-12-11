(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{631:function(t,s,a){"use strict";a.r(s);var e=a(17),r=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"generate-ac-by-upp"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#generate-ac-by-upp"}},[t._v("#")]),t._v(" Generate AC By UPP")]),t._v(" "),a("p",[t._v("Simlessly API (v1.0.0): Generate AC By UPP")]),t._v(" "),a("h2",{attrs:{id:"post"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#post"}},[t._v("#")]),t._v(" POST")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://rsp.simlessly.com/api/v1/profile/addByUpp",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://rsp.simlessly.com/api/v1/profile/addByUpp"),a("OutboundLink")],1)]),t._v(" "),a("h2",{attrs:{id:"parameters-of-request"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#parameters-of-request"}},[t._v("#")]),t._v(" Parameters of Request")]),t._v(" "),a("table",[a("tr",[a("th",[t._v("Name")]),t._v(" "),a("th",[t._v("Type")]),t._v(" "),a("th",[t._v("MOC")]),t._v(" "),a("th",{staticStyle:{width:"200px"}},[t._v("Description")]),t._v(" "),a("th",{staticStyle:{width:"450px"}},[t._v("Example")])]),t._v(" "),a("tr",[a("td",[t._v("iccid")]),t._v(" "),a("td",[t._v("String")]),t._v(" "),a("td",[t._v("Mandatory")]),t._v(" "),a("td",[t._v("ICCID (length: 19-20)")]),t._v(" "),a("td",[t._v("89860468152080349618")])]),t._v(" "),a("tr",[a("td",[t._v("imsi")]),t._v(" "),a("td",[t._v("String")]),t._v(" "),a("td",[t._v("Mandatory")]),t._v(" "),a("td",[t._v("IMSI (length: 15) ")]),t._v(" "),a("td",[t._v("460048867619618")])]),t._v(" "),a("tr",[a("td",[t._v("upp")]),t._v(" "),a("td",[t._v("String")]),t._v(" "),a("td",[t._v("Mandatory")]),t._v(" "),a("td",[t._v("KI (32 bits, HEX) ")]),t._v(" "),a("td",[t._v("6BE2053E8580B135CD43443380DB7111")])]),t._v(" "),a("tr",[a("td",[t._v("configName")]),t._v(" "),a("td",[t._v("String")]),t._v(" "),a("td",[t._v("Mandatory")]),t._v(" "),a("td",[t._v("Please select the configuration type as 'UPP' for optimization.")]),t._v(" "),a("td",[t._v("UPP001")])])]),t._v(" "),a("h2",{attrs:{id:"example-of-request"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#example-of-request"}},[t._v("#")]),t._v(" Example of Request")]),t._v(" "),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"iccid"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('" 89860468152080349618"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"imsi"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('" 460048867619618"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"upp"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('" 6BE2053E8580B135CD43443380DB7111"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"configName"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('" UPP001"')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h2",{attrs:{id:"parameters-of-response"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#parameters-of-response"}},[t._v("#")]),t._v(" Parameters of Response")]),t._v(" "),a("table",[a("tr",[a("th",[t._v("Name")]),t._v(" "),a("th",[t._v("Type")]),t._v(" "),a("th",[t._v("MOC")]),t._v(" "),a("th",[t._v("Description")]),t._v(" "),a("th",[t._v("Example")])]),t._v(" "),a("tr",[a("td",[t._v("iccid")]),t._v(" "),a("td",[t._v("String")]),t._v(" "),a("td",[t._v("Mandatory")]),t._v(" "),a("td",[t._v("ICCID (length: 19-20)")]),t._v(" "),a("td",[t._v("89860468152080349618")])]),t._v(" "),a("tr",[a("td",[t._v("activationCode")]),t._v(" "),a("td",[t._v("String")]),t._v(" "),a("td",[t._v("Optional")]),t._v(" "),a("td",[t._v("AC")]),t._v(" "),a("td",[t._v("1$rsp-eu.redteamobile.com$CE261FCF57EFCB7C492DD8ECF43C5ADD")])])]),t._v(" "),a("h2",{attrs:{id:"example-of-response"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#example-of-response"}},[t._v("#")]),t._v(" Example of Response")]),t._v(" "),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"obj"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"iccid"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"89860468152080348700"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"activationCode"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"1$rsp-eu.redteamobile.com$CE261FCF57EFCB7C492DD8ECF43C5ADD"')]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"success"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"msg"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('""')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"code"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"00000"')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])])}),[],!1,null,null,null);s.default=r.exports}}]);