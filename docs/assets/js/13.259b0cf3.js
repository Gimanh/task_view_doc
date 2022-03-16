(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{411:function(t,s,a){"use strict";a.r(s);var e=a(56),r=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"directory-structure"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#directory-structure"}},[t._v("#")]),t._v(" Directory Structure")]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),a("p",[a("strong",[t._v("Application directory structure")])]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("app \n  config \n  log  \n  server  \n  sql  \n  vendor  \n  web  \n")])])])]),t._v(" "),a("p",[a("code",[t._v("app")]),t._v(" - application root directory"),a("br"),t._v(" "),a("code",[t._v("app/config")]),t._v(" - TaskView configuration folder, contain folders associated with module configuration"),a("br"),t._v(" "),a("code",[t._v("app/log")]),t._v(" - TaskView application log"),a("br"),t._v(" "),a("code",[t._v("app/server")]),t._v(" - TaskView application code"),a("br"),t._v(" "),a("code",[t._v("app/sql")]),t._v(" - TaskView database scripts"),a("br"),t._v(" "),a("code",[t._v("app/vendor")]),t._v(" - composer autoloader"),a("br"),t._v(" "),a("code",[t._v("app/web")]),t._v(" - TaskView "),a("strong",[t._v("root")]),t._v(" folder for web server, contain frontend files and index.php")]),t._v(" "),a("h2",{attrs:{id:"configuration"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#configuration"}},[t._v("#")]),t._v(" Configuration")]),t._v(" "),a("p",[t._v("TaskView "),a("code",[t._v("app/config")]),t._v(" folder contain modules configuration. All configuration folders contains own configuration for\nmodule. All folders have the same name as module. Module config has one, two or three files "),a("code",[t._v("options.json")]),t._v(",\n"),a("code",[t._v("routes.json")]),t._v(" and "),a("code",[t._v("middlewares.json")]),t._v(". File "),a("code",[t._v("options.json")]),t._v(" is required but "),a("code",[t._v("routes.json")]),t._v(" is optional. Some modules can\nhave routes, for describing routes we use "),a("code",[t._v("routes.json")]),t._v(" for middleware registration we use "),a("code",[t._v("middlewares.json")]),t._v(".")]),t._v(" "),a("h2",{attrs:{id:"db"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#db"}},[t._v("#")]),t._v(" DB")]),t._v(" "),a("p",[t._v("Application database module."),a("br"),t._v("\nAdd your connection info to "),a("code",[t._v("options.dsn")]),t._v(" property."),a("br"),t._v("\nAdd your credentials to "),a("code",[t._v("options.username")]),t._v(" and "),a("code",[t._v("options.password")]),t._v(".")]),t._v(" "),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[t._v("app/config/DB/options.json\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"class"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"ZXC\\\\Modules\\\\DB\\\\DB"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"defer"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"options"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"dsn"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("\"pgsql:host=localhost;dbname=task_view_server;options='--client_encoding=UTF8'\"")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"username"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"test_user"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"password"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"123456"')]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h2",{attrs:{id:"mail"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#mail"}},[t._v("#")]),t._v(" Mail")]),t._v(" "),a("p",[t._v("Application mail module. Allows sending conformation email, password recovery email and others. Add your credentials\ninto options.")]),t._v(" "),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"class"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"ZXC\\\\Modules\\\\Mailer\\\\Mail"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"defer"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"options"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"host"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('""')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"port"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2525")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"username"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('""')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"password"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('""')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"encryption"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"tls"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"fromName"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"TaskView"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"fromEmail"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('""')]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h2",{attrs:{id:"auth"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#auth"}},[t._v("#")]),t._v(" Auth")]),t._v(" "),a("p",[t._v("Application "),a("code",[t._v("Auth")]),t._v(" module.\nPlease change following properties in options.json\n"),a("code",[t._v("options.authTypeProviderOptions.secret")]),t._v(" - secret key for JWT token."),a("br"),t._v(" "),a("code",[t._v("options.authTypeProviderOptions.accessLifeTime")]),t._v(" - Access token lifetime."),a("br"),t._v(" "),a("code",[t._v("options.authTypeProviderOptions.refreshLifetime")]),t._v(" - Refresh token lifetime."),a("br"),t._v(" "),a("code",[t._v("options.email.redirectAfterConfirm")]),t._v(" - Url for redirect after user registration.")])])}),[],!1,null,null,null);s.default=r.exports}}]);