// 솔팀 데모 데이터 — 전부 가짜입니다. 실제 사업장·직원과 무관합니다.
window.SOTHIM_DEMO = {
  pin: '12345',
  months: ['2026-05', '2026-06'],
  snapshots: {
    '2026-06': {
      version: 1,
      publishedAt: '2026-07-10T14:00:00+09:00',
      targetMonth: '2026-06',
      workplace: { name: 'OO상사' },
      employees: [
        { name: '홍길동', payType: 'monthly', insurance: '4대보험',
          hireDate: '2024-03-04',
          monthPay: 2800000, yearPay: 16800000 },
        { name: '김알바', payType: 'hourly', insurance: '고용·산재',
          hireDate: '2025-11-01',
          monthPay: 1013500, yearPay: 5581000,
          hourly: { hours: 87, wage: 10500, workDays: 12 },
          allowances: [ { name: '식대', amount: 100000 } ] },
        { name: '박직원', payType: 'monthly', insurance: '4대보험',
          hireDate: '2023-07-01', leaveDate: '2026-06-15',
          proration: { days: 15, monthDays: 30 }, baseMonthPay: 2200000,
          monthPay: 1100000, yearPay: 12100000 },
        { name: '이프리', payType: 'monthly', insurance: '사업소득',
          monthPay: 1500000, yearPay: 9000000 }
      ],
      totals: { monthPay: 6413500, yearPay: 43481000, count: 4 }
    },
    '2026-05': {
      version: 1,
      publishedAt: '2026-06-10T14:00:00+09:00',
      targetMonth: '2026-05',
      workplace: { name: 'OO상사' },
      employees: [
        { name: '홍길동', payType: 'monthly', insurance: '4대보험',
          hireDate: '2024-03-04',
          monthPay: 2800000, yearPay: 14000000 },
        { name: '김알바', payType: 'hourly', insurance: '고용·산재',
          hireDate: '2025-11-01',
          monthPay: 924000, yearPay: 4567500,
          hourly: { hours: 88, wage: 10500, workDays: 11 } },
        { name: '박직원', payType: 'monthly', insurance: '4대보험',
          hireDate: '2023-07-01',
          monthPay: 2200000, yearPay: 11000000 },
        { name: '이프리', payType: 'monthly', insurance: '사업소득',
          monthPay: 1500000, yearPay: 7500000 }
      ],
      totals: { monthPay: 7424000, yearPay: 37067500, count: 4 }
    }
  }
};
