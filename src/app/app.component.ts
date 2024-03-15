import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { CommonModule } from '@angular/common';
import { User } from '../Types/user';
import { JokeComponent } from './components/user-profile/joke/joke.component';
import { AComponent } from './components/a/a.component';
import { B1Component } from './components/b1/b1.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,UserProfileComponent,CommonModule,JokeComponent,AComponent,B1Component],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  // title = 'code-bin';
  users = [
    { name: 'Md Adil', isSingle: true, salary: 400000000, Age: 24 },
    // { name: 'Sachin', isSingle: false, salary: 400000000, Age: 24 },
    // { name: 'Abdul Wahid', isSingle: false, salary: 40000000, Age: 24 },
  ];

  receiveData(e:User){
    console.log(e)
    const userIndex = this.users.findIndex((user) => user.name == e.name);
    this.users[userIndex].salary = e.newSalary;
  }

  clear(){
    this.users = []
  }

}
