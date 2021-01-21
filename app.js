let container = document.getElementById("container");

for (let i =0; i<16; i++){
    for (let j =0; j<16; j++){
        let div = document.createElement('div');
        div.setAttribute('class', 'pixel-unselected');
        div.setAttribute('onmouseover', "this.className='pixel-selected'");
        container.appendChild(div);
    }
}

function reset_canvas() {
    console.log(123);
    // getElementsByClassName return an array-like object (not quite array)
    let selected_pixels = document.getElementsByClassName("pixel-selected")
    
    // make selected_pixels into array so we can iterate using forEach
    Array.from(selected_pixels).forEach(element => {
        element.setAttribute('class', 'pixel-unselected');
    });
}