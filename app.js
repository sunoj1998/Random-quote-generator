var colors = [
    '#16a085',
    '#27ae60',
    '#2c3e50',
    '#f39c12',
    '#e74c3c',
    '#9b59b6',
    '#FB6964',
    '#342224',
    '#472E32',
    '#BDBB99',
    '#77B1A9',
    '#73A857'
  ];

let randomQuote = async ()=>{
  
    let url = "https://type.fit/api/quotes";
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    let index = Math.floor(Math.random()*data.length);
    let colorIndex = Math.floor(Math.random()*colors.length)
    let by = "--By ";
    let unknown = ' unknown';
    document.getElementById('random-text').innerHTML = data[index].text;
    document.getElementById('author-word').innerHTML = by+data[index].author;

    document.getElementById('main').style.background = colors[colorIndex];
    document.getElementById('button').style.background = colors[colorIndex];

    document.getElementById('quote-box').style.color = colors[colorIndex];
    document.getElementById('author-word').style.color = colors[colorIndex];

}

randomQuote();