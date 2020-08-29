import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-compras',
  templateUrl: './form-compras.component.html',
  styleUrls: ['./form-compras.component.css']
})
export class FormComprasComponent implements OnInit {

  //variables de registro
  nombre: string;
  productoEscogido: string;
  //elementos del arreglo
  compras: any;
  //arreglo de compras
  comprasRegistros = [];
  //total a pagar
  totalPago: number;
  //descuento a cliente
  descuentoCliente: number = 0;
  //dui del cliente
  duiCliente: string;
  //variable para mostrar tabla de registros
  verTabla: boolean = false;

  //variable con los productos a vender
  articulosTienda = [
    { "nombre": "Tortas", "precio": 2.00, "codigoProducto": "ts200" },
    { "nombre": "Pan con pollo", "precio": 1.50, "codigoProducto": "po150" },
    { "nombre": "Pupusas", "precio": 0.25, "codigoProducto": "ps100" },
    { "nombre": "Hot Dogs", "precio": 1.00, "codigoProducto": "hs50" },
    { "nombre": "Sandwich", "precio": 0.5, "codigoProducto": "sh00" }
  ];

  constructor() { }

  //evento submit
  onSubmit() {
    //creando arreglo
    this.compras = {
      "nombre": this.nombre,
      "productoComprado": this.productoEscogido,
      "totalCompra": this.totalPago,
      "descuento": this.descuentoCliente
    };
  }

  //ver tabla de registros
  verTablaR(){
    this.verTabla = true;
  }
  nverTablaR(){
    this.verTabla = false;
  }

  ngOnInit(): void {
  }

}
