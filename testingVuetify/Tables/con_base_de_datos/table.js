//const url = "url here"
const vm= new Vue({
      el: '#app',
      vuetify: new Vuetify(),
      data(){
          return{ 
            columnas: [
                    { text: 'ID', value: 'id', class: 'green accent-2'},
                    { text: 'DESCRIPCIÓN', value: 'descripcion', class: 'green accent-2' },
                    { text: 'PRECIO', value: 'precio', class: 'green accent-2' },
                    { text: 'STOCK', value: 'stock', class: 'green accent-2' }                     
               ],               
            articulos: [],
            
          }
      },
      created(){       
        axios.get(url).then(response =>{
           this.articulos    = response.data;                 
        });
       
      }
    })