import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-inicial',
  templateUrl: './inicial.page.html',
  styleUrls: ['./inicial.page.scss'],
})
export class InicialPage {

  usuario = {
    correo: '',
    contacto: ''
  };

  constructor(private navCtrl: NavController) {}

  guardarDatos() {
    if (this.validarDatos()) {
      // Guardar datos en LocalStorage o enviarlos a un backend
      localStorage.setItem('usuario', JSON.stringify(this.usuario));
      // Navegar a la herramienta de requerimientos
      this.navCtrl.navigateForward('/requerimientos');
    } else {
      alert('Por favor, ingresa datos válidos.');
    }
  }

  validarDatos(): boolean {
    const correoValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(this.usuario.correo);
    const contactoValido = /^\d+$/.test(this.usuario.contacto);
    return correoValido && contactoValido;
  }

}
