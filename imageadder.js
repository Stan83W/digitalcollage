
const images = ["img1.jpg", "img2.jpg", "img3.jpg", "img4.jpg", "img5.jpg", "img6.jpg", "img7.jpg", "img8.jpg"]


let i = 0

function placeImage(x, y) {

  const nextImage = images[i]

  const img = document.createElement("img")
  img.setAttribute("src", nextImage)
  img.style.left = x + "px"
  img.style.top = y + "px"
  img.style.transform = "translate(-50%, -50%) scale(0.5) rotate(" + (Math.random() * 20 - 10) +"deg)"

  document.body.appendChild(img)

  i = i + 1

  if (i >= images.length) {
    i = 0
  }
}

document.addEventListener("mouseover", function (event) {

  event.preventDefault()
  placeImage(event.pageX, event.pageY)
})

document.addEventListener("touchend", function (event) {

  event.preventDefault()
  placeImage(event.pageX, event.pageY)
})
