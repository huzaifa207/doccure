import Repository, { baseUrl } from "./Repository";

class AppointmentsRepository {
  async getAppointments(payload) {
    console.log(payload);
    let query = "";

    payload.forEach((item) => {
      if (!query) {
        query = `slug_in=${item}`;
      } else {
        query += `&slug_in=${item}`;
      }
    });

    const response = await Repository.get(`${baseUrl}/appointments/${query}`)
      .then((response) => response.data)
      .catch((error) => ({ error: JSON.stringify(error) }));

    return response;
  }

  async getInvoicesByDoctor(payload) {}
}
export default new AppointmentsRepository();

let checkdata = new AppointmentsRepository();
checkdata.getAppointments();
