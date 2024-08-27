import { Component, inject, OnInit } from '@angular/core';
import { TrainService } from '../../service/train.service';
import { iStation } from '../../model/train';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {

  allStation=inject(TrainService)
  stationList :iStation[]=[]
  fromS :number=0
  toS :number=0
  dateTF :string=""
  alreadyChoose:Number=0
  fromName?:String=""
  toName:String=""

  
  
  ngOnInit(): void {
    this.getAllStation()
    
  }
  
  getAllStation(){
    this.allStation.getAllStation().subscribe((res:any)=>{
      this.stationList=res.data
      
      console.log(this.stationList.length)
      
    })
  }
  
  

  constructor(){
  }
 
  router=inject(Router)
  Search(){
    if (this.fromS==0||this.toS==0||this.dateTF=="") {
      alert("select your journy deteails")
      
    }else if (this.fromS==this.toS) {
      
      alert("from and to station cant be same")
    }else{
      this.router.navigate(["/search",this.fromS,this.toS,this.dateTF])
    }
    
  }
  
  
}
