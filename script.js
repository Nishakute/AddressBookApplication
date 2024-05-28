const contact={
    allContacts:[],
    generatedId:()=>{
        return Date.now().toString(36)+ Math.random.toString(36).substring(2)
    },
    addContacts:(n,e,p,add)=>{
        const newContact={
            id:contact.generatedId(),
            name:n,
            email:e,
            phone:p,
            address:add,
        }
        console.log(newContact)
        contact.allContacts.push(newContact);
        console.log(newContact);
        displayContacts(contact.allContacts);
    },

    deleteContact:(id)=>{
        indexNo = contact.allContacts.findIndex((elm)=>elm.id === id);

        if(indexNo!=-1){
            contact.allContacts.splice(indexNo,1);
        }
        displayContacts(contact.allContacts);
    },

    updateContact:(updateid)=>{
        //console.log('updateid')
        updatephoneNumber = prompt("enter updated phone number...");
        updateemail=prompt("enter emailid...");
        console.log(updatephoneNumber);
        console.log(updateemail);
        for(let i=0; i<contact.allContacts.length; i++){
            if(contact.allContacts[i].id == updateid){
                contact.allContacts[i].phone=updatephoneNumber;
                contact.allContacts[i].email=updateemail;
            }
        }
    displayContacts(contact.allContacts);
    }
    }

    function displayContacts(array1){
        result= document.getElementById("result");
        result.innerHTML='',
        array1.forEach(element=>{
            newCard = document.createElement('div');
            newCard.className='col-3';



            newCard.innerHTML=`<div class="card" style="width:14rem">
            <div class="card-body">
            <h2 class="card=text">${element.name}</h2>
            <p class="card=text">${element.email}</p>
            <p class="card=text">${element.phone}</p>
            <p class="card=text">${element.address}</p>
            <button class="btn btn-primary" onclick= "contact.updateContact('${element.id}')">Edit</button>
            <button class="btn btn-primary" onclick= "contact.deleteContact('${element.id}')">Delete</button>
            </div>`;
            //console.log(element.name);
            result.appendChild(newCard);
        
        })        
    }

    contact.addContacts('nisha','nisha04@gmail.com','1234566676','pune');
    contact.addContacts('rima','rima034@gmail.com','12335768','Beed');

    document.getElementById('sbmitBTN').addEventListener('click',()=>{
        nameInput = document.getElementById('nameInput');
        emailInput  = document.getElementById('emailInput');
        phoneInput = document.getElementById('phoneInput');
        addressInput = document.getElementById('addressInput');

    
        name = nameInput.value;
        email = emailInput.value;
        phone = phoneInput.value;
        address = addressInput.value;

   console.log(name);
   contact.addContacts(name,email,phone,address)
        nameInput.value="";
        emailInput.value ="";
        phoneInput.value ="";
        addressInput.value ="";

    })

    
