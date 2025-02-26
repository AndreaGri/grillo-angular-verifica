import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SecondoComponent } from './secondo/secondo.component';
import { TerzoComponent } from './terzo/terzo.component';
import { QuartoComponent } from './quarto/quarto.component';


@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [SecondoComponent, TerzoComponent, QuartoComponent]
})
export class AppComponent {
  title = 'grillo_fila_b';
  parola: string= 'app'
}
