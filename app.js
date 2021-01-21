let container = document.getElementById("container");

for (let i =0; i<16; i++){
    for (let j =0; j<16; j++){
        let div = document.createElement('div');
        div.setAttribute('class', 'pixel-unselected');
        div.setAttribute('onmouseover', "this.className='pixel-selected'");
        container.appendChild(div);
    }
}