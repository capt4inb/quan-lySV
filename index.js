function allData(){
    table.innerHTML=``
    contactList = JSON.parse(localStorage.getItem("listItem")) ??[] 
    contactList.forEach(function(value,i){
        const table = document.getElementById("table")
        table.innerHTML +=`
        <tr>
        <td>${i+1}</td>
        <td>${value.name}</td>
        <td>${value.emailInput}</td>
        <td>${value.tnum}</td>
        <td>${value.age}</td>
        <td>
           <button class="btn btn-success" onclick="find(${value.id})">
             <?xml version="1.0" ?><svg enable-background="new 0 0 32 32" width="1rem" height="1rem" id="svg2" version="1.1" viewBox="0 0 32 32" width="32px" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:cc="http://creativecommons.org/ns#" xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape" xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#" xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd" xmlns:svg="http://www.w3.org/2000/svg"><g id="background"><rect fill="none" height="32" width="32"/></g><g id="user_x5F_profile_x5F_edit"><path d="M12.001,18c2.209,0,4-1.791,4-4s-1.791-4-4-4s-4,1.791-4,4S9.792,18,12.001,18z M24.001,14.059V5.584L18.415,0H0.001v32h24   v-0.06C28.5,31.442,32,27.633,32,23S28.5,14.557,24.001,14.059z M17.999,2.413L21.587,6h-3.588V2.413z M2.001,30V1.998h14v6.001h6   v6.06c-3.477,0.385-6.348,2.75-7.477,5.941c-3.562,0-8.523,0-8.523,0s-2,0-2,2c0,1,0,6,0,6h11.518c0.506,0.756,1.125,1.43,1.832,2   H2.001z M23.001,29.999c-3.865-0.008-6.994-3.135-7-6.999c0.006-3.865,3.135-6.994,7-7c3.864,0.006,6.991,3.135,6.999,7   C29.992,26.864,26.865,29.991,23.001,29.999z"/><polygon points="22,27 19,27 19,24  "/><rect height="4.243" transform="matrix(-0.7071 0.7071 -0.7071 -0.7071 56.5269 20.5858)" width="7.071" x="20.464" y="19.879"/></g></svg>
             </button>
         </td>   
        <td>
           <button class="btn btn-error" onclick="removeData(${value.id})">
             <?xml version="1.0" ?><svg id="Layer_1" style="enable-background:new 0 0 24 24;" width="1rem" height="1rem" version="1.1" viewBox="0 0 24 24" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><style type="text/css">.st0{fill:none;stroke:#000000;stroke-width:1.6724;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;}.st1{fill:none;stroke:#000000;stroke-width:1.5;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;}.st2{fill:none;stroke:#000000;stroke-width:1.5;stroke-linejoin:round;stroke-miterlimit:10;}</style><g><g><g><path class="st1" d="M17.7,23.3H6.3c-1,0-1.7-0.8-1.7-1.7V6.6h14.8v14.9C19.4,22.5,18.6,23.3,17.7,23.3z"/></g><g><path class="st1" d="M20.4,6V4.2c0-0.7-0.6-1.3-1.3-1.3h-3.7L15,1.4C14.8,1,14.5,0.8,14,0.8H10C9.6,0.8,9.2,1,9,1.4L8.6,2.8H4.9 c-0.7,0-1.3,0.6-1.3,1.3V6c0,0.3,0.3,0.6,0.6,0.6h15.6C20.2,6.6,20.4,6.3,20.4,6z"/></g></g><g><g><line class="st1" x1="8.8" x2="8.8" y1="10.2" y2="19.7"/></g><g><line class="st1" x1="12" x2="12" y1="10.2" y2="19.7"/></g><g><line class="st1" x1="15.2" x2="15.2" y1="10.2" y2="19.7"/></g></g></g></svg>
             </button>
         </td>    
       </tr>
        `
    })
}

function save(){
    contactList = JSON.parse(localStorage.getItem("listItem")) ?? []
    let id
    contactList.length != 0 ? contactList.findLast((item) => id = item.id) : id = 0
    if(!document.getElementById('name').value || !document.getElementById('age').value|| !document.getElementById('emailInput').value || !document.getElementById('tnum').value){
        alert('Please fill in all fields')
        return
    }

    if(document.getElementById('id').value){
        contactList.forEach(value=>{
            if(document.getElementById('id').value == value.id){
                value.name = document.getElementById('name').value, 
                value.emailInput = document.getElementById('emailInput').value, 
                value.tnum = document.getElementById('tnum').value, 
                value.age = document.getElementById('age').value
            }
        });

        document.getElementById('id').value = ''
    }else{
        var item = {
            id:id+1,

            name : document.getElementById('name').value, 
            emailInput : document.getElementById('emailInput').value, 
            tnum : document.getElementById('tnum').value, 
            age : document.getElementById('age').value

        }

        contactList.push(item)
    }
    localStorage.setItem('listItem',JSON.stringify(contactList))
    allData()

    document.getElementById('form').reset()  
}
function find(id){
    contactList = JSON.parse(localStorage.getItem('listItem')) ?? []
    contactList.forEach(function (value){
        if(value.id == id){
            document.getElementById('id').value = value.id
            document.getElementById('name').value = value.name
            document.getElementById('emailInput').value = value.emailInput
            document.getElementById('tnum').value = value.tnum
            document.getElementById('age').value = value.age
        }
    })
}
function removeData(id){
    contactList = JSON.parse(localStorage.getItem('listItem')) ?? []
    if(confirm("Are you sure you want to delete this record?")){
        contactList = contactList.filter(function(value){
            return value.id !=id;
        });
        localStorage.setItem('listItem',JSON.stringify(contactList))
        allData()
    }
}
allData()
function clearData(){
    document.getElementById('form').reset()
    document.getElementById('id').value = ""
}