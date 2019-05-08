
document.addEventListener('DOMContentLoaded', e=> {

  const links = document.querySelector('.links')
  const video = document.querySelector('.video')

  document.body.addEventListener("click", e=>{
    if (e.target.classList.contains("lemonDemo")) {
      video.innerHTML = `
      <div class="container">
        <button class="closeOut">x</button>
        <iframe src="https://www.youtube.com/embed/cOYl9kt5umA"
        frameborder="0" allowfullscreen class="video2"></iframe>
      </div>`
    } else if (e.target.classList.contains("tetDemo")) {
      video.innerHTML = `
      <div class="container">
        <button class="closeOut">x</button>
        <iframe src="https://www.youtube.com/embed/fA6uFaQ50_I"
        frameborder="0" allowfullscreen class="video2"></iframe>
      </div>`
  } else if (e.target.classList.contains("birds")) {
    video.innerHTML = `
      <div class="container">
        <button class="closeOut">x</button>
        <iframe src="https://www.youtube.com/embed/TVmV8UHz-YM"
        frameborder="0" allowfullscreen class="video2"></iframe>
      </div>`

  }
    document.querySelector('.closeOut').addEventListener("click", e=> {
      video.innerHTML = ""
    })

  })

})
