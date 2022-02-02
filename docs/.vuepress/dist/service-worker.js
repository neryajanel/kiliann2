/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "ea5130e6a4a55e6015a7f87e98218b86"
  },
  {
    "url": "assets/css/0.styles.31bfc00c.css",
    "revision": "7b69551e0589498093330439bdda9ec3"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.e48438d1.js",
    "revision": "33ae59396c5b948912048fec9936e434"
  },
  {
    "url": "assets/js/100.fcfb81c2.js",
    "revision": "e0a6548e266f9c58c6f85b80a3a5a0f0"
  },
  {
    "url": "assets/js/101.6ba72601.js",
    "revision": "1ca9329391652f84e9949e69b67f84d0"
  },
  {
    "url": "assets/js/102.f7b692df.js",
    "revision": "432950a4c43ad27defadeedf12586d3d"
  },
  {
    "url": "assets/js/103.33df9add.js",
    "revision": "01bde797d124a604c4a5f6ecb8e01418"
  },
  {
    "url": "assets/js/104.e07682e4.js",
    "revision": "1408c0425db37fc09e86f929d1243c0a"
  },
  {
    "url": "assets/js/105.25ce874f.js",
    "revision": "903bc593a15d9b53e7b057a825ab3dc6"
  },
  {
    "url": "assets/js/106.c31d6b67.js",
    "revision": "911ab62a7d46a133c9df252841f656af"
  },
  {
    "url": "assets/js/107.71dcf620.js",
    "revision": "3729fa15a26fe2def643da4b7e0e3e9f"
  },
  {
    "url": "assets/js/108.5c079bde.js",
    "revision": "20b2d57ae60c98681f678b6592956506"
  },
  {
    "url": "assets/js/109.31933737.js",
    "revision": "e921c14b43ab8ef0a6d636d1f0ce2d00"
  },
  {
    "url": "assets/js/11.e2c40dd6.js",
    "revision": "9c7c0290308ea1c0b1a88abe24d91df5"
  },
  {
    "url": "assets/js/110.04b02e4f.js",
    "revision": "4f20a7ba16f48045f16b981429f26977"
  },
  {
    "url": "assets/js/111.d3540803.js",
    "revision": "bdd76cd19b2c97b7bdc91dd01769b582"
  },
  {
    "url": "assets/js/112.1b48b2af.js",
    "revision": "80837b73600da85aa10813a3002f3daf"
  },
  {
    "url": "assets/js/113.704bd54f.js",
    "revision": "3a10ded66317dacb2650ff9fea7da45c"
  },
  {
    "url": "assets/js/114.3f94bffd.js",
    "revision": "dc389dc54b6a32fb2360f4041cfdf3b9"
  },
  {
    "url": "assets/js/115.162172de.js",
    "revision": "30fd84b242c734a31f74ed0c97c634c0"
  },
  {
    "url": "assets/js/116.e73115ac.js",
    "revision": "c3d10e877e666596d344f2d7a09f1b32"
  },
  {
    "url": "assets/js/117.8c0efbf3.js",
    "revision": "3b16b5bcac0b86bbcacc557126f5eb13"
  },
  {
    "url": "assets/js/118.d67ce3d1.js",
    "revision": "88711af00049291e2b0fcc9f44bacda8"
  },
  {
    "url": "assets/js/119.09887a35.js",
    "revision": "0c0ead0b125dd7dccd7b3c0cc7ca95dc"
  },
  {
    "url": "assets/js/12.443ba5c8.js",
    "revision": "4b34f5e277fc5f0c32de65e06e6a0e68"
  },
  {
    "url": "assets/js/120.22d2f6c8.js",
    "revision": "7471fe15f19ab107fcafa922f4215906"
  },
  {
    "url": "assets/js/121.7ffb4b97.js",
    "revision": "89445963e98a60d68825b660e710f336"
  },
  {
    "url": "assets/js/122.c7eec574.js",
    "revision": "60e6f915c4c4d1963a27b1d5e89d2c2c"
  },
  {
    "url": "assets/js/123.bb1397c6.js",
    "revision": "b0530858e5579c69c88c52f71ebaf0bd"
  },
  {
    "url": "assets/js/124.836dbcf6.js",
    "revision": "4cad8ff49977a59ee6d9580ae0bb4eaf"
  },
  {
    "url": "assets/js/125.af8b8e01.js",
    "revision": "a711bb04054601f9d88f742c0d719860"
  },
  {
    "url": "assets/js/126.dee3af62.js",
    "revision": "40f06ede6d1a2199fa22212ba44700bf"
  },
  {
    "url": "assets/js/127.12d97c79.js",
    "revision": "c1e42b85e52e9c32aed731f8a26f0721"
  },
  {
    "url": "assets/js/128.9e510e59.js",
    "revision": "3e882f2e0834b0c8c74137a1fc35b21e"
  },
  {
    "url": "assets/js/129.c41706e7.js",
    "revision": "cff7de7f0a59151886216aa7da048cba"
  },
  {
    "url": "assets/js/13.b3268481.js",
    "revision": "51db59ef875965e8e0b78a12f01b4dd5"
  },
  {
    "url": "assets/js/130.9263e59f.js",
    "revision": "9b5bcc38a7dc30dc8676c5483a4792d9"
  },
  {
    "url": "assets/js/131.bf21c859.js",
    "revision": "d3724fd4e86becaf294c34a840488a32"
  },
  {
    "url": "assets/js/132.662c863e.js",
    "revision": "8190bb75d1d8a39d7a7fd3de59cb52e8"
  },
  {
    "url": "assets/js/133.b2135530.js",
    "revision": "3bc513d3c566cd87facef4ebf553f4c6"
  },
  {
    "url": "assets/js/134.c7de0dc3.js",
    "revision": "e2dea2156a1ea83425ff7a5e4e417f56"
  },
  {
    "url": "assets/js/135.85d6ed9e.js",
    "revision": "48494a80b740f642b62b52e122b2a30f"
  },
  {
    "url": "assets/js/136.35baf577.js",
    "revision": "ea5515f2b653a43b751e3376bd489739"
  },
  {
    "url": "assets/js/137.1ba7c97a.js",
    "revision": "b224207e16ae52141702422f4fef3d8a"
  },
  {
    "url": "assets/js/138.7ed7d257.js",
    "revision": "18243b7b393de22205d19fb610afbad6"
  },
  {
    "url": "assets/js/139.f62a243c.js",
    "revision": "d907aacaae097eee47b2cd4d261bd2a9"
  },
  {
    "url": "assets/js/14.1ad2e918.js",
    "revision": "13842dc7da88f38953655de68ca1d019"
  },
  {
    "url": "assets/js/140.73293072.js",
    "revision": "16362440537334a9d3f6f874886933d8"
  },
  {
    "url": "assets/js/141.ceb16758.js",
    "revision": "dca99619a2e1a4e6fdfcdf754527c46f"
  },
  {
    "url": "assets/js/142.82ad714f.js",
    "revision": "67b1248b33412a0499d47af9a40443c2"
  },
  {
    "url": "assets/js/143.857358a7.js",
    "revision": "0c76462d65ddd70c1d4e067e01bf4696"
  },
  {
    "url": "assets/js/144.ed99d1b4.js",
    "revision": "213de701c93bac66a7302ef768ae0a2e"
  },
  {
    "url": "assets/js/145.32727847.js",
    "revision": "0697ceddd0441ef3a99b850d73fbbcdd"
  },
  {
    "url": "assets/js/146.616e2fac.js",
    "revision": "4e3a9ce1e9db1b1cba32d546a0157a3c"
  },
  {
    "url": "assets/js/147.f8edbd01.js",
    "revision": "51eea2d5a7aa7512639a8096ec1adda6"
  },
  {
    "url": "assets/js/148.ff8e58ea.js",
    "revision": "87c4dc6eee81e7de8878de1f4dd8be45"
  },
  {
    "url": "assets/js/149.87a4f749.js",
    "revision": "dafca41491f014518bed361e390b721d"
  },
  {
    "url": "assets/js/15.84b02a0e.js",
    "revision": "5bc89d4da7e296c573eec0ae9257ebef"
  },
  {
    "url": "assets/js/150.af0f6235.js",
    "revision": "01294b4f36ec56da6439631eb8ff412d"
  },
  {
    "url": "assets/js/151.5305f191.js",
    "revision": "0e2839aecf1f2f8564714ac6a878ff4f"
  },
  {
    "url": "assets/js/152.bccb597f.js",
    "revision": "9c485dce96d42cbc8f2022e31f5a18dd"
  },
  {
    "url": "assets/js/153.8aa66f33.js",
    "revision": "fdeb37043f185aabbf73e5b684f9e273"
  },
  {
    "url": "assets/js/154.2a477598.js",
    "revision": "12599ac36e6995f1fcb45d2042671df8"
  },
  {
    "url": "assets/js/155.8b5ef255.js",
    "revision": "5d5c982c1c4fa77484c0b0fc2e286f7d"
  },
  {
    "url": "assets/js/156.e62ca3c2.js",
    "revision": "2e07aef414297acf500e7603f20a44c9"
  },
  {
    "url": "assets/js/157.a23f2031.js",
    "revision": "ef77c11ca50cb1a07128b733f5c26534"
  },
  {
    "url": "assets/js/158.fe7c6a50.js",
    "revision": "ecd07fe3d39fc0259af47e806cb2c562"
  },
  {
    "url": "assets/js/159.6e8229a1.js",
    "revision": "1747c76ef3c543196e96b71a295335ee"
  },
  {
    "url": "assets/js/16.6ba57c45.js",
    "revision": "83bd9762169402b43a95616a6250d7cd"
  },
  {
    "url": "assets/js/160.29e5de52.js",
    "revision": "5a04875dc0d3e36f49fb5daacc946e85"
  },
  {
    "url": "assets/js/161.aab4da2c.js",
    "revision": "d98754b8e41430bbe830a950cb11cbb6"
  },
  {
    "url": "assets/js/162.f63adce7.js",
    "revision": "bf500106eb19580b90503b611f9cd2d4"
  },
  {
    "url": "assets/js/163.f0ba7e8b.js",
    "revision": "86617b585914283e95b57dac97430b1e"
  },
  {
    "url": "assets/js/164.8fecfc7a.js",
    "revision": "cb0ba7486f744aee5cd0c42e668197a0"
  },
  {
    "url": "assets/js/165.7bef7082.js",
    "revision": "d271f83fe7c266f3de09c394d01f85b6"
  },
  {
    "url": "assets/js/166.c3fd8cce.js",
    "revision": "98712bc3b9c197b7ef605d53e50a3283"
  },
  {
    "url": "assets/js/167.b10eb751.js",
    "revision": "202b82fbbdf95c2fc4f93874504bb744"
  },
  {
    "url": "assets/js/168.31afac5a.js",
    "revision": "5bf7227f4984dd4d1eede793d116debc"
  },
  {
    "url": "assets/js/169.e2edc61e.js",
    "revision": "49ff2fef327e0530b3b48b0765fb6446"
  },
  {
    "url": "assets/js/17.47dd70c1.js",
    "revision": "a51b01b8550be583ac9d96d13ab68f81"
  },
  {
    "url": "assets/js/170.669178a5.js",
    "revision": "ac5342d75925b6c60762431be2d3aa07"
  },
  {
    "url": "assets/js/171.08cbf8f0.js",
    "revision": "9208d3373d368e5e1e76f71bdda9cb32"
  },
  {
    "url": "assets/js/172.1e96c245.js",
    "revision": "ce4b7fdbcecd598570b9328491b9a728"
  },
  {
    "url": "assets/js/173.bb2cadd6.js",
    "revision": "d69d9ce39fa9118340c251a3c7d6713f"
  },
  {
    "url": "assets/js/174.2a042800.js",
    "revision": "9391e2f85f9fa34e6bac7aff38252a08"
  },
  {
    "url": "assets/js/175.ffdf5bbc.js",
    "revision": "ed1ed5c424f063f727153e553a601539"
  },
  {
    "url": "assets/js/176.e0d5125e.js",
    "revision": "ad3062b0e3ecf6e1e3086b34ffd480a8"
  },
  {
    "url": "assets/js/177.173d4131.js",
    "revision": "73674f0c070d7d61370fb4031977330e"
  },
  {
    "url": "assets/js/178.57399730.js",
    "revision": "35d4c136ff07bd54e4bb568b54c43c8c"
  },
  {
    "url": "assets/js/179.e74b853a.js",
    "revision": "123e76f777fc5aa318221c93c4475ce7"
  },
  {
    "url": "assets/js/18.cdc25fd8.js",
    "revision": "eda435bea182b0e2192bfdd12622c184"
  },
  {
    "url": "assets/js/180.793adbfb.js",
    "revision": "b6b8ac39c65559ba43438272e31b6421"
  },
  {
    "url": "assets/js/181.d10c445d.js",
    "revision": "a5341b1fdbc905f26a7348425d536e68"
  },
  {
    "url": "assets/js/182.86b83a50.js",
    "revision": "dfb0a6a02d7c0873142e73cfc6fcb466"
  },
  {
    "url": "assets/js/183.302e47ac.js",
    "revision": "8f97301a6154380234b52d0798000372"
  },
  {
    "url": "assets/js/184.36e0a6d6.js",
    "revision": "27930b12ef7771240e2c9cf41b42261e"
  },
  {
    "url": "assets/js/185.d33799e8.js",
    "revision": "f0f0cf22eb86e1e7352670998d28906d"
  },
  {
    "url": "assets/js/186.54a5b51b.js",
    "revision": "885047bfcb751f89909b91eb109044b7"
  },
  {
    "url": "assets/js/187.7644fee2.js",
    "revision": "76d97269508b260956011c1efa782177"
  },
  {
    "url": "assets/js/188.48db0c36.js",
    "revision": "5ed9f3418282e66dc6efe86a43a06a92"
  },
  {
    "url": "assets/js/189.f76bfbed.js",
    "revision": "57e1f9feffd42895d45cbc1b5274ea12"
  },
  {
    "url": "assets/js/19.b7bf03e0.js",
    "revision": "01d9353e614564fa65b321062e284a98"
  },
  {
    "url": "assets/js/190.13987831.js",
    "revision": "8c1eb490a9b440933a72febc09181c89"
  },
  {
    "url": "assets/js/191.9d38bf19.js",
    "revision": "80e9b8b2f275ede34c7a53de339306aa"
  },
  {
    "url": "assets/js/192.7be32e47.js",
    "revision": "6d14fb5d0134141fdd9f48c6bf363158"
  },
  {
    "url": "assets/js/193.edca1430.js",
    "revision": "848bca28fccfa6b10fae0d44e2e2bc70"
  },
  {
    "url": "assets/js/194.9f973bf9.js",
    "revision": "6b556181522968e2f10703127c19b6c1"
  },
  {
    "url": "assets/js/195.22599cb7.js",
    "revision": "26515917fd0845e4810d3632d2a10dd1"
  },
  {
    "url": "assets/js/196.dbc5b251.js",
    "revision": "ef7a6760b25d69d3b4e34aea2d25b069"
  },
  {
    "url": "assets/js/197.9bba91db.js",
    "revision": "1a0fc666bcadb748b9b8330d4e49a974"
  },
  {
    "url": "assets/js/198.a10be2e5.js",
    "revision": "c0802ced6d671552166f0978306e72e7"
  },
  {
    "url": "assets/js/199.95175c6b.js",
    "revision": "4f0260e8112a0b21f740a1513cd921ca"
  },
  {
    "url": "assets/js/2.c3b4a54b.js",
    "revision": "ee72fc2084673713d637298538c1310e"
  },
  {
    "url": "assets/js/20.4435e934.js",
    "revision": "bbe53c731997323a41362123b349ba79"
  },
  {
    "url": "assets/js/200.91cc1a71.js",
    "revision": "2018e5a1df4743ebd1fddb1c7d5132eb"
  },
  {
    "url": "assets/js/201.2c0c4491.js",
    "revision": "7b9addc7d9b1a8de34056532468e2058"
  },
  {
    "url": "assets/js/202.225bff1f.js",
    "revision": "a2132925bb71372b8df8b1e6ce93988c"
  },
  {
    "url": "assets/js/203.45fb3323.js",
    "revision": "c38bdf56dad868c1a87ea66b9574f78c"
  },
  {
    "url": "assets/js/204.0e48bcaf.js",
    "revision": "a67a9bc9ed963f9da1ffe4a928ec36fd"
  },
  {
    "url": "assets/js/205.4feb160b.js",
    "revision": "145140d1295d28aeeeb8d50d48b5c200"
  },
  {
    "url": "assets/js/206.938f7815.js",
    "revision": "a496dcf835458cdc0bf0ca43dc6ea8a2"
  },
  {
    "url": "assets/js/207.f55321bd.js",
    "revision": "5175068cb18753a0e5b3bbc99e607961"
  },
  {
    "url": "assets/js/208.37d87955.js",
    "revision": "65d8092c9e8465b32460683ad86d08d5"
  },
  {
    "url": "assets/js/209.796b8f80.js",
    "revision": "98bfc231356f004575badee762d77225"
  },
  {
    "url": "assets/js/21.8093fe00.js",
    "revision": "9e4229180342ad68938375f5222f810c"
  },
  {
    "url": "assets/js/210.4bcdaed6.js",
    "revision": "a4b51beea99e1aae07eda6720ab0e21a"
  },
  {
    "url": "assets/js/211.bf5d4391.js",
    "revision": "42cc5358ebb4a743339c2a1da1b19f82"
  },
  {
    "url": "assets/js/212.0fafa10c.js",
    "revision": "4518aca79baaf733719c4b2076154b44"
  },
  {
    "url": "assets/js/213.66feaa48.js",
    "revision": "3035ba726ed8d012ee1f6007f2b74f16"
  },
  {
    "url": "assets/js/214.10f44482.js",
    "revision": "aa31a85aa7e8dc04ce60ee5c120f3e30"
  },
  {
    "url": "assets/js/215.5a60c088.js",
    "revision": "22781c1fd9f680fd0a1b414b0f7c6d3a"
  },
  {
    "url": "assets/js/216.b6192818.js",
    "revision": "588d65eea7be933af2bf9ecc20202ee9"
  },
  {
    "url": "assets/js/217.589298e1.js",
    "revision": "bb4be160a1a640a045cdf9055e624ab2"
  },
  {
    "url": "assets/js/218.80e7d0c1.js",
    "revision": "25d757b920221562f9601dc10e53b013"
  },
  {
    "url": "assets/js/219.4f714b7b.js",
    "revision": "b632ec1f0f075a1f0dd863795c06c102"
  },
  {
    "url": "assets/js/22.cb965be8.js",
    "revision": "c2f2ec95deaae4fa0145d8bf08dd7cc1"
  },
  {
    "url": "assets/js/220.d7afeec1.js",
    "revision": "87cb66f1aab27687293841aee1a69d50"
  },
  {
    "url": "assets/js/221.fb550bc2.js",
    "revision": "324484210e7ac1b54bbff876b9dd21ca"
  },
  {
    "url": "assets/js/222.784e7d9b.js",
    "revision": "2c365783c1757ce74032dadf0e068595"
  },
  {
    "url": "assets/js/223.0c240ed8.js",
    "revision": "9c6ecec576fd74f0ab446ca41c21dec4"
  },
  {
    "url": "assets/js/224.e661f359.js",
    "revision": "76d9ba593b43c0af5594582d39c809e8"
  },
  {
    "url": "assets/js/225.0cd1b0a2.js",
    "revision": "931aa2540aefe50afec9237ff58fcf10"
  },
  {
    "url": "assets/js/226.921d83e5.js",
    "revision": "0499b16337aae26f703b3ea6ba0ff09d"
  },
  {
    "url": "assets/js/227.c2148878.js",
    "revision": "47f2f229e307d830ee601a2a98ffd6f4"
  },
  {
    "url": "assets/js/228.ab8de8ba.js",
    "revision": "55fb5c104807a861f0cbe687f0bddb04"
  },
  {
    "url": "assets/js/229.ad148b9f.js",
    "revision": "2c117cec986a34ff76e74ef35c3746bb"
  },
  {
    "url": "assets/js/23.f086bb56.js",
    "revision": "bb5a2883e52081cf3fe4fc59b610c09c"
  },
  {
    "url": "assets/js/230.8d9b0d87.js",
    "revision": "054d56e643377f40ffb87d6793bed873"
  },
  {
    "url": "assets/js/231.40038009.js",
    "revision": "f6f206660f5342cba18dba44c3ad6606"
  },
  {
    "url": "assets/js/232.01225761.js",
    "revision": "d8ed75df39af4757a52f5092615ee28b"
  },
  {
    "url": "assets/js/233.47ef978d.js",
    "revision": "6dccd1ce6a2476682854beee04e560d6"
  },
  {
    "url": "assets/js/234.756f1df3.js",
    "revision": "74aa2cf8c637c774b945d5ad06902e45"
  },
  {
    "url": "assets/js/235.69ce9764.js",
    "revision": "4032e8874aa37ca142e03457995c5655"
  },
  {
    "url": "assets/js/236.2b316d0d.js",
    "revision": "f3ecaf7d36bc5be24ee5e93875ad79a1"
  },
  {
    "url": "assets/js/237.c244cd1e.js",
    "revision": "4bc11d4eff679b2050952f6ed3fecc03"
  },
  {
    "url": "assets/js/238.a5512428.js",
    "revision": "9993084e758399b6870b41de3fe20eba"
  },
  {
    "url": "assets/js/239.b5230339.js",
    "revision": "e2f05d09db05db267b3292151c369abc"
  },
  {
    "url": "assets/js/24.9fd39506.js",
    "revision": "9d4b761594f85a7f6546cd9a8044a530"
  },
  {
    "url": "assets/js/240.86533419.js",
    "revision": "b71ebd1686f3339aab5268a65d0215e3"
  },
  {
    "url": "assets/js/241.112537c8.js",
    "revision": "0b474571ad49310ead572401ba5cb8fc"
  },
  {
    "url": "assets/js/242.9a8d2b31.js",
    "revision": "127b78fc6f9c2e553701a52559a7dfc9"
  },
  {
    "url": "assets/js/243.ed27ae01.js",
    "revision": "3dde6a169967ffe67adaca242ceaa853"
  },
  {
    "url": "assets/js/244.73c42b1d.js",
    "revision": "7c126069f8b80e640894664b937473bc"
  },
  {
    "url": "assets/js/245.d40dfbdf.js",
    "revision": "7bdef942fc9cba28a3fbc0dc6b7a1b8e"
  },
  {
    "url": "assets/js/246.f6e49cef.js",
    "revision": "2c74aac5830204612480b5757d109429"
  },
  {
    "url": "assets/js/247.a712c23d.js",
    "revision": "323477de5913b590d1d94a63d580e46c"
  },
  {
    "url": "assets/js/248.ce10f89e.js",
    "revision": "761102ab051db63b223fd4f367e62be9"
  },
  {
    "url": "assets/js/249.2b76c8b5.js",
    "revision": "6302ff36dda0dc7b4031a00150c5aa62"
  },
  {
    "url": "assets/js/25.bc2652d2.js",
    "revision": "8fddf24703a8f8832fb4154587c798fe"
  },
  {
    "url": "assets/js/250.546a5a21.js",
    "revision": "09b09f0e66fde3ddf0312bda52325158"
  },
  {
    "url": "assets/js/251.390d9a64.js",
    "revision": "7da43af16f8a47f8f5cecd955e916024"
  },
  {
    "url": "assets/js/252.fba04d81.js",
    "revision": "0e977ed23ff4607377cccdcc7fb153f0"
  },
  {
    "url": "assets/js/253.540b8cf8.js",
    "revision": "3cb73af35d2d5eae66250af658efe104"
  },
  {
    "url": "assets/js/254.046b4ab1.js",
    "revision": "1f521a683dc9573348219c85fc0ddd9e"
  },
  {
    "url": "assets/js/255.7461b722.js",
    "revision": "a0f7add96bfd70fc2fa14a012bed2fc4"
  },
  {
    "url": "assets/js/256.ae53de2f.js",
    "revision": "c3f1bf0b88ab692b5b913a5694e8c78a"
  },
  {
    "url": "assets/js/257.a080a611.js",
    "revision": "37b1e041c6252122015814c3bf48be21"
  },
  {
    "url": "assets/js/258.cedb2c64.js",
    "revision": "1164df3706564f72797c6aecb36fd555"
  },
  {
    "url": "assets/js/259.5f22c9b1.js",
    "revision": "585c67dd3811c3dc30a0f146999cb34b"
  },
  {
    "url": "assets/js/26.0346bf9a.js",
    "revision": "db31b638e0082569b9ddf98805849c7a"
  },
  {
    "url": "assets/js/260.8eae3fe4.js",
    "revision": "5dc2df6599b7cf3cfd76b890957cd826"
  },
  {
    "url": "assets/js/261.565039cf.js",
    "revision": "2c2bd5899dad2a4f5d9c78bc04dbc330"
  },
  {
    "url": "assets/js/262.1f61fb90.js",
    "revision": "ca53d65d2a28a6d105a54f1befaf3e14"
  },
  {
    "url": "assets/js/263.47efa6fc.js",
    "revision": "2ecbf96c3bdfdd5bdade37d209b93435"
  },
  {
    "url": "assets/js/264.9df8af92.js",
    "revision": "4915940ad7f762c96240406336b7d55c"
  },
  {
    "url": "assets/js/265.9278b365.js",
    "revision": "0e824794399649c0c88f0cd283389589"
  },
  {
    "url": "assets/js/266.b55d212e.js",
    "revision": "878517d0f85d4ec7214d5e3f3c16a616"
  },
  {
    "url": "assets/js/267.e450dac9.js",
    "revision": "590c2eacb7191d6c0c92b5ce43d60f13"
  },
  {
    "url": "assets/js/268.9f154033.js",
    "revision": "bc51fa6b9d169f3d56a6cc9cf94cf6cc"
  },
  {
    "url": "assets/js/269.e6a8ea9f.js",
    "revision": "8a69d3715f4982d60871d273ad2823f7"
  },
  {
    "url": "assets/js/27.31c0de68.js",
    "revision": "8fc6dabd2d7e93dc5f82d56164e32711"
  },
  {
    "url": "assets/js/270.4fb7cec9.js",
    "revision": "e39f0617500d6ca80c1b4f5b5fef87b8"
  },
  {
    "url": "assets/js/271.2ef71cbc.js",
    "revision": "6eae4d5e4c88e9deb9b1a96ef9cc270b"
  },
  {
    "url": "assets/js/272.a9a9234c.js",
    "revision": "580c0838f6ef30df48874b9aee04a5a1"
  },
  {
    "url": "assets/js/273.ebc70968.js",
    "revision": "fb73b53d08152a6e2c3ad9ccc1932341"
  },
  {
    "url": "assets/js/274.d50909c7.js",
    "revision": "cabd611f4348c4245404a4be0b10c329"
  },
  {
    "url": "assets/js/275.907f510d.js",
    "revision": "d3118f965be0b068f6321f817cd24cf7"
  },
  {
    "url": "assets/js/276.77122ba0.js",
    "revision": "ebbeabc32ac3514d80c814dcb34bdcf1"
  },
  {
    "url": "assets/js/277.36f4aac6.js",
    "revision": "cf4692a99842e6941747fcb3c8dc3954"
  },
  {
    "url": "assets/js/278.c08c860d.js",
    "revision": "21a3cae911b1a6848a8ac71bf0ed42a0"
  },
  {
    "url": "assets/js/279.75db2dab.js",
    "revision": "1a4663b4d8ffe0bf8c4479e9cb93c464"
  },
  {
    "url": "assets/js/28.43043709.js",
    "revision": "4fd0f1e4de8d35ade3b3a4eb68038505"
  },
  {
    "url": "assets/js/280.d885f620.js",
    "revision": "7bc62d953fb8be6a50ac8650c8acfb37"
  },
  {
    "url": "assets/js/281.2050aff0.js",
    "revision": "9df5e03990698932769a2b9bea79eab7"
  },
  {
    "url": "assets/js/282.331ea26f.js",
    "revision": "4dbfe174986bb736c01d3ee68c4e2984"
  },
  {
    "url": "assets/js/283.feb88ff7.js",
    "revision": "4a6c19e65f2c4100b0ffc6b88bdc7ddb"
  },
  {
    "url": "assets/js/284.9cb2646c.js",
    "revision": "ac746d6f6ec6c272889f4676d9999776"
  },
  {
    "url": "assets/js/285.72c47fc6.js",
    "revision": "b5abd4d6d87f9733fc581ed9678165a6"
  },
  {
    "url": "assets/js/286.6f1cb2b0.js",
    "revision": "0c8bbca007892671a66178c5a18cd18c"
  },
  {
    "url": "assets/js/287.0cf81fd2.js",
    "revision": "65130d6b0d7998fad4c98f5e6abd0e5a"
  },
  {
    "url": "assets/js/288.bfd10673.js",
    "revision": "ba64651256d3843b8cabaace55d7b034"
  },
  {
    "url": "assets/js/289.68cad682.js",
    "revision": "b7ec53112a81e79b3dda7f475971936b"
  },
  {
    "url": "assets/js/29.a43e94bf.js",
    "revision": "0d68af8bcedc0ccc3e4cb3f40604ed6f"
  },
  {
    "url": "assets/js/290.55ecd7a8.js",
    "revision": "c976cdc2a64abd7d4cf839330deef61f"
  },
  {
    "url": "assets/js/291.42a8ff89.js",
    "revision": "ea448481aee0f42055b19014ae62be83"
  },
  {
    "url": "assets/js/292.34635dfe.js",
    "revision": "edc9436b268361462755248b78d79635"
  },
  {
    "url": "assets/js/293.def01e91.js",
    "revision": "d13a3a9fe6eb5ae1b6a36e0f43624136"
  },
  {
    "url": "assets/js/294.fb70c215.js",
    "revision": "04eba2a67acb0186bf11c6c4a0105dfd"
  },
  {
    "url": "assets/js/295.f706a9e8.js",
    "revision": "8166836e9b2b6e3dac11d95ace2d6559"
  },
  {
    "url": "assets/js/296.66bdff75.js",
    "revision": "9735950d2ebcd15b16ebdc318e910661"
  },
  {
    "url": "assets/js/297.3aaa3aed.js",
    "revision": "ff4069268b861a8acaebc4733288acef"
  },
  {
    "url": "assets/js/298.2c86ed48.js",
    "revision": "e0bfdfc4b8f6836d0132ba95f1e0bb56"
  },
  {
    "url": "assets/js/299.941bf6f2.js",
    "revision": "6be1633298559acd4963d7581c9452e1"
  },
  {
    "url": "assets/js/3.173c9da2.js",
    "revision": "960cc214978188dd7ea6631d9e5e5c5b"
  },
  {
    "url": "assets/js/30.f121e2bd.js",
    "revision": "d70ea7570643443299da661de91f6597"
  },
  {
    "url": "assets/js/300.8e7be609.js",
    "revision": "3bb4fae7f5474d6a162359d247f4321d"
  },
  {
    "url": "assets/js/301.8799b5f0.js",
    "revision": "9459fd10be8ebbe740402c01583ac574"
  },
  {
    "url": "assets/js/302.132acc3a.js",
    "revision": "854ad8a4f7760bd4b223b501244f7ced"
  },
  {
    "url": "assets/js/303.f88cdf5c.js",
    "revision": "7b068ce4cb9af6bda3164c771df269ee"
  },
  {
    "url": "assets/js/304.766920d6.js",
    "revision": "8c3bd84659db1b203903b05152480e6f"
  },
  {
    "url": "assets/js/305.c47dd6d9.js",
    "revision": "97fb9c28c3bef0d0b0a54b92bbca4be2"
  },
  {
    "url": "assets/js/306.43d37822.js",
    "revision": "9b18b7eaca309d9bcb97b634afc2303d"
  },
  {
    "url": "assets/js/307.e30bb9f6.js",
    "revision": "b0a20b0e6968c913402095b5a09da9ad"
  },
  {
    "url": "assets/js/308.7633ef7a.js",
    "revision": "a60f54c1ffda6444aeaf02262cecf10c"
  },
  {
    "url": "assets/js/309.5a81b70d.js",
    "revision": "85957b49a408dbdefd49393e49bf2c7e"
  },
  {
    "url": "assets/js/31.2dae0388.js",
    "revision": "d78b6b7c89acf27b7c6f54f95b93ade5"
  },
  {
    "url": "assets/js/310.d717a02b.js",
    "revision": "e2d9cb41fef80a98b7119398f8f73365"
  },
  {
    "url": "assets/js/311.51d41f91.js",
    "revision": "3d5d89eca2d96930abce73907889169a"
  },
  {
    "url": "assets/js/312.cabf39ca.js",
    "revision": "ef9068c3105f2a6665a3ca3ee2666a78"
  },
  {
    "url": "assets/js/313.74427e3e.js",
    "revision": "b327e67aafe88d86b0f23f2c6b0eb3e2"
  },
  {
    "url": "assets/js/314.6ab37d76.js",
    "revision": "a674d7418ff8415c90eb8fc5989f8440"
  },
  {
    "url": "assets/js/315.3538c0ce.js",
    "revision": "5c7d9b791ffc3179f77c5460c151fdc6"
  },
  {
    "url": "assets/js/316.ea01c27e.js",
    "revision": "e4dc3613751f0228d955577754e75f53"
  },
  {
    "url": "assets/js/317.95a2246d.js",
    "revision": "a2b24ade0f590d9e0e978e5217c2000d"
  },
  {
    "url": "assets/js/318.040a365d.js",
    "revision": "00ad7d7244c8697c30b56ba171b47b69"
  },
  {
    "url": "assets/js/319.a7022e19.js",
    "revision": "24f8bba00b1e0b7518d94c8c08166656"
  },
  {
    "url": "assets/js/32.db1f29aa.js",
    "revision": "3bd21867d971ae0dcd8d0331ffedc21f"
  },
  {
    "url": "assets/js/320.609daee9.js",
    "revision": "3219982e3263c002256c92222f976b09"
  },
  {
    "url": "assets/js/321.69f71b9f.js",
    "revision": "2bc9fa4e7d4be43a3625c9c132b86988"
  },
  {
    "url": "assets/js/322.cd1c8660.js",
    "revision": "9a3d2ba0c44c40dc2427e4d38faafa6f"
  },
  {
    "url": "assets/js/323.d61005d7.js",
    "revision": "3e313e029b63fc33a73433254cc6d5aa"
  },
  {
    "url": "assets/js/324.0c82386e.js",
    "revision": "936e3db98e78f96d041ee9e575f0f7d4"
  },
  {
    "url": "assets/js/325.278b6aa6.js",
    "revision": "8fe1a83e2afaded7a5579346ecc59985"
  },
  {
    "url": "assets/js/326.ab667c5b.js",
    "revision": "cf60b2920e506d62d47060d3d926cabc"
  },
  {
    "url": "assets/js/327.d43ce7f0.js",
    "revision": "9484ea6890d351b99e2e864c94982fa3"
  },
  {
    "url": "assets/js/328.fa6f76dd.js",
    "revision": "df2585e5dd3cf572f61a084695983990"
  },
  {
    "url": "assets/js/329.37f8e18d.js",
    "revision": "8e7e4bb4b78c9c24f60473150a0c249a"
  },
  {
    "url": "assets/js/33.8932ef96.js",
    "revision": "054dbfae57943dfeb4d6aec5fb9bc864"
  },
  {
    "url": "assets/js/330.ec9fdae3.js",
    "revision": "231bdf5cb2973c2dce9d64430f04c66f"
  },
  {
    "url": "assets/js/331.bbf243a7.js",
    "revision": "3d4243a7648a9123c9081427107a1f19"
  },
  {
    "url": "assets/js/332.95fa93b6.js",
    "revision": "c2154b57301ebe4566fa1fd45f5cedc7"
  },
  {
    "url": "assets/js/333.87388051.js",
    "revision": "ed6a6fbd1582527cb0550b072b4321d6"
  },
  {
    "url": "assets/js/334.01e17c69.js",
    "revision": "d355fde8d6abcbd9f7869af355bd56d5"
  },
  {
    "url": "assets/js/335.e4f32e9a.js",
    "revision": "ad594e5719d98baf51f98134869e1827"
  },
  {
    "url": "assets/js/336.220fe443.js",
    "revision": "827d85cd93bb574db7fdf3ef81c97d65"
  },
  {
    "url": "assets/js/337.7f5ba1bc.js",
    "revision": "6698b63d4fa2f6eb33fa853b1558dcdf"
  },
  {
    "url": "assets/js/338.3817f0f5.js",
    "revision": "07a31410baac14ae670829fd58d18711"
  },
  {
    "url": "assets/js/339.155418a3.js",
    "revision": "8f8167efb41b76707ecd31fd1271c682"
  },
  {
    "url": "assets/js/34.0530a068.js",
    "revision": "445be57b63f0b6c06187b152a48f711c"
  },
  {
    "url": "assets/js/340.40f74779.js",
    "revision": "0e2a2c232e8140f9f60d1a5d0c34e831"
  },
  {
    "url": "assets/js/341.02b625e0.js",
    "revision": "4dd3101e4773f7854e4358581e653320"
  },
  {
    "url": "assets/js/342.64e24f71.js",
    "revision": "f4b9bf5a498986c619234b9f440154e9"
  },
  {
    "url": "assets/js/343.a3eb5f69.js",
    "revision": "7fbd066a6642d60ceb57fabd7e4807bf"
  },
  {
    "url": "assets/js/344.6731b2a6.js",
    "revision": "4f73190f57adad5212c9399b452ffd0a"
  },
  {
    "url": "assets/js/345.bf2cadb7.js",
    "revision": "53b4afbe49f929740c38fa176581665e"
  },
  {
    "url": "assets/js/35.1aa6720c.js",
    "revision": "61a11db5e5ba465954aa5653d7e331d1"
  },
  {
    "url": "assets/js/36.29b3b2bd.js",
    "revision": "6935e8272079fea6a37072eade677f68"
  },
  {
    "url": "assets/js/37.a2ff2ee4.js",
    "revision": "068d336a6196b61a0cd258138c26c217"
  },
  {
    "url": "assets/js/38.38580d54.js",
    "revision": "4a6ebff7dcb766b8e94492876b8a6328"
  },
  {
    "url": "assets/js/39.a329e005.js",
    "revision": "3f23c6bc6598ffd8560401689a655271"
  },
  {
    "url": "assets/js/4.f802b025.js",
    "revision": "ef80e4fa179f97c4d4c4c88fbd37db8e"
  },
  {
    "url": "assets/js/40.29062732.js",
    "revision": "0babc76e549e1b94141ab3dccd6e11c1"
  },
  {
    "url": "assets/js/41.b8088802.js",
    "revision": "7ac3e9bf46c3b9eef86ee236c02b2422"
  },
  {
    "url": "assets/js/42.7c5a554a.js",
    "revision": "f65183552eae6929625dc84cab621615"
  },
  {
    "url": "assets/js/43.e3874341.js",
    "revision": "222dd43454f05895984f5bbf7f85b51e"
  },
  {
    "url": "assets/js/44.d73423d4.js",
    "revision": "3ea8fb3adba80785c4762e3cfd8e8527"
  },
  {
    "url": "assets/js/45.b90b227e.js",
    "revision": "3c712fa994859c5d280a40cd2ef0dd30"
  },
  {
    "url": "assets/js/46.2183db2a.js",
    "revision": "d3fe83fd27026b8e31b387eb4c2ec19a"
  },
  {
    "url": "assets/js/47.3534b689.js",
    "revision": "813b2d554929977f68131603810d93c7"
  },
  {
    "url": "assets/js/48.ea31aaf7.js",
    "revision": "fe3b741c6e6d15c9fe86854d2a6adfbb"
  },
  {
    "url": "assets/js/49.b9795473.js",
    "revision": "161f743b2c67025688fb30f24f80210e"
  },
  {
    "url": "assets/js/5.e9e419ea.js",
    "revision": "47104c7809a2f952c2766794ebef8db8"
  },
  {
    "url": "assets/js/50.c0944acd.js",
    "revision": "3e283d7b23f4af9e9613ce9d0a3e30b2"
  },
  {
    "url": "assets/js/51.74f7b1ff.js",
    "revision": "fb5b9465a3601cbf8709f056101306b1"
  },
  {
    "url": "assets/js/52.3caaccb6.js",
    "revision": "d5ec542e50a4c7c063a286b1e67ce8fb"
  },
  {
    "url": "assets/js/53.de068c40.js",
    "revision": "698ed8f7c080d162ccfd4598eb6f18d3"
  },
  {
    "url": "assets/js/54.99664f75.js",
    "revision": "d6fec6e30dc3947fe5a618b999e28e93"
  },
  {
    "url": "assets/js/55.c7e0dcf9.js",
    "revision": "3444990cda25dd50ecee96078729f15c"
  },
  {
    "url": "assets/js/56.b9670a63.js",
    "revision": "d9ead3217986998879719014bad6ffc4"
  },
  {
    "url": "assets/js/57.8bcbc315.js",
    "revision": "c87f3eb577f83a735183111346f7b739"
  },
  {
    "url": "assets/js/58.23bd0ee8.js",
    "revision": "772353b91d593f89fe3bc2aa47f985f5"
  },
  {
    "url": "assets/js/59.fd82f2a0.js",
    "revision": "5de9421af4a3b31cda46df23db7b105c"
  },
  {
    "url": "assets/js/6.67634804.js",
    "revision": "fdb967af7507b72b572ba401fcfd17d2"
  },
  {
    "url": "assets/js/60.8a6cccf5.js",
    "revision": "cc1eef402d85ecb3e2bc8d0d571a01d1"
  },
  {
    "url": "assets/js/61.4c492cad.js",
    "revision": "e7b0bfec998247f2c1fcd89e9f87e0cd"
  },
  {
    "url": "assets/js/62.c3cb6c1f.js",
    "revision": "2b7f74b605535413ef4ff44132c974bb"
  },
  {
    "url": "assets/js/63.01b68bad.js",
    "revision": "0469efb5234b6f225071c7c65f08e371"
  },
  {
    "url": "assets/js/64.a00d016e.js",
    "revision": "f21417e8fa868736fc3d0198f5cc6357"
  },
  {
    "url": "assets/js/65.7408194c.js",
    "revision": "5e682d9c794bb5e38b59846b19f75696"
  },
  {
    "url": "assets/js/66.5c69c3fa.js",
    "revision": "218ac56e19a0d1b156baf5b1f4f4eaa4"
  },
  {
    "url": "assets/js/67.7faf1363.js",
    "revision": "0909a61cb768810e803208958996540e"
  },
  {
    "url": "assets/js/68.193c5e0b.js",
    "revision": "b34070047cfb81e68f74290e248040cf"
  },
  {
    "url": "assets/js/69.7d879f8d.js",
    "revision": "e56dd731cfbbad15e54674e35c008ef3"
  },
  {
    "url": "assets/js/7.418215e9.js",
    "revision": "a23d3caf4761531a9bbbf7f6336b425a"
  },
  {
    "url": "assets/js/70.622e060c.js",
    "revision": "f29aaf3f92205682f6006a2f53dae367"
  },
  {
    "url": "assets/js/71.e31c272f.js",
    "revision": "319b372cab4af451a66ba3fd51b9eb22"
  },
  {
    "url": "assets/js/72.1f781045.js",
    "revision": "27e881da575cf14c22043b8b15d38fa7"
  },
  {
    "url": "assets/js/73.19fb962d.js",
    "revision": "e937097189a67fcea7f8d6a433e5154f"
  },
  {
    "url": "assets/js/74.09bda321.js",
    "revision": "ebc44abf297411f3b1f08f93aa624ee0"
  },
  {
    "url": "assets/js/75.d2bc5277.js",
    "revision": "43fccd6a14495febdcdf3d12a56d6bef"
  },
  {
    "url": "assets/js/76.f69a9af8.js",
    "revision": "f4c6e74ada2d8386087e213bd3508b7a"
  },
  {
    "url": "assets/js/77.6b65afeb.js",
    "revision": "539ed8e565df3942a8e90eab5bd5ae76"
  },
  {
    "url": "assets/js/78.2df67ccf.js",
    "revision": "7f48d846c0d7f27187e6d876bd07fa78"
  },
  {
    "url": "assets/js/79.9af049b2.js",
    "revision": "e63c11e7819b83b6bd330ad46daa4fb6"
  },
  {
    "url": "assets/js/8.e3ee8025.js",
    "revision": "c22a6f1f732dbfbf063c2f28fbd84a7b"
  },
  {
    "url": "assets/js/80.05e673e5.js",
    "revision": "d555f4297eabb3e73a5b522b93fe2c85"
  },
  {
    "url": "assets/js/81.d9654384.js",
    "revision": "92afa0fc52fefe6ee61ab154f0187620"
  },
  {
    "url": "assets/js/82.de827d61.js",
    "revision": "ef58e0d8628ffec17be5e854685822f5"
  },
  {
    "url": "assets/js/83.0221b05a.js",
    "revision": "3b364f9ae828a106ffeed5e7dc06e124"
  },
  {
    "url": "assets/js/84.4cfc97eb.js",
    "revision": "3bcd3edd40ef9154726289ca1553ff6d"
  },
  {
    "url": "assets/js/85.3470ac79.js",
    "revision": "99b7a8a327a89c689eb94ffb5d0be9ba"
  },
  {
    "url": "assets/js/86.d6665aad.js",
    "revision": "efe12968ef5347194bd5dc9f95861054"
  },
  {
    "url": "assets/js/87.8ee8e4a6.js",
    "revision": "c343e2017fae2c82ec8143a804a0c150"
  },
  {
    "url": "assets/js/88.9ed3d735.js",
    "revision": "19b4b2bfaee0311933cc2b49f466f63f"
  },
  {
    "url": "assets/js/89.32a4acad.js",
    "revision": "8f1959f2502da84d2dee7362f0d67d9a"
  },
  {
    "url": "assets/js/9.8256bffe.js",
    "revision": "e986e36d4b2d81a5cd57d76dbfd49687"
  },
  {
    "url": "assets/js/90.7a88524a.js",
    "revision": "7c38dff47dd14f7217509598e21f5b02"
  },
  {
    "url": "assets/js/91.81ea89e3.js",
    "revision": "a9ce5f9ff64b3ef08e52ee841e0513de"
  },
  {
    "url": "assets/js/92.ccce42f1.js",
    "revision": "6862bb7e9596af192ace4b65c8011355"
  },
  {
    "url": "assets/js/93.05fed78e.js",
    "revision": "fca23346e0931a439430e2f6ad70c92e"
  },
  {
    "url": "assets/js/94.07ee86dd.js",
    "revision": "160a3a1f67d6a81306988bc1c64786fc"
  },
  {
    "url": "assets/js/95.70518c30.js",
    "revision": "16b7116cf02cb8784bc2f82cfc91aeef"
  },
  {
    "url": "assets/js/96.4a100ab7.js",
    "revision": "19d0ea9b34b3647905330739d4915796"
  },
  {
    "url": "assets/js/97.c9946c05.js",
    "revision": "c0d64a107ea1d1064aa92e02f60e78e1"
  },
  {
    "url": "assets/js/98.24ae89d7.js",
    "revision": "9f8b26cd9f0cdb8d46b75b07b50f21db"
  },
  {
    "url": "assets/js/99.f7ab4de4.js",
    "revision": "11833bc143eae9d3bb00cd8a613414b5"
  },
  {
    "url": "assets/js/app.9b151904.js",
    "revision": "c8c3eb3d1c99be781cec808c90d19e0f"
  },
  {
    "url": "hero.png",
    "revision": "bf9756f0771c9499e8ebfadcb5da4151"
  },
  {
    "url": "home/alphabet.jpg",
    "revision": "3499ee8f00cecd931ddf8f90409f361f"
  },
  {
    "url": "home/courses.jpg",
    "revision": "d75d32ad3d7e119cf3564ee31cb863e9"
  },
  {
    "url": "home/dictionary.jpg",
    "revision": "69462af706a12fbaa64d4324dcc7fc8e"
  },
  {
    "url": "home/grammar.jpg",
    "revision": "19c23bcff850d7083f294259a6e05977"
  },
  {
    "url": "home/greetings.jpg",
    "revision": "a23babe3dc3675e83f6abbbeb9ed581a"
  },
  {
    "url": "home/kitchen.jpg",
    "revision": "b4190ca045f8ae89a3da7c47dc8b75bb"
  },
  {
    "url": "home/more_used.jpg",
    "revision": "165819f5607365d63f49e790ff9f40bb"
  },
  {
    "url": "home/people.jpg",
    "revision": "a1f601ae7dc06dbfa1643b634ee77a21"
  },
  {
    "url": "home/phrases.jpg",
    "revision": "e7801ece1f5fb8c75aacbe76e8f8a0c7"
  },
  {
    "url": "home/profession.jpg",
    "revision": "32cf7bf34c383f34ae89482c39f28568"
  },
  {
    "url": "home/vegetables.jpg",
    "revision": "06d39f1177690ae2e29a0786a23a2cbc"
  },
  {
    "url": "home/verbs.png",
    "revision": "1db334303ca05b1bb790c30014a28d28"
  },
  {
    "url": "icons/android-chrome-192x192.png",
    "revision": "46fa3968db394b2f4e815b47fb446d1a"
  },
  {
    "url": "icons/android-chrome-512x512.png",
    "revision": "913fc39bfe4be9583714f754b0e2efb6"
  },
  {
    "url": "icons/apple-touch-icon-120x120.png",
    "revision": "10905b3ea7bccb4254b38cf5bbcb2f90"
  },
  {
    "url": "icons/apple-touch-icon-152x152.png",
    "revision": "a5a610a2694eb9beae67c9cbfca8cffc"
  },
  {
    "url": "icons/apple-touch-icon-180x180.png",
    "revision": "4e32be38a5e5362420686ef2146f31ef"
  },
  {
    "url": "icons/apple-touch-icon-60x60.png",
    "revision": "2f544c46cd8621894cea3d80e914dab7"
  },
  {
    "url": "icons/apple-touch-icon-76x76.png",
    "revision": "34f37b51f20a948f5ff637750c735630"
  },
  {
    "url": "icons/apple-touch-icon.png",
    "revision": "4e32be38a5e5362420686ef2146f31ef"
  },
  {
    "url": "icons/favicon-16x16.png",
    "revision": "d59cdc20e530b9ddc159586961d0cbe9"
  },
  {
    "url": "icons/favicon-32x32.png",
    "revision": "ccc08661fa5948820b70c11e4f2e2f7b"
  },
  {
    "url": "icons/msapplication-icon-144x144.png",
    "revision": "26e25c5eb8e7061c44fa603d3f31296f"
  },
  {
    "url": "icons/mstile-150x150.png",
    "revision": "90ff0ebc522d5841e3442bfe280035d9"
  },
  {
    "url": "icons/safari-pinned-tab.svg",
    "revision": "81491474ad58360ee6552309bf5ebc4e"
  },
  {
    "url": "index.html",
    "revision": "cded9a9d3d4f5875abe0c71e3146506f"
  },
  {
    "url": "logo.png",
    "revision": "55b3058e403b667ac365966735bc6e5f"
  },
  {
    "url": "logo/achi.jpg",
    "revision": "5f42e091f4da1990f87f7ae04b4394d7"
  },
  {
    "url": "logo/akateko.jpg",
    "revision": "df5e1de23381cdc56e6e12f433a8a3db"
  },
  {
    "url": "logo/chol.jpg",
    "revision": "1cb6e98841b10d4d93cf47746640e91e"
  },
  {
    "url": "logo/chontal.jpg",
    "revision": "ce69f253b98408900618738dd5281e08"
  },
  {
    "url": "logo/chorti.jpg",
    "revision": "397aa54e698ec3e8742d8b6764f15742"
  },
  {
    "url": "logo/chuj.jpg",
    "revision": "99be6300b7c585b8d671644c77c21977"
  },
  {
    "url": "logo/huasteco.jpg",
    "revision": "b9b2e15cbaff690508d533d9b657f9b0"
  },
  {
    "url": "logo/ixil.jpg",
    "revision": "22878bdb2fed10fe02d79727a453db8f"
  },
  {
    "url": "logo/kaqchikel.jpg",
    "revision": "49f14ae22328f9a397b2346b9ab88636"
  },
  {
    "url": "logo/kiche.jpg",
    "revision": "7148e3e3e77a2c12bae66805c82a780a"
  },
  {
    "url": "logo/mam.jpg",
    "revision": "f98ded722ed492f1d8b8605d0db2630c"
  },
  {
    "url": "logo/maya.jpg",
    "revision": "59806bbfdbfaa423716d251ebb818c01"
  },
  {
    "url": "mx/chol/courses/basic/index.html",
    "revision": "0ce4a899363038099bf05eb586688f23"
  },
  {
    "url": "mx/chol/courses/intermediate/index.html",
    "revision": "65cba55865da929ef9417fe1d02b9a20"
  },
  {
    "url": "mx/chol/dictionary/glossary.html",
    "revision": "fe32b03489b17293a042370e35f71922"
  },
  {
    "url": "mx/chol/dictionary/index.html",
    "revision": "91161e3cd0a44e948278d07ca5e25072"
  },
  {
    "url": "mx/chol/grammar/adjective/index.html",
    "revision": "4890ba167df5922fb8a0509e7c840a7b"
  },
  {
    "url": "mx/chol/grammar/adverb/index.html",
    "revision": "6abfb812fedd7c832348cf88d8ca821a"
  },
  {
    "url": "mx/chol/grammar/alphabet/index.html",
    "revision": "22482d2b10ac8037c4c7b917d36a1011"
  },
  {
    "url": "mx/chol/grammar/article/index.html",
    "revision": "294917937dc0653b776b78f066c25019"
  },
  {
    "url": "mx/chol/grammar/guide/index.html",
    "revision": "b888fa638f2d6ef19b011edb3aae2608"
  },
  {
    "url": "mx/chol/grammar/verbs/index.html",
    "revision": "fd8d7d7daaaaf091475410a45e29e232"
  },
  {
    "url": "mx/chol/index.html",
    "revision": "1c15b1c046f59551c4570af2e6044d11"
  },
  {
    "url": "mx/chol/vocabulary/animals/index.html",
    "revision": "c2f0734ef879ed2b0df7c33bb4e91f6c"
  },
  {
    "url": "mx/chol/vocabulary/greetings/index.html",
    "revision": "f8f3a38083627caa8166c2af2d1ff7c6"
  },
  {
    "url": "mx/chol/vocabulary/more_used/index.html",
    "revision": "3cf429e9c5baa0936417d0eb8a5b7f8b"
  },
  {
    "url": "mx/chol/vocabulary/people/index.html",
    "revision": "231ccf28eebd759b0961970a0adc09b9"
  },
  {
    "url": "mx/chol/vocabulary/phrases/index.html",
    "revision": "fe2b594c3781c42cf647eebcbb19a2af"
  },
  {
    "url": "mx/chontal/courses/basic/index.html",
    "revision": "b36171d55e9ebf5dcd4b7440b7716a01"
  },
  {
    "url": "mx/chontal/courses/intermediate/index.html",
    "revision": "49347452937c8dc5334f89c680fd55e7"
  },
  {
    "url": "mx/chontal/dictionary/glossary.html",
    "revision": "41b8e1cad355313108ef8eff63cb8235"
  },
  {
    "url": "mx/chontal/dictionary/index.html",
    "revision": "22add7702fe143f1b22fcb4ade258db5"
  },
  {
    "url": "mx/chontal/grammar/adjective/index.html",
    "revision": "c804a5d67a812a900e11106f9cba5d38"
  },
  {
    "url": "mx/chontal/grammar/adverb/index.html",
    "revision": "bfef8fab7d652a9a58784f4ea021082f"
  },
  {
    "url": "mx/chontal/grammar/alphabet/index.html",
    "revision": "8455f81037bb6efe6bf1fdad4f82fd63"
  },
  {
    "url": "mx/chontal/grammar/article/index.html",
    "revision": "60a4ab057bad4096bdf717da58d75a9d"
  },
  {
    "url": "mx/chontal/grammar/guide/index.html",
    "revision": "0330c4cc1e8298c15c78a2c23f179339"
  },
  {
    "url": "mx/chontal/grammar/verbs/index.html",
    "revision": "5e7320324ca2c1035f39da25ade08d6b"
  },
  {
    "url": "mx/chontal/index.html",
    "revision": "0ef951f731d8d15190566e6c99e3447f"
  },
  {
    "url": "mx/chontal/vocabulary/animals/index.html",
    "revision": "99c5bae2bed8341a2ef8daa5531bc17b"
  },
  {
    "url": "mx/chontal/vocabulary/greetings/index.html",
    "revision": "118e0ef97a46b496fbce2c8ebace4c79"
  },
  {
    "url": "mx/chontal/vocabulary/more_used/index.html",
    "revision": "ed0714715ee397828be12910e52cbba2"
  },
  {
    "url": "mx/chontal/vocabulary/people/index.html",
    "revision": "a86b958e1625c66d7c0ed15288e22156"
  },
  {
    "url": "mx/chontal/vocabulary/phrases/index.html",
    "revision": "e36c24f649f128b618ac684d2c50e2d2"
  },
  {
    "url": "mx/cucapa/courses/basic/index.html",
    "revision": "4fe9f5a87ca7052d52f1a91975865cfe"
  },
  {
    "url": "mx/cucapa/courses/intermediate/index.html",
    "revision": "5588deb0d9c4134c053897d825f4fcba"
  },
  {
    "url": "mx/cucapa/dictionary/glossary.html",
    "revision": "82c53396e6f1ccad53b2f5e459da08e2"
  },
  {
    "url": "mx/cucapa/dictionary/index.html",
    "revision": "1f1b0877d5adb232379d2ff5e32415c3"
  },
  {
    "url": "mx/cucapa/grammar/adjective/index.html",
    "revision": "80262adbd4ccf26ea1d074f332e72103"
  },
  {
    "url": "mx/cucapa/grammar/adverb/index.html",
    "revision": "c2dc9fc2e016f0e4246cc38124a0bd9f"
  },
  {
    "url": "mx/cucapa/grammar/alphabet/index.html",
    "revision": "682e5c6b7d587b21830326a77ad57a04"
  },
  {
    "url": "mx/cucapa/grammar/article/index.html",
    "revision": "c360502e32cf1a893f4bf8d3e6e68380"
  },
  {
    "url": "mx/cucapa/grammar/guide/index.html",
    "revision": "7b07d7ba30b7ffec64e644b76f5d05fe"
  },
  {
    "url": "mx/cucapa/grammar/verbs/index.html",
    "revision": "2e1e55b1fc3bcfd088d573eedc224cb4"
  },
  {
    "url": "mx/cucapa/index.html",
    "revision": "d1e92a6bdac0205cd98c514fa821613b"
  },
  {
    "url": "mx/cucapa/vocabulary/animals/index.html",
    "revision": "005fab2758bcedc470d1e502e79b4d02"
  },
  {
    "url": "mx/cucapa/vocabulary/greetings/index.html",
    "revision": "403092365feba5e8ab9b4d4f3096db5d"
  },
  {
    "url": "mx/cucapa/vocabulary/more_used/index.html",
    "revision": "71af07a9bded6b37f334ad3591ffd106"
  },
  {
    "url": "mx/cucapa/vocabulary/people/index.html",
    "revision": "3ad58f5da69b26dbb5ccbcaf00ecbf1b"
  },
  {
    "url": "mx/cucapa/vocabulary/phrases/index.html",
    "revision": "84b1561e240b9a97e1b09ed46928fd79"
  },
  {
    "url": "mx/huasteco/courses/basic/index.html",
    "revision": "c850ebd47acee6451a657557a50a7c4b"
  },
  {
    "url": "mx/huasteco/courses/intermediate/index.html",
    "revision": "ac97acc969b8e13d813dc0acc46441dd"
  },
  {
    "url": "mx/huasteco/dictionary/glossary.html",
    "revision": "5674c6045402abbf47eeef9f5ae42e48"
  },
  {
    "url": "mx/huasteco/dictionary/index.html",
    "revision": "9ce690859346923295b8d6f73afe0370"
  },
  {
    "url": "mx/huasteco/grammar/adjective/index.html",
    "revision": "bd9d2636f137828e06a853b2392c7f68"
  },
  {
    "url": "mx/huasteco/grammar/adverb/index.html",
    "revision": "c47784e09edc3f2425f84542adcb137f"
  },
  {
    "url": "mx/huasteco/grammar/alphabet/index.html",
    "revision": "2ae1d08c8273499dc9b7c5438de479f1"
  },
  {
    "url": "mx/huasteco/grammar/article/index.html",
    "revision": "4b77d2fbaaf80cabf6702d911b10ad95"
  },
  {
    "url": "mx/huasteco/grammar/guide/index.html",
    "revision": "0ec37db0711a37d1835645b1673b8fea"
  },
  {
    "url": "mx/huasteco/grammar/verbs/index.html",
    "revision": "3f935006beb945f8dbcd6b8d96101962"
  },
  {
    "url": "mx/huasteco/index.html",
    "revision": "9eba4922ec49357a6d67e7f494f49fac"
  },
  {
    "url": "mx/huasteco/vocabulary/animals/index.html",
    "revision": "02dc2bd9ca24e0f29d4254f4e8cbd2df"
  },
  {
    "url": "mx/huasteco/vocabulary/greetings/index.html",
    "revision": "2640b829f308990dfca6e26fb358bc75"
  },
  {
    "url": "mx/huasteco/vocabulary/more_used/index.html",
    "revision": "4fa479f2f4c9480bc6b9c36a4edee030"
  },
  {
    "url": "mx/huasteco/vocabulary/people/index.html",
    "revision": "99bbabdd13b6ccf6635836f62273fa56"
  },
  {
    "url": "mx/huasteco/vocabulary/phrases/index.html",
    "revision": "2c9edf42c0b1b33e065509b1a3409207"
  },
  {
    "url": "mx/huave/courses/basic/index.html",
    "revision": "3d384b19e204f239819cd650e54e3c43"
  },
  {
    "url": "mx/huave/courses/intermediate/index.html",
    "revision": "c176225079983aa16ba98f02e689bd92"
  },
  {
    "url": "mx/huave/dictionary/glossary.html",
    "revision": "e7ef9a217fde32c71858dc3abdfccb83"
  },
  {
    "url": "mx/huave/dictionary/index.html",
    "revision": "cbef9145c931abad7d03d04034540010"
  },
  {
    "url": "mx/huave/grammar/adjective/index.html",
    "revision": "1e1b7fb4f50a8504bcf41552b2d98b96"
  },
  {
    "url": "mx/huave/grammar/adverb/index.html",
    "revision": "815da3dd5db7479f6ebdfbef83f6fe07"
  },
  {
    "url": "mx/huave/grammar/alphabet/index.html",
    "revision": "59ac179afd57d195fd0da57974728e17"
  },
  {
    "url": "mx/huave/grammar/article/index.html",
    "revision": "230e16e2c1dd310f6c946adfbde8e13f"
  },
  {
    "url": "mx/huave/grammar/guide/index.html",
    "revision": "45eb110a53169377f243686412138ca3"
  },
  {
    "url": "mx/huave/grammar/verbs/index.html",
    "revision": "901bb98253ca4005b38545bfa5c93ebd"
  },
  {
    "url": "mx/huave/index.html",
    "revision": "1e599a8dabce60ff5a481680e9259199"
  },
  {
    "url": "mx/huave/vocabulary/animals/index.html",
    "revision": "55323285e10efb1f1046b7e45b4dd922"
  },
  {
    "url": "mx/huave/vocabulary/greetings/index.html",
    "revision": "b61cf4a9f948d9517c776a82a8a2ec2c"
  },
  {
    "url": "mx/huave/vocabulary/more_used/index.html",
    "revision": "266f10fe3c1b58fa5785a040a4c7082a"
  },
  {
    "url": "mx/huave/vocabulary/people/index.html",
    "revision": "a6e9ef5df13c6439374b5ae8f750c7d3"
  },
  {
    "url": "mx/huave/vocabulary/phrases/index.html",
    "revision": "428dcb6fb8ac10ebfe87f88e4d004bfe"
  },
  {
    "url": "mx/kickapoo/courses/basic/index.html",
    "revision": "df8dacccc49f826b733f1a65beffed8c"
  },
  {
    "url": "mx/kickapoo/courses/intermediate/index.html",
    "revision": "3e58a54da7c42a54b0d4ee6a75e3cf7c"
  },
  {
    "url": "mx/kickapoo/dictionary/glossary.html",
    "revision": "76f15c6960495cb215bc73f517731010"
  },
  {
    "url": "mx/kickapoo/dictionary/index.html",
    "revision": "68ae1a30891e8eb1c3958957aab4f016"
  },
  {
    "url": "mx/kickapoo/grammar/adjective/index.html",
    "revision": "84995ec686600419bafb2c6c1fcdbaed"
  },
  {
    "url": "mx/kickapoo/grammar/adverb/index.html",
    "revision": "c3fa234758efcecc204225842283dbed"
  },
  {
    "url": "mx/kickapoo/grammar/alphabet/index.html",
    "revision": "ed184c4c31156b4664d009033d70faea"
  },
  {
    "url": "mx/kickapoo/grammar/article/index.html",
    "revision": "fdc6c312cff4a50c9967ef80d4f1b40f"
  },
  {
    "url": "mx/kickapoo/grammar/guide/index.html",
    "revision": "b49860798c9b6476e5c4754baefffed8"
  },
  {
    "url": "mx/kickapoo/grammar/verbs/index.html",
    "revision": "23fca4dfaf6cce9e057fc35cb3f17f71"
  },
  {
    "url": "mx/kickapoo/index.html",
    "revision": "a30666a648ff66db5151291e1376808c"
  },
  {
    "url": "mx/kickapoo/vocabulary/animals/index.html",
    "revision": "f9f07c0c68a2a9f7256e3bbf1cf67ab0"
  },
  {
    "url": "mx/kickapoo/vocabulary/greetings/index.html",
    "revision": "2fd64783ac2577a5697c9c9cf4b91dd9"
  },
  {
    "url": "mx/kickapoo/vocabulary/more_used/index.html",
    "revision": "ea8ab967fb119f2d097b44ec35653f1a"
  },
  {
    "url": "mx/kickapoo/vocabulary/people/index.html",
    "revision": "24818dd51de7bc29fc12e6b6f5cda961"
  },
  {
    "url": "mx/kickapoo/vocabulary/phrases/index.html",
    "revision": "d81c22ff481a76543144df8b22e72e55"
  },
  {
    "url": "mx/kiliwa/courses/basic/index.html",
    "revision": "684da921ed332a2a191c74c31ff716e0"
  },
  {
    "url": "mx/kiliwa/courses/intermediate/index.html",
    "revision": "8790efcf122bcdecb25a78eed6098fbc"
  },
  {
    "url": "mx/kiliwa/dictionary/glossary.html",
    "revision": "8ad5cf37a0923881707744e4dd89313d"
  },
  {
    "url": "mx/kiliwa/dictionary/index.html",
    "revision": "29fb5947249b7c29c81ec9f8a05f0637"
  },
  {
    "url": "mx/kiliwa/grammar/adjective/index.html",
    "revision": "3cc0a0648542a3011f880fc2ab4f248b"
  },
  {
    "url": "mx/kiliwa/grammar/adverb/index.html",
    "revision": "c2326f35b220fc48d901d958d41c93c8"
  },
  {
    "url": "mx/kiliwa/grammar/alphabet/index.html",
    "revision": "81a270cb236ed19ed0b30ee902e78f44"
  },
  {
    "url": "mx/kiliwa/grammar/article/index.html",
    "revision": "4ca0a3c3222d867661b92406a9a7185e"
  },
  {
    "url": "mx/kiliwa/grammar/guide/index.html",
    "revision": "9f7fb370aa84c2cca51e19c84e718305"
  },
  {
    "url": "mx/kiliwa/grammar/verbs/index.html",
    "revision": "045399b07b787fe594fed89debdee9e0"
  },
  {
    "url": "mx/kiliwa/index.html",
    "revision": "0565b04d5fc185337ffd7aa848a8215a"
  },
  {
    "url": "mx/kiliwa/vocabulary/animals/index.html",
    "revision": "f0f14b32c09c84d8aa574b65aa725b43"
  },
  {
    "url": "mx/kiliwa/vocabulary/greetings/index.html",
    "revision": "a610cf0ecef8fa7cc34ff5d7dc9c830a"
  },
  {
    "url": "mx/kiliwa/vocabulary/more_used/index.html",
    "revision": "3bdfac1a8d650a78b76ae3af4a422554"
  },
  {
    "url": "mx/kiliwa/vocabulary/people/index.html",
    "revision": "a2f2ebdd51da83429de83321b6f3fa7b"
  },
  {
    "url": "mx/kiliwa/vocabulary/phrases/index.html",
    "revision": "87b23ad1d3d818e0596b880c5396590f"
  },
  {
    "url": "mx/kuahl/courses/basic/index.html",
    "revision": "cf30817a6535f79de5090f969da1e91e"
  },
  {
    "url": "mx/kuahl/courses/intermediate/index.html",
    "revision": "f83d78102e88d1ad4805ac40c65b2af4"
  },
  {
    "url": "mx/kuahl/dictionary/glossary.html",
    "revision": "0195b50db9399b2b1351e6e0379d0662"
  },
  {
    "url": "mx/kuahl/dictionary/index.html",
    "revision": "41106852a8be14271027ccbf22cbbcd9"
  },
  {
    "url": "mx/kuahl/grammar/adjective/index.html",
    "revision": "f995c04e3adc8bd1facbc309d5451724"
  },
  {
    "url": "mx/kuahl/grammar/adverb/index.html",
    "revision": "92abf03fb5b577b2e124d5dc86941d53"
  },
  {
    "url": "mx/kuahl/grammar/alphabet/index.html",
    "revision": "cf19ad1ce08bd216eb1fd96babc9957a"
  },
  {
    "url": "mx/kuahl/grammar/article/index.html",
    "revision": "29284f85859917328a1aca9834b7bcaa"
  },
  {
    "url": "mx/kuahl/grammar/guide/index.html",
    "revision": "a0f2246cc3c245be12ba415a4de0ef31"
  },
  {
    "url": "mx/kuahl/grammar/verbs/index.html",
    "revision": "c4cf96c64a440aa7d2561f4bc5a309a3"
  },
  {
    "url": "mx/kuahl/index.html",
    "revision": "2ca038ee87a9b4133ccbbd68c9a3c609"
  },
  {
    "url": "mx/kuahl/vocabulary/animals/index.html",
    "revision": "a9cbcfccfec51357c50e354837f23e30"
  },
  {
    "url": "mx/kuahl/vocabulary/greetings/index.html",
    "revision": "8b56353fdfc72afdb792846b8bfdd2c0"
  },
  {
    "url": "mx/kuahl/vocabulary/more_used/index.html",
    "revision": "a5fd4d41c1fc0d78153fa58a8c503420"
  },
  {
    "url": "mx/kuahl/vocabulary/people/index.html",
    "revision": "20b570473818ff15bda62b524b6b901b"
  },
  {
    "url": "mx/kuahl/vocabulary/phrases/index.html",
    "revision": "cfd7363fa2f79e8230dc8e0e8d54c648"
  },
  {
    "url": "mx/kumiai/courses/basic/index.html",
    "revision": "fbbfccbedee587f8d981531871d1d261"
  },
  {
    "url": "mx/kumiai/courses/intermediate/index.html",
    "revision": "0b5a9d192d95031d951c35dee8fa9cc4"
  },
  {
    "url": "mx/kumiai/dictionary/glossary.html",
    "revision": "489e7396650c7c6b9c5fa137ec1934c8"
  },
  {
    "url": "mx/kumiai/dictionary/index.html",
    "revision": "afca9ff2614b03ac8e1854a32acfa99d"
  },
  {
    "url": "mx/kumiai/grammar/adjective/index.html",
    "revision": "21f361d77d2b1ba1cc61ba8e32cd5165"
  },
  {
    "url": "mx/kumiai/grammar/adverb/index.html",
    "revision": "bae20564f1fcb04c2aef7a923027aa96"
  },
  {
    "url": "mx/kumiai/grammar/alphabet/index.html",
    "revision": "17440f795e69f98e2e165dea52a44f22"
  },
  {
    "url": "mx/kumiai/grammar/article/index.html",
    "revision": "aa23130fa4e15fc6b41325862171a243"
  },
  {
    "url": "mx/kumiai/grammar/guide/index.html",
    "revision": "385108217e555b69a8b2a4e7082c6e44"
  },
  {
    "url": "mx/kumiai/grammar/verbs/index.html",
    "revision": "ddfaf7acb7a72b0a26627bcd506cfa37"
  },
  {
    "url": "mx/kumiai/index.html",
    "revision": "f37068bd43a8f1639a8ce66ffe03293a"
  },
  {
    "url": "mx/kumiai/vocabulary/animals/index.html",
    "revision": "5fe641ecbe7fa7a797a85c91da0aafb3"
  },
  {
    "url": "mx/kumiai/vocabulary/greetings/index.html",
    "revision": "cb5e239040404aecab689c7ce1f8744d"
  },
  {
    "url": "mx/kumiai/vocabulary/more_used/index.html",
    "revision": "3f795a0f14e2a36a9ab73d49075657aa"
  },
  {
    "url": "mx/kumiai/vocabulary/people/index.html",
    "revision": "dd09f775336af0691ad04ff55f35e984"
  },
  {
    "url": "mx/kumiai/vocabulary/phrases/index.html",
    "revision": "624682d8c93d605bb90b721d5affcbeb"
  },
  {
    "url": "mx/lacandon/courses/basic/index.html",
    "revision": "19f7eb9a75e93316f70bf099ddf33a01"
  },
  {
    "url": "mx/lacandon/courses/intermediate/index.html",
    "revision": "36ce731a1bf99e6c17cb8cde43af60a5"
  },
  {
    "url": "mx/lacandon/dictionary/glossary.html",
    "revision": "b1844031f761c1845e072ad02657f932"
  },
  {
    "url": "mx/lacandon/dictionary/index.html",
    "revision": "8838bcd63aeae43241fcc4a4e041e3b1"
  },
  {
    "url": "mx/lacandon/grammar/adjective/index.html",
    "revision": "9f04ca06b6bad63293f5b3cf5e9da7b1"
  },
  {
    "url": "mx/lacandon/grammar/adverb/index.html",
    "revision": "7d4f8780be69d50066b4715d0a9c67ce"
  },
  {
    "url": "mx/lacandon/grammar/alphabet/index.html",
    "revision": "a4d04b511a31d9ac77f2237aa55d4429"
  },
  {
    "url": "mx/lacandon/grammar/article/index.html",
    "revision": "356efe46e9ba4800545e6801b0eab79a"
  },
  {
    "url": "mx/lacandon/grammar/guide/index.html",
    "revision": "e43995938315948fd0066c8217045d5b"
  },
  {
    "url": "mx/lacandon/grammar/verbs/index.html",
    "revision": "841dca44f8e4a0661602d613cadfe8b3"
  },
  {
    "url": "mx/lacandon/index.html",
    "revision": "01b0117ef47acbe712136b46207fb910"
  },
  {
    "url": "mx/lacandon/vocabulary/animals/index.html",
    "revision": "939fbebc21cc77c4a0696d99ad42687e"
  },
  {
    "url": "mx/lacandon/vocabulary/greetings/index.html",
    "revision": "29602952c539d7f8ffd796cc84b49dd0"
  },
  {
    "url": "mx/lacandon/vocabulary/more_used/index.html",
    "revision": "829963d1d087edc76f2b1551b8ed1c56"
  },
  {
    "url": "mx/lacandon/vocabulary/people/index.html",
    "revision": "c565f115b766a146d703e417a39e4c6d"
  },
  {
    "url": "mx/lacandon/vocabulary/phrases/index.html",
    "revision": "e3648f03a057a1a3b8620c7e0a214cab"
  },
  {
    "url": "mx/paipai/courses/basic/index.html",
    "revision": "1b45d1fcca9bf2f5ec9675ab16c9f8a6"
  },
  {
    "url": "mx/paipai/courses/intermediate/index.html",
    "revision": "aa82ca6056e617518e9d1189a1ef5000"
  },
  {
    "url": "mx/paipai/dictionary/glossary.html",
    "revision": "1ced98b74380ba4722e69aabe80599ed"
  },
  {
    "url": "mx/paipai/dictionary/index.html",
    "revision": "6c8bd0684c818c082c772a56522e9003"
  },
  {
    "url": "mx/paipai/grammar/adjective/index.html",
    "revision": "1f01347c9399b671e268e797f78fbcdd"
  },
  {
    "url": "mx/paipai/grammar/adverb/index.html",
    "revision": "8c50f84c0e79e8f844037d6ba3c1033c"
  },
  {
    "url": "mx/paipai/grammar/alphabet/index.html",
    "revision": "930b7b3a849688f256adf56407de8c1b"
  },
  {
    "url": "mx/paipai/grammar/article/index.html",
    "revision": "9c2ccdd0de49c95f1f3bd46a169eb670"
  },
  {
    "url": "mx/paipai/grammar/guide/index.html",
    "revision": "df7e181947a8dcc6b0b1a5645a22da83"
  },
  {
    "url": "mx/paipai/grammar/verbs/index.html",
    "revision": "2a505c2b8905bcf1655f182d4a15a47b"
  },
  {
    "url": "mx/paipai/index.html",
    "revision": "b8bff7da695c3a88fe5ec098fad44e66"
  },
  {
    "url": "mx/paipai/vocabulary/animals/index.html",
    "revision": "1a9bc6a5576649bf45263c71b9ad4f5a"
  },
  {
    "url": "mx/paipai/vocabulary/greetings/index.html",
    "revision": "0d8d30b5154cdbbc7c962e549a6fa14d"
  },
  {
    "url": "mx/paipai/vocabulary/more_used/index.html",
    "revision": "f67aeca2b8adf07ff7619131a410a4cc"
  },
  {
    "url": "mx/paipai/vocabulary/people/index.html",
    "revision": "75888bfb23684c13e5e5e3b8a2613354"
  },
  {
    "url": "mx/paipai/vocabulary/phrases/index.html",
    "revision": "470a731c0166fd83b6fa59d00a6bf771"
  },
  {
    "url": "mx/qatok/courses/basic/index.html",
    "revision": "0bc30dc747b1caea3b9313797abc8620"
  },
  {
    "url": "mx/qatok/courses/intermediate/index.html",
    "revision": "c1d341b75845c36a91685e2ee41fbbba"
  },
  {
    "url": "mx/qatok/dictionary/glossary.html",
    "revision": "e395fce4b3eea32ad772ba848398bb5a"
  },
  {
    "url": "mx/qatok/dictionary/index.html",
    "revision": "0eded470f0f667a928b13bc326ecba20"
  },
  {
    "url": "mx/qatok/grammar/adjective/index.html",
    "revision": "5517f7c0581910db1ffbd6d5f7f8c722"
  },
  {
    "url": "mx/qatok/grammar/adverb/index.html",
    "revision": "98ebcf176921fdd84d98adb2ef81ae3f"
  },
  {
    "url": "mx/qatok/grammar/alphabet/index.html",
    "revision": "fbc0af65b7a4d5df5823e5b40463c7eb"
  },
  {
    "url": "mx/qatok/grammar/article/index.html",
    "revision": "b2cdedbcea6b7fa9fed9c8bf62d2f472"
  },
  {
    "url": "mx/qatok/grammar/guide/index.html",
    "revision": "285793161ed36e81b28b6c6436c71fbb"
  },
  {
    "url": "mx/qatok/grammar/verbs/index.html",
    "revision": "3deed7b763b42717b99790aa81522c24"
  },
  {
    "url": "mx/qatok/index.html",
    "revision": "489b75ab8b6f850045433ddc9caaa4b6"
  },
  {
    "url": "mx/qatok/vocabulary/animals/index.html",
    "revision": "b9eab4837367c0e35948db4d73e2715a"
  },
  {
    "url": "mx/qatok/vocabulary/greetings/index.html",
    "revision": "44fb3128c08cb24fb190dcd1924b7509"
  },
  {
    "url": "mx/qatok/vocabulary/more_used/index.html",
    "revision": "9cb439713e37ac82f8b11cce4fe3a797"
  },
  {
    "url": "mx/qatok/vocabulary/people/index.html",
    "revision": "ee219c5ea5626dfa31e5c8df92ba0862"
  },
  {
    "url": "mx/qatok/vocabulary/phrases/index.html",
    "revision": "b403afba73514927224aa08ea26d5cb2"
  },
  {
    "url": "mx/tsotsil/courses/basic/index.html",
    "revision": "c20bdf89a464d80e87a33c39574824f3"
  },
  {
    "url": "mx/tsotsil/courses/intermediate/index.html",
    "revision": "27b0ee410bb987a68356c938d093e314"
  },
  {
    "url": "mx/tsotsil/dictionary/glossary.html",
    "revision": "bc83e04bff30a621496d7c2480e14a59"
  },
  {
    "url": "mx/tsotsil/dictionary/index.html",
    "revision": "3b67b3f040599dfabd2832070585ac6e"
  },
  {
    "url": "mx/tsotsil/grammar/adjective/index.html",
    "revision": "18cb6f1ee88afb729ce2788d011ad1e0"
  },
  {
    "url": "mx/tsotsil/grammar/adverb/index.html",
    "revision": "0beba9bbbe2e3b10af1b5b40a82de816"
  },
  {
    "url": "mx/tsotsil/grammar/alphabet/index.html",
    "revision": "2f0b7fd2a6e852066c986db6bc78ae59"
  },
  {
    "url": "mx/tsotsil/grammar/article/index.html",
    "revision": "b2df9d10e8f154d05ca9ab5c1d339ac0"
  },
  {
    "url": "mx/tsotsil/grammar/guide/index.html",
    "revision": "bc6d6db2718dd483346c6c7302285b3b"
  },
  {
    "url": "mx/tsotsil/grammar/verbs/index.html",
    "revision": "9e5b0314752c3585723dc06bd19afab3"
  },
  {
    "url": "mx/tsotsil/index.html",
    "revision": "a9a567e4bc4b564dfcda4cad0576007a"
  },
  {
    "url": "mx/tsotsil/vocabulary/animals/index.html",
    "revision": "e1fe24df350a4b7cae92760d7169987a"
  },
  {
    "url": "mx/tsotsil/vocabulary/greetings/index.html",
    "revision": "e081784883c67a3623da73aad280d477"
  },
  {
    "url": "mx/tsotsil/vocabulary/more_used/index.html",
    "revision": "11dc35dda14eb59ec3ac290759e17f93"
  },
  {
    "url": "mx/tsotsil/vocabulary/people/index.html",
    "revision": "a2473858eda911be2fca34f7c74e514a"
  },
  {
    "url": "mx/tsotsil/vocabulary/phrases/index.html",
    "revision": "5ca7ef2e40ffeafd97c51f2ed2fcf453"
  },
  {
    "url": "mx/zoque/courses/basic/index.html",
    "revision": "b34618bb30555d596c42680b42adee1f"
  },
  {
    "url": "mx/zoque/courses/intermediate/index.html",
    "revision": "c0a5c0547d8fc9693341af4abbd1117d"
  },
  {
    "url": "mx/zoque/dictionary/glossary.html",
    "revision": "78b5df2c163fef82e1bca6e4d9b9f24e"
  },
  {
    "url": "mx/zoque/dictionary/index.html",
    "revision": "db22b59523e579d4af55f634f2170072"
  },
  {
    "url": "mx/zoque/grammar/adjective/index.html",
    "revision": "b5380df177ea97017b7d31a31de0ca0f"
  },
  {
    "url": "mx/zoque/grammar/adverb/index.html",
    "revision": "20974da78c2a5a1cb0ad972ec91d48e6"
  },
  {
    "url": "mx/zoque/grammar/alphabet/index.html",
    "revision": "2c9f239ad28676f701dbdb38c81af499"
  },
  {
    "url": "mx/zoque/grammar/article/index.html",
    "revision": "ab7fcd2f3fc5ea4aa960c34035220100"
  },
  {
    "url": "mx/zoque/grammar/guide/index.html",
    "revision": "bebc584ccff8cb9c2158f66b3514d279"
  },
  {
    "url": "mx/zoque/grammar/verbs/index.html",
    "revision": "055bf0f5fe98aa4d88bcf40ce2a1d0ed"
  },
  {
    "url": "mx/zoque/index.html",
    "revision": "1a58ff411a88d398c92fc04d502624c3"
  },
  {
    "url": "mx/zoque/vocabulary/animals/index.html",
    "revision": "1c3ab4149be2fc036bbecda505a3b6ea"
  },
  {
    "url": "mx/zoque/vocabulary/greetings/index.html",
    "revision": "be67a87837d4d65231604518b2f5f192"
  },
  {
    "url": "mx/zoque/vocabulary/more_used/index.html",
    "revision": "6f5e37e3746460a388d186ea11478899"
  },
  {
    "url": "mx/zoque/vocabulary/people/index.html",
    "revision": "2086e8b37c37d8975132ee4c3e795c69"
  },
  {
    "url": "mx/zoque/vocabulary/phrases/index.html",
    "revision": "05a2fa4bc5b903e2b444aae89db6999f"
  },
  {
    "url": "pa/buglere/courses/basic/index.html",
    "revision": "c1832e8594075b69dd6f8385a1a05be6"
  },
  {
    "url": "pa/buglere/courses/intermediate/index.html",
    "revision": "b38470304fc8ddac4e1d15af5123c14d"
  },
  {
    "url": "pa/buglere/dictionary/glossary.html",
    "revision": "e9635e2f762751875b92332ef77bb8f9"
  },
  {
    "url": "pa/buglere/dictionary/index.html",
    "revision": "a2a161266349cb9271df95b48e77f361"
  },
  {
    "url": "pa/buglere/grammar/adjective/index.html",
    "revision": "c9791ae5367ae3f6174f445e6cb34474"
  },
  {
    "url": "pa/buglere/grammar/adverb/index.html",
    "revision": "3af8927077084d136f5d0336ecc078a9"
  },
  {
    "url": "pa/buglere/grammar/alphabet/index.html",
    "revision": "6827334c338f99bfec4fafaf3dd12291"
  },
  {
    "url": "pa/buglere/grammar/article/index.html",
    "revision": "1ad12872d1e865654e9b5fc99fe9b5dc"
  },
  {
    "url": "pa/buglere/grammar/guide/index.html",
    "revision": "4268b5e03542e5afb2c152fcdcc70b68"
  },
  {
    "url": "pa/buglere/grammar/verbs/index.html",
    "revision": "974ec65db8af98852eee3e81958d75c0"
  },
  {
    "url": "pa/buglere/vocabulary/animals/index.html",
    "revision": "f3560506cce975799b2e628b7c9b3f6e"
  },
  {
    "url": "pa/buglere/vocabulary/greetings/index.html",
    "revision": "2c49d95c0ca5c5d2820d6e8911cd6a6a"
  },
  {
    "url": "pa/buglere/vocabulary/more_used/index.html",
    "revision": "4e918fe1c1b93441ec62699331eb7781"
  },
  {
    "url": "pa/buglere/vocabulary/people/index.html",
    "revision": "1aa66ff7593c22b26b1db0ba7c7837e3"
  },
  {
    "url": "pa/buglere/vocabulary/phrases/index.html",
    "revision": "e6d8742708e660271365336b23985c42"
  },
  {
    "url": "pa/embera/courses/basic/index.html",
    "revision": "f6bf2df70f9c6c92144fefd63a7c4701"
  },
  {
    "url": "pa/embera/courses/intermediate/index.html",
    "revision": "fe13b0014f1c009feba6f3a7c892a5b7"
  },
  {
    "url": "pa/embera/dictionary/glossary.html",
    "revision": "2d74e6e3be05da6b56ad1a68e7fc9bb7"
  },
  {
    "url": "pa/embera/dictionary/index.html",
    "revision": "b5932cf683227bc633ded49813845bb0"
  },
  {
    "url": "pa/embera/grammar/adjective/index.html",
    "revision": "0cd4f0442fe184901c355dc68ebc266a"
  },
  {
    "url": "pa/embera/grammar/adverb/index.html",
    "revision": "277053d5f0f70d329ed397bbbdb09e81"
  },
  {
    "url": "pa/embera/grammar/alphabet/index.html",
    "revision": "cb663f3b053c9d02ffc657bd657e7d5e"
  },
  {
    "url": "pa/embera/grammar/article/index.html",
    "revision": "27c2003cb3d157ded9fa318fa82444b6"
  },
  {
    "url": "pa/embera/grammar/guide/index.html",
    "revision": "2730649547c52f9c222fe328eb328262"
  },
  {
    "url": "pa/embera/grammar/verbs/index.html",
    "revision": "080d8fa940b901f1e093b51ee68f056b"
  },
  {
    "url": "pa/embera/index.html",
    "revision": "66d17f2016d4ea1b78597bab65e96d90"
  },
  {
    "url": "pa/embera/vocabulary/animals/index.html",
    "revision": "96b7d1f45a68026f4ac91ad895c3bb0d"
  },
  {
    "url": "pa/embera/vocabulary/greetings/index.html",
    "revision": "8a7279708e2a565d87c36129b42fd6fa"
  },
  {
    "url": "pa/embera/vocabulary/more_used/index.html",
    "revision": "f07640996d8780ad872228967869f845"
  },
  {
    "url": "pa/embera/vocabulary/people/index.html",
    "revision": "936f25e09e4acc10db38a1b0b05d0c71"
  },
  {
    "url": "pa/embera/vocabulary/phrases/index.html",
    "revision": "ad85afa0fc34b3dc9817ccd0d3708a2e"
  },
  {
    "url": "pa/kuna/courses/basic/index.html",
    "revision": "b6f3bd8d3571551211aae9faa6dfdfbb"
  },
  {
    "url": "pa/kuna/courses/intermediate/index.html",
    "revision": "1d13afed173cca37bad0e5640dc82f27"
  },
  {
    "url": "pa/kuna/dictionary/glossary.html",
    "revision": "0607786c45e8ca3cb2f985cc4d85ff34"
  },
  {
    "url": "pa/kuna/dictionary/index.html",
    "revision": "d49aa000bace251075d5f8311f4ff05d"
  },
  {
    "url": "pa/kuna/grammar/adjective/index.html",
    "revision": "84969cd768d5b4894c90316756c56e07"
  },
  {
    "url": "pa/kuna/grammar/adverb/index.html",
    "revision": "46dac15fc9c6bcbd4665fe935a69c8fd"
  },
  {
    "url": "pa/kuna/grammar/alphabet/index.html",
    "revision": "216dd39853b82c9ed713880235552bf8"
  },
  {
    "url": "pa/kuna/grammar/article/index.html",
    "revision": "d76a73dfb3c86139c75cce4fb256da17"
  },
  {
    "url": "pa/kuna/grammar/guide/index.html",
    "revision": "7da59ba6d149094ca7612725096f48ad"
  },
  {
    "url": "pa/kuna/grammar/verbs/index.html",
    "revision": "e831c3d1226760c2a0a40914178697c7"
  },
  {
    "url": "pa/kuna/index.html",
    "revision": "69275945842c2de09f86b713d9e4db6e"
  },
  {
    "url": "pa/kuna/vocabulary/animals/index.html",
    "revision": "2bc222cb39ae738a840a81cde2edeaa8"
  },
  {
    "url": "pa/kuna/vocabulary/greetings/index.html",
    "revision": "9681d934839f7e19b051fdc5d929896f"
  },
  {
    "url": "pa/kuna/vocabulary/more_used/index.html",
    "revision": "d6af2cccfe34e6d2a2a0c9f9114e601c"
  },
  {
    "url": "pa/kuna/vocabulary/people/index.html",
    "revision": "2614867f5c03020c36829f9db189d8ef"
  },
  {
    "url": "pa/kuna/vocabulary/phrases/index.html",
    "revision": "267223474b0aa35900d5424be4a432dd"
  },
  {
    "url": "pa/ngabere/courses/basic/index.html",
    "revision": "1c6b5595664c08253204cc81f65fc586"
  },
  {
    "url": "pa/ngabere/courses/intermediate/index.html",
    "revision": "90e20dbfd7e8bfec69bca0761b731221"
  },
  {
    "url": "pa/ngabere/dictionary/glossary.html",
    "revision": "59184429b4d2d31089cc29df28b8bf2c"
  },
  {
    "url": "pa/ngabere/dictionary/index.html",
    "revision": "5d53a326f9529b0abc6ef71bca1aee93"
  },
  {
    "url": "pa/ngabere/grammar/adjective/index.html",
    "revision": "abf608ca16e40e25801e092fedee47e3"
  },
  {
    "url": "pa/ngabere/grammar/adverb/index.html",
    "revision": "6fb808926200642863c02dcbb447ad8a"
  },
  {
    "url": "pa/ngabere/grammar/alphabet/index.html",
    "revision": "3b1a807711846d5dc3ae9a40c94266a9"
  },
  {
    "url": "pa/ngabere/grammar/article/index.html",
    "revision": "ee9072a92cc5d57953b976730acf07b1"
  },
  {
    "url": "pa/ngabere/grammar/guide/index.html",
    "revision": "efe64d4fc77412651c18fe45ec6016fb"
  },
  {
    "url": "pa/ngabere/grammar/verbs/index.html",
    "revision": "83460121c90c6aa8285b1a95e3a5a8ca"
  },
  {
    "url": "pa/ngabere/index.html",
    "revision": "321550f61611164741c890f8c68682eb"
  },
  {
    "url": "pa/ngabere/vocabulary/animals/index.html",
    "revision": "960770884217a93c95cd62b758948ef2"
  },
  {
    "url": "pa/ngabere/vocabulary/greetings/index.html",
    "revision": "49b7c9338bc234b5e9b41bd0dbd58bb3"
  },
  {
    "url": "pa/ngabere/vocabulary/more_used/index.html",
    "revision": "7b97c67217b1a91d41fa54c3abd2a63a"
  },
  {
    "url": "pa/ngabere/vocabulary/people/index.html",
    "revision": "43a3218842bdd56821f869397ec5227b"
  },
  {
    "url": "pa/ngabere/vocabulary/phrases/index.html",
    "revision": "6422f078e469201cf2e5d9480217c90e"
  },
  {
    "url": "pa/patois/courses/basic/index.html",
    "revision": "0f5375f5b52a5db298bfbad3ff7674a9"
  },
  {
    "url": "pa/patois/courses/intermediate/index.html",
    "revision": "adacc312c40375b456660616dfc2ab7f"
  },
  {
    "url": "pa/patois/dictionary/glossary.html",
    "revision": "cf176c5ea229da006c09edd93bfb3eb2"
  },
  {
    "url": "pa/patois/dictionary/index.html",
    "revision": "1a27571d4c50481d00bc9efb5d3c9f85"
  },
  {
    "url": "pa/patois/grammar/adjective/index.html",
    "revision": "a17a6ff2542ad29ebb1d84a7a3480312"
  },
  {
    "url": "pa/patois/grammar/adverb/index.html",
    "revision": "4b04744b32d1cb927f339cebaaf99bac"
  },
  {
    "url": "pa/patois/grammar/alphabet/index.html",
    "revision": "4d940c6dc3585b58133dfc9f9120d8c6"
  },
  {
    "url": "pa/patois/grammar/article/index.html",
    "revision": "a9756bcb76cd8a277a8cda89a9d2c297"
  },
  {
    "url": "pa/patois/grammar/guide/index.html",
    "revision": "561ac973e4306bc4862e7a922a201593"
  },
  {
    "url": "pa/patois/grammar/verbs/index.html",
    "revision": "eb406460d062a68e1d4821b2d36cf389"
  },
  {
    "url": "pa/patois/index.html",
    "revision": "77afdd347a3ea80706beef160ec5e398"
  },
  {
    "url": "pa/patois/vocabulary/animals/index.html",
    "revision": "a3e7f6e658cca35781aea1220b0fde60"
  },
  {
    "url": "pa/patois/vocabulary/greetings/index.html",
    "revision": "e604742df0bd08c0c2d64248fab91036"
  },
  {
    "url": "pa/patois/vocabulary/more_used/index.html",
    "revision": "c362bec0affe29ad9ed75e8a999e0b2b"
  },
  {
    "url": "pa/patois/vocabulary/people/index.html",
    "revision": "5b3383469ece06ffbaaf08d0b69af872"
  },
  {
    "url": "pa/patois/vocabulary/phrases/index.html",
    "revision": "8edfd5cfa3d7b655245ccbb5075924fb"
  },
  {
    "url": "pa/teribe/courses/basic/index.html",
    "revision": "28c262a47b3eac525e0601afd41eee7f"
  },
  {
    "url": "pa/teribe/courses/intermediate/index.html",
    "revision": "e775d0df72326f51fea89aaf128c081e"
  },
  {
    "url": "pa/teribe/dictionary/glossary.html",
    "revision": "b7af25fcfba88e23c54735c94e3fd433"
  },
  {
    "url": "pa/teribe/dictionary/index.html",
    "revision": "d7d6fdde8ded4fd1a051782928867bf2"
  },
  {
    "url": "pa/teribe/grammar/adjective/index.html",
    "revision": "4c6dd34364e46cc7776641063d63f38a"
  },
  {
    "url": "pa/teribe/grammar/adverb/index.html",
    "revision": "ade14d43cd955ddfec23f62967cfdf99"
  },
  {
    "url": "pa/teribe/grammar/alphabet/index.html",
    "revision": "138511ac2cc64c565659b827dfb81fdc"
  },
  {
    "url": "pa/teribe/grammar/article/index.html",
    "revision": "4cb8395246e9db28e36e594abf6ccdb7"
  },
  {
    "url": "pa/teribe/grammar/guide/index.html",
    "revision": "37e930f18e7c39e2a55cbb01c3fa2f3f"
  },
  {
    "url": "pa/teribe/grammar/verbs/index.html",
    "revision": "c2e263a1bce38ad8208e1a2f8c4c2db1"
  },
  {
    "url": "pa/teribe/index.html",
    "revision": "a806f473716f4d4da98ef921a01c2023"
  },
  {
    "url": "pa/teribe/vocabulary/animals/index.html",
    "revision": "e7f4c694656b8bb44d448f3bf2474a50"
  },
  {
    "url": "pa/teribe/vocabulary/greetings/index.html",
    "revision": "b7dbf6bc37d1df4da7bf5494b06af315"
  },
  {
    "url": "pa/teribe/vocabulary/more_used/index.html",
    "revision": "142f42e328a56acec750267fcaf3ee29"
  },
  {
    "url": "pa/teribe/vocabulary/people/index.html",
    "revision": "f82fc0154c279e0764bdfa828c6f6e2e"
  },
  {
    "url": "pa/teribe/vocabulary/phrases/index.html",
    "revision": "95f74b0d96bdc1cae479e3d2ab61a31f"
  },
  {
    "url": "pa/wounmeu/courses/basic/index.html",
    "revision": "5c7295744c69fe38a9f511008262bb66"
  },
  {
    "url": "pa/wounmeu/courses/intermediate/index.html",
    "revision": "fb28308b389c68fb9bc903b5fd679b44"
  },
  {
    "url": "pa/wounmeu/dictionary/glossary.html",
    "revision": "ef15d282fa9e8cdd25e557a82ddf739e"
  },
  {
    "url": "pa/wounmeu/dictionary/index.html",
    "revision": "845920ead3e0cb8c0d167db103f4bc8b"
  },
  {
    "url": "pa/wounmeu/grammar/adjective/index.html",
    "revision": "f26223507a75ee6f9c7d9a868bf8b895"
  },
  {
    "url": "pa/wounmeu/grammar/adverb/index.html",
    "revision": "b1120d9735d8106e2293e51ae8a90dab"
  },
  {
    "url": "pa/wounmeu/grammar/alphabet/index.html",
    "revision": "23e6314f924c0b021138356aeb07c31a"
  },
  {
    "url": "pa/wounmeu/grammar/article/index.html",
    "revision": "c1bbd4aee7a098e274cdd98d011fb8c4"
  },
  {
    "url": "pa/wounmeu/grammar/guide/index.html",
    "revision": "c70bd1556d74a0dce6be3a8d272a7c68"
  },
  {
    "url": "pa/wounmeu/grammar/verbs/index.html",
    "revision": "b801d07958daa9f2fac13f6c8c62d3ea"
  },
  {
    "url": "pa/wounmeu/index.html",
    "revision": "b42f27a7ac3913d8d5fc7d7d6501fd97"
  },
  {
    "url": "pa/wounmeu/vocabulary/animals/index.html",
    "revision": "e38abd09fea45529bb01b496db3f8f3d"
  },
  {
    "url": "pa/wounmeu/vocabulary/greetings/index.html",
    "revision": "173d6b8b30f73f2d42e2715075e04d01"
  },
  {
    "url": "pa/wounmeu/vocabulary/more_used/index.html",
    "revision": "f4e5f9da324dd1fe7858d04f779c191e"
  },
  {
    "url": "pa/wounmeu/vocabulary/people/index.html",
    "revision": "4b89cc38b3a948075858d27c5061acd4"
  },
  {
    "url": "pa/wounmeu/vocabulary/phrases/index.html",
    "revision": "dca5b8d1df128c410d7f5fc429dbdc2e"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
