function LoadFromJSON() {
    var data = document.getElementById("loader").files[0];
    let reader = new FileReader();
    reader.addEventListener("loadend", () => {
        var json = JSON.stringify(reader.result);
        console.log(json);
    });
    reader.readAsText(data);
}