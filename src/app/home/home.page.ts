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
  pstatus = true;
  dstatus = true;
  rstatus = true;
  switchstatus = false;
  power = "Switch off";
  powercolor = "danger";
  kilometer = "0";
  rightbar = true;

  pin : any = "";

  constructor(private http : HttpClient) {
        
  }

  ngOnInit() {
    this.dateTime = new Date().toISOString();
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


  
  pbutton()
  {
    this.pstatus = true;
    this.dstatus = false;
    this.rstatus = false;
    this.switchstatus = false;
    this.http.get('http://localhost:5000/dataget').subscribe((response) => {
      console.log(response);
    }); 
  }

  rbutton()
  {
    this.pstatus = false;
    this.dstatus = true;
    this.rstatus = true;
    this.switchstatus = true;
    this.http.get('http://localhost:5000/dataget').subscribe((response) => {
      console.log(response);
    }); 
  }
  dbutton()
  {
    this.kilometer = "239";
    this.pstatus = false;
    this.dstatus = true;
    this.rstatus = true;
    this.switchstatus = true;
    this.http.get('http://localhost:5000/dataget').subscribe((response) => {
      console.log(response);
    }); 
  }

  switchbutton()
  {

    this.kilometer = "10";

    if( this.power == "Switch off")
    {
      this.pstatus = true;
      this.dstatus = false;
      this.rstatus = true;
      this.switchstatus = true;
      this.power = "Switch on";
      this.powercolor = "success";

    }
    else if(this.power == "Switch on"){
      this.pstatus = true;
      this.dstatus = true;
      this.rstatus = true;
      this.switchstatus = false;
      this.power = "Switch off";
      this.powercolor = "danger";
    }
    this.http.get('http://localhost:5000/dataget').subscribe((response) => {
      console.log(response);
    }); 
  }


  right_bar_fun()
  {
    this.rightbar = this.rightbar == true ? false : true;
  }

  
}
