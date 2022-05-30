import { Component, OnInit } from '@angular/core';
import { AlertController, ToastController } from '@ionic/angular';
import { Eleitor } from '../shared/eleitor';
import { EleitorService } from '../shared/eleitor.service';

@Component({
  selector: 'app-eleitor-list',
  templateUrl: './eleitor-list.page.html',
  styleUrls: ['./eleitor-list.page.scss'],
})
export class EleitorListPage implements OnInit {
  eleitores: Eleitor[] = [];
  
  constructor(
    private eleitorService: EleitorService,
    private toastCtrl: ToastController,
    private alertCtrl: AlertController
    ) { }

  ngOnInit() {
  }

  ionViewWillEnter() {
    this.loadEleitores();
  }

  async loadEleitores(){
    this.eleitores = await this.eleitorService.getAll();
  }
  
  doSearchClear() {
    this.loadEleitores();
  }

  async doSearchBarChange($event: any) {
    const value = $event.target.value;
    if (value && value.length >= 2) {
      this.eleitores = await this.eleitorService.filter(value);
    } else {
      this.eleitorService.limpar();
    }
  }

  async delete(eleitor: Eleitor){
    const alert = await this.alertCtrl.create({
      header: 'Excluir?',
      message: `Deseja excluir esse eleitor: ${eleitor.nome_e}? `,
      buttons: [
        {
          text : 'Cancelar',
          role : 'cancel'  
        },
        {
          text : 'Excluir',
          handler: () => {
            this.executeDelete(eleitor);
          }
        }
      
      ]
    });
    
  alert.present();
}

  async executeDelete(eleitor : Eleitor) {
    try{
      await this.eleitorService.delete(eleitor.id_e);
      
      const index = this.eleitores.indexOf(eleitor);
      this.eleitores.splice(index,1);

      const toast = await this.toastCtrl.create({
        header: 'Sucesso',
        message: 'eleitor excluído com sucesso.',
        color: 'success',
        position: 'bottom',
        duration: 3000
      });

      toast.present();
    } catch (error) {

      const toast = await this.toastCtrl.create({
        header: 'Erro',
        message: 'Não foi possivel excluir o eleitor.',
        color: 'danger',
        position: 'bottom',
        duration: 3000
      });
      toast.present();
    }
  }
}
