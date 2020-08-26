for (let i in [1, 2, 3, 4, 5]) {
    console.log(i);
}

function createElement(tagName, attributes, ...children) {
    let e = document.createElement(tagName);
    for (let p in attributes) {
        e.setAttribute(p, attributes[p]);
    }

    for (let child of children) {
        if (typeof child === 'string') {
            child = document.createTextNode(child);
        }
        e.appendChild(child);
    }
    return e;
}

window.a = <div id='a' class="b">
    <div>abc</div>
    <div></div>
    <div></div>
</div>