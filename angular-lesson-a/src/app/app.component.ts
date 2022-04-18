import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Buddies';
  imgSrc = '../assets/images/main.jpg';
  viewAsThumbnail = false;
  makeResponsive = true;
  fullName = 'Hassan';

  onClick($event: any){
    console.log($event.target.value);
    console.log(this.fullName);
  }

  onVup($event: any){

  }
}
