$(document).ready(function () {
    $('.submit').click(function (Event) {
        console.log('Clicked Button')

        var name = $('.name').val();
        var email = $('.email').val();
        var message = $('.message').val();
        var StatusElm = $('.status');
        StatusElm.empty();

        if(email.length >= 2) {
            console.log('<div>Email is valid</div>')
        } else {
            event.preventDefault();
            StatusElm.append('<div>Email incorrect</div>')
        }
        
        if(message.length > 20) {
            console.log('<div>Bericht is lang genoeg</div>')
        } else {
            event.preventDefault();
            StatusElm.append('<div>Bericht moet langer zijn dan 20 letters</div>')
        }
    })
})