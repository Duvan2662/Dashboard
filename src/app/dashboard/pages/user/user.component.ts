import { Component, computed, inject, signal} from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute } from '@angular/router';
import { User } from '@interfaces/req-response';
import { UsersService } from '@services/users.service';
import { TitleComponent } from '@shared/title/title.component';
import { switchMap } from 'rxjs';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [TitleComponent],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  private route = inject(ActivatedRoute);
  private userService = inject(UsersService);

  // public user = signal<User|undefined>(undefined);
  public user = toSignal(
    this.route.params.pipe(
      switchMap(({id}) => this.userService.getUserById(id))
    )
  )

  public titleLabel = computed(() => {
    if (this.user()) {
      return `Informacion del usuario ${this.user()!.first_name + this.user()!.last_name}`
    }
    return `informacion del usuario`
  })



  // constructor(){
  //   this.route.params.subscribe(params => {
  //     console.log({params});
  //   });
  // }


}
