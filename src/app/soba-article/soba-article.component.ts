import {Component, Input, OnInit} from '@angular/core';
import {Soba} from "../../classes/soba";

@Component({
  selector: 'app-soba-article',
  templateUrl: './soba-article.component.html',
  styleUrls: ['./soba-article.component.css']
})
export class SobaArticleComponent implements OnInit {
  @Input() sobe: Soba[]

  constructor() {
  }

  ngOnInit(): void {
  }

}
