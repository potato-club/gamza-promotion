import {
  PageableRequest,
  ResponseDtoListProjectListResponse,
} from "@/types/project";
import apiClient from "./apiClient";

// 프로젝트 목록을 가져오는 함수
export async function getProjectList(
  pageable?: Partial<PageableRequest>
): Promise<ResponseDtoListProjectListResponse> {
  const defaultParams: PageableRequest = {
    page: 0,
    size: 20,
    sort: ["createdAt"],
  };
  const params = { ...defaultParams, ...pageable };

  // ky의 searchParams 옵션을 사용하면 더 간결합니다.
  const searchParams = {
    page: params.page,
    size: params.size,
    sort: params.sort.join(","),
  };

  const data = await apiClient
    .get("api/v1/projects", {
      searchParams,
      // 캐시 옵션은 전역 클라이언트보다 개별 요청에서 설정하는 것이 더 유연합니다.
      next: { revalidate: 60 },
    })
    .json<ResponseDtoListProjectListResponse>();

  return data;
}
