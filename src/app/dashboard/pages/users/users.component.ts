import { Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { UsersService } from '@services/users.service';
import { TitleComponent } from '@shared/title/title.component';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [TitleComponent, RouterModule],
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})
export class UsersComponent {
  public usersService = inject(UsersService);

}
