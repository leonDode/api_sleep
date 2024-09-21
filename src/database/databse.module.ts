import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Users } from 'src/users/entities/users.entity';

import { DataSourceOptions } from 'typeorm';

export const dataSourceOptions: DataSourceOptions = {
        type: 'postgres',
        host: 'viaduct.proxy.rlwy.net',
        port: 27696,
        username: 'postgres',
        password: 'rykdmIMfaVgDDPrYpeNYOSCXNxCDVCLf',
        database: 'railway',
        entities: [Users],
        synchronize: true
}

@Module({
    imports: [TypeOrmModule.forRootAsync({
        useFactory: () => {
            return {
                ...dataSourceOptions

            }
        } 
    })]
})
export class DatabaseModule {}
