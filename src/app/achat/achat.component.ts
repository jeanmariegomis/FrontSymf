import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { AchatService } from '../achat.service';


@Component({
  selector: 'app-achat',
  templateUrl: './achat.component.html',
  styleUrls: ['./achat.component.css']
})
export class AchatComponent implements OnInit {

  constructor(private achatService: AchatService,private router:Router) { }

  ngOnInit() {
  }
  OnSubmit(prix, tel){
    this.achatService.postFile(

      prix.value,
      tel.value
    ).subscribe(data =>{
      console.log('data');

      prix.value = null;
      tel.value = null
    }
      );

  }

}
