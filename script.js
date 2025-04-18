(function IIFE() {
	const list = [
	{
		id: 1,
		class: 'waltz',
		url: "media/mp3/Waltz of Four Left Feet.m4a",
		author: "Shirebound & Busking",
		title: "Waltz of Four Left Feet ",
		message: "My admiration for you was hidden. My heart warms for only a moment, yet my mind does not allow it. Accompanied by the thoughts of maybe there is someone, maybe you're not looking for a partner, maybe she would not feel the same. I found out that there was someone. Therefore, my heart listened, and it resisted. We've only just met, yet why did I feel a sudden fondness?"
	},
	{
		id: 2,
		class: 'dilaw',
		url: "media/mp3/Dilaw.m4a",
		author: "Maki",
		title: "Dilaw",
		message: "They would banter, tease, shipping us into a relationship. \"I\'ve been through this, they would get over it,\" I said to myself. But you joined... why is that? Is it for fun? Is it for amusement? Why am I questioning this? Why am I happy about this? I think you were only joking before but.. Am I hoping that you would feel the same? They say you are loyal, kind and honest, a full support to pursue a relationship with you. Am I really falling in love again?"
	},
	{
		id: 3,
		class: 'like',
		url: "media/mp3/I Like You So Much, Youll Know It.m4a",
		author: "Ysabelle Cuevas",
		title: "I Like You So Much",
		message: "Subconsciously taking glances, checking to see if you are okay, trying my best to not get caught in the old habits I do when I've fallen. Unexpectedly distracted by the sheer thought of \"Should I pursue her\" that is constantly dwelling in my mind. My curiosity grows bigger, \"Does she feel the same or is she still playing.\" I was worried and nervous but happy. My heart is in danger again."
	},
	{
		id: 4,
		class: 'langga',
		url: "media/mp3/LabyuLangga.m4a",
		author: "Jerika Teodorico",	
		title: " Labyu Langga",
		message: "You confessed, I was overjoyed. A fast-paced confession though it was already obvious from the start. You went away for a few days and I began to miss you. From then I started mentally preparing. A proper courtship, planned dates, thoughtful gifts, and flowers. I was daydreaming events, imaginary moments, and a wonderful future with you along with this song that popped into my head. I suddenly notice a genuine smile and joy on my face. Let me try to love again."
	},
	{
		id: 5,
		class: 'paraluman',
		url: "media/mp3/Paraluman.m4a",
		author: "Adie ",
		title: "Paraluman",
		message: "I was nervous, I’d never done this before, giving someone a bouquet. I thought it would be a good impression. My intentions were clear, As I got to know you better I grew more curious. I see you as a wonderful person so how did you fall for someone like me? A dark thought lingers where the love you have for me would be temporary. But even then, I should still love you the best that I can offer because that is what I think you deserve."
	},
	{
		id: 6,
		class: 'falling',
		url: "media/mp3/Can't Help Falling In Love.m4a",
		author: "Elvis Presley ",
		title: "Falling In Love" ,
		message: "I'm not proud of my singing, there are tones I can’t reach, my voice would shake and sometimes it would crack. I was shy and afraid. A push of courage and to have the strength to sing. To try, even if it's not perfect. I questioned my sudden bravery to do things I would not have the guts to do. No better words I would describe it. I saw you as my support. My calm strength"
	},
	{
		id: 7, 	
		class: 'blue',
		url: "media/mp3/Yung Kai - Blue.m4a",
		author: "Yung Kai",
		title: "Blue",
		message: "I was happy to have found love. I was numb before, not letting a single person give me this feeling because I was afraid of being hurt, concluding that maybe I didn't deserve such love. I was fully prepared to court you no matter how long it would take. I never thought I would hear the sweetest “yes” from you. Did not believe it for a few minutes, letting my heart sink that thought. To have you as my girlfriend. I was genuinely happy."
	},
	{
		id: 8,
		class: 'happen',
		url: "media/mp3/We Could Happen.m4a",
		author: "AJ Rafael",
		title: "We Could Happen",
		message: "I found my safe place. I was happy being around you. For so long, I moved through life with a guarded heart. There was something about your energy, your presence, that made everything lighter. I felt a sense of peace that I felt I could blabber about anything that came into my mind with you. A feeling that I felt only for you. I never thought you would be so important to me"
	},
	{
		id: 9,
		class: 'crazier',
		url: "media/mp3/Crazier.m4a",
		author: "(Taylor Swift) cover by Arthur Miguel",
		title: "Crazier",
		message: "Our first monthsary, your heartfelt poem stuck out to me like a whisper that I constantly hear inside my head. A note or melody came with it. I played the tone and it fits. To think that I was able to compose a song with your poem. I was excited, every day to practice the notes, modified a few of the lyrics. It was a thrilling experience. Interested to see what you would think of our own song that we have together."
	},
	{
		id: 10,
		class: 'her',
		url: "media/mp3/Her.m4a",
		author: "JVKE",
		title: "Her",
		message: "I’m too lucky to have found someone like you. I may say this often but that just proves how important you are to me. To have someone so precious you’d want to protect, to spoil as well as to take good care of you. To have someone to worry about their health and well-being and if possible to take your problems and troubles away. It’s not just to show how much I love you but it's what I truly believe that you deserve. "
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