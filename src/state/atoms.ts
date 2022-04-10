import { atom } from 'recoil'

export const fieldErrorsState = atom({
    key: 'fieldErrorsState',
    default: { // 각 필드가 조건을 만족하는지를 저장, 필드이름: true이면 에러가 있다는 뜻
    }
  })

export const submitBtnState = atom({
  key: 'submitBtnState',
  default: { // 비활성화 상태
    className: 'form-btn-disabled',
    disabled: true
  }
})

// ts 제네릭