import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { SideNavComponent } from './sidenav.component';

describe('NavbarComponent', () => {
    let component: SideNavComponent;
    let fixture: ComponentFixture<SideNavComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [SideNavComponent, RouterTestingModule],
        }).compileComponents();

        fixture = TestBed.createComponent(SideNavComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
});
