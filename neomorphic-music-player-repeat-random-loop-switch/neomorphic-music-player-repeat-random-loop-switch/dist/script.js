(function IIFE() {
	const list = [
	{
		id: 1,
		class: 'jerryHerman',
		url: "mp3/Noah Alejandre - Nahuhulog Na Sa'yo.mp3",
		author: "Sample Author",
		title: "Sample title",
		message: "sample message"
	},
	{
		id: 2,
		class: 'elvisPresley',
		url: "https://rawcdn.githack.com/Kerthin/musicPlayer-templateSait/4df6444e97123a39d036f1f9b57973858f70bae5/docs/music/ElvisPresley_CantHelpFallingInLove.mp3",
		author: "Elvis Presley",
		title: "Can't Falling In Love",
		message: "sample2"
	},
	{
		id: 3,
		class: 'royOrbison',
		url: "https://rawcdn.githack.com/Kerthin/musicPlayer-templateSait/4df6444e97123a39d036f1f9b57973858f70bae5/docs/music/RoyOrbison_OhPrettyWoman.mp3",
		author: "Roy Orbison",
		title: "Oh, Pretty Woman",
		message: "sample3"
	},
	{
		id: 4,
		class: 'frankSinatra',
		url: "https://rawcdn.githack.com/Kerthin/musicPlayer-templateSait/4df6444e97123a39d036f1f9b57973858f70bae5/docs/music/FrankSinatra_ThatsLife.mp3",
		author: "Frank Sinatra",
		title: "That's Life",
		message: "sample4"
	},
	{
		id: 5,
		class: 'jimCroce',
		url: "https://rawcdn.githack.com/Kerthin/musicPlayer-templateSait/4df6444e97123a39d036f1f9b57973858f70bae5/docs/music/JimCroce_TimeInABottle.mp3",
		author: "Jim Croce",
		title: "Time In A Bottle",
		message: "sample5"
	},
	{
		id: 6,
		class: 'redHotChiliPeppers',
		url: "https://rawcdn.githack.com/Kerthin/musicPlayer-templateSait/4df6444e97123a39d036f1f9b57973858f70bae5/docs/music/RedHotChiliPeppers_DarkNecessities.mp3",
		author: "Red Hot Chili Peppers",
		title: "Dark Necessities",
		message: "sample6"
	},
	{
		id: 7,
		class: 'stephaneGrappelli',
		url: "https://rawcdn.githack.com/Kerthin/musicPlayer-templateSait/4df6444e97123a39d036f1f9b57973858f70bae5/docs/music/StephaneGrappelli_laMer.mp3",
		author: "Stephane Grappelli",
		title: "La Mer",
		message: "sample7"
	},
	{
		id: 8,
		class: 'evanKing',
		url: "https://rawcdn.githack.com/Kerthin/musicPlayer-templateSait/4df6444e97123a39d036f1f9b57973858f70bae5/docs/music/EvanKing_Overwatch.mp3",
		author: "Evan King",
		title: "Overwatch",
		message: "sample8"
	},
	{
		id: 9,
		class: 'JR',
		url: "https://rawcdn.githack.com/Kerthin/musicPlayer-templateSait/4df6444e97123a39d036f1f9b57973858f70bae5/docs/music/JR_SouthSac.mp3",
		author: "JR",
		title: "SouthSac",
		message: "sample9"
	},
	{
		id: 10,
		class: 'theDeli',
		url: "https://rawcdn.githack.com/Kerthin/musicPlayer-templateSait/4df6444e97123a39d036f1f9b57973858f70bae5/docs/music/TheDeli_Sun.mp3",
		author: "The Deli",
		title: "Sun",
		message: "sample10"
	}
];

let currentId = 0;
let isPlaying = false;
let isLoop = true;
let loopOne = false;
let isShuffle = false;
let currentAudio = "music1";
let timer = null;

const albumWrap = document.querySelector(".album");
const currentTimeIndicator = document.querySelector(".musicTime__current");
const leftTimeIndicator = document.querySelector(".musicTime__last");
const progressBar = document.getElementById("length");
const title = document.querySelector(".musicInfo__name");
const author = document.querySelector(".musicInfo__author");
const message = document.querySelector(".musicInfo__message");

const albumClass = document.getElementById("jsAlbum");
const playBtn = document.getElementById("play");
const loopBtn = document.getElementById("loop");
const shuffleBtn = document.getElementById("shuffle");
const forwardBtn = document.getElementById("next");
const backwardBtn = document.getElementById("prev");
const prevBtn = document.getElementById("backward");
const nextBtn = document.getElementById("forward");

const progressDiv = document.getElementById("progress");

// BUTTON PLAY
function play(e) {
	if (!isPlaying) {
		e.target.classList.remove("_play");
		e.target.classList.add("_pause");

		albumWrap.classList.remove("_play");
		albumWrap.classList.add("_pause");

		isPlaying = true;
		document.getElementById(currentAudio).play();
		showTime();
	} else {
		e.target.classList.remove("_pause");
		e.target.classList.add("_play");

		albumWrap.classList.remove("_pause");
		albumWrap.classList.add("_play");

		isPlaying = false;
		document.getElementById(currentAudio).pause();
		clearInterval(timer);
	}
}

// TIME
function changeBar() {
	const audio = document.getElementById(currentAudio);
	const percentage = (audio.currentTime / audio.duration).toFixed(3);
	progressBar.style.transition = "";

	//set current time
	const minute = Math.floor(audio.currentTime / 60);
	const second = Math.floor(audio.currentTime % 60);
	const leftTime = audio.duration - audio.currentTime;
	currentTimeIndicator.innerHTML = ("0" + minute).substr(-2) + ":" + ("0" + second).substr(-2);

	//set left time
	const leftMinute = Math.floor(leftTime / 60);
	const leftSecond = Math.floor(leftTime % 60);

	leftTimeIndicator.innerHTML = ("0" + leftMinute).substr(-2) + ":" + ("0" + leftSecond).substr(-2);

	//set time bar
	progressBar.style.width = percentage * 100 + "%";
}

function showTime() {
	timer = setInterval(() => changeBar(), 500);
}

// SWITCHING MUSIC
function nextMusic(mode) {
	playBtn.classList.remove("_pause");
	playBtn.classList.add("_play");

	albumWrap.classList.remove("_pause");
	albumWrap.classList.add("_play");

	document.getElementById(currentAudio).pause();
	isPlaying = false;
	clearInterval(timer);

	if (mode === "next") {
		currentId = currentId + 1 > list.length - 1 ? 0 : currentId + 1;
		init();
	} else {
		currentId = currentId - 1 < 0 ? list.length - 1 : currentId - 1;
		init();
	}
}

// STARTING A RANDOM TRACK
function shuffle(e) {
	isShuffle = !isShuffle;
	if (isShuffle) {
		e.target.classList.add("_shuffle");
	} else {
		e.target.classList.remove("_shuffle");
	}
}

// 5 SECONDS AGO
function backward() {
	const audio = document.getElementById(currentAudio);
	audio.currentTime -= 5;
	if (!isPlaying) {
		changeBar();
	}
}

// 5 SECONDS AHEAD
function forward() {
	const audio = document.getElementById(currentAudio);
	audio.currentTime += 5;
	if (!isPlaying) {
		changeBar();
	}
}

// STOP MUSIC
function stopMusic() {
	playBtn.classList.add("_play");
	albumWrap.classList.add("_play");
	isPlaying = false;
}

// THE START OF THE NEXT TRACK
function goToNextMusic() {
	let newId = currentId;
	while (isShuffle && !loopOne && newId === currentId) {
		newId = Math.floor(Math.random() * Math.floor(list.length - 1));
	}

	if (!isShuffle && !loopOne) {
		currentId = currentId + 1 > list.length - 1 ? 0 : currentId + 1;
	}
	if (!isShuffle && loopOne) {
		currentId = currentId;
	}

	if (isShuffle) {
		currentId = newId;
	}
	init();
	document.getElementById(currentAudio).play();
}

// THE PLAYBACK MODE OF THE TRACK
function loop(e) {
	const audio = document.getElementById(currentAudio);

	if (!isLoop && !loopOne) {
		isLoop = true;
		loopOne = false;
		e.target.classList.remove("_off");
		e.target.classList.add("_loop");
		audio.loop = false;
		audio.onended = e => goToNextMusic();
		console.log(isLoop, loopOne);
	} else if (isLoop && !loopOne) {
		isLoop = true;
		loopOne = true;
		e.target.classList.remove("_loop");
		e.target.classList.add("_repeat");
		audio.loop = true;
		audio.onended = e => goToNextMusic();
		console.log(isLoop, loopOne);
	} else {
		isLoop = false;
		loopOne = false;
		e.target.classList.remove("_repeat");
		e.target.classList.add("_off");
		audio.loop = false;
		audio.onended = e => stopMusic();
		console.log(isLoop, loopOne);
	}
}

var cards = document.querySelectorAll('.card');

[...cards].forEach((card)=>{
  card.addEventListener( 'click', function() {
    card.classList.toggle('is-flipped');
  });
});

// PROGRESS 
function progress(e) {
	const audio = document.getElementById(currentAudio);
	const pos = (e.pageX - progressDiv.getClientRects()[0].x) / progressDiv.getClientRects()[0].width;
	audio.currentTime = pos * audio.duration;
	changeBar();
}

function init() {
	const audio = document.getElementById(currentAudio) === null ? new Audio() : document.getElementById(currentAudio);
	audio.src = list[currentId].url;
	audio.id = currentAudio;
	document.getElementById(currentAudio) === null ? document.body.appendChild(audio) : "";

	progressBar.style.transition = "none";
	progressBar.style.width = "0%";
	document.getElementById(currentAudio).currentTime = 0;

	albumClass.classList = (list[currentId].class);
	title.innerHTML = list[currentId].title;
	author.innerHTML = list[currentId].author;
	message.innerHTML = list[currentId].message;
	

	//set current time
	audio.addEventListener("loadedmetadata", function () {
		const leftMinute = Math.floor(audio.duration / 60);
		const leftSecond = Math.floor(audio.duration % 60);
		currentTimeIndicator.innerHTML = "00:00";
		leftTimeIndicator.innerHTML = ("0" + leftMinute).substr(-2) + ":" + ("0" + leftSecond).substr(-2);
		progressBar.style.transition = "";
	});

	document.getElementById(currentAudio).onended = e => goToNextMusic(e);
}

	playBtn.addEventListener("click", play);
	loopBtn.addEventListener("click", loop);

	shuffleBtn.addEventListener("click", shuffle);
	forwardBtn.addEventListener("click", forward);
	backwardBtn.addEventListener("click", backward);

	prevBtn.addEventListener("click", e => nextMusic("prev"));
	nextBtn.addEventListener("click", e => nextMusic("next"));
	progressDiv.addEventListener("click", e => {
		progress(e);
	});

	init();
})();