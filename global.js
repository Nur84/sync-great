function refreshtoken() {
    $.ajax({
        url: "./refreshToken",
        type:"post"
    })
}