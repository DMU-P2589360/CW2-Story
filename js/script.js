playAudio = () => {
    document.getElementById ("audioPlayer").play();
    }
    stopAudio = () => {
    document.getElementById ("audioPlayer").pause();
    }
    playAudio2 = () => {
    document.getElementById ("audioPlayer2").play();
    }
    stopAudio2 = () => {
    document.getElementById ("audioPlayer2").pause();
    }
    playAudio3 = () => {
        document.getElementById ("audioPlayer3").play();
        }
        stopAudio3 = () => {
        document.getElementById ("audioPlayer3").pause();
        }
        playAudio4 = () => {
            document.getElementById ("audioPlayer4").play();
            }
            stopAudio4 = () => {
                document.getElementById ("audioPlayer3").pause();
                }
    document.getElementById("text").addEventListener("mouseover", playAudio);
    document.getElementById("text").addEventListener("mouseout", stopAudio);
