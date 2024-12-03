import { Component, OnInit } from '@angular/core';
import { NavController, LoadingController, AlertController } from '@ionic/angular';

@Component({
  selector: 'app-requerimientos',
  templateUrl: './requerimientos.page.html',
  styleUrls: ['./requerimientos.page.scss'],
})
export class RequerimientosPage {

  requerimientos = {
    tipoProyecto: '',
    publicoObjetivo: '',
    problema: '',
    funcionalidades: [],
    colores: '',
    presupuesto: '',
    fechaEntrega: '',
  };

  constructor(private navCtrl: NavController,private loadingController: LoadingController,
    private alertController: AlertController) { }

  async submitForm() {
   
   // Mostrar el loading
   const loading = await this.loadingController.create({
    message: 'Guardando requerimientos...',
    spinner: 'crescent',
  });
  await loading.present();
   

  setTimeout(async () => {
    // Guardar datos
    console.log('Requerimientos Capturados:', this.requerimientos);
    localStorage.setItem('requerimientos', JSON.stringify(this.requerimientos));

    // Ocultar el loading
    await loading.dismiss();

    // Mostrar alerta de éxito
    const alert = await this.alertController.create({
      header: '¡Éxito!',
      message: 'Tus requerimientos han sido guardados correctamente.',
      buttons: ['OK'],
    });
    await alert.present();

    // Navegar al home
    this.navCtrl.navigateRoot('/home', { animated: true });
  }, 2000); // 2 segundos simulando procesamiento
  
   //console.log('Requerimientos Capturados:', this.requerimientos);
  //localStorage.setItem('requerimientos', JSON.stringify(this.requerimientos));
  //this.navCtrl.navigateRoot('/home',{animated:true});
  // Aquí puedes guardar en una base de datos o enviar a un servicio


  

  }

  resetForm() {
    this.requerimientos = {
      tipoProyecto: '',
      publicoObjetivo: '',
      problema: '',
      funcionalidades: [],
      colores: '',
      presupuesto: '',
      fechaEntrega: '',
    };
  }

}
