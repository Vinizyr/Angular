import { Subscription } from 'rxjs';
import { CursosService } from './cursos.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit {

  cursos: any[] | any; 
  pagina: number | any; 
  inscricao: Subscription | any 
  constructor(
    private CursosService: CursosService,
    private route: ActivatedRoute,
    private router: Router) {}

  ngOnInit() {
    this.cursos = this.CursosService.getCursos()

    this.inscricao = this.route.queryParams.subscribe(
      (queryParams: any) => {
        this.pagina = queryParams['pagina']
      }
    )
  }
  nhOnDestroy(){
    this.inscricao.unsubiscribe();
  }

  proximaPagina(){
    this.router.navigate(['/cursos'],
    {queryParams: {'pagina': ++this.pagina}})
  }

}
