import { Candidato } from '../shared/candidato';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-candidato-list',
  templateUrl: './candidato-list.page.html',
  styleUrls: ['./candidato-list.page.scss'],
})
export class CandidatoListPage implements OnInit {
  candidatos: Candidato[] = [];

  constructor() { }

  ngOnInit() {
  }
  
  doSearchClear() {

  }

  doSearchBarChange() {

  }

  delete(candidato: Candidato){
    
  }
}
