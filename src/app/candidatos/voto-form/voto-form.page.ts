import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { Candidato } from '../shared/candidato';
import { CandidatoService } from '../shared/candidato.service';

@Component({
  selector: 'app-voto-form',
  templateUrl: './voto-form.page.html',
  styleUrls: ['./voto-form.page.scss'],
})
export class VotoFormPage implements OnInit {
  title: string = 'Voto'
  candidato: Candidato;
  candidatos: Candidato[] = [];

  constructor(
    private candidatoService: CandidatoService,
    private route: ActivatedRoute,
    private toastCtrl: ToastController
  ) { }

  ngOnInit() {
    this.candidato = new Candidato();

    const numParam = this.route.snapshot.paramMap.get('numero_c');
    if (numParam) {
      this.title = 'Votar';
      this.loadCandidato(numParam);
      this.candidatoService.getByNum;
    }
  }

  async loadCandidato(numero_c: string) {
    this.candidato = await this.candidatoService.getByNum(numero_c);
  }

  async onSubmit (){
    try{
      const result = await this.candidatoService.save2(this.candidato);
      this.candidato.numero_c = result.insertNum;
      const audio = document.querySelector('audio');
    
      const toast = await this.toastCtrl.create({
        header: 'FIM',
        message: 'Voto Confirmado.',
        color: 'success',
        position: 'bottom',
        duration: 3000
      });
      
      toast.present();
      audio.play();
    } catch (e) {
      const toast = await this.toastCtrl.create({
        header: 'ERRO',
        message: 'Voto Não Confirmado.',
        color: 'danger',
        position: 'bottom',
        duration: 3000
      });
      
      toast.present();
    }
  }
  ionViewWillEnter(){
    this.limparCandidatos();
  }

  async loadCandidatos(numero_c: string){
    this.candidato = await this.candidatoService.getByNum(numero_c);
  }

  async limparCandidatos() {
    this.candidatos = await this.candidatoService.limpar()
  }

  doSearchClear() {
    this.limparCandidatos();
  }
  async doSearchBarChange($event: any){
    const value = $event.target.value;
    if (value && value.length >=5) {
      this.candidatos = await this.candidatoService.filterNum(value);
    } else {
      this.limparCandidatos();
    }
  }


}