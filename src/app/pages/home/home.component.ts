import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private api: ApiService) { }
  items: any[] | undefined;

  ngOnInit(): void {
    this.getproducts()
  }
    getproducts(){
      this.api.getJson().subscribe(resp =>{
        this.items = resp
      })
    }

    addToCart(){
      console.log('card')
    }
}
