AOS.init();

let users = [];
async function getUsers() {
    const response = await fetch('http://localhost:5400/api/users')
    users = await response.json();

    userToTableRow()
}

//getUsers()

function userToTableRow() {
    debugger;

    const tbody = document.querySelector('tbody')
    let nomes = document.querySelector('nome_cad')

    var nome = document.getElementById('nome_cad')
    var email = document.getElementById('email_cad')
    
    users.forEach(user => {        
        let email_data = `${user.email}`
        let nome_data = `${user.role.name}`
        nome.value = nome_data
        email.value = email_data
     })
}


//async 
function cadastrar(){
    //debugger;

    var form = new FormData(document.getElementById('form_login_user'));
    
    var myInit = { method: 'POST',
                //headers: getHeaders(),
                mode: 'cors',
                cache: 'default',
                body: form 
            };

    //const response = await 
    
    fetch('http://localhost:5400/api/users/insert', myInit)
    .then(function(response) {
        //debugger;

        if (!response.ok) {
          throw new Error("HTTP error, status = " + response.status);
        }
        return response.json();
      })
      .then(function(json) {
          //debugger;
          console.loj(json);
       /*
          for(var i = 0; i < json.products.length; i++) {
            var listItem = document.createElement('li');
            listItem.innerHTML = '<strong>' + json.products[i].Name + '</strong>';
            listItem.innerHTML +=' can be found in ' + json.products[i].Location + '.';
            listItem.innerHTML +=' Cost: <strong>£' + json.products[i].Price + '</strong>';
            myList.appendChild(listItem);

        }
        */

      })
      .catch(function(error) {
        var p = document.createElement('p');
        p.appendChild(
          document.createTextNode('Error: ' + error.message)
        );        
      });
}

// usando fetch api 
// https://developer.mozilla.org/pt-BR/docs/Web/API/Fetch_API/Using_Fetch
// https://github.com/mdn/fetch-examples/


function getHeaders(){
    var myHeaders = new Headers();
    
    var content = "Hello World";

    myHeaders.append("Content-Type", "text/plain");
    myHeaders.append("Content-Length", content.length.toString());
    myHeaders.append("X-Custom-Header", "ProcessThisImmediately");

    return myHeaders;
}