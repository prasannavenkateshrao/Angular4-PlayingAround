import { Injectable } from '@angular/core'

@Injectable()
export class EventService{
    toDoItemList: string[] = [];
    completedItemList: string[] = [];
    storeToDoItem(itemToAdd:string, savedItems:string[]):string[]{
        this.toDoItemList = savedItems.slice(0);
        this.toDoItemList.push(itemToAdd);
        return this.toDoItemList;
    }
    updateToDoItem(itemToAdd:string, savedItems:string[], selectedIndex:number):string[]{
        let itemGettingUpdated =savedItems[selectedIndex];
        const index = savedItems.indexOf(itemGettingUpdated);
        savedItems.splice(index,1);
        savedItems.push(itemToAdd);
        return savedItems;
    }
    deleteToDoItem(itemToDelete:string):string[]{
        const index: number = this.toDoItemList.indexOf(itemToDelete);
        this.toDoItemList.splice(index,1);
        return this.toDoItemList;    
    }
    completeItem(itemToComplete:string, completedItems:string[]):string[]{
        this.completedItemList = completedItems.slice(0);
        this.completedItemList.push(itemToComplete);
        return this.completedItemList;
    }
    deleteCompletedItem(itemToDelete:string):string[]{
        const index: number = this.completedItemList.indexOf(itemToDelete);
        this.completedItemList.splice(index,1);
        return this.completedItemList;    
    }
}
