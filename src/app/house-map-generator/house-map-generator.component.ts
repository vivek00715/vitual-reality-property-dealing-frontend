import {AfterViewInit, Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';

@Component({
  selector: 'app-house-map-generator',
  templateUrl: './house-map-generator.component.html',
  styleUrls: ['./house-map-generator.component.scss']
})
export class HouseMapGeneratorComponent implements OnInit, AfterViewInit {
  @Input() length!: number;
  @Input() breadth!: number;
  @Output() vrView = new EventEmitter<number[][]>();
  @ViewChild('canvas') canvas!: ElementRef<HTMLCanvasElement>;
  drawMode = true;

  context!: CanvasRenderingContext2D;

  private map: { fill: boolean, path: Path2D }[][] = [];
  private gridLength = 30; // height and width of each square grid tile on canvas
  private mouseDown = false;

  constructor() {
  }

  ngOnInit(): void {
  }

  getHeight(): number {
    return (this.breadth / this.length) * (this.getWidth());
  }

  getWidth(): number {
    return window.innerWidth * 0.8;
  }

  ngAfterViewInit(): void {
    const context = this.canvas.nativeElement.getContext('2d');
    if (context) {
      this.context = context;
    }
    this.initStuff();
    setTimeout(() => this.drawGridLines(), 100);
  }

  draw(): void {
    this.context.clearRect(0, 0, this.canvas.nativeElement.width, this.canvas.nativeElement.height);
    this.drawGridLines();
  }

  drawGridLines(): void {
    this.context.save();
    this.context.beginPath();
    for (let i = 0; i < this.map.length; i++) {
      for (let j = 0; j < this.map[i].length; j++) {
        const {path, fill} = this.map[i][j];
        if (fill) {
          this.context.fill(path);
        } else {
          this.context.stroke(path);
        }

        // this.context.rect(this.gridLength * i, this.gridLength * j, this.gridLength, this.gridLength);
      }
    }
    this.context.stroke();
    this.context.restore();
  }

  handleMouseMove(event: MouseEvent): void {
    const rect = this.canvas.nativeElement.getBoundingClientRect();
    const x = event.clientX - rect.x;
    const y = event.clientY - rect.y;
    if (!this.mouseDown) {
      return;
    }

    for (let i = 0; i < this.map.length; i++) {
      for (let j = 0; j < this.map[i].length; j++) {
        if (this.context.isPointInPath(this.map[i][j].path, x, y)) {
          // we have clicked this path
          if (this.map[i][j].fill === this.drawMode) {
            return;
          }
          this.map[i][j].fill = this.drawMode;
          this.draw();
        }
      }
    }
  }

  handleMouseDown(event: MouseEvent) {
    this.mouseDown = true;
  }

  handleMouseUp(event: MouseEvent) {
    this.mouseDown = false;
  }

  initStuff(): void {
    this.map = [];
    for (let i = 0; i < this.getWidth(); i += this.gridLength) {
      const arr = [];
      for (let j = 0; j < this.getHeight(); j += this.gridLength) {
        const path = new Path2D();
        path.rect(i, j, this.gridLength, this.gridLength);
        arr.push({
          fill: false,
          path
        });
      }
      this.map.push(arr);
    }
  }

  getNumberMap(): number[][] {
    return this.map.map((row, i) => {
        return row.map((col, j) => {
          if (i === 0 || j === 0 || i === this.map.length - 1 || j === row.length - 1) {
            return 1;
          }
          if (col.fill) {
            return 1;
          }
          return 0;
        });
      }
    );
  }

  emitVrData(): void {
    this.vrView.emit(this.getNumberMap());
  }
}
