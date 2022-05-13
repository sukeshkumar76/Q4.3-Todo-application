import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TodoDataService {

  constructor() { }
  static state:any[]=["kimani","kimani","kimani","kimani"];

  UpdateTodo(Todo:any,id:string){
    TodoDataService.state=TodoDataService.state.map(item=>{
      if(item.id===id){
        item=Todo;
      }
    })
  }
  DeleteTodo(id:string){
    TodoDataService.state=TodoDataService.state.filter(item=>{
      if(item.id !==id){
        return item;
      }
    })
  }
  CreateTodo(Todo:any){
    TodoDataService.state.push(Todo);
  }
}
