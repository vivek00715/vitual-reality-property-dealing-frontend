import {AfterViewInit, Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
import {HouseModelService} from '../house-model.service';

enum houseModelMode {
  PAINT_WALL,
  WALL_TEXTURE,
  FLOOR_TEXTURE,
  FLOOR_OBJECTS,
  WALL_OBJECTS,
  REMOVE_OBJECTS
}

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
  mode = houseModelMode.PAINT_WALL; // 0: paint wall, 1: wall texture, 3: floor texture, 4: place objects

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
          // shader: flat
          wall.setAttribute('shader', 'flat');
          const wallPaintSide1 = document.createElement('a-plane');
          const wallPaintSide2 = document.createElement('a-plane');
          const wallPaintSide3 = document.createElement('a-plane');
          const wallPaintSide4 = document.createElement('a-plane');
          wallPaintSide1.setAttribute('color', '#234e70');
          wallPaintSide1.setAttribute('height', WALL_HEIGHT);
          wallPaintSide1.setAttribute('position', `0 0 ${+WALL_SIZE / 1.96}`);
          wallPaintSide2.setAttribute('color', '#234e70');
          wallPaintSide2.setAttribute('height', WALL_HEIGHT);
          wallPaintSide2.setAttribute('position', `${+WALL_SIZE / 1.94} 0 0`);
          wallPaintSide2.setAttribute('rotation', '0 90 0');

          wallPaintSide3.setAttribute('color', '#234e70');
          wallPaintSide3.setAttribute('height', WALL_HEIGHT);
          wallPaintSide3.setAttribute('position', `0 0 -${+WALL_SIZE / 1.96}`);
          wallPaintSide3.setAttribute('rotation', '180 0 0');

          wallPaintSide4.setAttribute('color', '#234e70');
          wallPaintSide4.setAttribute('height', WALL_HEIGHT);
          wallPaintSide4.setAttribute('position', `-${+WALL_SIZE / 1.94} 0 0`);
          wallPaintSide4.setAttribute('rotation', '180 90 0');

          wall.appendChild(wallPaintSide1);
          wall.appendChild(wallPaintSide2);
          wall.appendChild(wallPaintSide3);
          wall.appendChild(wallPaintSide4);

          wall.addEventListener('click', (event: any) => {
            if (this.mode === houseModelMode.WALL_OBJECTS) {

              const clickedPoint = event.detail.intersection.point;
              const rotation: any = this.player.nativeElement.getAttribute('rotation');
              rotation.x = 0;
              rotation.y = this.roundAngle(rotation.y);
              rotation.z = 0;
              const model = this.houseModelService.getWallObjectModel();
              const object = document.createElement('a-entity');
              object.setAttribute('gltf-model', model.src);
              // place object 1cm above surface of wall
              switch (rotation.y) {
                case 0:
                  clickedPoint.z += 0.1;
                  break;
                case 90:
                case -270:
                  clickedPoint.x += 0.1;
                  break;
                case 180:
                case -180:
                  clickedPoint.z -= 0.1;
                  break;
                case 270:
                case -90:
                  clickedPoint.x -= 0.1;
              }
              clickedPoint.x += model.offsetX;
              clickedPoint.y += model.offsetY;
              object.setAttribute('scale', model.scale);
              object.setAttribute('position', clickedPoint);
              object.setAttribute('rotation', rotation);
              this.walls.nativeElement.appendChild(object);
              object.addEventListener('click', () => {
                if (this.mode === houseModelMode.REMOVE_OBJECTS) {
                  object.remove();
                }
              });
            }
          });

          wallPaintSide1.addEventListener('click', () => {
            if (this.mode === houseModelMode.PAINT_WALL) {
              wallPaintSide1.setAttribute('color', this.wallColor);
            } else if (this.mode === houseModelMode.WALL_TEXTURE) {
              const {image, rx, ry} = this.houseModelService.getWallTexture();
              wallPaintSide1.setAttribute(
                'material',
                `src: ${image}; repeat: ${rx} ${ry}`);
            }
          });
          wallPaintSide2.addEventListener('click', () => {
            if (this.mode === houseModelMode.PAINT_WALL) {
              wallPaintSide2.setAttribute('color', this.wallColor);
            } else if (this.mode === houseModelMode.WALL_TEXTURE) {
              const {image, rx, ry} = this.houseModelService.getWallTexture();
              wallPaintSide2.setAttribute(
                'material',
                `src: ${image}; repeat: ${rx} ${ry}`);
            }
          });
          wallPaintSide3.addEventListener('click', () => {
            if (this.mode === houseModelMode.PAINT_WALL) {
              wallPaintSide3.setAttribute('color', this.wallColor);
            } else if (this.mode === houseModelMode.WALL_TEXTURE) {
              const {image, rx, ry} = this.houseModelService.getWallTexture();
              wallPaintSide3.setAttribute(
                'material',
                `src: ${image}; repeat: ${rx} ${ry}`);
            }
          });
          wallPaintSide4.addEventListener('click', () => {
            if (this.mode === houseModelMode.PAINT_WALL) {
              wallPaintSide4.setAttribute('color', this.wallColor);
            } else if (this.mode === houseModelMode.WALL_TEXTURE) {
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
      if (this.mode !== houseModelMode.FLOOR_OBJECTS) {
        return;
      }

      const clickedPoint = event.detail.intersection.point;
      const rotation: any = this.player.nativeElement.getAttribute('rotation');
      rotation.x = 0;
      // offset for invisible floor above camera
      clickedPoint.y += 0.2;
      const object = document.createElement('a-entity');
      const model = this.houseModelService.getFloorObjectModel();
      object.setAttribute('gltf-model', model.src);
      object.setAttribute('scale', model.scale);
      object.setAttribute('position', clickedPoint);
      object.setAttribute('rotation', rotation);
      object.addEventListener('click', () => {
        if (this.mode === houseModelMode.REMOVE_OBJECTS) {
          object.remove();
        }
      });
      this.aScene.nativeElement.appendChild(object);
    });
  }

  constructor(public houseModelService: HouseModelService) {
  }

  private roundAngle(angle: number): number {
    // rounds angle to nearest right angle
    const angles = [0, 90, 180, 270, 360, -90, -180, -270];
    const angleScores = angles.map(a => {
      return {score: Math.abs(angle - a), angle: a};
    });
    angleScores.sort((a, b) => a.score - b.score);
    // calculates score and gives the least difference
    return angleScores[0].angle % 360;
  }
}
