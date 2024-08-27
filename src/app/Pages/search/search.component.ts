import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { iStation, SearchClass, trainResults } from '../../model/train';
import { TrainService } from '../../service/train.service';
import { DatePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [DatePipe,FormsModule],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent implements OnInit {
  activeRoute=inject(ActivatedRoute)
  Search:SearchClass=new SearchClass()
  trainService=inject(TrainService)
  myTrainResults:trainResults[]=[]
  stationList :iStation[]=[]
  allStation=inject(TrainService)
  constructor(){
    this.activeRoute.params.subscribe((res:any)=>{
      console.log(res)
      this.Search.fromId=res.fromId
      this.Search.toId=res.toId
      this.Search.dateOf=res.dateOf
      this.getSerachTranins()
    })
  }

  getSerachTranins(){
    console.log("ss")
  this.trainService.getTrainsBySearch(this.Search.fromId,this.Search.toId,this.Search.dateOf).subscribe((res:any)=>{
    this.myTrainResults=res.data

  })
  }

  ngOnInit(): void {
      this.getAllStation()
  }

    
  getAllStation(){
    this.allStation.getAllStation().subscribe((res:any)=>{
      this.stationList=res.data
      
      console.log(this.stationList.length)
      
    })
  }
  
}
