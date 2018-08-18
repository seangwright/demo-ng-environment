import { TestBed, async } from '@angular/core/testing';

import { AppComponent } from './app.component';
import { EnvironmentService } from '@app/environment.service';
import { IEnvironment } from '@environments/ienvironment';

describe('AppComponent', () => {
  const mockEnvironment: IEnvironment = {
    apiHost: '',
    apiUrl: 'test test test',
    enableDebugTools: false,
    logLevel: 'debug',
    production: false
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
      providers: [
        { provide: EnvironmentService, useValue: mockEnvironment }
      ]
    }).compileComponents();
  }));

  it('should be using the configured environment settings', async(() => {
    const fixture = TestBed.createComponent(AppComponent);

    expect(fixture.componentInstance.apiUrl).toBe(mockEnvironment.apiUrl);
  }));
});
