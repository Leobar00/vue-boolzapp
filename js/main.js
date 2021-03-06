

const app = new Vue({
    el:'#root',
    data:{
        counter:0,
        myCounterMessage:0,
        myInput:'',
        search:'',
        randomResponse:['ok','va bene'],
        show:false,
        active: false,
        emojis:[...emojis],
        famEmoji:[...emojiFamily],
        searchEmoji:'',
        

        
        myName:
              {
                    myName:'Leonardo Barbieri',
                    myImg:'img/avatar_7.jpg'
              },
        // i mie contatti 
        contatti:[
            {
                id: 0,
                avatar:'img/avatar_1.jpg',
                nome:'Michele',
                lastSeen: ' 15:30 ',
                myText: ['Ciao come stai?'],
                userText: ['Bene tu?', 'Ottimo'], 
                data: new Date().toLocaleString()
            },
            {
                id: 1,
                avatar: 'img/avatar_2.jpg',
                nome: 'Leonardo',
                lastSeen: ' 14:30',
                myText: ['vai a prendere la spesa?'],
                userText: ['Va bene','Ho capito'],
                data: new Date().toLocaleString()
            },
            {
                id: 2,
                avatar: 'img/avatar_3.jpg',
                nome: 'Filippo',
                lastSeen: ' 17:30',
                myText: ['Porto Billy dal veterinario'],
                userText: ['Sta male?','Speriamo si rimetta'],
                data: new Date().toLocaleString()
            },
            {
                id: 3,
                avatar: 'img/avatar_4.jpg',
                nome: 'Francesco',
                lastSeen: ' 00:30',
                myText: ['Ciao Francesco come ho svolto l esercizio?'],
                userText: ['Abbastanza bene potresti fare meglio','Impegnati di più'],
                data: new Date().toLocaleString()
            },
            {
                id: 4,
                avatar: 'img/avatar_5.jpg',
                nome: 'Sandro',
                lastSeen: ' 02:30',
                myText: ['Dove sei?'],
                userText: ['Sono in centro e tu?','Troviamoci dal McDonald'],
                data: new Date().toLocaleString()
            },
            {
                id: 5,
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
        toggleActive: function(em){
            this.active = !this.active;
            this.myInput += em.emoji;
            
        },
        toggleShow:function(){
            this.show = !this.show;
            
        },

        
        
    },
    computed: { 
        // filtraggio della search-bar 
        filterContacts() {
            return this.contatti.filter(contact => {
                return contact.nome.toLowerCase().includes(this.search.toLowerCase());
            })
        },

        // lastMessage: function (index) {
        //     if (this.contatti[this.counter].myText.length < this.contatti[this.counter].userText.length) {
        //         return this.contatti[this.counter].userText[index]
        //     } else {
        //         return this.contatti[this.counter].myText[index]
        //     }
        // },
        // randomMessage: function (arrayMessage) {  // random risposta
        //     return arrayMessage[Math.floor(Math.random() * arrayMessage.length)]
        // }
       
        

    }
})










