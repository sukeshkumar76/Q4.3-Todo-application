import { Component } from '@angular/core';

interface todoInterface{
   _id?:String,
  title?: String,
  description?: String,
  completiontime?: String,
  done?:Boolean,
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Todo App';
  todos:todoInterface[]=[];
  done:todoInterface[]=[]

  constructor(){
    fetch(`http://localhost:2000/api`,{
            method: 'GET',
            mode: 'cors',
        }).then(res=>{
            return res.json()
            
        }).then(data=>{
             data.map((item:todoInterface)=>{
               if(item.done){
                 this.done.push(item)
               }
               else{
                 this.todos.push(item);
               }
             })
             
        })
        .catch(err=>{
            console.log(err);
            
        })
  }
  handleSubmit(value:todoInterface){
    value.done=false;
    console.log(value);
    
    fetch(`http://localhost:2000/api`,{
            method:'POST',
            mode: 'cors',
            headers:{
                "Content-type":"application/json"
            },
            
            body:JSON.stringify (value),
        }).then(res=>{
            return res.json()
        }).then(data=>{
        })
        .catch(err=>{
          window.alert("Creating error"+err)
        })
  }
  HandleDelete(id:any){
    fetch(`http://localhost:2000/api/${id}`,{
      method: 'DELETE',
      mode: 'cors',
  })

  }
  HandleEdit(id:any){
   let todo:todoInterface={};
   todo.title=window.prompt("Update Title") as string;
   todo.description=window.prompt("Update Description") as string;
   todo.completiontime=window.prompt("Update Complition time") as string;
   todo.done=true;
   console.log(todo);
   
     fetch(`http://localhost:2000/api/${id}`,{
      headers:{
        "Content-type":"application/json"
      },
      method: 'PUT',
      mode: 'cors',
      body:JSON.stringify(todo)
  }).then(res=>{
      return res.json()
  }).then(data=>{

  })
  .catch(err=>{
      console.log(err); 
  })
  }
  
}
