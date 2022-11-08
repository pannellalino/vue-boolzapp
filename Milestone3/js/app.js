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
          },
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
            date: '15:30',
            message: 'Sai cosa stai facendo su Js',
            status: 'send'
          },
          {
            date: '16:00',
            message: 'No',
            status: 'received'
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
            message: 'Sai cosa stai facendo su Js',
            status: 'send'
          },
          {
            date: '16:00',
            message: 'No',
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
            date: '15:30',
            message: 'Sai cosa stai facendo su Js',
            status: 'send'
          },
          {
            date: '16:00',
            message: 'No',
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
            date: '15:30',
            message: 'Sai cosa stai facendo su Js',
            status: 'send'
          },
          {
            date: '16:00',
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
            message: 'Sai cosa stai facendo su Js',
            status: 'send'
          },
          {
            date: '16:00',
            message: 'No',
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
            message: 'No',
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
      this.newMsgString = '';
    }
  }
}).mount('#app');