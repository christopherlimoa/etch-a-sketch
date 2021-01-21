const grid_container = document.getElementById("grid_container");

low_density();

function reset_canvas() {
    // getElementsByClassName return an array-like object (not quite array)
    let selected_pixels = document.getElementsByClassName("selected")
    
    // make selected_pixels into array so we can iterate using forEach
    Array.from(selected_pixels).forEach(element => {
        element.classList.remove("selected");
        element.classList.add("unselected");
    });
}

function remove_all_child(id) {
    const node = document.getElementById(id);
    node.innerHTML = '';
}

function create_grid(grid_size, style) {
    remove_all_child("grid_container");

    for (let i =0; i<grid_size; i++) {
        for (let j =0; j<grid_size; j++){
            let div = document.createElement('div');
            // add default style with gray blocks
            div.classList.add(style, "unselected");
            
            // remove gray blocks styling and add black style
            div.onmouseover = () => {
                div.classList.remove("unselected");
                div.classList.add("selected");
            };
            
            grid_container.appendChild(div);
        }
    }

}

function high_density() {
    create_grid(30, "pixel-high");
}

function medium_density() {
    create_grid(26, "pixel-medium");
}

function low_density() {
    create_grid(16, "pixel-low");
}