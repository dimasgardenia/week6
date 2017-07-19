class student {
  constructor(name,age,dateOfBirth,gender,studentId,hobbies) {
    this.name = name;
    this.age = age;
    this.dateOfBirth = dateOfBirth;
    this.gender = gender;
    this.studentId = studentId;
    this.hobbies = hobbies;
  }

  Name(namaBaru) {
    this.name = namaBaru;
  }

  Age(umurBaru) {
    this.age = umurBaru;
  }

  DateOfBirth(tanggalBaru){
    this.dateOfBirth = tanggalBaru
  }

  Gender(kelaminBaru){
    if (kelaminBaru === 'male' || kelaminBaru === 'female'){
      this.gender = kelaminBaru;
    } else {
      return 'gender tidak tersedia';
    }
  }

  addHobby(hobiBaru){
    this.hobbies.push(hobiBaru);
  }

  removeHobby(buangHobi){
    for (let j = 0; j < this.hobbies.length; j++) {
      if (this.hobbies[i] === buangHobi) {
        this.hobbies.splice(j,1);
      }
    }
  }

  getData(){
    console.log('Nama : '+ this.name);
    console.log('Umur : '+ this.age);
    console.log('Tanggal Lahir : '+ this.dateOfBirth);
    console.log('Gender : '+ this.gender);
    console.log('Student ID : '+ this.studentId);
    console.log('Hobbies : ');
    for (var j = 0; j < this.hobbies.length; j++) {
      console.log('Hobi '+j+' adalah '+this.hobbies[j]);
    }
  }

}

let dataMurid = new student('Rio',"22",'22 februari 1994','male','102',['coding','main']);
dataMurid.getData();
