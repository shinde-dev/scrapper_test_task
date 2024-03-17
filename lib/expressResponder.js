function Responder () {}

function sendResponse (res, status, body) {
  if (!res.headersSent) {
    if (body) {
      return res.status(status).json(body)
    }

    return res.status(status).send()
  }
}

Responder.success = (res, message) => {
  return sendResponse(res, 200, message)
}

Responder.operationFailed = (res, reason) => {
  const status = reason.status
  reason = reason.message || reason
  return sendResponse(res, status || 400, { reason })
}

module.exports = Responder
