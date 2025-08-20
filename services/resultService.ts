import apiClient from "./apiClient";

type LookupRequest = {
  name: string;
  phone: string;
};

interface ResponseDtoLookupResponse {
  status: string;
  message: string;
  data: LookupResponse;
  timestamp: number;
}

interface LookupResponse {
  status: LookupEnum;
}

enum LookupEnum {
  PASS = "PASS",
  FAIL = "FAIL",
}

/**
 * @description 이름과 전화번호로 합격/불합격 여부를 조회하는 함수
 * @param request name, phone 정보를 담은 객체
 */
export async function getLookup(
  request: LookupRequest
): Promise<ResponseDtoLookupResponse> {
  // ky의 searchParams 옵션에 요청 객체를 그대로 전달하면
  // 알아서 query string(?name=...&phone=...)으로 변환해줍니다.
  const data = await apiClient
    .get("api/admissions/lookup", {
      searchParams: request,
      // 필요에 따라 캐시 옵션 추가
      // next: { revalidate: 3600 },
    })
    .json<ResponseDtoLookupResponse>();

  return data;
}
