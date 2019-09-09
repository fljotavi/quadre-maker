const S = sel => document.querySelector(sel)

const palette = S('.palette')
const colors = [
    "rgb(254,153,135)",
    "rgb(141,182,238)",
    "rgb(181,147,242)",
    "rgb(244,191,27)",
]
colors.forEach(color => {
    let div = document.createElement('div')
    div.style.background = color
    div.setAttribute("class", "color")
    div.onclick = () => setColor(color)
    palette.appendChild(div)
})

const setColor = color => {
    S('.tag').style.background = color
}

const setRender = str => {
    const needChange = [".left", ".tag", ".name", ".pop"]
    if (str === '') str = "-"
    needChange.forEach(sel => {
        S(sel).innerText = str
    })
    textFit(document.getElementsByClassName('left'), {
        multiLine: true
    })
}