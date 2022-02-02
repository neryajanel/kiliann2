const { description } = require("../../package");

module.exports = {
  plugins: [
    ["@vuepress/back-to-top", true],
    ["@vuepress/medium-zoom", true],
    [
      "@vuepress/pwa", {
        serviceWorker: true,
        updatePopup: true,
      },
    ],
  ],
  locales: {
    "https://homelang.co/home/lang/all_lang/": {
      lang: "Todos los Idiomas Disponibles",
      // title: "jw2",
      // description: "El mejor lugar para Aprender todos los Idiomas gt, Xinca y Garifuna",
    },
    "/": {  
      lang: "Buglere", // this will be set as the lang attribute on <html>
      title: "Buglere",
      description: "El mejor lugar para Aprender Buglere gratis",
    },
    "/pa/embera/": {  
      lang: "Embera", // this will be set as the lang attribute on <html>
      title: "Embera",
      description: "El mejor lugar para Aprender Embera gratis",
    },
    "/pa/kuna/": {  
      lang: "Kuna", // this will be set as the lang attribute on <html>
      title: "Kuna",
      description: "El mejor lugar para Aprender Kuna gratis",
    },
    "/pa/ngabere/": {  
      lang: "Ngabere", // this will be set as the lang attribute on <html>
      title: "Ngabere",
      description: "El mejor lugar para Aprender Ngabere gratis",
    },
    "/pa/patois/": {  
      lang: "Patois", // this will be set as the lang attribute on <html>
      title: "Patois",
      description: "El mejor lugar para Aprender Patois gratis",
    },
    "/pa/teribe/": {  
      lang: "Teribe", // this will be set as the lang attribute on <html>
      title: "Teribe",
      description: "El mejor lugar para Aprender Teribe gratis",
    },
    "/pa/wounmeu/": {  
      lang: "Wounmeu", // this will be set as the lang attribute on <html>
      title: "Wounmeu",
      description: "El mejor lugar para Aprender Wounmeu gratis",
    },
    "/mx/chol/": {  
      lang: "Chol", // this will be set as the lang attribute on <html>
      title: "Chol",
      description: "El mejor lugar para Aprender Chol gratis",
    },
    "/mx/chontal/": {  
      lang: "Chontal", // this will be set as the lang attribute on <html>
      title: "Chontal",
      description: "El mejor lugar para Aprender Chontal gratis",
    },
    "/mx/cucapa/": {  
      lang: "Cucapa", // this will be set as the lang attribute on <html>
      title: "Cucapa",
      description: "El mejor lugar para Aprender Cucapa gratis",
    },
    "/mx/huasteco/": {  
      lang: "Huasteco", // this will be set as the lang attribute on <html>
      title: "Huasteco",
      description: "El mejor lugar para Aprender Huasteco gratis",
    },
    "/mx/huave/": {  
      lang: "Huave", // this will be set as the lang attribute on <html>
      title: "Huave",
      description: "El mejor lugar para Aprender Huave gratis",
    },
    "/mx/kickapoo/": {  
      lang: "Kickapoo", // this will be set as the lang attribute on <html>
      title: "Kickapoo",
      description: "El mejor lugar para Aprender Kickapoo gratis",
    },
    "/mx/kiliwa/": {  
      lang: "Kiliwa", // this will be set as the lang attribute on <html>
      title: "Kiliwa",
      description: "El mejor lugar para Aprender Kiliwa gratis",
    },
    "/mx/kuahl/": {  
      lang: "Kuahl", // this will be set as the lang attribute on <html>
      title: "Kuahl",
      description: "El mejor lugar para Aprender Kuahl gratis",
    },
    "/mx/kumiai/": {  
      lang: "Kumiai", // this will be set as the lang attribute on <html>
      title: "Kumiai",
      description: "El mejor lugar para Aprender Kumiai gratis",
    },
    "/mx/lacandon/": {  
      lang: "Lacandón", // this will be set as the lang attribute on <html>
      title: "Lacandón",
      description: "El mejor lugar para Aprender Lacandón gratis",
    },
    "/mx/paipai/": {  
      lang: "Paipai", // this will be set as the lang attribute on <html>
      title: "Paipai",
      description: "El mejor lugar para Aprender Paipai gratis",
    },
    "/mx/qatok/": {  
      lang: "Qatok", // this will be set as the lang attribute on <html>
      title: "Qatok",
      description: "El mejor lugar para Aprender Qatok gratis",
    },
    "/mx/tsotsil/": {  
      lang: "Tsotsil", // this will be set as the lang attribute on <html>
      title: "Tsotsil",
      description: "El mejor lugar para Aprender Tsotsil gratis",
    },
    "/mx/zoque/": {  
      lang: "Zoque", // this will be set as the lang attribute on <html>
      title: "Zoque",
      description: "El mejor lugar para Aprender Zoque gratis",
    },
  },

  head: [
    ["link", { rel: "icon", href: `/logo.png` }],
    ["link", { rel: "manifest", href: "/manifest.json" }],
    ["meta", { name: "theme-color", content: "#3eaf7c" }],
    ["meta", { name: "apple-mobile-web-app-capable", content: "yes" }],
    [
      "meta",
      { name: "apple-mobile-web-app-status-bar-style", content: "black" },
    ],
    [
      "link",
      { rel: "apple-touch-icon", href: `/icons/apple-touch-icon-152x152.png` },
    ],
    [
      "link",
      {
        rel: "mask-icon",
        href: "/icons/safari-pinned-tab.svg",
        color: "#3eaf7c",
      },
    ],
    [
      "meta",
      {
        name: "msapplication-TileImage",
        content: "/icons/msapplication-icon-144x144.png",
      },
    ],
    ["meta", { name: "msapplication-TileColor", content: "#000000" }],
  ],

  themeConfig: {
    locales: {     
      "/": {
        label: "Buglere",
        selectText: "Buglere",
        nav: require("./nav/buglere"),
        sidebar: {
          "/buglere": [
            /* ... */
          ],
          "/buglere/guide/": [
            /* ... */
          ],
        },
      },
      "/pa/embera/": {
        label: "Embera",
        selectText: "Embera",
        nav: require("./nav/embera"),
        sidebar: {
          "/pa/embera": [
            /* ... */
          ],
          "/pa/embera/guide/": [
            /* ... */
          ],
        },
      },
      "/pa/kuna/": {
        label: "Kuna",
        selectText: "Kuna",
        nav: require("./nav/kuna"),
        sidebar: {
          "/pa/kuna": [
            /* ... */
          ],
          "/pa/kuna/guide/": [
            /* ... */
          ],
        },
      },
      "/pa/ngabere/": {
        label: "Ngabere",
        selectText: "Ngabere",
        nav: require("./nav/ngabere"),
        sidebar: {
          "/pa/ngabere": [
            /* ... */
          ],
          "/pa/ngabere/guide/": [
            /* ... */
          ],
        },
      },
      "/pa/patois/": {
        label: "Patois",
        selectText: "Patois",
        nav: require("./nav/patois"),
        sidebar: {
          "/pa/patois": [
            /* ... */
          ],
          "/pa/patois/guide/": [
            /* ... */
          ],
        },
      },
      "/pa/teribe/": {
        label: "Teribe",
        selectText: "Teribe",
        nav: require("./nav/teribe"),
        sidebar: {
          "/pa/teribe": [
            /* ... */
          ],
          "/pa/teribe/guide/": [
            /* ... */
          ],
        },
      },
      "/pa/wounmeu/": {
        label: "Wounmeu",
        selectText: "Wounmeu",
        nav: require("./nav/wounmeu"),
        sidebar: {
          "/pa/wounmeu": [
            /* ... */
          ],
          "/pa/wounmeu/guide/": [
            /* ... */
          ],
        },
      },
      "/mx/chol/": {
        label: "Chol",
        selectText: "Chol",
        nav: require("./nav/chol"),
        sidebar: {
          "/mx/chol": [
            /* ... */
          ],
          "/mx/chol/guide/": [
            /* ... */
          ],
        },
      },
      "/mx/chontal/": {
        label: "Chontal",
        selectText: "Chontal",
        nav: require("./nav/chontal"),
        sidebar: {
          "/mx/chontal": [
            /* ... */
          ],
          "/mx/chontal/guide/": [
            /* ... */
          ],
        },
      },
      "/mx/cucapa/": {
        label: "Cucapa",
        selectText: "Cucapa",
        nav: require("./nav/cucapa"),
        sidebar: {
          "/mx/cucapa": [
            /* ... */
          ],
          "/mx/cucapa/guide/": [
            /* ... */
          ],
        },
      },
      "/mx/huasteco/": {
        label: "Huasteco",
        selectText: "Huasteco",
        nav: require("./nav/huasteco"),
        sidebar: {
          "/mx/huasteco": [
            /* ... */
          ],
          "/mx/huasteco/guide/": [
            /* ... */
          ],
        },
      },
      "/mx/huave/": {
        label: "Huave",
        selectText: "Huave",
        nav: require("./nav/huave"),
        sidebar: {
          "/mx/huave": [
            /* ... */
          ],
          "/mx/huave/guide/": [
            /* ... */
          ],
        },
      },
      "/mx/kickapoo/": {
        label: "Kickapoo",
        selectText: "Kickapoo",
        nav: require("./nav/kickapoo"),
        sidebar: {
          "/mx/kickapoo": [
            /* ... */
          ],
          "/mx/kickapoo/guide/": [
            /* ... */
          ],
        },
      },
      "/mx/kiliwa/": {
        label: "Kiliwa",
        selectText: "Kiliwa",
        nav: require("./nav/kiliwa"),
        sidebar: {
          "/mx/kiliwa": [
            /* ... */
          ],
          "/mx/kiliwa/guide/": [
            /* ... */
          ],
        },
      },
      "/mx/kuahl/": {
        label: "Kuahl",
        selectText: "Kuahl",
        nav: require("./nav/kuahl"),
        sidebar: {
          "/mx/kuahl": [
            /* ... */
          ],
          "/mx/kuahl/guide/": [
            /* ... */
          ],
        },
      },
      "/mx/kumiai/": {
        label: "Kumiai",
        selectText: "Kumiai",
        nav: require("./nav/kumiai"),
        sidebar: {
          "/mx/kumiai": [
            /* ... */
          ],
          "/mx/kumiai/guide/": [
            /* ... */
          ],
        },
      },
      "/mx/lacandon/": {
        label: "Lacandón",
        selectText: "Lacandón",
        nav: require("./nav/lacandon"),
        sidebar: {
          "/mx/lacandon": [
            /* ... */
          ],
          "/mx/lacandon/guide/": [
            /* ... */
          ],
        },
      },
      "/mx/paipai/": {
        label: "Paipai",
        selectText: "Paipai",
        nav: require("./nav/paipai"),
        sidebar: {
          "/mx/paipai": [
            /* ... */
          ],
          "/mx/paipai/guide/": [
            /* ... */
          ],
        },
      },
      "/mx/qatok/": {
        label: "Qatok",
        selectText: "Qatok",
        nav: require("./nav/qatok"),
        sidebar: {
          "/mx/qatok": [
            /* ... */
          ],
          "/mx/qatok/guide/": [
            /* ... */
          ],
        },
      },
      "/mx/tsotsil/": {
        label: "Tsotsil",
        selectText: "Tsotsil",
        nav: require("./nav/tsotsil"),
        sidebar: {
          "/mx/tsotsil": [
            /* ... */
          ],
          "/mx/tsotsil/guide/": [
            /* ... */
          ],
        },
      },
      "/mx/zoque/": {
        label: "Zoque",
        selectText: "Zoque",
        nav: require("./nav/zoque"),
        sidebar: {
          "/mx/zoque": [
            /* ... */
          ],
          "/mx/zoque/guide/": [
            /* ... */
          ],
        },
      },
    },
  },
}
