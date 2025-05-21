import { Component, ElementRef, ViewChild, AfterViewInit, OnDestroy, Inject, PLATFORM_ID } from '@angular/core';

import { isPlatformBrowser } from '@angular/common';
import { BannerNoticiasComponent } from '../banner-noticias/banner-noticias.component';

@Component({
  selector: 'app-reproductor',
  standalone: true,
  imports: [BannerNoticiasComponent],
  templateUrl: './reproductor.component.html',
  styleUrl: './reproductor.component.css'
})
export class ReproductorComponent  {
  
}
