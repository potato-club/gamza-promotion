import { PageableRequest, ResponseDtoListProjectListResponse } from '@/types/project';

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'https://api.example.com';

export async function fetchProjects(pageable?: Partial<PageableRequest>): Promise<ResponseDtoListProjectListResponse> {
  const defaultParams: PageableRequest = {
    page: 0,
    size: 20,
    sort: ['createdAt'],
  };

  const params = { ...defaultParams, ...pageable };

  // URLSearchParams를 사용하되, 정수값이 제대로 전달되도록 설정
  const searchParams = new URLSearchParams();
  searchParams.append('page', params.page.toString());
  searchParams.append('size', params.size.toString());

  // sort 배열 처리
  const sortArray = params.sort.length > 0 ? params.sort : ['createdAt'];
  sortArray.forEach(sortItem => {
    searchParams.append('sort', sortItem);
  });

  console.log('Fetching projects with params:', {
    page: params.page,
    size: params.size,
    sort: sortArray
  });

  try {
    const response = await fetch(`${API_BASE_URL}/api/v1/projects?${searchParams}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      // Next.js에서 API 응답을 캐시하되, 개발 환경에서는 캐시하지 않음
      next: {
        revalidate: process.env.NODE_ENV === 'development' ? 0 : 300
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data: ResponseDtoListProjectListResponse = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching projects:', error);

    return {
      status: 'error',
      message: 'Failed to fetch projects',
      data: [],
      timestamp: Date.now(),
    };
  }
}

export async function fetchProjectById(id: number) {
  try {
    const response = await fetch(`${API_BASE_URL}/api/v1/projects/${id}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error('Error fetching project:', error);
    throw error;
  }
}
