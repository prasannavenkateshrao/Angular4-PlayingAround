import { Component } from '@angular/core';
import { EventService } from '../shared/events.service';
@Component({
  selector: 'events-form',
  templateUrl: './events.form.component.html',
  styleUrls: ['./events.form.component.css']
})
export class EventsComponent {
    savedItems = ["Visit Doctor"];
    completedItems = [];
    todoItem:string='';
    storedValue:string='';
    isAddUsable = false;
    isUsable = false;
    isCompletedCheckBoxChecked = true;
    savedIndex;
    staticContent = {
        addLink : 'Add',
        editLink : 'Edit',
        deleteLink : 'Delete',
        saveLink : 'Save',
        completeLink : 'Mark as Complete',
        addItemLabel : 'ADD ITEM',
        toDoItemLabel : 'TODO',
        completedItemLabel : 'COMPLETED'
    };
    constructor(private eventService: EventService){
    }
     
    saveEvent(todoItem){
        if(todoItem !=null && todoItem != ''){
            this.savedItems=this.eventService.storeToDoItem(todoItem, this.savedItems);
            this.todoItem=null;
        }
        return this.savedItems;   
    }
    
    testMethod(i){
        if(i !=null){
            return true;    
        }    
    }
    
    updateEvent(i){
        if(this.storedValue !=null && this.storedValue != ''){
            this.savedIndex = i-10;
            this.savedItems=this.eventService.updateToDoItem(this.storedValue, this.savedItems,i);
        }
        return this.savedItems;    
    }
    
    deleteToDoItem(itemToDelete){
        if(this.isUsable && itemToDelete !=null){
            this.savedItems =this.eventService.deleteToDoItem(itemToDelete);
        }
        return this.savedItems;      
    }
    storeUpdatedValue(event){
        this.storedValue = event.target.value;
    }
    editToDoItem(id){
        if(this.isUsable){
            this.savedIndex = id;
        }
        return this.savedItems;  
    }
    
    markComplete(itemToComplete){
        if(this.isUsable && itemToComplete !=null){
            this.completedItems = this.eventService.completeItem(itemToComplete, this.completedItems);  
            this.savedItems =this.eventService.deleteToDoItem(itemToComplete); 
        }
        return this.completedItems;
    }
    
    deleteCompletedItem(itemToDelete){
        if(this.isCompletedCheckBoxChecked){
            this.completedItems =this.eventService.deleteCompletedItem(itemToDelete);
        }
        return this.completedItems;
    }
    
    enableAddButton(){
           this.isAddUsable = true; 
    }
    enableToDoListLinks(event){
        if(event.target.checked){
            this.isUsable = true;
        }else{
            this.isUsable = false;   
        }
        
    }
    enableCompListLinks(event,i){
        if(event.target.checked){
            this.isCompletedCheckBoxChecked = true;
        }else{
            this.isCompletedCheckBoxChecked = false;
        }
    }
}