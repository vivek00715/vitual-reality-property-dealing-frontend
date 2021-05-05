import {AfterViewInit, Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
import {HouseModelService} from '../house-model.service';

@Component({
  selector: 'app-house-model-viewer',
  templateUrl: './house-model-viewer.component.html',
  styleUrls: ['./house-model-viewer.component.scss']
})
export class HouseModelViewerComponent implements OnInit, AfterViewInit {
  @Input() vrWallData: number[][] = [];
  @ViewChild('aScene') aScene!: ElementRef<HTMLElement>;
  @ViewChild('walls') walls!: ElementRef<HTMLElement>;
  @ViewChild('floor') floor!: ElementRef<HTMLElement>;
  @ViewChild('floorUpper') floorUpper!: ElementRef<HTMLElement>;
  @ViewChild('cursor') cursor!: ElementRef<HTMLElement>;
  @ViewChild('player') player!: ElementRef<HTMLElement>;
  wallColor = '#f0f8ff';
  mode = 0; // 0: paint wall, 1: wall texture, 3: floor texture, 4: place objects


  ngOnInit(): void {
  }

  generateWalls(): void {
    const WALL_SIZE = '1';
    const WALL_HEIGHT = '11';

    for (let x = 0; x < this.vrWallData.length; x++) {
      for (let y = 0; y < this.vrWallData[x].length; y++) {

        const i = (y * this.vrWallData.length) + x;
        const position = `${((x - (this.vrWallData.length / 2)) * +WALL_SIZE)} 1.5 ${(y - (this.vrWallData[x].length / 2)) * +WALL_SIZE}`;

        // if the number is 1 - 4, create a wall
        if (this.vrWallData[x][y] === 1) {
          const wall = document.createElement('a-box');
          this.walls.nativeElement.appendChild(wall);

          wall.setAttribute('width', WALL_SIZE);
          wall.setAttribute('height', WALL_HEIGHT);
          wall.setAttribute('depth', WALL_SIZE);
          wall.setAttribute('position', position);
          wall.setAttribute('static-body', 'mass:9000');
          wall.setAttribute('roughness', '1');
          wall.setAttribute('color', 'gray');
          wall.setAttribute('material', 'src: #plaster; repeat: 1 1');
          const wallPaintSide1 = document.createElement('a-plane');
          const wallPaintSide2 = document.createElement('a-plane');
          const wallPaintSide3 = document.createElement('a-plane');
          const wallPaintSide4 = document.createElement('a-plane');
          wallPaintSide1.setAttribute('color', 'aliceblue');
          wallPaintSide1.setAttribute('height', WALL_HEIGHT);
          wallPaintSide1.setAttribute('position', `0 0 ${+WALL_SIZE / 1.96}`);
          wallPaintSide2.setAttribute('color', 'aliceblue');
          wallPaintSide2.setAttribute('height', WALL_HEIGHT);
          wallPaintSide2.setAttribute('position', `${+WALL_SIZE / 1.94} 0 0`);
          wallPaintSide2.setAttribute('rotation', '0 90 0');

          wallPaintSide3.setAttribute('color', 'aliceblue');
          wallPaintSide3.setAttribute('height', WALL_HEIGHT);
          wallPaintSide3.setAttribute('position', `0 0 -${+WALL_SIZE / 1.96}`);
          wallPaintSide3.setAttribute('rotation', '180 0 0');

          wallPaintSide4.setAttribute('color', 'aliceblue');
          wallPaintSide4.setAttribute('height', WALL_HEIGHT);
          wallPaintSide4.setAttribute('position', `-${+WALL_SIZE / 1.94} 0 0`);
          wallPaintSide4.setAttribute('rotation', '180 90 0');

          wall.appendChild(wallPaintSide1);
          wall.appendChild(wallPaintSide2);
          wall.appendChild(wallPaintSide3);
          wall.appendChild(wallPaintSide4);

          wallPaintSide1.addEventListener('click', () => {
            if (this.mode === 0) {
              wallPaintSide1.setAttribute('color', this.wallColor);
            } else if (this.mode === 1) {
              const {image, rx, ry} = this.houseModelService.getWallTexture();
              wallPaintSide1.setAttribute(
                'material',
                `src: ${image}; repeat: ${rx} ${ry}`);
            }
          });
          wallPaintSide2.addEventListener('click', () => {
            if (this.mode === 0) {
              wallPaintSide2.setAttribute('color', this.wallColor);
            } else if (this.mode === 1) {
              const {image, rx, ry} = this.houseModelService.getWallTexture();
              wallPaintSide2.setAttribute(
                'material',
                `src: ${image}; repeat: ${rx} ${ry}`);
            }
          });
          wallPaintSide3.addEventListener('click', () => {
            if (this.mode === 0) {
              wallPaintSide3.setAttribute('color', this.wallColor);
            } else if (this.mode === 1) {
              const {image, rx, ry} = this.houseModelService.getWallTexture();
              wallPaintSide3.setAttribute(
                'material',
                `src: ${image}; repeat: ${rx} ${ry}`);
            }
          });
          wallPaintSide4.addEventListener('click', () => {
            if (this.mode === 0) {
              wallPaintSide4.setAttribute('color', this.wallColor);
            } else if (this.mode === 1) {
              const {image, rx, ry} = this.houseModelService.getWallTexture();
              wallPaintSide4.setAttribute(
                'material',
                `src: ${image}; repeat: ${rx} ${ry}`);
            }
          });
        }

      }
    }
  }

  setFloorTextureIndex(i: number): void {
    this.houseModelService.selectedFloorTexture = i;
    const {image, rx, ry} = this.houseModelService.getFloorTexture();
    this.floor.nativeElement.setAttribute('material', `src: ${image}; repeat: ${rx} ${ry}`);
  }


  ngAfterViewInit(): void {
    this.generateWalls();
    this.floor.nativeElement.addEventListener('click', (event: any) => {
      if (this.mode !== 3) {
        return;
      }

      const clickedPoint = event.detail.intersection.point;
      const rotation: any = this.player.nativeElement.getAttribute('rotation');
      rotation.x = 0;
      // offset for invisible floor above camera
      clickedPoint.y += 0.2;
      const object = document.createElement('a-entity');
      const model = this.houseModelService.getObjectModel();
      object.setAttribute('gltf-model', model.src);
      object.setAttribute('scale', model.scale);
      object.setAttribute('position', clickedPoint);
      object.setAttribute('rotation', rotation);
      object.addEventListener('click', () => {
        if (this.mode === 4) {
          object.remove();
        }
      });
      // object.addEventListener('mousemove', (clickEvent: any) => {
      //   const newClickedPoint = clickEvent.detail.intersection.point;
      //   newClickedPoint.y = 0;
      //   const newRotation: any = this.player.nativeElement.getAttribute('rotation');
      //   rotation.x = 0;
      //   object.setAttribute('position', newClickedPoint);
      //   object.setAttribute('rotation', newRotation);
      // });
      this.aScene.nativeElement.appendChild(object);
    });
  }

  constructor(public houseModelService: HouseModelService) {
  }
}
