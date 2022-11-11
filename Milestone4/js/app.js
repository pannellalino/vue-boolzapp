const {createApp} = Vue;
const dt = luxon.DateTime;
const now = dt.now();

createApp({
  data(){
    return{
      newMsgString: '',
      contactActive: 0,
      searchContact: '',
      contacts:[
        {
        name: 'Michele',
        avatar: 'img/avatar_1.jpg',
        visible: true,
        messages:[
          {
            date: '10/01/2022 15:30:55',
            message: 'Hai portato a spasso il cane?',
            status: 'send'
          },
          {
            date: '10/01/2022 15:50:00',
            message: 'Hai steso i panni?',
            status: 'send'
          },
          {
            date: '10/01/2022 16:15:22',
            message: 'No!',
            status: 'received'
          },
          {
            date: '10/01/2022 16:16:22',
            message: 'Bene, bravo!',
            status: 'send'
          }
         ]
        },
        {
        name: 'Fabio',
        avatar: 'img/avatar_2.jpg',
        visible: true,
        messages:[
          {
            date: '20/03/2022 16:30:00',
            message: 'Ciao come stai?',
            status: 'send'
          },
          {
            date: '20/03/2022 16:30:55',
            message: 'Bene grazie, stasera ci vediamo?',
            status: 'received'
          },
          {
            date: '20/03/2022 16:35:00',
            message: 'Zero testa ;)',
            status: 'send'
          }
         ]
        },
        {
        name: 'Samuele',
        avatar: 'img/avatar_3.jpg',
        visible: true,
        messages:[
          {
            date: '28/03/2022 10:10:40',
            message: 'La Marianna va in campagna?',
            status: 'send'
          },
          {
            date: '28/03/2022 10:20:10',
            message: 'Mi sa che hai sbagliato chat!',
            status: 'received'
          },
          {
            date: '28/03/2022 16:15:22',
            message: 'Ah scusa!',
            status: 'send'
          }
         ]
        },
        {
        name: 'Alessandro',
        avatar: 'img/avatar_4.jpg',
        visible: true,
        messages:[
          {
            date: '10/01/2022 15:30:55',
            message: 'Lo sai che ha aperto una nuova pizzeria?',
            status: 'send'
          },
          {
            date: '10/01/2022 15:50:00',
            message: 'Sì però preferisco il cinema',
            status: 'received'
          }
         ]
        },
        {
        name: 'Alessandra',
        avatar: 'img/avatar_5.jpg',
        visible: true,
        messages:[
          {
            date: '10/01/2022 15:30:55',
            message: 'Ricordati di chiamare la nonna',
            status: 'send'
          },
          {
            date: '10/01/2022 15:50:00',
            message: 'Sì stasera la sento!',
            status: 'received'
          }
         ]
        },
        {
        name: 'Claudia',
        avatar: 'img/avatar_6.jpg',
        visible: true,
        messages:[
          {
            date: '10/01/2022 15:30:55',
            message: 'Ciao Claudia hai novità?',
            status: 'send'
          },
          {
            date: '10/01/2022 15:50:00',
            message: 'No',
            status: 'received'
          }
         ]
        },
        {
        name: 'Federico',
        avatar: 'img/avatar_7.jpg',
        visible: true,
        messages:[
          {
            date: '10/01/2022 15:30:55',
            message: 'Fai gli auguri a Martina che oggi è il suo compleanno',
            status: 'send'
          },
          {
            date: '10/01/2022 15:50:00',
            message: 'Top',
            status: 'received'
          },
          {
            date: '10/01/2022 15:50:10',
            message: 'Mi stavo dimenticando, grazie',
            status: 'received'
          }
         ]
        },
        {
        name: 'Davide',
        avatar: 'img/avatar_8.jpg',
        visible: true,
        messages:[
          {
            date: '10/01/2022 15:30:55',
            message: 'Ciao, andiamo a mangiare la pizza stasera?',
            status: 'send'
          },
          {
            date: '10/01/2022 15:50:00',
            message: 'No, l\'ho già mangiata ieri, ordiniamo sushi!',
            status: 'received'
          },
          {
            date: '10/01/2022 15:51:00',
            message: 'OK!!',
            status: 'received'
          }
         ]
        }
      ]
    }
  },
  methods:{
    addMessage(){

        const newMessage = {
        date: dt.now().setLocale('it').toLocaleString(dt.DATETIME_SHORT_WITH_SECONDS),
        message: this.newMsgString,
        status: 'send'
      }
      if(this.newMsgString <= 0){
        return;
      }
    
      this.contacts[this.contactActive].messages.push(newMessage);
      this.autoRisposta();
      this.newMsgString = '';
    },
    autoRisposta(){
      const newRisposta = {
        date: dt.now().setLocale('it').toLocaleString(dt.DATETIME_SHORT_WITH_SECONDS),
        message: 'Ok!',
        status: 'received'
      }
      this.contacts[this.contactActive].messages.push(newRisposta);
    },
  }
}).mount('#app');