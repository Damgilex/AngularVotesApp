import { Component } from '@angular/core';
import { Link}  from './link/link.model';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  links:Link[];

  constructor(){//Inicializar variables
    this.links = [
      new Link('Angular','http://angular.io',100),
      new Link('Google','http://google.com',30),
      new Link('Youtbe','http://youtube',200),
    ];
  }

  addLink(title: HTMLInputElement, link: HTMLInputElement){//Evento para agregar nuevo link

    this.links.push(new Link(title.value,link.value));//Se crea un nuevo link
    
    title.value = '';
    link.value = '';
    
    return false;//Evitar recargar la pagina
  }

}
