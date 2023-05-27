var house = 2;

var itr = 1;

var allMemData = [
  {
    "house_number": "1",
    "id": 1,
    "name": "dsfj",
    "gender": "Male",
    "age": "234",
    "citizenship_number": "324423"
  },
  {
    "house_number": "1",
    "id": 2,
    "name": "ppp",
    "gender": "Male",
    "age": "2343",
    "citizenship_number": "234342"
  },
  {
    "house_number": "1",
    "id": 3,
    "name": "sdfkjsdfj",
    "gender": "Male",
    "age": "234",
    "citizenship_number": "324"
  },
  {
    "house_number": "2",
    "id": 1,
    "name": "234kjflds",
    "gender": "Male",
    "age": "32434",
    "citizenship_number": "2343"
  },
  {
    "house_number": "2",
    "id": 2,
    "name": "jsdfkkj",
    "gender": "Male",
    "age": "2344432",
    "citizenship_number": "dskljfa"
  },
  {
    "house_number": "2",
    "id": 3,
    "name": "skdjaf",
    "gender": "Male",
    "age": "234",
    "citizenship_number": "kdslfja"
  },
  {
    "house_number": "2",
    "id": 4,
    "name": "skdjaf",
    "gender": "Male",
    "age": "234",
    "citizenship_number": "kdslfja"
  },
  {
    "house_number": "2",
    "id": 5,
    "name": "skdjaf",
    "gender": "Male",
    "age": "234",
    "citizenship_number": "kdslfja"
  }
]

function generateId() {
  if (allMemData.length != 0) {
    for (i = 0; i < allMemData.length; i++) {
      if (allMemData[i].house_number.toString() === house.toString()) {
        // console.log(allMemData[i]);
        if (allMemData[i].id.toString() != itr.toString()) {
          itr++;
          console.log(itr);
          break;
        } else {
          itr++;
        }
      }
    }
    return itr;
  } else {
    itr = 1;
    return itr;
  }
}



generateId();


console.log(itr);

