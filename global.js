function refreshtoken() {
    $.ajax({
        url: "./refreshToken",
        type: "post",
        success: function () {
            location.reload()
        }
    })
}