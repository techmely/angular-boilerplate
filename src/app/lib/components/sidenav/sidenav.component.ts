import { ChangeDetectionStrategy, Component } from '@angular/core';
import {
    TuiButton,
    tuiButtonOptionsProvider,
    // TuiDataList,
    TuiDropdown,
    tuiDropdownOptionsProvider,
    TuiExpand,
    TuiHint,
    TuiIcon,
    TuiScrollbar,
} from '@taiga-ui/core';
import { TuiNavigation } from '@taiga-ui/layout';

@Component({
    selector: 'app-sidenav',
    standalone: true,
    imports: [TuiExpand, TuiIcon, TuiDropdown, TuiScrollbar, TuiButton, TuiNavigation, TuiHint],
    providers: [
        tuiButtonOptionsProvider({ size: 's', appearance: 'flat' }),
        tuiDropdownOptionsProvider({ appearance: 'dropdown-navigation' }),
    ],
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
