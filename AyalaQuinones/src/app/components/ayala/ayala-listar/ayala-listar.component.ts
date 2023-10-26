import { Component, OnInit, ViewChild } from '@angular/core';
import { Equipaje } from 'src/app/models/Equipaje';
import { MatTableDataSource } from '@angular/material/table';
import { EquipajeService } from 'src/app/services/equipaje.service';

import { MatPaginator } from '@angular/material/paginator';
@Component({
  selector: 'app-ayala-listar',
  templateUrl: './ayala-listar.component.html',
  styleUrls: ['./ayala-listar.component.css'],
})
export class AyalaListarComponent implements OnInit {
  dataSource: MatTableDataSource<Equipaje> = new MatTableDataSource();
  displayedColumns: string[] = ['codigo', 'estado', 'peso'];
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private eS: EquipajeService) {}

  ngOnInit(): void {
    /* this.eS.list().subscribe((data) => {
      this.dataSource.data = data;
    }); */
    this.eS.list().subscribe((data) => {
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.paginator = this.paginator;
    });

    this.eS.getList().subscribe(data=>{
      this.dataSource=new MatTableDataSource(data);
      this.dataSource.paginator=this.paginator;
    })
  }
  ngAfterViewInit() {
    // this.dataSource.paginator = this.paginator;
  }
}
