
test> show dbs
admin   40.00 KiB
config  12.00 KiB
local   72.00 KiB
test> use Human_resource
switched to db Human_resource
Human_resource> db.Employee.insertMany([{
...
...   "firstName": "John",
...   "lastName": "Doe",
...   "salary": "25000",
...   "department": "HR",
...   "lastCompany": "X",
...   "lastSalary": "10000",
...   "overallExp": "2",
...   "contactInfo": "1234567890",
...   "yearGrad": "2016",
...   "gradStream": "CSE"
... },{
...   "firstName": "Rohan",
...   "lastName": "Jame",
...   "salary": "30000",
...   "department": "Technical",
...   "lastCompany": "Y",
...   "lastSalary": "15000",
...   "overallExp": "1",
...   "contactInfo": "1234567860",
...   "yearGrad": "2015",
...   "gradStream": "CSE"
... },{
...   "firstName": "Jame",
...   "lastName": "Doe",
...   "salary": "35000",
...   "department": "Accounts",
...   "lastCompany": "Z",
...   "lastSalary": "20000",
...   "overallExp": "1",
...   "contactInfo": "123567890",
...   "yearGrad": "2019",
...   "gradStream": "ECE"
... },{
...
...   "firstName": "Sao",
...   "lastName": "Avika",
...   "salary": "30000",
...   "department": "Sales",
...   "lastCompany": "Y",
...   "lastSalary": "15000",
...   "overallExp": "2",
...   "contactInfo": "1234567860",
...   "yearGrad": "2015",
...   "gradStream": "CSE"
... },{
...   "firstName": "Jame",
...   "lastName": "roh",
...   "salary": "35000",
...   "department": "Accounts",
...   "lastCompany": "Z",
...   "lastSalary": "15000",
...   "overallExp": "2",
...   "contactInfo": "123567890",
...   "yearGrad": "2019",
...   "gradStream": "EEE"
... },{
...
...   "firstName": "Rohan",
...   "lastName": "Jame",
...   "salary": "30000",
...   "department": "Technical",
...   "lastCompany": "Y",
...   "lastSalary": "15000",
...   "overallExp": "1",
...   "contactInfo": "1234567860",
...   "yearGrad": "2015",
...   "gradStream": "CSE"
... },{
...
...   "firstName": "Jame",
...   "lastName": "Doe",
...   "salary": "35000",
...   "department": "Accounts",
...   "lastCompany": "Z",
...   "lastSalary": "20000",
...   "overallExp": "1",
...   "contactInfo": "123567890",
...   "yearGrad": "2019",
...   "gradStream": "ECE"
... },{
...
...   "firstName": "Sao",
...   "lastName": "Avika",
...   "salary": "30000",
...   "department": "Sales",
...   "lastCompany": "Y",
...   "lastSalary": "15000",
...   "overallExp": "2",
...   "contactInfo": "1234567860",
...   "yearGrad": "2015",
...   "gradStream": "CSE"
... },{
...
...   "firstName": "Jame",
...   "lastName": "Doe",
...   "salary": "35000",
...   "department": "Accounts",
...   "lastCompany": "Z",
...   "lastSalary": "15000",
...   "overallExp": "2",
...   "contactInfo": "123567890",
...   "yearGrad": "2019",
...   "gradStream": "EEE"
... },{
...
...   "firstName": "Rohan",
...   "lastName": "Jame",
...   "salary": "30000",
...   "department": "Technical",
...   "lastCompany": "Y",
...   "lastSalary": "15000",
...   "overallExp": "1",
...   "contactInfo": "1234567860",
...   "yearGrad": "2015",
...   "gradStream": "CSE"
... },{
...
...   "firstName": "Jame",
...   "lastName": "Doe",
...   "salary": "35000",
...   "department": "Accounts",
...   "lastCompany": "Z",
...   "lastSalary": "20000",
...   "overallExp": "1",
...   "contactInfo": "123567890",
...   "yearGrad": "2019",
...   "gradStream": "ECE"
... },{
...
...   "firstName": "Sao",
...   "lastName": "Avika",
...   "salary": "30000",
...   "department": "Sales",
...   "lastCompany": "Y",
...   "lastSalary": "15000",
...   "overallExp": "2",
...   "contactInfo": "1234567860",
...   "yearGrad": "2015",
...   "gradStream": "CSE"
... },{
...
...   "firstName": "Jame",
...   "lastName": "Doe",
...   "salary": "35000",
...   "department": "Accounts",
...   "lastCompany": "Z",
...   "lastSalary": "15000",
...   "overallExp": "2",
...   "contactInfo": "123567890",
...   "yearGrad": "2019",
...   "gradStream": "EEE"
... }])
{
  acknowledged: true,
  insertedIds: {
    '0': ObjectId("6349637a694826d7d14457b4"),
    '1': ObjectId("6349637a694826d7d14457b5"),
    '2': ObjectId("6349637a694826d7d14457b6"),
    '3': ObjectId("6349637a694826d7d14457b7"),
    '4': ObjectId("6349637a694826d7d14457b8"),
    '5': ObjectId("6349637a694826d7d14457b9"),
    '6': ObjectId("6349637a694826d7d14457ba"),
    '7': ObjectId("6349637a694826d7d14457bb"),
    '8': ObjectId("6349637a694826d7d14457bc"),
    '9': ObjectId("6349637a694826d7d14457bd"),
    '10': ObjectId("6349637a694826d7d14457be"),
    '11': ObjectId("6349637a694826d7d14457bf"),
    '12': ObjectId("6349637a694826d7d14457c0")
  }
}
Human_resource> db.Employee.find()
[
  {
    _id: ObjectId("6349637a694826d7d14457b4"),
    firstName: 'John',
    lastName: 'Doe',
    salary: '25000',
    department: 'HR',
    lastCompany: 'X',
    lastSalary: '10000',
    overallExp: '2',
    contactInfo: '1234567890',
    yearGrad: '2016',
    gradStream: 'CSE'
  },
  {
    _id: ObjectId("6349637a694826d7d14457b5"),
    firstName: 'Rohan',
    lastName: 'Jame',
    salary: '30000',
    department: 'Technical',
    lastCompany: 'Y',
    lastSalary: '15000',
    overallExp: '1',
    contactInfo: '1234567860',
    yearGrad: '2015',
    gradStream: 'CSE'
  },
  {
    _id: ObjectId("6349637a694826d7d14457b6"),
    firstName: 'Jame',
    lastName: 'Doe',
    salary: '35000',
    department: 'Accounts',
    lastCompany: 'Z',
    lastSalary: '20000',
    overallExp: '1',
    contactInfo: '123567890',
    yearGrad: '2019',
    gradStream: 'ECE'
  },
  {
    _id: ObjectId("6349637a694826d7d14457b7"),
    firstName: 'Sao',
    lastName: 'Avika',
    salary: '30000',
    department: 'Sales',
    lastCompany: 'Y',
    lastSalary: '15000',
    overallExp: '2',
    contactInfo: '1234567860',
    yearGrad: '2015',
    gradStream: 'CSE'
  },
  {
    _id: ObjectId("6349637a694826d7d14457b8"),
    firstName: 'Jame',
    lastName: 'roh',
    salary: '35000',
    department: 'Accounts',
    lastCompany: 'Z',
    lastSalary: '15000',
    overallExp: '2',
    contactInfo: '123567890',
    yearGrad: '2019',
    gradStream: 'EEE'
  },
  {
    _id: ObjectId("6349637a694826d7d14457b9"),
    firstName: 'Rohan',
    lastName: 'Jame',
    salary: '30000',
    department: 'Technical',
    lastCompany: 'Y',
    lastSalary: '15000',
    overallExp: '1',
    contactInfo: '1234567860',
    yearGrad: '2015',
    gradStream: 'CSE'
  },
  {
    _id: ObjectId("6349637a694826d7d14457ba"),
    firstName: 'Jame',
    lastName: 'Doe',
    salary: '35000',
    department: 'Accounts',
    lastCompany: 'Z',
    lastSalary: '20000',
    overallExp: '1',
    contactInfo: '123567890',
    yearGrad: '2019',
    gradStream: 'ECE'
  },
  {
    _id: ObjectId("6349637a694826d7d14457bb"),
    firstName: 'Sao',
    lastName: 'Avika',
    salary: '30000',
    department: 'Sales',
    lastCompany: 'Y',
    lastSalary: '15000',
    overallExp: '2',
    contactInfo: '1234567860',
    yearGrad: '2015',
    gradStream: 'CSE'
  },
  {
    _id: ObjectId("6349637a694826d7d14457bc"),
    firstName: 'Jame',
    lastName: 'Doe',
    salary: '35000',
    department: 'Accounts',
    lastCompany: 'Z',
    lastSalary: '15000',
    overallExp: '2',
    contactInfo: '123567890',
    yearGrad: '2019',
    gradStream: 'EEE'
  },
  {
    _id: ObjectId("6349637a694826d7d14457bd"),
    firstName: 'Rohan',
    lastName: 'Jame',
    salary: '30000',
    department: 'Technical',
    lastCompany: 'Y',
    lastSalary: '15000',
    overallExp: '1',
    contactInfo: '1234567860',
    yearGrad: '2015',
    gradStream: 'CSE'
  },
  {
    _id: ObjectId("6349637a694826d7d14457be"),
    firstName: 'Jame',
    lastName: 'Doe',
    salary: '35000',
    department: 'Accounts',
    lastCompany: 'Z',
    lastSalary: '20000',
    overallExp: '1',
    contactInfo: '123567890',
    yearGrad: '2019',
    gradStream: 'ECE'
  },
  {

Human_resource>

C:\Users\DELL>mongo
Current Mongosh Log ID: 634963b28a942d124cd71054
Connecting to:          mongodb://127.0.0.1:27017/?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+1.6.0
Using MongoDB:          6.0.2
Using Mongosh:          1.6.0

For mongosh info see: https://docs.mongodb.com/mongodb-shell/

------
   The server generated these startup warnings when booting
   2022-10-14T18:44:07.589+05:30: Access control is not enabled for the database. Read and write access to data and configuration is unrestricted
   2022-10-14T18:44:07.591+05:30: This server is bound to localhost. Remote systems will be unable to connect to this server. Start the server with --bind_ip <address> to specify which IP addresses it should serve responses from, or with --bind_ip_all to bind to all interfaces. If this behavior is desired, start the server with --bind_ip 127.0.0.1 to disable this warning
------

------
   Enable MongoDB's free cloud-based monitoring service, which will then receive and display
   metrics about your deployment (disk utilization, CPU, operation statistics, etc).

   The monitoring data will be available on a MongoDB website with a unique URL accessible to you
   and anyone you share the URL with. MongoDB may use this information to make product
   improvements and to suggest MongoDB products and deployment options to you.

   To enable free monitoring, run the following command: db.enableFreeMonitoring()
   To permanently disable this reminder, run the following command: db.disableFreeMonitoring()
------

test> show dbs
Human_resource   40.00 KiB
admin            40.00 KiB
config          108.00 KiB
local            72.00 KiB
test> use Human_resource
switched to db Human_resource
Human_resource> db.Employee.find()
[
  {
    _id: ObjectId("6349637a694826d7d14457b4"),
    firstName: 'John',
    lastName: 'Doe',
    salary: '25000',
    department: 'HR',
    lastCompany: 'X',
    lastSalary: '10000',
    overallExp: '2',
    contactInfo: '1234567890',
    yearGrad: '2016',
    gradStream: 'CSE'
  },
  {
    _id: ObjectId("6349637a694826d7d14457b5"),
    firstName: 'Rohan',
    lastName: 'Jame',
    salary: '30000',
    department: 'Technical',
    lastCompany: 'Y',
    lastSalary: '15000',
    overallExp: '1',
    contactInfo: '1234567860',
    yearGrad: '2015',
    gradStream: 'CSE'
  },
  {
    _id: ObjectId("6349637a694826d7d14457b6"),
    firstName: 'Jame',
    lastName: 'Doe',
    salary: '35000',
    department: 'Accounts',
    lastCompany: 'Z',
    lastSalary: '20000',
    overallExp: '1',
    contactInfo: '123567890',
    yearGrad: '2019',
    gradStream: 'ECE'
  },
  {
    _id: ObjectId("6349637a694826d7d14457b7"),
    firstName: 'Sao',
    lastName: 'Avika',
    salary: '30000',
    department: 'Sales',
    lastCompany: 'Y',
    lastSalary: '15000',
    overallExp: '2',
    contactInfo: '1234567860',
    yearGrad: '2015',
    gradStream: 'CSE'
  },
  {
    _id: ObjectId("6349637a694826d7d14457b8"),
    firstName: 'Jame',
    lastName: 'roh',
    salary: '35000',
    department: 'Accounts',
    lastCompany: 'Z',
    lastSalary: '15000',
    overallExp: '2',
    contactInfo: '123567890',
    yearGrad: '2019',
    gradStream: 'EEE'
  },
  {
    _id: ObjectId("6349637a694826d7d14457b9"),
    firstName: 'Rohan',
    lastName: 'Jame',
    salary: '30000',
    department: 'Technical',
    lastCompany: 'Y',
    lastSalary: '15000',
    overallExp: '1',
    contactInfo: '1234567860',
    yearGrad: '2015',
    gradStream: 'CSE'
  },
  {
    _id: ObjectId("6349637a694826d7d14457ba"),
    firstName: 'Jame',
    lastName: 'Doe',
    salary: '35000',
    department: 'Accounts',
    lastCompany: 'Z',
    lastSalary: '20000',
    overallExp: '1',
    contactInfo: '123567890',
    yearGrad: '2019',
    gradStream: 'ECE'
  },
  {
    _id: ObjectId("6349637a694826d7d14457bb"),
    firstName: 'Sao',
    lastName: 'Avika',
    salary: '30000',
    department: 'Sales',
    lastCompany: 'Y',
    lastSalary: '15000',
    overallExp: '2',
    contactInfo: '1234567860',
    yearGrad: '2015',
    gradStream: 'CSE'
  },
  {
    _id: ObjectId("6349637a694826d7d14457bc"),
    firstName: 'Jame',
    lastName: 'Doe',
    salary: '35000',
    department: 'Accounts',
    lastCompany: 'Z',
    lastSalary: '15000',
    overallExp: '2',
    contactInfo: '123567890',
    yearGrad: '2019',
    gradStream: 'EEE'
  },
  {
    _id: ObjectId("6349637a694826d7d14457bd"),
    firstName: 'Rohan',
    lastName: 'Jame',
    salary: '30000',
    department: 'Technical',
    lastCompany: 'Y',
    lastSalary: '15000',
    overallExp: '1',
    contactInfo: '1234567860',
    yearGrad: '2015',
    gradStream: 'CSE'
  },
  {
    _id: ObjectId("6349637a694826d7d14457be"),
    firstName: 'Jame',
    lastName: 'Doe',
    salary: '35000',
    department: 'Accounts',
    lastCompany: 'Z',
    lastSalary: '20000',
    overallExp: '1',
    contactInfo: '123567890',
    yearGrad: '2019',
    gradStream: 'ECE'
  },
  {
    _id: ObjectId("6349637a694826d7d14457bf"),
    firstName: 'Sao',
    lastName: 'Avika',
    salary: '30000',
    department: 'Sales',
    lastCompany: 'Y',
    lastSalary: '15000',
    overallExp: '2',
    contactInfo: '1234567860',
    yearGrad: '2015',
    gradStream: 'CSE'
  },
  {
    _id: ObjectId("6349637a694826d7d14457c0"),
    firstName: 'Jame',
    lastName: 'Doe',
    salary: '35000',
    department: 'Accounts',
    lastCompany: 'Z',
    lastSalary: '15000',
    overallExp: '2',
    contactInfo: '123567890',
    yearGrad: '2019',
    gradStream: 'EEE'
  }
]
Human_resource> db.Employee.find({overallExp:{$gte:"2"}})
[
  {
    _id: ObjectId("6349637a694826d7d14457b4"),
    firstName: 'John',
    lastName: 'Doe',
    salary: '25000',
    department: 'HR',
    lastCompany: 'X',
    lastSalary: '10000',
    overallExp: '2',
    contactInfo: '1234567890',
    yearGrad: '2016',
    gradStream: 'CSE'
  },
  {
    _id: ObjectId("6349637a694826d7d14457b7"),
    firstName: 'Sao',
    lastName: 'Avika',
    salary: '30000',
    department: 'Sales',
    lastCompany: 'Y',
    lastSalary: '15000',
    overallExp: '2',
    contactInfo: '1234567860',
    yearGrad: '2015',
    gradStream: 'CSE'
  },
  {
    _id: ObjectId("6349637a694826d7d14457b8"),
    firstName: 'Jame',
    lastName: 'roh',
    salary: '35000',
    department: 'Accounts',
    lastCompany: 'Z',
    lastSalary: '15000',
    overallExp: '2',
    contactInfo: '123567890',
    yearGrad: '2019',
    gradStream: 'EEE'
  },
  {
    _id: ObjectId("6349637a694826d7d14457bb"),
    firstName: 'Sao',
    lastName: 'Avika',
    salary: '30000',
    department: 'Sales',
    lastCompany: 'Y',
    lastSalary: '15000',
    overallExp: '2',
    contactInfo: '1234567860',
    yearGrad: '2015',
    gradStream: 'CSE'
  },
  {
    _id: ObjectId("6349637a694826d7d14457bc"),
    firstName: 'Jame',
    lastName: 'Doe',
    salary: '35000',
    department: 'Accounts',
    lastCompany: 'Z',
    lastSalary: '15000',
    overallExp: '2',
    contactInfo: '123567890',
    yearGrad: '2019',
    gradStream: 'EEE'
  },
  {
    _id: ObjectId("6349637a694826d7d14457bf"),
    firstName: 'Sao',
    lastName: 'Avika',
    salary: '30000',
    department: 'Sales',
    lastCompany: 'Y',
    lastSalary: '15000',
    overallExp: '2',
    contactInfo: '1234567860',
    yearGrad: '2015',
    gradStream: 'CSE'
  },
  {
    _id: ObjectId("6349637a694826d7d14457c0"),
    firstName: 'Jame',
    lastName: 'Doe',
    salary: '35000',
    department: 'Accounts',
    lastCompany: 'Z',
    lastSalary: '15000',
    overallExp: '2',
    contactInfo: '123567890',
    yearGrad: '2019',
    gradStream: 'EEE'
  }
]
Human_resource> db.Employee.find({salary:{$gt:"30000"}})
[
  {
    _id: ObjectId("6349637a694826d7d14457b6"),
    firstName: 'Jame',
    lastName: 'Doe',
    salary: '35000',
    department: 'Accounts',
    lastCompany: 'Z',
    lastSalary: '20000',
    overallExp: '1',
    contactInfo: '123567890',
    yearGrad: '2019',
    gradStream: 'ECE'
  },
  {
    _id: ObjectId("6349637a694826d7d14457b8"),
    firstName: 'Jame',
    lastName: 'roh',
    salary: '35000',
    department: 'Accounts',
    lastCompany: 'Z',
    lastSalary: '15000',
    overallExp: '2',
    contactInfo: '123567890',
    yearGrad: '2019',
    gradStream: 'EEE'
  },
  {
    _id: ObjectId("6349637a694826d7d14457ba"),
    firstName: 'Jame',
    lastName: 'Doe',
    salary: '35000',
    department: 'Accounts',
    lastCompany: 'Z',
    lastSalary: '20000',
    overallExp: '1',
    contactInfo: '123567890',
    yearGrad: '2019',
    gradStream: 'ECE'
  },
  {
    _id: ObjectId("6349637a694826d7d14457bc"),
    firstName: 'Jame',
    lastName: 'Doe',
    salary: '35000',
    department: 'Accounts',
    lastCompany: 'Z',
    lastSalary: '15000',
    overallExp: '2',
    contactInfo: '123567890',
    yearGrad: '2019',
    gradStream: 'EEE'
  },
  {
    _id: ObjectId("6349637a694826d7d14457be"),
    firstName: 'Jame',
    lastName: 'Doe',
    salary: '35000',
    department: 'Accounts',
    lastCompany: 'Z',
    lastSalary: '20000',
    overallExp: '1',
    contactInfo: '123567890',
    yearGrad: '2019',
    gradStream: 'ECE'
  },
  {
    _id: ObjectId("6349637a694826d7d14457c0"),
    firstName: 'Jame',
    lastName: 'Doe',
    salary: '35000',
    department: 'Accounts',
    lastCompany: 'Z',
    lastSalary: '15000',
    overallExp: '2',
    contactInfo: '123567890',
    yearGrad: '2019',
    gradStream: 'EEE'
  }
]
Human_resource> db.Employee.find({yearGrad:{$gt:"2015"},overallExp:{$gt:"1"}})
[
  {
    _id: ObjectId("6349637a694826d7d14457b4"),
    firstName: 'John',
    lastName: 'Doe',
    salary: '25000',
    department: 'HR',
    lastCompany: 'X',
    lastSalary: '10000',
    overallExp: '2',
    contactInfo: '1234567890',
    yearGrad: '2016',
    gradStream: 'CSE'
  },
  {
    _id: ObjectId("6349637a694826d7d14457b8"),
    firstName: 'Jame',
    lastName: 'roh',
    salary: '35000',
    department: 'Accounts',
    lastCompany: 'Z',
    lastSalary: '15000',
    overallExp: '2',
    contactInfo: '123567890',
    yearGrad: '2019',
    gradStream: 'EEE'
  },
  {
    _id: ObjectId("6349637a694826d7d14457bc"),
    firstName: 'Jame',
    lastName: 'Doe',
    salary: '35000',
    department: 'Accounts',
    lastCompany: 'Z',
    lastSalary: '15000',
    overallExp: '2',
    contactInfo: '123567890',
    yearGrad: '2019',
    gradStream: 'EEE'
  },
  {
    _id: ObjectId("6349637a694826d7d14457c0"),
    firstName: 'Jame',
    lastName: 'Doe',
    salary: '35000',
    department: 'Accounts',
    lastCompany: 'Z',
    lastSalary: '15000',
    overallExp: '2',
    contactInfo: '123567890',
    yearGrad: '2019',
    gradStream: 'EEE'
  }
]
Human_resource> db.Employee.updateMany({salary:{$gt:"70000"}},{$set:{salary:"65000"}})
{
  acknowledged: true,
  insertedId: null,
  matchedCount: 0,
  modifiedCount: 0,
  upsertedCount: 0
}
Human_resource> db.Employee.deleteMany({lastCompany:"Y"})
{ acknowledged: true, deletedCount: 6 }
Human_resource> db.Employee.find()
[
  {
    _id: ObjectId("6349637a694826d7d14457b4"),
    firstName: 'John',
    lastName: 'Doe',
    salary: '25000',
    department: 'HR',
    lastCompany: 'X',
    lastSalary: '10000',
    overallExp: '2',
    contactInfo: '1234567890',
    yearGrad: '2016',
    gradStream: 'CSE'
  },
  {
    _id: ObjectId("6349637a694826d7d14457b6"),
    firstName: 'Jame',
    lastName: 'Doe',
    salary: '35000',
    department: 'Accounts',
    lastCompany: 'Z',
    lastSalary: '20000',
    overallExp: '1',
    contactInfo: '123567890',
    yearGrad: '2019',
    gradStream: 'ECE'
  },
  {
    _id: ObjectId("6349637a694826d7d14457b8"),
    firstName: 'Jame',
    lastName: 'roh',
    salary: '35000',
    department: 'Accounts',
    lastCompany: 'Z',
    lastSalary: '15000',
    overallExp: '2',
    contactInfo: '123567890',
    yearGrad: '2019',
    gradStream: 'EEE'
  },
  {
    _id: ObjectId("6349637a694826d7d14457ba"),
    firstName: 'Jame',
    lastName: 'Doe',
    salary: '35000',
    department: 'Accounts',
    lastCompany: 'Z',
    lastSalary: '20000',
    overallExp: '1',
    contactInfo: '123567890',
    yearGrad: '2019',
    gradStream: 'ECE'
  },
  {
    _id: ObjectId("6349637a694826d7d14457bc"),
    firstName: 'Jame',
    lastName: 'Doe',
    salary: '35000',
    department: 'Accounts',
    lastCompany: 'Z',
    lastSalary: '15000',
    overallExp: '2',
    contactInfo: '123567890',
    yearGrad: '2019',
    gradStream: 'EEE'
  },
  {
    _id: ObjectId("6349637a694826d7d14457be"),
    firstName: 'Jame',
    lastName: 'Doe',
    salary: '35000',
    department: 'Accounts',
    lastCompany: 'Z',
    lastSalary: '20000',
    overallExp: '1',
    contactInfo: '123567890',
    yearGrad: '2019',
    gradStream: 'ECE'
  },
  {
    _id: ObjectId("6349637a694826d7d14457c0"),
    firstName: 'Jame',
    lastName: 'Doe',
    salary: '35000',
    department: 'Accounts',
    lastCompany: 'Z',
    lastSalary: '15000',
    overallExp: '2',
    contactInfo: '123567890',
    yearGrad: '2019',
    gradStream: 'EEE'
  }
]