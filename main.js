const S = sel => document.querySelector(sel)

const palette = S('.palette')
const colors = [
    "rgb(254,153,135)",
    "rgb(141,182,238)",
    "rgb(181,147,242)",
    "rgb(104,219,162)",
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
    S('body').style.background = (color === "rgb(244,191,27)" ? "#222222" : color)
}

const setRender = str => {
    const needChange = [".left", ".tag", ".name"]
    if (str === '') str = "-"
    needChange.forEach(sel => {
        S(sel).innerText = str.substr(0,6)
    })
    S(".pop").innerText = str
    textFit(document.getElementsByClassName('left'), {
        multiLine: true
    })
}