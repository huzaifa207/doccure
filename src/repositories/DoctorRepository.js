import Repository, { baseUrl, serializeQuery } from "./Repository";

class DoctorRepository {
  async getDoctors(params) {
    let response = await Repository.get(
      `${baseUrl}/doctors?${serializeQuery(params)}`
    )
      .then((response) => {
        console.log(response);
        return response.data;
      })
      .catch((error) => ({ error: JSON.stringify(error) }));

    return response;
  }

  async getDoctorById(payload) {
    let response = await Respository.get(`${baseUrl}/doctors/${payload}`)
      .then((response) => {
        console.log(response);
        return response.data;
      })
      .catch((error) => ({ error: JSON.stringify(error) }));

    return response;
  }
}

let doctor = new DoctorRepository();
doctor.getDoctors();
doctor.getDoctorsTest();

export default new DoctorRepository();
