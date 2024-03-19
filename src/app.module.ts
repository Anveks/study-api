import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsModule } from './products/products.module';

@Module({
  imports: [ProductsModule], // declare the controllers here
  controllers: [AppController], // responsible for getting the requests and returning responses
  providers: [AppService], // classes-services injectable to the controllers
})
export class AppModule {}
