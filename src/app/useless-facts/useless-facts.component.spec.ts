import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UselessFactsComponent } from './useless-facts.component';

describe('UselessFactsComponent', () => {
  let component: UselessFactsComponent;
  let fixture: ComponentFixture<UselessFactsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UselessFactsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UselessFactsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
