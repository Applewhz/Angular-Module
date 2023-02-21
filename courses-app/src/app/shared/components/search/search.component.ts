import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit{
  @Input() SearchString!: string
  @Output() InputSearchString = new EventEmitter<string>();

  constructor() {}

  ngOnInit(): void {}

  userInputString(value: string) {
    this.InputSearchString.emit(value);
    console.log('here', value)
  }
}

