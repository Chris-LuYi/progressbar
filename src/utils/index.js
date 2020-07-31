export const fetch = ({ url, option, payload, onSuccess, onError }) => {
  window
    .fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      ...option,
      ...(payload ? { body: JSON.stringify(payload) } : {}),
    })
    .then(async (r) => {
      if (r.ok) return r.json()

      const error = await r.json()

      throw error
    })
    .then(
      (r) => {
        if (onSuccess) onSuccess(r)
      },
      (error) => {
        if (onError) onError(error)
      },
    )
}
