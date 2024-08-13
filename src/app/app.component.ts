import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AuthService } from '@lib/services';
import { ThemeService } from '@lib/services/theme';
import { TuiAlert, TuiDialog, TuiRoot } from '@taiga-ui/core';
import { TUI_SANITIZER } from '@taiga-ui/legacy';
import { NgDompurifySanitizer } from '@tinkoff/ng-dompurify';
import { LayoutDefaultComponent } from './lib/components/layouts/default/layout-default.component';

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [CommonModule, RouterModule, LayoutDefaultComponent, TuiRoot, TuiAlert, TuiDialog],
    templateUrl: './app.component.html',
    styleUrls: ['./app.style.less'],
    providers: [{ provide: TUI_SANITIZER, useClass: NgDompurifySanitizer }],
})
export class AppComponent implements OnInit {
    isAuthenticated$ = inject(AuthService).isAuthenticated$;

    private readonly _themeService = inject(ThemeService);

    ngOnInit(): void {
        this._themeService.init();
    }
}
