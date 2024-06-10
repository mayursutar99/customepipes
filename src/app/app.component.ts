import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'characterexceeding';
  mstring:any;
  binding:string='';
  checkPara(){
    this.mstring=this.binding
  }
}