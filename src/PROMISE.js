/* eslint-disable camelcase */
export default function (body, success, fail, complete) {
  try {
    return body(res => {
      if (success) {
        success(res)
      }
      if (complete) {
        complete(res)
      }
    }, res => {
      if (fail) {
        fail(res)
      }
      if (complete) {
        complete(res)
      }
    },)
  } catch (e) {
    const res = {
      errMsg: e.message
    }
    if (fail) {
      fail(res)
    }
    if (complete) {
      complete(res)
    }
    return null
  }
}
