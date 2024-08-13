import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '@lib/services';
import {
    TuiButton,
    tuiButtonOptionsProvider,
    // TuiDataList,
    TuiDropdown,
    tuiDropdownOptionsProvider,
    TuiIcon,
} from '@taiga-ui/core';
import { TuiAvatar, TuiBadge, TuiBadgeNotification, TuiChevron } from '@taiga-ui/kit';

@Component({
    selector: 'app-navbar',
    standalone: true,
    imports: [TuiButton, TuiAvatar, TuiBadgeNotification, TuiIcon, TuiDropdown, TuiBadge, TuiChevron],
    providers: [
        tuiButtonOptionsProvider({ size: 's', appearance: 'flat' }),
        tuiDropdownOptionsProvider({ appearance: 'dropdown-navigation' }),
    ],
    styleUrls: ['./navbar.style.less'],
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
