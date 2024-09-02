let value = []
function rechnerZahlen(val) {
    document.getElementById("feld").value += val;
}
function equals() {
    x = document.getElementById("feld").value;
    y = eval(x);
    document.getElementById("feld").value = y;
}
function clearThis() {
    document.getElementById("feld").value = "";
    console.log("bich")
}
function deleteOne() {
    let deleted = document.getElementById("feld").value;
    deleted = deleted.substring(0, deleted.length - 1);
    document.getElementById("feld").value = deleted;
}
let imageFunctionCounter = true
function imageFunction(x) {
    if (imageFunctionCounter == true) {
        x.style.position = "fixed";
        x.style.height = "51vw";
        x.style.width = "68vw";
        x.style.maxWidth = "100vw";
        x.style.marginLeft = "16vw";
        x.style.marginRight = "16vw";
        x.style.zIndex = "3";
        backgroundId.style.right = "0";
        backgroundId.style.top = "0";
        imageFunctionCounter = false;
    } else {
        x.style.position = null;
        x.style.height = null;
        x.style.width = null;
        x.style.marginLeft = null;
        x.style.marginRight = null;
        x.style.maxWidth = null;
        x.style.zIndex = null;
        backgroundId.style.right = null;
        backgroundId.style.top = null;
        imageFunctionCounter = true;
    }
}
function changeImage(y, x, x2, z) {
    let image = document.getElementById(y);
    if (image.classList.contains(z)) {
        image.className = 0;
        image.src = x2;
    } else {
        image.className = z;
        image.src = x;
    }

}
function cvBild(x, y) {
    x.style.filter = "brightness(50%)";
    y.style.display = "block";
    y.animate([{ opacity: 0, }, { opacity: 1, }], 200
    )
    x.animate(
        [
            {
                filter: "brightness(100%)",
            }, {
                filter: "brightness(50%)",
            }
        ], 200
    )

}
function cvBildBack(x, y) {
    x.style.filter = null;
    y.style.display = null;
    y.animate([{ opacity: 1, }, { opacity: 0, }], 200
    )
    x.animate(
        [
            {
                filter: "brightness(50%)",
            }, {
                filter: "brightness(100%)",
            }
        ], 200
    )
}
