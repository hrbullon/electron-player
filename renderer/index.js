'use strict'

const { ipcRenderer } = require('electron')

// on receive todos
ipcRenderer.on('songs', (event, songs) => {
    // get the todoList ul
    const table = document.getElementById('table-my-songs')

    // create html string
    const items = songs.reduce((html, song) => {
        html += `<tr><td>${song.title}</td><td>${song.artist}</td><td>${song.genre}</td></tr>`
        return html
    }, '')

    //set list html to the todo items
    table.innerHTML = items

})