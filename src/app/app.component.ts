import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

/**
 * The main component of the application.
 * 
 * @selector app-root
 * @templateUrl ./app.component.html
 * @styleUrls ./app.component.css
 * @standalone true
 * @imports [RouterModule]
 */
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,
  imports: [RouterModule] 
})
export class AppComponent {
  title = 'mi-aplicacion';
}