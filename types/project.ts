export interface ProjectListResponse {
  id: number;
  title: string;
  category: string;
  snippet: string;
  thumbnailUrl?: string;
  url?: string;
}

export interface ResponseDtoListProjectListResponse {
  status: string;
  message: string;
  data: ProjectListResponse[];
  timestamp: number;
}

export interface PageableRequest {
  page: number;
  size: number;
  sort: string[];
}
