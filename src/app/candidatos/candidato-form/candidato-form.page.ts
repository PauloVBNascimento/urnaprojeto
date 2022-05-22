import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { Candidato } from '../shared/candidato';
import { CandidatoService } from '../shared/candidato.service';

@Component({
  selector: 'app-candidato-form',
  templateUrl: './candidato-form.page.html',
  styleUrls: ['./candidato-form.page.scss'],
})
export class CandidatoFormPage implements OnInit {
  title: string = 'Novo Candidato';
  candidato : Candidato;

  constructor(
    private candidatoService: CandidatoService,
    private route: ActivatedRoute,
    private toastCtrl: ToastController
    ) { }

  ngOnInit() {
    this.candidato = new Candidato();

    const idParam = this.route.snapshot.paramMap.get('id_c');
    if (idParam) {
      this.title = 'Editar Candidato';
      this.loadCandidato(parseInt(idParam));
    }
  }

  async loadCandidato(id_c: number) {
    this.candidato = await this.candidatoService.getById(id_c);
  }

  async onSubmit(){
    try{
      const result = await this.candidatoService.save(this.candidato);
      this.candidato.id_c = result.insertId;

      const toast = await this.toastCtrl.create({
        header: 'Sucesso',
        message: 'Candidato salvo com sucesso',
        color: 'success',
        position: 'bottom',
        duration: 3000
      });

      toast.present();
    } catch (e) {
      const toast = await this.toastCtrl.create({
        header: 'Erro',
        message: 'Erro ao tentar salvar o Candidato',
        color: 'danger',
        position: 'bottom',
        duration: 3000
      });

      toast.present();
    }
    
  }
}
