module.exports = {
  config: {
    name: "islamic",
    version: "7.0",
    author: "Ullash ッ",
    countDown: 5,
    role: 0,
    shortDescription: "all video ðŸ“·",
    longDescription: "",
    category: "islamic",
    guide: "{pn}"
  },
   onStart: async function ({ message }) {
   var BAYJID= ["https://i.imgur.com/FbnZI40.mp4",
"https://i.imgur.com/7C1vZQ0.mp4",
"https://i.imgur.com/basnYDU.mp4",
"https://i.imgur.com/7qhu4Bj.mp4",
"https://i.imgur.com/dOWQgcq.mp4",
"https://i.imgur.com/oxFuJYw.mp4",
"https://i.imgur.com/OKKlDBN.mp4",
"https://i.imgur.com/6wWebFc.mp4",
"https://i.imgur.com/K2LTmaA.mp4",
"https://i.imgur.com/i9vKvTd.mp4",
"https://i.imgur.com/Y6uBzxx.mp4",
"https://i.imgur.com/ULtFVPQ.mp4",
"https://i.imgur.com/wX8WJh3.mp4",
"https://i.imgur.com/6A42EIx.mp4",
"https://i.imgur.com/ozRevxt.mp4",
"https://i.imgur.com/Gd49ZSo.mp4",
"https://i.imgur.com/xu6lBXk.mp4",
"https://i.imgur.com/sDNohv4.mp4",
"https://i.imgur.com/JBu2Ie3.mp4",
"https://i.imgur.com/UaY42rq.mp4",
"https://i.imgur.com/NFxf731.mp4",
"https://i.imgur.com/vv1HsMC.mp4",
"https://i.imgur.com/Y8MPzLv.mp4",
"https://i.imgur.com/9M1v1qK.mp4",
"https://i.imgur.com/EgUy7v0.mp4",
"https://i.imgur.com/IjDqg2G.mp4",
"https://i.imgur.com/51NYqmO.mp4",
"https://i.imgur.com/XjfJHh9.mp4",
"https://i.imgur.com/XHrkPt4.mp4",
"https://i.imgur.com/mqEYRdy.mp4",
"https://i.imgur.com/NaVsFmQ.mp4",
"https://i.imgur.com/31XSmVj.mp4",
"https://i.imgur.com/PPamCPI.mp4",
"https://i.imgur.com/i6Iy7iN.mp4",
"https://i.imgur.com/YJazy17.mp4",
"https://i.imgur.com/cZ8Pk4m.mp4",
"https://i.imgur.com/1X6qGnq.mp4",
"https://i.imgur.com/h3yLrQL.mp4",
"https://i.imgur.com/mqTJpSK.mp4",
"https://i.imgur.com/EtIuA8B.mp4",
"https://i.imgur.com/4KsW9Cv.mp4",
"https://i.imgur.com/D2ghR8E.mp4",
"https://i.imgur.com/kSHcjCL.mp4",
"https://i.imgur.com/YJazy17.mp4",
"https://i.imgur.com/Hdrzqmg.mp4",
"https://i.imgur.com/uOQ7rHT.mp4",
"https://i.imgur.com/R2tUq6K.mp4",
"https://i.imgur.com/TCTZuJE.mp4",
]

let msg = BAYJID[Math.floor(Math.random()*BAYJID.length)]
message.send({
  body: 'video made by__SAIF🤍🎀',attachment: await global.utils.getStreamFromURL(msg)
})
}
     }
