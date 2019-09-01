import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'atp-archives',
  templateUrl: './atp-archives.component.html',
  styleUrls: ['./atp-archives.component.scss'],
})
export class AtpArchivesComponent implements OnInit {
  activeTab = 'articles';
  state: any = {
    tabs: {
      demo1: 0,
      demo2: 'tab-r1',
      demo3: 'hr1',
      demo4: 'AA',
      demo5: 'iss1',
      demo6: 'l1',
      demo7: 'tab1',
      demo8: 'hb1',
      demo9: 'A1',
      demo10: 'is1'
    }
  };
  
  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
   
  }

  toggleVisibility(obj): void {
    
  }

}
