import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { StoreModule } from './store/store.module';
import { StoreService } from './store/store.service';
import { CartService } from './store/cart/cart.service';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, StoreModule, HttpClientModule],
  providers: [StoreService, CartService],
  bootstrap: [AppComponent],
})
export class AppModule {}
