import { Component, OnInit } from '@angular/core';
import {PropertyCreationDataService} from '../property-creation-data.service';

@Component({
  selector: 'app-property-create-images',
  templateUrl: './property-create-images.component.html',
  styleUrls: ['./property-create-images.component.scss']
})
export class PropertyCreateImagesComponent implements OnInit {

  constructor(public propertyData: PropertyCreationDataService) { }

  ngOnInit(): void {
  }
  addFile(event: {currentFiles: File[]}): void {
    this.propertyData.images = event.currentFiles;
  }

  handleRemove(event: {file: File}): void {
    this.propertyData.images = this.propertyData.images.filter(image => image !== event.file);
  }

}
