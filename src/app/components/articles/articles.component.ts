import { Component, Input, OnInit } from '@angular/core';
import { Article } from 'src/app/models/article';
import {ActivatedRoute,Router} from "@angular/router";
import { ArticleService } from 'src/app/services/article.service';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent implements OnInit {
  @Input() totalCount:number;
  @Input() articles:Article[];
  @Input() page:number;
  @Input() pageSize:number;
  @Input() loadingItem:number;
  default_article:string = "assets/article.png"


  constructor(private router:Router,private route:ActivatedRoute,public articleService:ArticleService) { }

  createRange()
  {
    var items:number[] = [];
    for(var i=1;i<=this.loadingItem;i++){
      items.push(i);
    }
    return items;
  }

  ngOnInit(): void {
  }

  pageChanged(event){
    this.articleService.loading=true;

    this.page = event;
    this.router.navigateByUrl(`/sayfa/${this.page}`);


  }

}