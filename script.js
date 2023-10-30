const button = document.querySelector("button")

button.onclick = function toggleMode() {

  const html = document.documentElement
  html.classList.toggle('light')

 /* const img = document.querySelector("#profile img")

  if (html.classList.contains('light')) {
      img.setAttribute('src', './assets/avatar-light.png')
  } else {
      img.setAttribute('src', './assets/avatar.png')
  } */

} 

const url = "https://api.github.com/users/Daniel3858"

async function getApi() {
  const result = await axios.get(url)
  const data = await result.data
  userName.textContent = "@" + data.login
  userAvatar.src = data.avatar_url
}

getApi()