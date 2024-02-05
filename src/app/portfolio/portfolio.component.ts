import { Component } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent {


  imgSrc: string = '';

  getSrc(event: string) :void {
    this.imgSrc = event
  }


}
