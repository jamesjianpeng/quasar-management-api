export interface ILoggingOptions {
    [key: string]: any;
    service: string;
    fileLocation?: string;
}
export interface ILoggingCreateOption {
    level: string;
}
export declare type ILoggingCreateOptions = ILoggingCreateOption[];
export interface ILog {
    level: string;
    text: string;
}
