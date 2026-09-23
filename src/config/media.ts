/**
 * Auto-generated Media Assets from Pexels API
 * Project: versicher-ai
 * Zero attribution clutter on UI (Enterprise Clean Standard)
 */

export interface PhotoAsset {
  id: string;
  url: string;
  alt: string;
  avg_color: string;
}

export interface VideoAsset {
  id: string;
  videoUrl: string;
  posterUrl: string;
  width: number;
  height: number;
}

export interface MediaConfig {
  caseStudyPhoto: PhotoAsset;
  editorialPhotos: PhotoAsset[];
  ambientVideo: VideoAsset;
}

export const mediaConfig: MediaConfig = {
  caseStudyPhoto: {
    "id": "17483874",
    "url": "https://images.pexels.com/photos/17483874/pexels-photo-17483874.png?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    "alt": "Visual abstraction of neural networks in AI technology, featuring data flow and algorithms.",
    "avg_color": "#D1D2D5"
},
  editorialPhotos: [
    {
    "id": "18069814",
    "url": "https://images.pexels.com/photos/18069814/pexels-photo-18069814.png?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    "alt": "Modern abstract 3D render showcasing a complex geometric structure in cool hues.",
    "avg_color": "#A1A2AA"
},
    {
    "id": "17483873",
    "url": "https://images.pexels.com/photos/17483873/pexels-photo-17483873.png?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    "alt": "Abstract 3D render visualizing artificial intelligence and neural networks in digital form.",
    "avg_color": "#CECFCE"
},
    {
    "id": "18069816",
    "url": "https://images.pexels.com/photos/18069816/pexels-photo-18069816.png?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    "alt": "Dynamic 3D render of abstract geometric data paths with colorful blocks representing data flow.",
    "avg_color": "#9B969B"
}
  ],
  ambientVideo: {
    "id": "33387739",
    "videoUrl": "https://videos.pexels.com/video-files/33387739/14213844_640_360_30fps.mp4",
    "posterUrl": "https://images.pexels.com/videos/33387739/pexels-photo-33387739.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=630&w=1200",
    "width": 640,
    "height": 360
}
};
