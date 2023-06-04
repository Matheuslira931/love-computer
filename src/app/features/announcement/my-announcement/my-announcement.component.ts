import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

export interface Item {
  id: number;
  name: string;
}

const ITEMS_DATA: Item[] = [
  { id: 1, name: 'Item 1' },
  { id: 2, name: 'Item 2' },
  { id: 3, name: 'Item 3' },
  // Add more items as needed
];

@Component({
  selector: 'app-my-announcement',
  templateUrl: './my-announcement.component.html',
  styleUrls: ['./my-announcement.component.scss']
})
export class MyAnnouncementComponent implements OnInit {

  displayedColumns: string[] = ['select', 'id', 'name'];
  dataSource = new MatTableDataSource<Item>(ITEMS_DATA);

  selectedItems: Item[] = [];
  constructor() { }

  ngOnInit(): void {

  }

}
