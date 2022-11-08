const {createApp} = Vue;

createApp({
  data(){
    return{
      newMsgString: '',
      contactActive: 0,
      contacts:[
        {
        name: 'Michele',
        avatar: 'img/avatar_1.jpg',
        visible: true,
        messages:[
          {
            date: '15:30',
            message: 'Hai portato a spasso il cane?',
            status: 'send'
          },
          {
            date: '15:30',
            message: 'Hai steso i panni?',
            status: 'send'
          },
          {
            date: '16:00',
            message: 'No!',
            status: 'received'
          },
          {
            date: '16:01',
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
            date: '15:30',
            message: 'Ciao come stai?',
            status: 'send'
          },
          {
            date: '16:00',
            message: 'Bene grazie, stasera ci vediamo?',
            status: 'received'
          },
          {
            date: '16:00',
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
            date: '10:30',
            message: 'La Marianna va in campagna?',
            status: 'send'
          },
          {
            date: '10:37',
            message: 'Mi sa che hai sbagliato chat!',
            status: 'received'
          },
          {
            date: '10:42',
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
            date: '15:30',
            message: 'Lo sai che ha aperto una nuova pizzeria?',
            status: 'send'
          },
          {
            date: '16:00',
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
            date: '12:30',
            message: 'Ricordati di chiamare la nonna',
            status: 'send'
          },
          {
            date: '12:52',
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
            date: '16:30',
            message: 'Ciao Claudia hai novità?',
            status: 'send'
          },
          {
            date: '16:45',
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
            date: '15:30',
            message: 'Fai gli auguri a Martina che oggi è il suo compleanno',
            status: 'send'
          },
          {
            date: '16:00',
            message: 'Top',
            status: 'received'
          },
          {
            date: '16:00',
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
            date: '15:30',
            message: 'Sai cosa stai facendo su Js',
            status: 'send'
          },
          {
            date: '16:00',
            message: 'Mmm.. Mi sa di no',
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
        date: '15:00',
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
        date: '18:00',
        message: 'Ok!',
        status: 'received'
      }
      this.contacts[this.contactActive].messages.push(newRisposta);
    },
    changeUser(){

    }
  }
}).mount('#app');