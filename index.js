var playPause = document.getElementById("playPause");
var stop = document.getElementById("stop");
var forward = document.getElementById("forward");
var backward = document.getElementById("backward");
var msg = document.getElementById('name');
var shuffle = document.getElementById('shuffle');
var myAudio = document.getElementById('myAudio'); 
 

//Song list class//
class Song{
	constructor(fileName){ 
	this.fileName = fileName;}
}; 

function Songlist(){
	this.songs = []
	this.addSong = function(song){
		this.songs.push(song)
		console.log('You just added a song')
	}
	this.listSong = function(){
		for(var i = 0;i<this.songs.length;i++){
	    	console.log(this.songs[i])
	    }
	}
}

//add list//
var song1 = new Song('audio/SadSong.mp3');
var song2 = new Song('audio/funny.mp3');
var song3 = new Song('audio/RomanticSong.mp3');
      
var allMusic = new Songlist(); 
allMusic.addSong(song1)
allMusic.addSong(song2)
allMusic.addSong(song3)



// Jukebox functions// 

var empty = []
for(let i = 0;i< allMusic.songs.length;i++){
empty.push(allMusic.songs[i].fileName)}

var array = empty;
var currentSong = 0;



class Jukebox{
	playPause(){
		if (myAudio.paused) {
		    myAudio.src = array[0]
	        myAudio.play()
			playPause.style.backgroundImage = "url('icons/pause.png')";
			msg.innerHTML = array[currentSong];
			
		} else {
			myAudio.pause();
			playPause.style.backgroundImage = "url('icons/play.png')";
			msg.innerHTML = array[currentSong];
	
		}
	}		
	stopSong(){	       
	    myAudio.setAttribute("src", array[0])
	    myAudio.pause();
	  
	  
	}
	forward(){
		console.log(currentSong)
		if(currentSong === array.length-1){	
			currentSong = 0;
			myAudio.setAttribute("src", array[currentSong]);
			msg.innerHTML = array[currentSong];
		} else{
			currentSong++;
			myAudio.setAttribute("src", array[currentSong]);
			msg.innerHTML = array[currentSong];
		}
		myAudio.play()
	}
    backward(){
    	if(currentSong === 0){	
    		currentSong = 0;
    		myAudio.setAttribute("src", array[currentSong]);
    		msg.innerHTML = array[currentSong];
    	} else{
    		currentSong--;
    		myAudio.setAttribute("src", array[currentSong]);
    		msg.innerHTML = array[currentSong];
    	}
    	myAudio.play()
	}

	shuffle(){
        var r = Math.floor((Math.random()*array.length));
        currentSong = r;
        myAudio.setAttribute("src", array[currentSong]);
        msg.innerHTML = array[currentSong];
	}
};

var juke = new Jukebox()

playPause.addEventListener("click", juke.playPause);
stop.addEventListener("click", juke.stopSong);
forward.addEventListener("click", juke.forward);
backward.addEventListener("click", juke.backward);
shuffle.addEventListener("click", juke.shuffle);
myAudio.addEventListener("ended", juke.forward);
