import { Video } from './video.model';
import { PhotoGallery } from './photo-gallery.model';

export interface Artist{
  _id: string;
  username: string;
  password: string;
  name: string;
  date_of_birth: string;
  artistic_name: string;
  videos: Video[];
  photos_gallery: PhotoGallery[];
  styles: string[];
  role: string;
}
