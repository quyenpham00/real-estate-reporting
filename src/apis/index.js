import axios from 'axios'

export const getHousePerProvince = async (province) => {
  try {
    const res = await axios.post(
      `https://localhost:7208/api/New/GetNumberOfHouseAProvince?provinceName=${province}`
    )
    return res.data
  } catch (error) {
    console.log(error)
  }
}

export const getProvinces = async () => {
  const res = await axios.get(
    'https://localhost:7208/api/New/GetAllProvinceInformation'
  )
  return res.data
}

export const getHouseType = async () => {
  const res = await axios.get('https://localhost:7208/api/New/GetHouseType')
  return res.data
}

export const getHouseByDate = async (date) => {
  try {
    const res = await axios.post(
      `https://localhost:7208/api/New/getHouseQuantitybydate?timeSelector=${date}`
    )
    return res.data
  } catch (error) {
    console.log(error)
  }
}
