import { Component, ViewChild, TemplateRef, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { Gallery, GalleryConfig, GalleryItemType, GalleryItem, ImageItem, ThumbnailsPosition, ImageSize } from '@ngx-gallery/core';
import { MediaChange, MediaObserver } from '@angular/flex-layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements OnInit {

	@ViewChild('itemTemplate') itemTemplate: TemplateRef<any>;
	readonly arr = [
	  {
	    type: 'image',
	    src: 'https://cdn.pixabay.com/photo/2020/07/15/19/50/parachute-5408876_960_720.jpg',
	    thumb: 'https://cdn.pixabay.com/photo/2020/07/15/19/50/parachute-5408876_960_720.jpg',
	    title: 'This is information for this slide : Number 1'
	  },
	  {
	    type: 'image',
	    src: 'https://cdn.pixabay.com/photo/2020/07/08/07/55/butterfly-5383001_960_720.jpg',
	    thumb: 'https://cdn.pixabay.com/photo/2020/07/08/07/55/butterfly-5383001_960_720.jpg',
	    title: 'This is information for this slide : Number 2'
	  },
	  {
	    type: 'image',
	    src: 'https://cdn.pixabay.com/photo/2020/07/10/20/25/wheat-field-5392067_960_720.jpg',
	    thumb: 'https://cdn.pixabay.com/photo/2020/07/10/20/25/wheat-field-5392067_960_720.jpg',
	    title: 'This is information for this slide : Number 3'
	  },
	  {
	    type: 'image',
	    src: 'https://cdn.pixabay.com/photo/2019/09/27/20/40/houses-4509404_960_720.jpg',
	    thumb: 'https://cdn.pixabay.com/photo/2019/09/27/20/40/houses-4509404_960_720.jpg',
	    title: 'This is information for this slide : Number 4'
	  },
	  {
	    type: 'video',
	    src: 'http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4',
	    thumb: 'http://laza.jalbum.net/Testing%20Base%20as%20site/Media/slides/big_buck_bunny.jpg',
	    poster: 'http://laza.jalbum.net/Testing%20Base%20as%20site/Media/slides/big_buck_bunny.jpg'
	  },
	  {
	    type: 'youtube',
	    src: 'Mp3Aynsm4Eg'
	  },
	  {
	    type: 'iframe',
	    src: 'https://infinite-integrations.com/',
	    thumb: 'https://infinite-integrations.com/images/team/team-1.jpg'
	  }
	];

  readonly media$: Observable<GalleryConfig>;

  constructor(private _gallery: Gallery, mediaObserver: MediaObserver) {
    this.media$ = mediaObserver.media$.pipe(
      map((res: MediaChange) => {
        if (res.mqAlias === 'sm' || res.mqAlias === 'xs') {
          return {
            thumbWidth: 80,
            thumbHeight: 80
          };
        }
        return {
          thumbWidth: 120,
          thumbHeight: 90
        };
      })
    );
  }

  ngOnInit() {
    const galleryRef = this._gallery.ref('mixed');
    this.arr.map((item: any) => {
      switch (item.type) {
        case GalleryItemType.Image:
          galleryRef.addImage({src: item.src, thumb: item.thumb, title: item.title});
          break;
        case GalleryItemType.Video:
          galleryRef.addVideo({src: item.src, thumb: item.thumb, poster: item.poster});
          break;
        case GalleryItemType.Youtube:
          galleryRef.addYoutube({src: item.src});
          break;
        default:
          galleryRef.addIframe({src: item.src, thumb: item.thumb});
      }
    });
  }
}