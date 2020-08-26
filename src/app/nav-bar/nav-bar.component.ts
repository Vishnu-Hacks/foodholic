import { Component, OnInit } from '@angular/core';
import { HubService } from '../services/hub.service';
import { Hub } from '../dto/hub.model';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  selectedHubCode: string;
  hub: Hub;
  allHub: Hub[];

  constructor(private hubService: HubService) { }

  ngOnInit(): void {
    this.hubService.getAllHubs().subscribe(h => {
      if (h && h.length > 0) {
        this.allHub = h;
        this.hub = h[0];
        this.selectedHubCode = this.hub.hubCode;
        console.log(this.allHub);
        this.hubService.changeHubContext(this.hub);
      }
    });
  }
  public logged: boolean = true;

  changeHub() {

    this.allHub.forEach(h => {
      if (h.hubCode === this.selectedHubCode) {
        this.hub = h;
        console.log('chaning hub to ' + this.selectedHubCode);
        this.hubService.changeHubContext(this.hub);
      }
    });
  }
}
