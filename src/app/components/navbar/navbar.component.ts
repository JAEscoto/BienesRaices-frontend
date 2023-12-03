import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [MatIconModule, MatDividerModule, MatButtonModule],
  templateUrl: './navbar.component.html',
  styleUrl: '../../../styles.css',
})
export class NavbarComponent {
  constructor(private router: Router) {}

  goTo(path: string) {
    this.router.navigate([`${path}`]);
  }
}
