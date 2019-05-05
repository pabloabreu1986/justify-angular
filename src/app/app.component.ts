import { Component } from '@angular/core';
import { JustifierService } from './services/justifier.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  text: string;
  count: number;
  textList = [];

  constructor( private justifierService: JustifierService) {
  }

  formatter(text, count){
    this.justifierService.getTextJustify(text, count)
    .subscribe(response => {
      this.textList = response['text'];
    });
  }


}
