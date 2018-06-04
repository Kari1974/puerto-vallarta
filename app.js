window.onload = getExif;

// function renderImgName(content) {
//     var td = document.createElement("td");
//     td.textContent = content;
//     return td;
// }
// var checkingIt = renderImgName('functioning renderImgName()')
// console.log(checkingIt);

function getExif() {
    var img1 = document.getElementById("000-000-001");
    EXIF.getData(img1, function () {
        var allMetaData = EXIF.getAllTags(this);
    });

    // var img2 = document.getElementById("img2");
    // EXIF.getData(img2, function () {
    //     var allMetaData = EXIF.getAllTags(this);
    //     var allMetaDataSpan = document.getElementById("allMetaDataSpan");
    //     allMetaDataSpan.innerHTML = JSON.stringify(allMetaData, null, "\t");
    // });
}
