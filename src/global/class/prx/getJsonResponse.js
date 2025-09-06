export const getJsonResponse = async (response) => {
  let data = null,
    text = "",
    validJson = false,
    validData = false,
    code = response.status,
    ok = response.ok

  try {
    data = await response.json()
    validJson = true
    validData = true
  } catch (error) {
    text = response.statusText
    console.error('Error parsing JSON response:', error)
  }
  return { data, text, ok, code, validJson, validData }
}
