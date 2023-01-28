const video = document.getElementById('video')
await Promise.all([
    faceapi.nets.tinyFaceDetector.loadFromUri('/models'),
    faceapi.nets.faceLandermark68Net.loadFromUri('/models'),
    faceapi.nets.faceRecognitionNet.loadFromUri('/models'),
    

])


function startVideo(){
    navigator.mediaDevices.getUserMedia({video: true})
        .then(stream => video.srcObject = stream)
        .catch(err => console.error(err))
}

startVideo()
