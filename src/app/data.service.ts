import { Injectable,Optional } from "@angular/core";
import {LogService} from "./log.service";

@Injectable({providedIn: "root"})
export class DataService{

    private data: string[] = ["Pixel 7 pro", "Xiaomi 13 ultra", "Honor 100 pro","Vivo x100 pro"];
    constructor(@Optional()  private logService: LogService){}

    getData(): string[] {

        if (this.logService) this.logService.write("Операция получения данных")
        return this.data;
    }
    addData(name: string){
        this.data.push(name);
        if (this.logService) this.logService.write("Операция добавления данных")
    }
}