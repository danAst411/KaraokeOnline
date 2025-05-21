import { Dashboard } from './../../../interfaces/dashboard';
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardService } from '../../../services/dashboard.service';
@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule],
  providers: [DashboardService], // Ensure DashboardService is provided
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})

export class DashboardComponent implements OnInit {
  dashboardData: any = null;

  constructor(private dashboardService: DashboardService) {}

  ngOnInit(): void {
    this.fetchDashboardData();
  }

  fetchDashboardData(): void {
    this.dashboardService.getDashboardData().subscribe({
      next: (data) => {
        this.dashboardData = data;
      },
      error: (err) => {
        console.error('Error al obtener los datos del dashboard', err);
      }
    });
  }
}
