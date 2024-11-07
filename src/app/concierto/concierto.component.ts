import { Component, OnInit } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { ConciertoService } from '../services/concierto.service';

@Component({
  selector: 'app-concierto',
  templateUrl: './concierto.component.html',
  styleUrls: ['./concierto.component.css'],
  standalone: true,
  imports: [MatTableModule]
})
export class ConciertoComponent implements OnInit {
  displayedColumns: string[] = ['nombre', 'fecha'];
  dataSource: any[] = [];

  constructor(private conciertoService: ConciertoService) {}

  ngOnInit() {
    this.loadConciertos();
  }

  async loadConciertos() {
    try {
      const data = await this.conciertoService.getConciertos();
      this.dataSource = data;
    } catch (error) {
      console.error('Error loading conciertos', error);
    }
  }
}