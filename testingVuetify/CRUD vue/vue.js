const vm= new Vue({
        el: '#app',
        data: {
            name: '',          
            email: '',     
            formUpdate: false,     
            idUpdate: -1,  
            nameUpdate: '',  
            emailUpdate: '',  
            users: [] 
        },
        methods: {
            createUser: function () {
               
                this.users.push({
                    id: + new Date(),
                    name: this.name,
                    email: this.email
                });
                
                this.name = '';
                this.email = '';
                localStorage.setItem('CRUD-vue',JSON.stringify(this.users));
            },
            seeFormUpdate: function (user_id) {
                
                this.idUpdate = user_id;
                this.nameUpdate = this.users[user_id].name;
                this.emailUpdate = this.users[user_id].email;
               
                this.formUpdate = true;
                
            },
            deleteUpdate: function (user_id) {
               
                this.users.splice(user_id, 1);
                localStorage.setItem('CRUD-vue',JSON.stringify(this.users));
            },
            saveUpdate: function (user_id) {
                
                this.formUpdate = false;
                
                this.users[user_id].name = this.nameUpdate;
                this.users[user_id].email = this.emailUpdate;
                localStorage.setItem('CRUD-vue',JSON.stringify(this.users));
            }
        },
        created: function(){
            let dataLS = JSON.parse(localStorage.getItem('CRUD-vue'));
            if(dataLS === null){
                this.users = [];
            }else{
                this.users = dataLS;
            }
        }
    });
