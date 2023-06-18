function createHistogram(barsEle, barsNumber = 30) {
    let barsHTML = '';
    for (let i = 0; i < barsNumber; i++) {
        const barHeight = Math.floor(Math.random() * 100) + 1;
        barsHTML += `<div class="histogram__bar" style="height: ${barHeight}%"></div>`;
    }

    barsEle.innerHTML = barsHTML;
}
