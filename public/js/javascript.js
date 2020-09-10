//TODO:
$('form').on('submit', function (e) {
    alert('Message Sent!');
    
    e.preventDefault();

    const name = $('#name').val() || '';
    const email = $('#email').val() || '';
    const subject = $('#subject').val() || '';
    const text = $('#text').val() || '';

    const data = {
        name,
        email, 
        subject, 
        text,
    };


    $.post('/email', data, function() {
        alert('Message Sent!');
    });

});