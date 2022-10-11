import { Component } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { Observable, tap } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent  {

  public character$!: Observable<any>;
  public episode$!: Observable<any>;
  public idCharacter = '';
  constructor(private apiServices: ApiService) {

    this.character$ = apiServices.searchCharacter('characters').pipe(
      tap(resp => {
        console.log(resp)
        console.log(resp['0'].name)
      })
    )


  }

  onSearch() {

    this.character$ = this.apiServices.searchCharacter('characters/' + this.idCharacter).pipe(
      tap(console.log)
    )
  }


  getRandom(){
    
    this.character$ = this.apiServices.searchCharacter('character/random').pipe(
      tap(console.log)
    )
  }


}

