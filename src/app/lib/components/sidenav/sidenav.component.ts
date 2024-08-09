import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import {
    TuiButtonModule,
    tuiButtonOptionsProvider,
    TuiDataListModule,
    tuiDropdownOptionsProvider,
    TuiExpandModule,
    TuiHintModule,
    TuiHostedDropdownModule,
    TuiScrollbarModule,
} from '@taiga-ui/core';
import {
    tuiAvatarOptionsProvider,
    tuiBadgeNotificationOptionsProvider,
    tuiBadgeOptionsProvider,
    TuiIconModule,
    TuiNavigationModule,
} from '@taiga-ui/experimental';

@Component({
    selector: 'app-sidenav',
    standalone: true,
    imports: [
        TuiExpandModule,
        TuiIconModule,
        TuiHostedDropdownModule,
        TuiScrollbarModule,
        TuiDataListModule,
        TuiButtonModule,
        TuiNavigationModule,
        TuiHintModule
    ],
    providers: [
        tuiAvatarOptionsProvider({ size: 's', appearance: 'secondary' }),
        tuiBadgeNotificationOptionsProvider({ size: 'xs' }),
        tuiBadgeOptionsProvider({ size: 'm', appearance: 'primary' }),
        tuiButtonOptionsProvider({ size: 's', appearance: 'flat' }),
        tuiDropdownOptionsProvider({ appearance: 'dropdown-navigation' }),
    ],
    encapsulation: ViewEncapsulation.None,
    styleUrls: ['./sidenav.style.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './sidenav.component.html',
    host: {
        tuiTheme: 'night',
    },
})
export class SideNavComponent {
    expanded: boolean = false;
    open: boolean = false;
    submenu: boolean = false;

    toggleSubmenu(): void {
        this.submenu = !this.submenu;
    }

    toggleExpand(): void {
        this.expanded = !this.expanded;
    }
}
