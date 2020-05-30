import { Component } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  constructor() {
    this.getAPI();
  }
  
  async getAPI(){
    const chamada1 = await fetch('https://restcountries.eu/rest/v2/name/brazil', { method: 'GET' });
    
    const dados1 = await chamada1.json();
    
    console.log(dados1[0]);
    
    document.querySelector('.logo').setAttribute('src', dados1[0].flag);
    
    const chamada2 = await fetch('https://api.covid19api.com/dayone/country/brazil', { method: 'GET' });
    
    const dados2 = await chamada2.json();
    
    console.log(dados2);
    
    const tam = dados2.length - 1;
    
    const valores = document.querySelectorAll('#dados');
    
    valores[0].innerHTML = dados2[tam].Confirmed;
    valores[1].innerHTML = dados2[tam].Active;
    valores[2].innerHTML = dados2[tam].Deaths;
    valores[3].innerHTML = dados2[tam].Recovered;
    
    const atualizacao = document.querySelector('#atualizacao');
    
    atualizacao.innerHTML = new Date(dados2[tam].Date).toLocaleString();
  }

}