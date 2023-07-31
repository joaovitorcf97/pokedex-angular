import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PokeHeaderComponent } from './poke-header/poke-header.component';
import { PokeListComponent } from './poke-list/poke-list.component';
import { PokeSearchComponent } from './poke-search/poke-search.component';

@NgModule({
  declarations: [PokeHeaderComponent, PokeSearchComponent, PokeListComponent],
  imports: [CommonModule, RouterModule],
  exports: [PokeHeaderComponent, PokeSearchComponent, PokeListComponent],
})
export class SharedModule {}
