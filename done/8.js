for (let x = 0; x <= 9; x++) {
    document.querySelectorAll("#SIvCob a")[x]
    if (x % 2 == 0) {
        continue
    }
    else { document.querySelectorAll("#SIvCob a")[x].remove() }
}