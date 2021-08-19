const episodeNumerals = document.querySelectorAll('.flexbox-item')

// Box Shadow Effects

episodeNumerals.forEach(item => item.addEventListener('mouseover', function(){
    
    item.style.boxShadow = '0px 0px 15px 10px #000';
    item.style.transition = 'all 0.3s ease-in-out'

}))

episodeNumerals.forEach(item => item.addEventListener('mouseout', function(){
    item.style.boxShadow = '';
}))

    
    const secretWindow = document.querySelector('.popup')
    const light = document.querySelector('#lightBtn')
    const dark = document.querySelector('#darkBtn')

    light.addEventListener('click', chooseLight)
    dark.addEventListener('click', chooseDark)

    function chooseLight(){
        fetch("http://localhost:3000/coverArt/7")
        .then(resp => resp.json())
        .then(data => {
            secretWindow.innerHTML = `<img class="alliance" src="${data.image}">`
        })
    }

    function chooseDark(){
        fetch("http://localhost:3000/coverArt/8")
        .then(resp => resp.json())
        .then(data => {
            secretWindow.innerHTML = `<img class="alliance" src="${data.image}">`
        })
    }




// Fetch
fetch('https://swapi.py4e.com/api/films/')
.then(response => response.json())
.then(data => {
    const films = data.results.slice(0,6)
    films.forEach(crawlToDom)
})

fetch("http://localhost:3000/coverArt")
.then(response => response.json())
.then(data => {
    const images = data.slice(0,6)
    images.forEach(artwork)
    
    

})
const submitButton = document.querySelector('form')
submitButton.addEventListener('submit', function(e){
    e.preventDefault()

})


function artwork({image}){
    const pictures = document.createElement('img')
    const container = document.querySelector('.films')
    const sections = document.querySelector('section')
    
    pictures.className = 'box-covers'
    pictures.src = image

    container.append(sections)
    sections.append(pictures)
    
}


function crawlToDom ({opening_crawl, title}) {
   
    const container = document.querySelector('.films')
    
    const sections = document.createElement('section')
    const movieCrawl = document.createElement('p')
    const movieName = document.createElement('h3')
    const button = document.createElement('button')
    
    sections.className = 'sectionWhite'
    movieCrawl.className = 'crawl'
    movieName.className = 'h3'
    button.className = 'likeButton'
    button.innerText = 'Like'

    button.addEventListener('click', function(){
        button.style.backgroundColor = "blue"
        button.style.color = "white"
    })
    
    
    movieName.innerHTML = title
    movieCrawl.innerText = opening_crawl
    
    container.append(sections)
    sections.append(movieName, movieCrawl, button)
    
}

