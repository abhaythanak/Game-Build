const tileDisplay = document.querySelector('.tile-container')
const keybord = document.querySelector('.key-container')
const messageDisplay = document.querySelector('.message-container')
const wordle = 'super'
const keys =[
        'Q',
        'W',
        'E',
        'R',
        'T',
        'Y',
        'U',
        'I',
        'O',
        'P',
        'A',
        'S',
        'D',
        'F',
        'G',
        'H',
        'J',
        'K',
        'L',
        'ENTER',
        'Z',
        'X',
        'C',
        'V',
        'B',
        'N',
        'M',
        '«',
    ]
   
const guessRows = [
    ['', '', '', '', ''],
    ['', '', '', '', ''],
    ['', '', '', '', ''],
    ['', '', '', '', ''],
    ['', '', '', '', ''],
    ['', '', '', '', '']
]
let currentRow =0
let currentTile = 0

guessRows.forEach((guessRows,guessRowIndex) =>{
   const rowElement =  document.createElement('div')
   rowElement.setAttribute('id','guessRows-' + guessRowIndex)
   guessRows.forEach((guess, guessIndex)=> {
    const tileElement = document.createElement('div')
    tileElement.setAttribute('id', 'guessRow-' + guessRowIndex + '-tile-' + guessIndex)
    tileElement.classList.add('tile')
    rowElement.append(tileElement)
   })
   tileDisplay.append(rowElement)
})


keys.forEach(key => {
    const buttonElement = document.createElement('button')
    buttonElement.textContent = key
    buttonElement.setAttribute('id', key)
    buttonElement.addEventListener('click', ()=> handleClick(key))
    keybord.append(buttonElement)
})

const handleClick = (letter) => {
    console.log('clicked', letter)
    if(letter === '<<') {
        deleteLetter()
        console.log('guessRows',guessRows)
        return
    }
    if (letter === 'ENTER') {
        checkRow()
        console.log('check row')
        return
    }
    addLetter(letter)
    console.log('guessRows',guessRows)
}

const addLetter = (letter) => {
   const tile =  document.getElementById('guessRow-' + currentRow + '-tile-' + currentTile)
   tile.textContent = letter
   guessRows[currentRow][currentTile] = letter
   tile.setAttribute('data', letter)
   currentTile++
   console.log('guessRows',guessRows)
}
 
const deleteLetter = (letter) => {
    if(currentTile > 0) {
    currentTile--
    const tile = document.getElementById('guessRow-' + currentRow + '-tile-' + currentTile)
    tile.textContent = ''
    guessRows[currentRow][currentTile] = ''
    tile.setAttribute('data','')
}
}

const checkRow = () => {
    const guess = guessRows[currentRow].join('')

    if (currentTile === 5) {
         console.log('guess is ' + guess, 'worlde is ' + wordle) 
         if (wordle == guess) {
            showMessage('Magnificient!')
            return
         }
    }
}

const showMessage = (message) =>{
    const messageElement = document.createElement('p')
    messageElement.textContent = message
    messageDisplay.append(messageElement)
    setTimeout(() => messageDisplay.removeChild(messageElement),2000)
}