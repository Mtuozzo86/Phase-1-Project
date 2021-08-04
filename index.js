const sections = document.querySelectorAll('section')
const boxArt = document.querySelectorAll('.box-art')
const title = document.querySelector('h1')

boxArt.forEach(item => item.addEventListener('mouseover', function(){
    item.style.height = "350px"
    item.style.width = "250px"
}))

boxArt.forEach(item => item.addEventListener('mouseout', function(){
    item.style.height = "300px"
    item.style.width = "200px"
}))
