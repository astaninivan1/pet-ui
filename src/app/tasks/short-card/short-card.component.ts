import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-short-card',
  templateUrl: './short-card.component.html',
  styleUrls: ['./short-card.component.scss', '../shared/card.style.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ShortCardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
