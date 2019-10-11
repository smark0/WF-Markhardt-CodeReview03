let moviediv = document.getElementById("movies")
let sortVal = document.getElementById("sort")
let movieslist = JSON.parse(data);
let points1 = parseFloat(movieslist[0].movielikes)
let points2 = parseFloat(movieslist[1].movielikes)
let points3 = parseFloat(movieslist[2].movielikes)
let points4 = parseFloat(movieslist[3].movielikes)
let points5 = parseFloat(movieslist[4].movielikes)
let points6 = parseFloat(movieslist[5].movielikes)

for (let movie of movieslist) {
    box = document.createElement('div');
    box.setAttribute('class', 'moviebox');
    box.innerHTML = `<img src="${movie.movieimg}" alt = "fuck"><span class="mname">${movie.moviename}<br></span><span class="mdesc">${movie.moviedesc}</span><br><input type="button" id="but${movie.id}" value="Like &#128077;"><span id="like${movie.id}">0</span>`
    moviediv.appendChild(box)
}

moviediv.addEventListener('click', function(e) {
    let click = e.target.id
    switch (click) {
        case "but1":
            let addPoints1 = document.getElementById("like1")
            points1++
            movieslist[0].movielikes = points1
            addPoints1.innerHTML = `${points1}`
            console.log("Button 1 pressed.")
            break
        case "but2":
            let addPoints2 = document.getElementById("like2")
            points2++
            movieslist[1].movielikes = points2
            addPoints2.innerHTML = `${points2}`
            console.log("Button 2 pressed.")
            break
        case "but3":
            let addPoints3 = document.getElementById("like3")
            points3++
            movieslist[2].movielikes = points3
            addPoints3.innerHTML = `${points3}`
            console.log("Button 3 pressed.")
            break
        case "but4":
            let addPoints4 = document.getElementById("like4")
            points4++
            movieslist[3].movielikes = points4
            addPoints4.innerHTML = `${points4}`
            console.log("Button 4 pressed.")
            break
        case "but5":
            let addPoints5 = document.getElementById("like5")
            points5++
            movieslist[4].movielikes = points5
            addPoints5.innerHTML = `${points5}`
            console.log("Button 5 pressed.")
            break
        case "but6":
            let addPoints6 = document.getElementById("like6")
            points6++
            movieslist[5].movielikes = points6
            addPoints6.innerHTML = `${points6}`
            console.log("Button 6 pressed.")
            break
        default:
            console.log("Irrelevant input.")
            break
    }
})

sortVal.addEventListener('click', function(e) {
    click = e.target.id
    var sortByProperty = function(property) {
        return function(x, y) {
            return ((x[property] === y[property]) ? 0 : ((x[property] > y[property]) ? 1 : -1));
        }
    }
    movieslist.sort(sortByProperty('movielikes'))
    moviediv.remove();
    moviediv2 = document.createElement('div')
    moviediv2.setAttribute('id', 'movies')
    main.appendChild(moviediv2)

    for (i = 5; i != -1; i--) {
        box = document.createElement('div');
        box.setAttribute('class', 'moviebox');
        box.innerHTML = `<img src="${movieslist[i].movieimg}" alt = "fuck"><span class="mname">${movieslist[i].moviename}<br></span><span class="mdesc">${movieslist[i].moviedesc}</span><br><input type="button" id="but${movieslist[i].id}" value="Like &#128077;"><span id="like${movieslist[i].id}">${movieslist[i].movielikes}</span>`
        moviediv2.appendChild(box)

    }
})