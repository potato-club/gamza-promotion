import apiClient from "@/shared/api/apiClient";
import type {
  UserData,
  ResponseDtoLookupResponse,
} from "../model/types";

/**
 * @description 이름과 전화번호로 합격/불합격 여부를 조회하는 함수
 * @param request name, phone 정보를 담은 객체
 */
export async function getLookup(
  request: UserData
): Promise<ResponseDtoLookupResponse> {
  // POST 방식으로 요청 바디에 name과 phone 정보를 전송합니다.
  const data = await apiClient
    .post("api/admissions/lookup", {
      json: request,
      // 필요에 따라 캐시 옵션 추가
      // next: { revalidate: 3600 },
    })
    .json<ResponseDtoLookupResponse>();

  return data;
}
