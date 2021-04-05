export default class Utils {
  static parseJson(data: string) {
    try {
      return JSON.parse(data);
    } catch (err) {
      return data;
    }
  }
}
