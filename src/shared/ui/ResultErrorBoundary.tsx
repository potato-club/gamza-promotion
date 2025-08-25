"use client";

import { Component, ErrorInfo, ReactNode } from "react";
import { Button } from "./button";

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
  errorInfo?: ErrorInfo;
}

export default class ResultErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("ResultErrorBoundary caught an error:", error, errorInfo);
    this.setState({
      error,
      errorInfo,
    });
  }

  handleReset = () => {
    this.setState({ hasError: false, error: undefined, errorInfo: undefined });
  };

  render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback;
      }

      return (
        <div className="relative flex h-screen w-screen items-center justify-center overflow-hidden bg-[#0F1112]">
          <div className="relative z-10 flex items-center justify-center">
            <div className="w-[400px] space-y-6 bg-white px-6 py-12 rounded-2xl shadow-md text-black text-center">
              <div className="text-6xl mb-4">💥</div>
              <div className="text-xl font-semibold text-black">
                예기치 못한 오류가 발생했습니다
              </div>
              <div className="text-gray-500 mb-4">
                페이지를 새로고침하거나 잠시 후 다시 시도해주세요.
              </div>
              {process.env.NODE_ENV === "development" && this.state.error && (
                <details className="text-left text-sm bg-gray-100 p-3 rounded mt-4">
                  <summary className="font-semibold cursor-pointer">
                    오류 세부사항 (개발 모드)
                  </summary>
                  <pre className="mt-2 whitespace-pre-wrap">
                    {this.state.error.toString()}
                    {this.state.errorInfo?.componentStack}
                  </pre>
                </details>
              )}
              <div className="flex gap-3">
                <Button
                  onClick={this.handleReset}
                  className="flex-1 bg-[#007AFF] rounded-2xl"
                >
                  다시 시도
                </Button>
                <Button
                  onClick={() => window.location.reload()}
                  variant="outline"
                  className="flex-1 rounded-2xl"
                >
                  새로고침
                </Button>
              </div>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
