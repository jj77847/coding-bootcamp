```graphql
query {
  schools {
    name
    location
    studentCount
  }
}

query {
  classes {
    name
  }
}

query {
  professors {
    name
  }
}

query {
  classes {
    name
    creditHours
    building
  }
}

query {
  professors {
    name
    studentScore
  }
}

query {
  professors {
    _id
    name
    studentScore
    officeHours
    officeLocation
  }
}

query Query {
  schools {
    _id
    name
    location
    studentCount
    classes {
      _id
      name
      building
      creditHours
      professor {
        _id
        name
        studentScore
        officeHours
        officeLocation
      }
    }
  }
}
```
