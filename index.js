const sections = document.querySelector('section')
const boxArt = document.querySelectorAll('.box-art')
const boxArtWhite = document.querySelectorAll('.box-art-white')
const sectionWhite = document.querySelector('.sectionWhite')

boxArt.forEach(item => item.addEventListener('mouseover', function(){
    
    item.style.boxShadow = '0px 0px 15px 10px #c4c3c3';
    item.style.transition = 'all 0.3s ease-in-out'

}))

boxArt.forEach(item => item.addEventListener('mouseout', function(){
    item.style.boxShadow = '';
}))

boxArtWhite.forEach(item => item.addEventListener('mouseover', function(){
    item.style.boxShadow = '0px 0px 15px 10px #000';
    item.style.transition = 'all 0.3s ease-in-out'
    
}))

boxArtWhite.forEach(item => item.addEventListener('mouseout', function(){
    item.style.boxShadow = '';
}))
 
fetch("https://swapi.py4e.com/api/films/")
.then(response => response.json())
.then(data => {
    const allFilms = data.results
    allFilms.pop()
    allFilms.forEach(elem => console.log(elem.title))

    function renderDirector(info) {
    
    info.forEach(info => {
        
        const dir = document.querySelector('.director')
        dir.innerHTML = info.director;
        sections.append(dir)
        
    })

}
    renderDirector(allFilms)
})

