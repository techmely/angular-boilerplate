import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { LayoutDefaultComponent } from './layout-default.component';

describe('LayoutDefaultComponent', () => {
    let component: LayoutDefaultComponent;
    let fixture: ComponentFixture<LayoutDefaultComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [LayoutDefaultComponent, RouterTestingModule],
        }).compileComponents();

        fixture = TestBed.createComponent(LayoutDefaultComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
});
