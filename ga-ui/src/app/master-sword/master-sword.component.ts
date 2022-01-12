import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-master-sword',
  templateUrl: './master-sword.component.html',
  styleUrls: ['./master-sword.component.css']
})
export class MasterSwordComponent implements OnInit {
// create the variable for the view
proclamation: string = ' The Master Sword';

  constructor() { }

  ngOnInit(): void {
  }

}
