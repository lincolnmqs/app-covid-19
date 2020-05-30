import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor() {
    this.getAPI();
  }
  
  async getAPI(){
    const chamada1 = await fetch('https://api.covid19api.com/world/total', { method: 'GET' });
    
    const dados1 = await chamada1.json();
    
    console.log(dados1);
    
    const valores = document.querySelectorAll('#dados');
    
    valores[0].innerHTML = dados1.TotalConfirmed;
    valores[1].innerHTML = dados1.TotalDeaths;
    valores[2].innerHTML = dados1.TotalRecovered;
    
    const chamada2 = await fetch('https://api.covid19api.com/stats', { method: 'GET' });
    
    const dados2 = await chamada2.json();
    
    console.log(dados2);
    
    const atualizacao = document.querySelector('#atualizacao');
    
    atualizacao.innerHTML = new Date(dados2.AllUpdated).toLocaleString();
  }

}
