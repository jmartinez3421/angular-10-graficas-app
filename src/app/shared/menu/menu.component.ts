import { Component } from '@angular/core';

interface MenuItem{
  ruta: string;
  desc: string;
}

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styles: [`
    
  `]
})
export class MenuComponent{

  menuList: MenuItem[] = [
    {
      ruta: './graficas/barras',
      desc: 'Grafica de Barras'
    },
    {
      ruta: './graficas/graficasDoble',
      desc: 'Doble gráfica'
    },
    {
      ruta: './graficas/dona',
      desc: 'Gráfica Donut'
    },
    {
      ruta: './graficas/donaHttp',
      desc: 'Grafica Donut Http'
    },
  ]

}
