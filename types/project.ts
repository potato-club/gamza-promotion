export interface Project {
  id: number;
  title: string;
  category: string;
  snippet: string;
  thumbnailUrl?: string;
  url?: string;
}

export interface ApiResponse {
  status: string;
  message: string;
  data: Project[];
  timestamp: number;
}

export interface PageableRequest {
  page: number;
  size: number;
  sort: string[];
}
