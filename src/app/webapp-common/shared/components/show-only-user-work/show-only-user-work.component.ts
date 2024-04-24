import {Component} from '@angular/core';
import {setFilterByUser} from '@common/core/actions/users.actions';
import {Store} from '@ngrx/store';
import {Observable} from 'rxjs';
import {selectShowOnlyUserWork} from '@common/core/reducers/users-reducer';
import {MenuComponent} from '@common/shared/ui-components/panel/menu/menu.component';
import {MenuItemComponent} from '@common/shared/ui-components/panel/menu-item/menu-item.component';
import {AsyncPipe} from '@angular/common';
import { selectIsUserTypeAdmin } from '@common/core/reducers/users-reducer';


@Component({
  selector: 'sm-show-only-user-work',
  templateUrl: './show-only-user-work.component.html',
  styleUrls: ['./show-only-user-work.component.scss'],
  standalone: true,
  imports: [
    MenuComponent,
    MenuItemComponent,
    AsyncPipe
  ]
})
export class ShowOnlyUserWorkComponent {
  public isUserTypeAdmin$: Observable<boolean>;
  public isUserMenuOpened: boolean;
  public showOnlyUserWork$: Observable<boolean>;
  constructor(private store: Store) {
    this.isUserTypeAdmin$ = this.store.select(selectIsUserTypeAdmin);
    this.showOnlyUserWork$ = this.store.select(selectShowOnlyUserWork);

    this.isUserTypeAdmin$.subscribe(value => {
      console.log('isUserTypeAdmin$', value);
    });
  }

  userFilterChanged(userFiltered: boolean) {
    this.store.dispatch(setFilterByUser({showOnlyUserWork: userFiltered}));
  }

  userFilterMenuOpened(isUserMenuOpened: boolean) {
    this.isUserMenuOpened = isUserMenuOpened;
  }

}
