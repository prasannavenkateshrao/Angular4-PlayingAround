import { Injectable } from '@angular/core'

@Injectable()
export class EventService{
    toDoItemList: string[] = [];
    storeToDoItem(itemToAdd:string):string[]{
        this.toDoItemList.push(itemToAdd);
        return this.toDoItemList;
    }
    deleteToDoItem(itemToDelete:string):string[]{
        const index: number = this.toDoItemList.indexOf(itemToDelete);
        this.toDoItemList.splice(index,1);
        return this.toDoItemList;
    }
}