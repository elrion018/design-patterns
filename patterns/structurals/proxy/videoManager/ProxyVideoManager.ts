import { 진짜비디오관리자 } from './RealVideoManager';
import { 비디오, 비디오정보 } from './Video';
import { 비디오관리자, 비디오목록 } from './videoManager';

/**
 * 진짜비디오관리자에서 직접 비디오를 가져오는 행위는 고코스트이므로
 * 한번 가져오면 캐시했다가 같은 요청 시 재반환하는 프록시
 */
export class 프록시비디오관리자 implements 비디오관리자 {
  private 진짜디비오관리자인스턴스: 진짜비디오관리자;
  private 캐시된비디오목록: 비디오목록 | null;
  private 캐시된비디오정보: 비디오정보 | null;
  private 캐시된비디오: 비디오 | null;

  constructor(진짜디비오관리자인스턴스: 진짜비디오관리자) {
    this.진짜디비오관리자인스턴스 = 진짜디비오관리자인스턴스;
    this.캐시된비디오목록 = null;
    this.캐시된비디오정보 = null;
    this.캐시된비디오 = null;
  }

  비디오목록얻기(): 비디오목록 {
    if (!this.캐시된비디오목록)
      this.캐시된비디오목록 = this.진짜디비오관리자인스턴스.비디오목록얻기();

    return this.캐시된비디오목록;
  }

  비디오정보얻기(아이디: string): 비디오정보 {
    if (!this.캐시된비디오정보)
      this.캐시된비디오정보 =
        this.진짜디비오관리자인스턴스.비디오정보얻기(아이디);

    return this.캐시된비디오정보;
  }

  비디오다운로드하기(아이디: string): 비디오 {
    if (!this.캐시된비디오)
      this.캐시된비디오 =
        this.진짜디비오관리자인스턴스.비디오다운로드하기(아이디);

    return this.캐시된비디오;
  }
}
