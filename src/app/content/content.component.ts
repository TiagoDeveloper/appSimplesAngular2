import { Component, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  @Output() contactId: string;

  constructor() { }

  ngOnInit() {
    

  }

    onKeyup(event: KeyboardEvent) {

    this.contactId = (<HTMLInputElement>event.target).value;

  }

}
