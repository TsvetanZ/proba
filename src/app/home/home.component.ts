import { Component, OnInit } from '@angular/core';

interface Todo {
  title: string;
  isComplete: boolean;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})


export class HomeComponent  {

  constructor() { }

  todos: Todo[] = [
    {
      title: "todo1",
      isComplete : true,
    },
    {
      title: "todo2",
      isComplete : true,
    },
    {
      title: "todo3",
      isComplete : false,
    },
    {
      title: "todo4",
      isComplete : true,
    },
  ];

  
  changeComplete(todo: Todo ) : void {
    todo.isComplete = !todo.isComplete;
    console.log("ehooo")
  }

  allChange() : void {
   for (const todo of this.todos) {
        todo.isComplete = !todo.isComplete;
   }
      
  }
}

//    todos = [
//       {
//         title: "todo1",
//         isComplete : true,
//       },
//       {
//         title: "todo2",
//         isComplete : true,
//       },
//       {
//         title: "todo3",
//         isComplete : false,
//       },
//       {
//         title: "todo4",
//         isComplete : true,
//       },
//     ];


//       constructor() {}
    
  
//     allChange() : void {
//      for (const todo of this.todos) {
//           todo.isComplete = !todo.isComplete;
//      }

  
//     }


// }


