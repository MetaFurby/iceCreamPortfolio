import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreModule } from '../core/core.module';
import { FeaturesRoutingModule } from './features-routing.module';
import { SharedModule } from '../shared/shared.module';
import { IntroComponent } from './intro/intro.component';
import { CompaniesComponent } from './companies/companies.component';
import { ServicesComponent } from './services/services.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';
import { FeatureContainerComponent } from './feature-container/feature-container.component';
import { FaqsComponent } from './faqs/faqs.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { GettingstartedComponent } from './gettingstarted/gettingstarted.component';

@NgModule({
  declarations: [
    IntroComponent,
    CompaniesComponent,
    ServicesComponent,
    TestimonialsComponent,
    FeatureContainerComponent,
    FaqsComponent,
    PortfolioComponent,
    GettingstartedComponent
  ],
  imports: [
    CommonModule,
    FeaturesRoutingModule,
    SharedModule,
    CoreModule
  ]
})
export class FeaturesModule { }
