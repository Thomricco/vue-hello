new Vue({
    el: "#app",
    data: {
        message: 'ciao',
        messageUser: '',
        immagine: 'https://i.picsum.photos/id/444/300/300.jpg?hmac=KLAXKoCYVDuOGwIxLdKlqOUm7FsOz3BR2IwStGrJevQ',
        messaggioUtente: '',
    },
    methods: {
        saluta: function() {

            alert('Benvenuto: ' + this.messaggioUtente);
            
            this.messageUser = prompt('inserisci una pass');

            this.messaggioUtente = '"hai inviato:" '+ this.messageUser + ' " ';
        },
    }
})