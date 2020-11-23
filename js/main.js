const app = new Vue({
    el:'#root',
    data:{
        background:false,
        counter:0,
        myCounterMessage:0,
        userCounterMessage:0,
        myInput:'',

        myName:
              {
                    myName:'Leonardo Barbieri',
                    myImg:'img/avatar_7.jpg'
              },
        
        contatti:[
            {
                avatar:'img/avatar_1.jpg',
                nome:'Michele',
                lastSeen: ' 15:30 Lun 20 Nov',
                myText: ['Ciao come stai?'],
                userText:['Bene tu?','Ottimo']


            },
            {
                avatar: 'img/avatar_2.jpg',
                nome: 'Leonardo',
                lastSeen: ' 14:30 Lun 20 Nov',
                myText: ['vai a prendere la spesa?'],
                userText: ['Va bene','Ho capito','Lo farò più tardi']
            },
            {
                avatar: 'img/avatar_3.jpg',
                nome: 'Filippo',
                lastSeen: ' 17:30 Lun 20 Nov',
                myText: ['Porto Billy dal veterinario'],
                userText: ['Sta male?','Speriamo si rimetta']
            },
            {
                avatar: 'img/avatar_4.jpg',
                nome: 'Francesco',
                lastSeen: ' 00:30 Lun 20 Nov',
                myText: ['Ciao Francesco come ho svolto l esercizio?'],
                userText: ['Abbastanza bene potresti fare meglio','Impegnati di più','Occhio all indentazione']
            },
            {
                avatar: 'img/avatar_5.jpg',
                nome: 'Sandro',
                lastSeen: ' 02:30 Lun 20 Nov',
                myText: ['Dove sei?'],
                userText: ['Sono in centro e tu?','Troviamoci dal McDonald','A dopo']
            },
            {
                avatar: 'img/avatar_6.jpg',
                nome: 'Laura',
                lastSeen: ' 19:30 Lun 21 Nov',
                myText: ['Sta sera non ho voglia di uscire'],
                userText: ['Neanche io','Preferirei stare in casa']
            }
        ]
    },
    methods:{
        myDate(){
            return new Date()

        },
        newMessage(){
            // metto all'interno dell array con i mie messaggi il messaggio scritto nell'InputDeviceInfo, aumento di 1 il myCounter facendo in modo che io possa prendere il messaggio siccessivo
            this.contatti[this.counter].myText.push(this.myInput);
            this.myCounterMessage++;
            this.myInput = '';
        },
        validateMessageUser(){
            this.contatti[this.counter].userText.length
        },
        backgroundColor(){
            return this.background = !this.background
        }
        
        
    }
})









