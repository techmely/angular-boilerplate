import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FooterComponent, NavbarComponent, SideNavComponent } from '@lib/components';

@Component({
    selector: 'app-layout-default',
    standalone: true,
    imports: [CommonModule, NavbarComponent, FooterComponent, SideNavComponent],
    templateUrl: './layout-default.component.html',
    styleUrl: './layout-default.style.less',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LayoutDefaultComponent {}
