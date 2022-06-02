import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-sellcar',
  templateUrl: './sellcar.component.html',
  styleUrls: ['./sellcar.component.css']
})
export class SellcarComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {}
  id:any="vehicledetail";
  tabChange(ids:any){
  this.id=ids;
  console.log(this.id)
  }
 }
 