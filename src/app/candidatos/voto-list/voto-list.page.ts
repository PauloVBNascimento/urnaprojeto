import { Component, OnInit } from '@angular/core';
import { AlertController, ToastButton, ToastController } from '@ionic/angular';
import { Candidato } from '../shared/candidato';
import { CandidatoService } from '../shared/candidato.service';

@Component({
  selector: 'app-voto-list',
  templateUrl: './voto-list.page.html',
  styleUrls: ['./voto-list.page.scss'],
})
export class VotoListPage implements OnInit {
  candidatos: Candidato[] = [];
  constructor(
    private candidatoService: CandidatoService,
    private toastCtrl: ToastController,
    private alertCtrl: AlertController
  ) { }

  ngOnInit() {
  }

  ionViewWillEnter(){
    this.loadCandidatos();
  }

  async loadCandidatos() {
    this.candidatos = await this.candidatoService.getAll2()
  }

  doSearchClear(){
    this.loadCandidatos();
  }

  async doSearchBarChange($event: any){
    const value = $event.target.value;
    if (value && value.length >=2){
      this.candidatos = await this.candidatoService.filter(value);
    }
  }
}
