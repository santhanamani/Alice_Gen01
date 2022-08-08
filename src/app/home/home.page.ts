import { AfterContentInit, Component, OnInit, ViewChild, ElementRef} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
declare var google;

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit, AfterContentInit {
  map;
  @ViewChild('mapElement', { static: true }) mapElement: ElementRef;

  dateTime;

  pin : any = "";

  constructor(private http : HttpClient) {
    setInterval(() => {
      this.http.get('http://localhost:5000/dataget').subscribe((response) => {
        console.log(response["10"]["state"]);
        this.pin = "/"+response["10"]["state"]+"/off";
      
   //     this.pin = response["params"];

      }); 
    }, 5000);
        
  }

  ngAfterContentInit(): void {
    this.map = new google.maps.Map(
        this.mapElement.nativeElement,
        {
          center: {lat: 12.990876, lng: 80.243363},
          zoom: 17,
          disableDefaultUI: true
        });
  }

  ngOnInit() {
    setTimeout(() => {
      this.dateTime = new Date().toISOString();
    });
  }

  
}
