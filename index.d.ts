import { Client } from "discord.js";
import { Message } from "discord.js";

export type RamTypes = 'MB' | 'GB'
export type errorTypes = 'reply' | 'send'

export class JDaniel_Util {
    /**
    * Cliente de Discord.
    */
    constructor(client: Client);
    /**
    * Generas un Numero al azar.
    */
    public random(min: number, max: number): number;
    /**
    * Obtiene uno o más items de un array al azar.
    */
    public randomText(array: any[], length?: number): any[];
    /**
    * Genera un texto al azar de la longitud que desees.
    */
    public randomString(length: number): string;
    /**
    * Obtiene el uso de Memoria RAM en MB y GB.
    */
    public ramUsage(decimals?: number, format?: RamTypes): string;
    /**
    * Obtiene el uso de CPU.
    */
    public cpuUsage(decimals?: number): string;
    /**
    * Carga los comandos en una carpeta y añade una propiedad de comandos a la clase cliente.
    */
    public loadCommands(client: Client, path: string): void;
    /**
    * Meme al Azar.
    */
    public meme(): string;
    /**
    * Obtiene la información de un Miembro.
    */
    public getMember(message: Message, id: string, returnAuthor?: boolean): object;
    /**
    * Obtiene la información de un Usuario.
    */
    public getUser(message: Message, id: string, returnAuthor?: boolean): object
    /**
    * Obtene el JSON de una Api.
    */
    public fetch(URL: string, headers?: object): object
    /**
    * Crea aun Array con un String reemplaznado los espacios.
    */
    public argsIfy(message: Message, prefix: string): object
    /**
    * Obtiene una Imagen al azar de Rei Chiquita (En Español).
    */
    public rei(): string
    /**
    * Envia un Error.
    */
    public error(message: Message, error: string, type?: errorTypes): void
    /**
    * Compruebe si su texto tiene alguna palabra especificada.
    */
    public has(array: any[], message: string): boolean
    /**
    * Recuento real de los Usuarios que utilizan su Bot de Discord.
    */
    public allMembersCount(client: Client): number
    /**
    * Busqueda en la Rule34.
    */
    public rule34(busqueda?: string): object
} 