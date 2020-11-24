

const app = new Vue({
    el:'#root',
    data:{
        background:false,
        counter:0,
        myCounterMessage:0,
        myInput:'',
        search:'',
       

        myName:
              {
                    myName:'Leonardo Barbieri',
                    myImg:'img/avatar_7.jpg'
              },
        
        contatti:[
            {
                avatar:'img/avatar_1.jpg',
                nome:'Michele',
                lastSeen: ' 15:30 ',
                myText: ['Ciao come stai?'],
                userText: ['Bene tu?', 'Ottimo'], 
                data: new Date().toLocaleString()
            },
            {
                avatar: 'img/avatar_2.jpg',
                nome: 'Leonardo',
                lastSeen: ' 14:30',
                myText: ['vai a prendere la spesa?'],
                userText: ['Va bene','Ho capito'],
                data: new Date().toLocaleString()
            },
            {
                avatar: 'img/avatar_3.jpg',
                nome: 'Filippo',
                lastSeen: ' 17:30',
                myText: ['Porto Billy dal veterinario'],
                userText: ['Sta male?','Speriamo si rimetta'],
                data: new Date().toLocaleString()
            },
            {
                avatar: 'img/avatar_4.jpg',
                nome: 'Francesco',
                lastSeen: ' 00:30',
                myText: ['Ciao Francesco come ho svolto l esercizio?'],
                userText: ['Abbastanza bene potresti fare meglio','Impegnati di più'],
                data: new Date().toLocaleString()
            },
            {
                avatar: 'img/avatar_5.jpg',
                nome: 'Sandro',
                lastSeen: ' 02:30',
                myText: ['Dove sei?'],
                userText: ['Sono in centro e tu?','Troviamoci dal McDonald'],
                data: new Date().toLocaleString()
            },
            {
                avatar: 'img/avatar_6.jpg',
                nome: 'Laura',
                lastSeen: ' 19:30 ',
                myText: ['Sta sera non ho voglia di uscire'],
                userText: ['Neanche io','Preferirei stare in casa'],
                data: new Date().toLocaleString()
            }
        ]
    },
    methods:{
        newMessage(){
            // metto all'interno dell array con i mie messaggi il messaggio scritto nell'InputDeviceInfo, aumento di 1 il myCounter facendo in modo che io possa prendere il messaggio siccessivo
            
            this.contatti[this.counter].myText.push(this.myInput);
            this.myCounterMessage++;
            this.myInput = '';
            
        },
   
    },
    computed: { // Search chat filter
        filterContacts() {
            return this.contatti.filter(contact => {
                return contact.nome.toLowerCase().includes(this.search.toLowerCase());
            })
        },
    }
})










