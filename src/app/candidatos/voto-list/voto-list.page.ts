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
  candidato: Candidato;
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
    } else {
      this.loadCandidatos();
    }
  }
  async delete(){ 
      const alert = await this.alertCtrl.create({
        header: 'Excluir?',
        message: `Deseja excluir os votos? `,
        buttons: [
          {
            text : 'Cancelar',
            role : 'cancel'  
          },
          {
            text : 'Excluir',
            handler: () => {
              this.candidatoService.limparv('000055');
              this.loadCandidatos();
            }
          }
        
        ]
      });
      
    alert.present();
  }
}
