
document.addEventListener('DOMContentLoaded', e=> {

  const links = document.querySelector('.links')
  const video = document.querySelector('.video')


  document.body.addEventListener("click", e=>{
    if (e.target.classList.contains("lemonDemo")) {
      video.innerHTML = `<button class="closeOut">x</button>
      <iframe width="675" height="425" src="https://www.youtube.com/embed/cOYl9kt5umA" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
    } else if (e.target.classList.contains("tetDemo")) {
      video.innerHTML = `<button class="closeOut">x</button>
    <iframe width="675" height="370" src="https://www.youtube.com/embed/fA6uFaQ50_I" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
  } else if (e.target.classList.contains("birds")) {
    video.innerHTML = `<button class="closeOut">x</button>
    <iframe width="600" height="450" src="https://www.youtube.com/embed/TVmV8UHz-YM" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`

  }
    document.querySelector('.closeOut').addEventListener("click", e=> {
      video.innerHTML = ""
    })

  })

})
