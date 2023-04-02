import { 비디오, 비디오정보 } from './Video';

interface 비디오관리자 {
  비디오목록얻기: () => 비디오[];
  비디오정보얻기: (아아디: string) => 비디오정보;
  비디오다운로드하기: (아이디: string) => void;
}
