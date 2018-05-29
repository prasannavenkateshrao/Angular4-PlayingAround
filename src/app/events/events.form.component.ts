import { Component } from '@angular/core';
import { EventService } from '../shared/events.service';
@Component({
  selector: 'events-form',
  templateUrl: './events.form.component.html',
  styleUrls: ['./events.form.component.css']
})
export class EventsComponent {
    title = 'To Do List Application';
    savedItems:string[];
    todoItem:string='';
    constructor(private eventService: EventService){  
    }
  
    saveEvent(formValue){
        this.savedItems=this.eventService.storeToDoItem(formValue.todoItem);
        this.todoItem=null; 
    }
    
    deleteItem(itemToDelete){
        this.savedItems =this.eventService.deleteToDoItem(itemToDelete);   
    }
}