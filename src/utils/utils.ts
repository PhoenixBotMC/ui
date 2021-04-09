export default class Utils {
  static parseJson(data: string) {
    try {
      return JSON.parse(data);
    } catch (err) {
      return data;
    }
  }

  static parseServerLetters(name: string) {
    let res = "";
    name.split(" ").forEach((e) => {
      console.log(e);

      res += e[0];
    });

    console.log(res);

    return res;
  }
}
