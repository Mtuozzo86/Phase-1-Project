const sections = document.querySelector('section')
const boxArt = document.querySelectorAll('.box-art')
const boxArtWhite = document.querySelectorAll('.box-art-white')
const sectionWhite = document.querySelector('.sectionWhite')
const likeButtons = document.querySelectorAll('.likeButton')
const dislikeButtons = document.querySelectorAll('.dislikeButton')
const button1 = document.querySelector('.buttons1')
const button2 = document.querySelector('.buttons2')
const button3 = document.querySelector('.buttons3')
const button4 = document.querySelector('.buttons4')
const button5 = document.querySelector('.buttons5')
const button6 = document.querySelector('.buttons6')
const crawl1 = document.querySelector('#crawlPhantom')
const crawl2 = document.querySelector('#crawlClones')
const crawl3 = document.querySelector('#crawlSith')
const crawl4 = document.querySelector('#crawlHope')
const crawl5 = document.querySelector('#crawlEmpire')
const crawl6 = document.querySelector('#crawlJedi')



// Boxart Shadow Effects

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

// Like and Dislike Buttons

likeButtons.forEach(item => item.addEventListener('click', function(){
    item.style.backgroundColor = "blue"

    
    
}))

fetch('https://swapi.py4e.com/api/films/')
.then(response => response.json())
.then(data => {
    const films = data.results
    films.forEach(crawlToDom)
    console.log(films)
})

function crawlToDom (films) {
    
    crawl1.innerHTML = films.title
}

// fetch('https://swapi.py4e.com/api/films/')
// .then(response => response.json())
// .then(data => {
//     console.log(data.results)
//     for(const elem of data.results){
//         console.log(elem)
//         crawl4.innerText = elem.opening_crawl
//         crawl5.innerText = data.results[1].opening_crawl
//         crawl6.innerText = data.results[2].opening_crawl
//         crawl1.innerText = data.results[3].opening_crawl
//         crawl2.innerText = data.results[4].opening_crawl
//         crawl3.innerText = data.results[5].opening_crawl
        
//     }
// })


// fetch("https://swapi.py4e.com/api/films/")
// .then(response => response.json())
// .then(data => {
    
//     const crawl = data.results
//     console.log(crawl)
//     function renderCrawl(info) {
//         crawl4.innerText = info.opening_crawl;
//         }
//     renderCrawl(data.results)
// })



 
// fetch("https://swapi.py4e.com/api/films/1")
// .then(response => response.json())
// .then(data => {
//     const crawl = data.opening_crawl
//     console.log(crawl)
//     function renderCrawl(info) {
//         crawl4.innerText = info.opening_crawl;
//         }
//     renderCrawl(data)
// })



// fetch("https://swapi.py4e.com/api/films/2")
// .then(response => response.json())
// .then(data => {
//     const crawl = data.opening_crawl
//     function renderCrawl(info) {
//         crawl5.innerText = info.opening_crawl;
//         }
//     renderCrawl(data)
// })

// fetch("https://swapi.py4e.com/api/films/3")
// .then(response => response.json())
// .then(data => {
//     const crawl = data.opening_crawl
//     function renderCrawl(info) {
//         crawl6.innerText = info.opening_crawl;
//         }
//     renderCrawl(data)
// })

// fetch("https://swapi.py4e.com/api/films/4")
// .then(response => response.json())
// .then(data => {
//     const crawl = data.opening_crawl
//     function renderCrawl(info) {
//         crawl1.innerText = info.opening_crawl;
//         }
//     renderCrawl(data)
// })

// fetch("https://swapi.py4e.com/api/films/5")
// .then(response => response.json())
// .then(data => {
//     const crawl = data.opening_crawl
//     function renderCrawl(info) {
//         crawl2.innerText = info.opening_crawl;
//         }
//     renderCrawl(data)
// })

// fetch("https://swapi.py4e.com/api/films/6")
// .then(response => response.json())
// .then(data => {
//     const crawl = data.opening_crawl
//     function renderCrawl(info) {
//         crawl3.innerText = info.opening_crawl;
//         }
//     renderCrawl(data)
// })