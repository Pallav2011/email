import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-emailstable',
  templateUrl: './emailstable.component.html',
  styleUrls: ['./emailstable.component.css']
})
export class EmailstableComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  emailsData =  [
    {
      id : 1,
      starUrl : '/assets/star.png',
      title : 'ABCDEFGHHJ',
      disc : 'Pandurang Ranpise, Top companies are hiring on Naukri right now!',
      date : Date()
    },
    {
      id : 2,
      starUrl : '/assets/star.png',
      title : 'Microsoft',
      disc : 'Get ready for your next trip with these 6 tips',
      date : Date()
    },
    {
      id : 3,
      starUrl : '/assets/star.png',
      title : 'PhonePe',
      disc : 'Keep your device safe from hackers.',
      date : Date()
    },
    {
      id : 4,
      starUrl : '/assets/star.png',
      title : 'GitHub',
      disc : '[GitHub] Please verify your device',
      date : Date()
    },
    {
      id : 5,
      starUrl : '/assets/star.png',
      title : 'HR Manager',
      disc : 'Immediate Hiring for Freshers at Genpact!',
      date : Date()
    },
    {
      id : 6,
      starUrl : '/assets/star.png',
      title : 'McAfee',
      disc : 'Let’s catch up!',
      date : Date()
    },
    {
      id : 7,
      starUrl : '/assets/star.png',
      title : 'Firebase',
      disc : '[Legal Notice] Update to Firebase Data Processing and Security Terms',
      date : Date()
    },
    {
      id : 8,
      starUrl : '/assets/star.png',
      title : 'Truecaller',
      disc : 'Unread messages from & others',
      date : Date()
    },
    {
      id : 9,
      starUrl : '/assets/star.png',
      title : 'Talent Aquisition',
      disc : 'Hiring Alert @Concentrix for Back Office Operations Executive/Manager',
      date : Date()
    },
    {
      id : 10,
      starUrl : '/assets/star.png',
      title : 'OIUIYUIKJJ',
      disc : 'Pandurang Ranpise, Here is your emails',
      date : Date()
    },
    {
      id : 11,
      starUrl : '/assets/star.png',
      title : 'bjkhkjnj',
      disc : 'Pandurang Ranpise, Here is your emails',
      date : Date()
    },
    {
      id : 12,
      starUrl : '/assets/star.png',
      title : 'JKBHJBHJB',
      disc : 'Pandurang Ranpise, Top companies are hiring on Naukri right now!',
      date : Date()
    },
    {
      id : 13,
      starUrl : '/assets/star.png',
      title : 'kjhghjgj',
      disc : 'Pandurang Ranpise, Here is your emails',
      date : Date()
    },
    {
      id : 14,
      starUrl : '/assets/star.png',
      title : 'KLASKLAK',
      disc : 'Pandurang Ranpise, Here is your emails',
      date : Date()
    },
    {
      id : 15,
      starUrl : '/assets/star.png',
      title : 'ABCDEFGHHJ',
      disc : 'Pandurang Ranpise, Here is your emails',
      date : Date()
    }, 
    {
      id : 16,
      starUrl : '/assets/star.png',
      title : 'SDSDASDSA',
      disc : 'Pandurang Ranpise, Top companies are hiring on Naukri right now!',
      date : Date()
    }, 
    {
      id : 17,
      starUrl : '/assets/star.png',
      title : 'CSKNDSJKS',
      disc : 'Pandurang Ranpise, Top companies are hiring on Naukri right now!',
      date : Date()
    }, 
    {
      id : 18,
      starUrl : '/assets/star.png',
      title : 'JSDJDS',
      disc : 'Pandurang Ranpise, Here is your emails',
      date : Date()
    }, 
    {
      id : 19,
      starUrl : '/assets/star.png',
      title : 'isjskdbs',
      disc : 'Pandurang Ranpise, Here is your emails',
      date : Date()
    },
    {
      id : 20,
      starUrl : '/assets/star.png',
      title : 'haskdjasjkd',
      disc : 'Pandurang Ranpise, Top companies are hiring on Naukri right now!',
      date : Date()
    },
  ];

  buttonClicked(recievedID){
    for (const element of this.emailsData) {
      if (element.id == recievedID) {
        if (element.starUrl == '/assets/star.png') {
          element.starUrl = '/assets/yellow_star.png';
        }
        else{
          element.starUrl = '/assets/star.png';
        }
      }
    }
  }

}
