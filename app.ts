const a: number = 1;
const b: string = 'hyungjun';

const Plus = (a: number, b: number) => {
  return a + b;
};

enum GenderType {
  Male = 'male',
  Femail = 'femail',
}

interface Student {
  gender: string;
  name: string;
  age: number;
  setName: (name: string) => void;
}

class person implements Student {
  gender = 'string';
  name = 'string';
  age = 25;
  setName(name: string) {
    console.log(name);
  }
}

const hyunjun = new person();
hyunjun.setName('hungjun');
