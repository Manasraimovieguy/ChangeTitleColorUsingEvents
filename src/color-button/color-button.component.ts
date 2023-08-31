import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-color-button',
  standalone: true,
  templateUrl: './color-button.component.html',
  styleUrls: ['./color-button.component.css'],
  imports: [CommonModule],
})
export class ColorButtonComponent implements OnInit {
  @Input() contents: any[] = [];
  @Output() colorChange = new EventEmitter<string>();

  constructor() {}

  ngOnInit() {}

  changeTitle(color: string) {
    this.colorChange.emit(color);
  }
}
