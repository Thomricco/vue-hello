new Vue({
    el: "#app",
    data: {
        message: 'ciao',
        passUser: '',
        immagine: 'https://i.picsum.photos/id/444/300/300.jpg?hmac=KLAXKoCYVDuOGwIxLdKlqOUm7FsOz3BR2IwStGrJevQ',
        messaggioUtente: '',
    },
    methods: {
        saluta: function() {

            alert('Benvenuto: ' + this.messaggioUtente);
            
            this.passUser = prompt('inserisci una pass');

            alert('"la tua pass è :" '+ this.passUser + ' " ');
        },
    }
})