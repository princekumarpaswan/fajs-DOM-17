const newArry = []
for (let kkk = 1; kkk <= 12; kkk++) {
    let uuu = document.querySelector(".as-imagegrid .as-imagegrid--7up .row").querySelectorAll("a span")[kkk].innerText.replace("/nSupport","")
    newArry.push(uuu)
}
newArry[1]
