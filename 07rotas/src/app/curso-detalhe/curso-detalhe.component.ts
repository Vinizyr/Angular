import { CursosService } from './../Components/cursos/cursos.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { debounce, Subscription } from 'rxjs';


@Component({
  selector: 'app-curso-detalhe',
  templateUrl: './curso-detalhe.component.html',
  styleUrls: ['./curso-detalhe.component.css']
})
export class CursoDetalheComponent implements OnInit {

  id: any | undefined; 
  inscricao: Subscription | undefined;
  curso: any

  constructor(private route: ActivatedRoute,
    private CursosService: CursosService, 
    private router: Router) {
    //this.id = this.route.snapshot.params['id']
    
   }

  ngOnInit(): void {
    this.route.params.subscribe(
      (params: any) => {
        this.id = params ['id'];

        this.curso = this.CursosService.getCurso(this.id)

        if (this.curso == null){
            this.router.navigate(['/naoEncontrado'])
        }
      }
    )
  }

}
