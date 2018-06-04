window.onload = getExif;

function getExif() {
    var img1 = document.getElementById("000-000-001");
    EXIF.getData(img1, function () {
        var allMetaData = EXIF.getAllTags(this);
        // $("#src").text(allMetaData.ImageUniqueID);
        $("#comment001").text(allMetaData.UserComment);
        $("#date001").text(allMetaData.DateTimeOriginal);
    });
    var img2 = document.getElementById("000-000-002");
    EXIF.getData(img1, function () {
        var allMetaData = EXIF.getAllTags(this);
        $("#comment002").text(allMetaData.UserComment);
        $("#date002").text(allMetaData.DateTimeOriginal);
    });
    var img3 = document.getElementById("000-000-003");
    EXIF.getData(img3, function () {
        var allMetaData = EXIF.getAllTags(this);
        $("#comment003").text(allMetaData.UserComment);
        $("#date003").text(allMetaData.DateTimeOriginal);
    });
    var img4 = document.getElementById("000-000-004");
    EXIF.getData(img1, function () {
        var allMetaData = EXIF.getAllTags(this);
        $("#comment004").text(allMetaData.UserComment);
        $("#date004").text(allMetaData.DateTimeOriginal);
    });
    var img5 = document.getElementById("000-000-005");
    EXIF.getData(img5, function () {
        var allMetaData = EXIF.getAllTags(this);
        $("#comment005").text(allMetaData.UserComment);
        $("#date005").text(allMetaData.DateTimeOriginal);
    });
    var img6 = document.getElementById("000-000-006");
    EXIF.getData(img6, function () {
        var allMetaData = EXIF.getAllTags(this);
        $("#comment006").text(allMetaData.UserComment);
        $("#date006").text(allMetaData.DateTimeOriginal);
    });
    var img7 = document.getElementById("000-000-007");
    EXIF.getData(img7, function () {
        var allMetaData = EXIF.getAllTags(this);
        $("#comment007").text(allMetaData.UserComment);
        $("#date007").text(allMetaData.DateTimeOriginal);
    });
    var img8 = document.getElementById("000-000-008");
    EXIF.getData(img8, function () {
        var allMetaData = EXIF.getAllTags(this);
        $("#comment008").text(allMetaData.UserComment);
        $("#date008").text(allMetaData.DateTimeOriginal);
    });
    var img9 = document.getElementById("000-000-009");
    EXIF.getData(img9, function () {
        var allMetaData = EXIF.getAllTags(this);
        $("#comment009").text(allMetaData.UserComment);
        $("#date009").text(allMetaData.DateTimeOriginal);
    });
    var img10 = document.getElementById("000-000-010");
    EXIF.getData(img10, function () {
        var allMetaData = EXIF.getAllTags(this);
        $("#comment010").text(allMetaData.UserComment);
        $("#date010").text(allMetaData.DateTimeOriginal);
    });
}
