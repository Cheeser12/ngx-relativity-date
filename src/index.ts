import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RelativityDate } from './relativity-date/relativity-date.library';
import { IDateModuleConfiguration } from './config/relativity-date-config.library';

declare global {
    // tslint:disable-next-line: interface-name
    interface Date {
        relativityDate: RelativityDate;
    }
}

@NgModule({
    imports: [CommonModule]
})
export class NgxRelativityDateModule {
    static forRoot(
        customConfiguration?: IDateModuleConfiguration
    ): ModuleWithProviders {
        Object.defineProperty(Date.prototype, 'relativityDate', {
            get: function(): RelativityDate {
                return new RelativityDate(this, true, customConfiguration);
            }
        });
        return {
            ngModule: NgxRelativityDateModule,
            providers: [{ provide: 'config', useValue: customConfiguration }]
        };
    }
}
