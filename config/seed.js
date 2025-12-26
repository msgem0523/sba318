const mongoose = require('mongoose');
const child_data = require('./models/child_data');
const health_record = require('./models/health_record');
const appointments = require('./models/appointments');

async function seedDatabase() {
  await mongoose.connect('cluster0-shard-00-00.skdmn.mongodb.net:27017', { useNewUrlParser: true, useUnifiedTopology: true });

  await child_data.deleteMany({});
  await health_record.deleteMany({});
  await appointments.deleteMany({});

  const createdChildren = await child_data.insertMany(childData);
  console.log("Children added:", createdChildren);

  const createdRecords = await health_record.insertMany(healthRecordData);
  console.log("Health records added:", createdRecords);

  const createdAppointments = await appointments.insertMany(appointmentData);
  console.log("Appointments added:", createdAppointments);

  mongoose.connection.close();
}

seedDatabase().catch(err => console.log(err));
