import { CommonModule } from '@angular/common';
import { Component, Input, Output,EventEmitter, booleanAttribute, numberAttribute, SimpleChanges, ViewChild, ElementRef, input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { User } from '../../../Types/user';
import { CountryCodePipe } from '../../pipes/country-code.pipe';
import { HighlightDirectivesDirective } from '../../directives/highlight-directives.directive';

function formatName(value:String){
  return "Hi "+value
}

@Component({
  selector: 'app-user-profile',
  standalone: true,
  imports: [FormsModule,CommonModule,CountryCodePipe,HighlightDirectivesDirective],
  templateUrl: './user-profile.component.html',
  styleUrl: './user-profile.component.css',
})
export class UserProfileComponent {

  //Parent to child we use Input 
  // @Input({alias: "userName"}) name = ""

  name = input("",{
    alias:"userName"
  })
  @Input ({transform: booleanAttribute}) isSingle!: boolean
  @Input ({transform:numberAttribute}) salary!:number

  //Child to parent we use Output
  @Output() myEvent = new EventEmitter<User>()

  sendData(){
    this.myEvent.emit({name:this.name(),newSalary:25000})
  }

  constructor(){
    // init properties
    // dependency injection
    // event listener register

    console.log("Constructor Called",this.name()); //Output: Constructor Called
    
  }

  ngAfterViewInit(): void {
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.
    console.log("ngAfterViewInit",this.heading?.nativeElement.textContent);
    
  }

  ngOnChanges(changes:SimpleChanges):void{
    console.log("ngOnChanges",changes);
    
  }

  ngOnInit(){
        // init properties
    // initial Api call
    // event listener register
    console.log("ngOnInit Called",this.name()); //Output: ngOnInit Called Md Adil
    
  }

  ngOnDestroy(){
    //Unregister event listener
    console.log("ngOnDestroy called");
    
  }

  @ViewChild('myHeading') heading?:ElementRef

  // color="green"
  // name = 'Md Adil';
  // status = 'Single';
  // phoneNo = 8863932204
  // salary = 400000;
  // Age = 24;
  // isBtnDisabled = false;
  // inputVal = 'test';

  // users = [
  //   { name: 'md Adil', status: 'Single', salary: 400000000, Age: 24 },
  //   { name: 'sachin', status: 'Married', salary: 4000000, Age: 24 },
  //   { name: 'abdul Wahid', status: 'Mingle', salary: 4000000, Age: 24 },
  // ];

  // onChange(e: Event) {
  //   const value = (e.target as HTMLInputElement).value;
  //   this.inputVal = value;
  // }
}
