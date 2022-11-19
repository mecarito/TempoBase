import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Album } from 'app-types';
import { Subscription } from 'rxjs';
import { AlbumService } from '../../shared/services/album.service';

@Component({
  selector: 'app-album-page',
  templateUrl: './album-page.component.html',
  styleUrls: ['./album-page.component.scss'],
})
export class AlbumPageComponent implements OnInit {
  albumSub!: Subscription;
  album!: Album;
  albumId!: string | null;

  constructor(
    private albumService: AlbumService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.albumId = this.route.snapshot.paramMap.get('id');
    this.albumSub = this.albumService.getAlbum(this.albumId).subscribe({
      next: (album) => (this.album = album),
      error: () => this.router.navigate(['']),
    });
  }
}
