document.addEventListener('DOMContentLoaded', function(){
    const form = document.getElementById('registrationForm');
    if(form){
        form.addEventListener('submit', function(e){
            e.preventDefault();
            // Здесь можно добавить сохранение данных в Google Sheets или CSV
            window.location.href = "thanks.html";
        });
    }
});