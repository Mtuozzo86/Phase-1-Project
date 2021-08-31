const episodeNumerals = document.querySelectorAll('.flexbox-item')



const search = document.querySelector('form')
search.addEventListener('submit', function(e){
    e.preventDefault()
    const input = document.querySelector('#searchBy')
    const container = document.querySelector('.films')
    container.innerHTML = ''

    

    fetch(`http://localhost:3000/coverArt/`)
    .then(resp => resp.json())
    .then(data => {
        const films = data.slice(0,6)

        function filteredFilm(arr){
            if(input.value === "A New Hope"){
           return arr.filter(film => film.title === "A New Hope")
        } 
        else if(input.value === "The Empire Strikes Back"){
            return arr.filter(film => film.title === "The Empire Strikes Back")
        }
        else if(input.value === "Return of the Jedi"){
            return arr.filter(film => film.title === "Return of the Jedi")
        }
        else if(input.value === "The Phantom Menace"){
            return arr.filter(film => film.title === "The Phantom Menace")
        }
        else if(input.value === "Attack of the Clones"){
            return arr.filter(film => film.title === "Attack of the Clones")
        }
        else if(input.value === "Revenge of the Sith"){
            return arr.filter(film => film.title === "Revenge of the Sith")
        }
    }
        
filteredFilm(films).forEach(elem => createFromSearch(elem))
    })
    
        

})

function createFromSearch({title, opening_crawl, image}){
const container = document.querySelector('.films')
        const pictures = document.createElement('img')
    
        const sections = document.createElement('section')
        const movieCrawl = document.createElement('p')
        const movieName = document.createElement('h3')
        const button = document.createElement('button')
        
        sections.className = 'sectionWhite'
        movieCrawl.className = 'crawl'
        movieName.className = 'h3'
        button.className = 'likeButton'
        button.innerText = 'Like'
        pictures.className = 'box-covers'
    
    
        button.addEventListener('click', function(){
            button.style.backgroundColor = "blue"
            button.style.color = "white"
        })
        
        pictures.src = image
        movieName.innerHTML = title
        movieCrawl.innerText = opening_crawl
        
        container.append(sections)
        sections.append(movieName, movieCrawl, pictures, button)
    
}

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




// Fetch from public API
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


function artwork({image}){
    const pictures = document.createElement('img')
    const container = document.querySelector('.films')
    const sections = document.querySelector('section')
    
    pictures.className = 'box-covers'
    pictures.src = image

    container.append(sections)
    sections.append(pictures)
    
}

// On Page Load to display all using a public API
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

// search.addEventListener('submit', function(e){
//     e.preventDefault()
//     const input = document.querySelector('#searchBy')
//     const container = document.querySelector('.films')
//     container.innerHTML = ''
//     console.log(input.value)

//     fetch(`http://localhost:3000/coverArt/${input.value}`)
//     .then(resp => resp.json())
//     .then(data => {
    
     
        
//         const container = document.querySelector('.films')
//         const pictures = document.createElement('img')
    
//         const sections = document.createElement('section')
//         const movieCrawl = document.createElement('p')
//         const movieName = document.createElement('h3')
//         const button = document.createElement('button')
        
//         sections.className = 'sectionWhite'
//         movieCrawl.className = 'crawl'
//         movieName.className = 'h3'
//         button.className = 'likeButton'
//         button.innerText = 'Like'
//         pictures.className = 'box-covers'
    
    
//         button.addEventListener('click', function(){
//             button.style.backgroundColor = "blue"
//             button.style.color = "white"
//         })
        
//         pictures.src = data.image
//         movieName.innerHTML = data.title
//         movieCrawl.innerText = data.opening_crawl
        
//         container.append(sections)
//         sections.append(movieName, movieCrawl, pictures, button)
//     })
// })