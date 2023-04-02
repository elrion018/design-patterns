type 확장자종류 = 'mp4' | 'avi' | 'wmv'; // 기타 다른 확장자들도 많으나 이 3개 까지..

interface 비디오생성자매개변수 {
  아이디: string;
  이름: string;
  재생시간: number;
  크기: number;
  확장자: 확장자종류;
}

export class 실제비디오파일 {
  // 여러가지 정의들 ..
}

export class 비디오 {
  private 아이디: string | null;
  private 이름: string | null;
  private 재생시간: number | null;
  private 크기: number | null;
  private 확장자: 확장자종류 | null;

  constructor(비디오파일: 실제비디오파일) {
    this.아이디 = null;
    this.이름 = null;
    this.재생시간 = null;
    this.크기 = null;
    this.확장자 = null;

    this.비디오정보파싱하기(비디오파일);
  }

  비디오정보파싱하기(비디오파일: 실제비디오파일) {
    // 아이디, 이름, 재생시간, 크기, 확장자 정보를 실제 파일에서 파싱 ...
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
