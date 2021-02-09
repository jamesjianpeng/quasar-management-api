import { MapperService } from '../../core/mapper.service';
export declare class TokenService {
    private mapperService;
    constructor(mapperService: MapperService);
    refreshToken(): void;
}
