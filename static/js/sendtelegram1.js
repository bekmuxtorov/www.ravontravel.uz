//bot token
var telegram_bot_id = "5390439763:AAFjPSntY7IsmWloDrpKgoigEx2g4g_bfbA"; // token'ni o'rniga Siz yaratgan Bot tokenini yozing
//chat id
var chat_id =-1001536835455; // 1111'ni o'rniga habar borishi kerak bo'lgan joyni ID'sini yozing (Batafsil videoda)
var u_name, person_number, message, number, qayerdan, qayerga;
var ready = function() {
    u_name = document.getElementById("name").value;
    person_number = document.getElementById("person_number").value;
    number = document.getElementById("number").value;
    qayerdan = document.getElementById("qayerdan").value;
    qayerga = document.getElementById("qayerga").value;
    message = "Ismi:  " + u_name + "\n\nTel raqami: " + number + "\n\nXizmat turi: " + person_number +  "\n\nMarosim nomi: " + qayerdan +  "\n\nQayerga: " + qayerga;
    
};
var sendtelegram1 = function() {
    ready();
    var settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://api.telegram.org/bot" + telegram_bot_id + "/sendMessage",
        "method": "POST",
        "headers": {
            "Content-Type": "application/json",
            "cache-control": "no-cache"
        },
        "data": JSON.stringify({
            "chat_id": chat_id,
            "text": message
        })
    };
    $.ajax(settings).done(function(response) {
        console.log(response);
    });
    document.getElementById("name").value = "";
    document.getElementById("person_number").value = "";
    document.getElementById("number").value = "";
    document.getElementById("qayerdan").value = "";
    document.getElementById("qayerga").value = "";
    return false;
};