import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hylian-shield',
  templateUrl: './hylian-shield.component.html',
  styleUrls: ['./hylian-shield.component.css']
})
export class HylianShieldComponent implements OnInit {
// my variable
hylian: string = 'Behold! The Hylian Shield!';

  constructor() { }

  ngOnInit(): void {
  }

}
