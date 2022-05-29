import { Candidato } from '../shared/candidato';
import { Component, OnInit } from '@angular/core';
import { CandidatoService } from '../shared/candidato.service';
import { AlertController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-candidato-list',
  templateUrl: './candidato-list.page.html',
  styleUrls: ['./candidato-list.page.scss'],
})
export class CandidatoListPage implements OnInit {
  candidatos: Candidato[] = [];

  constructor(
    private candidatoService: CandidatoService,
    private toastCtrl: ToastController,
    private alertCtrl: AlertController
    ) { }

  ngOnInit() {
  }

  ionViewWillEnter() {
    this.loadCandidatos();
  }

  async loadCandidatos(){
    this.candidatos = await this.candidatoService.getAll();
  }
  
  doSearchClear() {
    this.loadCandidatos();
  }

  async doSearchBarChange($event: any) {
    const value = $event.target.value;
    if (value && value.length >= 2) {
      this.candidatos = await this.candidatoService.filter(value);
    } else {
      this.candidatoService.limpar();
    }
  }

  async delete(candidato: Candidato){
    const alert = await this.alertCtrl.create({
      header: 'Excluir?',
      message: `Deseja excluir esse candidato: ${candidato.nome_c}? `,
      buttons: [
        {
          text : 'Cancelar',
          role : 'cancel'  
        },
        {
          text : 'Excluir',
          handler: () => {
            this.executeDelete(candidato);
          }
        }
      
      ]
    });
    
  alert.present();
}

  async executeDelete(candidato : Candidato) {
    try{
      await this.candidatoService.delete(candidato.id_c);
      
      const index = this.candidatos.indexOf(candidato);
      this.candidatos.splice(index,1);

      const toast = await this.toastCtrl.create({
        header: 'Sucesso',
        message: 'Candidato excluído com sucesso.',
        color: 'success',
        position: 'bottom',
        duration: 3000
      });

      toast.present();
    } catch (error) {

      const toast = await this.toastCtrl.create({
        header: 'Erro',
        message: 'Não foi possivel excluir o candidato.',
        color: 'danger',
        position: 'bottom',
        duration: 3000
      });
      toast.present();
    }
  }

  
}
