export interface iStation{
    
      stationID:number,
            stationName: String,
            stationCode: String
      }


  
   
     export  class SearchClass {
            fromId:number
            toId: number
            dateOf: string

            constructor() {
                  this.fromId=0
                  this.toId=0
                  this.dateOf=''
                  
            }
      }


      export interface trainResults {
            trainId: number
            trainNo: number
            trainName: string
            departureStationName: string
            arrivalStationName: string
            arrivalTime: string
            departureTime: string
            totalSeats: number
            departureDate: string
            bookedSeats: number
          }