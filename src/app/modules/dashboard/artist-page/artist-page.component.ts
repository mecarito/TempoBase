import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-artist-page',
  templateUrl: './artist-page.component.html',
  styleUrls: ['./artist-page.component.scss']
})
export class ArtistPageComponent implements OnInit {
  artistId!: string | null

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {    
    this.artistId = this.route.snapshot.paramMap.get('id')   
  }

}
