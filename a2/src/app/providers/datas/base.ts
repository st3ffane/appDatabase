/**
 * Les informations sur une base de données
 */
import {Table} from "./table";
import {Relation} from "./relation";

export class Base{

    
    file_url: string;
    db_name: string;
    db_type: string;
    db_port: number;
    host: string;
    login: string;
    passwrd: string;

    tables:Array<Table>;
    relations: Array<Relation>;

    
    constructor(args:any){
        args = args || {};
        this.file_url = args.file_url || 'a/path',//chemin vers le fichier sql/dump ou enregistrer
        this.db_name = args.db_name || "nom_de_la_base",
        this.db_type = args.db_type || "postgres",//ou mysql, mongo....
        this.db_port = this.db_port || 5432,
        this.host = args.host || "host",
        this.login = args.login || "loginUtilisateur",
        this.passwrd = args.passwrd || "passwordUtilisateur";

        //a voir...
        this.tables = args.tables || [];
        this.relations = args.relations || [];
    }

}