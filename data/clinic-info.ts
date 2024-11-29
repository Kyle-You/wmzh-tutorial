// 诊所相关信息
import type { BaseInfo, TimeInfo } from './types';

export interface ClinicInfo extends BaseInfo {
  address: string;
  phone: string;
  workTime: TimeInfo[];
}

export const clinicInfo: ClinicInfo = {
  id: 'main-clinic',
  name: '儿童预防接种门诊',
  address: '北京市海淀区XX街XX号',
  phone: '010-XXXXXXXX',
  workTime: [
    {
      startTime: '08:00',
      endTime: '11:30',
      duration: '上午'
    },
    {
      startTime: '14:00',
      endTime: '17:00',
      duration: '下午'
    }
  ],
  description: '提供儿童常规疫苗接种服务'
}; 