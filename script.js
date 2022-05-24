/* Descrizione:
Stampare a schermo un messaggio all’interno di un h1, utilizzando i data.
Bonus:
Aggiungere alla pagina un’immagine, presa anch’essa da un data.
(va bene qualsiasi immagine che prendete dal web e/o avete e/o vi scaricate, è indifferente) */

const saluto = new Vue({
    el : '#root',
    data : {
        messaggio : "Hello amici del webbe!",
        image : "https://www.buongiornissimocaffe.it/wp-content/uploads/2018/10/Buongiorno-immagini-nuove-gratis-per-whatsapp-web6297.jpg",
        rimpicciolimento : "piccolo", 
    },
});

