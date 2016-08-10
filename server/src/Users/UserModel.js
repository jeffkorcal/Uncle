import db from '../db/db-config';
import Sequelize from 'sequelize';

//generate a user model

let User = db.define('user', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  name: {
    type: Sequelize.STRING
  }, 
  access_token: {
    type: Sequelize.STRING
  },
  //Slack id retrieved at https://slack.com/api/users.list
  //and returns all member id in a team. slack_id under
  //members[n].id
  slack_user_id: {
    type: Sequelize.STRING
  },
  //team id retrieved at https://slack.com/api/team.info
  //and returns team info. team_id under team.id
  team_id: {
    type: Sequelize.STRING
  },
  email: {
    type: Sequelize.STRING
  }
});

User.sync()
  .then(err => {
    console.log('User table is connected')
  }, err => {
    console.log('An error occured while generating the User table.')
  });

export default User;

