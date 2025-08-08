import ky from "ky";

const apiClient = ky.create({
  prefixUrl: process.env.NEXT_PUBLIC_API_URL,
  headers: {
    "Content-Type": "application/json",
  },
  // Next.js 환경에서 API 응답을 캐시하지 않도록 설정 (개발 환경)
  cache: process.env.NODE_ENV === "development" ? "no-store" : "default",
  hooks: {
    // 요청 전 실행되는 훅
    beforeRequest: [
      request => {
        console.log("Request URL:", request.url);
      },
    ],
    // 요청 후 실행되는 훅
    afterResponse: [
      async (request, options, response) => {
        console.log("Response Status:", response.status);
        if (!response.ok) {
          // 응답 객체에서 오류 메시지를 추출하려고 시도
          let errorMessage = `HTTP error! status: ${response.status}`;
          try {
            const errorBody = await response.json();
            errorMessage += ` - ${JSON.stringify(errorBody)}`; // body 내용을 추가
          } catch (parseError) {
            console.error("Failed to parse error response body:", parseError);
            errorMessage += " - Failed to parse error response body";
          }
          throw new Error(errorMessage);
        }
      },
    ],
  },
});

export default apiClient;
