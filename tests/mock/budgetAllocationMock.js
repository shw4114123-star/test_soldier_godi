


export const MOCK_BODY_FOR_BUDGET = {
    "unit": "momo",
    "benefitType": "giftCard",
    "month": "2026-02",
    "allocatedAmount": 12
}

export const FICK_ID_SUPA = 11
export const FICK_BODY = {
    "unit": "momo",
}
export function createbudgetMock(MOCK_BODY_FOR_BUDGET) {
    return { FICK_ID_SUPA, ...MOCK_BODY_FOR_BUDGET }
}

export function grtAllocationsMock() {
    return [{}, {}, {}]
}
