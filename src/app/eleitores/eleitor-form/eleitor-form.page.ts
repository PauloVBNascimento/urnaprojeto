import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { Eleitor } from '../shared/eleitor';
import { EleitorService } from '../shared/eleitor.service';

@Component({
  selector: 'app-eleitor-form',
  templateUrl: './eleitor-form.page.html',
  styleUrls: ['./eleitor-form.page.scss'],
})
export class EleitorFormPage implements OnInit {

  title: string = 'Novo Eleitor'
  eleitor: Eleitor;

  constructor(
    private eleitorService: EleitorService,
    private route: ActivatedRoute,
    private toastCtrl: ToastController) { }

  ngOnInit() {
    this.eleitor = new Eleitor();

    const idParam = this.route.snapshot.paramMap.get('id_e');
    if (idParam) {
      this.title = 'Editar Eleitor';
      this.loadEleitor(parseInt(idParam));
    }
  }
  async loadEleitor(id_c: number) {
    this.eleitor = await this.eleitorService.getById(id_c);
  }
  async onSubmit(){
    try{
      const result = await this.eleitorService.save(this.eleitor);
      this.eleitor.id_e = result.insertId;

      const toast = await this.toastCtrl.create({
        header: 'Sucesso',
        message: 'Eleitor salvo com sucesso',
        color: 'success',
        position: 'bottom',
        duration: 3000
      });

      toast.present();
    } catch (e) {
      const toast = await this.toastCtrl.create({
        header: 'Erro',
        message: 'Erro ao tentar salvar o Eleitor',
        color: 'danger',
        position: 'bottom',
        duration: 3000
      });

      toast.present();
    }
    
  
  }
}
