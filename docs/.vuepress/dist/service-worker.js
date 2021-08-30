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
    "revision": "ebe0ee2a3f088861e19bb8a60484394d"
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
    "url": "assets/js/10.b2f77ac2.js",
    "revision": "b5ff824500bb1dbde750a5f347a56660"
  },
  {
    "url": "assets/js/100.b7218297.js",
    "revision": "8d3cefac1485c9a9c89e6b904ae63505"
  },
  {
    "url": "assets/js/101.5c8a0ed8.js",
    "revision": "8cae22203d1186c3fd0ed088c35b815b"
  },
  {
    "url": "assets/js/102.a5cb7f81.js",
    "revision": "e96b58a9aaf28351a3286f21633a49b1"
  },
  {
    "url": "assets/js/103.d62384a7.js",
    "revision": "60e6a102491e086676386924ea84efc5"
  },
  {
    "url": "assets/js/104.800a66b7.js",
    "revision": "04b57f84a7149b6da29011d17c1468d9"
  },
  {
    "url": "assets/js/105.2644239e.js",
    "revision": "9fea0eeef78848e0b92e698366dcb944"
  },
  {
    "url": "assets/js/106.6b2bf0da.js",
    "revision": "fc8f0243f598dfc2a510be1947663a38"
  },
  {
    "url": "assets/js/107.79c54cdf.js",
    "revision": "97465bbf67cc5f3fd6b1b12fd92071a4"
  },
  {
    "url": "assets/js/108.fbafa4a2.js",
    "revision": "cc83ec53b026903ec0775515cb44fd04"
  },
  {
    "url": "assets/js/109.d87fcf1c.js",
    "revision": "6ac6724446c37171fb35fecdd0d14553"
  },
  {
    "url": "assets/js/11.001093a4.js",
    "revision": "65228996bb5d991cf27b1b8f7713558b"
  },
  {
    "url": "assets/js/110.9cd88f97.js",
    "revision": "cbee4cbae93b8ed8fc862b8ea49735a5"
  },
  {
    "url": "assets/js/111.15f130ca.js",
    "revision": "608bd47e3dcfe02f9c02168f2e84e8d9"
  },
  {
    "url": "assets/js/112.39230fde.js",
    "revision": "8a48dbbd0d56799b4666f228390ebb48"
  },
  {
    "url": "assets/js/113.638dba0d.js",
    "revision": "f2c1480c21101c2d6c87ea607b17fd15"
  },
  {
    "url": "assets/js/114.23f3873b.js",
    "revision": "82c9f8a571800a81e2b36a507d811470"
  },
  {
    "url": "assets/js/115.42ef93ed.js",
    "revision": "eecf90826be666780f3b8ac514283b72"
  },
  {
    "url": "assets/js/116.9bea7f88.js",
    "revision": "18ae660b29830a807018d89ade940e95"
  },
  {
    "url": "assets/js/117.5df9a4ff.js",
    "revision": "40a60d5b86c676de046411917b7fe026"
  },
  {
    "url": "assets/js/118.2e56b8f9.js",
    "revision": "14c254b71eb06ec825cec5c6b40c573d"
  },
  {
    "url": "assets/js/119.6c36a84a.js",
    "revision": "dacbff966c384f9eb75856c6cc3df909"
  },
  {
    "url": "assets/js/12.d0b31b70.js",
    "revision": "e88228f6d83072c5bdf06c3477c89f9a"
  },
  {
    "url": "assets/js/120.ff3be177.js",
    "revision": "b070b8ae23c90ceadade7fc00b173351"
  },
  {
    "url": "assets/js/121.a66f4994.js",
    "revision": "39565731c24afa55a663fbc255484dca"
  },
  {
    "url": "assets/js/122.3112231f.js",
    "revision": "d33f083c9092dd7a2519a73a7eb346d2"
  },
  {
    "url": "assets/js/123.c8762592.js",
    "revision": "20ac174a164947dab92aa286905fc468"
  },
  {
    "url": "assets/js/124.b0052f1c.js",
    "revision": "438c93b0e1de2cef824925476ec8f7c1"
  },
  {
    "url": "assets/js/125.d404c1c1.js",
    "revision": "237a740327d7fe18c9e8b40d7644e648"
  },
  {
    "url": "assets/js/126.f8624eec.js",
    "revision": "406819c62ba3b5439a7f7e1a786ac973"
  },
  {
    "url": "assets/js/127.ea41cbdd.js",
    "revision": "d898bf4fad9d67a64073dbffc1c64e50"
  },
  {
    "url": "assets/js/128.22baa2b5.js",
    "revision": "5e935feb7c7d826e96d035197a6ae01a"
  },
  {
    "url": "assets/js/129.5407ffaf.js",
    "revision": "5b1e19a43f08228547d3d157fdbd8a72"
  },
  {
    "url": "assets/js/13.380e2845.js",
    "revision": "cd0ff5fe751642fb923dd22818814dff"
  },
  {
    "url": "assets/js/130.c405e479.js",
    "revision": "2111fa51c9a6466f138841550c7d9509"
  },
  {
    "url": "assets/js/131.f92b22d4.js",
    "revision": "ad2308a80aa2a968404d048bf804b71b"
  },
  {
    "url": "assets/js/132.8cbd97cd.js",
    "revision": "39f066bb9c1f98ef0853021830c44a28"
  },
  {
    "url": "assets/js/133.4172e652.js",
    "revision": "7a133daca12fd31eb8ea9e87d8e59baa"
  },
  {
    "url": "assets/js/134.b2df50ee.js",
    "revision": "2c8a4db11a845fef60145fc22b10e5ea"
  },
  {
    "url": "assets/js/135.f6f8d745.js",
    "revision": "19199e969d52c78cb47266f49b374f15"
  },
  {
    "url": "assets/js/136.51a590c5.js",
    "revision": "4a5b9912a03d6345d90e3f6908c93d87"
  },
  {
    "url": "assets/js/137.a0e275c6.js",
    "revision": "2ee5d24d188bd881676e23d3089aaf0f"
  },
  {
    "url": "assets/js/138.9605852b.js",
    "revision": "53b32e1637cca4756a4261283a9117ca"
  },
  {
    "url": "assets/js/139.bee6c75c.js",
    "revision": "771a8f66f87f929ba4285922405adb5f"
  },
  {
    "url": "assets/js/14.767714cc.js",
    "revision": "e6b52fafe420fdfdcb1402a817caccfa"
  },
  {
    "url": "assets/js/140.97bfc789.js",
    "revision": "812a977a2e131ae671988cedef6aefa5"
  },
  {
    "url": "assets/js/141.8ed461e1.js",
    "revision": "fbad0869d4f3fb26cf6bb0998a2c778c"
  },
  {
    "url": "assets/js/142.cbb43106.js",
    "revision": "19dc15d57043c28ec88336aeb4515c3b"
  },
  {
    "url": "assets/js/143.3434aa66.js",
    "revision": "690a24b750b43b254fbbf2d79e573784"
  },
  {
    "url": "assets/js/144.c46adefa.js",
    "revision": "c5ff10cb8707f422b860d436d79fd2f6"
  },
  {
    "url": "assets/js/145.f3946e2b.js",
    "revision": "a22f220c69dcb364420020f69fd571b4"
  },
  {
    "url": "assets/js/146.6a0a9fa2.js",
    "revision": "9b4b8fa67cf8a6653ac96142b6e4f633"
  },
  {
    "url": "assets/js/147.0da4a586.js",
    "revision": "198b1e01dd10beafda4deb98f60920d0"
  },
  {
    "url": "assets/js/148.1b0b0c6b.js",
    "revision": "382f44bf7aa1235cf7cf465f1ef63fa3"
  },
  {
    "url": "assets/js/149.1e7efa1e.js",
    "revision": "62a997bf3888836774b7702890baf2fa"
  },
  {
    "url": "assets/js/15.433e9747.js",
    "revision": "3fdbbce86c8b78515690c44a950e86b0"
  },
  {
    "url": "assets/js/150.8c62dd39.js",
    "revision": "293e2aa7f246dc4176864057562be739"
  },
  {
    "url": "assets/js/151.a1cb8127.js",
    "revision": "98771282e8ade1671ad73a698b26750b"
  },
  {
    "url": "assets/js/152.c1c9a03b.js",
    "revision": "ffee104ed5ca74eb434b4cd532640365"
  },
  {
    "url": "assets/js/153.2fd527b9.js",
    "revision": "a354bc5588bc8cabe78a6ae4059c4565"
  },
  {
    "url": "assets/js/154.f902ba2f.js",
    "revision": "cdad2109d2bbb34e60148a2d210407fa"
  },
  {
    "url": "assets/js/155.c73416cc.js",
    "revision": "cb85045afb85771e7d5b217082d1f4d6"
  },
  {
    "url": "assets/js/156.fde29a34.js",
    "revision": "68ce4875fd693e929f26fdd267b2cc42"
  },
  {
    "url": "assets/js/157.6f657f63.js",
    "revision": "ba656ca85a855de8951633ad03cd04c6"
  },
  {
    "url": "assets/js/158.58de2a4b.js",
    "revision": "d05645a45aee0ee6722aebbff10422e1"
  },
  {
    "url": "assets/js/159.9cdd16af.js",
    "revision": "b60eb16f143784490c8074f0c22dccc2"
  },
  {
    "url": "assets/js/16.8d13127f.js",
    "revision": "1b4c8cec123c707c5045028c0d415a4a"
  },
  {
    "url": "assets/js/160.15f729eb.js",
    "revision": "5a5ee4f2d4d312c064739e7103c2488b"
  },
  {
    "url": "assets/js/161.fc6ec5b3.js",
    "revision": "a1324ced47f51a5f7d5a0cf792b0f410"
  },
  {
    "url": "assets/js/162.96460cd0.js",
    "revision": "6336fddff1e759baeb8881934ccbb90d"
  },
  {
    "url": "assets/js/163.7c59ad04.js",
    "revision": "2495e47ae208dc7f4a191567f172ea56"
  },
  {
    "url": "assets/js/164.6b4c10db.js",
    "revision": "c9f0fcabbc9b81b5ba5a761418df73ca"
  },
  {
    "url": "assets/js/165.afaf2ab1.js",
    "revision": "9793f957c2a46eb727a82103652190f7"
  },
  {
    "url": "assets/js/166.e0f90524.js",
    "revision": "d55ac66826c12305f3d3f69e099699d2"
  },
  {
    "url": "assets/js/167.cef2777e.js",
    "revision": "5de5b162ff81b12c9d4f28c27344e79f"
  },
  {
    "url": "assets/js/168.a2f24044.js",
    "revision": "f2fe88807f2e2df77e8ef7cf28092336"
  },
  {
    "url": "assets/js/169.cebc5157.js",
    "revision": "68c246e0ba9acfd338cdc77eacdf789b"
  },
  {
    "url": "assets/js/17.3352986c.js",
    "revision": "eb77bb9bcc0e2cdab10aaf1daf6dbf19"
  },
  {
    "url": "assets/js/170.d36d07c0.js",
    "revision": "a832a92867667a69dc32ff6140931a89"
  },
  {
    "url": "assets/js/171.cb9f137d.js",
    "revision": "67533a9340bca5a2bd26a6ab9ace2a87"
  },
  {
    "url": "assets/js/172.8fb05b45.js",
    "revision": "2b11828512f0a9315452a310f56ba188"
  },
  {
    "url": "assets/js/173.c2eeef6f.js",
    "revision": "7fa8357fee83f3e36c76de242bb2868a"
  },
  {
    "url": "assets/js/174.aa13c714.js",
    "revision": "cc9e14ddb84cb4c5f41b2fbcc43d729d"
  },
  {
    "url": "assets/js/175.e4601ed4.js",
    "revision": "39afba6aa529ca290abc07cd2740c433"
  },
  {
    "url": "assets/js/176.e5e18916.js",
    "revision": "8a64c9d450961c3366afb2e2c7930584"
  },
  {
    "url": "assets/js/177.a6057698.js",
    "revision": "84aece9d0fbadd7e7e7b016f5df0d957"
  },
  {
    "url": "assets/js/178.27ae5ad4.js",
    "revision": "bb3961b20b52cf9f61c693128d4c2440"
  },
  {
    "url": "assets/js/179.4af768ef.js",
    "revision": "b5b533fda89cd2fe325a310f79ec3ae6"
  },
  {
    "url": "assets/js/18.09c9cbdd.js",
    "revision": "d1217e7827783d423b720347ddf34d8e"
  },
  {
    "url": "assets/js/180.e780add5.js",
    "revision": "c9539b0c010bdc701aa33830bbda35e5"
  },
  {
    "url": "assets/js/181.07f86c74.js",
    "revision": "9ab21a6bd8336cfcefb8895ff50c5d24"
  },
  {
    "url": "assets/js/182.29d17099.js",
    "revision": "2f6843070e5e36110922474f03659d44"
  },
  {
    "url": "assets/js/183.fb573a08.js",
    "revision": "e884d860553ddf9b98d0d0cff1fcdf2d"
  },
  {
    "url": "assets/js/184.87ca0fca.js",
    "revision": "8deb3d6737d7ea4161d790c937476927"
  },
  {
    "url": "assets/js/185.6773001e.js",
    "revision": "e1b36849063428c0411fd06ec84c8b6f"
  },
  {
    "url": "assets/js/186.ceac961e.js",
    "revision": "4c6484be295f81b8eb12b50fb6ccf00a"
  },
  {
    "url": "assets/js/187.50d439d8.js",
    "revision": "7a1d88339e1b518e983d6f508e7967b6"
  },
  {
    "url": "assets/js/188.243e1174.js",
    "revision": "2c077e4bcd9909d0c305f65220c5ec4a"
  },
  {
    "url": "assets/js/189.9646c7a9.js",
    "revision": "cd960e477db4ca621ce345ff32ad368f"
  },
  {
    "url": "assets/js/19.ab570163.js",
    "revision": "1d84275d2142c762c9e44a95e05e194a"
  },
  {
    "url": "assets/js/190.04f0a7c9.js",
    "revision": "633837648e1b043fd87a02e77b6bbc53"
  },
  {
    "url": "assets/js/191.1439b0aa.js",
    "revision": "9cde4a3031409351f1887ffcda12299e"
  },
  {
    "url": "assets/js/192.d0c17808.js",
    "revision": "ce3e370fd813cd96e9ff11ecbdb2acac"
  },
  {
    "url": "assets/js/193.0d3e98c7.js",
    "revision": "cf9ef52142cb47f6c57d3147a76646dc"
  },
  {
    "url": "assets/js/194.42257b9d.js",
    "revision": "70b758ffe139e6464085096df737e650"
  },
  {
    "url": "assets/js/195.54c88f18.js",
    "revision": "0b2de05db9fbafaa980e371d4fdacc51"
  },
  {
    "url": "assets/js/196.58da8497.js",
    "revision": "ee29408dcdc56cd1d940d147cebdda3b"
  },
  {
    "url": "assets/js/197.db8f3e10.js",
    "revision": "1ece924231f3c2270b114be385bcd34d"
  },
  {
    "url": "assets/js/198.46b72e92.js",
    "revision": "399ff164f1657c4ac7e2390d69da71e3"
  },
  {
    "url": "assets/js/199.19fd59e7.js",
    "revision": "1b676862aec13964c0f07ae0927376a5"
  },
  {
    "url": "assets/js/2.55d58284.js",
    "revision": "446804a68808232bd16a15614f01d0ad"
  },
  {
    "url": "assets/js/20.3cda7eb5.js",
    "revision": "4007bc46e86ec544c30dccc0d7f8678d"
  },
  {
    "url": "assets/js/200.3c9674ad.js",
    "revision": "089787bfc1122e0b2e06768b6af15ac9"
  },
  {
    "url": "assets/js/201.70b91ea1.js",
    "revision": "2cbce5585d9ffa1d1947e3bfab63fa4e"
  },
  {
    "url": "assets/js/202.e8ad8121.js",
    "revision": "7a276fde78c4af98e72457efe3cd3763"
  },
  {
    "url": "assets/js/203.93096867.js",
    "revision": "51bf58fcb03efa696920cd20709e39b1"
  },
  {
    "url": "assets/js/204.4abacf9f.js",
    "revision": "dbeff14dbc7a8cff98db02aaf16bb189"
  },
  {
    "url": "assets/js/205.1d4dc139.js",
    "revision": "3ed6d22680344f99cb31ac8e137261c8"
  },
  {
    "url": "assets/js/206.aca2a9fa.js",
    "revision": "34eb310ab6ae919cb955976d5e648f17"
  },
  {
    "url": "assets/js/207.288f330f.js",
    "revision": "615e3e0a334cb10102607de55e4848ac"
  },
  {
    "url": "assets/js/208.05c9cd7f.js",
    "revision": "ee1dd56c5a9a0779ab37bfd459eb7be1"
  },
  {
    "url": "assets/js/209.bd616a94.js",
    "revision": "74378e4928eded247a7e0d42bebd758b"
  },
  {
    "url": "assets/js/21.125cbb87.js",
    "revision": "f4536cc514d019ee7d2696a4866074f0"
  },
  {
    "url": "assets/js/210.7d07e365.js",
    "revision": "edabad32ae0d6e6908627cd45ec396da"
  },
  {
    "url": "assets/js/211.31bb6531.js",
    "revision": "34c0cacd46e76a9352cd488a4a27795c"
  },
  {
    "url": "assets/js/212.861c9074.js",
    "revision": "3327ac215fa5633b25062fc7579c331c"
  },
  {
    "url": "assets/js/213.12953880.js",
    "revision": "06e93ceb1459aeaa393685b5ed4504ad"
  },
  {
    "url": "assets/js/214.bd4753ab.js",
    "revision": "a2abc1dd0ae33faedbc7079391b33894"
  },
  {
    "url": "assets/js/215.b6992a56.js",
    "revision": "72c891b31f329c5daf5a9ea529969980"
  },
  {
    "url": "assets/js/216.dafa4099.js",
    "revision": "56c2f38f03ae0ca97096c618d62aa5b6"
  },
  {
    "url": "assets/js/217.71e8b29f.js",
    "revision": "2cc2f7f80ba0a6490e84c3789280975c"
  },
  {
    "url": "assets/js/218.7ffd93bd.js",
    "revision": "e7df22893e2a703f4cf8a152fbf93e8f"
  },
  {
    "url": "assets/js/219.731fc726.js",
    "revision": "93de2c3a89247f2141467ce810d89984"
  },
  {
    "url": "assets/js/22.a3ca356f.js",
    "revision": "faf8266a6d12631c68dc607a5908af69"
  },
  {
    "url": "assets/js/220.3ed980da.js",
    "revision": "941922de2a334e52a492d4aae1f07dd0"
  },
  {
    "url": "assets/js/221.b7176276.js",
    "revision": "93f0f9eb8208a69438374cca31909b73"
  },
  {
    "url": "assets/js/222.d28cc91e.js",
    "revision": "0a46e8ba5816bf6f36e0ba81ae697c27"
  },
  {
    "url": "assets/js/223.94f8ac1c.js",
    "revision": "4587dab58502c7a4f2f2488c63f374a8"
  },
  {
    "url": "assets/js/224.bfe609fc.js",
    "revision": "263e4e1896ce7fbea24d7cbb179af3f1"
  },
  {
    "url": "assets/js/225.61e881be.js",
    "revision": "27438a740242666e05bb4668fc67b3e0"
  },
  {
    "url": "assets/js/226.1b400e87.js",
    "revision": "604f90c1dd27d8f5a8d8c8279a7d189f"
  },
  {
    "url": "assets/js/227.873ac29d.js",
    "revision": "1f9a9ddceeec24e57221e1ce0a6e6f16"
  },
  {
    "url": "assets/js/228.80d8ef24.js",
    "revision": "2033f2949e816fccfc70fd8b71cfc1de"
  },
  {
    "url": "assets/js/229.615c2c87.js",
    "revision": "ca45b90edde12cc248b858047ffb8c7c"
  },
  {
    "url": "assets/js/23.7d72e569.js",
    "revision": "b74a963bd53a4cf2c5d62ec28f461704"
  },
  {
    "url": "assets/js/230.e41ba442.js",
    "revision": "2c16a8e7f3f3a0ffc512ef8f6f6c5208"
  },
  {
    "url": "assets/js/231.48728036.js",
    "revision": "ad38ad5db8c94bc001b8aa50265a554e"
  },
  {
    "url": "assets/js/232.52dccb5a.js",
    "revision": "f22407c44c38348afb3976acaa4fc912"
  },
  {
    "url": "assets/js/233.3104c9cc.js",
    "revision": "819a6a5d838e1e2b17ecf6fcae319313"
  },
  {
    "url": "assets/js/234.22e8e746.js",
    "revision": "aa5023a758d8783d03b82819b64fdc03"
  },
  {
    "url": "assets/js/235.77fac67f.js",
    "revision": "88e1385508f10d3d39b106f604f737ef"
  },
  {
    "url": "assets/js/236.7845cc88.js",
    "revision": "3f13dcb25f4a35ddf35ae155c3d871e1"
  },
  {
    "url": "assets/js/237.dba098d9.js",
    "revision": "1990b0f7d46d442f5b2dfbd3536d344f"
  },
  {
    "url": "assets/js/238.c0ab082b.js",
    "revision": "5d389c88a038c4475bb714f32c6cd497"
  },
  {
    "url": "assets/js/239.efc8f01f.js",
    "revision": "90450254fa1e179b710ec6736fcb8c6e"
  },
  {
    "url": "assets/js/24.a67c070f.js",
    "revision": "5042f8c828cb65be55cd243abd831702"
  },
  {
    "url": "assets/js/240.b8823325.js",
    "revision": "74469b90ccad1a5f9e79727e658db5db"
  },
  {
    "url": "assets/js/241.326b9bbd.js",
    "revision": "af946820c936a4852c30d2d69edd5bda"
  },
  {
    "url": "assets/js/242.20516aaf.js",
    "revision": "0ed6e2ca0890a32ee395ac80f8356099"
  },
  {
    "url": "assets/js/243.686ecc9c.js",
    "revision": "1249bb6cbbdf66ee797f199c99a02b26"
  },
  {
    "url": "assets/js/244.86f4d835.js",
    "revision": "75c88e613ce12c720264508c813f69ff"
  },
  {
    "url": "assets/js/245.5bb2834b.js",
    "revision": "33c52a1e5d385b51b0e824b41364b70d"
  },
  {
    "url": "assets/js/246.db70d1b6.js",
    "revision": "65e2f8d2bfa6f088343ba016d65c9b5a"
  },
  {
    "url": "assets/js/247.d52f0b34.js",
    "revision": "529ac35e35d1d946fcd7375e69e556b5"
  },
  {
    "url": "assets/js/248.d44bedc4.js",
    "revision": "75bc60a526ca0f08041fb577626c4bd0"
  },
  {
    "url": "assets/js/249.3d79d607.js",
    "revision": "91b3307c5c0074923f36346f732dd680"
  },
  {
    "url": "assets/js/25.5bf57b8a.js",
    "revision": "eb8ad167aa989a1f8306319e32f5ebbc"
  },
  {
    "url": "assets/js/250.68e7da1a.js",
    "revision": "2b0f385c7d9c14c9d76273b2bb0c61cb"
  },
  {
    "url": "assets/js/251.ed2043a8.js",
    "revision": "b2e953f38425e7634991ad326d739f82"
  },
  {
    "url": "assets/js/252.0d1fe7d1.js",
    "revision": "bd7fbe0d3aa9d5566a7cf853cc7568fe"
  },
  {
    "url": "assets/js/253.dfcf799b.js",
    "revision": "624ab539f1888383bb08957f8e8a4da6"
  },
  {
    "url": "assets/js/254.030f3950.js",
    "revision": "01da56c9d520dda4a814884ed828bf44"
  },
  {
    "url": "assets/js/255.026f5043.js",
    "revision": "376ea5ab49673e11ff4f65d326672b72"
  },
  {
    "url": "assets/js/256.90d79b29.js",
    "revision": "30bdaece72f81c8a309de7a7f65f16da"
  },
  {
    "url": "assets/js/257.4a4f84e6.js",
    "revision": "83ae556549d31d90fa89940261312541"
  },
  {
    "url": "assets/js/258.97fc43ff.js",
    "revision": "4b2ca909c47a2959b15a6bf0c70c0698"
  },
  {
    "url": "assets/js/259.26931960.js",
    "revision": "a70519ab7f822a7d41e1f70e791d6b9c"
  },
  {
    "url": "assets/js/26.a1e81fde.js",
    "revision": "c9800451bf44bb274c6b1dbfcdb3319b"
  },
  {
    "url": "assets/js/260.440473ad.js",
    "revision": "550efc29934365ff1e6bf9083ec41d0d"
  },
  {
    "url": "assets/js/261.6360f968.js",
    "revision": "3ae9a892835f09dbf97054c029385d93"
  },
  {
    "url": "assets/js/262.ff47aff5.js",
    "revision": "520c2e5ff5ebc7091e3fee91e9c16d19"
  },
  {
    "url": "assets/js/263.5b142c69.js",
    "revision": "9e6b25adc3d4121399c55199422e1c47"
  },
  {
    "url": "assets/js/264.7ad89acf.js",
    "revision": "ee8f09fdee6a5fd5aa056acffe79b06a"
  },
  {
    "url": "assets/js/265.d721ac27.js",
    "revision": "9fa414766504f952c7946fda34a98a6b"
  },
  {
    "url": "assets/js/266.3aecdf94.js",
    "revision": "cd602013ab6200f18917fc728c0fbc59"
  },
  {
    "url": "assets/js/267.118cee1d.js",
    "revision": "d41476c6a75b4a3f3fb89eeb7ffde0b3"
  },
  {
    "url": "assets/js/268.4b0cc777.js",
    "revision": "c1a0bd78f6cad8a860bd9ba69b092d02"
  },
  {
    "url": "assets/js/269.d8489630.js",
    "revision": "53fe226f98364a667dd4698dd6330702"
  },
  {
    "url": "assets/js/27.7f3ce9df.js",
    "revision": "80c35b709e8ab414f35a75ee4f38c77f"
  },
  {
    "url": "assets/js/270.172efe7e.js",
    "revision": "a7e51a0c9b295c0f44f232a99a59bb04"
  },
  {
    "url": "assets/js/271.8a15212a.js",
    "revision": "8eaedabc7d3609889876209f2249f469"
  },
  {
    "url": "assets/js/272.8cfcc25b.js",
    "revision": "b25d21492e96bb304ff744d7d5b072f2"
  },
  {
    "url": "assets/js/273.5b7d2885.js",
    "revision": "662e62133826e1cbd7b3d6d3726fe8dc"
  },
  {
    "url": "assets/js/274.c99dccc1.js",
    "revision": "1eeb5143ba680b2eef573193b21c6389"
  },
  {
    "url": "assets/js/275.5c6f8782.js",
    "revision": "3b1de3e1aaa903c74474b3f5ce6c3703"
  },
  {
    "url": "assets/js/276.1aa6c7eb.js",
    "revision": "a9a9b8957b2cfd46599c32209f65be53"
  },
  {
    "url": "assets/js/277.84fd073c.js",
    "revision": "b1a9c929b27c9149673743608ca96ad5"
  },
  {
    "url": "assets/js/278.551a79e6.js",
    "revision": "b557cd2b82e3437b5c94fc38a001c24a"
  },
  {
    "url": "assets/js/279.f7de1ac8.js",
    "revision": "2b4ca97fdb561357e5a2756e5b3d189b"
  },
  {
    "url": "assets/js/28.a714e404.js",
    "revision": "f747b165c93b1529b0f167690e61b207"
  },
  {
    "url": "assets/js/280.aa5008d3.js",
    "revision": "480ab9be67a6ea1fd644626154b2882c"
  },
  {
    "url": "assets/js/281.c7185f2e.js",
    "revision": "c370a7a239cf467f8482ab3f23b98e3d"
  },
  {
    "url": "assets/js/282.367f3a50.js",
    "revision": "2986622bd89a16a929d432fbec8436f4"
  },
  {
    "url": "assets/js/283.51884d1b.js",
    "revision": "4b20e0ee672c85d1f6c3d901020d75f1"
  },
  {
    "url": "assets/js/284.9b6bcb73.js",
    "revision": "96c4c8faa1858003868bb8ebdcab617c"
  },
  {
    "url": "assets/js/285.a573a0e0.js",
    "revision": "021e0b503859cdfaa128703da4131c39"
  },
  {
    "url": "assets/js/286.80713035.js",
    "revision": "861c7af935e1b1e040501d829eb1acb3"
  },
  {
    "url": "assets/js/287.41062f6a.js",
    "revision": "5485de461022f5df9d66cee83d1ddf44"
  },
  {
    "url": "assets/js/288.e95c2427.js",
    "revision": "c570fe1dbc7ef148e35569d496f5b494"
  },
  {
    "url": "assets/js/289.74f38380.js",
    "revision": "13a044ab04e06234087939c48c1642b3"
  },
  {
    "url": "assets/js/29.934a1f7b.js",
    "revision": "499b6c2c469801ab5c92eaee54458f5e"
  },
  {
    "url": "assets/js/290.06460e26.js",
    "revision": "43b9761994bf3280c3229f57b6faf781"
  },
  {
    "url": "assets/js/291.9e766308.js",
    "revision": "c71139e8acd6fbb50df468b6f59aff1a"
  },
  {
    "url": "assets/js/292.66cf3ee6.js",
    "revision": "9e48c9dee80fdac54ad5d14f05c6cf6c"
  },
  {
    "url": "assets/js/293.7a6fea96.js",
    "revision": "9db38298f61b183d80132c0314a88345"
  },
  {
    "url": "assets/js/294.93a4b0cb.js",
    "revision": "86ad4fa85f2c38138312bf13c23c9953"
  },
  {
    "url": "assets/js/295.49b58a58.js",
    "revision": "f2dbffcd823f5e54ce08f4722575f8eb"
  },
  {
    "url": "assets/js/296.d15c1ccc.js",
    "revision": "77329bcb7c1dca4a5506524fa9833448"
  },
  {
    "url": "assets/js/297.82f82c23.js",
    "revision": "ee4b2716f2104aa30c3a3bcdd261a908"
  },
  {
    "url": "assets/js/298.bb12ffa4.js",
    "revision": "eb1a3f41ce78b28bb7726e0675f95622"
  },
  {
    "url": "assets/js/299.f9890a2b.js",
    "revision": "946db5c807221fc5f18c7bc8714e681a"
  },
  {
    "url": "assets/js/3.7ba7d1f1.js",
    "revision": "88420c3b378f1ff7ec0f9c83d1ffce32"
  },
  {
    "url": "assets/js/30.7dc5acee.js",
    "revision": "0bcdc62ade0f048642bdb1528f44675a"
  },
  {
    "url": "assets/js/300.f836df3c.js",
    "revision": "e719803f3de2e9e5ce4acaa83f0457c3"
  },
  {
    "url": "assets/js/301.76b83ef3.js",
    "revision": "f9136d759f24557008aaa83e7bbca051"
  },
  {
    "url": "assets/js/302.c81e31f1.js",
    "revision": "b82d7c71c42da42d4f9063c3eeba19c7"
  },
  {
    "url": "assets/js/303.788e48c6.js",
    "revision": "d1f7b89a59180f9000c95b49d663283a"
  },
  {
    "url": "assets/js/304.b765fb65.js",
    "revision": "2aed056fe60b5c46517562bae745a9a7"
  },
  {
    "url": "assets/js/305.b39bd848.js",
    "revision": "1ad3d8dbfbd6862cf813873960df2cae"
  },
  {
    "url": "assets/js/306.61f6853f.js",
    "revision": "cf9547c416b65b373cba0af41a837e97"
  },
  {
    "url": "assets/js/307.59851ef7.js",
    "revision": "ed6b6cbc8095cdee5275e9aae98027d3"
  },
  {
    "url": "assets/js/308.8fa846c9.js",
    "revision": "24f84966594c2fc02fe2fd5af586529f"
  },
  {
    "url": "assets/js/309.c88f2fa8.js",
    "revision": "986a06edcfebd8a576e63e9170fbf995"
  },
  {
    "url": "assets/js/31.1130a763.js",
    "revision": "b9988cc97f85d5289633db6cad4625bf"
  },
  {
    "url": "assets/js/310.298e335d.js",
    "revision": "b09416c9851a994e908227fbef397131"
  },
  {
    "url": "assets/js/311.26561658.js",
    "revision": "76a0e5fae76ccf108f8a9a45b47a5c18"
  },
  {
    "url": "assets/js/312.288a3db9.js",
    "revision": "c05a81bc5fc44b849af3b3d18bdccfbc"
  },
  {
    "url": "assets/js/313.21593f20.js",
    "revision": "c6d7344c3f6476f053b03bd17a8aa6a2"
  },
  {
    "url": "assets/js/314.eedf578d.js",
    "revision": "54f5f5b945320333e38f48059ea3659c"
  },
  {
    "url": "assets/js/315.0893dda6.js",
    "revision": "0a74e3c1af7f3a2c1caa9b634a79602d"
  },
  {
    "url": "assets/js/316.5bdee1a4.js",
    "revision": "7dfa625ee476f34ca7ccaf8ce88298b9"
  },
  {
    "url": "assets/js/317.6a0a9677.js",
    "revision": "0b93ab54c58a9912d06ffc61067a360d"
  },
  {
    "url": "assets/js/318.2ef4a8fd.js",
    "revision": "028d002d02020bf6c0f746144f4cb112"
  },
  {
    "url": "assets/js/319.1359b8ba.js",
    "revision": "91c1a91eb3c57c5f0b6cf163a62c36a0"
  },
  {
    "url": "assets/js/32.573a031f.js",
    "revision": "f45c1cfe39ac4a8a55936b7df954f975"
  },
  {
    "url": "assets/js/320.530b9a24.js",
    "revision": "dbc0419fb46cedfad0b83597a682c8b5"
  },
  {
    "url": "assets/js/321.8c05a1d5.js",
    "revision": "31b37a7c38087887f606c8eaf94d3695"
  },
  {
    "url": "assets/js/322.d683c224.js",
    "revision": "512b9ba43dc0bb6785d473dd15fddfbc"
  },
  {
    "url": "assets/js/323.f4af185d.js",
    "revision": "41f56643e009bdb90eb51a774d101805"
  },
  {
    "url": "assets/js/324.ccafe33c.js",
    "revision": "701723cc085f1333eaeb504f44d8ce13"
  },
  {
    "url": "assets/js/325.ec3dcc17.js",
    "revision": "9c16839b5dc522d7ffd983ee66354e6e"
  },
  {
    "url": "assets/js/326.899d5e21.js",
    "revision": "842f07e189ae39729daa05d64269eb08"
  },
  {
    "url": "assets/js/327.685116d1.js",
    "revision": "a94bd0d939a0a8dcce32a1e0ee2eeecd"
  },
  {
    "url": "assets/js/328.882f8f3e.js",
    "revision": "80e522c7067fddbac15a6a3bcda424db"
  },
  {
    "url": "assets/js/329.02d04cae.js",
    "revision": "50780437f90d214b8915abeba706db53"
  },
  {
    "url": "assets/js/33.6330a6b7.js",
    "revision": "3c3de65c2decee775cb17f61e3861cb2"
  },
  {
    "url": "assets/js/330.2fa02fc0.js",
    "revision": "c42ee8274c5d026d4e518294cae0577c"
  },
  {
    "url": "assets/js/331.5f35829c.js",
    "revision": "e87c25c31104239c62428c0398a1e7db"
  },
  {
    "url": "assets/js/332.e9b82b1f.js",
    "revision": "6f8e7a6750ac22cc773b4695249b8264"
  },
  {
    "url": "assets/js/333.6c0e4ee3.js",
    "revision": "da97d8179a56e14c090c53daa8584b2b"
  },
  {
    "url": "assets/js/334.1f456852.js",
    "revision": "2a7b351198e739412c6309a43e3ec5f7"
  },
  {
    "url": "assets/js/335.51ebbfa2.js",
    "revision": "03a630adb3298d02fbc52b1aa4423af2"
  },
  {
    "url": "assets/js/336.c9e062e5.js",
    "revision": "c9ad131d7bd984214febb2380be47a02"
  },
  {
    "url": "assets/js/337.44cf5bca.js",
    "revision": "04a84d285cf0a6f712bf1d9f70cba2d9"
  },
  {
    "url": "assets/js/338.be2ae2cf.js",
    "revision": "dd917926b0a90814ebc072151a9904c4"
  },
  {
    "url": "assets/js/339.530afdbb.js",
    "revision": "cce6702910cb6911f33ba20fd036530d"
  },
  {
    "url": "assets/js/34.20d88f5e.js",
    "revision": "a6a76aadab7c26205d8eb3d0f2c8847c"
  },
  {
    "url": "assets/js/340.e1bee241.js",
    "revision": "e0d138df7b5d567518af4345183bb840"
  },
  {
    "url": "assets/js/341.d74672cf.js",
    "revision": "e1df340b51722c604f93644b01569ef0"
  },
  {
    "url": "assets/js/342.aaaa6fdb.js",
    "revision": "9588d907e3b59a58e3e890a4b1f01420"
  },
  {
    "url": "assets/js/343.513fe55c.js",
    "revision": "9a4195ce6924a617888a95a72bdd50e2"
  },
  {
    "url": "assets/js/344.083586d2.js",
    "revision": "b1e2ec1a711c2f5cd44faf3f1673bf7a"
  },
  {
    "url": "assets/js/345.fd2011dd.js",
    "revision": "3e1e99f2c2207e03de731ded09411145"
  },
  {
    "url": "assets/js/35.f1b2cbd6.js",
    "revision": "1992a9525527f354713f39c8635e9387"
  },
  {
    "url": "assets/js/36.6ce3a53a.js",
    "revision": "fc375fed1165f8e34c449152c1335fae"
  },
  {
    "url": "assets/js/37.19723d40.js",
    "revision": "51a5a1fa72083d58e92efbc2bc240e04"
  },
  {
    "url": "assets/js/38.e5250681.js",
    "revision": "faa065a0be2ef9d81f3bf71ababd4a4d"
  },
  {
    "url": "assets/js/39.588dbd9f.js",
    "revision": "9e30c89097acd924d6b28e0de7c3dfa7"
  },
  {
    "url": "assets/js/4.499fcb2f.js",
    "revision": "8898f0a9e5a56bea3b2ecb24884194e6"
  },
  {
    "url": "assets/js/40.64059a40.js",
    "revision": "4a0c1f9dbdd1e9f602a9bf3fb9ee2f51"
  },
  {
    "url": "assets/js/41.72886a45.js",
    "revision": "2b2654dbd59b92a55ded561c967c1486"
  },
  {
    "url": "assets/js/42.04ac6844.js",
    "revision": "24e322f37a275cb65be493908bca4cd3"
  },
  {
    "url": "assets/js/43.4fe67777.js",
    "revision": "c0ddde6045303436dbb1a7c186179e2a"
  },
  {
    "url": "assets/js/44.6a81ca7b.js",
    "revision": "fc935dc5122b4cae49775373febb4e6b"
  },
  {
    "url": "assets/js/45.60204af0.js",
    "revision": "3ecee60500fe0e52851444793a96d204"
  },
  {
    "url": "assets/js/46.1d7126e4.js",
    "revision": "cc92bb66b43ec5f9e9b295266ba1269f"
  },
  {
    "url": "assets/js/47.a4af8600.js",
    "revision": "12f56a5d51632bbdfa3920506265e51a"
  },
  {
    "url": "assets/js/48.7a0b2722.js",
    "revision": "16a4017282624e4ee80bdc6b6b741f49"
  },
  {
    "url": "assets/js/49.8fe85175.js",
    "revision": "c1db5c1386cacc21d511a621b1b92bfb"
  },
  {
    "url": "assets/js/5.1e6dda83.js",
    "revision": "d66ad8a73294963fd890d10e2aa0e6ca"
  },
  {
    "url": "assets/js/50.d1dbe219.js",
    "revision": "9acbedc6e4dadabdc27b7aff9da97e45"
  },
  {
    "url": "assets/js/51.46dd264e.js",
    "revision": "4c3140569fa66bb68c3e664deaf9c33b"
  },
  {
    "url": "assets/js/52.dd2a0d95.js",
    "revision": "130570c493bb5d31300b07801abd65d1"
  },
  {
    "url": "assets/js/53.bb4eb071.js",
    "revision": "169f5d236307bd2a43970d308b5f8b08"
  },
  {
    "url": "assets/js/54.905a3080.js",
    "revision": "4b4c3d2d981b530a0f5d7211cebe0998"
  },
  {
    "url": "assets/js/55.4798858c.js",
    "revision": "8c348ac45b5e93b0dedeb05173dac513"
  },
  {
    "url": "assets/js/56.925b39a5.js",
    "revision": "f9c94de4dd004981937dfee05b6c0061"
  },
  {
    "url": "assets/js/57.c1e848ec.js",
    "revision": "3638319740ef8cd476a35b1cfa470c58"
  },
  {
    "url": "assets/js/58.29cd82b5.js",
    "revision": "bec3bd33240a4e83a0e58abadebeaa6e"
  },
  {
    "url": "assets/js/59.9a77bae2.js",
    "revision": "1b4e2f09ad505bd6f99e76e11ae05838"
  },
  {
    "url": "assets/js/6.51721f4f.js",
    "revision": "763c0e07549b2547b6bfc578141656b1"
  },
  {
    "url": "assets/js/60.801460fb.js",
    "revision": "a841e8bf89ae376857e559685c9ceef7"
  },
  {
    "url": "assets/js/61.5d31e0f2.js",
    "revision": "0616a2243247c86793d24efe8db5306e"
  },
  {
    "url": "assets/js/62.5926c702.js",
    "revision": "8dbb37a035d95c63ddaeea655979a85e"
  },
  {
    "url": "assets/js/63.0cfe5bb0.js",
    "revision": "c76654af9c4b62a2aa22db95e23fb6fd"
  },
  {
    "url": "assets/js/64.f088c808.js",
    "revision": "196ee05e35eba00eb92710a55b2214ce"
  },
  {
    "url": "assets/js/65.2bd06b59.js",
    "revision": "684d7109ad0dc965862837c860f138e8"
  },
  {
    "url": "assets/js/66.43693bfb.js",
    "revision": "2daa5da245f0eb69d7529ef77a7fbaec"
  },
  {
    "url": "assets/js/67.8a002d96.js",
    "revision": "4c515c874e4bb517103ef6d9a825d837"
  },
  {
    "url": "assets/js/68.0f345b18.js",
    "revision": "bbe357270bfa682187d8104e6fb9d751"
  },
  {
    "url": "assets/js/69.2b43907a.js",
    "revision": "5c6c9d294ce0de987585419cc63f4033"
  },
  {
    "url": "assets/js/7.1117f526.js",
    "revision": "69b9b6e194ed2589d19b7febe5834926"
  },
  {
    "url": "assets/js/70.068d5054.js",
    "revision": "aed0cd4479b082afc0d241f72832473b"
  },
  {
    "url": "assets/js/71.da10b76a.js",
    "revision": "500766bc1d14a0c3d1ef9de66a1ad1f4"
  },
  {
    "url": "assets/js/72.9d32a36f.js",
    "revision": "e99755dcfe7b3ac7658d9ccf176fb44a"
  },
  {
    "url": "assets/js/73.be21fb3a.js",
    "revision": "a228a8e68659eb6fde717ea3e1d67acb"
  },
  {
    "url": "assets/js/74.a6815b4f.js",
    "revision": "160a34fd6ca9a31779d64ddb063cad46"
  },
  {
    "url": "assets/js/75.72cf1148.js",
    "revision": "8f02e492ac209b2e817fbb86b17d4962"
  },
  {
    "url": "assets/js/76.216eb3e6.js",
    "revision": "6d2eb3a3c80c88de1725bc208d050bde"
  },
  {
    "url": "assets/js/77.befdf9c8.js",
    "revision": "c62a8e40b948f38fc8cdee70143a96c4"
  },
  {
    "url": "assets/js/78.765cce5a.js",
    "revision": "844a2294b0bbe8b50c6d7abce5a9aaa1"
  },
  {
    "url": "assets/js/79.d8cf87da.js",
    "revision": "f9b9831d3c559863f900869d2fe6db24"
  },
  {
    "url": "assets/js/8.c0afbd91.js",
    "revision": "fcd4b89b127b59be9ebdf75f38aea306"
  },
  {
    "url": "assets/js/80.b4ab3d13.js",
    "revision": "5d7f14504187c77208423d241ecb3e8b"
  },
  {
    "url": "assets/js/81.fe5c0641.js",
    "revision": "b4be0bbc2b79ad042aacb0ce74f601ab"
  },
  {
    "url": "assets/js/82.a38384bb.js",
    "revision": "376d73484c091757361ecf9611250eac"
  },
  {
    "url": "assets/js/83.bccae53b.js",
    "revision": "35cf23cc164fe826ecebb15af060c0a2"
  },
  {
    "url": "assets/js/84.411f3fe1.js",
    "revision": "692a226ad63cf544c7f06ba3e33e2261"
  },
  {
    "url": "assets/js/85.82e9fd8d.js",
    "revision": "3fbe036ae7e4d4185b2023984491d3c3"
  },
  {
    "url": "assets/js/86.1858b7a9.js",
    "revision": "0ff9b86d802f84367fe562cb178b3699"
  },
  {
    "url": "assets/js/87.dd7e8c37.js",
    "revision": "92f1eac6fa0ccf97b0f7522bfe84b176"
  },
  {
    "url": "assets/js/88.8fa63cf3.js",
    "revision": "5ecb3cdd3a5fc14efa6f850ee6a3fbac"
  },
  {
    "url": "assets/js/89.39168db1.js",
    "revision": "5d0dfbf7f94cea9690397d75ecdf219f"
  },
  {
    "url": "assets/js/9.d047e61a.js",
    "revision": "210811718fe251e1b33ff9b6c8bb443c"
  },
  {
    "url": "assets/js/90.3229b410.js",
    "revision": "ad974db209abc7fbc13bcbe1fa291730"
  },
  {
    "url": "assets/js/91.db3369ee.js",
    "revision": "7c09672272f276756f2033dd3417296d"
  },
  {
    "url": "assets/js/92.b98a980d.js",
    "revision": "089ade134196a9caa27923a2d1cae950"
  },
  {
    "url": "assets/js/93.c6e6ab5c.js",
    "revision": "4a7cb36808e735f66337fe1e375b190c"
  },
  {
    "url": "assets/js/94.2cdff96d.js",
    "revision": "d73a24bd49dcc3fb265f7929497c8fea"
  },
  {
    "url": "assets/js/95.856115bb.js",
    "revision": "4833d44beac157cb8eeae75768791146"
  },
  {
    "url": "assets/js/96.2e99ca97.js",
    "revision": "36efc75572e000a40878458424db20fe"
  },
  {
    "url": "assets/js/97.acab343e.js",
    "revision": "658d9f9d5885e4ea3bc78be83e471844"
  },
  {
    "url": "assets/js/98.918e1400.js",
    "revision": "f3d237c3782e2aec8b1c77a27a9a470b"
  },
  {
    "url": "assets/js/99.128d9d1f.js",
    "revision": "d6003c4be10c1afa35faf27b67c0cdce"
  },
  {
    "url": "assets/js/app.9b85b4c8.js",
    "revision": "0496d0c791ccf2d5a6d3dea2c9acd32d"
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
    "revision": "c77e747e94701497fe6cb3c146872038"
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
    "revision": "9b9e03d743304d1c09e3d245b526a8f4"
  },
  {
    "url": "mx/chol/courses/intermediate/index.html",
    "revision": "29adbddf80da884f45a7ed87e6c9f52f"
  },
  {
    "url": "mx/chol/dictionary/glossary.html",
    "revision": "766112aa4ba3554de247b98aa9cf551c"
  },
  {
    "url": "mx/chol/dictionary/index.html",
    "revision": "37e59699155ac29bad515525de7212ae"
  },
  {
    "url": "mx/chol/grammar/adjective/index.html",
    "revision": "33d819f2aa6a265498b02f6e4f3ed9f9"
  },
  {
    "url": "mx/chol/grammar/adverb/index.html",
    "revision": "a09afe585557cf8119afd0d3f4e55775"
  },
  {
    "url": "mx/chol/grammar/alphabet/index.html",
    "revision": "85e8a33c99ea4a89cb8fe9a474ec710f"
  },
  {
    "url": "mx/chol/grammar/article/index.html",
    "revision": "738035ea2e28aade54aad82e145cbcd1"
  },
  {
    "url": "mx/chol/grammar/guide/index.html",
    "revision": "86a068f343c38545101a994126c74a75"
  },
  {
    "url": "mx/chol/grammar/verbs/index.html",
    "revision": "a96836f3f5b61aa087885cc31fb0067d"
  },
  {
    "url": "mx/chol/index.html",
    "revision": "ab1a378b0df3bf00d0ab87a8e4460cf7"
  },
  {
    "url": "mx/chol/vocabulary/animals/index.html",
    "revision": "652fa1a1cad706cec863b38a6600ec52"
  },
  {
    "url": "mx/chol/vocabulary/greetings/index.html",
    "revision": "cd2ac6f1e6bbec3b1fce27c94f0d47ae"
  },
  {
    "url": "mx/chol/vocabulary/more_used/index.html",
    "revision": "51be9288d49ba78c89ec1154dae12b89"
  },
  {
    "url": "mx/chol/vocabulary/people/index.html",
    "revision": "865e5e318954e9e98582740ce710b34d"
  },
  {
    "url": "mx/chol/vocabulary/phrases/index.html",
    "revision": "6a239216f762eaad90b773929e3c625b"
  },
  {
    "url": "mx/chontal/courses/basic/index.html",
    "revision": "7fbe1e028879da9e03132c241ddefe6d"
  },
  {
    "url": "mx/chontal/courses/intermediate/index.html",
    "revision": "ac72adf984a0d2954364cda7d0457172"
  },
  {
    "url": "mx/chontal/dictionary/glossary.html",
    "revision": "387464e13cfa06677245af90a248c8fc"
  },
  {
    "url": "mx/chontal/dictionary/index.html",
    "revision": "6c23695ba071268b463d143472adbcc4"
  },
  {
    "url": "mx/chontal/grammar/adjective/index.html",
    "revision": "cd275ed4cd26eaa5f326e579d7bcff3d"
  },
  {
    "url": "mx/chontal/grammar/adverb/index.html",
    "revision": "cba58930d547a769c654d64550138c89"
  },
  {
    "url": "mx/chontal/grammar/alphabet/index.html",
    "revision": "83f93b94e703b16cad59d5d749a2e48a"
  },
  {
    "url": "mx/chontal/grammar/article/index.html",
    "revision": "90eac2a18cda9732b72a4fdcf7b14011"
  },
  {
    "url": "mx/chontal/grammar/guide/index.html",
    "revision": "a871dd72770fa24dae4859f84c467cd2"
  },
  {
    "url": "mx/chontal/grammar/verbs/index.html",
    "revision": "4cd51c9191a6b6ca3a73d94a3ab6a9a7"
  },
  {
    "url": "mx/chontal/index.html",
    "revision": "71d0ed9d56382218aef279b5e885f44e"
  },
  {
    "url": "mx/chontal/vocabulary/animals/index.html",
    "revision": "b88e73a928297ce6a13f5c82e6cfe22c"
  },
  {
    "url": "mx/chontal/vocabulary/greetings/index.html",
    "revision": "03f1caa0b55476b9acf677a314ad5a1b"
  },
  {
    "url": "mx/chontal/vocabulary/more_used/index.html",
    "revision": "0dd3633d00bb2d2274e385f2d5b2d8fe"
  },
  {
    "url": "mx/chontal/vocabulary/people/index.html",
    "revision": "360602d086194168faa2359b7c09fc99"
  },
  {
    "url": "mx/chontal/vocabulary/phrases/index.html",
    "revision": "aa675323e8f9814e9eab16e7cb95661c"
  },
  {
    "url": "mx/cucapa/courses/basic/index.html",
    "revision": "0315e8dd0b43da00ccfdedbc3913bf55"
  },
  {
    "url": "mx/cucapa/courses/intermediate/index.html",
    "revision": "4492a22413f786b69195a5926a438c88"
  },
  {
    "url": "mx/cucapa/dictionary/glossary.html",
    "revision": "0992381c9864e351bda5a2d3ba978367"
  },
  {
    "url": "mx/cucapa/dictionary/index.html",
    "revision": "09eeb28ed77b9b1b9f760fdf4ea3771d"
  },
  {
    "url": "mx/cucapa/grammar/adjective/index.html",
    "revision": "ad0590fe6a6f2d8c4ff748bcad895858"
  },
  {
    "url": "mx/cucapa/grammar/adverb/index.html",
    "revision": "7398e0fa51ec4ae56192349a1206c9ae"
  },
  {
    "url": "mx/cucapa/grammar/alphabet/index.html",
    "revision": "02c60b0588690ff7313e2318ea0f64d1"
  },
  {
    "url": "mx/cucapa/grammar/article/index.html",
    "revision": "98dad1c2b0aebfe528f97be5f334f333"
  },
  {
    "url": "mx/cucapa/grammar/guide/index.html",
    "revision": "423b8046ef2bbe1bcea6aeac0d9ddef2"
  },
  {
    "url": "mx/cucapa/grammar/verbs/index.html",
    "revision": "dc79830bf357755a6b1a3a50ed734456"
  },
  {
    "url": "mx/cucapa/index.html",
    "revision": "873af5e64a31ca0650001267f35e242b"
  },
  {
    "url": "mx/cucapa/vocabulary/animals/index.html",
    "revision": "2de4e78a1dd47a972e97de4e20e09c12"
  },
  {
    "url": "mx/cucapa/vocabulary/greetings/index.html",
    "revision": "f29eff11f3e6f191039859b7dbc06ea7"
  },
  {
    "url": "mx/cucapa/vocabulary/more_used/index.html",
    "revision": "de45bf3c48569fb04852f972688b3ed5"
  },
  {
    "url": "mx/cucapa/vocabulary/people/index.html",
    "revision": "c3ea531fcfdfece3c2628d5e7d467bb8"
  },
  {
    "url": "mx/cucapa/vocabulary/phrases/index.html",
    "revision": "3f7019cd90fd980512729bb6a4003598"
  },
  {
    "url": "mx/huasteco/courses/basic/index.html",
    "revision": "51f84dc263b70add5f43681f2d6c8641"
  },
  {
    "url": "mx/huasteco/courses/intermediate/index.html",
    "revision": "7849e21845d954f011568fc7bf72e2d3"
  },
  {
    "url": "mx/huasteco/dictionary/glossary.html",
    "revision": "534e2b8a0260342e467fcff134feed04"
  },
  {
    "url": "mx/huasteco/dictionary/index.html",
    "revision": "9f969d1bac12a005f44beddfadba45d2"
  },
  {
    "url": "mx/huasteco/grammar/adjective/index.html",
    "revision": "051feae1f2723bf84626e05954732898"
  },
  {
    "url": "mx/huasteco/grammar/adverb/index.html",
    "revision": "3be5effec5835098062470ed5283d0c6"
  },
  {
    "url": "mx/huasteco/grammar/alphabet/index.html",
    "revision": "8df692545bc82af46e96eb9dbd43fcb0"
  },
  {
    "url": "mx/huasteco/grammar/article/index.html",
    "revision": "ef950aa119c40d332a86a49b10f6ba09"
  },
  {
    "url": "mx/huasteco/grammar/guide/index.html",
    "revision": "c97e9b57b285b2d6d2e34278551b38ce"
  },
  {
    "url": "mx/huasteco/grammar/verbs/index.html",
    "revision": "e6037eda3d583b6a751838f03836fb66"
  },
  {
    "url": "mx/huasteco/index.html",
    "revision": "4fa90e3d843cf4df84b9410dae7db6bf"
  },
  {
    "url": "mx/huasteco/vocabulary/animals/index.html",
    "revision": "e8d2ce056b65ca92df38aa70412c1357"
  },
  {
    "url": "mx/huasteco/vocabulary/greetings/index.html",
    "revision": "0f803be05cd092935a3457553aedd15b"
  },
  {
    "url": "mx/huasteco/vocabulary/more_used/index.html",
    "revision": "1a49d43a605344a84ddbabd7f5586cf1"
  },
  {
    "url": "mx/huasteco/vocabulary/people/index.html",
    "revision": "d4484f7c9a22aed1147c4ef8389823da"
  },
  {
    "url": "mx/huasteco/vocabulary/phrases/index.html",
    "revision": "555b8f35f7dc37632219212da3471141"
  },
  {
    "url": "mx/huave/courses/basic/index.html",
    "revision": "c4dae392cf070795ece70b149093ab22"
  },
  {
    "url": "mx/huave/courses/intermediate/index.html",
    "revision": "10cd56943b8a52187e2db1714473ad68"
  },
  {
    "url": "mx/huave/dictionary/glossary.html",
    "revision": "beb89e95fb5e29d3806f4c46dccfc131"
  },
  {
    "url": "mx/huave/dictionary/index.html",
    "revision": "7a8637ed5399772865ebd60fd28593bb"
  },
  {
    "url": "mx/huave/grammar/adjective/index.html",
    "revision": "fb564622555b74bfcedd194e642acd9e"
  },
  {
    "url": "mx/huave/grammar/adverb/index.html",
    "revision": "044843442f7c36a1ff81165f28c2f35a"
  },
  {
    "url": "mx/huave/grammar/alphabet/index.html",
    "revision": "8f5bd0d996a4b6e942990666b839dac3"
  },
  {
    "url": "mx/huave/grammar/article/index.html",
    "revision": "793f1abe98476ca71d61d02e88d9e933"
  },
  {
    "url": "mx/huave/grammar/guide/index.html",
    "revision": "dd0b39e73d716a7f202053bbe9fea74a"
  },
  {
    "url": "mx/huave/grammar/verbs/index.html",
    "revision": "606e584664a6775bf31da4e0793b9fd2"
  },
  {
    "url": "mx/huave/index.html",
    "revision": "d55d38502e080a13352e336e180e6410"
  },
  {
    "url": "mx/huave/vocabulary/animals/index.html",
    "revision": "9e0981156fa71c890372f7e7bf94a602"
  },
  {
    "url": "mx/huave/vocabulary/greetings/index.html",
    "revision": "2471904b65263c8ebcb79bad05a0a907"
  },
  {
    "url": "mx/huave/vocabulary/more_used/index.html",
    "revision": "3117166bcc1490e54e697a448d631675"
  },
  {
    "url": "mx/huave/vocabulary/people/index.html",
    "revision": "4ea9bfd34335563b139885a37e8a8731"
  },
  {
    "url": "mx/huave/vocabulary/phrases/index.html",
    "revision": "2da0da45692a4e4d0f529c2af47b77e9"
  },
  {
    "url": "mx/kickapoo/courses/basic/index.html",
    "revision": "b663073d71ab970a9da46278b1496774"
  },
  {
    "url": "mx/kickapoo/courses/intermediate/index.html",
    "revision": "1cfd45080644c80723c0090d1eddcab2"
  },
  {
    "url": "mx/kickapoo/dictionary/glossary.html",
    "revision": "8c5be88ba510042f5391752c4e733875"
  },
  {
    "url": "mx/kickapoo/dictionary/index.html",
    "revision": "ba759d4a3bd9c0a18246ce0aaa89f66d"
  },
  {
    "url": "mx/kickapoo/grammar/adjective/index.html",
    "revision": "38924dd1e24ddbc554ff509b27c27c29"
  },
  {
    "url": "mx/kickapoo/grammar/adverb/index.html",
    "revision": "6aa653f0d01990c3d415f2b4c5759177"
  },
  {
    "url": "mx/kickapoo/grammar/alphabet/index.html",
    "revision": "a3ecc08ced8d7a8ea1597ec9ab47afe4"
  },
  {
    "url": "mx/kickapoo/grammar/article/index.html",
    "revision": "62d571e50b068c3c9f575813087344ad"
  },
  {
    "url": "mx/kickapoo/grammar/guide/index.html",
    "revision": "781adb19d325a46a18cea9eaf2dfd1bd"
  },
  {
    "url": "mx/kickapoo/grammar/verbs/index.html",
    "revision": "284d55a4dcb84ffcd30bc724b220eccb"
  },
  {
    "url": "mx/kickapoo/index.html",
    "revision": "93c3ca29c533629db856c19c896112bc"
  },
  {
    "url": "mx/kickapoo/vocabulary/animals/index.html",
    "revision": "504e7b0989804308380cd4669b2e818b"
  },
  {
    "url": "mx/kickapoo/vocabulary/greetings/index.html",
    "revision": "114dbb051c54860501e5a0179ad211f4"
  },
  {
    "url": "mx/kickapoo/vocabulary/more_used/index.html",
    "revision": "1e407f26b876209d9db1696a68985733"
  },
  {
    "url": "mx/kickapoo/vocabulary/people/index.html",
    "revision": "12f577ef8eac52c05efed142e108d2f1"
  },
  {
    "url": "mx/kickapoo/vocabulary/phrases/index.html",
    "revision": "bb8a8d5cc272a03b3cb9b8afcbe8a74d"
  },
  {
    "url": "mx/kiliwa/courses/basic/index.html",
    "revision": "fe4775fc8059305da3e81554ae996bd0"
  },
  {
    "url": "mx/kiliwa/courses/intermediate/index.html",
    "revision": "a009cb0048ca38aeeae4966d0e0111b2"
  },
  {
    "url": "mx/kiliwa/dictionary/glossary.html",
    "revision": "7e933ac87e9c6ab16a32adca07ac4042"
  },
  {
    "url": "mx/kiliwa/dictionary/index.html",
    "revision": "4396f7728223120f79daccc359c2f198"
  },
  {
    "url": "mx/kiliwa/grammar/adjective/index.html",
    "revision": "f8f6e9b50ec8ffc4bfb5e9e59f74e18c"
  },
  {
    "url": "mx/kiliwa/grammar/adverb/index.html",
    "revision": "49d4ab5d9ede4f6415d6ac077ae03f58"
  },
  {
    "url": "mx/kiliwa/grammar/alphabet/index.html",
    "revision": "dd7ac731f766062938025fe2f2b8a83b"
  },
  {
    "url": "mx/kiliwa/grammar/article/index.html",
    "revision": "b7303fab08c9ad80ee6cbf8a37231e45"
  },
  {
    "url": "mx/kiliwa/grammar/guide/index.html",
    "revision": "6ec6a41b9ba9a8c8d3dfb588097889b9"
  },
  {
    "url": "mx/kiliwa/grammar/verbs/index.html",
    "revision": "99332d414d1a45911170da08baa16bce"
  },
  {
    "url": "mx/kiliwa/index.html",
    "revision": "4eec001a86009f1613bf08542a6dd32b"
  },
  {
    "url": "mx/kiliwa/vocabulary/animals/index.html",
    "revision": "6eb4ebb99c6effdf69e1c4c4c2820d05"
  },
  {
    "url": "mx/kiliwa/vocabulary/greetings/index.html",
    "revision": "967c6c2a061343e23c20e4e36ec501c5"
  },
  {
    "url": "mx/kiliwa/vocabulary/more_used/index.html",
    "revision": "9dd8b3af4933677a4cad3b0b7b07c752"
  },
  {
    "url": "mx/kiliwa/vocabulary/people/index.html",
    "revision": "5f0dc8ee346a5b3993f95fdb3a42b25a"
  },
  {
    "url": "mx/kiliwa/vocabulary/phrases/index.html",
    "revision": "de35eb3ca9691b0124e37973ef917b89"
  },
  {
    "url": "mx/kuahl/courses/basic/index.html",
    "revision": "5ef6a261a8519bee09c0da4399d28fa4"
  },
  {
    "url": "mx/kuahl/courses/intermediate/index.html",
    "revision": "710e9643bd8958dac5305140a8c9748f"
  },
  {
    "url": "mx/kuahl/dictionary/glossary.html",
    "revision": "5618bdd48eecfa0e98e3b400ede145e8"
  },
  {
    "url": "mx/kuahl/dictionary/index.html",
    "revision": "4873c0cc3c75f8e8d893614da8458a0d"
  },
  {
    "url": "mx/kuahl/grammar/adjective/index.html",
    "revision": "1733dd7cf8dd2aa895932e6ee510ab66"
  },
  {
    "url": "mx/kuahl/grammar/adverb/index.html",
    "revision": "30e49060ae1fde090b0b4a499b63d0e8"
  },
  {
    "url": "mx/kuahl/grammar/alphabet/index.html",
    "revision": "ef32b5cdece4e2af74969d704b6be75e"
  },
  {
    "url": "mx/kuahl/grammar/article/index.html",
    "revision": "2f109524565dc259e0b37ef3c2381e5f"
  },
  {
    "url": "mx/kuahl/grammar/guide/index.html",
    "revision": "fa102af92bf3e0bce9a79082dad843f8"
  },
  {
    "url": "mx/kuahl/grammar/verbs/index.html",
    "revision": "49d3d65e51c026228653922da40e07cc"
  },
  {
    "url": "mx/kuahl/index.html",
    "revision": "06cf953989d1a98ff87bfd1ba0ae660f"
  },
  {
    "url": "mx/kuahl/vocabulary/animals/index.html",
    "revision": "7d5e31df8285fb71d092a1c7766c0457"
  },
  {
    "url": "mx/kuahl/vocabulary/greetings/index.html",
    "revision": "c4a716600a1b2f3dc60d8a5477bcfa91"
  },
  {
    "url": "mx/kuahl/vocabulary/more_used/index.html",
    "revision": "a30dd16fbc3ec95b8b2603553bd09436"
  },
  {
    "url": "mx/kuahl/vocabulary/people/index.html",
    "revision": "6592135d203e4029c6c778de6974c372"
  },
  {
    "url": "mx/kuahl/vocabulary/phrases/index.html",
    "revision": "2fa6597d302b6836bc19e6c0e78cb19d"
  },
  {
    "url": "mx/kumiai/courses/basic/index.html",
    "revision": "bb09d86cfd6270744cb8a344bbe8a82a"
  },
  {
    "url": "mx/kumiai/courses/intermediate/index.html",
    "revision": "50e3101e52b73e2418d21421c8099369"
  },
  {
    "url": "mx/kumiai/dictionary/glossary.html",
    "revision": "8798324d1fc97f7871cbc609f253cdfb"
  },
  {
    "url": "mx/kumiai/dictionary/index.html",
    "revision": "1c59b44422997feba47417aaf11d910d"
  },
  {
    "url": "mx/kumiai/grammar/adjective/index.html",
    "revision": "460990ab29b52ddf58a9c6f98605433b"
  },
  {
    "url": "mx/kumiai/grammar/adverb/index.html",
    "revision": "4e8751fdae8bcb458f78c2046d6ae016"
  },
  {
    "url": "mx/kumiai/grammar/alphabet/index.html",
    "revision": "ef74126ffcd652537376f92f947620e0"
  },
  {
    "url": "mx/kumiai/grammar/article/index.html",
    "revision": "4871ea6799645fafd135e7b28f2d8a72"
  },
  {
    "url": "mx/kumiai/grammar/guide/index.html",
    "revision": "18842733a9e18c5c84bcbfb679a17e68"
  },
  {
    "url": "mx/kumiai/grammar/verbs/index.html",
    "revision": "5379b3cad22119d92246bac0851dbdf5"
  },
  {
    "url": "mx/kumiai/index.html",
    "revision": "ea907b1514f81e6790263ca1ae4c5ed1"
  },
  {
    "url": "mx/kumiai/vocabulary/animals/index.html",
    "revision": "41547639721691f0c3b3d85c585e9643"
  },
  {
    "url": "mx/kumiai/vocabulary/greetings/index.html",
    "revision": "953a1fe0ccdebf7a14c1cc302d373fa1"
  },
  {
    "url": "mx/kumiai/vocabulary/more_used/index.html",
    "revision": "997b53041ac802632719ae439cd8ca02"
  },
  {
    "url": "mx/kumiai/vocabulary/people/index.html",
    "revision": "a4ef18b16d8d404a37893bc758e62401"
  },
  {
    "url": "mx/kumiai/vocabulary/phrases/index.html",
    "revision": "a1eb13418000a78bc88fae4a568e3686"
  },
  {
    "url": "mx/lacandon/courses/basic/index.html",
    "revision": "f2ee818e735aa7e73fbc75ad8f893d35"
  },
  {
    "url": "mx/lacandon/courses/intermediate/index.html",
    "revision": "160560b49533d923c5da62dff8227d70"
  },
  {
    "url": "mx/lacandon/dictionary/glossary.html",
    "revision": "f3f67d91009ece960df2eca8c817a70b"
  },
  {
    "url": "mx/lacandon/dictionary/index.html",
    "revision": "c362d4e1240f9c2df3b6f0cf5bbb2ec2"
  },
  {
    "url": "mx/lacandon/grammar/adjective/index.html",
    "revision": "d92b7ebbdf4f0acbce8fed799762d50a"
  },
  {
    "url": "mx/lacandon/grammar/adverb/index.html",
    "revision": "ff777c12a1ee2ef650a22051737e2e04"
  },
  {
    "url": "mx/lacandon/grammar/alphabet/index.html",
    "revision": "ebb8abc4810fbf094d13c2a079f22bbb"
  },
  {
    "url": "mx/lacandon/grammar/article/index.html",
    "revision": "7b2c1e6338407d83a9deb4c98bf621f2"
  },
  {
    "url": "mx/lacandon/grammar/guide/index.html",
    "revision": "35bb0ec642c2dc0d2b05fc2b653aa85a"
  },
  {
    "url": "mx/lacandon/grammar/verbs/index.html",
    "revision": "645f4f8397c364f8042f1606d623cf87"
  },
  {
    "url": "mx/lacandon/index.html",
    "revision": "0c38bc7ca0b8e20c4c9eaf242e70c720"
  },
  {
    "url": "mx/lacandon/vocabulary/animals/index.html",
    "revision": "18d3f2af591672b8f0df816f40735ff9"
  },
  {
    "url": "mx/lacandon/vocabulary/greetings/index.html",
    "revision": "e303811468534f02377f2d07d5c62b7d"
  },
  {
    "url": "mx/lacandon/vocabulary/more_used/index.html",
    "revision": "2abb128e3ee066c383f934be7b86c736"
  },
  {
    "url": "mx/lacandon/vocabulary/people/index.html",
    "revision": "224c5ec04eb3bba5f196d7d9b4b397c3"
  },
  {
    "url": "mx/lacandon/vocabulary/phrases/index.html",
    "revision": "dd88f6be0e32ff913f9cf64bcfcf5660"
  },
  {
    "url": "mx/paipai/courses/basic/index.html",
    "revision": "930f38dc8c24478211b4678c4d8b073e"
  },
  {
    "url": "mx/paipai/courses/intermediate/index.html",
    "revision": "b80dcba7d080c76f0320ccaa99a18f92"
  },
  {
    "url": "mx/paipai/dictionary/glossary.html",
    "revision": "8c111004c243ce6d6a69b122aa7e8263"
  },
  {
    "url": "mx/paipai/dictionary/index.html",
    "revision": "ace2c639af90ce652f190c2c72e1de4d"
  },
  {
    "url": "mx/paipai/grammar/adjective/index.html",
    "revision": "4400c928871d5b714dff2331cc3aac95"
  },
  {
    "url": "mx/paipai/grammar/adverb/index.html",
    "revision": "f98076083513fee9fb4d38787ea7dfc5"
  },
  {
    "url": "mx/paipai/grammar/alphabet/index.html",
    "revision": "75c4fee0b69322b942d4599a56597652"
  },
  {
    "url": "mx/paipai/grammar/article/index.html",
    "revision": "00aba823037dc7793677461aa4bfd21c"
  },
  {
    "url": "mx/paipai/grammar/guide/index.html",
    "revision": "c5d3d32e5e40b526ce8fcbf7d815722a"
  },
  {
    "url": "mx/paipai/grammar/verbs/index.html",
    "revision": "943eff8cb19df0a4c99977ef00727f1b"
  },
  {
    "url": "mx/paipai/index.html",
    "revision": "3bf03e16fc363078b5867a6e78a8a392"
  },
  {
    "url": "mx/paipai/vocabulary/animals/index.html",
    "revision": "d9db73344c69ae11bdbfe0af2b9d6275"
  },
  {
    "url": "mx/paipai/vocabulary/greetings/index.html",
    "revision": "bf2b1a90ac938e3124335839516a97fd"
  },
  {
    "url": "mx/paipai/vocabulary/more_used/index.html",
    "revision": "9c5e2d2417bd1de18019317eb7b5b231"
  },
  {
    "url": "mx/paipai/vocabulary/people/index.html",
    "revision": "ffacf4fd24f09cf036406a0980dbc4ef"
  },
  {
    "url": "mx/paipai/vocabulary/phrases/index.html",
    "revision": "67d41d1ab5f51c2128be3b27b2ff69fa"
  },
  {
    "url": "mx/qatok/courses/basic/index.html",
    "revision": "86364736453f8df4f12586e6b6b16588"
  },
  {
    "url": "mx/qatok/courses/intermediate/index.html",
    "revision": "c7ca89ab987918c65c94e3901b67372b"
  },
  {
    "url": "mx/qatok/dictionary/glossary.html",
    "revision": "fa551476b7a4bcf1a6ce9192ad585490"
  },
  {
    "url": "mx/qatok/dictionary/index.html",
    "revision": "ab82e8c36a5cf5efaa6e16acc1be4698"
  },
  {
    "url": "mx/qatok/grammar/adjective/index.html",
    "revision": "1a84e032652a9ebaf1b2da65b824f45b"
  },
  {
    "url": "mx/qatok/grammar/adverb/index.html",
    "revision": "aff785983e903996882a7c715de0a744"
  },
  {
    "url": "mx/qatok/grammar/alphabet/index.html",
    "revision": "1594d4a2cd3d8e6b506de44f6cd89dae"
  },
  {
    "url": "mx/qatok/grammar/article/index.html",
    "revision": "af6dc9df335cc012ea90017a047d1c20"
  },
  {
    "url": "mx/qatok/grammar/guide/index.html",
    "revision": "a2c16cebef6f89dbdf91f9532e482496"
  },
  {
    "url": "mx/qatok/grammar/verbs/index.html",
    "revision": "2eb0bddc3af486db1843de8e3947989d"
  },
  {
    "url": "mx/qatok/index.html",
    "revision": "a6d6c18935424722af0f597c25b0aed1"
  },
  {
    "url": "mx/qatok/vocabulary/animals/index.html",
    "revision": "844dd492cc77b4aed4f6f6604ebf4896"
  },
  {
    "url": "mx/qatok/vocabulary/greetings/index.html",
    "revision": "01415ecb960727c4f9984f677974bc53"
  },
  {
    "url": "mx/qatok/vocabulary/more_used/index.html",
    "revision": "e67dc964fe62859563ac42c2b9fba55b"
  },
  {
    "url": "mx/qatok/vocabulary/people/index.html",
    "revision": "8c70f798649bf6b4f2c1514df63f60a3"
  },
  {
    "url": "mx/qatok/vocabulary/phrases/index.html",
    "revision": "0d7c4d5799ca5b71f78ce80d85bbdedd"
  },
  {
    "url": "mx/tsotsil/courses/basic/index.html",
    "revision": "0e7f6853f1d3e4fb521566555d196b0a"
  },
  {
    "url": "mx/tsotsil/courses/intermediate/index.html",
    "revision": "5330cca1ea61069f401fe9e48bfcebe9"
  },
  {
    "url": "mx/tsotsil/dictionary/glossary.html",
    "revision": "b0ae0f2cfe3ffed1aff6492d1622ce38"
  },
  {
    "url": "mx/tsotsil/dictionary/index.html",
    "revision": "ae50449810518ecd375449d90c56d85b"
  },
  {
    "url": "mx/tsotsil/grammar/adjective/index.html",
    "revision": "564e827905151793823f7e4b10226a4d"
  },
  {
    "url": "mx/tsotsil/grammar/adverb/index.html",
    "revision": "c48bb29b37b4ca9f25f49a7cf81585f1"
  },
  {
    "url": "mx/tsotsil/grammar/alphabet/index.html",
    "revision": "b8cfd1ca30dcd81a2730f9f975d63898"
  },
  {
    "url": "mx/tsotsil/grammar/article/index.html",
    "revision": "16847c5ce2dde8e2a4ea4b7421d01324"
  },
  {
    "url": "mx/tsotsil/grammar/guide/index.html",
    "revision": "152300afdcb6193b5414c262af7fac7c"
  },
  {
    "url": "mx/tsotsil/grammar/verbs/index.html",
    "revision": "bcf5257d38fa5f853a4cf738a2772bc0"
  },
  {
    "url": "mx/tsotsil/index.html",
    "revision": "769bdebf92a1cf19926592e32a0d93a7"
  },
  {
    "url": "mx/tsotsil/vocabulary/animals/index.html",
    "revision": "50aab6106640b94479cc0b52759c0681"
  },
  {
    "url": "mx/tsotsil/vocabulary/greetings/index.html",
    "revision": "43bbfaed948f4eb96c586a71be2e33fd"
  },
  {
    "url": "mx/tsotsil/vocabulary/more_used/index.html",
    "revision": "956c6d0a8b5fb418b58d80bcaac60ae3"
  },
  {
    "url": "mx/tsotsil/vocabulary/people/index.html",
    "revision": "c6793edf44360ca911a577f366bfb7d2"
  },
  {
    "url": "mx/tsotsil/vocabulary/phrases/index.html",
    "revision": "15e52713858168e0e38fde0150385b00"
  },
  {
    "url": "mx/zoque/courses/basic/index.html",
    "revision": "39c7627bed674bc402252c4e98912d1e"
  },
  {
    "url": "mx/zoque/courses/intermediate/index.html",
    "revision": "4ff3fb1b8b3ac18299826f137d966212"
  },
  {
    "url": "mx/zoque/dictionary/glossary.html",
    "revision": "54ca6974a3bbf911d0f2b86b53b10be7"
  },
  {
    "url": "mx/zoque/dictionary/index.html",
    "revision": "fec9967d5de103649decacadfdf72c00"
  },
  {
    "url": "mx/zoque/grammar/adjective/index.html",
    "revision": "fc29c8316b31be47ed97d04f88bd7532"
  },
  {
    "url": "mx/zoque/grammar/adverb/index.html",
    "revision": "fc3fb4dbd3510b28188cd15571913149"
  },
  {
    "url": "mx/zoque/grammar/alphabet/index.html",
    "revision": "4eb6fe5dd543789984ab6a6157005c8b"
  },
  {
    "url": "mx/zoque/grammar/article/index.html",
    "revision": "15912420174135b371ebbf9bac6ac4a0"
  },
  {
    "url": "mx/zoque/grammar/guide/index.html",
    "revision": "22177362cfac66c01a956917719d7bc3"
  },
  {
    "url": "mx/zoque/grammar/verbs/index.html",
    "revision": "ae1581d5cd244c41e0871743c940fe09"
  },
  {
    "url": "mx/zoque/index.html",
    "revision": "1b038b7b56f923cbbe9ac90be1db41b0"
  },
  {
    "url": "mx/zoque/vocabulary/animals/index.html",
    "revision": "91c2faf2c53e03e53fe5e7f17aa462bc"
  },
  {
    "url": "mx/zoque/vocabulary/greetings/index.html",
    "revision": "2021998de21b62285d18bc554f7de2de"
  },
  {
    "url": "mx/zoque/vocabulary/more_used/index.html",
    "revision": "050bc5a97e52676b275dc959622f4e90"
  },
  {
    "url": "mx/zoque/vocabulary/people/index.html",
    "revision": "5d667bb7ef2dd5ab7200b5bd12a2d48f"
  },
  {
    "url": "mx/zoque/vocabulary/phrases/index.html",
    "revision": "7f3dd363d429ccfe07ab309008a5ec64"
  },
  {
    "url": "pa/buglere/courses/basic/index.html",
    "revision": "62aa16d06f1453932cc9568329ef4135"
  },
  {
    "url": "pa/buglere/courses/intermediate/index.html",
    "revision": "afe44e263bec84aa7a0356e7431964eb"
  },
  {
    "url": "pa/buglere/dictionary/glossary.html",
    "revision": "ad542a311e1f042ee327e980cd677dbb"
  },
  {
    "url": "pa/buglere/dictionary/index.html",
    "revision": "2e5b48926d13e793c25aa3e8fb379e42"
  },
  {
    "url": "pa/buglere/grammar/adjective/index.html",
    "revision": "c163f27cc8f613dd15134db098ba9920"
  },
  {
    "url": "pa/buglere/grammar/adverb/index.html",
    "revision": "ab2218b8ca1ece4ce91e44d2c918e0cd"
  },
  {
    "url": "pa/buglere/grammar/alphabet/index.html",
    "revision": "6fdb19f94bfea46d1cd78137cc245369"
  },
  {
    "url": "pa/buglere/grammar/article/index.html",
    "revision": "a273fb5fe7b6a73ba75c1e7f4250297d"
  },
  {
    "url": "pa/buglere/grammar/guide/index.html",
    "revision": "d978ffe7b2c7d039e6a922cf219d4d7a"
  },
  {
    "url": "pa/buglere/grammar/verbs/index.html",
    "revision": "f60fcb16ed4791ff9dbf5fcf98e168c4"
  },
  {
    "url": "pa/buglere/vocabulary/animals/index.html",
    "revision": "a8f169e972d9e96338dd41e4627e4b79"
  },
  {
    "url": "pa/buglere/vocabulary/greetings/index.html",
    "revision": "18b914e88aaea07e67e136bd98abf9ac"
  },
  {
    "url": "pa/buglere/vocabulary/more_used/index.html",
    "revision": "3627c070ec276381fb8375f519d9d343"
  },
  {
    "url": "pa/buglere/vocabulary/people/index.html",
    "revision": "12b1cf5338bb965ce9329812f375c3ff"
  },
  {
    "url": "pa/buglere/vocabulary/phrases/index.html",
    "revision": "33a86fbe5cb14416f4a528e0d73e1205"
  },
  {
    "url": "pa/embera/courses/basic/index.html",
    "revision": "30747342af54291eae91475a5f2453dd"
  },
  {
    "url": "pa/embera/courses/intermediate/index.html",
    "revision": "7ec2a71623148e5f96f90a90a4d48bbf"
  },
  {
    "url": "pa/embera/dictionary/glossary.html",
    "revision": "c5927e6f3f54ea53793bc44f9076c61a"
  },
  {
    "url": "pa/embera/dictionary/index.html",
    "revision": "07d62541202cbe95f671e984334d3b7b"
  },
  {
    "url": "pa/embera/grammar/adjective/index.html",
    "revision": "27f9fa243e6b5402d7686732c0c7102c"
  },
  {
    "url": "pa/embera/grammar/adverb/index.html",
    "revision": "c1ab8a94cea40e5da33d1239c8f95317"
  },
  {
    "url": "pa/embera/grammar/alphabet/index.html",
    "revision": "465995d1dae673b53201746fc5f59499"
  },
  {
    "url": "pa/embera/grammar/article/index.html",
    "revision": "7be5ddd9b5711acd99b8816f9a898b22"
  },
  {
    "url": "pa/embera/grammar/guide/index.html",
    "revision": "ca66e7f8e9dd754f2a200ea740060248"
  },
  {
    "url": "pa/embera/grammar/verbs/index.html",
    "revision": "19b3da0e70f72b197f7072c91601266b"
  },
  {
    "url": "pa/embera/index.html",
    "revision": "fbcb95f4947a0c81e229c05a70c64be1"
  },
  {
    "url": "pa/embera/vocabulary/animals/index.html",
    "revision": "60c65837a6b3bbba620203eebc16cc81"
  },
  {
    "url": "pa/embera/vocabulary/greetings/index.html",
    "revision": "b7ffb4733911176ea4e315ed83c27680"
  },
  {
    "url": "pa/embera/vocabulary/more_used/index.html",
    "revision": "10a19cd738ba5a26f76a8bca7b01a771"
  },
  {
    "url": "pa/embera/vocabulary/people/index.html",
    "revision": "306d468853d3e58f19b09c4fe48246b1"
  },
  {
    "url": "pa/embera/vocabulary/phrases/index.html",
    "revision": "0d27c917af0ee881cb7cc51b2129120b"
  },
  {
    "url": "pa/kuna/courses/basic/index.html",
    "revision": "781031ec0cd901e2a44ca45a69e2cf72"
  },
  {
    "url": "pa/kuna/courses/intermediate/index.html",
    "revision": "9f90f9077282b9fe2e273c8212416376"
  },
  {
    "url": "pa/kuna/dictionary/glossary.html",
    "revision": "80638c9c7ae6c973f564cefaf4d812d1"
  },
  {
    "url": "pa/kuna/dictionary/index.html",
    "revision": "1b46f9a24bb259c9dfc1ff498748b22d"
  },
  {
    "url": "pa/kuna/grammar/adjective/index.html",
    "revision": "f3bdf1758a6ea6c49a236aafb6cb66b6"
  },
  {
    "url": "pa/kuna/grammar/adverb/index.html",
    "revision": "b0c6cc50d909f1c986e85abe05f2dfd9"
  },
  {
    "url": "pa/kuna/grammar/alphabet/index.html",
    "revision": "4256d8c83f89f31dbb6cd84c46ea7735"
  },
  {
    "url": "pa/kuna/grammar/article/index.html",
    "revision": "a4f3edabe9b76a855cb1240a80c65540"
  },
  {
    "url": "pa/kuna/grammar/guide/index.html",
    "revision": "0d8305f323d22cb009237079aaa2d6b4"
  },
  {
    "url": "pa/kuna/grammar/verbs/index.html",
    "revision": "269fcaa7e40864f2c88afaa519d9a0ff"
  },
  {
    "url": "pa/kuna/index.html",
    "revision": "0bc8c22bd781b8a8c714c8ee3bf74adc"
  },
  {
    "url": "pa/kuna/vocabulary/animals/index.html",
    "revision": "dd10bc22baace97190efc0c04a72b647"
  },
  {
    "url": "pa/kuna/vocabulary/greetings/index.html",
    "revision": "b9fcce197be15f32ffcf6f2ed57a1bdf"
  },
  {
    "url": "pa/kuna/vocabulary/more_used/index.html",
    "revision": "74a9ddd70c41295ca19b3ce94ecb5c83"
  },
  {
    "url": "pa/kuna/vocabulary/people/index.html",
    "revision": "cd58d87176a38f739a4b5eb0e445393e"
  },
  {
    "url": "pa/kuna/vocabulary/phrases/index.html",
    "revision": "d6022e938c150c59e903c46e2342c843"
  },
  {
    "url": "pa/ngabere/courses/basic/index.html",
    "revision": "dc4f5a3c1f033fd2ac85bea9b6ef62c9"
  },
  {
    "url": "pa/ngabere/courses/intermediate/index.html",
    "revision": "ee408eb019204aa376bbcb62610813a4"
  },
  {
    "url": "pa/ngabere/dictionary/glossary.html",
    "revision": "e6721d9b775d65c78d9dd37569249f61"
  },
  {
    "url": "pa/ngabere/dictionary/index.html",
    "revision": "f8ddbbf5b9e7715342babf1ae92639df"
  },
  {
    "url": "pa/ngabere/grammar/adjective/index.html",
    "revision": "bf8f8d093a1f537a8404157e90d7e2f6"
  },
  {
    "url": "pa/ngabere/grammar/adverb/index.html",
    "revision": "7831654e836f7ada30d9d68a5d1af080"
  },
  {
    "url": "pa/ngabere/grammar/alphabet/index.html",
    "revision": "93287f4eca0d557b2ee5be5ae5d1058c"
  },
  {
    "url": "pa/ngabere/grammar/article/index.html",
    "revision": "167f8d67a374d584db654897fe64b06f"
  },
  {
    "url": "pa/ngabere/grammar/guide/index.html",
    "revision": "6c5376b2cc89ccec97d5c4a7d62e20fb"
  },
  {
    "url": "pa/ngabere/grammar/verbs/index.html",
    "revision": "4cd6eebabbc48553c3812eccd8c232c7"
  },
  {
    "url": "pa/ngabere/index.html",
    "revision": "11270062f17ffc1ca17a19d715a35d18"
  },
  {
    "url": "pa/ngabere/vocabulary/animals/index.html",
    "revision": "15abe8f544b29a97c8597f09a38ef28f"
  },
  {
    "url": "pa/ngabere/vocabulary/greetings/index.html",
    "revision": "9a24aa01fa5339cb06a718a528812180"
  },
  {
    "url": "pa/ngabere/vocabulary/more_used/index.html",
    "revision": "8c264c741602295f9e73675ba0d90fcf"
  },
  {
    "url": "pa/ngabere/vocabulary/people/index.html",
    "revision": "d0013b2fbe3190558dd98282df3ffc40"
  },
  {
    "url": "pa/ngabere/vocabulary/phrases/index.html",
    "revision": "c347c21c376d82546bc4132a9ffce114"
  },
  {
    "url": "pa/patois/courses/basic/index.html",
    "revision": "95bddda23e0a4c07b748b47fbe6f85dc"
  },
  {
    "url": "pa/patois/courses/intermediate/index.html",
    "revision": "d7c589a75d2b37f962d34f45fb52edfc"
  },
  {
    "url": "pa/patois/dictionary/glossary.html",
    "revision": "38e529fbea4a0822c15e75fcf069fd6d"
  },
  {
    "url": "pa/patois/dictionary/index.html",
    "revision": "fac3fc44592bc28b1715c492a4fa59ba"
  },
  {
    "url": "pa/patois/grammar/adjective/index.html",
    "revision": "f15e20955bf40d655be4e9698fe37ce0"
  },
  {
    "url": "pa/patois/grammar/adverb/index.html",
    "revision": "4334f0abbec4c7c9e76068b6500a9a44"
  },
  {
    "url": "pa/patois/grammar/alphabet/index.html",
    "revision": "9b612f74def89cee8e5a02eb597485ce"
  },
  {
    "url": "pa/patois/grammar/article/index.html",
    "revision": "61cfedf4701fec57fb0b2d02633d2c0e"
  },
  {
    "url": "pa/patois/grammar/guide/index.html",
    "revision": "4dc20be77e8177c289cb7dd1f50e22f7"
  },
  {
    "url": "pa/patois/grammar/verbs/index.html",
    "revision": "0614a89a3f7245ed895fb4825b59b9d2"
  },
  {
    "url": "pa/patois/index.html",
    "revision": "4a132d90fe73b562bf6f631cf0d8b003"
  },
  {
    "url": "pa/patois/vocabulary/animals/index.html",
    "revision": "40abedb24b91aea5db406722bdf31aac"
  },
  {
    "url": "pa/patois/vocabulary/greetings/index.html",
    "revision": "82952add402c1fcd94e794c572cadccd"
  },
  {
    "url": "pa/patois/vocabulary/more_used/index.html",
    "revision": "87724a3564facf1cbafb77c01ad1a330"
  },
  {
    "url": "pa/patois/vocabulary/people/index.html",
    "revision": "6bf4b0cca4ffa8c8f369f9800c0da91b"
  },
  {
    "url": "pa/patois/vocabulary/phrases/index.html",
    "revision": "80b447163be24cdd5f8e0ac737221a14"
  },
  {
    "url": "pa/teribe/courses/basic/index.html",
    "revision": "bc845da00c0092e47e666e258e45c73c"
  },
  {
    "url": "pa/teribe/courses/intermediate/index.html",
    "revision": "10cabc01422b3d6f8834949e5d32b8e5"
  },
  {
    "url": "pa/teribe/dictionary/glossary.html",
    "revision": "0914ccdfce9ba1eda476a8e2be689203"
  },
  {
    "url": "pa/teribe/dictionary/index.html",
    "revision": "880090a295675e9621df8d72c51deab9"
  },
  {
    "url": "pa/teribe/grammar/adjective/index.html",
    "revision": "7e23c60f426829785e258f736a9669d7"
  },
  {
    "url": "pa/teribe/grammar/adverb/index.html",
    "revision": "26f789550f443bfb557cde7199c5737b"
  },
  {
    "url": "pa/teribe/grammar/alphabet/index.html",
    "revision": "e7bf8d8eab5cdc7a3cfd70e9950eb498"
  },
  {
    "url": "pa/teribe/grammar/article/index.html",
    "revision": "8552c699fefb494f69bc8e5b2309b6b7"
  },
  {
    "url": "pa/teribe/grammar/guide/index.html",
    "revision": "42351edd83c096a258ac745c93516221"
  },
  {
    "url": "pa/teribe/grammar/verbs/index.html",
    "revision": "eafe045a65fabd8a7ae801a60787826b"
  },
  {
    "url": "pa/teribe/index.html",
    "revision": "0e540c23d9dd790a71f3597bf1ab2f6b"
  },
  {
    "url": "pa/teribe/vocabulary/animals/index.html",
    "revision": "3dbe6347c96739a26c530c5d8463e6e9"
  },
  {
    "url": "pa/teribe/vocabulary/greetings/index.html",
    "revision": "9fc66e5b7b7092d3da38feb3506745c9"
  },
  {
    "url": "pa/teribe/vocabulary/more_used/index.html",
    "revision": "ccbd697fdde4aa27120be4f439093109"
  },
  {
    "url": "pa/teribe/vocabulary/people/index.html",
    "revision": "98fb3585ef0beac96a8a91b0db378811"
  },
  {
    "url": "pa/teribe/vocabulary/phrases/index.html",
    "revision": "6fc4323e76154642bc591cd7cd65c142"
  },
  {
    "url": "pa/wounmeu/courses/basic/index.html",
    "revision": "66d2358da24d6e5d6e07e75e070c7c2c"
  },
  {
    "url": "pa/wounmeu/courses/intermediate/index.html",
    "revision": "606a1f90580c6625c3af08fc7f9b3f12"
  },
  {
    "url": "pa/wounmeu/dictionary/glossary.html",
    "revision": "a64567717b91ed1048fb53d1a6ba90c2"
  },
  {
    "url": "pa/wounmeu/dictionary/index.html",
    "revision": "a28513274f9ca14a360917a1d32a9b4e"
  },
  {
    "url": "pa/wounmeu/grammar/adjective/index.html",
    "revision": "e39d102f5e47da292cbd59484af92ea4"
  },
  {
    "url": "pa/wounmeu/grammar/adverb/index.html",
    "revision": "01732055d3415cc77f07b617356fe4ac"
  },
  {
    "url": "pa/wounmeu/grammar/alphabet/index.html",
    "revision": "07ede67e8bc1145a94c2856ea671ba26"
  },
  {
    "url": "pa/wounmeu/grammar/article/index.html",
    "revision": "cc00217b5cdbcb9522f56e0873b4976e"
  },
  {
    "url": "pa/wounmeu/grammar/guide/index.html",
    "revision": "92e0627956ec89513162dbf8145d9975"
  },
  {
    "url": "pa/wounmeu/grammar/verbs/index.html",
    "revision": "10e684658b9eba214309fadfcc300b45"
  },
  {
    "url": "pa/wounmeu/index.html",
    "revision": "981ed38a56924848c733be983a22d29f"
  },
  {
    "url": "pa/wounmeu/vocabulary/animals/index.html",
    "revision": "83b7e3e9addabe3ceb1864cd3d484a7b"
  },
  {
    "url": "pa/wounmeu/vocabulary/greetings/index.html",
    "revision": "d076d915c5ed638894d3120590e32bd1"
  },
  {
    "url": "pa/wounmeu/vocabulary/more_used/index.html",
    "revision": "656b0deaa231a6f9765c912ddd15f24c"
  },
  {
    "url": "pa/wounmeu/vocabulary/people/index.html",
    "revision": "dd539adf06973675969f67bb89688476"
  },
  {
    "url": "pa/wounmeu/vocabulary/phrases/index.html",
    "revision": "cb7f49e83c9f3f9b3648f90bb5fd0589"
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
