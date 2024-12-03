import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MockupPage } from './mockup.page';

describe('MockupPage', () => {
  let component: MockupPage;
  let fixture: ComponentFixture<MockupPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(MockupPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
