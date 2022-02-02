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
    "revision": "9f858de4e647f83f9eea025dea41db7e"
  },
  {
    "url": "assets/css/0.styles.344bdea9.css",
    "revision": "460ee595697939c76554bc5341143fb2"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.2433ac98.js",
    "revision": "0757f96304a7f21484ef46bcc4b1a636"
  },
  {
    "url": "assets/js/100.abb8b3b1.js",
    "revision": "bf8ebf1e4e09dfc3f3a9d114d9e61be5"
  },
  {
    "url": "assets/js/101.6ba72601.js",
    "revision": "1ca9329391652f84e9949e69b67f84d0"
  },
  {
    "url": "assets/js/102.c44919e0.js",
    "revision": "c66a3c5841eb830c8695e5a17f8e7bda"
  },
  {
    "url": "assets/js/103.1a969c27.js",
    "revision": "74fa3bcd1a0d69186756bec069ab5049"
  },
  {
    "url": "assets/js/104.5b9e8102.js",
    "revision": "89c9abe5bffcbdbd6f126c3a1ca1efe2"
  },
  {
    "url": "assets/js/105.5e14c293.js",
    "revision": "bf9cd254fa9ca2edded888ee71f3dc9f"
  },
  {
    "url": "assets/js/106.c0c1ab75.js",
    "revision": "706596e15df969888b7189e30c81af40"
  },
  {
    "url": "assets/js/107.2f2e5b56.js",
    "revision": "bbeeca8475d491282e2c225203dabd96"
  },
  {
    "url": "assets/js/108.66b82207.js",
    "revision": "b6b9657e54c48d10c7c2420f53b0d4fe"
  },
  {
    "url": "assets/js/109.f353f4d6.js",
    "revision": "2a22c298a67d8ad09220971ff4fc963b"
  },
  {
    "url": "assets/js/11.e2c40dd6.js",
    "revision": "9c7c0290308ea1c0b1a88abe24d91df5"
  },
  {
    "url": "assets/js/110.e9a20959.js",
    "revision": "c3f533694b03bcece318a83a836b0fd5"
  },
  {
    "url": "assets/js/111.bac7ea5c.js",
    "revision": "5b9e2c609f450b72a54f05543884b953"
  },
  {
    "url": "assets/js/112.e679fad0.js",
    "revision": "2aa044a056a0df9d4ca100a65fa1302b"
  },
  {
    "url": "assets/js/113.2c4ac3d1.js",
    "revision": "3607b1363069b75f70cfc1dc28325e45"
  },
  {
    "url": "assets/js/114.fcca2de8.js",
    "revision": "cb210a7f9ebc6cc3097b9f403f8dd87b"
  },
  {
    "url": "assets/js/115.17d67e14.js",
    "revision": "b2666e51271824388e2effcd388e8816"
  },
  {
    "url": "assets/js/116.c4353792.js",
    "revision": "e230b021cea6b8c8c63ef84c590d6e74"
  },
  {
    "url": "assets/js/117.0c8efd97.js",
    "revision": "518be5f01e407c6abacd13d71aa64285"
  },
  {
    "url": "assets/js/118.68ea48d2.js",
    "revision": "c3f9631f9e165f3d4f09656c0d4e65d9"
  },
  {
    "url": "assets/js/119.c6b833bd.js",
    "revision": "23f4c875df0882225b45f98147ebb140"
  },
  {
    "url": "assets/js/12.2b2c528a.js",
    "revision": "941936f044843009dc409d58b02d9539"
  },
  {
    "url": "assets/js/120.22d2f6c8.js",
    "revision": "7471fe15f19ab107fcafa922f4215906"
  },
  {
    "url": "assets/js/121.7696d507.js",
    "revision": "6a46da592c41146f85f0e0f546a234ae"
  },
  {
    "url": "assets/js/122.98be503c.js",
    "revision": "976b989387b03a488a14a14fc3c282a0"
  },
  {
    "url": "assets/js/123.f45b229f.js",
    "revision": "7e9bf2b87750d117f424e49d846c5956"
  },
  {
    "url": "assets/js/124.7b3a5d6d.js",
    "revision": "d75450c58db6e82cf154074b06493f88"
  },
  {
    "url": "assets/js/125.62360eec.js",
    "revision": "c69af8b0706e2741aa92a9d67a969f4e"
  },
  {
    "url": "assets/js/126.97541403.js",
    "revision": "2b3c30811871ce0cc43642c3bc40dc4a"
  },
  {
    "url": "assets/js/127.0bd5d555.js",
    "revision": "236988cef84eb4315ee43ff0de93b5a2"
  },
  {
    "url": "assets/js/128.d2067760.js",
    "revision": "aa3da53f7b2daf5ae85f8f3725722ac2"
  },
  {
    "url": "assets/js/129.c688f17c.js",
    "revision": "33f091eefe7da39cec29a034fe44ea02"
  },
  {
    "url": "assets/js/13.b3268481.js",
    "revision": "51db59ef875965e8e0b78a12f01b4dd5"
  },
  {
    "url": "assets/js/130.672f585f.js",
    "revision": "b704e4b6aa331da3bc9957265c5f185d"
  },
  {
    "url": "assets/js/131.037abc50.js",
    "revision": "7bf0f9071ae643b0d2073ac0a2e80071"
  },
  {
    "url": "assets/js/132.9638c538.js",
    "revision": "bbf2821c0b5c5933dacae23fabe591e7"
  },
  {
    "url": "assets/js/133.fb1e676f.js",
    "revision": "83d232ab08640b980191683af9f128ab"
  },
  {
    "url": "assets/js/134.5458f33d.js",
    "revision": "5912bacc254f46f4f1a10d35d2d9ad20"
  },
  {
    "url": "assets/js/135.56716353.js",
    "revision": "2a8ec51c5329f1fbca3e3f526c6c0012"
  },
  {
    "url": "assets/js/136.bb6c2d02.js",
    "revision": "f91186b0605fc040fd01724d62730173"
  },
  {
    "url": "assets/js/137.2155b3aa.js",
    "revision": "0a9f24080ace20f688a07cda1ac474e3"
  },
  {
    "url": "assets/js/138.33b60dcc.js",
    "revision": "98c12302118b1c79abfe24d35bd9de72"
  },
  {
    "url": "assets/js/139.2d34cbbd.js",
    "revision": "30da70e875228736c4c618bcfb21a730"
  },
  {
    "url": "assets/js/14.98560f29.js",
    "revision": "837664995d068b9cd6b94365a740bb56"
  },
  {
    "url": "assets/js/140.6d269297.js",
    "revision": "9b734ed0e5a10b4d7e2ece26c9daaa8b"
  },
  {
    "url": "assets/js/141.f9dfd692.js",
    "revision": "de2d142bd538d37766e220be00e1eac1"
  },
  {
    "url": "assets/js/142.2bdb7ede.js",
    "revision": "3ddf1a6f9acb8f62af18cc07277769c0"
  },
  {
    "url": "assets/js/143.e62e4d64.js",
    "revision": "2a7ba6b6a1eb034c738083790c976cc2"
  },
  {
    "url": "assets/js/144.8704d967.js",
    "revision": "da53f42f09cbeeff2d990f4d54f582a4"
  },
  {
    "url": "assets/js/145.fd262db0.js",
    "revision": "7e7e5f4b6830f35687f550af155a2293"
  },
  {
    "url": "assets/js/146.79e888cd.js",
    "revision": "b6c06792b5fae57c477b4f9229400e70"
  },
  {
    "url": "assets/js/147.eac609cf.js",
    "revision": "e3a9022deae9a85c0af07babb993081f"
  },
  {
    "url": "assets/js/148.4f44c55e.js",
    "revision": "083a4362108fb11976cd927c02ec1e41"
  },
  {
    "url": "assets/js/149.d99d78ef.js",
    "revision": "2e00088cd5a79d5781b172e0198b943b"
  },
  {
    "url": "assets/js/15.b555ac1e.js",
    "revision": "9ded4af0896f7fbd6945cca19cae1d7b"
  },
  {
    "url": "assets/js/150.f0ca4452.js",
    "revision": "7888b8e6115952a982188ebb34b7f549"
  },
  {
    "url": "assets/js/151.5305f191.js",
    "revision": "0e2839aecf1f2f8564714ac6a878ff4f"
  },
  {
    "url": "assets/js/152.273f03c2.js",
    "revision": "a7aa6074f1f39628afc1dd565691b455"
  },
  {
    "url": "assets/js/153.732911f0.js",
    "revision": "9c81010ead13266720a46ae21605decd"
  },
  {
    "url": "assets/js/154.ad11c45f.js",
    "revision": "3b1c462bf8526b1b4edfb981ea4ee293"
  },
  {
    "url": "assets/js/155.4069f669.js",
    "revision": "04a8ba9dabf3715bfb5b94ca3ae713e0"
  },
  {
    "url": "assets/js/156.ecd3e28e.js",
    "revision": "5538db914b6f9e55d170a9666e19c042"
  },
  {
    "url": "assets/js/157.eb58742a.js",
    "revision": "220c4c8cb1970bfe00af59dc8c81a8e5"
  },
  {
    "url": "assets/js/158.54b8ad26.js",
    "revision": "1f1db3ab741ae99d5003c16f5f8bba94"
  },
  {
    "url": "assets/js/159.908e4cae.js",
    "revision": "b5f19fa0e82ca90d165b4d1c1fc1ab95"
  },
  {
    "url": "assets/js/16.8a080087.js",
    "revision": "bf251fe8f53cb79346535d242390a10f"
  },
  {
    "url": "assets/js/160.68d16903.js",
    "revision": "f031f62feaa68ae4b1d0e2c7e6cd23f7"
  },
  {
    "url": "assets/js/161.f0b4def9.js",
    "revision": "24b0398a364d33057517d02a102d3755"
  },
  {
    "url": "assets/js/162.06583594.js",
    "revision": "55667c39eb619f35af3647a9bddb6278"
  },
  {
    "url": "assets/js/163.3c0ec7e7.js",
    "revision": "ddbf008dc66494995fc02d4f4be3657e"
  },
  {
    "url": "assets/js/164.46acfa1a.js",
    "revision": "77340e5c61750f7cec7e5c680fb0712f"
  },
  {
    "url": "assets/js/165.8535ac02.js",
    "revision": "d9988c9bebb4c87511feed7837f2da50"
  },
  {
    "url": "assets/js/166.c3fd8cce.js",
    "revision": "98712bc3b9c197b7ef605d53e50a3283"
  },
  {
    "url": "assets/js/167.b19e765c.js",
    "revision": "f07e3e08ce01d0f4273ca7321c5e8f67"
  },
  {
    "url": "assets/js/168.868ce85e.js",
    "revision": "6aa214524074157075d5a0895f2a306b"
  },
  {
    "url": "assets/js/169.bddc6205.js",
    "revision": "5dad4248861783e67c0391eb45d55469"
  },
  {
    "url": "assets/js/17.5c2e9497.js",
    "revision": "32a559dea1946f8c69a79c4d33ddba06"
  },
  {
    "url": "assets/js/170.541ca638.js",
    "revision": "5d988d4239554113a4c27e8da3c36873"
  },
  {
    "url": "assets/js/171.c7c83259.js",
    "revision": "eb9b33b94bdbde768212bf5c7f4b0b69"
  },
  {
    "url": "assets/js/172.bcf28482.js",
    "revision": "dbdf1cf3f81a300c2a58a330f74af982"
  },
  {
    "url": "assets/js/173.1c177d1b.js",
    "revision": "3db972fff56f9caf48fc9398366432c4"
  },
  {
    "url": "assets/js/174.c806af42.js",
    "revision": "54f57a2dfd9a1f93830cf46911764d1a"
  },
  {
    "url": "assets/js/175.2d80db29.js",
    "revision": "4498ca2dfb10c7da7c0ec2faf7147156"
  },
  {
    "url": "assets/js/176.43649254.js",
    "revision": "0607aea757e7b8fe3e0eb8615a66b39b"
  },
  {
    "url": "assets/js/177.05162054.js",
    "revision": "3fd1f8b22f5f7b928e9f5a9ba0d0e1e5"
  },
  {
    "url": "assets/js/178.7cd482cc.js",
    "revision": "f341e7ee68f25de29e7a0333f58473b5"
  },
  {
    "url": "assets/js/179.8b264fb4.js",
    "revision": "bf531e6256df55c26d12f17e5c414760"
  },
  {
    "url": "assets/js/18.ed640f9b.js",
    "revision": "6bc6ae52dd513a8dd52734e1a7736535"
  },
  {
    "url": "assets/js/180.ec11dc86.js",
    "revision": "dc204d6331cbb3f6fcd34bfd40784cb8"
  },
  {
    "url": "assets/js/181.16ae7632.js",
    "revision": "63d536b715f761385f0e9c917f11d015"
  },
  {
    "url": "assets/js/182.015c9240.js",
    "revision": "f21cfcb52765a64f354c51b7aa56d76d"
  },
  {
    "url": "assets/js/183.302e47ac.js",
    "revision": "8f97301a6154380234b52d0798000372"
  },
  {
    "url": "assets/js/184.700f20aa.js",
    "revision": "bc705886c5d48add35adda1456a16494"
  },
  {
    "url": "assets/js/185.241be159.js",
    "revision": "7a1f7090c5414075cbb455380274c40c"
  },
  {
    "url": "assets/js/186.1a6e3c22.js",
    "revision": "f1f5b015442fd8a8377f0ca4f396a2dc"
  },
  {
    "url": "assets/js/187.71593cb0.js",
    "revision": "2f0c2ab1d38d457bb25c84714fa03940"
  },
  {
    "url": "assets/js/188.ded49f28.js",
    "revision": "5b7ab337e1a8876ca19b4cfd4f24236a"
  },
  {
    "url": "assets/js/189.d1d30548.js",
    "revision": "1b9a8b1af85d1e6ab243686c97948ea0"
  },
  {
    "url": "assets/js/19.b7bf03e0.js",
    "revision": "01d9353e614564fa65b321062e284a98"
  },
  {
    "url": "assets/js/190.10b0efe7.js",
    "revision": "bf6df9ea4417eb0174a74939dd35489c"
  },
  {
    "url": "assets/js/191.5abb71e6.js",
    "revision": "1d9a80ff859835430646346d78e95cc6"
  },
  {
    "url": "assets/js/192.803acbb4.js",
    "revision": "4ec386fc61c5c9aa7e346601d5e15012"
  },
  {
    "url": "assets/js/193.da2bfa56.js",
    "revision": "604b02fb58f4821b76ac2ad33773dc44"
  },
  {
    "url": "assets/js/194.8f9cef6d.js",
    "revision": "2b2e6d9a4f419e5535cb182709456539"
  },
  {
    "url": "assets/js/195.55f3296e.js",
    "revision": "dbd391865c7e2bbc9583fff831f4cf2e"
  },
  {
    "url": "assets/js/196.912031d8.js",
    "revision": "573a6e988167a1e20052dfa16c5784f6"
  },
  {
    "url": "assets/js/197.87d7da01.js",
    "revision": "e755a366177c6ff7cc83ee4fc020db96"
  },
  {
    "url": "assets/js/198.ac87ddc6.js",
    "revision": "e027715fcd2b406df4172a399c2b928b"
  },
  {
    "url": "assets/js/199.67298dae.js",
    "revision": "5135f1049f1d73f42d943ee4abbff5fc"
  },
  {
    "url": "assets/js/2.c3b4a54b.js",
    "revision": "ee72fc2084673713d637298538c1310e"
  },
  {
    "url": "assets/js/20.36e03a37.js",
    "revision": "adc89cc4a9b3537796c5bdd5244205d7"
  },
  {
    "url": "assets/js/200.75c3c180.js",
    "revision": "be1cf82d04fb13533c80c055cfbd304f"
  },
  {
    "url": "assets/js/201.601851e2.js",
    "revision": "5c976964147379495c4153902219edfa"
  },
  {
    "url": "assets/js/202.76485a1a.js",
    "revision": "5735cc9635c090959690d2d4775d3035"
  },
  {
    "url": "assets/js/203.28cf715a.js",
    "revision": "03470384f8bf201daad553192ac735ee"
  },
  {
    "url": "assets/js/204.3f478bfa.js",
    "revision": "956c92a0f2ebaedf144e4740d218fded"
  },
  {
    "url": "assets/js/205.e6c0e2a1.js",
    "revision": "9fca762944e5645765778e38bcf61c71"
  },
  {
    "url": "assets/js/206.2313452a.js",
    "revision": "777d0dc808985a85b155ee6a659d3b6d"
  },
  {
    "url": "assets/js/207.f55321bd.js",
    "revision": "5175068cb18753a0e5b3bbc99e607961"
  },
  {
    "url": "assets/js/208.ce98f8bf.js",
    "revision": "ab59e08dfdeb292b885dd21bc897d13c"
  },
  {
    "url": "assets/js/209.4d649f74.js",
    "revision": "a5880be9671d70d27efb7bae9827a492"
  },
  {
    "url": "assets/js/21.7e925208.js",
    "revision": "4b529e8f6ea50dcc63b1a60be9d6bfe2"
  },
  {
    "url": "assets/js/210.474d3145.js",
    "revision": "dff26e1bd792d834662fd112f8b8c529"
  },
  {
    "url": "assets/js/211.86512d0d.js",
    "revision": "d1211ca648070f585c2d5551d72ce852"
  },
  {
    "url": "assets/js/212.7fa39739.js",
    "revision": "eb1bb9d1fb430a67b7e16a10166fd052"
  },
  {
    "url": "assets/js/213.af09360a.js",
    "revision": "94b6f7b275cbb9073ff198a0556ad174"
  },
  {
    "url": "assets/js/214.1856241a.js",
    "revision": "1cdb75921eb968a2be38920ed6046e01"
  },
  {
    "url": "assets/js/215.9bda75c0.js",
    "revision": "0cbace3923adab71c630adf933a8c67a"
  },
  {
    "url": "assets/js/216.65fa3580.js",
    "revision": "da2cf831e64799838077911930b2b2d8"
  },
  {
    "url": "assets/js/217.0c12eb21.js",
    "revision": "ec166ca244b379782a25acdf552241ca"
  },
  {
    "url": "assets/js/218.98cb4bf7.js",
    "revision": "457f9ca3a9b410ff5b92768b5cf163d6"
  },
  {
    "url": "assets/js/219.1932c63f.js",
    "revision": "f8c2e9e313d6e9a6fdf6229b18037d04"
  },
  {
    "url": "assets/js/22.ddee99d9.js",
    "revision": "cb89497b1c50d5374a8f5661aa9aab90"
  },
  {
    "url": "assets/js/220.975e8a90.js",
    "revision": "945d2dfb9ab48e0f9c9954c035634478"
  },
  {
    "url": "assets/js/221.5bd1e7ee.js",
    "revision": "2e967e0e3ca95726f64e005c9c807128"
  },
  {
    "url": "assets/js/222.2fd6fbe7.js",
    "revision": "2561ddf2005e3ab642c150587ec73473"
  },
  {
    "url": "assets/js/223.0384abaf.js",
    "revision": "0828c3291e9d49b6894b8699c6c2fd57"
  },
  {
    "url": "assets/js/224.6c5a1641.js",
    "revision": "11695944321d90373666834af380e30f"
  },
  {
    "url": "assets/js/225.47a4599e.js",
    "revision": "6842291b4a04ae417a00f942643c58e8"
  },
  {
    "url": "assets/js/226.5d51a99e.js",
    "revision": "51b447f6bce06afff1bc776e7f2746cc"
  },
  {
    "url": "assets/js/227.15cae95d.js",
    "revision": "a114f8b56069120a13f23f458c38133d"
  },
  {
    "url": "assets/js/228.815b6310.js",
    "revision": "dd2ca812bb12206337d09dfdf5969d6b"
  },
  {
    "url": "assets/js/229.be039910.js",
    "revision": "25ba22b49c3b0c8b57450a7e63831e57"
  },
  {
    "url": "assets/js/23.f086bb56.js",
    "revision": "bb5a2883e52081cf3fe4fc59b610c09c"
  },
  {
    "url": "assets/js/230.397d5bb5.js",
    "revision": "054eee806f7fbbdcff5694126f380743"
  },
  {
    "url": "assets/js/231.a1afbb54.js",
    "revision": "c4ade4214994e8ecf93c0e637c77e4f0"
  },
  {
    "url": "assets/js/232.5426d931.js",
    "revision": "24f27ef068c093129e718b699950aa1a"
  },
  {
    "url": "assets/js/233.4c61d110.js",
    "revision": "a1aad4dddd3303526e223183e70e2896"
  },
  {
    "url": "assets/js/234.4ff1ac19.js",
    "revision": "9d35c3829e21c3d560b5e0446905dd5f"
  },
  {
    "url": "assets/js/235.dba977d4.js",
    "revision": "5626935199301302dc0c84dec414da4f"
  },
  {
    "url": "assets/js/236.93db67aa.js",
    "revision": "286909bead41584cc46ddb6052db8c7b"
  },
  {
    "url": "assets/js/237.78f0a369.js",
    "revision": "721b8d5eb1c785600a384acc6afc2ce7"
  },
  {
    "url": "assets/js/238.dc76ab28.js",
    "revision": "c8950f8e2d67b6bc0bddc2260df6fc1d"
  },
  {
    "url": "assets/js/239.d8003150.js",
    "revision": "267e7394deee299fbdcdd5d7050006b9"
  },
  {
    "url": "assets/js/24.9bb29e7d.js",
    "revision": "6b94125e7b67c212ece3f9ff353fbcf5"
  },
  {
    "url": "assets/js/240.bce1a1c4.js",
    "revision": "525151f5971777eeec216691e1c9511b"
  },
  {
    "url": "assets/js/241.fb06d914.js",
    "revision": "5c3af3cf62dc4fa65d93d036f84495de"
  },
  {
    "url": "assets/js/242.5f1e7221.js",
    "revision": "e17692ef7997aa63d92f897ab1cb4d0e"
  },
  {
    "url": "assets/js/243.16e4497f.js",
    "revision": "015d35ecd7a3ca05bdf210716a1ac3db"
  },
  {
    "url": "assets/js/244.fcd8abd9.js",
    "revision": "94b5e366fd2a36eb7bb553fdd6ff4685"
  },
  {
    "url": "assets/js/245.451dcfd7.js",
    "revision": "a6e0b263ee4c940b2bc2452de02b72ac"
  },
  {
    "url": "assets/js/246.2c8b4636.js",
    "revision": "4ec94b93bec026d0d5dd617ac304c8a6"
  },
  {
    "url": "assets/js/247.5f769cca.js",
    "revision": "1f5184e64408da078c76063bcd510433"
  },
  {
    "url": "assets/js/248.cd200bcc.js",
    "revision": "d71c50bde37fee18b21b790d9160bf24"
  },
  {
    "url": "assets/js/249.7dfd0fb0.js",
    "revision": "ae099287ca762658785db729299d2b02"
  },
  {
    "url": "assets/js/25.26c26e86.js",
    "revision": "6a82974bf7681341adce15485fdd7c35"
  },
  {
    "url": "assets/js/250.0d6e7269.js",
    "revision": "a301437057fca9aed4d49bb48d9e19c9"
  },
  {
    "url": "assets/js/251.f509e841.js",
    "revision": "bf245225576a2f8dc1125a02370390f8"
  },
  {
    "url": "assets/js/252.997d48e5.js",
    "revision": "abfcb97dc3a542aea547cc51d1267be5"
  },
  {
    "url": "assets/js/253.e48f5df7.js",
    "revision": "685c2fbfaddef5c9420dd602c52dd7da"
  },
  {
    "url": "assets/js/254.0626e00d.js",
    "revision": "36a8bf340be06a58e460206de7436c4f"
  },
  {
    "url": "assets/js/255.408ca99b.js",
    "revision": "697dd1ad9498e87229513df6c47129d5"
  },
  {
    "url": "assets/js/256.afeb38da.js",
    "revision": "2b031580b5f2eeebac77e48cababf368"
  },
  {
    "url": "assets/js/257.1c6435af.js",
    "revision": "a364799080e68aecf0504a84b268e065"
  },
  {
    "url": "assets/js/258.f1e252ca.js",
    "revision": "8769dfc2b998e24c097394543b406510"
  },
  {
    "url": "assets/js/259.a5c67a8d.js",
    "revision": "c6db0ec218f177d0538fdc4e0e141c2a"
  },
  {
    "url": "assets/js/26.e247014d.js",
    "revision": "c99f3921723ec75ed76ac11de9138f92"
  },
  {
    "url": "assets/js/260.8eae3fe4.js",
    "revision": "5dc2df6599b7cf3cfd76b890957cd826"
  },
  {
    "url": "assets/js/261.5c3463f2.js",
    "revision": "d70236e4e6338192f71653503812c827"
  },
  {
    "url": "assets/js/262.7a3792c0.js",
    "revision": "e023d96ff3a270c53cc96b8164b4ea53"
  },
  {
    "url": "assets/js/263.adb0781a.js",
    "revision": "47404137e30d6c62eae9c0d984927950"
  },
  {
    "url": "assets/js/264.2d6d6b2a.js",
    "revision": "2d7594a534b3e94c218dd5ff3e3d59d1"
  },
  {
    "url": "assets/js/265.b33f63f9.js",
    "revision": "27b55f2ea3921080236640a01bfd39f1"
  },
  {
    "url": "assets/js/266.793e5d34.js",
    "revision": "464dc8a5f97b0c3b5b72f7b40bc34017"
  },
  {
    "url": "assets/js/267.78b43b61.js",
    "revision": "9e9d9ef49376901016d46ee65a99b58c"
  },
  {
    "url": "assets/js/268.6a5099e4.js",
    "revision": "b0000cc7edf58d1859d7b5f3c2b5396f"
  },
  {
    "url": "assets/js/269.29b8cbdd.js",
    "revision": "44893a3ecd15b3dd00e03537e82d0a4f"
  },
  {
    "url": "assets/js/27.13b181e3.js",
    "revision": "b0758e3536918fa0af89ae9e3481885c"
  },
  {
    "url": "assets/js/270.64f60651.js",
    "revision": "4f31d22e4a70f2ca2d6135f5920a0d65"
  },
  {
    "url": "assets/js/271.a6938bac.js",
    "revision": "9591978e4b655a230808e14051149b88"
  },
  {
    "url": "assets/js/272.a9a9234c.js",
    "revision": "580c0838f6ef30df48874b9aee04a5a1"
  },
  {
    "url": "assets/js/273.7ca5ca6c.js",
    "revision": "47127e463d276bd0b059bc3d686b07f3"
  },
  {
    "url": "assets/js/274.67c5850d.js",
    "revision": "5dd8777def2cae1ff53d463eea887d93"
  },
  {
    "url": "assets/js/275.c41ab7d9.js",
    "revision": "1dee415d987d954117779d0b396dfc78"
  },
  {
    "url": "assets/js/276.77122ba0.js",
    "revision": "ebbeabc32ac3514d80c814dcb34bdcf1"
  },
  {
    "url": "assets/js/277.e16d4002.js",
    "revision": "8a9fefe893cea401ffe049d51442f199"
  },
  {
    "url": "assets/js/278.25d65d1b.js",
    "revision": "b343e0f27ed8dc93fe5e42e13c47d2c3"
  },
  {
    "url": "assets/js/279.3caaaa2a.js",
    "revision": "b87c1191cb91c432a7ca10dec6816a11"
  },
  {
    "url": "assets/js/28.d3d8667a.js",
    "revision": "091bbc3771e6d86b8e16160e771df984"
  },
  {
    "url": "assets/js/280.3c448c81.js",
    "revision": "2fcef4447a5c6af5bfdfb0607859990a"
  },
  {
    "url": "assets/js/281.da57c0d7.js",
    "revision": "642790f50e2a44ffedd5ebfd429da1d7"
  },
  {
    "url": "assets/js/282.5b67aa13.js",
    "revision": "c97935b4a05054d2fbf3f3c75cc3930c"
  },
  {
    "url": "assets/js/283.0102c742.js",
    "revision": "e5dbc575e080cd974d881e53314ef5b4"
  },
  {
    "url": "assets/js/284.854d8588.js",
    "revision": "7d3c81745d8806bd47cbf4594c67d195"
  },
  {
    "url": "assets/js/285.6e6b5294.js",
    "revision": "fa4f135952d585cbc0018a429971274b"
  },
  {
    "url": "assets/js/286.2d78e73a.js",
    "revision": "c91f1cbe61d8573b56522c67b9a7684f"
  },
  {
    "url": "assets/js/287.d3dac3b3.js",
    "revision": "04d2313e7f81b503da6d58df17208ac8"
  },
  {
    "url": "assets/js/288.770edc37.js",
    "revision": "ad5566063464860891884335cd05883c"
  },
  {
    "url": "assets/js/289.1ad77a7c.js",
    "revision": "082e0f1414e8af48429a363022ee4d36"
  },
  {
    "url": "assets/js/29.8ddd8a6f.js",
    "revision": "d8dd9fa26d549173f8d3b3211a05a51f"
  },
  {
    "url": "assets/js/290.8013758d.js",
    "revision": "5a8fbd4d76933e9e74538983df56118b"
  },
  {
    "url": "assets/js/291.5cd03514.js",
    "revision": "35b92350e14527aa128057202326d062"
  },
  {
    "url": "assets/js/292.f0b5981f.js",
    "revision": "73f3b73e2ddd2bdc9b5886543823247a"
  },
  {
    "url": "assets/js/293.775e6129.js",
    "revision": "9537ac473971eb2a85a8ad5478ae132b"
  },
  {
    "url": "assets/js/294.4eb790bc.js",
    "revision": "4e13198920f3f4fb4349f58862688ea3"
  },
  {
    "url": "assets/js/295.3d57c9eb.js",
    "revision": "022f19484580e9ab6663abf3cea97f05"
  },
  {
    "url": "assets/js/296.66bdff75.js",
    "revision": "9735950d2ebcd15b16ebdc318e910661"
  },
  {
    "url": "assets/js/297.36063af2.js",
    "revision": "014f8ba5e45f5b4c42f352dafa7a03d3"
  },
  {
    "url": "assets/js/298.253d4d5b.js",
    "revision": "356424d2d23be405c523ae23892e689e"
  },
  {
    "url": "assets/js/299.448d1107.js",
    "revision": "acd6be0284d64836a9b300461c6b2773"
  },
  {
    "url": "assets/js/3.173c9da2.js",
    "revision": "960cc214978188dd7ea6631d9e5e5c5b"
  },
  {
    "url": "assets/js/30.e11b0720.js",
    "revision": "2ac9db19aa4235555ecaff05ee557c9d"
  },
  {
    "url": "assets/js/300.8e7be609.js",
    "revision": "3bb4fae7f5474d6a162359d247f4321d"
  },
  {
    "url": "assets/js/301.fc24945e.js",
    "revision": "87100bbd92095a49b787fbf899a98697"
  },
  {
    "url": "assets/js/302.a9d92032.js",
    "revision": "9579e3738a6caac0b2fac2ebc739aa94"
  },
  {
    "url": "assets/js/303.29f75b16.js",
    "revision": "544c3cb5246840beb219c23ab2901a83"
  },
  {
    "url": "assets/js/304.3ee6c854.js",
    "revision": "0ad33309098aca624955348a7a8e85bb"
  },
  {
    "url": "assets/js/305.5fbb2686.js",
    "revision": "d5dead609d77f4f49879e45649e42746"
  },
  {
    "url": "assets/js/306.a61a2690.js",
    "revision": "0fc4b34687df62505dd958064dea2e9b"
  },
  {
    "url": "assets/js/307.11eda030.js",
    "revision": "695978e6b41d86a1edc6d178e0d4cebe"
  },
  {
    "url": "assets/js/308.49958131.js",
    "revision": "207dce839ef6946b0cab048418ca7b38"
  },
  {
    "url": "assets/js/309.e4f90c30.js",
    "revision": "aa95f0e3aa7c8be11fa171e4fd586035"
  },
  {
    "url": "assets/js/31.7baa6aec.js",
    "revision": "96757d62ac0e9f408c636fcd3c3bb538"
  },
  {
    "url": "assets/js/310.580e29f1.js",
    "revision": "7fa2638104feccc3bfb89dc77a1cd92e"
  },
  {
    "url": "assets/js/311.fa1812f2.js",
    "revision": "aafec088faa01ae828fac06f2c1b3e6b"
  },
  {
    "url": "assets/js/312.cabf39ca.js",
    "revision": "ef9068c3105f2a6665a3ca3ee2666a78"
  },
  {
    "url": "assets/js/313.554c7e72.js",
    "revision": "4549804560564a814d84a6eea394eb79"
  },
  {
    "url": "assets/js/314.0544c1d9.js",
    "revision": "954159245a306611ac555be7432eca6b"
  },
  {
    "url": "assets/js/315.f091b483.js",
    "revision": "544b0d5da345868277b5d4988b15956c"
  },
  {
    "url": "assets/js/316.b62f72d5.js",
    "revision": "698b994985eef12a9494aba35b1eaa30"
  },
  {
    "url": "assets/js/317.b16492e8.js",
    "revision": "888f4154904d4a53cbe8b18390abe67a"
  },
  {
    "url": "assets/js/318.844ee8ee.js",
    "revision": "6050f5b97d15d38ea8292706a84299b9"
  },
  {
    "url": "assets/js/319.722a6c89.js",
    "revision": "4091ef3165f04cdf097336686c8f956e"
  },
  {
    "url": "assets/js/32.db1f29aa.js",
    "revision": "3bd21867d971ae0dcd8d0331ffedc21f"
  },
  {
    "url": "assets/js/320.3e8b40d1.js",
    "revision": "7ec9932df6a50cc5df0d24a0e5d46853"
  },
  {
    "url": "assets/js/321.cad46c2b.js",
    "revision": "843610ca284d449d0af5ee3d257de8d7"
  },
  {
    "url": "assets/js/322.e65c43ab.js",
    "revision": "86efc32b4e487db96e1a819fd5402a3e"
  },
  {
    "url": "assets/js/323.d61005d7.js",
    "revision": "3e313e029b63fc33a73433254cc6d5aa"
  },
  {
    "url": "assets/js/324.93fe91ad.js",
    "revision": "618ee9ee72ba5ea7f60a1b88b5f39cb7"
  },
  {
    "url": "assets/js/325.4716c07e.js",
    "revision": "17b2d038a4553b36c4a300840741ff1d"
  },
  {
    "url": "assets/js/326.aaecb8e1.js",
    "revision": "9c1f330ed8013e81e182b56bfbeec56b"
  },
  {
    "url": "assets/js/327.d8cf5a40.js",
    "revision": "db3dcdcaf1aa73f80ac82ac0f69be965"
  },
  {
    "url": "assets/js/328.96e73460.js",
    "revision": "b4e479770af7bfe20b73dc2a6947f2b6"
  },
  {
    "url": "assets/js/329.a28dc057.js",
    "revision": "3f9ed989c2c9968fbd199232e2b3d45a"
  },
  {
    "url": "assets/js/33.67bc2f83.js",
    "revision": "29db049256b819e687a8aef10d76ab4d"
  },
  {
    "url": "assets/js/330.79991fdb.js",
    "revision": "2e26548e5745f072d03e2baf943d1b46"
  },
  {
    "url": "assets/js/331.31992610.js",
    "revision": "93d1812010d7f264028e4bef0f12d1a7"
  },
  {
    "url": "assets/js/332.3524744b.js",
    "revision": "af04b682c93d90a1cd786a0b3faecbc9"
  },
  {
    "url": "assets/js/333.88793812.js",
    "revision": "11813bae96eb5c25834ceeec7adef7d7"
  },
  {
    "url": "assets/js/334.86b0e914.js",
    "revision": "ceb11f9cb8720ae9e4aca079051a9a35"
  },
  {
    "url": "assets/js/335.6a4020e4.js",
    "revision": "e94f4f24ef909dc0f62e6e22ac061aac"
  },
  {
    "url": "assets/js/336.ca779751.js",
    "revision": "e47582bec72e3e61e3bef77fd6ed48cc"
  },
  {
    "url": "assets/js/337.1646d802.js",
    "revision": "fd21046f8bc5dfa1f7d58360512cc3d9"
  },
  {
    "url": "assets/js/338.0275d4ce.js",
    "revision": "0fc53f86fb4789329275b949fcace44c"
  },
  {
    "url": "assets/js/339.bb270c0b.js",
    "revision": "73e55aa8bf54ba2b5added21cb985979"
  },
  {
    "url": "assets/js/34.ec5bcfa9.js",
    "revision": "1def42f43be03e8c3ab0ef0bf656f42c"
  },
  {
    "url": "assets/js/340.25972d95.js",
    "revision": "c245e7ad603788b21a9323d2d71945ca"
  },
  {
    "url": "assets/js/341.b43dd2e2.js",
    "revision": "4ed13851df0c812a095296b1c4543799"
  },
  {
    "url": "assets/js/342.64e24f71.js",
    "revision": "f4b9bf5a498986c619234b9f440154e9"
  },
  {
    "url": "assets/js/343.145e33cc.js",
    "revision": "8da729c6bf0207c86ee4bfbee71c4877"
  },
  {
    "url": "assets/js/344.46bd666c.js",
    "revision": "affb2b0bd9536e7b9a78ef51e9b66362"
  },
  {
    "url": "assets/js/345.bf2cadb7.js",
    "revision": "53b4afbe49f929740c38fa176581665e"
  },
  {
    "url": "assets/js/35.1e5ec9fb.js",
    "revision": "23da1bb2023a1cf2965fd0ce6128b880"
  },
  {
    "url": "assets/js/36.fcfac94a.js",
    "revision": "2ad247706b5f21de1abd49ad8585317e"
  },
  {
    "url": "assets/js/37.6c4e9ee7.js",
    "revision": "965bac4de30f38a49d2bf2c3c51a9d1c"
  },
  {
    "url": "assets/js/38.ba7885a3.js",
    "revision": "72fc1454039cc4f3825fb9e15ada5508"
  },
  {
    "url": "assets/js/39.17c69166.js",
    "revision": "98639572a3d128b5a0ff7767106115d4"
  },
  {
    "url": "assets/js/4.f802b025.js",
    "revision": "ef80e4fa179f97c4d4c4c88fbd37db8e"
  },
  {
    "url": "assets/js/40.f169e70c.js",
    "revision": "bf9928fbb2015fd4d0d835c642c7e9e5"
  },
  {
    "url": "assets/js/41.54ebc074.js",
    "revision": "e519641512e1cece69eca755d0bf7609"
  },
  {
    "url": "assets/js/42.d24179ef.js",
    "revision": "0dc524c063e87d9436b5557a99f82078"
  },
  {
    "url": "assets/js/43.00a35a89.js",
    "revision": "af16148c04e29be5e3e85a7cedbb7188"
  },
  {
    "url": "assets/js/44.5eea14f0.js",
    "revision": "ffd7cff9909b1fabc597d9fa854df246"
  },
  {
    "url": "assets/js/45.6ac82ab4.js",
    "revision": "36f6d5c8ac46e8119e844935e5429ec7"
  },
  {
    "url": "assets/js/46.e8a33103.js",
    "revision": "2fffdd16d2e7f68d3426aac18d247003"
  },
  {
    "url": "assets/js/47.cbd5e22b.js",
    "revision": "1a9986b98f630acc60a721c7d61b084a"
  },
  {
    "url": "assets/js/48.3588ed87.js",
    "revision": "e43922854a7ac77beaadb64ae7b07438"
  },
  {
    "url": "assets/js/49.2da35447.js",
    "revision": "66485e00088c9d1fff4ac536c3e1d5a8"
  },
  {
    "url": "assets/js/5.e9e419ea.js",
    "revision": "47104c7809a2f952c2766794ebef8db8"
  },
  {
    "url": "assets/js/50.b81b5fd8.js",
    "revision": "49e5b9aca0ffa2d1d18e364941e25d0c"
  },
  {
    "url": "assets/js/51.74f7b1ff.js",
    "revision": "fb5b9465a3601cbf8709f056101306b1"
  },
  {
    "url": "assets/js/52.5a61e032.js",
    "revision": "a2bf953fef24f7527e2a5afe4d727181"
  },
  {
    "url": "assets/js/53.cfb53445.js",
    "revision": "582c9a84e60bc2cef430a4ddd9bd5431"
  },
  {
    "url": "assets/js/54.30d7d8da.js",
    "revision": "fc1fce7fdbba506561f0f2cab3dd4ca4"
  },
  {
    "url": "assets/js/55.7fbcbced.js",
    "revision": "4284dee345644b2552652f353a58ca4b"
  },
  {
    "url": "assets/js/56.8eed951f.js",
    "revision": "d62aebd044b456f2a7e3f2e47edd132a"
  },
  {
    "url": "assets/js/57.4b5cd871.js",
    "revision": "4907eea69ee13d39806254c56f9aa43e"
  },
  {
    "url": "assets/js/58.0022a510.js",
    "revision": "d5473d495da3f44eabaab703fc36021b"
  },
  {
    "url": "assets/js/59.1799e442.js",
    "revision": "d1ed0722ae0fa521bd00ec3d34bc0d5a"
  },
  {
    "url": "assets/js/6.8e9c3c4a.js",
    "revision": "7fafcd80df0732c7f12f52f4772f6c7b"
  },
  {
    "url": "assets/js/60.77994c4f.js",
    "revision": "a454585d94b6537ee7b5e5c731d32303"
  },
  {
    "url": "assets/js/61.4c492cad.js",
    "revision": "e7b0bfec998247f2c1fcd89e9f87e0cd"
  },
  {
    "url": "assets/js/62.edf1299a.js",
    "revision": "d7f8f109fd8feea58971939963853a31"
  },
  {
    "url": "assets/js/63.bdbca7e0.js",
    "revision": "2efd4557c8c6c4c9932576d2470a38e8"
  },
  {
    "url": "assets/js/64.f200f721.js",
    "revision": "b32c1312764967591f94be1b44d9739d"
  },
  {
    "url": "assets/js/65.f523779e.js",
    "revision": "c3419b16f0a7c338281982a4b32a76a4"
  },
  {
    "url": "assets/js/66.10a06334.js",
    "revision": "f99b82f6b53d4ca7a9addade01f8e268"
  },
  {
    "url": "assets/js/67.70f12906.js",
    "revision": "8e8a87039b5483c83dfac68989150f3a"
  },
  {
    "url": "assets/js/68.232a1edd.js",
    "revision": "87de60410fd9edef16c6d9449bd6d257"
  },
  {
    "url": "assets/js/69.7d879f8d.js",
    "revision": "e56dd731cfbbad15e54674e35c008ef3"
  },
  {
    "url": "assets/js/7.77dbfb3a.js",
    "revision": "fd6febd5aee891dba62754ac05f0d659"
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
    "url": "assets/js/72.613b5d74.js",
    "revision": "1aa1e255ba05cd4b8a506eef99233067"
  },
  {
    "url": "assets/js/73.b89b7f53.js",
    "revision": "bb22eea2de82ff1efb63f57b8112a6fa"
  },
  {
    "url": "assets/js/74.65ea1c6d.js",
    "revision": "9b942e9193d59318a52d85525bfcb539"
  },
  {
    "url": "assets/js/75.d161121a.js",
    "revision": "62d1debf45de7fce9f8eaafec7c6871b"
  },
  {
    "url": "assets/js/76.7d162aae.js",
    "revision": "1086803a5e1341f0fdd9a0a18047dd4f"
  },
  {
    "url": "assets/js/77.08745253.js",
    "revision": "e154f2387a0da181b8adcd6dc5302ae0"
  },
  {
    "url": "assets/js/78.36676218.js",
    "revision": "294bcf493b4d6d780aea5704ae95fe11"
  },
  {
    "url": "assets/js/79.35d89169.js",
    "revision": "6695b8e35cc8878cd074612497b6a11d"
  },
  {
    "url": "assets/js/8.e3ee8025.js",
    "revision": "c22a6f1f732dbfbf063c2f28fbd84a7b"
  },
  {
    "url": "assets/js/80.31d805cb.js",
    "revision": "e6884c31e13dd9b8831d535bf45a1f32"
  },
  {
    "url": "assets/js/81.6333f02b.js",
    "revision": "883b30523b5d21d74b9c52bfef02dd43"
  },
  {
    "url": "assets/js/82.d23f0cfe.js",
    "revision": "110262447dac63f325a8ed0e91d526bb"
  },
  {
    "url": "assets/js/83.0221b05a.js",
    "revision": "3b364f9ae828a106ffeed5e7dc06e124"
  },
  {
    "url": "assets/js/84.3204f372.js",
    "revision": "75f3bd767542d2eb12cac6b1a06cf39f"
  },
  {
    "url": "assets/js/85.3d6d607e.js",
    "revision": "1b933f440bb27b9f8f34e43f65826557"
  },
  {
    "url": "assets/js/86.e740683f.js",
    "revision": "30b42d9ac520e80b2f6abceb891a1ab6"
  },
  {
    "url": "assets/js/87.02ffb79e.js",
    "revision": "a19e45f259a211179621624950a38c2b"
  },
  {
    "url": "assets/js/88.6ef37be3.js",
    "revision": "c3b7f4b21e8038e5f03f14e5c31b0433"
  },
  {
    "url": "assets/js/89.a2b68ad3.js",
    "revision": "83a36c10d29c94840b035aeb7af1f344"
  },
  {
    "url": "assets/js/9.365a9354.js",
    "revision": "1726919077c5d325e88dfff18631c5cd"
  },
  {
    "url": "assets/js/90.7b00b8f0.js",
    "revision": "3522e3400da681dbe44d0f298e01e7fc"
  },
  {
    "url": "assets/js/91.0287f395.js",
    "revision": "dec84330db43567c02899d237d7501b3"
  },
  {
    "url": "assets/js/92.78933749.js",
    "revision": "684e8606bc5011735a508704394dbb16"
  },
  {
    "url": "assets/js/93.6371dad4.js",
    "revision": "0a92b92bdc899ca3d00f41ba1e04992d"
  },
  {
    "url": "assets/js/94.a6989a78.js",
    "revision": "94670d22f2938a252385c4ea4181f6e6"
  },
  {
    "url": "assets/js/95.6b3ca1c3.js",
    "revision": "d4998cbe963e8cc128b60fe907574431"
  },
  {
    "url": "assets/js/96.0466c30c.js",
    "revision": "1b1ae7a7039c3c3fe2e892ede1805f13"
  },
  {
    "url": "assets/js/97.714b1118.js",
    "revision": "05b8d073dc2b266bf5f8f38a7792c956"
  },
  {
    "url": "assets/js/98.6b1266e8.js",
    "revision": "3ecf5a63fc544863b6416626e2979be2"
  },
  {
    "url": "assets/js/99.e8719de5.js",
    "revision": "0f98d90b8a47c212146950d94e0293a6"
  },
  {
    "url": "assets/js/app.3c1aa171.js",
    "revision": "6a7f6f55e0b5348ca14ddeb4b42c3f8e"
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
    "revision": "3363608415b840c1e037563b61c21181"
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
    "revision": "690d3756d0807e0416e7673cc410f5d0"
  },
  {
    "url": "mx/chol/courses/intermediate/index.html",
    "revision": "ce0faea820e7f23aad72d58ba6cee0c7"
  },
  {
    "url": "mx/chol/dictionary/glossary.html",
    "revision": "b24ae29d36c64b914246c38af563425c"
  },
  {
    "url": "mx/chol/dictionary/index.html",
    "revision": "aa04eb54a087137e07506052a85801bd"
  },
  {
    "url": "mx/chol/grammar/adjective/index.html",
    "revision": "c75c19703d4224a102fb38bb65dd69a9"
  },
  {
    "url": "mx/chol/grammar/adverb/index.html",
    "revision": "e98f8a678986cbc1688a55cec26cd972"
  },
  {
    "url": "mx/chol/grammar/alphabet/index.html",
    "revision": "7cf1af2277d5566f7ba5ff88a44a7e91"
  },
  {
    "url": "mx/chol/grammar/article/index.html",
    "revision": "c7eb6e605ec48b54b861fa57617b0737"
  },
  {
    "url": "mx/chol/grammar/guide/index.html",
    "revision": "d8ed12c4fff3a2c1c6e1619bb920b488"
  },
  {
    "url": "mx/chol/grammar/verbs/index.html",
    "revision": "a9578bea65b16a1ef167117e02c9941d"
  },
  {
    "url": "mx/chol/index.html",
    "revision": "4f40ed704fe90e100cb67379f28ef286"
  },
  {
    "url": "mx/chol/vocabulary/animals/index.html",
    "revision": "bce676c41f0922b9a47b0b528849f25d"
  },
  {
    "url": "mx/chol/vocabulary/greetings/index.html",
    "revision": "d8d462a3faa3c0a1ea9e942e3290ff1a"
  },
  {
    "url": "mx/chol/vocabulary/more_used/index.html",
    "revision": "74c8e6ba5d118726534ad80a8b589666"
  },
  {
    "url": "mx/chol/vocabulary/people/index.html",
    "revision": "558968224cbd017fc85e5004cb0d5730"
  },
  {
    "url": "mx/chol/vocabulary/phrases/index.html",
    "revision": "c3a5fb95c2e49239546c105e64953eb4"
  },
  {
    "url": "mx/chontal/courses/basic/index.html",
    "revision": "05653bc3e6031974189e65525d5ca859"
  },
  {
    "url": "mx/chontal/courses/intermediate/index.html",
    "revision": "fd5d8cab4d1ca87528dd828dcaabcc5b"
  },
  {
    "url": "mx/chontal/dictionary/glossary.html",
    "revision": "5c414b08c7ef06d0df5225ac08089dc2"
  },
  {
    "url": "mx/chontal/dictionary/index.html",
    "revision": "60759d013a40087000908827cae16d15"
  },
  {
    "url": "mx/chontal/grammar/adjective/index.html",
    "revision": "a484225479d0fd15e12418b145beb48d"
  },
  {
    "url": "mx/chontal/grammar/adverb/index.html",
    "revision": "1905e7e0fbb73a65b3f23120134ab163"
  },
  {
    "url": "mx/chontal/grammar/alphabet/index.html",
    "revision": "d52d6a460f8d551775172b1d566223d8"
  },
  {
    "url": "mx/chontal/grammar/article/index.html",
    "revision": "c2732b29a2af97751f1277f2052394d8"
  },
  {
    "url": "mx/chontal/grammar/guide/index.html",
    "revision": "10eb510dfc0464077eb024930a42febd"
  },
  {
    "url": "mx/chontal/grammar/verbs/index.html",
    "revision": "2af00a1b29caa50f6115a53a0527d188"
  },
  {
    "url": "mx/chontal/index.html",
    "revision": "b4fe59268fbc29a7adab2c5edea57b1a"
  },
  {
    "url": "mx/chontal/vocabulary/animals/index.html",
    "revision": "ea1e1cebbed4c2792b25a3f274d20144"
  },
  {
    "url": "mx/chontal/vocabulary/greetings/index.html",
    "revision": "e3b3b7226e54aa43f4527a37eb23c04b"
  },
  {
    "url": "mx/chontal/vocabulary/more_used/index.html",
    "revision": "3e0635eece78482a470ff037e18cae0f"
  },
  {
    "url": "mx/chontal/vocabulary/people/index.html",
    "revision": "57cdad437c6f5cf46170a1c21ea43458"
  },
  {
    "url": "mx/chontal/vocabulary/phrases/index.html",
    "revision": "d4d19ee17aaf774cf3ab92997e0eb717"
  },
  {
    "url": "mx/cucapa/courses/basic/index.html",
    "revision": "33abd6adbd617b4ec38bc26149a5a15f"
  },
  {
    "url": "mx/cucapa/courses/intermediate/index.html",
    "revision": "92989b94199a47f24c8b95e8109ab448"
  },
  {
    "url": "mx/cucapa/dictionary/glossary.html",
    "revision": "37e0e6bbd54e0b5f06d7897b068f0bd7"
  },
  {
    "url": "mx/cucapa/dictionary/index.html",
    "revision": "f0dda33e26f1dfe1ab6ed99a6c707d71"
  },
  {
    "url": "mx/cucapa/grammar/adjective/index.html",
    "revision": "210bc065e6d7f8fbcd997b87ff1764a7"
  },
  {
    "url": "mx/cucapa/grammar/adverb/index.html",
    "revision": "f2ce83031a1f3b708272d229882681da"
  },
  {
    "url": "mx/cucapa/grammar/alphabet/index.html",
    "revision": "66e122d89478020841f7393452c39159"
  },
  {
    "url": "mx/cucapa/grammar/article/index.html",
    "revision": "467be4dcf335f624f724f80079b63673"
  },
  {
    "url": "mx/cucapa/grammar/guide/index.html",
    "revision": "65620be535f6ffb362effd4bdba0ee9f"
  },
  {
    "url": "mx/cucapa/grammar/verbs/index.html",
    "revision": "4b5f7c2b138d2913ba8d718cba87a46e"
  },
  {
    "url": "mx/cucapa/index.html",
    "revision": "4f849b3afc3d7d64840e7255421d10f7"
  },
  {
    "url": "mx/cucapa/vocabulary/animals/index.html",
    "revision": "c7763c2a5c244f0e83534520ed084765"
  },
  {
    "url": "mx/cucapa/vocabulary/greetings/index.html",
    "revision": "201370f69cc27b7b3f9b4dac1ce301c7"
  },
  {
    "url": "mx/cucapa/vocabulary/more_used/index.html",
    "revision": "5ac2120f4e5ce2a89612805a3bf616d1"
  },
  {
    "url": "mx/cucapa/vocabulary/people/index.html",
    "revision": "7d86adb252fa9b99357dff74636e7bdc"
  },
  {
    "url": "mx/cucapa/vocabulary/phrases/index.html",
    "revision": "1ba0b88044979923edaa9a0e0eb47b6f"
  },
  {
    "url": "mx/huasteco/courses/basic/index.html",
    "revision": "b447f8feff096be7d6e549d94b4ebf74"
  },
  {
    "url": "mx/huasteco/courses/intermediate/index.html",
    "revision": "757edf191f37bed242131ff9bcf33f03"
  },
  {
    "url": "mx/huasteco/dictionary/glossary.html",
    "revision": "68b53801c6d0ed3b092e0cec14c2225f"
  },
  {
    "url": "mx/huasteco/dictionary/index.html",
    "revision": "e678365f394a317ff7e8fec0ee1055ff"
  },
  {
    "url": "mx/huasteco/grammar/adjective/index.html",
    "revision": "772534f056d74a3104462f3c821bbeae"
  },
  {
    "url": "mx/huasteco/grammar/adverb/index.html",
    "revision": "3ccd3dc6fe2ba0b9f122ed8e8d511cc3"
  },
  {
    "url": "mx/huasteco/grammar/alphabet/index.html",
    "revision": "1e540a11865ca238a3ce1651aadd774e"
  },
  {
    "url": "mx/huasteco/grammar/article/index.html",
    "revision": "fcc5cc105e289f956d4b64ddcb28636f"
  },
  {
    "url": "mx/huasteco/grammar/guide/index.html",
    "revision": "efe55d4fe7eea681a05b52d6786ae81e"
  },
  {
    "url": "mx/huasteco/grammar/verbs/index.html",
    "revision": "c7a7698f18c2243e0ed08fc16b262bf0"
  },
  {
    "url": "mx/huasteco/index.html",
    "revision": "4ab34da9e2c0e57c7622d394893141d2"
  },
  {
    "url": "mx/huasteco/vocabulary/animals/index.html",
    "revision": "0cc0dcd4473d6d9d31f4efa2baebc5cf"
  },
  {
    "url": "mx/huasteco/vocabulary/greetings/index.html",
    "revision": "a155665f630ba8ae411ac538389cf966"
  },
  {
    "url": "mx/huasteco/vocabulary/more_used/index.html",
    "revision": "91bc01eb6ed3355b203cbed5ae281acf"
  },
  {
    "url": "mx/huasteco/vocabulary/people/index.html",
    "revision": "cc14afd55748c763ce342b8c64b95300"
  },
  {
    "url": "mx/huasteco/vocabulary/phrases/index.html",
    "revision": "3d4e5987cf8006333f14f2d2008ba58f"
  },
  {
    "url": "mx/huave/courses/basic/index.html",
    "revision": "db6b67af3f517bcdf16cb820941bb9ca"
  },
  {
    "url": "mx/huave/courses/intermediate/index.html",
    "revision": "c3ea687be2e5e4405ec66c19c5e3411e"
  },
  {
    "url": "mx/huave/dictionary/glossary.html",
    "revision": "f567da684534740cb2773b93e72dffc4"
  },
  {
    "url": "mx/huave/dictionary/index.html",
    "revision": "aa5603ee88ba7bd3091c7373eb90e58c"
  },
  {
    "url": "mx/huave/grammar/adjective/index.html",
    "revision": "8b9d304322b2c651d06907f06d057e6e"
  },
  {
    "url": "mx/huave/grammar/adverb/index.html",
    "revision": "e4a3c9f8bd0ad0a5d932b4a19705650b"
  },
  {
    "url": "mx/huave/grammar/alphabet/index.html",
    "revision": "ee1bdeff14622e1f130e42aca24c5c2f"
  },
  {
    "url": "mx/huave/grammar/article/index.html",
    "revision": "701191e76a4a4576c3afa2de808bc6b3"
  },
  {
    "url": "mx/huave/grammar/guide/index.html",
    "revision": "b0f2f730849ce24ec14de24d9a178910"
  },
  {
    "url": "mx/huave/grammar/verbs/index.html",
    "revision": "dced8053abec776d247ab2bad6ea1c14"
  },
  {
    "url": "mx/huave/index.html",
    "revision": "35d24d8d2673cd8df2615b839db0436c"
  },
  {
    "url": "mx/huave/vocabulary/animals/index.html",
    "revision": "e57047408999ec52ef92c9295e465c91"
  },
  {
    "url": "mx/huave/vocabulary/greetings/index.html",
    "revision": "fa8dbcfc61ce5230771c04d0005ef6f4"
  },
  {
    "url": "mx/huave/vocabulary/more_used/index.html",
    "revision": "80f4f4de214dd1053b5fbb3526721b50"
  },
  {
    "url": "mx/huave/vocabulary/people/index.html",
    "revision": "0fa93aea9b000673a4a287773b8e48fe"
  },
  {
    "url": "mx/huave/vocabulary/phrases/index.html",
    "revision": "f425d074e25c7d8f351691a3a9921caa"
  },
  {
    "url": "mx/kickapoo/courses/basic/index.html",
    "revision": "37c907cc125a748ac214b748fc1c9be5"
  },
  {
    "url": "mx/kickapoo/courses/intermediate/index.html",
    "revision": "68146671961dfb3fc0d3317d6da2304d"
  },
  {
    "url": "mx/kickapoo/dictionary/glossary.html",
    "revision": "0af2fe9532b79b8d494047d4d4a0fdd7"
  },
  {
    "url": "mx/kickapoo/dictionary/index.html",
    "revision": "33edd7dbc71adba3e3b06703a9e4c8ea"
  },
  {
    "url": "mx/kickapoo/grammar/adjective/index.html",
    "revision": "9b8566943a3fb19d4c752209e9e265cc"
  },
  {
    "url": "mx/kickapoo/grammar/adverb/index.html",
    "revision": "7e3fdf79eb681ac5a0e59775c1e31a7a"
  },
  {
    "url": "mx/kickapoo/grammar/alphabet/index.html",
    "revision": "6dce0abc32767c67113940962cc5245f"
  },
  {
    "url": "mx/kickapoo/grammar/article/index.html",
    "revision": "2d1ab50a4cca52faece6db4c6c0f1fb0"
  },
  {
    "url": "mx/kickapoo/grammar/guide/index.html",
    "revision": "98a6b8ea30bb677647044e35e59049f5"
  },
  {
    "url": "mx/kickapoo/grammar/verbs/index.html",
    "revision": "0b32491b9cc1bdcfaaa78afd10b07bc2"
  },
  {
    "url": "mx/kickapoo/index.html",
    "revision": "6416aaa1f487f888066aca4386803d35"
  },
  {
    "url": "mx/kickapoo/vocabulary/animals/index.html",
    "revision": "95f8f8b5cdc98bbf8061c05869c42719"
  },
  {
    "url": "mx/kickapoo/vocabulary/greetings/index.html",
    "revision": "476b30865cce55f429bd8388c340e1bd"
  },
  {
    "url": "mx/kickapoo/vocabulary/more_used/index.html",
    "revision": "13c45307e596a88b78ba3d3dec7ab7c3"
  },
  {
    "url": "mx/kickapoo/vocabulary/people/index.html",
    "revision": "5af0ef165f2534775fe50005c973b322"
  },
  {
    "url": "mx/kickapoo/vocabulary/phrases/index.html",
    "revision": "f72569c6f74c74946ab2205f49289b80"
  },
  {
    "url": "mx/kiliwa/courses/basic/index.html",
    "revision": "61d0ab8efcf20931815bc5207ca4288e"
  },
  {
    "url": "mx/kiliwa/courses/intermediate/index.html",
    "revision": "7425669010182749c3cfbac4a8b0537f"
  },
  {
    "url": "mx/kiliwa/dictionary/glossary.html",
    "revision": "50e0cc0984e5eca3d933ea850b981520"
  },
  {
    "url": "mx/kiliwa/dictionary/index.html",
    "revision": "d13ef77674ad74e30e7dc251f0ca38b9"
  },
  {
    "url": "mx/kiliwa/grammar/adjective/index.html",
    "revision": "926c529e89af9933628a6cafd93d3e85"
  },
  {
    "url": "mx/kiliwa/grammar/adverb/index.html",
    "revision": "6380ab921e60792a8442b4559b5a91da"
  },
  {
    "url": "mx/kiliwa/grammar/alphabet/index.html",
    "revision": "e09dba4ad1685a72688b65c54c929212"
  },
  {
    "url": "mx/kiliwa/grammar/article/index.html",
    "revision": "7ded44f3512bed281350a064fc71005f"
  },
  {
    "url": "mx/kiliwa/grammar/guide/index.html",
    "revision": "5a2e99001e9dc6dae96a0bcc53428ed1"
  },
  {
    "url": "mx/kiliwa/grammar/verbs/index.html",
    "revision": "a0f14fbbdc319ab18185ea7816cefbb5"
  },
  {
    "url": "mx/kiliwa/index.html",
    "revision": "5564a31e444d3eb60391c94cd22ef95f"
  },
  {
    "url": "mx/kiliwa/vocabulary/animals/index.html",
    "revision": "f1f2a7b4a40b7699054668f746bffd26"
  },
  {
    "url": "mx/kiliwa/vocabulary/greetings/index.html",
    "revision": "3c8e728cd610002e3459b87b83ec7cb8"
  },
  {
    "url": "mx/kiliwa/vocabulary/more_used/index.html",
    "revision": "38a4a18e46a54852a9d4a96af50de708"
  },
  {
    "url": "mx/kiliwa/vocabulary/people/index.html",
    "revision": "5fbeb338840cf696ca9ecf3763186b19"
  },
  {
    "url": "mx/kiliwa/vocabulary/phrases/index.html",
    "revision": "9c305716e9fbe06ff405f554945ef382"
  },
  {
    "url": "mx/kuahl/courses/basic/index.html",
    "revision": "dffc277a010d9423795899ab11017649"
  },
  {
    "url": "mx/kuahl/courses/intermediate/index.html",
    "revision": "540f3c206497af082086c174a50ef2d0"
  },
  {
    "url": "mx/kuahl/dictionary/glossary.html",
    "revision": "45e2450e0d21098ef186eb000ee2d44a"
  },
  {
    "url": "mx/kuahl/dictionary/index.html",
    "revision": "ffd411f160f5033b1a190fe9cf1f812c"
  },
  {
    "url": "mx/kuahl/grammar/adjective/index.html",
    "revision": "7dbc2f70f6e0be95a387c6e16d748131"
  },
  {
    "url": "mx/kuahl/grammar/adverb/index.html",
    "revision": "e3ca8a5f8d948ed794a33b7813237321"
  },
  {
    "url": "mx/kuahl/grammar/alphabet/index.html",
    "revision": "23a44ba0c877a6cf0d5078b1cca72f34"
  },
  {
    "url": "mx/kuahl/grammar/article/index.html",
    "revision": "644b7d302b40789825cb55c216bc8df7"
  },
  {
    "url": "mx/kuahl/grammar/guide/index.html",
    "revision": "c1241ddf53f4bb4012c85a58d530e02b"
  },
  {
    "url": "mx/kuahl/grammar/verbs/index.html",
    "revision": "079d3b4aa93092d16b7fb16996bcf0ba"
  },
  {
    "url": "mx/kuahl/index.html",
    "revision": "38483976f4d6c18b59658f082fef110c"
  },
  {
    "url": "mx/kuahl/vocabulary/animals/index.html",
    "revision": "f4392d3e6f181ecbf91850a0730f4f2c"
  },
  {
    "url": "mx/kuahl/vocabulary/greetings/index.html",
    "revision": "bf498c3f858775bbcf92b5fe50ee35de"
  },
  {
    "url": "mx/kuahl/vocabulary/more_used/index.html",
    "revision": "5869dc9a605fc1911b141d0a7ba2e762"
  },
  {
    "url": "mx/kuahl/vocabulary/people/index.html",
    "revision": "8c6e6be9c654b2207974c09d083f6bfd"
  },
  {
    "url": "mx/kuahl/vocabulary/phrases/index.html",
    "revision": "25568cff2a35aba44478df0be9708152"
  },
  {
    "url": "mx/kumiai/courses/basic/index.html",
    "revision": "1e05d643693cf351fb547c4a3f514559"
  },
  {
    "url": "mx/kumiai/courses/intermediate/index.html",
    "revision": "c73519f6a397525a9f90b07b7f97bad2"
  },
  {
    "url": "mx/kumiai/dictionary/glossary.html",
    "revision": "c4d263bb50bc82cda460b8bdbf7a1eef"
  },
  {
    "url": "mx/kumiai/dictionary/index.html",
    "revision": "eef1eec04875f036f216a9ebad14a961"
  },
  {
    "url": "mx/kumiai/grammar/adjective/index.html",
    "revision": "a2f56ba5d2d6b9c9e2b2bb8fa5c0e3f4"
  },
  {
    "url": "mx/kumiai/grammar/adverb/index.html",
    "revision": "bea29ab3bd2e6a33b5fead94783c677a"
  },
  {
    "url": "mx/kumiai/grammar/alphabet/index.html",
    "revision": "4d8707fdc4321a0abdb6b49354653edf"
  },
  {
    "url": "mx/kumiai/grammar/article/index.html",
    "revision": "810a6aa1c80604be913a21d6f0c2b276"
  },
  {
    "url": "mx/kumiai/grammar/guide/index.html",
    "revision": "556bf4d2d4ada7e804c7adf628e3356f"
  },
  {
    "url": "mx/kumiai/grammar/verbs/index.html",
    "revision": "aff160520748c904a923644470ffb199"
  },
  {
    "url": "mx/kumiai/index.html",
    "revision": "813f4d5fa22cc9c7df54d7d059b4d969"
  },
  {
    "url": "mx/kumiai/vocabulary/animals/index.html",
    "revision": "dceb48ce3f06e48e35a77ed112556ea5"
  },
  {
    "url": "mx/kumiai/vocabulary/greetings/index.html",
    "revision": "1932c601887262aed1c30dcb998d9dbe"
  },
  {
    "url": "mx/kumiai/vocabulary/more_used/index.html",
    "revision": "cb908866df9d4653c0e0f4c3120af355"
  },
  {
    "url": "mx/kumiai/vocabulary/people/index.html",
    "revision": "8c62ea9c9f3c6b921feb7f895de6f2c2"
  },
  {
    "url": "mx/kumiai/vocabulary/phrases/index.html",
    "revision": "cc481f2fbd67f5db4ab13911fbe4020b"
  },
  {
    "url": "mx/lacandon/courses/basic/index.html",
    "revision": "1a1115dd9b05869546f8fa35a3e60de1"
  },
  {
    "url": "mx/lacandon/courses/intermediate/index.html",
    "revision": "6d46b7403b674e175d719f8a74816f3b"
  },
  {
    "url": "mx/lacandon/dictionary/glossary.html",
    "revision": "bf1ca1df019bae05c33eed0e3616f6e7"
  },
  {
    "url": "mx/lacandon/dictionary/index.html",
    "revision": "aaa60b2a311f247fad56ae76a8662892"
  },
  {
    "url": "mx/lacandon/grammar/adjective/index.html",
    "revision": "cf3c30be564d1633490f38753ac87eae"
  },
  {
    "url": "mx/lacandon/grammar/adverb/index.html",
    "revision": "0a80d0fd2429c0984f0c1f7fbd9276d8"
  },
  {
    "url": "mx/lacandon/grammar/alphabet/index.html",
    "revision": "d028e8bdda9f74081bd56b7873597d36"
  },
  {
    "url": "mx/lacandon/grammar/article/index.html",
    "revision": "7804e11d39bf7f739bf5e64710a6cc68"
  },
  {
    "url": "mx/lacandon/grammar/guide/index.html",
    "revision": "bfd69706a4d8c0a5dec9f9700c755c5b"
  },
  {
    "url": "mx/lacandon/grammar/verbs/index.html",
    "revision": "0f1fa5d74f0a7152b1ee85c85ce93e97"
  },
  {
    "url": "mx/lacandon/index.html",
    "revision": "ace88176ea1ec11e043af13ea3d33002"
  },
  {
    "url": "mx/lacandon/vocabulary/animals/index.html",
    "revision": "5c0854e73f1153c1d42a34410e02a6bd"
  },
  {
    "url": "mx/lacandon/vocabulary/greetings/index.html",
    "revision": "3c2ad3e299a51488b39a268d89243f75"
  },
  {
    "url": "mx/lacandon/vocabulary/more_used/index.html",
    "revision": "8053fce7ac1897248975998465d005de"
  },
  {
    "url": "mx/lacandon/vocabulary/people/index.html",
    "revision": "2bd9e8bf692d1cb703aca304ef00979b"
  },
  {
    "url": "mx/lacandon/vocabulary/phrases/index.html",
    "revision": "e72f68e91d7868347e5860383064652e"
  },
  {
    "url": "mx/paipai/courses/basic/index.html",
    "revision": "af2304234285ee021aa618364ef6345e"
  },
  {
    "url": "mx/paipai/courses/intermediate/index.html",
    "revision": "c9040e67da4544a879da29261f84fbe1"
  },
  {
    "url": "mx/paipai/dictionary/glossary.html",
    "revision": "e8bc5d55c9253f0af410f5e135231fbc"
  },
  {
    "url": "mx/paipai/dictionary/index.html",
    "revision": "ecb8f089d91211d41a80ae8259fb788e"
  },
  {
    "url": "mx/paipai/grammar/adjective/index.html",
    "revision": "2ccb394eb7d75bf30b03709a0d0ff409"
  },
  {
    "url": "mx/paipai/grammar/adverb/index.html",
    "revision": "58a7cffe143d63f1cb279f23ef43183a"
  },
  {
    "url": "mx/paipai/grammar/alphabet/index.html",
    "revision": "fe0eecad822069a5a09951a8f519a256"
  },
  {
    "url": "mx/paipai/grammar/article/index.html",
    "revision": "cfc20f6aa99d3b5e91a31c788b8b13a0"
  },
  {
    "url": "mx/paipai/grammar/guide/index.html",
    "revision": "694a67792df556c1bc4eaa1154c926c3"
  },
  {
    "url": "mx/paipai/grammar/verbs/index.html",
    "revision": "32fb34a0022eb3e1854e7e58d5969248"
  },
  {
    "url": "mx/paipai/index.html",
    "revision": "064fa42c58c67bef579b9b3a2786a410"
  },
  {
    "url": "mx/paipai/vocabulary/animals/index.html",
    "revision": "2744a5200b3b36aeeda0ed2cf7598f19"
  },
  {
    "url": "mx/paipai/vocabulary/greetings/index.html",
    "revision": "545bf9694d905ebd3b4acff5a3ede5c4"
  },
  {
    "url": "mx/paipai/vocabulary/more_used/index.html",
    "revision": "14ae8359d9c719349fbe01dc5c1fb940"
  },
  {
    "url": "mx/paipai/vocabulary/people/index.html",
    "revision": "badf8cc8c5735ec4fe4cb5d69a7f893d"
  },
  {
    "url": "mx/paipai/vocabulary/phrases/index.html",
    "revision": "b11a0a4ccee9e4b1d295373d1fb4773f"
  },
  {
    "url": "mx/qatok/courses/basic/index.html",
    "revision": "de8ffc1f012aa13db2a249cecb5e479a"
  },
  {
    "url": "mx/qatok/courses/intermediate/index.html",
    "revision": "9b0daf08d4bff8b147ea3ceaba9ba797"
  },
  {
    "url": "mx/qatok/dictionary/glossary.html",
    "revision": "455bd7d872bf74e322c3c4c9b154ab03"
  },
  {
    "url": "mx/qatok/dictionary/index.html",
    "revision": "5f47f983ed4156e472b82ccfc85ffe93"
  },
  {
    "url": "mx/qatok/grammar/adjective/index.html",
    "revision": "f7de608938b14ebbbae8670ac019b903"
  },
  {
    "url": "mx/qatok/grammar/adverb/index.html",
    "revision": "a359b5c554daaefcc8c78fc880699cc4"
  },
  {
    "url": "mx/qatok/grammar/alphabet/index.html",
    "revision": "96f1dc84559eed5132be0c621a1ddab0"
  },
  {
    "url": "mx/qatok/grammar/article/index.html",
    "revision": "a45dfb4f2f7c8c6c9f420fac8b04d2bc"
  },
  {
    "url": "mx/qatok/grammar/guide/index.html",
    "revision": "8b3fe6bfd2d075be68d9a8075147b9f2"
  },
  {
    "url": "mx/qatok/grammar/verbs/index.html",
    "revision": "ea549edfda12f7659411916a64eef797"
  },
  {
    "url": "mx/qatok/index.html",
    "revision": "966f79a5fddaabe53ee021d6f2ade6d4"
  },
  {
    "url": "mx/qatok/vocabulary/animals/index.html",
    "revision": "eaf315bffbae2898930e3e1f97628af0"
  },
  {
    "url": "mx/qatok/vocabulary/greetings/index.html",
    "revision": "9ccd8a27d22a733e5456fa9054a827be"
  },
  {
    "url": "mx/qatok/vocabulary/more_used/index.html",
    "revision": "e54d3752dc84a9cb1e49c3428076ca3a"
  },
  {
    "url": "mx/qatok/vocabulary/people/index.html",
    "revision": "60ef33444e7e713c276ae956b2560d79"
  },
  {
    "url": "mx/qatok/vocabulary/phrases/index.html",
    "revision": "b059d8de3703a6eab8ae185dca17e84f"
  },
  {
    "url": "mx/tsotsil/courses/basic/index.html",
    "revision": "92e27f7aec22508c08c6e456fee15731"
  },
  {
    "url": "mx/tsotsil/courses/intermediate/index.html",
    "revision": "fb199d3efe615fa6ddbb2d9f825c0435"
  },
  {
    "url": "mx/tsotsil/dictionary/glossary.html",
    "revision": "e4838645dec1a1daf71e7cc0ddd22a97"
  },
  {
    "url": "mx/tsotsil/dictionary/index.html",
    "revision": "c9bcf1b84e67252f01992c0d491133a9"
  },
  {
    "url": "mx/tsotsil/grammar/adjective/index.html",
    "revision": "4137b22928bdefe1e1ef679fabe0357d"
  },
  {
    "url": "mx/tsotsil/grammar/adverb/index.html",
    "revision": "d3db651af726c891b43ced7d2884dce9"
  },
  {
    "url": "mx/tsotsil/grammar/alphabet/index.html",
    "revision": "e714323f698d42f77f6c356edd4b47d0"
  },
  {
    "url": "mx/tsotsil/grammar/article/index.html",
    "revision": "d9df95e8be499286988e09a3009fcb55"
  },
  {
    "url": "mx/tsotsil/grammar/guide/index.html",
    "revision": "4ea9174758ec619bdb3c18547c015a26"
  },
  {
    "url": "mx/tsotsil/grammar/verbs/index.html",
    "revision": "a8361f3b6edff213f6253c3d54712997"
  },
  {
    "url": "mx/tsotsil/index.html",
    "revision": "b0c7fc87c2e3efc3296d398608228da1"
  },
  {
    "url": "mx/tsotsil/vocabulary/animals/index.html",
    "revision": "522609b864550e582dc9d8d779f2b884"
  },
  {
    "url": "mx/tsotsil/vocabulary/greetings/index.html",
    "revision": "8f384f80f89f25b7c69b0cde2c5f4b7f"
  },
  {
    "url": "mx/tsotsil/vocabulary/more_used/index.html",
    "revision": "da2e6a40dd72dec11dee769c9a359214"
  },
  {
    "url": "mx/tsotsil/vocabulary/people/index.html",
    "revision": "18d2bb28fdff6b24ebac15319016eb92"
  },
  {
    "url": "mx/tsotsil/vocabulary/phrases/index.html",
    "revision": "47bb14f2f4dc2b21d7f74b60f562954f"
  },
  {
    "url": "mx/zoque/courses/basic/index.html",
    "revision": "415c4bca8a28614e146b9d6dd6e27d76"
  },
  {
    "url": "mx/zoque/courses/intermediate/index.html",
    "revision": "c3b23d313bd3aa873dc0ff1239908db5"
  },
  {
    "url": "mx/zoque/dictionary/glossary.html",
    "revision": "7adcbde0548fe379bf2cb444c771ecd6"
  },
  {
    "url": "mx/zoque/dictionary/index.html",
    "revision": "18cfd2661f94dc55c92957c0aefb7c91"
  },
  {
    "url": "mx/zoque/grammar/adjective/index.html",
    "revision": "458c50ded4290c9fbba46ae475869392"
  },
  {
    "url": "mx/zoque/grammar/adverb/index.html",
    "revision": "bb103a3dce2d730e6792f6aa0ff2655b"
  },
  {
    "url": "mx/zoque/grammar/alphabet/index.html",
    "revision": "7117fa6567d3f3684425851c820f0a1c"
  },
  {
    "url": "mx/zoque/grammar/article/index.html",
    "revision": "10792c8aaafdf99de412dcfb1ec5aa47"
  },
  {
    "url": "mx/zoque/grammar/guide/index.html",
    "revision": "f63b5816b041a85af086baa8a7f8e7ff"
  },
  {
    "url": "mx/zoque/grammar/verbs/index.html",
    "revision": "7b46b4713d33e4b18c5453bff8312707"
  },
  {
    "url": "mx/zoque/index.html",
    "revision": "ab54c0b8e73abc8efa0674d4c831e66a"
  },
  {
    "url": "mx/zoque/vocabulary/animals/index.html",
    "revision": "f6cd3397b797cd20b7b503b81501e6d1"
  },
  {
    "url": "mx/zoque/vocabulary/greetings/index.html",
    "revision": "6dd2861214c032b3b127368767aef8b3"
  },
  {
    "url": "mx/zoque/vocabulary/more_used/index.html",
    "revision": "3de5073c4a5eae329e2db4e021ded02b"
  },
  {
    "url": "mx/zoque/vocabulary/people/index.html",
    "revision": "40c91f5bd3e9ef23ed673d5b09781692"
  },
  {
    "url": "mx/zoque/vocabulary/phrases/index.html",
    "revision": "3482c0f33e1e3ba0206a1b78c787db4a"
  },
  {
    "url": "pa/buglere/courses/basic/index.html",
    "revision": "b74aedd3a0e0710c313d9af40b078281"
  },
  {
    "url": "pa/buglere/courses/intermediate/index.html",
    "revision": "7e387b7bf8b59a68b3bc38602f864f50"
  },
  {
    "url": "pa/buglere/dictionary/glossary.html",
    "revision": "c185d04ac34469b517a0c02d1d862881"
  },
  {
    "url": "pa/buglere/dictionary/index.html",
    "revision": "eaeeef51cba3b9e5b8a6398f229376cb"
  },
  {
    "url": "pa/buglere/grammar/adjective/index.html",
    "revision": "922a0012e5e365172808f60fc8e1b572"
  },
  {
    "url": "pa/buglere/grammar/adverb/index.html",
    "revision": "1667490f1e319bdc6567d555db16835d"
  },
  {
    "url": "pa/buglere/grammar/alphabet/index.html",
    "revision": "8012e04f897ddb8acba06a57d2708d55"
  },
  {
    "url": "pa/buglere/grammar/article/index.html",
    "revision": "1d4c9596021bebac1f4efd012eebd997"
  },
  {
    "url": "pa/buglere/grammar/guide/index.html",
    "revision": "21ece5ef443d81506308ef32424ee8bd"
  },
  {
    "url": "pa/buglere/grammar/verbs/index.html",
    "revision": "9adc2b40542b936469f9fcfb1728867c"
  },
  {
    "url": "pa/buglere/vocabulary/animals/index.html",
    "revision": "186345097d98e921a07efa05e63dbe18"
  },
  {
    "url": "pa/buglere/vocabulary/greetings/index.html",
    "revision": "5f8a4b5ca689fccac81d9f9cc46f471a"
  },
  {
    "url": "pa/buglere/vocabulary/more_used/index.html",
    "revision": "2174e428ae4aeed5218e15bea2fd4e49"
  },
  {
    "url": "pa/buglere/vocabulary/people/index.html",
    "revision": "d2c578717859751fc7ac8bbe45a1505f"
  },
  {
    "url": "pa/buglere/vocabulary/phrases/index.html",
    "revision": "488ec14d89ed4f8ed63f7d41060fd33f"
  },
  {
    "url": "pa/embera/courses/basic/index.html",
    "revision": "1bd1ce231552fca988b09d449df25914"
  },
  {
    "url": "pa/embera/courses/intermediate/index.html",
    "revision": "fc287a81354eb69ea05a897ceee7b262"
  },
  {
    "url": "pa/embera/dictionary/glossary.html",
    "revision": "ee0fd81891ae39a47b219761f95a122f"
  },
  {
    "url": "pa/embera/dictionary/index.html",
    "revision": "380f573e3b6edeba8a4a6a4e381d35de"
  },
  {
    "url": "pa/embera/grammar/adjective/index.html",
    "revision": "e08725cc2d09d317ac127dc794619d07"
  },
  {
    "url": "pa/embera/grammar/adverb/index.html",
    "revision": "1fcc88c6d778d831e48d07827b88f5eb"
  },
  {
    "url": "pa/embera/grammar/alphabet/index.html",
    "revision": "81d7122e1dc9080fa279acfdfaf7fa1c"
  },
  {
    "url": "pa/embera/grammar/article/index.html",
    "revision": "2456d1d9265e49d7097e968e5d11658a"
  },
  {
    "url": "pa/embera/grammar/guide/index.html",
    "revision": "25cd2351908c797606ab5993506eb6fe"
  },
  {
    "url": "pa/embera/grammar/verbs/index.html",
    "revision": "74cdb56da0fbb01683c31213eb5adc47"
  },
  {
    "url": "pa/embera/index.html",
    "revision": "2094119a738e2207b6046c16ac8fc6fe"
  },
  {
    "url": "pa/embera/vocabulary/animals/index.html",
    "revision": "e75e7ba96186e849d37cb7896be515f3"
  },
  {
    "url": "pa/embera/vocabulary/greetings/index.html",
    "revision": "d3471c84020a9bde1c6a26d7e8c4d4dc"
  },
  {
    "url": "pa/embera/vocabulary/more_used/index.html",
    "revision": "7b1065364c814a53a03762b422e36405"
  },
  {
    "url": "pa/embera/vocabulary/people/index.html",
    "revision": "f0a7ad6c272ab99e091c561edc2ffb2e"
  },
  {
    "url": "pa/embera/vocabulary/phrases/index.html",
    "revision": "1a5521cba52a4d821257e22ad1fbc2fe"
  },
  {
    "url": "pa/kuna/courses/basic/index.html",
    "revision": "ed0bef79b1c87786c017a91d66159a92"
  },
  {
    "url": "pa/kuna/courses/intermediate/index.html",
    "revision": "b38d8cc41f42214e6d587cc4309171c1"
  },
  {
    "url": "pa/kuna/dictionary/glossary.html",
    "revision": "cd59814bc024a02d0ff7a332b1483e1f"
  },
  {
    "url": "pa/kuna/dictionary/index.html",
    "revision": "2255935e3f0902531744f83864b6fd77"
  },
  {
    "url": "pa/kuna/grammar/adjective/index.html",
    "revision": "c6e390f107e928aeb3a0356a72d1f319"
  },
  {
    "url": "pa/kuna/grammar/adverb/index.html",
    "revision": "ae2ed57830e541cbbbde885ed90d51fb"
  },
  {
    "url": "pa/kuna/grammar/alphabet/index.html",
    "revision": "3cd4c22d161ef128b852b28739129231"
  },
  {
    "url": "pa/kuna/grammar/article/index.html",
    "revision": "fac39fe23ca9ff355862ea02da38ad3d"
  },
  {
    "url": "pa/kuna/grammar/guide/index.html",
    "revision": "670e8dceaf391b7ae1601a19d0d821bb"
  },
  {
    "url": "pa/kuna/grammar/verbs/index.html",
    "revision": "ccdf0c397e5da86dcd170577aae06264"
  },
  {
    "url": "pa/kuna/index.html",
    "revision": "9216d08cc60b745a2e88ced3a1f40cb8"
  },
  {
    "url": "pa/kuna/vocabulary/animals/index.html",
    "revision": "dfe55a73d5589841afc08c412ad07bc5"
  },
  {
    "url": "pa/kuna/vocabulary/greetings/index.html",
    "revision": "c16d61209c21fc7fda037ff516c0ce56"
  },
  {
    "url": "pa/kuna/vocabulary/more_used/index.html",
    "revision": "b69688ea7567c1bb373e1d150712f433"
  },
  {
    "url": "pa/kuna/vocabulary/people/index.html",
    "revision": "0120a1f9968188f3430a323df614c0d8"
  },
  {
    "url": "pa/kuna/vocabulary/phrases/index.html",
    "revision": "4776eb17bae7cd42010e789b9b5b1610"
  },
  {
    "url": "pa/ngabere/courses/basic/index.html",
    "revision": "c85191961b40e6e834d1364ade9a18b0"
  },
  {
    "url": "pa/ngabere/courses/intermediate/index.html",
    "revision": "341f5dce549bcccbe0320bf8af27611e"
  },
  {
    "url": "pa/ngabere/dictionary/glossary.html",
    "revision": "dc018357357717587bb4175479acd543"
  },
  {
    "url": "pa/ngabere/dictionary/index.html",
    "revision": "f2e70af624e620736a4af369a49b3447"
  },
  {
    "url": "pa/ngabere/grammar/adjective/index.html",
    "revision": "f97dd4c0e66a3155ff329207d3d3b264"
  },
  {
    "url": "pa/ngabere/grammar/adverb/index.html",
    "revision": "5ebddeec8177babfe907f71dc838eba9"
  },
  {
    "url": "pa/ngabere/grammar/alphabet/index.html",
    "revision": "db71c4bf5347f414e1fa29a83dc21c73"
  },
  {
    "url": "pa/ngabere/grammar/article/index.html",
    "revision": "4834a2498474e164212d563b7b02c308"
  },
  {
    "url": "pa/ngabere/grammar/guide/index.html",
    "revision": "e237e97d634cd669e6647f7d59d71b26"
  },
  {
    "url": "pa/ngabere/grammar/verbs/index.html",
    "revision": "54059be1963504412c08ae6d46a912ea"
  },
  {
    "url": "pa/ngabere/index.html",
    "revision": "b36e499c59ebc3a9c70297636d4143a1"
  },
  {
    "url": "pa/ngabere/vocabulary/animals/index.html",
    "revision": "b05c2354b1e929d44aa9a876a83dd5a7"
  },
  {
    "url": "pa/ngabere/vocabulary/greetings/index.html",
    "revision": "b2ad4d935dd22d3696e8cbc486797cd5"
  },
  {
    "url": "pa/ngabere/vocabulary/more_used/index.html",
    "revision": "d1bc36d65f241359b88f6c148b945ef5"
  },
  {
    "url": "pa/ngabere/vocabulary/people/index.html",
    "revision": "432405d5498ecc3c0ed6a80d2f7b75ed"
  },
  {
    "url": "pa/ngabere/vocabulary/phrases/index.html",
    "revision": "b0165f87c028836509709e5e3afcabf6"
  },
  {
    "url": "pa/patois/courses/basic/index.html",
    "revision": "e2a34c4551630fc6ed231066fa4b2bbe"
  },
  {
    "url": "pa/patois/courses/intermediate/index.html",
    "revision": "1ce35259d1c5835c0e5f59acdd6726d9"
  },
  {
    "url": "pa/patois/dictionary/glossary.html",
    "revision": "010cd6832cddab99875acd4140f6aa50"
  },
  {
    "url": "pa/patois/dictionary/index.html",
    "revision": "8cb9bbef8a7ba862987440a191c5c60d"
  },
  {
    "url": "pa/patois/grammar/adjective/index.html",
    "revision": "6cf9d24dce3c037935eff11fff58a0c2"
  },
  {
    "url": "pa/patois/grammar/adverb/index.html",
    "revision": "a5e8b221ccf107287cbd4a9535a78c56"
  },
  {
    "url": "pa/patois/grammar/alphabet/index.html",
    "revision": "40dc55b4d06050bf250c92d842462cb7"
  },
  {
    "url": "pa/patois/grammar/article/index.html",
    "revision": "150cda9e4c1415c3e5b851cda7a41988"
  },
  {
    "url": "pa/patois/grammar/guide/index.html",
    "revision": "287692cb600f5935d963060a86fa9852"
  },
  {
    "url": "pa/patois/grammar/verbs/index.html",
    "revision": "5f5260134466ea2cbdcbc3083cf9db9b"
  },
  {
    "url": "pa/patois/index.html",
    "revision": "32e62372f3e1f907e5cde68c1b113683"
  },
  {
    "url": "pa/patois/vocabulary/animals/index.html",
    "revision": "4e381fcd62e80ee3eff3abb8958c002c"
  },
  {
    "url": "pa/patois/vocabulary/greetings/index.html",
    "revision": "ea8c630afb8f1f98df99c693e6e24c2c"
  },
  {
    "url": "pa/patois/vocabulary/more_used/index.html",
    "revision": "4bd7e0526931a033576dc421ea495fe1"
  },
  {
    "url": "pa/patois/vocabulary/people/index.html",
    "revision": "32e86bdcc0cc70216f202756aea75c66"
  },
  {
    "url": "pa/patois/vocabulary/phrases/index.html",
    "revision": "9df46627d8d95bc539a6b6e42f09d6c0"
  },
  {
    "url": "pa/teribe/courses/basic/index.html",
    "revision": "535c119f35fe76acb2c766d58700490a"
  },
  {
    "url": "pa/teribe/courses/intermediate/index.html",
    "revision": "57774e3ca790af08a96d539ce4fc4a45"
  },
  {
    "url": "pa/teribe/dictionary/glossary.html",
    "revision": "52e832a01fd5c1c897dcba7fa36fd769"
  },
  {
    "url": "pa/teribe/dictionary/index.html",
    "revision": "6d366a7eff22fe9692774fc1683940ff"
  },
  {
    "url": "pa/teribe/grammar/adjective/index.html",
    "revision": "230f8c7b95245891f2b03728dadd1216"
  },
  {
    "url": "pa/teribe/grammar/adverb/index.html",
    "revision": "071052ba62979f0654cecd803826bdf3"
  },
  {
    "url": "pa/teribe/grammar/alphabet/index.html",
    "revision": "02913f8f05b9cf805c63da19e74c3e55"
  },
  {
    "url": "pa/teribe/grammar/article/index.html",
    "revision": "dd832b456c982d7e23a86528e3117429"
  },
  {
    "url": "pa/teribe/grammar/guide/index.html",
    "revision": "c0e5bf4fccc2ea53b6ed15da4a7e7ca1"
  },
  {
    "url": "pa/teribe/grammar/verbs/index.html",
    "revision": "fc45fd11046c77086932f8dfe6c174c6"
  },
  {
    "url": "pa/teribe/index.html",
    "revision": "3b2677d64e51ec002643b26d8e55b5ed"
  },
  {
    "url": "pa/teribe/vocabulary/animals/index.html",
    "revision": "2d93f07f7c4ced00d66cec8a1357b446"
  },
  {
    "url": "pa/teribe/vocabulary/greetings/index.html",
    "revision": "91b42bea8df92cd85387e334223e7738"
  },
  {
    "url": "pa/teribe/vocabulary/more_used/index.html",
    "revision": "0a3afc7818d2a3f503cd4ff7367d20a1"
  },
  {
    "url": "pa/teribe/vocabulary/people/index.html",
    "revision": "ee742df2a1509d2a9232b024dd0832e3"
  },
  {
    "url": "pa/teribe/vocabulary/phrases/index.html",
    "revision": "0bf51afb69dcadcd1ac7b052567d3342"
  },
  {
    "url": "pa/wounmeu/courses/basic/index.html",
    "revision": "3604d87a2419b59b906b24dc6b08c06f"
  },
  {
    "url": "pa/wounmeu/courses/intermediate/index.html",
    "revision": "dc4322387bf101b233b52e375d323400"
  },
  {
    "url": "pa/wounmeu/dictionary/glossary.html",
    "revision": "c8ac3652a69a7c74f6ef0b45e64fd017"
  },
  {
    "url": "pa/wounmeu/dictionary/index.html",
    "revision": "f516db7d94be5ceecddeccb244a95fd2"
  },
  {
    "url": "pa/wounmeu/grammar/adjective/index.html",
    "revision": "655851d63d5ec244dcfbba11aad08ea4"
  },
  {
    "url": "pa/wounmeu/grammar/adverb/index.html",
    "revision": "1709480289518beefdd0a580816989ab"
  },
  {
    "url": "pa/wounmeu/grammar/alphabet/index.html",
    "revision": "0f95b6933d45c9491b1e09c69dc9f61f"
  },
  {
    "url": "pa/wounmeu/grammar/article/index.html",
    "revision": "b7b8111f0f64de6ef286efe1d419fd45"
  },
  {
    "url": "pa/wounmeu/grammar/guide/index.html",
    "revision": "76a7ba6e50a0e136af5024aa50e4841d"
  },
  {
    "url": "pa/wounmeu/grammar/verbs/index.html",
    "revision": "b1c06791551d645870973e2d8a07d2a0"
  },
  {
    "url": "pa/wounmeu/index.html",
    "revision": "89b2e25e3543274952ad8237c530cae5"
  },
  {
    "url": "pa/wounmeu/vocabulary/animals/index.html",
    "revision": "b2f308118422274befc2f79d568cbdf5"
  },
  {
    "url": "pa/wounmeu/vocabulary/greetings/index.html",
    "revision": "fbb7fc1d72fbf51025c54478b8d49418"
  },
  {
    "url": "pa/wounmeu/vocabulary/more_used/index.html",
    "revision": "dd0afeee7e0c5b063b740300d70b3ef6"
  },
  {
    "url": "pa/wounmeu/vocabulary/people/index.html",
    "revision": "0a9c123d89ab57a9e15d62c63fc2c8f9"
  },
  {
    "url": "pa/wounmeu/vocabulary/phrases/index.html",
    "revision": "d8eed9c84af327aa1d89f899058030dc"
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
