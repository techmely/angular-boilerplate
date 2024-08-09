import { ChangeDetectionStrategy, Component, inject, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '@lib/services';
import {
    TuiButtonModule,
    tuiButtonOptionsProvider,
    TuiDataListModule,
    tuiDropdownOptionsProvider,
    TuiHostedDropdownModule,
} from '@taiga-ui/core';
import {
    TuiAvatarModule,
    tuiAvatarOptionsProvider,
    TuiBadgeModule,
    TuiBadgeNotificationModule,
    tuiBadgeNotificationOptionsProvider,
    tuiBadgeOptionsProvider,
    TuiIconModule,
} from '@taiga-ui/experimental';

@Component({
    selector: 'app-navbar',
    standalone: true,
    imports: [
        TuiButtonModule,
        TuiAvatarModule,
        TuiBadgeNotificationModule,
        TuiIconModule,
        TuiDataListModule,
        TuiHostedDropdownModule,
        TuiBadgeModule,
    ],
    providers: [
        tuiAvatarOptionsProvider({ size: 's', appearance: 'secondary' }),
        tuiBadgeNotificationOptionsProvider({ size: 'xs' }),
        tuiBadgeOptionsProvider({ size: 'm', appearance: 'primary' }),
        tuiButtonOptionsProvider({ size: 's', appearance: 'flat' }),
        tuiDropdownOptionsProvider({ appearance: 'dropdown-navigation' }),
    ],
    encapsulation: ViewEncapsulation.None,
    styleUrls: ['./navbar.style.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './navbar.component.html',
    host: {
        tuiTheme: 'night',
    },
})
export class NavbarComponent {
    private readonly _router = inject(Router);
    private readonly _authService = inject(AuthService);

    onClickSignOut(): void {
        this._authService.logout();
        this._router.navigate(['/auth/login']);
    }
}
