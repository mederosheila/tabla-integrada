const vm= new Vue({
    el: '#app',
    vuetify: new Vuetify(),
    data(){
        return{
            firstname: '',
            lastname:'',          
            email: '',     
            formUpdate: false,     
            idUpdate: -1,  
            firstnameUpdate: '',
            lastnameUpdate:'',  
            emailUpdate: '',  
            users: [] ,
            columns:[
                {text:"ID", value:"id", class:"orange darken-4 white--text"},
                {text:"FIRSTNAME", value:"firstname", class:"orange darken-4 white--text"},
                {text:"LASTNAME", value:"lastname", class:"orange darken-4 white--text"},
                {text:"EMAIL", value:"email", class:"orange darken-4 white--text"}
            ],
            users:[
                {
                   id:1,
                   firstname:'John',
                   lastname: 'Doe',
                   email:'example@gmail.com'
                },
                {
                   id:2,
                   firstname:'John',
                   lastname: 'Doe',
                   email:'example@gmail.com'
                },
                {
                   id:3,
                   firstname:'John',
                   lastname: 'Doe',
                   email:'example@gmail.com'
                },
                
                {
                    id:4,
                    firstname:'John',
                    lastname: 'Doe',
                    email:'example@gmail.com'
                 },
                 {
                    id:5,
                    firstname:'John',
                    lastname: 'Doe',
                    email:'example@gmail.com'
                 },
                 {
                    id:6,
                    firstname:'John',
                    lastname: 'Doe',
                    email:'example@gmail.com'
                 },
                 
            ],
            dialog1: false
        }
    },
    methods: {
      createUser: function () {
         
          this.users.push({
              id: + new Date(),
              firstname: this.firstname,
              lastname:this.lastname,
              email: this.email
          });
          
          this.firstname = '';
          this.email = '';
          this.lastname='';
          localStorage.setItem('CRUD-vue',JSON.stringify(this.users));
      },
   
      created: function(){
      let dataLS = JSON.parse(localStorage.getItem('CRUD-vue'));
      if(dataLS === null){
          this.users = [];
      }else{
          this.users = dataLS;
      }
      }
   } 
  });
  

 