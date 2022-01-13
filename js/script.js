new Vue({
    el: "#app",
    data: {
        message: 'ciao',
        immagine: 'https://i.picsum.photos/id/444/300/300.jpg?hmac=KLAXKoCYVDuOGwIxLdKlqOUm7FsOz3BR2IwStGrJevQ',
        messaggioUtente: '',
    },
    methods: {
        saluta: function() {
            alert('Benvenuto: ' + this.messaggioUtente)
        }
    }
})