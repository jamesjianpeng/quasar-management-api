import { Module, DynamicModule } from '@nestjs/common';
import { LoginModule } from './login/login.module';
// import { UploadModule } from './upload/upload.module';
// import { UserModule } from './upload/upload.module';
import { ProductModule } from './product/product.module';

const dynamicModule: any[] = [
  LoginModule,
  // UploadModule,
  ProductModule
]
@Module({
  imports: dynamicModule,
  exports: dynamicModule
})
export class FeatureModule {}
