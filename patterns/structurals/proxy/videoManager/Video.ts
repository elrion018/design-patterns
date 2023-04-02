type 확장자종류 = 'mp4' | 'avi' | 'wmv'; // 기타 다른 확장자들도 많으나 이 3개 까지..

interface 비디오생성자매개변수 {
  아이디: string;
  이름: string;
  재생시간: number;
  크기: number;
  확장자: 확장자종류;
}

export class 비디오 {
  private 아이디: string;
  private 이름: string;
  private 재생시간: number;
  private 크기: number;
  private 확장자: 확장자종류;

  constructor({ 아이디, 이름, 재생시간, 크기, 확장자 }: 비디오생성자매개변수) {
    // 원래 실제 파일을 매개변수로 받으면 좋으나, 예제이므로 대체

    this.아이디 = 아이디;
    this.이름 = 이름;
    this.재생시간 = 재생시간;
    this.크기 = 크기;
    this.확장자 = 확장자;
  }

  비디오정보얻기() {
    const { 아이디, 이름, 재생시간, 확장자, 크기 } = this;

    return { 아이디, 이름, 재생시간, 확장자, 크기 };
  }

  재생하기() {
    // 재생하는 로직 블라블라..
  }

  정지하기() {
    // 정지하는 로직 블라블라..
  }

  배속하기(배율: number) {
    // 배속하는 로직 블라블라..
  }

  // .. 다른 메소드들
}
