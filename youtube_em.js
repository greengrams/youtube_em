function onYouTubeIframeAPIReady() {
	var list = document.getElementsByClassName("youtube-audio");
	var o = function (elmnt,i) {
		var a = elmnt ? "6mG6rx9.png" : "ZXzo5T1.png";
		list[i].t.setAttribute("src", "https://i.imgur.com/" + a);
	};
	for (var i = 0; i < list.length; i++) {
		var e = list[i];
		e.t = document.createElement("img");
		e.t.setAttribute("id", "youtube-icon");
		e.t.style.cssText = "cursor:pointer;cursor:hand";
		e.t.ind=i;
		e.appendChild(e.t);
		var a = document.createElement("div");
		a.setAttribute("id", "youtube-player"+i);
		a.setAttribute("class", "youtube-player");
		e.appendChild(a);
		e.t.onclick = function (elmnt) {
			elmnt.target.r.getPlayerState() === YT.PlayerState.PLAYING || elmnt.target.r.getPlayerState() === YT.PlayerState.BUFFERING ? (elmnt.target.r.pauseVideo(), o(!1,elmnt.target.ind)) : (elmnt.target.r.playVideo(), o(!0,elmnt.target.ind))
		};
		e.t.r = new YT.Player("youtube-player"+i, {
			height : "0",
			width : "0",
			videoId : e.dataset.video,
			host: 'https://youtube.com',
			playerVars : {
				'autoplay' : e.dataset.autoplay,
				'loop' : e.dataset.loop,
				'origin': window.location.href
			},
			events : {
				onReady : function (elmnt) {
					elmnt.target.setPlaybackQuality("small");
					o(elmnt.target.getPlayerState() !== YT.PlayerState.CUED,elmnt.target.ind);
				},
				onStateChange : function (elmnt) {
					elmnt.data === YT.PlayerState.ENDED && o(!1,elmnt.target.ind);
				}
			}
		});
		e.t.r.ind=i;
	}
}
