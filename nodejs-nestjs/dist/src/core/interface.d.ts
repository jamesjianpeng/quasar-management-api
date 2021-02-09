export interface IServerResponse<T> {
    code?: 0 | 1 | 2 | 3 | 4;
    data?: T;
    msg?: string;
}
