import {Injectable} from '@angular/core';

interface Texture {
  image: string;
  thumb: string;
  rx: number;
  ry: number;
}

interface ObjectModel {
  src: string;
  image: string;
  scale: string;
}

interface WallModel {
  src: string;
  image: string;
  scale: string;
  offsetX: number;
  offsetY: number;
}

@Injectable({
  providedIn: 'root'
})
export class HouseModelService {
  wallTextures: Texture[] = [];
  floorTextures: Texture[] = [];
  objectModels: ObjectModel[] = [];
  wallModels: WallModel[] = [];
  selectedWallIndex = 0;
  selectedFloorTexture = 2;
  selectedObjectModel = 0;
  selectedWallModel = 0;

  constructor() {
    this.wallTextures = [
      {image: '', thumb: '/assets/textures/t0_thumbs.jpg', rx: 1, ry: 4},
      {image: '/assets/textures/t1.jpg', thumb: '/assets/textures/t1_thumbs.jpg', rx: 1, ry: 4},
      {image: '/assets/textures/t2.jpg', thumb: '/assets/textures/t2_thumbs.jpg', rx: 1, ry: 5},
      {image: '/assets/textures/t3.jpg', thumb: '/assets/textures/t3_thumbs.jpg', rx: 1, ry: 10},
      {image: '/assets/textures/t4.jpg', thumb: '/assets/textures/t4_thumbs.jpg', rx: 1, ry: 5},
      {image: '/assets/textures/t5.jpg', thumb: '/assets/textures/t5_thumbs.jpg', rx: 1, ry: 7},
      {image: '/assets/textures/t6.jpg', thumb: '/assets/textures/t6_thumbs.jpg', rx: 1, ry: 7},
      {image: '/assets/textures/t7.jpg', thumb: '/assets/textures/t7_thumbs.jpg', rx: 1, ry: 10},
      {image: '/assets/textures/t8.jpg', thumb: '/assets/textures/t8_thumbs.jpg', rx: 1, ry: 5},
      {image: '/assets/textures/t9.jpg', thumb: '/assets/textures/t9_thumbs.jpg', rx: 1, ry: 5},
      {image: '/assets/textures/t10.jpg', thumb: '/assets/textures/t10_thumbs.jpg', rx: 1, ry: 5},
    ];

    this.floorTextures = [
      {image: '/assets/floor/f1.jpg', thumb: '/assets/floor/f1_thumbs.jpg', rx: 500, ry: 500},
      {image: '/assets/floor/f2.jpg', thumb: '/assets/floor/f2_thumbs.jpg', rx: 500, ry: 500},
      {image: '/assets/floor/f3.jpg', thumb: '/assets/floor/f3_thumbs.jpg', rx: 500, ry: 500},
      {image: '/assets/floor/f4.jpg', thumb: '/assets/floor/f4_thumbs.jpg', rx: 500, ry: 500},
      {image: '/assets/floor/f5.jpg', thumb: '/assets/floor/f5_thumbs.jpg', rx: 250, ry: 500},
      {image: '/assets/floor/f6.jpg', thumb: '/assets/floor/f6_thumbs.jpg', rx: 250, ry: 500},
      {image: '/assets/floor/f7.jpg', thumb: '/assets/floor/f7_thumbs.jpg', rx: 500, ry: 500},
    ];

    this.objectModels = [
      {
        src: 'url(/assets/models/sofa/arm-chair/model.gltf)',
        image: '/assets/models/sofa/arm-chair/thumb.png',
        scale: '0.5 0.5 0.5'
      },
      {
        src: 'url(/assets/models/sofa/recliner-sofa/model.gltf)',
        image: '/assets/models/sofa/recliner-sofa/thumb.png',
        scale: '0.8 0.8 0.8'
      },
      {
        src: 'url(/assets/models/sofa/sofa-1/model.gltf)',
        image: '/assets/models/sofa/sofa-1/thumb.png',
        scale: '1.2 1.2 1.2'
      },
      {
        src: 'url(/assets/models/sofa/sofa-2/model.gltf)',
        image: '/assets/models/sofa/sofa-2/thumb.png',
        scale: '1.2 1.2 1.2'
      },
      {
        src: 'url(/assets/models/sofa/sofa-3/model.gltf)',
        image: '/assets/models/sofa/sofa-3/thumb.png',
        scale: '1.5 1.5 1.5'
      },
      {
        src: 'url(/assets/models/chair/chair-1/model.gltf)',
        image: '/assets/models/chair/chair-1/thumb.png',
        scale: '0.5 0.5 0.5'
      },
      {
        src: 'url(/assets/models/chair/chair-2/model.gltf)',
        image: '/assets/models/chair/chair-2/thumb.png',
        scale: '2 2 2'
      },
      {
        src: 'url(/assets/models/chair/chair-3/model.gltf)',
        image: '/assets/models/chair/chair-3/thumb.png',
        scale: '2 2 2'
      },

    ];

    this.wallModels = [
      {
        src: 'url(/assets/models/wall/television/model.gltf)',
        image: '/assets/models/wall/television/thumb.png',
        scale: '0.8 0.8 0.8',
        offsetX: 0,
        offsetY: -1.5
      },
      {
        src: 'url(/assets/models/wall/window/model.gltf)',
        image: '/assets/models/wall/window/thumb.png',
        scale: '1 1 1',
        offsetX: 0,
        offsetY: -1.2
      }
    ];
  }

  getWallTexture(): Texture {
    return this.wallTextures[this.selectedWallIndex];
  }

  getFloorTexture(): Texture {
    return this.floorTextures[this.selectedFloorTexture];
  }

  getFloorObjectModel(): ObjectModel {
    return this.objectModels[this.selectedObjectModel];
  }

  getWallObjectModel(): WallModel {
    return this.wallModels[this.selectedWallModel];
  }
}
