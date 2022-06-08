import { TransferenciaService } from './../services/transferencia.service';
import { Component, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { Transferencia } from 'src/models/transferencia.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-transfer',
  templateUrl: './newTransfer.component.html',
  styleUrls: ['./newTransfer.component.scss'],
})
export class newTransferComponent {
  @Output() aoTransferir = new EventEmitter<any>();

  valor: number=0;
  destino: number=0;
  validar(){
    const emissao = { valor: this.valor, destino: this.destino };
    if (this.valor == 0 || this.destino == 0) {
      console.log("Desprovido de Atenção");
      alert("DIGITA CERTO ACÉFALO");
      location.reload();
    }
    else this.transferir(emissao)
  }

  constructor(private service: TransferenciaService, private router: Router) { }

  transferir(emissao) {
    console.log('Solicitada nova transferência');

    const valorEmitir: Transferencia = {valor:this.valor,destino:this.destino}

    this.service.adicionar(valorEmitir).subscribe(

      (resultado)=>{

      console.log(resultado);
      this.limpaCampos();
      this.router.navigateByUrl('extrato');
    },
    (error)  => console.error(error)
    );
  }

  limpaCampos(){
    this.valor = 0;
    this.destino = 0;
  }
}
