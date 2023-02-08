import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { firstValueFrom } from "rxjs";
import { ProjectSummary } from "../models/project";

@Injectable()
export class ProjectService{
    constructor(private http: HttpClient) {}

    getProjects(): Promise<ProjectSummary[]> {
        return firstValueFrom(
            this.http.get<ProjectSummary[]>('/api/projects')
        )
    }
}