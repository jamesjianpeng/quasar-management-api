import 'automapper-ts/dist/automapper';
export declare class MapperService {
    private mapper;
    constructor();
    private initializeMapper;
    createMap(source: string | (new () => any), destination: string | (new () => any)): AutoMapperJs.ICreateMapFluentFunctions;
    private static configure;
    map<K>(object: any | any[], destinationKey: string, sourceKey?: string, isArray?: boolean): K;
}
