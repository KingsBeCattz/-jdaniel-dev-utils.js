import { Client } from "discord.js";
import { Message } from "discord.js";

export type RamTypes = 'MB' | 'GB'
export type errorTypes = 'reply' | 'send'
export type argsIfyTypes = Message | string

export class JDaniel_Util {
    /**
    * Cliente de Discord.
    */
    constructor(client: Client);
    /**
    * Actualizas el package.
    */
    public update(min: number, max: number): number;
    /**
    * Generas un Numero al azar.
    */
    public random(version?: string): string;
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
    public argsIfy(message: argsIfyTypes): object
    /**
    * Obtiene una Imagen al azar de Rei Chiquita (En Español).
    */
    public rei(): string
    /**
    * Envia un Error.
    */
    public error(message: Message, data: any, type?: errorTypes): void
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
    /**
    * Haces una operación matemática.
    */
    public math(op: number): number
    /**
    * Verificas si algo es Hex.
    */
    public isHex(hex: string): boolean
    /**
    * Verificas si algo es un snowflake.
    */
    public isSnowflake(snowflake: string): boolean
    /**
    * Verificas si algo esta baneado.
    */
    public isBanned(user: object, guild: object): boolean
    /**
    * Verificas si votó por tu bot en Top.gg.
    */
    public isVoted(user: object, token: string): boolean
    /**
    * Obtienes la información de un webhook (Funciona similar a un Canal (https://discord.js.org/#/docs/discord.js/stable/class/WebhookClient)).
    */
    public getWebhook(url: string): object
    /**
    * Obtienes el codigo fuente de la función que quieras de este package.
    */
    public getSource(func: string): string
} 