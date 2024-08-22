$(function () {
    const { pan, zoom, getScale, setScale, resetScale } = svgPanZoomContainer;

    // Format images
    var flowcharts = $(".flowcharts").toArray();
    flowcharts.forEach(div => {
        div.style.position = "relative";
        div.style.margin = "10px";

        var id = div.getAttribute("id");

        var img = document.createElement("img");
        img.src = "./img/" + id + ".svg";
        img.classList.add("dialogue-img")

        var container = document.createElement("div");
        container.id = "dialogue-img-container-" + id
        container.classList.add("dialogue-container")
        container.setAttribute("data-zoom-on-wheel", "min-scale: 1");
        container.setAttribute("data-pan-on-drag", null);
        container.appendChild(img);
        div.appendChild(container);

        var resetBtn = document.createElement("button");
        resetBtn.textContent = "Reset view"
        resetBtn.onclick = function () { resetScale(container) };
        resetBtn.style.position = "absolute";
        resetBtn.style.bottom = "10px";
        resetBtn.style.left = "10px";
        div.appendChild(resetBtn);
    });
})
