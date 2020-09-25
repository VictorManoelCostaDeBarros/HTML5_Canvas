export default function(Photo) {
    // canvas 
    Photo.canvas = document.createElement('canvas')
    Photo.ctx = Photo.canvas.getContext('2d')
}